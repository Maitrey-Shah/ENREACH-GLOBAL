export const runtime = "nodejs";

// Cache resolved Place ID in module scope so it only needs one lookup per
// cold-start. Reviews themselves are cached for 1 hour via response headers.
let cachedPlaceId = null;

const BUSINESS_QUERY = "Enreach Global Inc Calgary Alberta";
const PLACES_API_BASE = "https://places.googleapis.com/v1";

/**
 * Resolve the Google Place ID for Enreach Global Inc. using the
 * Places API (New) Text Search endpoint. The result is cached in module
 * scope so subsequent requests within the same server instance skip this
 * network call.
 */
async function resolvePlaceId(apiKey) {
  if (cachedPlaceId) return cachedPlaceId;

  const response = await fetch(`${PLACES_API_BASE}/places:searchText`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": "places.id,places.displayName,places.formattedAddress",
    },
    body: JSON.stringify({ textQuery: BUSINESS_QUERY, maxResultCount: 1 }),
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(`Place search failed (${response.status}): ${text}`);
  }

  const data = await response.json();
  const place = data?.places?.[0];

  if (!place?.id) {
    throw new Error("Enreach Global Inc. not found in Google Places.");
  }

  cachedPlaceId = place.id;
  return cachedPlaceId;
}

/**
 * Fetch Place Details (rating, userRatingCount, reviews, googleMapsUri)
 * using the Places API (New) Place Details endpoint.
 */
async function fetchPlaceDetails(apiKey, placeId) {
  const fieldMask = [
    "id",
    "displayName",
    "rating",
    "userRatingCount",
    "reviews",
    "googleMapsUri",
    "googleMapsLinks",
  ].join(",");

  const response = await fetch(`${PLACES_API_BASE}/places/${placeId}`, {
    method: "GET",
    headers: {
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": fieldMask,
    },
  });

  if (!response.ok) {
    const text = await response.text().catch(() => "");
    throw new Error(`Place details failed (${response.status}): ${text}`);
  }

  return response.json();
}

/**
 * Normalise the raw Places API (New) review objects into a lean shape
 * that the frontend component can consume directly.
 */
function normaliseReviews(rawReviews = []) {
  return rawReviews
    .filter((r) => r?.text?.text && r?.rating)
    .map((r) => ({
      authorName: r.authorAttribution?.displayName ?? "Google Reviewer",
      authorPhoto: r.authorAttribution?.photoUri ?? null,
      authorUri: r.authorAttribution?.uri ?? null,
      rating: r.rating,
      text: r.text.text,
      // publishTime comes as an ISO-8601 string
      publishTime: r.publishTime ?? null,
      relativeTime: r.relativePublishTimeDescription ?? null,
    }));
}

export async function GET() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return Response.json(
      { error: "GOOGLE_MAPS_API_KEY is not configured." },
      { status: 503 }
    );
  }

  try {
    const placeId = await resolvePlaceId(apiKey);
    const details = await fetchPlaceDetails(apiKey, placeId);

    const payload = {
      placeId,
      businessName: details.displayName?.text ?? "Enreach Global Inc.",
      rating: details.rating ?? null,
      reviewCount: details.userRatingCount ?? null,
      // googleMapsUri  → place overview page
      googleMapsUri: details.googleMapsUri ?? `https://maps.google.com/?q=Enreach+Global+Inc+Calgary`,
      // reviewsUri → direct reviews list page (googleMapsLinks.reviewsUri from Places API New)
      reviewsUri:
        details.googleMapsLinks?.reviewsUri ??
        details.googleMapsUri ??
        `https://maps.google.com/?q=Enreach+Global+Inc+Calgary`,
      // writeAReviewUri → direct "write a review" page
      writeAReviewUri: details.googleMapsLinks?.writeAReviewUri ?? null,
      reviews: normaliseReviews(details.reviews),
    };

    return Response.json(payload, {
      headers: {
        // Cache for 1 hour on the CDN/browser; allow stale-while-revalidate
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=7200",
      },
    });
  } catch (err) {
    console.error("[/api/reviews] Error:", err?.message ?? err);

    return Response.json(
      { error: err?.message ?? "Failed to fetch Google reviews." },
      { status: 502 }
    );
  }
}
