import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/data";
import { SEO_PAGES, BLOG_POSTS, blogPath } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Per-path crawl priority — commercial config pages rank highest after home.
  const priorityFor = (path: string) => {
    if (path.includes("bhk") || path.includes("new-projects")) return 0.9;
    if (path === "/blog") return 0.5;
    return 0.8;
  };

  const pages: MetadataRoute.Sitemap = SEO_PAGES.map((p) => ({
    url: `${SITE_URL}${p.path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: priorityFor(p.path),
  }));

  const posts: MetadataRoute.Sitemap = BLOG_POSTS.map((b) => ({
    url: `${SITE_URL}${blogPath(b.slug)}`,
    lastModified: new Date(b.datePublished),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    ...pages,
    ...posts,
  ];
}
