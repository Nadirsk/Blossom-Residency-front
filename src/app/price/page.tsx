import type { Metadata } from "next";
import Link from "next/link";
import { IndianRupee, FileText, Landmark, BadgeCheck } from "lucide-react";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import FaqBlock from "@/components/FaqBlock";
import RelatedPages from "@/components/RelatedPages";
import CtaBand from "@/components/CtaBand";
import { buildPageJsonLd, jsonLdScript } from "@/lib/seo";
import { PROJECT, SITE_URL, CONFIGURATIONS } from "@/lib/data";

const PATH = "/price";
const DESCRIPTION = `Blossom Residency price list — 1 BHK flats from ${PROJECT.startingPrice} (~430 sq ft) and 2 BHK (588 sq ft) on request, in Dombivli East. MahaRERA ${PROJECT.rera}. Home-loan ready. Get the full cost sheet.`;

export const metadata: Metadata = {
  title: "Price & Payment Plan",
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: "Blossom Residency Price List | 1 & 2 BHK Dombivli East",
    description: DESCRIPTION,
    url: `${SITE_URL}${PATH}`,
    images: ["/images/hero.png"],
  },
};

const FAQS = [
  {
    q: "What is the starting price at Blossom Residency?",
    a: `Homes start from ${PROJECT.startingPrice}. The 1 BHK (~430 sq ft carpet) starts at this price; 2 BHK (588 sq ft) pricing is shared on request, as it varies by floor and unit.`,
  },
  {
    q: "Are there any hidden charges?",
    a: "No. Blossom Residency follows transparent pricing with zero hidden charges. The full cost sheet (including applicable government charges) is shared upfront before booking.",
  },
  {
    q: "Are home loans available, and from which banks?",
    a: `Yes. Because the project is MahaRERA-registered (${PROJECT.rera}), it is eligible for home loans from leading banks and housing finance companies. Our team can connect you with loan partners for quick approval.`,
  },
  {
    q: "How do I get the latest price sheet?",
    a: `Message us on WhatsApp or call ${PROJECT.phone} and we'll share the latest, floor-wise price sheet and payment plan for both 1 BHK and 2 BHK.`,
  },
];

export default function Page() {
  const ld = buildPageJsonLd({
    path: PATH,
    name: "Blossom Residency Price & Payment Plan",
    description: DESCRIPTION,
    crumbs: [
      { name: "Home", path: "/" },
      { name: "Price & Payment Plan", path: PATH },
    ],
    faqs: FAQS,
  });

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(ld)} />

      <PageHero
        eyebrow="Pricing"
        title="Blossom Residency"
        highlight="Price & Payment Plan"
        subtitle={`Transparent pricing in Dombivli East — 1 BHK from ${PROJECT.startingPrice}, 2 BHK on request. Zero hidden charges, MahaRERA ${PROJECT.rera}, and home-loan assistance from leading banks.`}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Price & Payment Plan" },
        ]}
      />

      {/* Price table */}
      <section className="bg-ink-soft py-16 sm:py-24">
        <div className="container-luxe">
          <h2 className="font-serif text-3xl font-light text-white sm:text-4xl">
            Price list — <span className="gold-text">1 & 2 BHK</span>
          </h2>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[560px] overflow-hidden rounded-2xl border border-white/10 text-left">
              <thead className="bg-white/[0.04] text-xs uppercase tracking-wider text-sand/55">
                <tr>
                  <th className="px-5 py-4 font-semibold">Configuration</th>
                  <th className="px-5 py-4 font-semibold">Carpet area</th>
                  <th className="px-5 py-4 font-semibold">Starting price</th>
                  <th className="px-5 py-4 font-semibold">Details</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-sm">
                {CONFIGURATIONS.map((c) => (
                  <tr key={c.type} className="text-sand/80">
                    <td className="px-5 py-4 font-serif text-lg text-white">{c.type}</td>
                    <td className="px-5 py-4">{c.carpet}</td>
                    <td className="px-5 py-4 font-medium text-gold">{c.price}</td>
                    <td className="px-5 py-4">
                      <Link
                        href={c.type === "1 BHK" ? "/1-bhk-flats-in-dombivli-east" : "/2-bhk-flats-in-dombivli-east"}
                        className="text-gold underline-offset-4 hover:underline"
                      >
                        View {c.type}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-sand/45">
            *Prices are indicative, exclusive of applicable government charges, and subject to change.
            Request the current cost sheet for exact, floor-wise pricing.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: IndianRupee, title: "Starts ₹29.99 L*", body: "Among the most accessible entry points in Dombivli East." },
              { icon: BadgeCheck, title: "Zero hidden charges", body: "Full, transparent cost sheet shared before you book." },
              { icon: Landmark, title: "Home-loan ready", body: "MahaRERA-registered; loans from leading banks." },
              { icon: FileText, title: "Clear documentation", body: "RERA-compliant agreements and on-time possession." },
            ].map((b) => (
              <div key={b.title} className="glass rounded-3xl p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                  <b.icon size={20} />
                </span>
                <h3 className="mt-4 font-serif text-lg text-white">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sand/60">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqBlock faqs={FAQS} heading="Pricing — frequently asked questions" />
      <RelatedPages current={PATH} />
      <CtaBand
        heading="Get the full cost sheet"
        sub="Floor-wise pricing, payment plan and home-loan options — shared instantly on WhatsApp."
        waMessage={`Hi, please share the full price sheet and payment plan for ${PROJECT.name}.`}
      />
    </PageShell>
  );
}
