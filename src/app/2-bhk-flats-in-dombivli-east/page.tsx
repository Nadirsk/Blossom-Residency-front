import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, MapPin, Ruler, IndianRupee, ShieldCheck, Home } from "lucide-react";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import FaqBlock from "@/components/FaqBlock";
import RelatedPages from "@/components/RelatedPages";
import CtaBand from "@/components/CtaBand";
import { buildPageJsonLd, jsonLdScript } from "@/lib/seo";
import { PROJECT, SITE_URL } from "@/lib/data";

const PATH = "/2-bhk-flats-in-dombivli-east";
const DESCRIPTION = `2 BHK flats for sale in Dombivli East at Blossom Residency, opposite Xperia Mall, Nilje. 588 sq ft carpet, twin bedrooms, Vastu-compliant. MahaRERA ${PROJECT.rera}. Get the price on request.`;

export const metadata: Metadata = {
  title: "2 BHK Flats in Dombivli East",
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: "2 BHK Flats in Dombivli East | Blossom Residency",
    description: DESCRIPTION,
    url: `${SITE_URL}${PATH}`,
    images: ["/images/hero.png"],
  },
};

const FAQS = [
  {
    q: "What is the carpet area of the 2 BHK at Blossom Residency?",
    a: "The 2 BHK apartments offer 588 sq ft carpet area, with twin bedrooms, a spacious living area and a wide balcony, all on a Vastu-compliant layout.",
  },
  {
    q: "What is the price of a 2 BHK flat in Dombivli East?",
    a: "2 BHK pricing at Blossom Residency is shared on request, as it varies by floor and unit. Message us on WhatsApp and we'll send the latest 2 BHK price sheet right away.",
  },
  {
    q: "Is the 2 BHK suitable for a family?",
    a: "Yes. With twin bedrooms, a wide balcony and 588 sq ft of carpet area opposite Xperia Mall, the 2 BHK is designed for growing families who want space, light and everyday convenience.",
  },
  {
    q: "Is Blossom Residency RERA approved?",
    a: `Yes. Blossom Residency is registered under MahaRERA (${PROJECT.rera}), ensuring a transparent, compliant purchase and eligibility for home loans from leading banks.`,
  },
];

const SPECS = [
  { icon: Ruler, label: "Carpet area", value: "588 sq ft" },
  { icon: Home, label: "Configuration", value: "Twin bedrooms" },
  { icon: IndianRupee, label: "Price", value: "On request" },
  { icon: MapPin, label: "Location", value: "Opp. Xperia Mall, Nilje" },
  { icon: ShieldCheck, label: "MahaRERA", value: PROJECT.rera },
];

export default function Page() {
  const ld = buildPageJsonLd({
    path: PATH,
    name: "2 BHK Flats in Dombivli East — Blossom Residency",
    description: DESCRIPTION,
    crumbs: [
      { name: "Home", path: "/" },
      { name: "2 BHK Flats in Dombivli East", path: PATH },
    ],
    faqs: FAQS,
    apartment: { type: "2 BHK", rooms: 2, sqft: "588", carpet: "588 sq ft carpet" },
  });

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(ld)} />

      <PageHero
        eyebrow="2 BHK Residences"
        title="2 BHK Flats in"
        highlight="Dombivli East"
        subtitle={`Spacious 588 sq ft carpet, twin-bedroom 2 BHK homes at Blossom Residency — opposite Xperia Mall, Nilje, Dombivli East. Vastu-compliant layouts in a ${PROJECT.tower.toLowerCase()} by ${PROJECT.developer}.`}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "2 BHK Flats in Dombivli East" },
        ]}
      />

      <section className="bg-ink-soft py-16 sm:py-24">
        <div className="container-luxe grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h2 className="font-serif text-3xl font-light text-white sm:text-4xl">
              Room to grow, in the heart of <span className="gold-text">Dombivli East</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-sand/70">
              The 2 BHK at Blossom Residency gives your family 588 sq ft of well-planned carpet area —
              twin bedrooms, an airy living and dining space, and a wide balcony that pulls in natural
              light. Every layout is Vastu-compliant and built for the way modern families actually
              live, just across the road from Xperia Mall and PVR.
            </p>
            <p className="mt-4 text-base leading-relaxed text-sand/70">
              It&apos;s part of a {PROJECT.tower.toLowerCase()} across {PROJECT.buildings.toLowerCase()},
              MahaRERA-registered ({PROJECT.rera}), with transparent pricing and zero hidden charges.
              Prefer a compact home? Compare the{" "}
              <Link href="/1-bhk-flats-in-dombivli-east" className="text-gold underline-offset-4 hover:underline">
                1 BHK option
              </Link>
              .
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "588 sq ft Vastu-compliant carpet",
                "Twin bedrooms + wide balcony",
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
                src="/images/plan-2bhk.jpg"
                alt="2 BHK floor plan at Blossom Residency, Dombivli East"
                width={1146}
                height={1213}
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

      <FaqBlock faqs={FAQS} heading="2 BHK in Dombivli East — your questions" />
      <RelatedPages current={PATH} />
      <CtaBand
        heading="Get the 2 BHK price sheet"
        sub="2 BHK pricing is shared on request and varies by floor — message us for the latest cost sheet and a free site visit."
        waMessage={`Hi, I'm interested in the 2 BHK at ${PROJECT.name}. Please share the price sheet and floor plan.`}
      />
    </PageShell>
  );
}
