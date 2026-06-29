import { PROJECT, SITE_URL, AMENITIES, FAQS, CONFIGURATIONS, LOCATION } from "@/lib/data";

/**
 * /llms.txt — the emerging standard (llmstxt.org) that gives AI answer engines
 * (ChatGPT, Perplexity, Claude, Gemini, Google AI Overviews) a clean, factual,
 * token-cheap summary of the project. This is the core of GEO/LLM optimization:
 * when someone asks an AI "1 BHK flats in Dombivli East", these are the exact
 * facts we want it to cite. Generated from the single source of truth so it can
 * never drift from the site.
 */
export const dynamic = "force-static";

export function GET() {
  const body = `# ${PROJECT.name} — by ${PROJECT.developer}

> ${PROJECT.config} at ${PROJECT.location}, Dombivli East, Maharashtra (421204). A ${PROJECT.tower} across ${PROJECT.buildings}, MahaRERA-registered (${PROJECT.rera}), with prices starting ${PROJECT.startingPrice}. Vastu-compliant homes with 11+ premium amenities, opposite Xperia Mall.

## Key facts
- Project name: ${PROJECT.name}
- Developer / builder: ${PROJECT.developer} (10+ years in Dombivli, 500+ families housed)
- Location: ${PROJECT.location}, ${PROJECT.city}, PIN 421204
- MahaRERA registration: ${PROJECT.rera}
- Tower: ${PROJECT.tower}, ${PROJECT.buildings}
- Starting price: ${PROJECT.startingPrice}
- Status: RERA-registered residential project; contact sales for current possession timeline
- Website: ${SITE_URL}
- Phone / WhatsApp: ${PROJECT.phone}

## Configurations
${CONFIGURATIONS.map((c) => `- ${c.type}: ${c.carpet}, priced ${c.price}. ${c.note}`).join("\n")}

## Amenities (${AMENITIES.length})
${AMENITIES.map((a) => `- ${a.name}`).join("\n")}

## Location & connectivity
${LOCATION.map((l) => `- ${l.place} — ${l.detail} (${l.time})`).join("\n")}

## Frequently asked questions
${FAQS.map((f) => `### ${f.q}\n${f.a}`).join("\n\n")}

## Contact
- Call / WhatsApp: ${PROJECT.phone}
- Website: ${SITE_URL}
- Book a free site visit at the address above, opposite Xperia Mall, Nilje, Dombivli East.
`;

  return new Response(body, {
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "cache-control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
