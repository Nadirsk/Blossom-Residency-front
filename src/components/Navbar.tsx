"use client";

import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { PROJECT } from "@/lib/data";

const LINKS = [
  ["About", "#about"],
  ["Residences", "#residences"],
  ["Amenities", "#amenities"],
  ["Location", "#location"],
  ["Gallery", "#gallery"],
  ["FAQ", "#faq"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/[0.08] bg-ink/90 py-3 backdrop-blur-xl"
          : "py-5"
      }`}
    >
      <nav className="container-luxe flex items-center justify-between">
        <a href="#top" className="flex flex-col leading-none">
          <span className="font-serif text-[22px] font-semibold tracking-wide text-white">
            Blossom <span className="gold-text">Residency</span>
          </span>
          <span className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.3em] text-gold/70">
            by {PROJECT.developer}
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {LINKS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-[13px] font-medium text-sand/70 transition-colors hover:text-white"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${PROJECT.phoneRaw}`}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-[13px] font-medium text-sand/80 transition-all hover:border-white/30 hover:text-white"
          >
            <Phone size={14} /> {PROJECT.phone}
          </a>
          <a href="#enquire" className="btn-gold !px-5 !py-2.5 !text-[13px]">
            Book Site Visit
          </a>
        </div>

        <button
          aria-label="Menu"
          className="text-sand lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="container-luxe mt-3 lg:hidden">
          <div className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-ink-soft p-4">
            {LINKS.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-sand/80 transition-colors hover:bg-white/5 hover:text-white"
              >
                {label}
              </a>
            ))}
            <a href="#enquire" onClick={() => setOpen(false)} className="btn-gold mt-2">
              Book Site Visit
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
