"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Img from "./Img";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY } from "@/lib/data";
import Reveal from "./Reveal";

const spanClass: Record<string, string> = {
  tall: "row-span-2",
  wide: "sm:col-span-2",
  normal: "",
};

export default function Gallery() {
  const [idx, setIdx] = useState<number | null>(null);
  const close = () => setIdx(null);
  const prev = () => setIdx((i) => (i === null ? i : (i - 1 + GALLERY.length) % GALLERY.length));
  const next = () => setIdx((i) => (i === null ? i : (i + 1) % GALLERY.length));

  return (
    <section id="gallery" className="relative py-24 sm:py-32">
      <div className="container-luxe">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-4">
            <span className="h-px w-8 bg-gold" /> Gallery
          </span>
          <h2 className="font-serif text-4xl font-light text-white sm:text-5xl">
            A closer <span className="gold-text">look</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {GALLERY.map((g, i) => (
            <Reveal
              key={g.src}
              delay={(i % 4) * 0.06}
              className={`${spanClass[g.span]} group relative cursor-pointer overflow-hidden rounded-2xl`}
            >
              <button onClick={() => setIdx(i)} className="block h-full w-full" aria-label={g.title}>
                <Img
                  src={g.src}
                  alt={g.title}
                  fill
                  sizes="(max-width:640px) 50vw, 25vw"
                  className="object-cover group-hover:scale-[1.12]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute bottom-3 left-4 translate-y-2 text-sm font-medium text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {g.title}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {idx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-md"
          >
            <button onClick={close} aria-label="Close" className="absolute right-5 top-5 text-sand hover:text-white">
              <X size={28} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              aria-label="Previous"
              className="absolute left-3 sm:left-8 flex h-12 w-12 items-center justify-center rounded-full glass text-white hover:bg-white/10"
            >
              <ChevronLeft />
            </button>
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[82vh] w-full max-w-5xl"
            >
              <Image
                src={GALLERY[idx].src}
                alt={GALLERY[idx].title}
                width={1400}
                height={1000}
                className="mx-auto max-h-[82vh] w-auto rounded-xl object-contain"
              />
              <p className="mt-3 text-center text-sm text-sand/70">{GALLERY[idx].title}</p>
            </motion.div>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              aria-label="Next"
              className="absolute right-3 sm:right-8 flex h-12 w-12 items-center justify-center rounded-full glass text-white hover:bg-white/10"
            >
              <ChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
