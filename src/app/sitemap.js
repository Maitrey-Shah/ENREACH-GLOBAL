import { getAllBlogPosts } from "@/data/blogPosts";
import { buildCanonicalUrl } from "@/lib/site";
import { MATERIAL_GROUPS } from "@/data/procurement";

export default function sitemap() {
  const staticRoutes = [
    {
      path: "/",
      lastModified: new Date("2026-05-06"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      path: "/blog",
      lastModified: new Date("2026-05-06"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const blogRoutes = getAllBlogPosts().map((post) => ({
    path: `/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const materialRoutes = MATERIAL_GROUPS.flatMap(group => [
    { path: `/what-we-buy/${group.id}`, changeFrequency: "monthly", priority: 0.9 },
    ...group.products.map(product => ({ path: `/what-we-buy/${group.id}/${product.id}`, changeFrequency: "monthly", priority: 0.8 })),
  ]);
  return [...staticRoutes, ...blogRoutes, ...materialRoutes,
    { path: "/what-we-buy", changeFrequency: "monthly", priority: 0.9 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.9 },
    { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.3 },
  ].map((entry) => ({
    url: buildCanonicalUrl(entry.path),
    lastModified: entry.lastModified,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
