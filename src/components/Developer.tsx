import { ShieldCheck, Gem, Clock, Handshake } from "lucide-react";
import { PROJECT, DEVELOPER_STATS } from "@/lib/data";
import Reveal from "./Reveal";

const PILLARS = [
  { icon: Gem, title: "Quality First", text: "Strong construction and premium finishes built to last." },
  { icon: ShieldCheck, title: "RERA Compliant", text: `Registered under MahaRERA — ${PROJECT.rera}.` },
  { icon: Clock, title: "On-Time Delivery", text: "A commitment to timely possession, every time." },
  { icon: Handshake, title: "Transparent Process", text: "Honest pricing and clear documentation, end to end." },
];

export default function Developer() {
  return (
    <section className="relative bg-chalk py-24 sm:py-28">
      <div className="container-luxe">
        {/* Two-column header — not centered, more editorial */}
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="eyebrow-muted mb-4">The Developer</p>
              <h2 className="font-serif text-4xl font-medium text-[#1C1A18] sm:text-5xl">
                {PROJECT.developer}
              </h2>
              <p className="mt-3 max-w-lg text-[14px] leading-relaxed text-stone">
                {PROJECT.tagline} — Building quality residential spaces designed for modern living,
                driven by transparency, excellence and lasting satisfaction.
              </p>
            </div>

            {/* Stats — inline with header on large screens */}
            <div className="grid grid-cols-2 gap-x-10 gap-y-6 lg:grid-cols-2 lg:text-right">
              {DEVELOPER_STATS.map((s) => (
                <div key={s.label}>
                  <div className="font-serif text-3xl font-semibold text-[#1C1A18] sm:text-4xl">{s.value}</div>
                  <div className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-stone">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Thin divider */}
        <div className="mt-12 h-px bg-[#DDD9D2]" />

        {/* Pillar cards — white on chalk */}
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07}>
              <div className="card-light h-full rounded-xl p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10">
                  <p.icon size={20} className="text-gold" strokeWidth={1.7} />
                </span>
                <h3 className="mt-5 font-serif text-[17px] font-medium text-[#1C1A18]">{p.title}</h3>
                <p className="mt-2 text-[12px] leading-relaxed text-stone">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
