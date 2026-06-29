import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import About from "@/components/About";
import Residences from "@/components/Residences";
import Amenities from "@/components/Amenities";
import Location from "@/components/Location";
import Gallery from "@/components/Gallery";
import Developer from "@/components/Developer";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import LeadForm from "@/components/LeadForm";
import PopularSearches from "@/components/PopularSearches";
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";
import { buildJsonLd, jsonLdScript } from "@/lib/seo";

export default function Home() {
  return (
    <main className="relative">
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(buildJsonLd())} />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Highlights />
      <About />
      <Residences />
      <Amenities />
      <Location />
      <Gallery />
      <Developer />
      <Testimonials />
      <Faq />
      <LeadForm />
      <PopularSearches />
      <Footer />
      <StickyActions />
    </main>
  );
}
