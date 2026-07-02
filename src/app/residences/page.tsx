import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Residences from "@/components/Residences";
import RelatedPages from "@/components/RelatedPages";
import CtaBand from "@/components/CtaBand";
import { buildPageJsonLd, jsonLdScript } from "@/lib/seo";
import { PROJECT, SITE_URL } from "@/lib/data";

const PATH = "/residences";
const DESCRIPTION = `Explore 1 & 2 BHK residence configurations at ${PROJECT.name}, Dombivli East — carpet areas, floor plans and starting prices.`;

export const metadata: Metadata = {
  title: "Residences & Floor Plans",
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: `Residences at ${PROJECT.name} | Dombivli East`,
    description: DESCRIPTION,
    url: `${SITE_URL}${PATH}`,
    images: ["/images/hero.png"],
  },
};

export default function Page() {
  const ld = buildPageJsonLd({
    path: PATH,
    name: `Residences & Floor Plans — ${PROJECT.name}`,
    description: DESCRIPTION,
    crumbs: [
      { name: "Home", path: "/" },
      { name: "Residences & Floor Plans", path: PATH },
    ],
  });

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(ld)} />

      <PageHero
        eyebrow="Configurations & Pricing"
        title="Choose your"
        highlight="perfect space"
        subtitle="Smartly planned 1 & 2 BHK residences with abundant natural light, wide balconies and Vastu-compliant layouts."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Residences & Floor Plans" },
        ]}
      />

      <Residences />

      <RelatedPages current={PATH} />
      <CtaBand />
    </PageShell>
  );
}
