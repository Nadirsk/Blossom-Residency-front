// Dedicated SEO landing pages — single source of truth for the sitemap and for
// internal linking in the footer. Each targets its own keyword cluster.
export const SEO_PAGES = [
  { path: "/1-bhk-flats-in-dombivli-east", label: "1 BHK Flats in Dombivli East" },
  { path: "/2-bhk-flats-in-dombivli-east", label: "2 BHK Flats in Dombivli East" },
  { path: "/new-projects-in-dombivli-east", label: "New Projects in Dombivli East" },
  { path: "/price", label: "Price & Payment Plan" },
  { path: "/location", label: "Location & Connectivity" },
  { path: "/amenities", label: "Amenities" },
  { path: "/blog", label: "Blog" },
] as const;

export const BLOG_POSTS = [
  {
    slug: "is-dombivli-east-good-for-property-investment-in-2026",
    title: "Is Dombivli East Good for Property Investment in 2026?",
    excerpt:
      "A data-led look at why Dombivli East — and the Nilje corridor opposite Xperia Mall — is one of the Mumbai Metropolitan Region's fastest-growing affordable-housing markets.",
    datePublished: "2026-06-20",
    readMins: 6,
  },
] as const;

export const blogPath = (slug: string) => `/blog/${slug}`;
