import HomePageClient from "@/components/HomePageClient";
import { FOUNDERS } from "@/data/companyProfile";
import {
  buildLocalBusinessSchema,
  buildPageMetadata,
  buildPersonSchema,
  buildWebPageSchema,
} from "@/lib/seo";

const homeTitle = "Global Scrap Metal Buyer | Aluminium & Copper";
const homeDescription =
  "We buy scrap metal for global industry. Sell aluminium and copper to Enreach Global. Share your grade, quantity and location to start a buying discussion.";
const homeKeywords = [
  "industrial metal scrap trading company",
  "aluminium scrap buyer",
  "copper scrap buyer",
  "bulk scrap export",
  "industrial metal trading",
  "global scrap sourcing",
  "scrap trading company canada",
];

export const metadata = buildPageMetadata({
  title: homeTitle,
  description: homeDescription,
  keywords: homeKeywords,
  path: "/",
});

export default function HomePage() {
  const structuredData = [
    buildLocalBusinessSchema(),
    ...FOUNDERS.map((founder) =>
      buildPersonSchema({
        name: founder.name,
        jobTitle: founder.designation,
        description: founder.story,
        sameAs: [founder.linkedin],
        email: founder.email.replace("mailto:", ""),
        knowsAbout: founder.expertise,
      })
    ),
    buildWebPageSchema({
      title: homeTitle,
      description: homeDescription,
      path: "/",
      keywords: homeKeywords,
    }),
  ];

  return (
    <>
      {structuredData.map((schema, index) => (
        <script
          key={`${schema["@type"]}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
      <HomePageClient />
    </>
  );
}
