"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

// ─── Google G Logo ────────────────────────────────────────────────────────────
function GoogleLogo({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-label="Google">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}

// ─── Star Rating ──────────────────────────────────────────────────────────────
function StarIcon({ filled = true, className = "" }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill={filled ? "#f59e0b" : "none"} stroke="#f59e0b" strokeWidth={filled ? 0 : 1.5} className={className}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.951 2.878c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.062 9.384c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.951-.69l1.285-3.957z" />
    </svg>
  );
}

function StarRating({ rating = 5, max = 5 }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of ${max} stars`}>
      {Array.from({ length: max }, (_, i) => (
        <StarIcon key={i} filled={i < Math.round(rating)} className="h-4 w-4" />
      ))}
    </div>
  );
}

// ─── Arrow Button ─────────────────────────────────────────────────────────────
function ArrowButton({ direction, onClick, disabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "prev" ? "Previous reviews" : "Next reviews"}
      className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-950 disabled:cursor-not-allowed disabled:opacity-30"
    >
      <svg aria-hidden="true" viewBox="0 0 20 20" fill="none" className="h-5 w-5">
        {direction === "prev"
          ? <path d="m12.5 15-5-5 5-5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          : <path d="m7.5 5 5 5-5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        }
      </svg>
    </button>
  );
}

// ─── Single Review Card ───────────────────────────────────────────────────────
function ReviewCard({ review, mapsUrl }) {
  const [imgError, setImgError] = useState(false);

  const initials = review.authorName
    .split(" ").slice(0, 2).map((p) => p[0]).join("").toUpperCase();

  const formattedDate = review.publishTime
    ? new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(new Date(review.publishTime))
    : review.relativeTime ?? "";

  return (
    <article className="flex h-full flex-col rounded-[28px] border border-slate-200/80 bg-white p-7 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.22)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_70px_-36px_rgba(15,23,42,0.3)]">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border border-slate-100 bg-[#dbe8f5]">
            {review.authorPhoto && !imgError ? (
              <Image
                src={review.authorPhoto}
                alt={review.authorName}
                fill
                sizes="48px"
                className="object-cover"
                onError={() => setImgError(true)}
                unoptimized
              />
            ) : (
              <span className="flex h-full w-full items-center justify-center text-sm font-semibold text-[#1e4d7b]">
                {initials}
              </span>
            )}
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-950">{review.authorName}</p>
            {formattedDate && <p className="mt-0.5 text-xs text-slate-400">{formattedDate}</p>}
          </div>
        </div>
        <GoogleLogo className="h-6 w-6 flex-shrink-0" />
      </div>

      <div className="mt-4">
        <StarRating rating={review.rating} />
      </div>

      <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 line-clamp-5">
        {review.text}
      </p>

      <a
        href={mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#1e4d7b] transition-colors duration-200 hover:text-[#2a6099]"
        aria-label={`Read all Google reviews for Enreach Global Inc.`}
      >
        <GoogleLogo className="h-3.5 w-3.5" />
        View on Google
      </a>
    </article>
  );
}

// ─── Skeleton Card ────────────────────────────────────────────────────────────
function SkeletonCard() {
  return (
    <div className="flex h-full flex-col rounded-[28px] border border-slate-200/80 bg-white p-7 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.14)]">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 flex-shrink-0 animate-pulse rounded-full bg-slate-100" />
        <div className="flex-1 space-y-2">
          <div className="h-3 w-28 animate-pulse rounded-full bg-slate-100" />
          <div className="h-2.5 w-16 animate-pulse rounded-full bg-slate-100" />
        </div>
      </div>
      <div className="mt-4 flex gap-1">
        {[...Array(5)].map((_, i) => <div key={i} className="h-4 w-4 animate-pulse rounded bg-slate-100" />)}
      </div>
      <div className="mt-4 space-y-2">
        <div className="h-3 w-full animate-pulse rounded-full bg-slate-100" />
        <div className="h-3 w-5/6 animate-pulse rounded-full bg-slate-100" />
        <div className="h-3 w-4/6 animate-pulse rounded-full bg-slate-100" />
      </div>
    </div>
  );
}

// ─── CTA state shown when API key is not yet configured ───────────────────────
// reviewsUri format from Places API (New) googleMapsLinks.reviewsUri
// This opens the reviews list directly, not the overview page.
// Fallback: Google Maps search with ?hl=en is the closest public equivalent.
const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/search/Enreach+Global+Inc+Calgary+Alberta";
const GOOGLE_WRITE_REVIEW_URL =
  "https://www.google.com/maps/search/Enreach+Global+Inc+Calgary+Alberta";

function NoApiKeyState() {
  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-3">
      {/* Left wide card — CTA */}
      <div className="lg:col-span-2 flex flex-col justify-between rounded-[28px] border border-slate-200/80 bg-white p-8 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.22)]">
        <div>
          <div className="flex items-center gap-3">
            <GoogleLogo className="h-9 w-9" />
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Google Reviews</p>
          </div>
          <div className="mt-5 flex items-center gap-2">
            {[1,2,3,4,5].map((i) => <StarIcon key={i} filled className="h-6 w-6" />)}
            <span className="ml-1 text-2xl font-semibold text-slate-950">5.0</span>
          </div>
          <h3 className="mt-4 text-2xl font-semibold text-slate-950">
            See what our clients say about Enreach Global
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Verified reviews from industrial buyers, suppliers, and trade partners on Google. Click below to read real feedback from our clients.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800"
          >
            <GoogleLogo className="h-4 w-4" />
            Read Our Google Reviews
          </a>
          <a
            href={GOOGLE_WRITE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-50"
          >
            Leave a Review
          </a>
        </div>
      </div>

      {/* Right column — two stat cards */}
      <div className="flex flex-col gap-6">
        <div className="flex-1 rounded-[28px] border border-slate-200/80 bg-[#f7f4ef] p-7 shadow-[0_16px_40px_-28px_rgba(15,23,42,0.18)]">
          <GoogleLogo className="h-8 w-8" />
          <p className="mt-5 text-4xl font-semibold text-slate-950">5.0</p>
          <div className="mt-2">
            <StarRating rating={5} />
          </div>
          <p className="mt-3 text-sm text-slate-600">Average Google rating</p>
        </div>
        <div className="flex-1 rounded-[28px] border border-[#1e4d7b]/20 bg-[#1e4d7b] p-7 shadow-[0_16px_40px_-28px_rgba(30,77,123,0.4)]">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">Verified</p>
          <p className="mt-4 text-4xl font-semibold text-white">Google</p>
          <p className="mt-1 text-base font-medium text-white/80">Business Profile</p>
          <p className="mt-3 text-sm leading-6 text-white/60">
            Enreach Global Inc. — Calgary, Alberta, Canada
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────
export default function GoogleReviewsSection() {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState("loading"); // "loading" | "live" | "cta"
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const touchStartX = useRef(null);

  // ── Fetch ──────────────────────────────────────────────────────────────────
  useEffect(() => {
    let cancelled = false;
    fetch("/api/reviews")
      .then((r) => r.json())
      .then((json) => {
        if (cancelled) return;
        if (json.error || !json.reviews?.length) {
          setStatus("cta");
        } else {
          setData(json);
          setStatus("live");
        }
      })
      .catch(() => { if (!cancelled) setStatus("cta"); });
    return () => { cancelled = true; };
  }, []);

  // ── Reduced motion ─────────────────────────────────────────────────────────
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mq.matches);
    const h = (e) => setIsReducedMotion(e.matches);
    mq.addEventListener("change", h);
    return () => mq.removeEventListener("change", h);
  }, []);

  const reviews = data?.reviews ?? [];
  const total = reviews.length;

  const clamp = useCallback((i) => total === 0 ? 0 : ((i % total) + total) % total, [total]);
  const next = useCallback(() => setIndex((i) => clamp(i + 1)), [clamp]);
  const prev = useCallback(() => setIndex((i) => clamp(i - 1)), [clamp]);

  // ── Auto-slide ─────────────────────────────────────────────────────────────
  useEffect(() => {
    if (isReducedMotion || isPaused || total < 2) return;
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, [isReducedMotion, isPaused, total, next]);

  // ── Touch swipe ────────────────────────────────────────────────────────────
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  const visibleCards = total > 0
    ? [0, 1, 2].map((offset) => reviews[clamp(index + offset)])
    : [];

  return (
    <section
      className="px-5 py-20 sm:px-6 lg:px-8"
      aria-label="Client reviews"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-7xl">

        {/* ── Section heading ── */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between" data-reveal>
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-slate-500">
              Client Reviews
            </p>
            <h2 className="mt-3 text-4xl leading-tight font-semibold text-slate-950 md:text-5xl">
              What Our Clients Say
            </h2>
          </div>

          {/* Rating badge — links to reviews list page */}
          {status === "live" && data && (
            <a
              href={data.reviewsUri}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-shrink-0 items-center gap-4 rounded-[22px] border border-slate-200/80 bg-white px-6 py-4 shadow-[0_16px_40px_-24px_rgba(15,23,42,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-24px_rgba(15,23,42,0.28)]"
              aria-label={`Rated ${data.rating} out of 5 on Google — ${data.reviewCount} reviews. Opens Google reviews page.`}
            >
              <GoogleLogo className="h-7 w-7 flex-shrink-0" />
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-semibold text-slate-950">
                    {data.rating?.toFixed(1)}
                  </span>
                  <StarRating rating={data.rating} />
                </div>
                <p className="mt-0.5 text-xs font-medium text-slate-500">
                  {data.reviewCount?.toLocaleString()} Google Reviews
                </p>
              </div>
            </a>
          )}
        </div>

        {/* ── Loading skeletons ── */}
        {status === "loading" && (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <SkeletonCard />
            <div className="hidden sm:block"><SkeletonCard /></div>
            <div className="hidden lg:block"><SkeletonCard /></div>
          </div>
        )}

        {/* ── CTA state (no API key or no reviews returned) ── */}
        {status === "cta" && <NoApiKeyState />}

        {/* ── Live carousel ── */}
        {status === "live" && reviews.length > 0 && (
          <>
            <div
              className="mt-10 overflow-hidden"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <div
                key={index}
                className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 ${isReducedMotion ? "" : "animate-reviews-fadein"}`}
              >
                {visibleCards.map((review, pos) => (
                  <div
                    key={`${review.authorName}-${index}-${pos}`}
                    className={pos === 1 ? "hidden sm:block" : pos === 2 ? "hidden lg:block" : ""}
                  >
                    <ReviewCard review={review} mapsUrl={data.reviewsUri} />
                  </div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="mt-8 flex items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Review navigation">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={i === index}
                    aria-label={`Go to review ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === index ? "h-2.5 w-8 bg-slate-950" : "h-2.5 w-2.5 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <ArrowButton direction="prev" onClick={prev} disabled={total < 2} />
                <ArrowButton direction="next" onClick={next} disabled={total < 2} />
              </div>
            </div>
          </>
        )}

      </div>

      <style>{`
        @keyframes reviews-fadein {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-reviews-fadein {
          animation: reviews-fadein 0.35s ease both;
        }
      `}</style>
    </section>
  );
}
