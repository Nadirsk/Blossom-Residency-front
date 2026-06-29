import Link from "next/link";
import { Search } from "lucide-react";
import { POPULAR_SEARCHES } from "@/lib/data";

/** Visible "popular searches" cluster — varied anchor text (flat / apartment / home
 *  / ghar, by config, intent and locality) pointing to the right landing page. Helps
 *  real visitors and gives Google natural synonym + relevance signals. */
export default function PopularSearches() {
  return (
    <section className="border-t border-white/10 bg-ink py-14">
      <div className="container-luxe">
        <h2 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
          <Search size={14} /> Popular searches
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-sand/55">
          However you search — flat, apartment, home or ghar, 1 BHK or 2 BHK — find your space at
          Blossom Residency, Dombivli East.
        </p>
        <div className="mt-5 flex flex-wrap gap-2.5">
          {POPULAR_SEARCHES.map((s) => (
            <Link
              key={s.label}
              href={s.href}
              className="rounded-full border border-white/12 px-4 py-2 text-sm text-sand/75 transition-colors hover:border-gold/40 hover:text-white"
            >
              {s.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
