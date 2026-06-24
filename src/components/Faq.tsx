"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQS } from "@/lib/data";
import Reveal from "./Reveal";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-ink-soft py-24 sm:py-32">
      <div className="container-luxe grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <span className="eyebrow mb-4">
            <span className="h-px w-8 bg-gold" /> FAQ
          </span>
          <h2 className="font-serif text-4xl font-light text-white sm:text-5xl">
            Questions, <span className="gold-text">answered</span>
          </h2>
          <p className="mt-4 text-sm text-sand/60">
            Still curious? Message us on WhatsApp and our team will respond personally.
          </p>
        </Reveal>

        <div className="divide-y divide-white/10 border-y border-white/10">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className={`font-serif text-lg transition-colors ${isOpen ? "text-gold" : "text-white"}`}>
                    {f.q}
                  </span>
                  <span className={`shrink-0 text-gold transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                    <Plus />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-8 text-sm leading-relaxed text-sand/65">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
