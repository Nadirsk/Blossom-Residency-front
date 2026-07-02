import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import RelatedPages from "@/components/RelatedPages";
import CtaBand from "@/components/CtaBand";
import { buildPageJsonLd, jsonLdScript } from "@/lib/seo";
import { PROJECT, SITE_URL } from "@/lib/data";

const PATH = "/about";
const DESCRIPTION = `About ${PROJECT.name} by ${PROJECT.developer} — thoughtfully designed 1 & 2 BHK homes in Nilje, Dombivli East, with Vastu-compliant layouts.`;

export const metadata: Metadata = {
  title: "About the Project",
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: `About ${PROJECT.name} | ${PROJECT.developer}`,
    description: DESCRIPTION,
    url: `${SITE_URL}${PATH}`,
    images: ["/images/hero.png"],
  },
};

export default function Page() {
  const ld = buildPageJsonLd({
    path: PATH,
    name: `About ${PROJECT.name} — ${PROJECT.developer}`,
    description: DESCRIPTION,
    crumbs: [
      { name: "Home", path: "/" },
      { name: "About the Project", path: PATH },
    ],
  });

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(ld)} />

      <PageHero
        eyebrow="About the Project"
        title="Thoughtfully designed homes for"
        highlight="modern living"
        subtitle={`Located in the prime growth corridor of Nilje, Dombivli East, ${PROJECT.name} offers ${PROJECT.config.toLowerCase()} with modern amenities, Vastu-compliant layouts and excellent connectivity.`}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "About the Project" },
        ]}
      />

      <About />

      <RelatedPages current={PATH} />
      <CtaBand />
    </PageShell>
  );
}
