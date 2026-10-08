import type { Metadata } from "next";
import Link from "next/link";
import { Building2, ShieldCheck, Sparkles, TrendingUp, ArrowRight, ClipboardCheck } from "lucide-react";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import FaqBlock from "@/components/FaqBlock";
import RelatedPages from "@/components/RelatedPages";
import CtaBand from "@/components/CtaBand";
import { buildPageJsonLd, jsonLdScript } from "@/lib/seo";
import { PROJECT, SITE_URL, CONFIGURATIONS, DEVELOPER_STATS, AMENITIES, DISTANCES } from "@/lib/data";

const PATH = "/new-projects-in-dombivli-east";
const DESCRIPTION = `Looking for new projects in Dombivli East? Blossom Residency by ${PROJECT.developer} offers new 1 & 2 BHK flats in Nilje, a 12 min walk from Nilje station — a ${PROJECT.tower}, MahaRERA ${PROJECT.rera}, starting ${PROJECT.startingPrice}.`;

export const metadata: Metadata = {
  title: "New Projects in Dombivli East",
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  keywords: [
    "new projects in dombivli east",
    "new project in dombivli east",
    "new projects in dombivli",
    "new launch projects dombivli east",
    "upcoming projects in dombivli east",
    "new residential projects dombivli",
    "new project in nilje dombivli",
    "rera registered projects dombivli east",
  ],
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
    a: `Blossom Residency by ${PROJECT.developer} is a new residential project in Nilje, Dombivli East — a ${PROJECT.tower} across ${PROJECT.buildings.toLowerCase()}, offering 1 & 2 BHK flats about a 12 minute walk from Nilje Railway Station and a 5 minute drive from Xperia Mall, registered under MahaRERA ${PROJECT.rera}.`,
  },
  {
    q: "What configurations does this new project offer?",
    a: "Blossom Residency offers Vastu-compliant 1 BHK (~434 sq ft carpet) and 2 BHK (588 sq ft carpet) apartments, with 11+ premium amenities.",
  },
  {
    q: "Why buy in a new project in Dombivli East?",
    a: "Dombivli East is a fast-developing corridor with upcoming metro connectivity, new infrastructure and strong appreciation potential — buying early in a RERA-registered new project locks in better pricing and choice of units.",
  },
  {
    q: "Is the project RERA registered?",
    a: `Yes — Blossom Residency is registered under MahaRERA (${PROJECT.rera}), so the purchase is transparent, compliant and home-loan eligible.`,
  },
  {
    q: "How do I verify a new project's MahaRERA registration?",
    a: `Search the registration number on the MahaRERA website (maharera.maharashtra.gov.in) under registered projects. For Blossom Residency, look up ${PROJECT.rera} — the listing shows the promoter, approved plans and the declared completion date.`,
  },
  {
    q: "What is the starting price in this new project?",
    a: `1 BHK homes at Blossom Residency start at ${PROJECT.startingPrice} for about 434 sq ft carpet area; 2 BHK (588 sq ft carpet) pricing is shared on request because it varies by floor and unit.`,
  },
  {
    q: "Where is this new project located in Dombivli East?",
    a: "In Nilje, Dombivli East (PIN 421204) — about a 12 minute walk from Nilje Railway Station, a 5 minute drive from Xperia Mall and about 1.7 km from Kalyan–Shil Road.",
  },
];

// Practical due-diligence list — genuinely useful for anyone comparing new launches,
// which is what people searching this phrase are doing.
const CHECKLIST = [
  { title: "Check the MahaRERA number", body: `Every new project must be registered. Search the number on the MahaRERA site and match the promoter name — ours is ${PROJECT.rera}.` },
  { title: "Compare carpet, not built-up", body: "RERA requires pricing on carpet area. Ask for the carpet figure in writing — 1 BHK ~434 sq ft and 2 BHK 588 sq ft here." },
  { title: "Get the full cost sheet", body: "Agreement value, stamp duty, registration, GST and maintenance — all on paper before you pay a booking amount." },
  { title: "Walk the commute yourself", body: "Time the walk to the station and the drive to work at rush hour. Listings round distances; your feet won't." },
  { title: "Ask for the possession timeline", body: "Compare the builder's date with the completion date declared on the MahaRERA listing." },
  { title: "Check the builder's track record", body: `Visit completed buildings and talk to residents. ${PROJECT.developer} has 10+ years in Dombivli and 500+ families housed.` },
];

