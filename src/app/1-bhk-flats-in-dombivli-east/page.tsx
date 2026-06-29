import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, MapPin, Ruler, IndianRupee, ShieldCheck, Sun } from "lucide-react";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import FaqBlock from "@/components/FaqBlock";
import RelatedPages from "@/components/RelatedPages";
import CtaBand from "@/components/CtaBand";
import { buildPageJsonLd, jsonLdScript } from "@/lib/seo";
import { PROJECT, SITE_URL } from "@/lib/data";

const PATH = "/1-bhk-flats-in-dombivli-east";
const DESCRIPTION = `1 BHK flats for sale in Dombivli East at Blossom Residency, opposite Xperia Mall, Nilje. ~430 sq ft Vastu-compliant homes starting ${PROJECT.startingPrice}. MahaRERA ${PROJECT.rera}. Book a site visit.`;

export const metadata: Metadata = {
  title: "1 BHK Flats in Dombivli East",
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: "1 BHK Flats in Dombivli East | Blossom Residency",
    description: DESCRIPTION,
    url: `${SITE_URL}${PATH}`,
    images: ["/images/hero.png"],
  },
};

const FAQS = [
  {
    q: "What is the price of a 1 BHK flat in Dombivli East at Blossom Residency?",
    a: `1 BHK homes at Blossom Residency start from ${PROJECT.startingPrice} for approximately 430 sq ft carpet area. The final price depends on the floor and unit — request the latest price sheet on WhatsApp for exact figures.`,
  },
  {
    q: "What is the carpet area of the 1 BHK?",
    a: "The 1 BHK apartments offer approximately 430 sq ft carpet area, with a Vastu-compliant, sun-lit living room and a wide balcony.",
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
];

const SPECS = [
  { icon: Ruler, label: "Carpet area", value: "~430 sq ft" },
  { icon: IndianRupee, label: "Starting price", value: PROJECT.startingPrice },
  { icon: MapPin, label: "Location", value: "Opp. Xperia Mall, Nilje" },
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
    apartment: { type: "1 BHK", rooms: 1, sqft: "430", carpet: "~430 sq ft carpet", priceRaw: PROJECT.startingPriceRaw.replace(/,/g, "") },
  });

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(ld)} />

      <PageHero
        eyebrow="1 BHK Residences"
        title="1 BHK Flats in"
        highlight="Dombivli East"
        subtitle={`Spacious, Vastu-compliant 1 BHK homes at Blossom Residency — opposite Xperia Mall in Nilje, Dombivli East. Approximately 430 sq ft carpet, starting ${PROJECT.startingPrice}, in a ${PROJECT.tower.toLowerCase()} by ${PROJECT.developer}.`}
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
              The 1 BHK at Blossom Residency offers approximately 430 sq ft of efficient carpet area —
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
                "~430 sq ft Vastu-compliant carpet",
                "Sun-lit living room & wide balcony",
                "11+ premium lifestyle amenities",
                "Opposite Xperia Mall & PVR",
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
            Blossom Residency sits opposite Xperia Mall in Nilje, with quick access to Dombivli
            railway station, the upcoming Hedutane metro, Kalyan-Shil Road, and direct links to Thane
            and Navi Mumbai. Schools, hospitals, D-Mart and daily markets are all close by — see the
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
