import { MapPin, TrendingUp, Navigation, ExternalLink } from "lucide-react";
import { LOCATION, INVESTMENT, PROJECT, MAP_EMBED, MAP_LINK, MAP_DIRECTIONS } from "@/lib/data";
import Reveal from "./Reveal";

export default function Location() {
  return (
    <section id="location" className="relative bg-ink py-24 sm:py-32">
      <div className="container-luxe">
        <Reveal>
          <p className="eyebrow mb-4">Location Advantages</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-serif text-4xl font-medium text-white sm:text-5xl">
              Prime connectivity,{" "}
              <span className="gold-text italic">best investment</span>
            </h2>
            <p className="max-w-xs text-[13px] text-sand/55 sm:text-right">
              Nilje, Dombivli East — one of the fastest-appreciating corridors in the MMR.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-2">
          {/* Map */}
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-white/[0.09] shadow-luxe">
              <div className="group relative h-[360px] w-full sm:h-[460px] lg:h-[520px]">
                <iframe
                  title="Blossom Residency location on Google Maps"
                  src={MAP_EMBED}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full grayscale-[0.2] contrast-[1.04]"
                />
                <a
                  href={MAP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Blossom Residency location in Google Maps"
                  className="absolute inset-0 z-10 flex items-center justify-center bg-ink/0 transition-colors duration-300 group-hover:bg-ink/20"
                >
                  <span className="translate-y-2 rounded-full bg-gold-grad px-5 py-2.5 text-sm font-semibold text-ink opacity-0 shadow-gold transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    Open in Google Maps
                  </span>
                </a>
                <span className="pointer-events-none absolute left-4 top-4 z-20 inline-flex items-center gap-1.5 rounded-full bg-ink/80 px-3 py-1.5 text-[11px] font-medium text-sand backdrop-blur-sm">
                  <MapPin size={12} className="text-gold" /> Opp. Xperia Mall, Nilje
                </span>
              </div>
              <a
                href={MAP_DIRECTIONS}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 border-t border-white/[0.08] bg-ink-soft px-5 py-4 text-[13px] font-medium text-gold transition-colors hover:bg-white/5"
              >
                <span className="inline-flex items-center gap-2">
                  <Navigation size={15} /> Get Directions to {PROJECT.name}
                </span>
                <ExternalLink size={14} />
              </a>
            </div>
          </Reveal>

          {/* Location cards + investment */}
          <div>
            <div className="grid gap-3 sm:grid-cols-2">
              {LOCATION.map((l, i) => (
                <Reveal key={l.place} delay={(i % 2) * 0.07}>
                  <div className="card-dark h-full rounded-xl p-4">
                    <div className="flex items-start justify-between gap-2">
                      <MapPin size={14} className="mt-0.5 shrink-0 text-gold" />
                      <span className="rounded-full bg-gold/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-gold">
                        {l.time}
                      </span>
                    </div>
                    <h3 className="mt-2 text-[13px] font-semibold text-white">{l.place}</h3>
                    <p className="mt-1 text-[11px] leading-relaxed text-sand/50">{l.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <div className="mt-5 rounded-xl border border-gold/20 bg-gold/[0.05] p-5">
                <div className="flex items-center gap-2 text-gold">
                  <TrendingUp size={16} />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em]">
                    High Growth Investment
                  </span>
                </div>
                <ul className="mt-4 grid gap-2">
                  {INVESTMENT.map((inv) => (
                    <li key={inv} className="flex items-start gap-2.5 text-[13px] text-sand/70">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                      {inv}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-[11px] text-sand/40">
                  Homes at {PROJECT.name} start from {PROJECT.startingPrice} — smart entry into a
                  fast-appreciating corridor.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
