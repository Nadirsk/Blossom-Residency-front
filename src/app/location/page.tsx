import type { Metadata } from "next";
import { MapPin, Navigation, ExternalLink, TrendingUp } from "lucide-react";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import FaqBlock from "@/components/FaqBlock";
import RelatedPages from "@/components/RelatedPages";
import CtaBand from "@/components/CtaBand";
import { buildPageJsonLd, jsonLdScript } from "@/lib/seo";
import { PROJECT, SITE_URL, LOCATION, INVESTMENT, MAP_EMBED, MAP_LINK, MAP_DIRECTIONS } from "@/lib/data";

const PATH = "/location";
const DESCRIPTION = `Blossom Residency location — opposite Xperia Mall, Nilje, Dombivli East (421204). Near Dombivli station, upcoming Hedutane metro, Kalyan-Shil Road, Thane & Navi Mumbai. Map & directions.`;

export const metadata: Metadata = {
  title: "Location & Connectivity",
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: "Blossom Residency Location | Opp. Xperia Mall, Dombivli East",
    description: DESCRIPTION,
    url: `${SITE_URL}${PATH}`,
    images: ["/images/hero.png"],
  },
};

const FAQS = [
  {
    q: "Where exactly is Blossom Residency located?",
    a: `Blossom Residency is located at ${PROJECT.location}, ${PROJECT.city} (PIN 421204) — directly opposite Xperia Mall in Nilje.`,
  },
  {
    q: "How far is it from Dombivli railway station?",
    a: "The project has quick access to Dombivli Railway Station on the Central Line, plus the upcoming Hedutane metro station and direct links to Kalyan-Shil Road, Thane and Navi Mumbai.",
  },
  {
    q: "What landmarks and conveniences are nearby?",
    a: "Xperia Mall and PVR Cinema are right opposite, with schools (Ryan, Euro School, IRA Global), multi-specialty hospitals, D-Mart and daily markets all close by.",
  },
];

export default function Page() {
  const ld = buildPageJsonLd({
    path: PATH,
    name: "Blossom Residency Location & Connectivity — Dombivli East",
    description: DESCRIPTION,
    crumbs: [
      { name: "Home", path: "/" },
      { name: "Location & Connectivity", path: PATH },
    ],
    faqs: FAQS,
  });

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(ld)} />

      <PageHero
        eyebrow="Location"
        title="Opposite Xperia Mall,"
        highlight="Nilje, Dombivli East"
        subtitle={`Blossom Residency enjoys one of Dombivli East's most connected addresses — ${PROJECT.location}, PIN 421204 — with malls, metro, railway and highways all within easy reach.`}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Location & Connectivity" },
        ]}
      />

      <section className="bg-ink-soft py-16 sm:py-24">
        <div className="container-luxe grid items-start gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-3xl border border-white/10 shadow-luxe">
            <div className="relative h-[360px] w-full sm:h-[460px]">
              <iframe
                title="Blossom Residency location on Google Maps"
                src={MAP_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full grayscale-[0.25] contrast-[1.05]"
              />
              <span className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-ink/80 px-3 py-1.5 text-xs font-medium text-sand backdrop-blur">
                <MapPin size={13} className="text-gold" /> Opp. Xperia Mall, Nilje
              </span>
            </div>
            <div className="flex flex-col gap-px sm:flex-row">
              <a
                href={MAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-between gap-3 border-t border-white/10 bg-ink px-5 py-4 text-sm font-medium text-gold transition-colors hover:bg-white/5"
              >
                <span className="inline-flex items-center gap-2">
                  <MapPin size={16} /> Open in Maps
                </span>
                <ExternalLink size={15} />
              </a>
              <a
                href={MAP_DIRECTIONS}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-between gap-3 border-t border-white/10 bg-ink px-5 py-4 text-sm font-medium text-gold transition-colors hover:bg-white/5 sm:border-l"
              >
                <span className="inline-flex items-center gap-2">
                  <Navigation size={16} /> Directions
                </span>
                <ExternalLink size={15} />
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-serif text-3xl font-light text-white sm:text-4xl">
              Everything within <span className="gold-text">easy reach</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-sand/70">
              From malls and metro to schools, hospitals and highways — life at Blossom Residency keeps
              the city close while you come home to calm.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {LOCATION.map((l) => (
                <div key={l.place} className="glass h-full rounded-2xl p-4">
                  <div className="flex items-start justify-between gap-2">
                    <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                    <span className="rounded-full bg-gold/12 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-gold">
                      {l.time}
                    </span>
                  </div>
                  <h3 className="mt-2 text-sm font-semibold text-white">{l.place}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-sand/60">{l.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container-luxe mt-10">
          <div className="rounded-2xl border border-gold/25 bg-gold/[0.06] p-6">
            <div className="flex items-center gap-2 text-gold">
              <TrendingUp size={18} />
              <span className="text-sm font-semibold uppercase tracking-wide">Why this location is a smart investment</span>
            </div>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {INVESTMENT.map((inv) => (
                <li key={inv} className="flex items-start gap-2.5 text-sm text-sand/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {inv}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FaqBlock faqs={FAQS} heading="Location — frequently asked questions" />
      <RelatedPages current={PATH} />
      <CtaBand />
    </PageShell>
  );
}
