import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Check, MapPin, Footprints, TrainFront, Ruler, IndianRupee, ShieldCheck, Home, Users } from "lucide-react";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import FaqBlock from "@/components/FaqBlock";
import RelatedPages from "@/components/RelatedPages";
import CtaBand from "@/components/CtaBand";
import { buildPageJsonLd, jsonLdScript } from "@/lib/seo";
import { PROJECT, SITE_URL, DISTANCES, AMENITIES } from "@/lib/data";

const PATH = "/2-bhk-flats-in-dombivli-east";
const DESCRIPTION = `2 BHK flats for sale in Dombivli East at Blossom Residency, Nilje — a 12 min walk to Nilje station. 588 sq ft carpet, twin bedrooms, Vastu-compliant. MahaRERA ${PROJECT.rera}. Get the price on request.`;

export const metadata: Metadata = {
  title: "2 BHK Flats in Dombivli East",
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  keywords: [
    "2 bhk flats in dombivli east",
    "2 bhk flat in dombivli",
    "2 bhk in dombivli east",
    "2 bhk flat price in dombivli east",
    "2 bhk for sale dombivli east",
    "new 2 bhk project dombivli east",
    "2 bhk nilje dombivli",
    "2 bhk near xperia mall",
  ],
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
    a: "Yes. With twin bedrooms, a wide balcony and 588 sq ft of carpet area minutes from Xperia Mall, the 2 BHK is designed for growing families who want space, light and everyday convenience.",
  },
  {
    q: "Is Blossom Residency RERA approved?",
    a: `Yes. Blossom Residency is registered under MahaRERA (${PROJECT.rera}), ensuring a transparent, compliant purchase and eligibility for home loans from leading banks.`,
  },
  {
    q: "How much bigger is the 2 BHK than the 1 BHK?",
    a: "The 2 BHK has 588 sq ft carpet against roughly 434 sq ft for the 1 BHK — about 154 sq ft more, which goes into a second bedroom and a larger living area.",
  },
  {
    q: "Can I get a home loan for the 2 BHK?",
    a: `Yes. Because the project is MahaRERA-registered (${PROJECT.rera}), the 2 BHK is eligible for home loans from leading banks and housing finance companies. Our team can connect you with loan partners once you have the unit price.`,
  },
  {
    q: "How far is the 2 BHK from the railway station and schools?",
    a: "Nilje Railway Station is about 1 km away — roughly a 12 minute walk. Schools such as Ryan, Euro School and IRA Global are in nearby Palava, and Shree Manav Kalyan Hospital is about 350 m from the project.",
  },
  {
    q: "Is parking available with the 2 BHK?",
    a: "Yes. Blossom Residency provides ample car parking on the premises with 24x7 manned security and CCTV surveillance. Parking allocation is confirmed in your written cost sheet at booking.",
  },
  {
    q: "How do I book a 2 BHK site visit?",
    a: `Call or WhatsApp ${PROJECT.phone}. We'll schedule a free site visit, show you the available 2 BHK units floor by floor and share the full cost sheet with zero hidden charges.`,
  },
];

const SPECS = [
  { icon: Ruler, label: "Carpet area", value: "588 sq ft" },
  { icon: Home, label: "Configuration", value: "Twin bedrooms" },
  { icon: IndianRupee, label: "Price", value: "On request" },
  { icon: MapPin, label: "Location", value: PROJECT.location },
  { icon: TrainFront, label: "Nilje Station", value: "12 min walk" },
  { icon: Footprints, label: "Xperia Mall", value: "5 min drive" },
  { icon: ShieldCheck, label: "MahaRERA", value: PROJECT.rera },
];

const FITS = [
  { title: "Growing families", body: "A separate bedroom for the kids — or for parents who move in — without trading away the living room." },
  { title: "Work from home", body: "The second bedroom doubles as a quiet study or home office, away from the TV and the kitchen." },
  { title: "Upgrading from a 1 BHK", body: "Stay in Dombivli East, keep the commute, and add about 154 sq ft of carpet to your life." },
  { title: "Long-term investors", body: "Family-sized homes near a station and a mall hold rental demand from tenants who stay longer." },
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
        subtitle={`Spacious 588 sq ft carpet, twin-bedroom 2 BHK homes at Blossom Residency — Nilje, Dombivli East, about a 12 minute walk from Nilje Railway Station. Vastu-compliant layouts in a ${PROJECT.tower.toLowerCase()} by ${PROJECT.developer}.`}
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
              live, a 5 minute drive from Xperia Mall and PVR.
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
                `${AMENITIES.length}+ premium lifestyle amenities`,
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

      {/* Who the 2 BHK is for — answers the "1 or 2 BHK" decision behind most searches */}
      <section className="bg-ink py-16 sm:py-24">
        <div className="container-luxe">
          <div className="flex items-center gap-2 text-gold">
            <Users size={18} />
            <span className="text-sm font-semibold uppercase tracking-wide">Who it suits</span>
          </div>
          <h2 className="mt-3 max-w-3xl font-serif text-3xl font-light text-white sm:text-4xl">
            Is a 2 BHK in Dombivli East <span className="gold-text">right for you?</span>
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-sand/70">
            Most buyers searching for a 2 BHK flat in Dombivli East are solving for one of four things.
            If any of these sound like you, the twin-bedroom layout earns its extra space.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FITS.map((f) => (
              <div key={f.title} className="glass rounded-3xl p-6">
                <h3 className="font-serif text-xl text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sand/60">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price breakdown — explains the total without inventing a number */}
      <section className="bg-ink-soft py-16 sm:py-24">
        <div className="container-luxe">
          <h2 className="max-w-3xl font-serif text-3xl font-light text-white sm:text-4xl">
            2 BHK price in Dombivli East — <span className="gold-text">how the total adds up</span>
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-sand/70">
            The 2 BHK at Blossom Residency is priced on request because the figure moves with the floor
            and the specific unit — a higher floor or a better-facing flat costs a little more. Whatever
            the unit, you get the full cost sheet in writing before you pay anything, built from the
            same four parts:
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Agreement value", "The unit price for 588 sq ft carpet, by floor and facing"],
              ["Stamp duty & registration", "At the prevailing Maharashtra rates on the agreement value"],
              ["GST", "As applicable to under-construction homes at the time of booking"],
              ["Maintenance & deposits", "Listed in the written cost sheet — no verbal add-ons"],
            ].map(([k, v]) => (
              <div key={k} className="glass rounded-3xl p-6">
                <h3 className="font-medium text-white">{k}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sand/60">{v}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-sand/60">
            Comparing budgets? The 1 BHK starts at {PROJECT.startingPrice} — see the{" "}
            <Link href="/price" className="text-gold underline-offset-4 hover:underline">
              price &amp; payment plan
            </Link>{" "}
            page for how payments are staged.
          </p>
        </div>
      </section>

      {/* Measured distances */}
      <section className="bg-ink py-16 sm:py-24">
        <div className="container-luxe">
          <h2 className="max-w-3xl font-serif text-3xl font-light text-white sm:text-4xl">
            Distances from your <span className="gold-text">2 BHK</span>
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-sand/70">
            Road-routed from the project&apos;s map pin, not rounded in our favour. For a family the
            numbers that matter are the station, the hospital and the mall — all of them close.
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
            More on schools, hospitals and the neighbourhood in our{" "}
            <Link href="/flats-in-nilje-dombivli-east" className="text-gold underline-offset-4 hover:underline">
              Nilje locality guide
            </Link>
            .
          </p>
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
