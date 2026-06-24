import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { PROJECT, SITE_URL } from "@/lib/data";
import { buildJsonLd } from "@/lib/seo";

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
  keywords: [
    "Blossom Residency",
    "Blossom Residency Dombivli",
    "Shree Construction Dombivli",
    "property in Dombivli East",
    "flats in Dombivli East",
    "1 BHK flat in Dombivli East",
    "2 BHK flat in Dombivli East",
    "1 BHK in Dombivli for sale",
    "2 BHK in Dombivli for sale",
    "new projects in Dombivli East",
    "flats near Xperia Mall",
    "property in Nilje Dombivli",
    "Dombivli East real estate",
    "ready possession flats Dombivli",
    "affordable flats Dombivli",
    `MahaRERA ${PROJECT.rera}`,
  ],
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
  verification: { google: process.env.NEXT_PUBLIC_GSC_TOKEN || undefined },
  formatDetection: { telephone: true },
};

export const viewport: Viewport = {
  themeColor: "#0f0e0c",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = buildJsonLd();

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${hanken.variable}`}>
      <body className="font-sans" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
