import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Gallery from "@/components/Gallery";
import RelatedPages from "@/components/RelatedPages";
import CtaBand from "@/components/CtaBand";
import { buildPageJsonLd, jsonLdScript } from "@/lib/seo";
import { PROJECT, SITE_URL } from "@/lib/data";

const PATH = "/gallery";
const DESCRIPTION = `Photo gallery of ${PROJECT.name}, Dombivli East — exteriors, interiors, amenities and lifestyle spaces.`;

export const metadata: Metadata = {
  title: "Gallery",
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: `Gallery | ${PROJECT.name}, Dombivli East`,
    description: DESCRIPTION,
    url: `${SITE_URL}${PATH}`,
    images: ["/images/hero.png"],
  },
};

export default function Page() {
  const ld = buildPageJsonLd({
    path: PATH,
    name: `Gallery — ${PROJECT.name}`,
    description: DESCRIPTION,
    crumbs: [
      { name: "Home", path: "/" },
      { name: "Gallery", path: PATH },
    ],
  });

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(ld)} />

      <PageHero
        eyebrow="Gallery"
        title="See the project,"
        highlight="up close"
        subtitle={`Take a visual tour of ${PROJECT.name} — exteriors, interiors, amenities and the lifestyle that awaits.`}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Gallery" },
        ]}
      />

      <Gallery />

      <RelatedPages current={PATH} />
      <CtaBand />
    </PageShell>
  );
}
