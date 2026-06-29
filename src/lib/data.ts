// Central source of truth — real Blossom Residency project data.

// Canonical live domain. Everything else (canonical tag, sitemap, robots, OG image,
// JSON-LD, llms.txt) derives from this — so it MUST match the exact domain Google
// indexes. The live, indexed production domain is blossomresidency.com. Keep the
// Vercel env var NEXT_PUBLIC_SITE_URL set to the SAME value so they never diverge.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://blossomresidency.com").replace(/\/$/, "");

// Exact project location (pin from Google Maps). 19°09'23.4"N 73°04'28.5"E
export const GEO = { lat: 19.1565113, lng: 73.0745773 } as const;

export const PROJECT = {
  name: "Blossom Residency",
  developer: "Shree Construction",
  tagline: "Devoted To Building Dream Home.",
  hook: "Your Dream Home Awaits in Dombivli",
  config: "Premium 1 & 2 BHK Homes",
  tower: "G + 7 Premium Residential Tower",
  buildings: "3 Apartment Buildings",
  rera: "PR1330002600686",
  startingPrice: "₹29.99 Lakh*",
  startingPriceRaw: "29,99,999",
  location: "Opp. Xperia Mall, Nilje, Dombivli East",
  city: "Dombivli East, Maharashtra",
  phone: "+91 93244 66477",
  phoneRaw: "919324466477",
  brochure: "/brochure.pdf",
} as const;

export const waLink = (msg: string) =>
  `https://wa.me/${PROJECT.phoneRaw}?text=${encodeURIComponent(msg)}`;

// Off-site profiles Google & AI engines use to corroborate the brand entity
// (E-E-A-T / Knowledge Graph). Add each as it goes live — every verified profile
// strengthens the entity and improves AEO/GEO confidence.
export const SAME_AS: string[] = [
  "https://share.google/QlKvfDYHUrvm4ej9I", // Google Business Profile
  // "https://www.facebook.com/blossomresidency",
  // "https://www.instagram.com/blossomresidency",
  // "https://www.youtube.com/@shreeconstruction",
  // "https://in.linkedin.com/company/shree-construction",
].filter(Boolean);

// Public email (used in schema + GBP). Fill with the real address when available.
export const EMAIL = process.env.NEXT_PUBLIC_EMAIL || "";

// Sales / site-visit hours — surfaced in LocalBusiness schema and GBP.
export const HOURS = {
  days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  opens: "09:00",
  closes: "20:00",
} as const;

// --- Keyword-variation coverage -------------------------------------------------
// Buyers phrase the same intent many ways — "flat", "apartment", "home", "ghar",
// "1bhk", "new project", "ready to move", "affordable". These power the visible
// "Popular searches" link cluster (varied anchor text → relevance) and the keyword
// metadata, so the site matches however someone searches — without stuffing.
export const POPULAR_SEARCHES: { label: string; href: string }[] = [
  { label: "Flats in Dombivli East", href: "/new-projects-in-dombivli-east" },
  { label: "Apartments in Dombivli East", href: "/new-projects-in-dombivli-east" },
  { label: "1 BHK in Dombivli East", href: "/1-bhk-flats-in-dombivli-east" },
  { label: "2 BHK in Dombivli East", href: "/2-bhk-flats-in-dombivli-east" },
  { label: "New flats in Dombivli", href: "/new-projects-in-dombivli-east" },
  { label: "Flats near Xperia Mall", href: "/location" },
  { label: "Affordable flats in Dombivli East", href: "/1-bhk-flats-in-dombivli-east" },
  { label: "Ready to move flats in Dombivli", href: "/new-projects-in-dombivli-east" },
  { label: "Flat price in Dombivli East", href: "/price" },
  { label: "Property in Nilje Dombivli", href: "/location" },
  { label: "Vastu flats in Dombivli East", href: "/amenities" },
  { label: "Home for sale in Dombivli East", href: "/2-bhk-flats-in-dombivli-east" },
];

// Synonyms + intent + Hinglish variations for keyword metadata (read by several
// engines; Google maps most synonyms itself, but covering them is harmless).
export const KEYWORD_VARIATIONS: string[] = [
  "flats in dombivli east", "apartments in dombivli east", "homes in dombivli east",
  "flat for sale in dombivli east", "buy flat in dombivli east", "house in dombivli east",
  "new flat in dombivli", "new flats in dombivli east", "new project in dombivli east",
  "1 bhk flat in dombivli east", "2 bhk flat in dombivli east", "one bhk in dombivli", "two bhk in dombivli",
  "ready to move flats in dombivli", "under construction flats in dombivli east",
  "affordable flats in dombivli east", "budget flats in dombivli", "cheap flats in dombivli east",
  "premium flats in dombivli east", "luxury apartments in dombivli east",
  "flats near xperia mall", "property in nilje dombivli", "ghar in dombivli east",
  "dombivli east me flat", "naya flat dombivli", "flat scheme in dombivli east",
  "dombivli east property rate", "1 bhk price in dombivli east", "2 bhk price in dombivli east",
];

