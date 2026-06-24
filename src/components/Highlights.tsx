import Counter from "./Counter";
import Reveal from "./Reveal";
import { HIGHLIGHTS, PROJECT } from "@/lib/data";

export default function Highlights() {
  return (
    <section id="highlights" className="bg-chalk">
      {/* Hairline-separated stat grid — 1px gap creates dividers via bg color bleed */}
      <div className="grid grid-cols-2 gap-px bg-[#DDD9D2] lg:grid-cols-4">
        {HIGHLIGHTS.map((h, i) => (
          <Reveal key={h.label} delay={i * 0.07} className="bg-chalk px-8 py-12 text-center sm:px-12">
            <div className="font-serif text-5xl font-semibold text-[#1C1A18] sm:text-6xl">
              <Counter
                to={h.value}
                prefix={"prefix" in h ? h.prefix : ""}
                suffix={h.suffix}
                display={"display" in h ? h.display : undefined}
              />
            </div>
            <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-stone">{h.label}</div>
          </Reveal>
        ))}
      </div>

      {/* Tagline strip */}
      <Reveal className="border-t border-[#DDD9D2] px-5 py-5 text-center sm:px-8">
        <p className="mx-auto max-w-2xl text-[13px] text-stone">
          A landmark address opposite Xperia Mall, {PROJECT.city} — RERA-approved by{" "}
          <span className="font-medium text-[#2C2825]">{PROJECT.developer}</span>
        </p>
      </Reveal>
    </section>
  );
}
