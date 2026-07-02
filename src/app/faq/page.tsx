import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Faq from "@/components/Faq";
import RelatedPages from "@/components/RelatedPages";
import CtaBand from "@/components/CtaBand";
import { buildPageJsonLd, jsonLdScript } from "@/lib/seo";
import { PROJECT, SITE_URL, FAQS } from "@/lib/data";

const PATH = "/faq";
const DESCRIPTION = `Frequently asked questions about ${PROJECT.name}, Dombivli East — pricing, configurations, amenities, location and booking process.`;

export const metadata: Metadata = {
  title: "FAQ",
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: `FAQ | ${PROJECT.name}, Dombivli East`,
    description: DESCRIPTION,
    url: `${SITE_URL}${PATH}`,
    images: ["/images/hero.png"],
  },
};

export default function Page() {
  const ld = buildPageJsonLd({
    path: PATH,
    name: `FAQ — ${PROJECT.name}`,
    description: DESCRIPTION,
    crumbs: [
      { name: "Home", path: "/" },
      { name: "FAQ", path: PATH },
    ],
    faqs: [...FAQS],
  });

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(ld)} />

      <PageHero
        eyebrow="FAQ"
        title="Everything you need"
        highlight="to know"
        subtitle="Still curious? Message us on WhatsApp and our team will respond personally."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "FAQ" },
        ]}
      />

      <Faq />

      <RelatedPages current={PATH} />
      <CtaBand />
    </PageShell>
  );
}