// Google Maps — pinned to the exact project coordinates (GEO above).
export const MAP_QUERY = "Blossom Residency, Opp. Xperia Mall, Nilje, Dombivli East, Maharashtra 421204";
export const MAP_POINT = `${GEO.lat},${GEO.lng}`;
export const MAP_EMBED = `https://www.google.com/maps?q=${MAP_POINT}&z=17&output=embed`;
export const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${MAP_POINT}`;
export const MAP_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${MAP_POINT}`;

export const HIGHLIGHTS = [
  { value: 3, suffix: "", label: "Residential Buildings" },
  { value: 7, prefix: "G+", suffix: "", label: "Storey Tower" },
  { value: 2, suffix: " BHK", label: "1 & 2 BHK Homes", display: "1–2" },
  { value: 11, suffix: "+", label: "Premium Amenities" },
] as const;

export const CONFIGURATIONS = [
  {
    type: "1 BHK",
    carpet: "~430 sq ft carpet",
    sqft: "430",
    price: "₹29.99 L*",
    note: "Vastu-compliant · Sun-lit living",
    plan: "/images/plan-1bhk.jpg",
    planW: 1149,
    planH: 930,
  },
  {
    type: "2 BHK",
    carpet: "588 sq ft carpet",
    sqft: "588",
    price: "On Request",
    note: "Twin bedrooms · Wide balcony",
    plan: "/images/plan-2bhk.jpg",
    planW: 1146,
    planH: 1213,
  },
] as const;

export const AMENITIES = [
  { name: "24x7 Security Service", icon: "ShieldCheck", tint: "slate", img: "/images/amenities/security.jpg" },
  { name: "24-Hour CCTV Surveillance", icon: "Cctv", tint: "blue", img: "/images/amenities/cctv.jpg" },
  { name: "Landscaped Garden", icon: "Trees", tint: "green", img: "/images/amenities/garden.jpg" },
  { name: "Kids Play Area", icon: "ToyBrick", tint: "amber", img: "/images/amenities/kids.jpg" },
  { name: "Rooftop Amenities", icon: "Building2", tint: "indigo", img: "/images/amenities/rooftop.jpg" },
  { name: "Yoga & Meditation Deck", icon: "Flower2", tint: "teal", img: "/images/amenities/yoga.jpg" },
  { name: "Outdoor Gym", icon: "Dumbbell", tint: "gold", img: "/images/amenities/gym.jpg" },
  { name: "Sun Bath Beds", icon: "Sun", tint: "orange", img: "/images/amenities/sunbath.jpg" },
  { name: "Sand Pit for Toddlers", icon: "Baby", tint: "sand", img: "/images/amenities/sandpit.jpg" },
  { name: "Bonfire Area", icon: "Flame", tint: "ember", img: "/images/amenities/bonfire.jpg" },
  { name: "Indoor Games Zone", icon: "Gamepad2", tint: "violet", img: "/images/amenities/games.jpg" },
  { name: "Ample Car Parking", icon: "Car", tint: "graphite", img: "/images/amenities/parking.jpg" },
] as const;

export const WHY_US = [
  "10+ Years in Dombivli",
  "Opposite Xperia Mall",
  "11+ Premium Amenities",
  "Zero Hidden Charges",
  "500+ Happy Families",
  "On-Time Possession",
] as const;

export const DEVELOPER_STATS = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Families Housed" },
  { value: "3", label: "Ongoing Projects" },
  { value: "100%", label: "RERA Compliant" },
] as const;

export const TESTIMONIALS = [
  {
    name: "Rahul Sharma",
    location: "Dombivli East",
    text: "We visited three sites before Blossom Residency. The quality of construction and the location opposite Xperia Mall sealed it for us. Shree Construction team was transparent from day one — no hidden charges.",
    config: "2 BHK Buyer",
  },
  {
    name: "Priya Menon",
    location: "Thane",
    text: "Booked a 1 BHK as an investment. The starting price, metro connectivity coming soon, and the RERA registration made it an easy decision. Already seeing good interest for rentals.",
    config: "1 BHK Investor",
  },
  {
    name: "Suresh & Kavita Patil",
    location: "Dombivli",
    text: "Finally a Vastu-compliant flat that doesn't compromise on space. The sun-lit living room and wide balcony were exactly what we wanted. The site visit experience was excellent.",
    config: "1 BHK Buyer",
  },
] as const;

// Aggregate rating synced to the live Google Business Profile (4.8★, 6 reviews as of
// Jun 2026). Keep this matched to the real Google total — update both numbers as new
// reviews come in (honest values avoid Google's review-spam manual action).
export const RATING = { value: "4.8", count: 6 } as const;

export const LOCATION = [
  { place: "Xperia Mall & PVR Cinema", detail: "Right opposite — shopping & entertainment", time: "0 min" },
  { place: "Hedutane Metro Station", detail: "Upcoming metro connectivity nearby", time: "Upcoming" },
  { place: "Dombivli Railway Station", detail: "Easy access to the central line", time: "Nearby" },
  { place: "Kalyan–Shil Road", detail: "Direct connectivity to highways", time: "Nearby" },
  { place: "Navi Mumbai & Thane", detail: "Quick inter-city access", time: "Connected" },
  { place: "Schools & Colleges", detail: "Ryan, Euro School, IRA Global & more", time: "Close" },
  { place: "Hospitals & Medical", detail: "Multi-specialty care in proximity", time: "Close" },
  { place: "D-Mart & Daily Markets", detail: "Everyday essentials at your doorstep", time: "Close" },
] as const;

