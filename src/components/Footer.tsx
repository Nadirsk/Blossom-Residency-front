import Image from "next/image";
import { MapPin, Phone } from "lucide-react";
import { PROJECT, waLink, MAP_LINK } from "@/lib/data";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink pt-16">
      <div className="container-luxe grid gap-10 pb-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt={`${PROJECT.name} logo`}
              width={56}
              height={56}
              className="h-12 w-auto"
            />
            <div>
              <div className="font-serif text-2xl font-semibold text-white">
                Blossom <span className="gold-text">Residency</span>
              </div>
              <p className="mt-1 text-xs uppercase tracking-[0.3em] text-gold/80">
                by {PROJECT.developer}
              </p>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-sand/55">
            {PROJECT.tagline} — {PROJECT.config} in a {PROJECT.tower.toLowerCase()} at the heart of
            Dombivli East.
          </p>
        </div>

        <div className="text-sm">
          <h3 className="mb-4 text-xs uppercase tracking-widest text-sand/45">Explore</h3>
          <ul className="grid grid-cols-2 gap-2 text-sand/70">
            {[
              ["About", "#about"], ["Residences", "#residences"], ["Amenities", "#amenities"],
              ["Location", "#location"], ["Gallery", "#gallery"], ["Enquire", "#enquire"],
            ].map(([l, h]) => (
              <li key={h}>
                <a href={h} className="transition-colors hover:text-gold">{l}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-sm">
          <h3 className="mb-4 text-xs uppercase tracking-widest text-sand/45">Contact</h3>
          <ul className="space-y-3 text-sand/70">
            <li>
              <a
                href={MAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 hover:text-gold"
              >
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                {PROJECT.location}, {PROJECT.city}
              </a>
            </li>
            <li>
              <a href={`tel:${PROJECT.phoneRaw}`} className="flex items-center gap-3 hover:text-gold">
                <Phone size={16} className="text-gold" /> {PROJECT.phone}
              </a>
            </li>
            <li>
              <a
                href={waLink(`Hi, I'm interested in ${PROJECT.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-gold"
              >
                <WhatsAppIcon size={16} className="text-gold" /> Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="container-luxe flex flex-col items-center justify-between gap-3 text-center text-xs text-sand/40 sm:flex-row sm:text-left">
          <p>
            © {2026} {PROJECT.developer}. All rights reserved. · MahaRERA {PROJECT.rera}
          </p>
          <p className="max-w-xl text-[10px] leading-relaxed text-sand/35">
            Disclaimer: This website is for informational purposes only and does not constitute a
            legal offer. Prices, plans, images and specifications are indicative and subject to
            change. Please verify all details with the developer before booking.
          </p>
        </div>
      </div>
    </footer>
  );
}
