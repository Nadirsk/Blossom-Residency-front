"use client";

import { Phone } from "lucide-react";
import { PROJECT, waLink } from "@/lib/data";
import WhatsAppIcon from "./WhatsAppIcon";

export default function StickyActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={waLink(`Hi, I'm interested in ${PROJECT.name} (${PROJECT.config}). Please share details.`)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-luxe transition-transform hover:scale-110"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />
        <WhatsAppIcon size={26} className="relative" />
      </a>
      <a
        href={`tel:${PROJECT.phoneRaw}`}
        aria-label="Call now"
        className="gold-shine flex h-14 w-14 items-center justify-center rounded-full bg-gold-grad text-ink shadow-gold transition-transform hover:scale-110"
      >
        <Phone />
      </a>
    </div>
  );
}
