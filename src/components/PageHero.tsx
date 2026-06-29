import Link from "next/link";
import { ChevronRight, Phone, CalendarCheck, Download } from "lucide-react";
import { PROJECT, waLink } from "@/lib/data";

type Crumb = { name: string; href?: string };

/** Reusable hero for landing pages: breadcrumb + keyword H1 + lead + CTAs. */
export default function PageHero({
  eyebrow,
  title,
  highlight,
  subtitle,
  crumbs,
  showBrochure = true,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle: string;
  crumbs: Crumb[];
  showBrochure?: boolean;
}) {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-ink pb-16 pt-32 sm:pb-20 sm:pt-40">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[42rem] max-w-full -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" />
      <div className="container-luxe relative">
        <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-sand/50">
          {crumbs.map((c, i) => (
            <span key={c.name} className="inline-flex items-center gap-1.5">
              {i > 0 && <ChevronRight size={12} className="text-sand/30" />}
              {c.href ? (
                <Link href={c.href} className="transition-colors hover:text-gold">
                  {c.name}
                </Link>
              ) : (
                <span className="text-sand/75">{c.name}</span>
              )}
            </span>
          ))}
        </nav>

        <span className="eyebrow mb-4">
          <span className="h-px w-8 bg-gold" /> {eyebrow}
        </span>
        <h1 className="max-w-4xl font-serif text-4xl font-light leading-[1.08] text-white sm:text-5xl lg:text-6xl">
          {title} {highlight && <span className="gold-text font-medium">{highlight}</span>}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-sand/70 sm:text-lg">{subtitle}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={waLink(`Hi, I'd like to book a site visit for ${PROJECT.name}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            <CalendarCheck size={16} /> Book Site Visit
          </a>
          <a href={`tel:${PROJECT.phoneRaw}`} className="btn-ghost">
            <Phone size={15} /> {PROJECT.phone}
          </a>
          {showBrochure && (
            <a href={PROJECT.brochure} download className="btn-ghost">
              <Download size={15} /> Brochure
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
