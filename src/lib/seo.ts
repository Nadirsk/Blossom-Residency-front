import {
  PROJECT,
  SITE_URL,
  GEO,
  FAQS,
  AMENITIES,
  CONFIGURATIONS,
  TESTIMONIALS,
  SAME_AS,
  EMAIL,
  HOURS,
  RATING,
  MAP_LINK,
} from "./data";

const HERO_IMG = `${SITE_URL}/images/hero.png`;
const LOGO_IMG = `${SITE_URL}/images/logo.png`;

const address = {
  "@type": "PostalAddress",
  streetAddress: PROJECT.location,
  addressLocality: "Dombivli East",
  addressRegion: "Maharashtra",
  postalCode: "421204",
  addressCountry: "IN",
};

const geo = { "@type": "GeoCoordinates", latitude: GEO.lat, longitude: GEO.lng };

const areaServed = [
  { "@type": "City", name: "Dombivli" },
  { "@type": "City", name: "Kalyan" },
  { "@type": "City", name: "Thane" },
  { "@type": "City", name: "Navi Mumbai" },
];

/** Site-wide entities — repeated on every page so the brand entity is reinforced
 *  and every @id reference (#organization / #website) resolves locally. */
function siteNodes() {
  return [
    {
      "@type": "RealEstateAgent",
      "@id": `${SITE_URL}/#organization`,
      name: PROJECT.developer,
      alternateName: `${PROJECT.developer} Dombivli`,
      slogan: PROJECT.tagline,
      description: `${PROJECT.developer} is a Dombivli-based real estate developer with 10+ years of experience building RERA-compliant residential projects, including ${PROJECT.name} in Dombivli East.`,
      url: SITE_URL,
      image: HERO_IMG,
      logo: { "@type": "ImageObject", url: LOGO_IMG },
      telephone: PROJECT.phone,
      ...(EMAIL ? { email: EMAIL } : {}),
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, Cheque, Bank Transfer, Home Loan",
      address,
      geo,
      hasMap: MAP_LINK,
      areaServed,
      knowsAbout: [
        "Residential real estate in Dombivli East",
        "1 & 2 BHK apartments",
        "MahaRERA-registered projects",
        "Home loans for property buyers",
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: HOURS.days,
          opens: HOURS.opens,
          closes: HOURS.closes,
        },
      ],
      ...(SAME_AS.length ? { sameAs: SAME_AS } : {}),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: `${PROJECT.name} by ${PROJECT.developer}`,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-IN",
    },
  ];
}

function faqNode(id: string, faqs: { q: string; a: string }[]) {
  return {
    "@type": "FAQPage",
    "@id": id,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/**
 * Homepage structured-data graph. Helps Google understand the project, show the
 * price/RERA/amenities, render FAQ + review rich snippets, surface local-pack
 * results, and feed answer engines (Google AI Overviews, ChatGPT, Perplexity,
 * Gemini) clean, factual entities for AEO/GEO.
 */
export function buildJsonLd() {
  const apartments = CONFIGURATIONS.map((c) => ({
    "@type": "Apartment",
    name: `${c.type} Apartment — ${PROJECT.name}`,
    numberOfRooms: c.type === "1 BHK" ? 1 : 2,
    floorSize: { "@type": "QuantitativeValue", value: Number(c.sqft), unitCode: "FTK" },
    occupancy: { "@type": "QuantitativeValue", minValue: c.type === "1 BHK" ? 1 : 2, maxValue: c.type === "1 BHK" ? 3 : 5 },
    permittedUsage: "Residential",
  }));

  const reviews = TESTIMONIALS.map((t) => ({
    "@type": "Review",
    author: { "@type": "Person", name: t.name },
    reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5", worstRating: "1" },
    reviewBody: t.text,
  }));

  const aggregateRating = {
    "@type": "AggregateRating",
    ratingValue: RATING.value,
    reviewCount: RATING.count,
    bestRating: "5",
    worstRating: "1",
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      ...siteNodes(),
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/#webpage`,
        url: SITE_URL,
        name: `${PROJECT.name} — 1 & 2 BHK Flats in Dombivli East`,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": `${SITE_URL}/#project` },
        primaryImageOfPage: { "@type": "ImageObject", url: HERO_IMG },
        inLanguage: "en-IN",
        speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2"] },
        breadcrumb: { "@id": `${SITE_URL}/#breadcrumb` },
      },
      {
        "@type": ["Residence", "Product"],
        "@id": `${SITE_URL}/#project`,
        name: PROJECT.name,
        url: SITE_URL,
        image: [HERO_IMG],
        description: `${PROJECT.config} at ${PROJECT.location}. ${PROJECT.tower}, ${PROJECT.buildings}. Starting ${PROJECT.startingPrice}. MahaRERA ${PROJECT.rera}.`,
        brand: { "@type": "Brand", name: PROJECT.developer },
        address,
        geo,
        hasMap: MAP_LINK,
        numberOfRooms: "1-2 BHK",
        containsPlace: apartments,
        amenityFeature: AMENITIES.map((a) => ({
          "@type": "LocationFeatureSpecification",
          name: a.name,
          value: true,
        })),
        additionalProperty: [
          { "@type": "PropertyValue", name: "MahaRERA", value: PROJECT.rera },
          { "@type": "PropertyValue", name: "Configuration", value: PROJECT.tower },
          { "@type": "PropertyValue", name: "Buildings", value: PROJECT.buildings },
          { "@type": "PropertyValue", name: "1 BHK Carpet Area", value: "430 sq ft" },
          { "@type": "PropertyValue", name: "2 BHK Carpet Area", value: "588 sq ft" },
        ],
        aggregateRating,
        review: reviews,
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          price: PROJECT.startingPriceRaw.replace(/,/g, ""),
          priceValidUntil: "2026-12-31",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "INR",
            price: PROJECT.startingPriceRaw.replace(/,/g, ""),
            valueAddedTaxIncluded: false,
          },
          availability: "https://schema.org/InStock",
          itemCondition: "https://schema.org/NewCondition",
          url: SITE_URL,
          seller: { "@id": `${SITE_URL}/#organization` },
          hasMerchantReturnPolicy: {
            "@type": "MerchantReturnPolicy",
            applicableCountry: "IN",
            returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
          },
        },
      },
      faqNode(`${SITE_URL}/#faq`, [...FAQS]),
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Dombivli East", item: `${SITE_URL}/#location` },
          { "@type": "ListItem", position: 3, name: PROJECT.name, item: `${SITE_URL}/#top` },
        ],
      },
    ],
  };
}

