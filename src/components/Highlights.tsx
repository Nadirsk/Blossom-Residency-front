import Counter from "./Counter";
import Reveal from "./Reveal";
import { HIGHLIGHTS, PROJECT } from "@/lib/data";

export default function Highlights() {
  return (
    <section id="highlights" className="relative border-y border-white/10 bg-ink-soft py-16">
      <div className="container-luxe grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
        {HIGHLIGHTS.map((h, i) => (
          <Reveal key={h.label} delay={i * 0.1} className="text-center">
            <div className="font-serif text-4xl font-medium text-white sm:text-5xl">
              <Counter
                to={h.value}
                prefix={"prefix" in h ? h.prefix : ""}
                suffix={h.suffix}
                display={"display" in h ? h.display : undefined}
              />
            </div>
            <div className="mt-2 text-xs uppercase tracking-[0.18em] text-sand/60">{h.label}</div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.2} className="container-luxe mt-12 text-center">
        <p className="mx-auto max-w-2xl text-sm text-sand/55">
          A landmark address opposite Xperia Mall, {PROJECT.city} — RERA-approved and built on the
          promise of {PROJECT.developer}: {PROJECT.tagline}
        </p>
      </Reveal>
    </section>
  );
}
