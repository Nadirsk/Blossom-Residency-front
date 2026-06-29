import ScrollProgress from "./ScrollProgress";
import Navbar from "./Navbar";
import Footer from "./Footer";
import StickyActions from "./StickyActions";

/** Standard chrome for every dedicated landing page (mirrors the homepage). */
export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative">
      <ScrollProgress />
      <Navbar />
      {children}
      <Footer />
      <StickyActions />
    </main>
  );
}
