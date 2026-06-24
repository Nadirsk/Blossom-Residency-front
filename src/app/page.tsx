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
import Footer from "@/components/Footer";
import StickyActions from "@/components/StickyActions";

export default function Home() {
  return (
    <main className="relative">
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
      <Footer />
      <StickyActions />
    </main>
  );
}