export const INVESTMENT = [
  "Fast-developing residential zone",
  "High appreciation potential in property value",
  "Growing infrastructure & metro expansion",
  "Ideal for end-use and rental income",
  "Smart investment for future returns",
] as const;

export const GALLERY = [
  { src: "/images/elevation-front.jpg", title: "Front Elevation", span: "tall" },
  { src: "/images/wing-b-lifestyle.jpg", title: "Wing-B Lifestyle Views", span: "wide" },
  { src: "/images/master-brochure.jpg", title: "Project Overview", span: "normal" },
  { src: "/images/aerial-drone.jpg", title: "Aerial & Drone Tour", span: "wide" },
  { src: "/images/creative-overview.jpg", title: "Why Blossom Residency", span: "normal" },
  { src: "/images/creative-banner.jpg", title: "The Address", span: "tall" },
] as const;

export const FAQS = [
  {
    q: "Is Blossom Residency RERA approved?",
    a: `Yes. Blossom Residency is registered under MahaRERA with registration number ${PROJECT.rera}, ensuring a fully transparent and compliant purchase.`,
  },
  {
    q: "What configurations are available?",
    a: "The project offers thoughtfully designed, Vastu-compliant 1 BHK and 2 BHK apartments across a G+7 premium residential tower spanning 3 buildings.",
  },
  {
    q: "Where exactly is the project located?",
    a: "Blossom Residency is located opposite Xperia Mall at Nilje, Dombivli East — with upcoming metro connectivity, easy railway access and direct links to Kalyan-Shil Road, Navi Mumbai and Thane.",
  },
  {
    q: "What is the starting price?",
    a: `Homes start from ${PROJECT.startingPrice}. Pricing varies by configuration and floor — request the latest price sheet and we'll share full details on WhatsApp.`,
  },
  {
    q: "What amenities does the project offer?",
    a: "Residents enjoy 24x7 security with CCTV surveillance, a landscaped garden, kids play area, rooftop amenities, a yoga & meditation deck, outdoor gym, sun-bath beds, a sand pit for toddlers, a bonfire area, indoor games and ample parking.",
  },
  {
    q: "What is the price of a 1 BHK flat in Blossom Residency Dombivli?",
    a: `1 BHK homes at Blossom Residency start from ${PROJECT.startingPrice} for approximately 430 sq ft carpet area. The final price depends on the floor and unit — request the latest price sheet on WhatsApp and our team will share full details.`,
  },
  {
    q: "What is the carpet area of the flats?",
    a: "The 1 BHK apartments offer approximately 430 sq ft carpet area and the 2 BHK apartments offer 588 sq ft carpet area, with Vastu-compliant, sun-lit layouts and wide balconies.",
  },
  {
    q: "Who is the builder of Blossom Residency?",
    a: `Blossom Residency is developed by ${PROJECT.developer}, a Dombivli-based developer with 10+ years of experience, 500+ families housed and a 100% RERA-compliant track record across its projects.`,
  },
  {
    q: "Are home loans available for Blossom Residency?",
    a: `Yes. Because the project is MahaRERA-registered (${PROJECT.rera}), apartments are eligible for home loans from leading banks and housing finance companies. Our team can connect you with loan partners for quick approvals.`,
  },
  {
    q: "How far is Blossom Residency from Dombivli railway station?",
    a: "Blossom Residency sits opposite Xperia Mall in Nilje, Dombivli East, with quick access to Dombivli Railway Station on the Central Line, the upcoming Hedutane metro station, and direct connectivity to Kalyan-Shil Road, Thane and Navi Mumbai.",
  },
  {
    q: "Is Blossom Residency a good investment?",
    a: "Nilje, Dombivli East is a fast-developing residential corridor with growing infrastructure and upcoming metro connectivity, giving strong appreciation potential. The project suits both end-users and investors looking for rental income, backed by a RERA-registered, transparent purchase.",
  },
  {
    q: "How do I book a site visit or flat at Blossom Residency?",
    a: `Booking is simple — message us on WhatsApp or call ${PROJECT.phone} to schedule a free site visit. Our team will walk you through available 1 & 2 BHK units, current pricing and the booking process with zero hidden charges.`,
  },
  {
    q: "Do you have flats or apartments for sale in Dombivli East?",
    a: "Yes. Whether you call them flats, apartments or homes, Blossom Residency offers 1 BHK and 2 BHK residences for sale in Dombivli East — opposite Xperia Mall in Nilje, ready for site visits and bookings now.",
  },
  {
    q: "Are there affordable, ready-to-move or new flats available?",
    a: `Blossom Residency is a new residential project with thoughtfully sized, affordable 1 & 2 BHK homes starting ${PROJECT.startingPrice}. For the current possession status (ready-to-move vs under-construction units) and availability, contact our team for the latest update.`,
  },
] as const;
