"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck, Cctv, Trees, ToyBrick, Building2, Flower2, Dumbbell,
  Sun, Baby, Flame, Gamepad2, Car, type LucideIcon,
} from "lucide-react";
import { AMENITIES } from "@/lib/data";
import Reveal from "./Reveal";

const ICONS: Record<string, LucideIcon> = {
  ShieldCheck, Cctv, Trees, ToyBrick, Building2, Flower2, Dumbbell,
  Sun, Baby, Flame, Gamepad2, Car,
};

export default function Amenities() {
  return (
    <section id="amenities" className="relative bg-chalk py-24 sm:py-32">
      <div className="container-luxe">
        <Reveal className="mx-auto max-w-xl text-center">
          <p className="eyebrow-muted mb-3">Premium Amenities</p>
          <h2 className="font-serif text-4xl font-medium text-[#1C1A18] sm:text-5xl">
            Every day, <span className="gold-text italic">elevated</span>
          </h2>
          <p className="mt-4 text-[14px] leading-relaxed text-stone">
            From a rooftop yoga deck to a bonfire lounge — curated for wellness, recreation and community.
          </p>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ show: { transition: { staggerChildren: 0.055 } } }}
          className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
        >
          {AMENITIES.map((a) => {
            const Icon = ICONS[a.icon] ?? ShieldCheck;
            return (
              <motion.div
                key={a.name}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                className="group card-light flex flex-col gap-4 rounded-xl p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10">
                  <Icon size={20} className="text-gold" strokeWidth={1.7} />
                </span>
                <h3 className="text-[13px] font-medium leading-snug text-[#1C1A18]">{a.name}</h3>
              </motion.div>
            );
          })}
        </motion.div>

        <Reveal delay={0.1} className="mt-6 text-center text-[11px] text-stone/60">
          Indicative representation of proposed amenities. Final amenities subject to project plan.
        </Reveal>
      </div>
    </section>
  );
}
