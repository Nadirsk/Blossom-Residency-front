import { MapPin, Phone } from "lucide-react";
import { PROJECT, waLink } from "@/lib/data";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-ink-soft pt-16">
      <div className="container-luxe grid gap-10 pb-12 md:grid-cols-3">
        <div>
          <div className="font-serif text-2xl font-semibold text-white">
            Blossom <span className="gold-text">Residency</span>
          </div>
          <p className="mt-0.5 text-[9px] font-medium uppercase tracking-[0.28em] text-gold/60">
            by {PROJECT.developer}
          </p>
          <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-sand/50">
            {PROJECT.tagline} — {PROJECT.config} in a {PROJECT.tower.toLowerCase()} at the heart of
            Dombivli East.
          </p>
        </div>

        <div className="text-[13px]">
          <h3 className="mb-4 text-[10px] font-medium uppercase tracking-widest text-stone/60">Explore</h3>
          <ul className="grid grid-cols-2 gap-2 text-sand/55">
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

        <div className="text-[13px]">
          <h3 className="mb-4 text-[10px] font-medium uppercase tracking-widest text-stone/60">Contact</h3>
          <ul className="space-y-3 text-sand/55">
            <li className="flex items-start gap-3">
              <MapPin size={14} className="mt-0.5 shrink-0 text-gold" />
              {PROJECT.location}, {PROJECT.city}
            </li>
            <li>
              <a href={`tel:${PROJECT.phoneRaw}`} className="flex items-center gap-3 transition-colors hover:text-gold">
                <Phone size={14} className="text-gold" /> {PROJECT.phone}
              </a>
            </li>
            <li>
              <a
                href={waLink(`Hi, I'm interested in ${PROJECT.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors hover:text-gold"
              >
                <WhatsAppIcon size={14} className="text-gold" /> Chat on WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/[0.07] py-5">
        <div className="container-luxe flex flex-col items-center justify-between gap-3 text-center text-[11px] text-stone/50 sm:flex-row sm:text-left">
          <p>
            © {2026} {PROJECT.developer}. All rights reserved. · MahaRERA {PROJECT.rera}
          </p>
          <p className="max-w-xl text-[10px] leading-relaxed text-stone/40">
            Disclaimer: This website is for informational purposes only and does not constitute a
            legal offer. Prices, plans, images and specifications are indicative and subject to
            change. Please verify all details with the developer before booking.
          </p>
        </div>
      </div>
    </footer>
  );
}
