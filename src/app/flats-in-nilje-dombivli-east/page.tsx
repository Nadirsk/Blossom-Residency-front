import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, GraduationCap, HeartPulse, ShoppingBag, TrainFront } from "lucide-react";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import FaqBlock from "@/components/FaqBlock";
import RelatedPages from "@/components/RelatedPages";
import CtaBand from "@/components/CtaBand";
import { buildPageJsonLd, jsonLdScript } from "@/lib/seo";
import { PROJECT, SITE_URL, DISTANCES, CONFIGURATIONS, MAP_DIRECTIONS } from "@/lib/data";

const PATH = "/flats-in-nilje-dombivli-east";
const DESCRIPTION = `New 1 & 2 BHK flats in Nilje, Dombivli East — a 12 min walk to Nilje station and a 5 min drive to Xperia Mall. Blossom Residency, MahaRERA ${PROJECT.rera}, from ${PROJECT.startingPrice}. Nilje locality guide inside.`;

export const metadata: Metadata = {
  title: "Flats in Nilje, Dombivli East",
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  keywords: [
    "flats in nilje",
    "flats in nilje dombivli east",
    "1 bhk flat in nilje",
    "2 bhk flat in nilje",
    "new project in nilje dombivli",
    "property in nilje",
    "flats near xperia mall dombivli",
    "flats near palava city",
    "flats near nilje station",
  ],
  openGraph: {
    title: "Flats in Nilje, Dombivli East | Blossom Residency",
    description: DESCRIPTION,
    url: `${SITE_URL}${PATH}`,
    images: ["/images/hero.png"],
  },
};

const FAQS = [
  {
    q: "Are there new flats for sale in Nilje, Dombivli East?",
    a: `Yes. Blossom Residency by ${PROJECT.developer} is a new MahaRERA-registered project (${PROJECT.rera}) in Nilje offering 1 BHK (~434 sq ft carpet) and 2 BHK (588 sq ft carpet) flats, starting ${PROJECT.startingPrice}.`,
  },
  {
    q: "What is the price of a 1 BHK flat in Nilje?",
    a: `At Blossom Residency, a 1 BHK in Nilje starts at ${PROJECT.startingPrice} for about 434 sq ft carpet area. The final price depends on floor and unit — request the latest price sheet on WhatsApp.`,
  },
  {
    q: "How far is Nilje from Xperia Mall?",
    a: "Blossom Residency in Nilje is about 1.95 km by road from Lodha Xperia Mall and PVR — roughly a 5 minute drive.",
  },
  {
    q: "Is Nilje well connected by train?",
    a: "Yes. Nilje (Nilaje) Railway Station is about 1 km from Blossom Residency — roughly a 12 minute walk. Dombivli Railway Station on the Central Line is about 9.6 km by road, and the upcoming Hedutane metro station on the Kalyan–Taloja corridor will add another option.",
  },
  {
    q: "Is Nilje part of Dombivli East?",
    a: "Yes. Nilje lies on the eastern side of Dombivli in Thane district (PIN 421204), along the Kalyan–Shil Road growth corridor and next to Palava.",
  },
  {
    q: "Are there schools and hospitals near Nilje?",
    a: "Shree Manav Kalyan and Ratnadeep hospitals are within about 400 m of the project and MGM is about 1.2 km away. Schools including Ryan, Euro School and IRA Global are in neighbouring Palava.",
  },
  {
    q: "Is Nilje a good place to buy a flat?",
    a: "Nilje combines a walkable local station, a mall and hospitals within a short drive, and upcoming metro connectivity — while new construction here is typically priced below more established pockets. For end-users and rental investors it is one of Dombivli East's more practical buys; always verify a project's MahaRERA registration before booking.",
  },
];

const LIFE = [
  {
    icon: TrainFront,
    title: "Commute",
    body: "Nilje station is a 12 minute walk; Kalyan–Shil Road is about 1.7 km for Thane and Navi Mumbai; the Hedutane metro is upcoming.",
  },
  {
    icon: ShoppingBag,
    title: "Shopping & leisure",
    body: "Lodha Xperia Mall and PVR are a 5 minute drive; daily markets and essentials are within walking distance.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    body: "Shree Manav Kalyan and Ratnadeep hospitals under 400 m; MGM hospital about 1.2 km.",
  },
  {
    icon: GraduationCap,
    title: "Schools",
    body: "Ryan, Euro School, IRA Global and more in neighbouring Palava — a short drive for the school run.",
  },
];

