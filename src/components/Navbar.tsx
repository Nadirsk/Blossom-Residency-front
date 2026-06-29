"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  // On the homepage these are in-page anchors; on sub-pages they must jump back home.
  const to = (hash: string) => (pathname === "/" ? hash : `/${hash}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "border-b border-white/10 bg-ink/80 py-3 backdrop-blur-xl" : "py-5"
      }`}
    >
      <nav className="container-luxe flex items-center justify-between">
        <a href={to("#top")} className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt={`${PROJECT.name} logo`}
            width={48}
            height={48}
            priority
            className={`w-auto transition-all duration-500 ${scrolled ? "h-9" : "h-11"}`}
          />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-xl font-semibold tracking-wide text-white">
              Blossom <span className="gold-text">Residency</span>
            </span>
            <span className="mt-0.5 text-[10px] uppercase tracking-[0.32em] text-gold/80">
              by {PROJECT.developer}
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {LINKS.map(([label, href]) => (
            <a
              key={href}
              href={to(href)}
              className="relative text-sm font-medium text-sand/80 transition-colors hover:text-white after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={`tel:${PROJECT.phoneRaw}`} className="btn-ghost !px-5 !py-2.5">
            <Phone size={15} /> {PROJECT.phone}
          </a>
          <a href={to("#enquire")} className="btn-gold !px-5 !py-2.5">
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
          <div className="glass flex flex-col gap-1 rounded-2xl p-4">
            {LINKS.map(([label, href]) => (
              <a
                key={href}
                href={to(href)}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-sand/90 hover:bg-white/5"
              >
                {label}
              </a>
            ))}
            <a href={to("#enquire")} onClick={() => setOpen(false)} className="btn-gold mt-2">
              Book Site Visit
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
