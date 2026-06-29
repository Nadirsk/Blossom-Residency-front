import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SEO_PAGES } from "@/lib/routes";

/** Internal-linking module — links every landing page to its siblings (spreads
 *  crawl equity and keeps visitors on-site). Pass the current path to exclude it. */
export default function RelatedPages({ current }: { current: string }) {
  const items = SEO_PAGES.filter((p) => p.path !== current);
  return (
    <section className="bg-ink py-16">
      <div className="container-luxe">
        <h2 className="font-serif text-2xl font-light text-white sm:text-3xl">Explore more</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <Link
              key={p.path}
              href={p.path}
              className="glass group flex items-center justify-between gap-3 rounded-2xl px-5 py-4 text-sm text-sand/80 transition-all duration-300 hover:border-gold/40 hover:text-white"
            >
              {p.label}
              <ArrowUpRight
                size={16}
                className="shrink-0 text-gold transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
