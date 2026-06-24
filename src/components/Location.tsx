import { MapPin, TrendingUp, Navigation, ExternalLink } from "lucide-react";
import { LOCATION, INVESTMENT, PROJECT, MAP_EMBED, MAP_LINK, MAP_DIRECTIONS } from "@/lib/data";
import Reveal from "./Reveal";

export default function Location() {
  return (
    <section id="location" className="relative bg-ink-soft py-24 sm:py-32">
      <div className="container-luxe">
        <Reveal className="max-w-2xl">
          <span className="eyebrow mb-4">
            <span className="h-px w-8 bg-gold" /> Location Advantages
          </span>
          <h2 className="font-serif text-4xl font-light text-white sm:text-5xl">
            Prime connectivity, <span className="gold-text">best investment</span>
          </h2>
          <p className="mt-4 text-sand/65">
            Strategically located at Nilje, Dombivli East — seamless access to malls, metro, railway
            and highways makes it ideal for both home-buyers and investors.
          </p>
        </Reveal>

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-white/10 shadow-luxe">
              <div className="group relative h-[360px] w-full sm:h-[460px] lg:h-[520px]">
                <iframe
                  title="Blossom Residency location on Google Maps"
                  src={MAP_EMBED}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full grayscale-[0.25] contrast-[1.05]"
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
                <span className="pointer-events-none absolute left-4 top-4 z-20 inline-flex items-center gap-1.5 rounded-full bg-ink/80 px-3 py-1.5 text-xs font-medium text-sand backdrop-blur">
                  <MapPin size={13} className="text-gold" /> Opp. Xperia Mall, Nilje
                </span>
              </div>
              <a
                href={MAP_DIRECTIONS}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 border-t border-white/10 bg-ink px-5 py-4 text-sm font-medium text-gold transition-colors hover:bg-white/5"
              >
                <span className="inline-flex items-center gap-2">
                  <Navigation size={16} /> Get Directions to {PROJECT.name}
                </span>
                <ExternalLink size={15} />
              </a>
            </div>
          </Reveal>

          <div>
            <div className="grid gap-3 sm:grid-cols-2">
              {LOCATION.map((l, i) => (
                <Reveal key={l.place} delay={(i % 2) * 0.08}>
                  <div className="glass h-full rounded-2xl p-4">
                    <div className="flex items-start justify-between gap-2">
                      <MapPin size={16} className="mt-0.5 shrink-0 text-gold" />
                      <span className="rounded-full bg-gold/12 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-gold">
                        {l.time}
                      </span>
                    </div>
                    <h3 className="mt-2 text-sm font-semibold text-white">{l.place}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-sand/60">{l.detail}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <div className="mt-6 rounded-2xl border border-gold/25 bg-gold/[0.06] p-6">
                <div className="flex items-center gap-2 text-gold">
                  <TrendingUp size={18} />
                  <span className="text-sm font-semibold uppercase tracking-wide">
                    High Growth Investment
                  </span>
                </div>
                <ul className="mt-4 grid gap-2.5">
                  {INVESTMENT.map((inv) => (
                    <li key={inv} className="flex items-start gap-2.5 text-sm text-sand/80">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      {inv}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xs text-sand/50">
                  Homes at {PROJECT.name} start from {PROJECT.startingPrice} — a smart entry into one
                  of Dombivli&apos;s fastest-appreciating corridors.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
