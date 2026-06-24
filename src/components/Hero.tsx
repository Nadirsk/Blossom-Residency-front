"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Download, CalendarCheck, MapPin, ChevronDown } from "lucide-react";
import { PROJECT, waLink } from "@/lib/data";

const fade = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.85, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.16]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative flex min-h-[100svh] items-center overflow-hidden">
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        initial={{ scale: 1.18 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.6, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <Image
          src="/images/hero.png"
          alt={`${PROJECT.name} — elevation view`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-ink/50" />
      <div className="absolute inset-0 hero-vignette" />

      <motion.div style={{ y: contentY, opacity: contentOpacity }} className="container-luxe relative z-10 pt-28">
        {/* Top row: developer tag + urgency */}
        <motion.div
          custom={0}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mb-6 flex flex-wrap items-center gap-3"
        >
          <span className="eyebrow">
            {PROJECT.developer} · {PROJECT.tagline}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-red-400/35 bg-red-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-red-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-400" />
            Limited Units
          </span>
        </motion.div>

        {/* Main headline — large Cormorant display */}
        <motion.h1
          custom={1}
          variants={fade}
          initial="hidden"
          animate="show"
          className="max-w-4xl font-serif text-5xl font-medium leading-[1.0] text-white sm:text-6xl lg:text-[5.5rem]"
        >
          Blossom{" "}
          <span className="gold-text italic">Residency</span>
        </motion.h1>

        <motion.p
          custom={2}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-5 max-w-lg text-[15px] leading-relaxed text-sand/80"
        >
          {PROJECT.hook}. {PROJECT.config} in a {PROJECT.tower.toLowerCase()}, crafted for modern,
          Vastu-compliant living.
        </motion.p>

        {/* Meta row */}
        <motion.div
          custom={3}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-sand/70"
        >
          <span className="flex items-center gap-1.5">
            <MapPin size={14} className="text-gold" /> {PROJECT.location}
          </span>
          <span className="hidden h-3.5 w-px bg-white/15 sm:block" />
          <span>
            From <span className="font-semibold text-white">{PROJECT.startingPrice}</span>
          </span>
          <span className="hidden h-3.5 w-px bg-white/15 sm:block" />
          <span className="rounded-full border border-gold/35 px-3 py-0.5 text-[11px] tracking-wide text-gold">
            MahaRERA {PROJECT.rera}
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          custom={4}
          variants={fade}
          initial="hidden"
          animate="show"
          className="mt-8 flex flex-wrap gap-3"
        >
          <a href={PROJECT.brochure} download className="btn-gold">
            <Download size={15} /> Download Brochure
          </a>
          <a href="#residences" className="btn-ghost">
            View Floor Plans
          </a>
          <a
            href={waLink(`Hi, I'd like to book a site visit for ${PROJECT.name}.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <CalendarCheck size={15} /> Book Site Visit
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
