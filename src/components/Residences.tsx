"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Img from "./Img";
import { X, Maximize2, Download, ArrowRight } from "lucide-react";
import { CONFIGURATIONS, PROJECT, waLink } from "@/lib/data";
import Reveal from "./Reveal";

export default function Residences() {
  const [active, setActive] = useState<number | null>(null);
  const plan = active !== null ? CONFIGURATIONS[active] : null;

  return (
    <section id="residences" className="relative bg-ink-soft py-24 sm:py-32">
      <div className="container-luxe">
        <Reveal>
          <p className="eyebrow mb-4">Configurations &amp; Pricing</p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <h2 className="font-serif text-4xl font-medium text-white sm:text-5xl">
              Choose your <span className="gold-text italic">perfect space</span>
            </h2>
            <p className="max-w-sm text-[13px] text-sand/55 sm:text-right">
              Vastu-compliant layouts with natural light, wide balconies and thoughtful planning.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {CONFIGURATIONS.map((c, i) => (
            <Reveal key={c.type} delay={i * 0.08}>
              <div className="group card-dark overflow-hidden rounded-2xl transition-all duration-500 hover:border-gold/30">
                {/* Floor plan image */}
                <button
                  onClick={() => setActive(i)}
                  className="relative block aspect-[4/3] w-full overflow-hidden bg-white"
                  aria-label={`View ${c.type} floor plan`}
                >
                  <Img
                    src={c.plan}
                    alt={`${c.type} floor plan`}
                    fill
                    sizes="(max-width:768px) 100vw, 50vw"
                    className="object-contain transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <span className="absolute right-3 top-3 flex items-center gap-1.5 rounded-full bg-ink/65 px-3 py-1.5 text-[11px] text-sand backdrop-blur-sm">
                    <Maximize2 size={11} /> View Plan
                  </span>
                </button>

                {/* Info row */}
                <div className="flex items-center justify-between gap-4 px-6 py-5">
                  <div>
                    <h3 className="font-serif text-2xl font-medium text-white">{c.type}</h3>
                    <p className="mt-1 text-[12px] text-sand/50">{c.carpet}</p>
                    <p className="mt-0.5 text-[11px] text-gold/70">{c.note}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] uppercase tracking-widest text-stone">Starting</div>
                    <div className="font-serif text-xl font-medium text-white">{c.price}</div>
                    <div className="mt-0.5 text-[11px] text-stone">{c.sqft} sq ft</div>
                  </div>
                </div>

                {/* CTA */}
                <a
                  href={waLink(`Hi, please share the price sheet & floor plan for the ${c.type} at ${PROJECT.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between border-t border-white/[0.08] px-6 py-4 text-[13px] font-medium text-gold transition-colors hover:bg-white/[0.04]"
                >
                  Enquire about {c.type}
                  <ArrowRight size={15} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Floor plan lightbox */}
      <AnimatePresence>
        {plan && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/92 p-4 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.93, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.93, opacity: 0 }}
              transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white"
            >
              <div className="sticky top-0 z-10 flex items-center justify-between bg-ink px-5 py-3.5">
                <span className="font-serif text-lg font-medium text-white">{plan.type} — Floor Plan</span>
                <button onClick={() => setActive(null)} aria-label="Close" className="text-sand/70 hover:text-white">
                  <X />
                </button>
              </div>
              <div className="relative bg-white">
                <Img
                  src={plan.plan}
                  alt={`${plan.type} floor plan`}
                  width={1100}
                  height={850}
                  className="h-auto w-full object-contain"
                />
              </div>
              <div className="flex flex-wrap gap-3 bg-ink px-5 py-4">
                <a href={PROJECT.brochure} download className="btn-gold !py-2.5">
                  <Download size={14} /> Download Brochure
                </a>
                <a
                  href={waLink(`Hi, I'd like more details on the ${plan.type} at ${PROJECT.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost !py-2.5"
                >
                  Enquire on WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
