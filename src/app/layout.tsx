import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { PROJECT, SITE_URL, GEO, KEYWORD_VARIATIONS } from "@/lib/data";

// Display: high-contrast classic serif — the luxury voice of the brand.
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

// Body: warm, refined humanist grotesque — premium without reading as a template.
const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const title = `${PROJECT.name} by ${PROJECT.developer} | 1 & 2 BHK Flats in Dombivli East`;
const titleTemplate = `%s | ${PROJECT.name} Dombivli`;
const description = `${PROJECT.config} at ${PROJECT.location}. ${PROJECT.tower}, ${PROJECT.buildings}. Starting ${PROJECT.startingPrice}. MahaRERA ${PROJECT.rera}. Book a site visit today.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: titleTemplate },
  description,
  applicationName: PROJECT.name,
  authors: [{ name: PROJECT.developer }],
  creator: PROJECT.developer,
  publisher: PROJECT.developer,
  category: "Real Estate",
  alternates: { canonical: "/" },
  keywords: Array.from(
    new Set([
      "Blossom Residency",
      "Blossom Residency Dombivli",
      "Shree Construction Dombivli",
      "Dombivli East real estate",
      "ready possession flats Dombivli",
      "Vastu compliant flats Dombivli",
      "G+7 residential tower Dombivli",
      "best builder in Dombivli East",
      "flats near Hedutane metro Dombivli",
      "home loan flats Dombivli East",
      `MahaRERA ${PROJECT.rera}`,
      ...KEYWORD_VARIATIONS,
    ]),
  ),
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: `${PROJECT.name} by ${PROJECT.developer}`,
    images: [{ url: "/images/hero.png", width: 1200, height: 800, alt: `${PROJECT.name}, Dombivli East` }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  // Paste the token from Google Search Console > Settings > Ownership verification.
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_TOKEN || undefined,
    yandex: process.env.NEXT_PUBLIC_YANDEX_TOKEN || undefined,
    other: process.env.NEXT_PUBLIC_BING_TOKEN
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_TOKEN }
      : {},
  },
  formatDetection: { telephone: true },
  appleWebApp: { capable: true, title: PROJECT.name, statusBarStyle: "black-translucent" },
  // Geo meta tags — local-SEO signal still read by several engines & directories.
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Dombivli East, Maharashtra",
    "geo.position": `${GEO.lat};${GEO.lng}`,
    ICBM: `${GEO.lat}, ${GEO.lng}`,
  },
};

export const viewport: Viewport = {
  themeColor: "#0f0e0c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${hanken.variable}`}>
      <body className="font-sans" suppressHydrationWarning>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
