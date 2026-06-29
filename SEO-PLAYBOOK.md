# Blossom Residency — Complete SEO / AEO / GEO / LLM Playbook (2026)

Goal: rank top-10 (ideally #1–3) for "Blossom Residency", "1 & 2 BHK flats in Dombivli East",
and related local property searches across Google Search, Google Maps, AI Overviews, and AI
answer engines (ChatGPT, Perplexity, Gemini, Claude).

> Honest expectation setting: For your **brand name** ("Blossom Residency", "Shree Construction
> Blossom Residency") top-1 is achievable within weeks. For **competitive generic local terms**
> ("1 BHK in Dombivli East", "flats near Xperia Mall") top-10 is realistic in **2–4 months** —
> but only if the off-site work below (GBP + reviews + citations + a few backlinks) is done.
> On-site code is ~30% of local ranking; the rest is the checklist in §2–§7.

---

## 1. What was changed in the code (already done ✅)

| File | Change | Why it matters |
|------|--------|----------------|
| `components/Hero.tsx` | H1 now includes "1 & 2 BHK Flats in Dombivli East — Opp. Xperia Mall, Nilje" | Biggest on-page miss; H1 keyword is a top ranking signal |
| `lib/data.ts` | +7 long-tail FAQs (price, carpet area, builder, loans, distance, investment, booking) | AEO — these match real "People Also Ask" queries |
| `lib/data.ts` | `SAME_AS`, `EMAIL`, `HOURS`, `RATING` constants | Feed schema + entity trust |
| `lib/seo.ts` | Reviews + AggregateRating, per-unit `Apartment` nodes, business hours, `sameAs`, `hasMap`, `WebPage` + `speakable`, return policy (clears the warning) | Richer rich-results + voice/AI answers |
| `app/layout.tsx` | Geo meta tags, more keywords, Bing/Yandex verification hooks, Apple web-app tags | Multi-engine + local signals |
| `app/sitemap.ts` | Removed `#fragment` URLs (Google ignores them) | Cleaner indexing |
| `app/llms.txt/route.ts` | **NEW** — `/llms.txt` factual summary for AI engines | GEO/LLM — the 2026 standard |
| `app/manifest.ts` | **NEW** — PWA manifest | Mobile/installability signal |

**Deploy these, then do everything below.**

---

## 2. Do this FIRST (week 1, highest impact)

1. **Connect the real domain** (`blossomresidency.in` if you own it). Set Vercel env
   `NEXT_PUBLIC_SITE_URL=https://blossomresidency.in`. A branded domain beats a `.vercel.app`
   subdomain for trust and rankings. Until then everything still works on the Vercel URL.
2. **Google Search Console** — add the property, paste the verification token into Vercel env
   `NEXT_PUBLIC_GSC_TOKEN`, submit `https://<domain>/sitemap.xml`, and request indexing of the
   homepage.
3. **Bing Webmaster Tools** — add site, set `NEXT_PUBLIC_BING_TOKEN`. (Bing powers ChatGPT search.)
4. **Google Business Profile** — fully optimize per §3. This is the single biggest lever for
   local/Maps rankings.
5. **Get 10+ Google reviews** in the first month (see §5). Reviews are the #1 local-pack factor.

---

## 3. Google Business Profile — complete setup

GBP has **no "keywords" field** (stuffing the business name violates Google's guidelines and risks
suspension). You rank by getting the **categories, services, products, description, posts, Q&A and
reviews** right. Below is everything to fill in.

### 3.1 Business name
Use the **real name only**: `Blossom Residency` (or `Blossom Residency by Shree Construction` only
if that's the actual on-site signage). Do **not** add "1 BHK 2 BHK Dombivli" to the name — that's a
guideline violation and the #1 cause of suspensions.

### 3.2 Categories
- **Primary category:** `Real estate developer` *(most accurate — you build & sell your own project)*
- **Additional categories** (add all that apply):
  - `Apartment complex`
  - `Apartment building`
  - `Home builder`
  - `Construction company`
  - `Real estate agency`
  - `Housing society` *(if listed in your region)*

### 3.3 Business description (750 chars — paste & lightly edit)
> Blossom Residency by Shree Construction offers premium 1 & 2 BHK flats for sale in Dombivli East,
> located opposite Xperia Mall in Nilje. This MahaRERA-registered project (PR1330002600686) is a G+7
> residential tower across 3 buildings, with Vastu-compliant, sun-lit homes starting at ₹29.99 Lakh*.
> Residents enjoy 11+ premium amenities — 24x7 security with CCTV, landscaped garden, kids play area,
> rooftop deck, yoga & meditation zone, outdoor gym, indoor games and ample car parking. Excellent
> connectivity to Dombivli railway station, the upcoming Hedutane metro, Kalyan-Shil Road, Thane and
> Navi Mumbai. With 10+ years of experience and 500+ families housed, Shree Construction delivers
> transparent, RERA-compliant homes with zero hidden charges. Book a free site visit today.

### 3.4 Services — the full keyword list (add each as a service)
GBP lets you add custom services under your categories. Each service name + short description is a
keyword surface that helps you match searches. Add **all** of these:

**Configurations / for sale**
- 1 BHK Flats for Sale
- 2 BHK Flats for Sale
- 1 & 2 BHK Apartments in Dombivli East
- Premium Apartments for Sale
- Affordable Flats in Dombivli East
- Ready Possession Flats
- Under-Construction Flats
- New Residential Project Dombivli East
- Flats Near Xperia Mall
- Flats Near Hedutane Metro
- Vastu-Compliant Flats

**Buying & advisory**
- Property Site Visit (Free)
- Flat Booking Assistance
- Home Loan Assistance
- Real Estate Investment Advisory
- Property Consultation (Free)
- Price Sheet & Cost Sheet Sharing
- Property Documentation Support
- RERA-Registered Project Booking
- NRI Property Investment Assistance
- Resale & Rental Assistance *(only if you actually offer it)*

**Builder / developer services**
- Residential Real Estate Development
- New Construction Homes
- Apartment Development
- Gated Community Living

> Tip: in each service description, naturally use the phrase + "Dombivli East" once, e.g.
> *"Spacious Vastu-compliant 1 BHK flats for sale in Dombivli East, opposite Xperia Mall, starting ₹29.99 Lakh."*

### 3.5 Products (add 2 product cards with photo + price)
- **1 BHK Apartment** — ~430 sq ft carpet — ₹29.99 Lakh* — link to website
- **2 BHK Apartment** — 588 sq ft carpet — Price on request — link to website

### 3.6 Attributes (toggle on those that apply)
Identifies as / women-owned (if applicable), Online appointments, Onsite services, Wheelchair-accessible
entrance/parking, Free parking on premises.

### 3.7 Photos (upload 15–25, geotagged if possible)
Exterior elevation, entrance/gate, sample flat 1 BHK, sample flat 2 BHK, each amenity (gym, garden,
kids area, rooftop, security/CCTV), floor plans, location/landmark (Xperia Mall), team, site-visit
photos. **Add a short video walkthrough** — listings with video rank and convert better. Re-upload a
few fresh photos every 2–3 weeks (freshness signal).

### 3.8 Google Posts (post weekly)
Rotate: "Limited units — 1 BHK from ₹29.99L", "Amenity spotlight: rooftop deck", "Why Dombivli East
is a smart investment", "Now booking site visits this weekend", festival offers. Each post = a CTA
(Book / Call / Learn more → website).

### 3.9 Q&A (seed it yourself, then answer)
Post the FAQs from the site as questions from your own/another account and answer them officially:
price, carpet area, RERA number, possession, home loan, location/distance, amenities. This pre-empts
buyer questions and feeds keywords into GBP.

---

## 4. Keyword strategy (map content → intent)

### Primary (commercial, local)
- blossom residency dombivli / blossom residency shree construction
- 1 bhk flat in dombivli east / 2 bhk flat in dombivli east
- flats in dombivli east / property in dombivli east
- flats near xperia mall / property in nilje dombivli
- new projects in dombivli east

### Secondary
- 1 bhk price in dombivli east, 2 bhk price in dombivli east
- vastu compliant flats dombivli, g+7 project dombivli
- ready possession / under construction flats dombivli east
- best builder in dombivli east, shree construction projects
- affordable flats dombivli east, flats near hedutane metro

### AEO question keywords (now covered by FAQ schema + /llms.txt)
- what is the price of 1 bhk in dombivli east?
- is blossom residency rera approved?
- who is the builder of blossom residency?
- what is the carpet area of a 2 bhk in blossom residency?
- are home loans available / how to book a site visit?
- is dombivli east good for property investment?

---

## 5. Reviews strategy (the #1 local ranking factor)

- Ask **every** site visitor and buyer for a Google review; send the GBP review short-link by WhatsApp.
- Target **10+ in month 1**, then a steady drip (2–4/month) — velocity matters more than total.
- Reply to **every** review (thank by name, mention "Dombivli East" / "1 BHK" / "2 BHK" naturally).
- Once you have a verified Google total, update `RATING.count` in `lib/data.ts` to match it honestly.
- Seed reviews on portals too (99acres, Housing, MagicBricks) — see §6.

---

## 6. Citations & property portals (consistent NAP everywhere)

Use the **exact same** Name / Address / Phone (NAP) on all of these. Inconsistent NAP hurts local rank.
- **NAP:** Blossom Residency, Opp. Xperia Mall, Nilje, Dombivli East, Maharashtra 421204 · +91 93244 66477

Real-estate portals (list the project with photos + link back to the site):
- 99acres, MagicBricks, Housing.com, NoBroker, Square Yards, CommonFloor, QuikrHomes
General/local directories:
- Justdial, Sulekha, IndiaMART, AskLaila, TradeIndia, Google Maps, Bing Places, Apple Maps (via listing partners)
Social profiles (then add their URLs to `SAME_AS` in `lib/data.ts`):
- Facebook Page, Instagram, YouTube (project walkthroughs), LinkedIn (Shree Construction)

Each listing = a citation + often a backlink + another surface AI engines read.

---

## 7. Backlinks (off-page authority)

- **MahaRERA listing** — your project page on maharera.mahaonline.gov.in is an authoritative reference; cite the RERA number everywhere.
- **Local press / real-estate blogs** — a launch article on a Dombivli/Thane property blog.
- **Builder website / partner pages** — link from Shree Construction's other project pages.
- **YouTube** — a walkthrough video, description links to the site (also ranks in video + AI results).
- **Local business partners** — interior designers, loan agents, brokers linking to the project.
Quality over quantity — 5–10 relevant local links beat 100 spammy ones.

---

## 8. AEO / GEO / LLM specifics (winning AI answers)

Already shipped: FAQ schema, `Apartment`/review/aggregateRating schema, `speakable`, `/llms.txt`.
To go further:
- Keep `/llms.txt` accurate — it's the cheapest way to get AI engines to cite correct facts.
- Write answer-first content: lead each section with a one-sentence factual answer, then detail.
- Use clear entity names everywhere ("Blossom Residency", "Shree Construction", "Dombivli East",
  "MahaRERA PR1330002600686") — entities are how LLMs disambiguate and cite you.
- Get mentioned on third-party pages (portals, reviews, press) — LLMs trust corroborated facts.
- Add a comparison/table block (1 BHK vs 2 BHK: area, price, ideal-for) — tables are AI-friendly.

---

## 9. Tracking

- **GSC:** watch Performance (impressions/clicks/position) weekly; check Pages > Indexed.
- **GBP Insights:** searches, calls, direction requests, website clicks.
- **Rank checks:** search your keywords monthly (incognito + correct location).
- **Rich Results Test:** re-run on the live URL after deploy to confirm Review/FAQ/Apartment validate.

---

## 10. Phase 2 — multi-page expansion (recommended next, optional)

A single page caps how many keywords you can rank for. To dominate the local SERP, add dedicated,
unique-content routes (each with its own H1, metadata, schema):
- `/1-bhk-flats-in-dombivli-east`
- `/2-bhk-flats-in-dombivli-east`
- `/price` (cost sheet / payment plan)
- `/location` (connectivity, neighbourhood, map)
- `/amenities`
- `/blog/...` (e.g. "Is Dombivli East good for investment in 2026?") for informational/AEO traffic

This is a build effort — say the word and I'll scaffold it (routes, per-page metadata, schema, and
unique copy) so each targets its own keyword cluster.