type Crumb = { name: string; path: string };
type ApartmentSpec = { type: string; rooms: number; sqft: string; carpet: string; priceRaw?: string };

/** Self-contained structured-data graph for a dedicated landing page. */
export function buildPageJsonLd(opts: {
  path: string;
  name: string;
  description: string;
  crumbs: Crumb[];
  faqs?: { q: string; a: string }[];
  apartment?: ApartmentSpec;
  article?: { headline: string; datePublished: string; image?: string };
}) {
  const url = `${SITE_URL}${opts.path}`;
  const graph: Record<string, unknown>[] = [
    ...siteNodes(),
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: opts.name,
      description: opts.description,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#project` },
      primaryImageOfPage: { "@type": "ImageObject", url: HERO_IMG },
      inLanguage: "en-IN",
      speakable: { "@type": "SpeakableSpecification", cssSelector: ["h1", "h2"] },
      breadcrumb: { "@id": `${url}#breadcrumb` },
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${url}#breadcrumb`,
      itemListElement: opts.crumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: `${SITE_URL}${c.path}`,
      })),
    },
  ];

  if (opts.apartment) {
    const a = opts.apartment;
    graph.push({
      "@type": ["Apartment", "Product"],
      "@id": `${url}#unit`,
      name: `${a.type} Flat at ${PROJECT.name}, Dombivli East`,
      description: `${a.type} apartment (${a.carpet}) at ${PROJECT.name}, ${PROJECT.location}. MahaRERA ${PROJECT.rera}.`,
      image: [HERO_IMG],
      brand: { "@type": "Brand", name: PROJECT.developer },
      numberOfRooms: a.rooms,
      floorSize: { "@type": "QuantitativeValue", value: Number(a.sqft), unitCode: "FTK" },
      address,
      geo,
      ...(a.priceRaw
        ? {
            offers: {
              "@type": "Offer",
              priceCurrency: "INR",
              price: a.priceRaw,
              priceValidUntil: "2026-12-31",
              availability: "https://schema.org/InStock",
              itemCondition: "https://schema.org/NewCondition",
              url,
              seller: { "@id": `${SITE_URL}/#organization` },
              hasMerchantReturnPolicy: {
                "@type": "MerchantReturnPolicy",
                applicableCountry: "IN",
                returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
              },
            },
          }
        : {}),
    });
  }

  if (opts.article) {
    graph.push({
      "@type": "Article",
      "@id": `${url}#article`,
      headline: opts.article.headline,
      datePublished: opts.article.datePublished,
      dateModified: opts.article.datePublished,
      image: opts.article.image || HERO_IMG,
      inLanguage: "en-IN",
      author: { "@id": `${SITE_URL}/#organization` },
      publisher: { "@id": `${SITE_URL}/#organization` },
      mainEntityOfPage: { "@id": `${url}#webpage` },
    });
  }

  if (opts.faqs?.length) {
    graph.push(faqNode(`${url}#faq`, opts.faqs));
  }

  return { "@context": "https://schema.org", "@graph": graph };
}

/** Tiny helper to render a JSON-LD <script> in a server component. */
export function jsonLdScript(data: unknown) {
  return { __html: JSON.stringify(data) };
}
