"use client";

import Image from "next/image";
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
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-ink shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/40 hover:shadow-luxe"
              >
                {/* the amenity photo */}
                <Image
                  src={a.img}
                  alt={a.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover transition-transform duration-[1400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.12]"
                />

                {/* readability overlays — strong at the base for the title, soft at the top for the chip */}
                <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/35 to-transparent transition-opacity duration-500 group-hover:from-ink/95 group-hover:via-ink/15" />
                <span className="absolute inset-0 bg-gradient-to-b from-ink/55 via-transparent to-transparent" />

                {/* sheen on hover */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

                <div className="relative flex h-full flex-col justify-between p-5">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/25 bg-ink/40 text-gold-light backdrop-blur-md transition-colors duration-500 group-hover:border-gold/60">
                    <Icon size={20} strokeWidth={1.6} />
                  </span>
                  <div>
                    <span className="mb-3 block h-px w-9 bg-gold-grad transition-all duration-500 group-hover:w-16" />
                    <h3 className="font-serif text-base leading-snug text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] sm:text-lg">
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
