import Link from "next/link";
import Img from "./Img";
import { Maximize2, ArrowRight } from "lucide-react";
import { CONFIGURATIONS, PROJECT, waLink } from "@/lib/data";
import Reveal from "./Reveal";

const CONFIG_PATH: Record<string, string> = {
  "1 BHK": "/1-bhk-flats-in-dombivli-east",
  "2 BHK": "/2-bhk-flats-in-dombivli-east",
};

export default function Residences() {
  return (
    <section id="residences" className="relative bg-ink-soft py-24 sm:py-32">
      <div className="container-luxe">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-4">
            <span className="h-px w-8 bg-gold" /> Configurations & Pricing
          </span>
          <h2 className="font-serif text-4xl font-light text-white sm:text-5xl">
            Choose your <span className="gold-text">perfect space</span>
          </h2>
          <p className="mt-4 text-sand/65">
            Smartly planned 1 & 2 BHK residences with abundant natural light, wide balconies and
            Vastu-compliant layouts.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {CONFIGURATIONS.map((c, i) => (
            <Reveal key={c.type} delay={i * 0.1}>
              <div className="group glass overflow-hidden rounded-3xl transition-all duration-500 hover:border-gold/40 hover:shadow-card">
                <Link href={CONFIG_PATH[c.type]} aria-label={`View ${c.type} details`}>
                  <div className="relative block aspect-[4/3] w-full overflow-hidden bg-white">
                    <Img
                      src={c.plan}
                      alt={`${c.type} floor plan`}
                      fill
                      sizes="(max-width:768px) 100vw, 50vw"
                      className="object-contain group-hover:scale-105"
                    />
                    <span className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-ink/70 px-3 py-1.5 text-xs text-sand backdrop-blur">
                      <Maximize2 size={13} /> View Plan
                    </span>
                  </div>
                  <div className="flex items-center justify-between gap-4 p-6">
                    <div>
                      <h3 className="font-serif text-2xl text-white">{c.type}</h3>
                      <p className="mt-1 text-sm text-sand/60">{c.carpet}</p>
                      <p className="mt-0.5 text-xs text-gold/80">{c.note}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xs uppercase tracking-widest text-sand/50">Starting</div>
                      <div className="font-serif text-xl text-white">{c.price}</div>
                      <div className="mt-0.5 text-[11px] text-sand/40">{c.sqft} sq ft</div>
                    </div>
                  </div>
                </Link>
                <a
                  href={waLink(`Hi, please share the price sheet & floor plan for the ${c.type} at ${PROJECT.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between border-t border-white/10 px-6 py-4 text-sm font-medium text-gold transition-colors hover:bg-white/5"
                >
                  Enquire about {c.type}
                  <ArrowRight size={16} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
