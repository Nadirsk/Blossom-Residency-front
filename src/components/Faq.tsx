"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQS, PROJECT, waLink } from "@/lib/data";
import Reveal from "./Reveal";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-chalk py-24 sm:py-32">
      <div className="container-luxe grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <p className="eyebrow-muted mb-4">FAQ</p>
          <h2 className="font-serif text-4xl font-medium text-[#1C1A18] sm:text-5xl">
            Questions,{" "}
            <span className="gold-text italic">answered</span>
          </h2>
          <p className="mt-4 text-[13px] leading-relaxed text-stone">
            Still curious? Our team will respond personally.
          </p>
          <a
            href={waLink("Hi, I have a question about Blossom Residency.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline mt-6 inline-flex"
          >
            Ask on WhatsApp
          </a>
        </Reveal>

        <div className="divide-y divide-[#DDD9D2] border-y border-[#DDD9D2]">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-4 py-5 text-left"
                >
                  <span
                    className={`font-serif text-[17px] font-medium leading-snug transition-colors ${
                      isOpen ? "text-gold" : "text-[#1C1A18]"
                    }`}
                  >
                    {f.q}
                  </span>
                  <span
                    className={`mt-0.5 shrink-0 text-gold transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <Plus size={20} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-8 text-[13px] leading-relaxed text-stone">{f.a}</p>
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
