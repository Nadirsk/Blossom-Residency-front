"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Download, CalendarCheck, MapPin, ChevronDown } from "lucide-react";
import { PROJECT, waLink } from "@/lib/data";

const fade = {
  hidden: { opacity: 0, y: 34, filter: "blur(10px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.9, delay: 0.25 + i * 0.13, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Background drifts down + zooms slightly as you scroll; foreground lifts and fades.
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <Image
          src="/images/hero.png"
          alt={`${PROJECT.name} — twilight elevation`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-ink/55" />
      <div className="absolute inset-0 hero-vignette" />

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="container-luxe relative z-10 pt-28">
        <motion.div custom={0} variants={fade} initial="hidden" animate="show" className="mb-5 flex flex-wrap items-center gap-3">
          <span className="eyebrow">
            <span className="h-px w-8 bg-gold" /> {PROJECT.developer} · {PROJECT.tagline}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-red-400/40 bg-red-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-red-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-400" />
            Limited Units
          </span>
        </motion.div>

        <motion.h1
          custom={1}
          variants={fade}
          initial="hidden"
          animate="show"
          className="max-w-3xl font-serif text-5xl font-light leading-[1.05] text-white sm:text-6xl lg:text-7xl"
        >
          Blossom <span className="gold-text font-medium">Residency</span>
          <span className="mt-4 block font-sans text-base font-normal leading-snug tracking-wide text-sand/75 sm:text-lg">
            1 &amp; 2 BHK Flats in Dombivli East — Opp. Xperia Mall, Nilje
          </span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-5 max-w-xl text-lg text-sand/85"
        >
          {PROJECT.hook}. {PROJECT.config} in a {PROJECT.tower.toLowerCase()}, crafted for modern,
          Vastu-compliant living.
        </motion.p>

        <motion.div
          custom={3}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-sand/80"
        >
          <span className="inline-flex items-center gap-2">
            <MapPin size={16} className="text-gold" /> {PROJECT.location}
          </span>
          <span className="hidden h-4 w-px bg-white/20 sm:block" />
          <span>
            Starting <span className="font-semibold text-white">{PROJECT.startingPrice}</span>
          </span>
          <span className="hidden h-4 w-px bg-white/20 sm:block" />
          <span className="rounded-full border border-gold/40 px-3 py-1 text-xs tracking-wide text-gold">
            MahaRERA {PROJECT.rera}
          </span>
        </motion.div>

        <motion.div
          custom={4}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-9 flex flex-wrap gap-3"
        >
          <a href={PROJECT.brochure} download className="btn-gold">
            <Download size={16} /> Download Brochure
          </a>
          <a href="#residences" className="btn-ghost">
            Get Price Sheet
          </a>
          <a
            href={waLink(`Hi, I'd like to book a site visit for ${PROJECT.name}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <CalendarCheck size={16} /> Book Site Visit
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#highlights"
        aria-label="Scroll down"
        style={{ opacity: contentOpacity }}
        className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2 text-gold"
      >
        <ChevronDown className="animate-floaty" />
      </motion.a>
    </section>
  );
}
