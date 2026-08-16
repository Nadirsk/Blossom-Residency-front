import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, MapPin, Footprints, TrainFront, Ruler, IndianRupee, ShieldCheck, Sun } from "lucide-react";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import FaqBlock from "@/components/FaqBlock";
import RelatedPages from "@/components/RelatedPages";
import CtaBand from "@/components/CtaBand";
import { buildPageJsonLd, jsonLdScript } from "@/lib/seo";
import { PROJECT, SITE_URL } from "@/lib/data";

const PATH = "/1-bhk-flats-in-dombivli-east";
const DESCRIPTION = `1 BHK flats in Dombivli East from ${PROJECT.startingPrice} — ~434 sq ft carpet (≈₹6,910/sq ft), 12 min walk to Nilje station. New MahaRERA project (${PROJECT.rera}) by ${PROJECT.developer}. Price sheet & EMI on request.`;

export const metadata: Metadata = {
  title: "1 BHK Flats in Dombivli East",
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  keywords: [
    "1 bhk flats in dombivli east",
    "1 bhk flats in dombivli",
    "1 bhk in dombivli east",
    "1 bhk flat price in dombivli",
    "affordable 1 bhk dombivli east",
    "1 bhk under 30 lakhs dombivli",
    "new 1 bhk project dombivli east",
    "1 bhk nilje dombivli",
  ],
  openGraph: {
    title: "1 BHK Flats in Dombivli East | Blossom Residency",
    description: DESCRIPTION,
    url: `${SITE_URL}${PATH}`,
    images: ["/images/hero.png"],
  },
};

// Indicative EMI illustration. Loan = 80% of the starting agreement value; the rest is
// arithmetic, not a quote. Recompute all four figures if startingPriceRaw changes.
const DOWN_PAYMENT = "₹6.00 Lakh";
const LOAN_AMOUNT = "₹24.00 Lakh";
const EMI_ROWS = [
  { tenure: "15 years", r85: "₹23,634", r90: "₹24,342" },
  { tenure: "20 years", r85: "₹20,828", r90: "₹21,593" },
];

const FAQS = [
  {
    q: "What is the price of a 1 BHK flat in Dombivli East at Blossom Residency?",
    a: `1 BHK homes at Blossom Residency start from ${PROJECT.startingPrice} for approximately 434 sq ft carpet area. The final price depends on the floor and unit — request the latest price sheet on WhatsApp for exact figures.`,
  },
  {
    q: "What is the carpet area of the 1 BHK?",
    a: "The 1 BHK apartments offer approximately 434 sq ft carpet area, with a Vastu-compliant, sun-lit living room and a wide balcony.",
  },
  {
    q: "Is the 1 BHK at Blossom Residency Vastu-compliant?",
    a: "Yes. Every 1 BHK layout is designed to be Vastu-compliant, with optimal natural light and ventilation across the living area and bedroom.",
  },
  {
    q: "Is a 1 BHK in Dombivli East a good investment?",
    a: "Nilje, Dombivli East is a fast-developing corridor with upcoming metro connectivity and strong rental demand, making a 1 BHK ideal for both first-time buyers and investors seeking appreciation and rental income.",
  },
  {
    q: "Are home loans available for the 1 BHK?",
    a: `Yes. Because Blossom Residency is MahaRERA-registered (${PROJECT.rera}), the 1 BHK is eligible for home loans from leading banks and housing finance companies. Our team can connect you with loan partners.`,
  },
  {
    q: "What is the EMI on a 1 BHK flat in Dombivli?",
    a: `As an illustration, a 20% down payment of ${DOWN_PAYMENT} on the ${PROJECT.startingPrice} starting price leaves a ${LOAN_AMOUNT} loan — roughly ₹20,828 a month over 20 years at 8.5% p.a., or about ₹23,634 over 15 years. These are indicative figures, not an offer; your actual EMI depends on the sanctioned amount, rate and tenure.`,
  },
  {
    q: "Are there affordable 1 BHK flats in Dombivli under 30 lakhs?",
    a: `Yes. The 1 BHK at Blossom Residency starts at ${PROJECT.startingPrice} for approximately 434 sq ft carpet area — about ₹6,910 per sq ft carpet — in a new, MahaRERA-registered building in Nilje, Dombivli East. Request the current price sheet for unit-wise figures.`,
  },
  {
    q: "How far is the 1 BHK from the railway station?",
    a: "Nilje Railway Station is about 1 km from the project — roughly a 12 minute walk. Dombivli Railway Station on the Central Line is about 9.6 km, or a 25 minute drive, and the upcoming Hedutane metro station on the Kalyan–Taloja corridor will add another option.",
  },
  {
    q: "Is car parking included with the 1 BHK?",
    a: "Yes. Blossom Residency provides ample car parking on the premises, along with 24x7 manned security and 24-hour CCTV surveillance. Parking allocation is confirmed in your written cost sheet at booking.",
  },
  {
    q: "When is possession of the 1 BHK, and how do I book one?",
    a: `For the current possession timeline and unit availability, contact our team — we share the live status rather than an outdated date. To book, call or WhatsApp ${PROJECT.phone} and we'll arrange a free site visit, walk you through the available 1 BHK units and share the full cost sheet with zero hidden charges.`,
  },
];

