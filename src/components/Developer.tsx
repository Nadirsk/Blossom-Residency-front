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
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(201,162,75,0.10),transparent)]" />
      <div className="container-luxe relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-4">
            <span className="h-px w-8 bg-gold" /> The Developer
          </span>
          <h2 className="font-serif text-4xl font-light text-white sm:text-5xl">
            {PROJECT.developer}
          </h2>
          <p className="mt-4 text-sand/65">{PROJECT.tagline}</p>
          <p className="mt-3 text-sm leading-relaxed text-sand/55">
            We build quality residential and commercial spaces designed for modern living — driven by
            a commitment to excellence, transparency and lasting customer satisfaction.
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
            {DEVELOPER_STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-serif text-3xl font-medium text-gold sm:text-4xl">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-sand/55">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <div className="glass h-full rounded-2xl p-6 text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold/12 text-gold">
                  <p.icon size={22} />
                </span>
                <h3 className="mt-4 font-serif text-lg text-white">{p.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-sand/60">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