const PILLARS = [
  { icon: Building2, title: `${PROJECT.tower}`, body: `A landmark elevation across ${PROJECT.buildings.toLowerCase()} in the prime Nilje corridor.` },
  { icon: Sparkles, title: "11+ Premium Amenities", body: "Rooftop deck, gym, garden, kids zone, security and more — lifestyle built in." },
  { icon: ShieldCheck, title: "MahaRERA Registered", body: `${PROJECT.rera} — a transparent, compliant, home-loan-ready purchase.` },
  { icon: TrendingUp, title: "High-Growth Location", body: "A 12 min walk to Nilje station and 5 min drive to Xperia Mall, near the upcoming Hedutane metro and Kalyan-Shil Road." },
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
        subtitle={`Blossom Residency by ${PROJECT.developer} is a new residential project in Nilje, about a 12 minute walk from Nilje Railway Station — a ${PROJECT.tower.toLowerCase()} of Vastu-compliant 1 & 2 BHK homes starting ${PROJECT.startingPrice}, MahaRERA ${PROJECT.rera}.`}
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
            the right reasons: a premium {PROJECT.tower.toLowerCase()} in Nilje, a 12 minute walk
            from Nilje station, with thoughtfully sized 1 & 2 BHK homes, {AMENITIES.length}+ amenities, and the
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

      {/* Buyer checklist */}
      <section className="bg-ink-soft py-16 sm:py-24">
        <div className="container-luxe">
          <div className="flex items-center gap-2 text-gold">
            <ClipboardCheck size={18} />
            <span className="text-sm font-semibold uppercase tracking-wide">Buyer checklist</span>
          </div>
          <h2 className="mt-3 max-w-3xl font-serif text-3xl font-light text-white sm:text-4xl">
            How to compare new projects in <span className="gold-text">Dombivli East</span>
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-sand/70">
            Dombivli East has more new launches than ever, and the brochures all look alike. Six checks
            separate a sound purchase from a risky one — use them on every project you shortlist,
            including ours.
          </p>
          <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CHECKLIST.map((c, i) => (
              <li key={c.title} className="glass rounded-3xl p-6">
                <span className="font-serif text-2xl text-gold">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 font-serif text-lg text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sand/60">{c.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Measured distances */}
      <section className="bg-ink py-16 sm:py-24">
        <div className="container-luxe">
          <h2 className="max-w-3xl font-serif text-3xl font-light text-white sm:text-4xl">
            Where this new project sits
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-sand/70">
            Road-routed distances from the Blossom Residency site in Nilje. See the{" "}
            <Link href="/flats-in-nilje-dombivli-east" className="text-gold underline-offset-4 hover:underline">
              Nilje locality guide
            </Link>{" "}
            for schools, hospitals and daily life.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/15 text-xs uppercase tracking-wide text-sand/50">
                  <th scope="col" className="pb-3 font-medium">From Blossom Residency</th>
                  <th scope="col" className="pb-3 font-medium">Distance</th>
                  <th scope="col" className="pb-3 font-medium">Travel time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {DISTANCES.map((d) => (
                  <tr key={d.place}>
                    <th scope="row" className="py-3 font-normal text-white">{d.place}</th>
                    <td className="py-3 text-sand/70">{d.dist}</td>
                    <td className="py-3 text-sand/70">{d.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <FaqBlock faqs={FAQS} heading="New projects in Dombivli East — FAQs" />
      <RelatedPages current={PATH} />
      <CtaBand />
    </PageShell>
  );
}
