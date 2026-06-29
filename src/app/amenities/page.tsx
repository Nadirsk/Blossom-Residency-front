import type { Metadata } from "next";
import Image from "next/image";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import FaqBlock from "@/components/FaqBlock";
import RelatedPages from "@/components/RelatedPages";
import CtaBand from "@/components/CtaBand";
import { buildPageJsonLd, jsonLdScript } from "@/lib/seo";
import { PROJECT, SITE_URL, AMENITIES } from "@/lib/data";

const PATH = "/amenities";
const DESCRIPTION = `${AMENITIES.length} premium amenities at Blossom Residency, Dombivli East — 24x7 security & CCTV, landscaped garden, kids play area, rooftop deck, yoga zone, outdoor gym, indoor games and ample parking.`;

export const metadata: Metadata = {
  title: "Amenities",
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: "Amenities at Blossom Residency | Dombivli East",
    description: DESCRIPTION,
    url: `${SITE_URL}${PATH}`,
    images: ["/images/hero.png"],
  },
};

const FAQS = [
  {
    q: "What amenities does Blossom Residency offer?",
    a: "Residents enjoy 24x7 security with CCTV surveillance, a landscaped garden, kids play area, rooftop amenities, a yoga & meditation deck, outdoor gym, sun-bath beds, a sand pit for toddlers, a bonfire area, indoor games and ample car parking.",
  },
  {
    q: "Are the amenities included for both 1 BHK and 2 BHK residents?",
    a: "Yes. All 11+ amenities are shared community features available to every resident, whether you buy a 1 BHK or a 2 BHK.",
  },
  {
    q: "Is there parking and security?",
    a: "Yes — Blossom Residency provides ample car parking, 24x7 manned security and 24-hour CCTV surveillance across the premises.",
  },
];

export default function Page() {
  const ld = buildPageJsonLd({
    path: PATH,
    name: "Amenities at Blossom Residency — Dombivli East",
    description: DESCRIPTION,
    crumbs: [
      { name: "Home", path: "/" },
      { name: "Amenities", path: PATH },
    ],
    faqs: FAQS,
  });

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(ld)} />

      <PageHero
        eyebrow="Lifestyle"
        title={`${AMENITIES.length}+ Premium`}
        highlight="Amenities"
        subtitle={`Every day at Blossom Residency is elevated by ${AMENITIES.length}+ thoughtfully curated amenities — from a rooftop deck and outdoor gym to a kids' play area, landscaped garden and round-the-clock security, in Dombivli East.`}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Amenities" },
        ]}
      />

      <section className="bg-ink-soft py-16 sm:py-24">
        <div className="container-luxe">
          <h2 className="max-w-2xl font-serif text-3xl font-light text-white sm:text-4xl">
            A lifestyle that comes <span className="gold-text">built in</span>
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {AMENITIES.map((a) => (
              <div
                key={a.name}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-ink shadow-card transition-all duration-500 hover:border-gold/40"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={a.img}
                    alt={`${a.name} at Blossom Residency, Dombivli East`}
                    fill
                    sizes="(max-width:768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                </div>
                <h3 className="px-5 py-4 font-serif text-lg text-white">{a.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqBlock faqs={FAQS} heading="Amenities — frequently asked questions" />
      <RelatedPages current={PATH} />
      <CtaBand />
    </PageShell>
  );
}
