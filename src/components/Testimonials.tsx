import { Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/data";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_100%,rgba(201,162,75,0.07),transparent)]" />
      <div className="container-luxe relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-4">
            <span className="h-px w-8 bg-gold" /> Happy Homeowners
          </span>
          <h2 className="font-serif text-4xl font-light text-white sm:text-5xl">
            Trusted by <span className="gold-text">500+ families</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <div className="glass flex h-full flex-col rounded-3xl p-7">
                <Quote size={28} className="shrink-0 text-gold/40" strokeWidth={1.5} />
                <p className="mt-5 flex-1 text-sm leading-relaxed text-sand/75">{t.text}</p>
                <div className="mt-7 flex items-center gap-4 border-t border-white/10 pt-5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold/15 font-serif text-lg font-semibold text-gold">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-[11px] text-sand/50">
                      {t.config} · {t.location}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
