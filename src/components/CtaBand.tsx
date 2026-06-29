import { CalendarCheck, Phone, MessageCircle } from "lucide-react";
import { PROJECT, waLink } from "@/lib/data";

/** Reusable conversion band for the foot of every landing page. */
export default function CtaBand({
  heading = "Ready to make Blossom Residency home?",
  sub = `Book a free site visit, get the latest price sheet, or talk to our team — homes start ${PROJECT.startingPrice}.`,
  waMessage = `Hi, I'm interested in ${PROJECT.name}. Please share the price sheet and details.`,
}: {
  heading?: string;
  sub?: string;
  waMessage?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink py-20 sm:py-28">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-72 w-[42rem] max-w-full -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]" />
      <div className="container-luxe relative text-center">
        <h2 className="mx-auto max-w-2xl font-serif text-3xl font-light text-white sm:text-4xl">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-sand/65 sm:text-base">{sub}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={waLink(waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            <MessageCircle size={16} /> Enquire on WhatsApp
          </a>
          <a href={`tel:${PROJECT.phoneRaw}`} className="btn-ghost">
            <Phone size={15} /> Call {PROJECT.phone}
          </a>
          <a
            href={waLink(`Hi, I'd like to book a site visit for ${PROJECT.name}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <CalendarCheck size={15} /> Book Site Visit
          </a>
        </div>
        <p className="mt-6 text-xs text-sand/40">MahaRERA {PROJECT.rera} · {PROJECT.location}</p>
      </div>
    </section>
  );
}
