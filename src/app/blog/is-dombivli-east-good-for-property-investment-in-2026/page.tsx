import type { Metadata } from "next";
import Link from "next/link";
import { Clock, Calendar } from "lucide-react";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import FaqBlock from "@/components/FaqBlock";
import RelatedPages from "@/components/RelatedPages";
import CtaBand from "@/components/CtaBand";
import { buildPageJsonLd, jsonLdScript } from "@/lib/seo";
import { PROJECT, SITE_URL } from "@/lib/data";
import { BLOG_POSTS, blogPath } from "@/lib/routes";

const post = BLOG_POSTS[0];
const PATH = blogPath(post.slug);
const DESCRIPTION =
  "Is Dombivli East a good place to invest in property in 2026? We look at connectivity, the upcoming metro, pricing, rental demand and what makes the Nilje corridor stand out.";

export const metadata: Metadata = {
  title: post.title,
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: post.title,
    description: DESCRIPTION,
    type: "article",
    url: `${SITE_URL}${PATH}`,
    images: ["/images/hero.png"],
  },
};

const FAQS = [
  {
    q: "Is Dombivli East a good area to invest in 2026?",
    a: "Yes — Dombivli East offers an attractive mix of affordable entry prices, improving connectivity (including the upcoming Hedutane metro), and steady rental demand, which together support good appreciation potential for buyers in 2026.",
  },
  {
    q: "What is the price of flats in Dombivli East?",
    a: `Entry-level 1 BHK flats in Dombivli East can start around ${PROJECT.startingPrice} — for example, at Blossom Residency in Nilje, opposite Xperia Mall. Exact pricing varies by project, floor and configuration.`,
  },
  {
    q: "Will the metro improve property value in Dombivli East?",
    a: "Improved metro and road connectivity typically lifts both rental demand and resale value over time, which is why corridors like Nilje near the upcoming Hedutane station are drawing investor interest.",
  },
];

export default function Page() {
  const ld = buildPageJsonLd({
    path: PATH,
    name: post.title,
    description: DESCRIPTION,
    crumbs: [
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: post.title, path: PATH },
    ],
    faqs: FAQS,
    article: { headline: post.title, datePublished: post.datePublished, image: `${SITE_URL}/images/hero.png` },
  });

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(ld)} />

      <PageHero
        eyebrow="Investment Guide"
        title="Is Dombivli East good for property"
        highlight="investment in 2026?"
        subtitle="A practical, data-led look at why Dombivli East — and the Nilje corridor opposite Xperia Mall — has become one of the MMR's most-watched affordable-housing markets."
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: "Dombivli East investment 2026" },
        ]}
        showBrochure={false}
      />

      <article className="bg-ink-soft py-16 sm:py-24">
        <div className="container-luxe max-w-3xl">
          <div className="flex flex-wrap items-center gap-4 text-xs text-sand/45">
            <span className="inline-flex items-center gap-1.5"><Calendar size={12} /> June 2026</span>
            <span className="inline-flex items-center gap-1.5"><Clock size={12} /> {post.readMins} min read</span>
          </div>

          <div className="mt-8 space-y-5 text-base leading-relaxed text-sand/75">
            <p className="text-lg text-sand/85">
              Short answer: <strong className="text-white">yes</strong> — for most buyers, Dombivli East
              in 2026 offers a rare combination of affordable entry prices, fast-improving connectivity
              and dependable rental demand. Here&apos;s why the area, and the Nilje pocket in
              particular, keeps showing up on investor shortlists.
            </p>

            <h2 className="pt-4 font-serif text-2xl font-light text-white">1. Affordability that still buys quality</h2>
            <p>
              Compared with Thane, Mulund or Navi Mumbai, Dombivli East remains one of the most
              accessible parts of the Mumbai Metropolitan Region. Entry-level 1 BHK homes can start
              around {PROJECT.startingPrice} — at{" "}
              <Link href="/1-bhk-flats-in-dombivli-east" className="text-gold underline-offset-4 hover:underline">
                Blossom Residency&apos;s 1 BHK
              </Link>
              , for instance — while{" "}
              <Link href="/2-bhk-flats-in-dombivli-east" className="text-gold underline-offset-4 hover:underline">
                2 BHK homes
              </Link>{" "}
              stay within reach for end-users upgrading from rentals. Lower ticket sizes mean a wider
              buyer pool at resale and easier rental yields.
            </p>

            <h2 className="pt-4 font-serif text-2xl font-light text-white">2. Connectivity is the real catalyst</h2>
            <p>
              The single biggest driver of property value is connectivity, and Dombivli East is in the
              middle of an upgrade cycle. The Central Line keeps the area linked to the city, the
              upcoming Hedutane metro station is set to cut travel times further, and Kalyan-Shil Road
              offers direct links to Thane and Navi Mumbai. Projects sitting on this corridor — like
              the Nilje pocket opposite Xperia Mall — tend to benefit first. See the full{" "}
              <Link href="/location" className="text-gold underline-offset-4 hover:underline">
                location &amp; connectivity breakdown
              </Link>
              .
            </p>

            <h2 className="pt-4 font-serif text-2xl font-light text-white">3. Rental demand is steady</h2>
            <p>
              A growing base of working professionals, an expanding retail and social infrastructure
              (malls, schools, hospitals, daily markets), and proximity to employment hubs keep rental
              demand healthy. For investors, that translates into shorter vacancy periods and reliable
              monthly income — especially for well-located 1 BHK units.
            </p>

            <h2 className="pt-4 font-serif text-2xl font-light text-white">4. Look for RERA-registered, amenity-rich projects</h2>
            <p>
              In an appreciating market it pays to buy quality. A MahaRERA registration (such as{" "}
              {PROJECT.rera} for Blossom Residency) protects the buyer and signals a compliant,
              on-time developer. Amenity-rich,{" "}
              <Link href="/new-projects-in-dombivli-east" className="text-gold underline-offset-4 hover:underline">
                newer projects
              </Link>{" "}
              also command better resale and rental premiums than older, bare-bones buildings.
            </p>

            <div className="rounded-2xl border border-gold/25 bg-gold/[0.06] p-6">
              <h3 className="font-serif text-xl text-white">The bottom line</h3>
              <p className="mt-2 text-sm text-sand/75">
                Dombivli East in 2026 suits both first-time home-buyers and investors: affordable entry,
                improving infrastructure and steady demand. The best value sits in RERA-registered new
                projects on the connectivity corridor — exactly where{" "}
                <Link href="/" className="text-gold underline-offset-4 hover:underline">
                  Blossom Residency
                </Link>{" "}
                is positioned.
              </p>
            </div>

            <p className="text-xs text-sand/45">
              This article is for general information and does not constitute financial or investment
              advice. Verify all project details, pricing and approvals with the developer before
              purchase.
            </p>
          </div>
        </div>
      </article>

      <FaqBlock faqs={FAQS} heading="Dombivli East investment — FAQs" />
      <RelatedPages current="/blog" />
      <CtaBand />
    </PageShell>
  );
}
