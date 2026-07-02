import type { Metadata } from "next";
import Link from "next/link";
import { Home, Phone } from "lucide-react";
import PageShell from "@/components/PageShell";
import { PROJECT } from "@/lib/data";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <PageShell>
      <section className="relative flex min-h-[70svh] items-center justify-center overflow-hidden bg-ink pb-16 pt-32 sm:pt-40">
        <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[42rem] max-w-full -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" />
        <div className="container-luxe relative text-center">
          <span className="eyebrow mb-4 justify-center">
            <span className="h-px w-8 bg-gold" /> 404
          </span>
          <h1 className="font-serif text-4xl font-light text-white sm:text-5xl">
            This page has <span className="gold-text">moved on</span>
          </h1>
          <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-sand/70">
            The page you&apos;re looking for doesn&apos;t exist at {PROJECT.name}. Let&apos;s get you back
            on track.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/" className="btn-gold">
              <Home size={16} /> Back to Home
            </Link>
            <a href={`tel:${PROJECT.phoneRaw}`} className="btn-ghost">
              <Phone size={15} /> {PROJECT.phone}
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