export default function Page() {
  const ld = buildPageJsonLd({
    path: PATH,
    name: "Flats in Nilje, Dombivli East — Blossom Residency",
    description: DESCRIPTION,
    crumbs: [
      { name: "Home", path: "/" },
      { name: "Flats in Nilje, Dombivli East", path: PATH },
    ],
    faqs: FAQS,
  });

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(ld)} />

      <PageHero
        eyebrow="Nilje Locality Guide"
        title="Flats in Nilje,"
        highlight="Dombivli East"
        subtitle={`New 1 & 2 BHK flats in Nilje at Blossom Residency — a 12 minute walk to Nilje Railway Station and a 5 minute drive to Xperia Mall. MahaRERA ${PROJECT.rera}, starting ${PROJECT.startingPrice}.`}
        crumbs={[
          { name: "Home", href: "/" },
          { name: "Flats in Nilje, Dombivli East" },
        ]}
      />

      {/* What Nilje is — the locality context portals don't give */}
      <section className="bg-ink-soft py-16 sm:py-24">
        <div className="container-luxe">
          <h2 className="max-w-3xl font-serif text-3xl font-light text-white sm:text-4xl">
            Why buyers are looking at <span className="gold-text">Nilje</span>
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-sand/70">
            Nilje sits on the eastern edge of Dombivli, along the Kalyan–Shil Road corridor and right
            next to Palava. For a long time it was the quiet stretch between Dombivli and the mall; today
            it is where much of Dombivli East&apos;s new residential construction is happening. The
            appeal is simple: a local station you can actually walk to, Xperia Mall and hospitals a few
            minutes away, and new buildings at prices that older, more central pockets no longer offer.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-sand/70">
            If you are searching for a flat in Nilje — whether a first 1 BHK or a family 2 BHK — the
            questions that matter are how far the station really is, what daily life looks like, and
            whether the project is RERA-registered. This page answers all three for Blossom Residency.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {LIFE.map((l) => (
              <div key={l.title} className="glass rounded-3xl p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold/15 text-gold">
                  <l.icon size={20} />
                </span>
                <h3 className="mt-4 font-serif text-lg text-white">{l.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-sand/60">{l.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Measured distances */}
      <section className="bg-ink py-16 sm:py-24">
        <div className="container-luxe">
          <h2 className="max-w-3xl font-serif text-3xl font-light text-white sm:text-4xl">
            Flats near Xperia Mall — <span className="gold-text">the real distances</span>
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-sand/70">
            &ldquo;Near Xperia Mall&rdquo; gets stretched a lot in listings. From Blossom Residency&apos;s
            map pin, road-routed: the mall is about 1.95 km — a 5 minute drive — and Nilje station is
            close enough to walk.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead>
                <tr className="border-b border-white/15 text-xs uppercase tracking-wide text-sand/50">
                  <th scope="col" className="pb-3 font-medium">From Blossom Residency, Nilje</th>
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
            Want to see it for yourself?{" "}
            <a href={MAP_DIRECTIONS} target="_blank" rel="noopener noreferrer" className="text-gold underline-offset-4 hover:underline">
              Get directions to the site
            </a>{" "}
            or read the full{" "}
            <Link href="/location" className="text-gold underline-offset-4 hover:underline">
              location &amp; connectivity guide
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Configurations available in Nilje */}
      <section className="bg-ink-soft py-16 sm:py-24">
        <div className="container-luxe">
          <h2 className="font-serif text-3xl font-light text-white sm:text-4xl">
            1 BHK &amp; 2 BHK flats available in Nilje
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-sand/70">
            Blossom Residency is a {PROJECT.tower.toLowerCase()} across {PROJECT.buildings.toLowerCase()} by{" "}
            {PROJECT.developer}, with Vastu-compliant layouts and zero hidden charges.
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {CONFIGURATIONS.map((c) => (
              <Link
                key={c.type}
                href={c.type === "1 BHK" ? "/1-bhk-flats-in-dombivli-east" : "/2-bhk-flats-in-dombivli-east"}
                className="group glass flex items-center justify-between gap-4 rounded-3xl p-6 transition-all duration-300 hover:border-gold/40"
              >
                <div>
                  <h3 className="font-serif text-2xl text-white">{c.type} in Nilje</h3>
                  <p className="mt-1 text-sm text-sand/60">{c.carpet}</p>
                  <p className="mt-0.5 text-xs text-gold/80">{c.note}</p>
                </div>
                <div className="text-right">
                  <div className="text-xs uppercase tracking-widest text-sand/50">Starting</div>
                  <div className="font-serif text-xl text-white">{c.price}</div>
                  <span className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-gold">
                    View details <ArrowRight size={13} className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <FaqBlock faqs={FAQS} heading="Flats in Nilje — your questions" />
      <RelatedPages current={PATH} />
      <CtaBand
        heading="See Blossom Residency in Nilje"
        sub={`Book a free site visit — walk to Nilje station from the gate and judge the location yourself. 1 BHK from ${PROJECT.startingPrice}.`}
        waMessage={`Hi, I'm looking for a flat in Nilje. Please share details of ${PROJECT.name}.`}
      />
    </PageShell>
  );
}