// Road-routed from the project pin — see the NEARBY constant in lib/data.ts.
const DISTANCES = [
  { place: "Nilje Railway Station", dist: "~1.0 km", time: "12 min walk" },
  { place: "Shree Manav Kalyan Hospital", dist: "~0.35 km", time: "5 min walk" },
  { place: "Xperia Mall & PVR Cinema", dist: "~1.95 km", time: "5 min drive" },
  { place: "Kalyan–Shil Road", dist: "~1.7 km", time: "5 min drive" },
  { place: "Dombivli Railway Station", dist: "~9.6 km", time: "25 min drive" },
];

const SPECS = [
  { icon: Ruler, label: "Carpet area", value: "~434 sq ft" },
  { icon: IndianRupee, label: "Starting price", value: PROJECT.startingPrice },
  { icon: MapPin, label: "Location", value: PROJECT.location },
  { icon: TrainFront, label: "Nilje Station", value: "12 min walk" },
  { icon: Footprints, label: "Xperia Mall", value: "5 min drive" },
  { icon: ShieldCheck, label: "MahaRERA", value: PROJECT.rera },
];

export default function Page() {
  const ld = buildPageJsonLd({
    path: PATH,
    name: "1 BHK Flats in Dombivli East — Blossom Residency",
    description: DESCRIPTION,
    crumbs: [
      { name: "Home", path: "/" },
      { name: "1 BHK Flats in Dombivli East", path: PATH },
    ],
    faqs: FAQS,
    apartment: { type: "1 BHK", rooms: 1, sqft: "434", carpet: "~434 sq ft carpet", priceRaw: PROJECT.startingPriceRaw.replace(/,/g, "") },
  });

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(ld)} />

      <PageHero
        eyebrow="1 BHK Residences"
        title="1 BHK Flats in"
        highlight="Dombivli East"
        subtitle={`Spacious, Vastu-compliant 1 BHK homes at Blossom Residency — Nilje, Dombivli East, about a 12 minute walk from Nilje Railway Station. Approximately 434 sq ft carpet, starting ${PROJECT.startingPrice}, in a ${PROJECT.tower.toLowerCase()} by ${PROJECT.developer}.`}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "1 BHK Flats in Dombivli East" },
        ]}
      />

      {/* Overview + specs */}
      <section className="bg-ink-soft py-16 sm:py-24">
        <div className="container-luxe grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h2 className="font-serif text-3xl font-light text-white sm:text-4xl">
              A 1 BHK designed for <span className="gold-text">real living</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-sand/70">
              Looking for a 1 BHK flat in Dombivli East that doesn&apos;t compromise on space or light?
              The 1 BHK at Blossom Residency offers approximately 434 sq ft of efficient carpet area —
              a sun-lit living room, a comfortable bedroom and a wide balcony, all laid out to a
              Vastu-compliant plan. It&apos;s an ideal first home for young families and a smart,
              rent-ready investment in one of Dombivli&apos;s fastest-growing pockets.
            </p>
            <p className="mt-4 text-base leading-relaxed text-sand/70">
              Set in a {PROJECT.tower.toLowerCase()} across {PROJECT.buildings.toLowerCase()}, every
              home is backed by a MahaRERA registration ({PROJECT.rera}), transparent pricing and zero
              hidden charges — directly from the developer, {PROJECT.developer}.
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "~434 sq ft Vastu-compliant carpet",
                "Sun-lit living room & wide balcony",
                "11+ premium lifestyle amenities",
                "12 min walk to Nilje station",
                "Home-loan ready (MahaRERA registered)",
                "Zero hidden charges",
              ].map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-sand/85">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Check size={14} />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white shadow-luxe">
              <Image
                src="/images/plan-1bhk.jpg"
                alt="1 BHK floor plan at Blossom Residency, Dombivli East"
                width={1149}
                height={930}
                className="h-auto w-full object-contain"
              />
            </div>
            <div className="glass rounded-3xl p-6">
              <h3 className="font-serif text-xl text-white">At a glance</h3>
              <dl className="mt-4 divide-y divide-white/10">
                {SPECS.map((s) => (
                  <div key={s.label} className="flex items-center gap-3 py-3">
                    <s.icon size={16} className="shrink-0 text-gold" />
                    <dt className="text-sm text-sand/55">{s.label}</dt>
                    <dd className="ml-auto text-sm font-medium text-white">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Why this location */}
      <section className="bg-ink py-16 sm:py-24">
        <div className="container-luxe">
          <div className="flex items-center gap-2 text-gold">
            <Sun size={18} />
            <span className="text-sm font-semibold uppercase tracking-wide">Why Dombivli East</span>
          </div>
          <h2 className="mt-3 max-w-2xl font-serif text-3xl font-light text-white sm:text-4xl">
            A 1 BHK address with everything at your doorstep
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-sand/70">
            Blossom Residency sits in Nilje — about a 12 minute walk from Nilje railway station and a
            5 minute drive from Xperia Mall, with access to Dombivli railway station, the upcoming
            Hedutane metro, Kalyan-Shil Road, and direct links to Thane and Navi Mumbai.
            Schools, hospitals and daily markets are all close by — see the
            full{" "}
            <Link href="/location" className="text-gold underline-offset-4 hover:underline">
              location &amp; connectivity guide
            </Link>{" "}
            or compare the{" "}
            <Link href="/2-bhk-flats-in-dombivli-east" className="text-gold underline-offset-4 hover:underline">
              2 BHK option
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Price breakdown — the query behind most "1 BHK in Dombivli" searches */}
      <section className="bg-ink-soft py-16 sm:py-24">
        <div className="container-luxe">
          <h2 className="max-w-3xl font-serif text-3xl font-light text-white sm:text-4xl">
            1 BHK price in Dombivli East — <span className="gold-text">what it actually costs</span>
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-sand/70">
            A 1 BHK at Blossom Residency starts at {PROJECT.startingPrice} for roughly 434 sq ft of
            carpet area — about ₹6,910 per sq ft carpet. That puts it in the entry band for new,
            RERA-registered construction in Dombivli, where most 1 BHK inventory of this vintage sits
            well above it. The final figure moves with the floor and the specific unit, so treat the
            starting price as the floor and ask for the live price sheet before you budget.
          </p>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="glass rounded-3xl p-6">
              <h3 className="font-serif text-xl text-white">What goes into the total</h3>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-sand/70">
                {[
                  ["Agreement value", `Starts ${PROJECT.startingPrice} for ~434 sq ft carpet`],
                  ["Stamp duty & registration", "At the prevailing Maharashtra rates on the agreement value"],
                  ["GST", "As applicable to under-construction homes at the time of booking"],
                  ["Maintenance & deposits", "Shared as part of the written cost sheet — no verbal add-ons"],
                ].map(([k, v]) => (
                  <li key={k} className="border-b border-white/10 pb-3 last:border-0 last:pb-0">
                    <span className="block font-medium text-white">{k}</span>
                    <span>{v}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-sand/45">
                Statutory rates change — our team confirms the exact figures in writing before you pay
                anything. Zero hidden charges is a policy, not a slogan.
              </p>
            </div>

            <div className="glass rounded-3xl p-6">
              <h3 className="font-serif text-xl text-white">Indicative home-loan EMI</h3>
              <p className="mt-2 text-sm text-sand/60">
                On a {DOWN_PAYMENT} down payment (20%) and a {LOAN_AMOUNT} loan against the starting
                price of {PROJECT.startingPrice}.
              </p>
              <div className="mt-5 overflow-x-auto">
                <table className="w-full min-w-[320px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-white/15 text-xs uppercase tracking-wide text-sand/50">
                      <th scope="col" className="pb-3 font-medium">Tenure</th>
                      <th scope="col" className="pb-3 font-medium">@ 8.5% p.a.</th>
                      <th scope="col" className="pb-3 font-medium">@ 9.0% p.a.</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {EMI_ROWS.map((r) => (
                      <tr key={r.tenure}>
                        <th scope="row" className="py-3 font-normal text-sand/70">{r.tenure}</th>
                        <td className="py-3 font-medium text-white">{r.r85}/mo</td>
                        <td className="py-3 font-medium text-white">{r.r90}/mo</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-xs text-sand/45">
                Illustration only, not an offer. Your actual EMI depends on the sanctioned amount,
                your bank&apos;s rate and tenure. Because the project is MahaRERA-registered
                ({PROJECT.rera}), the 1 BHK is eligible for loans from leading banks and HFCs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Measured distances — genuinely unique content vs the portals */}
      <section className="bg-ink py-16 sm:py-24">
        <div className="container-luxe">
          <h2 className="max-w-3xl font-serif text-3xl font-light text-white sm:text-4xl">
            How far is everything, <span className="gold-text">actually</span>
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-sand/70">
            Property listings tend to round distances in their own favour, so here are the real ones,
            road-routed from the project&apos;s map pin. The short version: Nilje station is a genuine
            walk, and everything else in Dombivli East is a short drive.
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
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-sand/60">
            For a daily commuter that walk to Nilje station is the number that matters — it puts the
            local line within reach without a rickshaw at either end. The upcoming Hedutane metro on
            the Kalyan–Taloja corridor will add a second option. Full breakdown on the{" "}
            <Link href="/location" className="text-gold underline-offset-4 hover:underline">
              location &amp; connectivity page
            </Link>
            .
          </p>
        </div>
      </section>

      {/* 1 vs 2 BHK — captures comparison queries and keeps visitors on site */}
      <section className="bg-ink-soft py-16 sm:py-24">
        <div className="container-luxe">
          <h2 className="max-w-3xl font-serif text-3xl font-light text-white sm:text-4xl">
            1 BHK or 2 BHK — <span className="gold-text">which one fits</span>
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-sand/70">
            Both configurations sit in the same {PROJECT.tower.toLowerCase()} and share every amenity.
            The choice is really about how much room you need now versus what you want to spend.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="rounded-3xl border border-gold/30 bg-gold/[0.06] p-6">
              <h3 className="font-serif text-2xl text-white">1 BHK</h3>
              <p className="mt-1 text-sm text-gold">~434 sq ft carpet · from {PROJECT.startingPrice}</p>
              <ul className="mt-5 space-y-2.5 text-sm text-sand/75">
                {[
                  "First home for couples & small families",
                  "Lowest entry price into a new RERA project",
                  "Easier to let out — 1 BHK rental demand is deepest",
                  "Smaller loan, lighter EMI",
                ].map((x) => (
                  <li key={x} className="flex gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass rounded-3xl p-6">
              <h3 className="font-serif text-2xl text-white">2 BHK</h3>
              <p className="mt-1 text-sm text-sand/60">588 sq ft carpet · price on request</p>
              <ul className="mt-5 space-y-2.5 text-sm text-sand/75">
                {[
                  "Twin bedrooms for growing families",
                  "~154 sq ft more carpet than the 1 BHK",
                  "Room for a work-from-home setup",
                  "Wider balcony off the living area",
                ].map((x) => (
                  <li key={x} className="flex gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sand/40" />
                    {x}
                  </li>
                ))}
              </ul>
              <Link
                href="/2-bhk-flats-in-dombivli-east"
                className="mt-6 inline-block text-sm font-medium text-gold underline-offset-4 hover:underline"
              >
                See the 2 BHK in Dombivli East →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FaqBlock faqs={FAQS} heading="1 BHK in Dombivli East — your questions" />
      <RelatedPages current={PATH} />
      <CtaBand
        heading="Book your 1 BHK at Blossom Residency"
        sub={`1 BHK homes start ${PROJECT.startingPrice}. Get the floor plan, price sheet and a free site visit.`}
        waMessage={`Hi, I'm interested in the 1 BHK at ${PROJECT.name}. Please share the price sheet and floor plan.`}
      />
    </PageShell>
  );
}
