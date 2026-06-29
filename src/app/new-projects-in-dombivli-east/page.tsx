import type { Metadata } from "next";
import Link from "next/link";
import { Building2, ShieldCheck, Sparkles, TrendingUp, ArrowRight } from "lucide-react";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import FaqBlock from "@/components/FaqBlock";
import RelatedPages from "@/components/RelatedPages";
import CtaBand from "@/components/CtaBand";
import { buildPageJsonLd, jsonLdScript } from "@/lib/seo";
import { PROJECT, SITE_URL, CONFIGURATIONS, DEVELOPER_STATS } from "@/lib/data";

const PATH = "/new-projects-in-dombivli-east";
const DESCRIPTION = `Looking for new projects in Dombivli East? Blossom Residency by ${PROJECT.developer} offers new 1 & 2 BHK flats opposite Xperia Mall, Nilje — a ${PROJECT.tower}, MahaRERA ${PROJECT.rera}, starting ${PROJECT.startingPrice}.`;

export const metadata: Metadata = {
  title: "New Projects in Dombivli East",
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: "New Projects in Dombivli East | Blossom Residency",
    description: DESCRIPTION,
    url: `${SITE_URL}${PATH}`,
    images: ["/images/hero.png"],
  },
};

const FAQS = [
  {
    q: "What new residential projects are launching in Dombivli East?",
    a: `Blossom Residency by ${PROJECT.developer} is a new residential project in Nilje, Dombivli East — a ${PROJECT.tower} across ${PROJECT.buildings.toLowerCase()}, offering 1 & 2 BHK flats opposite Xperia Mall, registered under MahaRERA ${PROJECT.rera}.`,
  },
  {
    q: "What configurations does this new project offer?",
    a: "Blossom Residency offers Vastu-compliant 1 BHK (~430 sq ft carpet) and 2 BHK (588 sq ft carpet) apartments, with 11+ premium amenities.",
  },
  {
    q: "Why buy in a new project in Dombivli East?",
    a: "Dombivli East is a fast-developing corridor with upcoming metro connectivity, new infrastructure and strong appreciation potential — buying early in a RERA-registered new project locks in better pricing and choice of units.",
  },
  {
    q: "Is the project RERA registered?",
    a: `Yes — Blossom Residency is registered under MahaRERA (${PROJECT.rera}), so the purchase is transparent, compliant and home-loan eligible.`,
  },
];

const PILLARS = [
  { icon: Building2, title: `${PROJECT.tower}`, body: `A landmark elevation across ${PROJECT.buildings.toLowerCase()} in the prime Nilje corridor.` },
  { icon: Sparkles, title: "11+ Premium Amenities", body: "Rooftop deck, gym, garden, kids zone, security and more — lifestyle built in." },
  { icon: ShieldCheck, title: "MahaRERA Registered", body: `${PROJECT.rera} — a transparent, compliant, home-loan-ready purchase.` },
  { icon: TrendingUp, title: "High-Growth Location", body: "Opposite Xperia Mall, near the upcoming Hedutane metro and Kalyan-Shil Road." },
];

export default function Page() {
  const ld = buildPageJsonLd({
    path: PATH,
    name: "New Projects in Dombivli East — Blossom Residency",
    description: DESCRIPTION,
    crumbs: [
      { name: "Home", path: "/" },
      { name: "New Projects in Dombivli East", path: PATH },
    ],
    faqs: FAQS,
  });

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(ld)} />

      <PageHero
        eyebrow="New Launch"
        title="New Projects in"
        highlight="Dombivli East"
        subtitle={`Blossom Residency by ${PROJECT.developer} is a new residential project opposite Xperia Mall, Nilje — a ${PROJECT.tower.toLowerCase()} of Vastu-compliant 1 & 2 BHK homes starting ${PROJECT.startingPrice}, MahaRERA ${PROJECT.rera}.`}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "New Projects in Dombivli East" },
        ]}
      />

      <section className="bg-ink-soft py-16 sm:py-24">
        <div className="container-luxe">
          <h2 className="max-w-2xl font-serif text-3xl font-light text-white sm:text-4xl">
            Dombivli East&apos;s newest <span className="gold-text">address to call home</span>
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-sand/70">
            If you&apos;re searching for new projects in Dombivli East, Blossom Residency stands out for
            the right reasons: a premium {PROJECT.tower.toLowerCase()} positioned directly opposite
            Xperia Mall in Nilje, with thoughtfully sized 1 & 2 BHK homes, 11+ amenities, and the
            assurance of a MahaRERA registration. It&apos;s built by {PROJECT.developer}, a local
            developer with 10+ years and 500+ families housed.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p) => (
              <div key={p.title} className="glass rounded-3xl p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                  <p.icon size={20} />
                </span>
                <h3 className="mt-4 font-serif text-lg text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sand/60">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Configurations */}
      <section className="bg-ink py-16 sm:py-24">
        <div className="container-luxe">
          <h2 className="font-serif text-3xl font-light text-white sm:text-4xl">
            Configurations in this new project
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {CONFIGURATIONS.map((c) => (
              <Link
                key={c.type}
                href={c.type === "1 BHK" ? "/1-bhk-flats-in-dombivli-east" : "/2-bhk-flats-in-dombivli-east"}
                className="group glass flex items-center justify-between gap-4 rounded-3xl p-6 transition-all duration-300 hover:border-gold/40"
              >
                <div>
                  <h3 className="font-serif text-2xl text-white">{c.type}</h3>
                  <p className="mt-1 text-sm text-sand/60">{c.carpet}</p>
                  <p className="mt-0.5 text-xs text-gold/80">{c.note}</p>
                </div>
                <div className="text-right">
                  <div className="text-xs uppercase tracking-widest text-sand/50">Starting</div>
                  <div className="font-serif text-xl text-white">{c.price}</div>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-gold">
                    View details <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-4">
            {DEVELOPER_STATS.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/10 p-5 text-center">
                <div className="font-serif text-3xl text-gold">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-wide text-sand/50">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqBlock faqs={FAQS} heading="New projects in Dombivli East — FAQs" />
      <RelatedPages current={PATH} />
      <CtaBand />
    </PageShell>
  );
}
