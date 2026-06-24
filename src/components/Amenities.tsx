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

// Each tint shares the same dark base for cohesion, with a distinct accent glow + icon hue.
const TINTS: Record<string, { glow: string; icon: string }> = {
  slate: { glow: "bg-slate-400/25", icon: "text-slate-200" },
  blue: { glow: "bg-sky-500/25", icon: "text-sky-300" },
  green: { glow: "bg-emerald-500/30", icon: "text-emerald-300" },
  amber: { glow: "bg-amber-400/30", icon: "text-amber-300" },
  indigo: { glow: "bg-indigo-500/30", icon: "text-indigo-300" },
  teal: { glow: "bg-teal-500/30", icon: "text-teal-300" },
  gold: { glow: "bg-gold/35", icon: "text-gold-light" },
  orange: { glow: "bg-orange-500/30", icon: "text-orange-300" },
  sand: { glow: "bg-amber-200/25", icon: "text-amber-100" },
  ember: { glow: "bg-red-500/30", icon: "text-orange-300" },
  violet: { glow: "bg-violet-500/30", icon: "text-violet-300" },
  graphite: { glow: "bg-zinc-400/20", icon: "text-zinc-200" },
};

export default function Amenities() {
  return (
    <section id="amenities" className="relative py-24 sm:py-32">
      <div className="container-luxe">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-4">
            <span className="h-px w-8 bg-gold" /> Premium Amenities
          </span>
          <h2 className="font-serif text-4xl font-light text-white sm:text-5xl">
            Every day, <span className="gold-text">elevated</span>
          </h2>
          <p className="mt-4 text-sand/65">
            A curated suite of lifestyle amenities — from a rooftop yoga deck to a bonfire lounge —
            designed for wellness, recreation and community.
          </p>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ show: { transition: { staggerChildren: 0.07 } } }}
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
        >
          {AMENITIES.map((a) => {
            const Icon = ICONS[a.icon] ?? ShieldCheck;
            const t = TINTS[a.tint] ?? TINTS.gold;
            return (
              <motion.div
                key={a.name}
                variants={{
                  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
                  show: {
                    opacity: 1, y: 0, filter: "blur(0px)",
                    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                  },
                }}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-ink-mute via-ink-soft to-ink shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-luxe"
              >
                {/* accent glow */}
                <span
                  className={`absolute -right-10 -top-12 h-44 w-44 rounded-full blur-3xl transition-all duration-700 group-hover:scale-150 ${t.glow}`}
                />
                {/* dotted texture */}
                <span className="absolute inset-0 opacity-[0.07] [background-image:radial-gradient(rgba(255,255,255,0.6)_1px,transparent_1px)] [background-size:16px_16px]" />
                {/* large background visual (the amenity's image) */}
                <Icon
                  className={`pointer-events-none absolute -bottom-6 -right-5 h-40 w-40 opacity-[0.13] transition-all duration-700 group-hover:scale-110 group-hover:opacity-25 ${t.icon}`}
                  strokeWidth={1.1}
                />
                {/* sheen on hover */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

                <div className="relative flex h-full flex-col justify-between p-5">
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] backdrop-blur-sm ${t.icon}`}
                  >
                    <Icon size={22} strokeWidth={1.6} />
                  </span>
                  <div>
                    <span className="mb-3 block h-px w-9 bg-gold-grad" />
                    <h3 className="font-serif text-base leading-snug text-white sm:text-lg">
                      {a.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <Reveal delay={0.1} className="mt-8 text-center text-xs text-sand/40">
          Indicative representation of proposed amenities. Final amenities subject to project plan.
        </Reveal>
      </div>
    </section>
  );
}
