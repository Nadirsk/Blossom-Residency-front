import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import RelatedPages from "@/components/RelatedPages";
import CtaBand from "@/components/CtaBand";
import { buildPageJsonLd, jsonLdScript } from "@/lib/seo";
import { SITE_URL } from "@/lib/data";
import { BLOG_POSTS, blogPath } from "@/lib/routes";

const PATH = "/blog";
const DESCRIPTION =
  "Insights on buying property in Dombivli East — investment, connectivity, configurations and home-buying tips from the Blossom Residency team.";

export const metadata: Metadata = {
  title: "Blog",
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: "Blog | Blossom Residency, Dombivli East",
    description: DESCRIPTION,
    url: `${SITE_URL}${PATH}`,
    images: ["/images/hero.png"],
  },
};

export default function Page() {
  const ld = buildPageJsonLd({
    path: PATH,
    name: "Blog — Blossom Residency, Dombivli East",
    description: DESCRIPTION,
    crumbs: [
      { name: "Home", path: "/" },
      { name: "Blog", path: PATH },
    ],
  });

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(ld)} />

      <PageHero
        eyebrow="Insights"
        title="The Blossom Residency"
        highlight="Blog"
        subtitle="Guides and insights on buying a home in Dombivli East — investment outlook, connectivity, configurations and practical home-buying tips."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Blog" },
        ]}
        showBrochure={false}
      />

      <section className="bg-ink-soft py-16 sm:py-24">
        <div className="container-luxe grid gap-6 md:grid-cols-2">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={blogPath(post.slug)}
              className="group glass flex flex-col rounded-3xl p-7 transition-all duration-300 hover:border-gold/40"
            >
              <span className="inline-flex items-center gap-1.5 text-xs text-sand/45">
                <Clock size={12} /> {post.readMins} min read
              </span>
              <h2 className="mt-3 font-serif text-2xl font-light leading-snug text-white">
                {post.title}
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-sand/65">{post.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-gold">
                Read article <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <RelatedPages current={PATH} />
      <CtaBand />
    </PageShell>
  );
}
