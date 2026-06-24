import { PROJECT, SITE_URL, GEO, FAQS, AMENITIES } from "./data";

const HERO_IMG = `${SITE_URL}/images/hero.png`;

/**
 * Rich structured-data graph. Helps Google understand the project, show the
 * price/RERA/amenities, render FAQ rich snippets, and surface local-pack results.
 */
export function buildJsonLd() {
  const address = {
    "@type": "PostalAddress",
    streetAddress: PROJECT.location,
    addressLocality: "Dombivli East",
    addressRegion: "Maharashtra",
    postalCode: "421204",
    addressCountry: "IN",
  };

  const geo = { "@type": "GeoCoordinates", latitude: GEO.lat, longitude: GEO.lng };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "RealEstateAgent",
        "@id": `${SITE_URL}/#organization`,
        name: PROJECT.developer,
        slogan: PROJECT.tagline,
        url: SITE_URL,
        image: HERO_IMG,
        logo: HERO_IMG,
        telephone: PROJECT.phone,
        priceRange: "₹₹",
        address,
        geo,
        areaServed: [
          { "@type": "City", name: "Dombivli" },
          { "@type": "City", name: "Kalyan" },
          { "@type": "City", name: "Thane" },
          { "@type": "City", name: "Navi Mumbai" },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: `${PROJECT.name} by ${PROJECT.developer}`,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "en-IN",
      },
      {
        "@type": ["Residence", "Product"],
        "@id": `${SITE_URL}/#project`,
        name: PROJECT.name,
        url: SITE_URL,
        image: [HERO_IMG],
        description: `${PROJECT.config} at ${PROJECT.location}. ${PROJECT.tower}. MahaRERA ${PROJECT.rera}.`,
        brand: { "@type": "Brand", name: PROJECT.developer },
        address,
        geo,
        numberOfRooms: "1-2 BHK",
        amenityFeature: AMENITIES.map((a) => ({
          "@type": "LocationFeatureSpecification",
          name: a.name,
          value: true,
        })),
        additionalProperty: [
          { "@type": "PropertyValue", name: "MahaRERA", value: PROJECT.rera },
          { "@type": "PropertyValue", name: "Configuration", value: PROJECT.tower },
        ],
        offers: {
          "@type": "Offer",
          priceCurrency: "INR",
          price: "2999999",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "INR",
            price: "2999999",
            valueAddedTaxIncluded: false,
          },
          availability: "https://schema.org/InStock",
          url: SITE_URL,
          seller: { "@id": `${SITE_URL}/#organization` },
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: "Dombivli East", item: `${SITE_URL}/#location` },
          { "@type": "ListItem", position: 3, name: PROJECT.name, item: `${SITE_URL}/#top` },
        ],
      },
    ],
  };
}
