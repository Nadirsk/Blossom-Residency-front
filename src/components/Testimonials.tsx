import { TESTIMONIALS } from "@/lib/data";
import Reveal from "./Reveal";

export default function Testimonials() {
  const [featured, ...rest] = TESTIMONIALS;

  return (
    <section className="relative bg-ink py-24 sm:py-32">
      <div className="container-luxe">
        <Reveal>
          <p className="eyebrow mb-10">Happy Homeowners</p>
        </Reveal>

        {/* Featured testimonial — large editorial quote */}
        <Reveal delay={0.05}>
          <div className="card-dark rounded-2xl p-8 sm:p-10 lg:p-14">
            <span className="font-serif text-7xl font-medium leading-none text-gold/20 sm:text-8xl">&ldquo;</span>
            <blockquote className="mt-2 font-serif text-xl font-normal italic leading-relaxed text-white sm:text-2xl lg:text-3xl lg:leading-relaxed">
              {featured.text}
            </blockquote>
            <div className="mt-8 flex items-center gap-4 border-t border-white/[0.08] pt-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/15 font-serif text-xl font-semibold text-gold">
                {featured.name[0]}
              </div>
              <div>
                <div className="text-[14px] font-semibold text-white">{featured.name}</div>
                <div className="text-[11px] text-stone">{featured.config} · {featured.location}</div>
              </div>
              <div className="ml-auto hidden sm:block">
                <span className="rounded-full border border-gold/25 px-3 py-1 text-[11px] text-gold">
                  Verified Buyer
                </span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Supporting testimonials */}
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {rest.map((t, i) => (
            <Reveal key={t.name} delay={0.1 + i * 0.08}>
              <div className="card-dark flex h-full flex-col rounded-2xl p-7">
                <p className="flex-1 text-[14px] leading-relaxed text-sand/65">&ldquo;{t.text}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3 border-t border-white/[0.08] pt-5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold/12 font-serif text-base font-semibold text-gold">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-[13px] font-semibold text-white">{t.name}</div>
                    <div className="text-[11px] text-stone">{t.config} · {t.location}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-8 text-center">
          <p className="text-[13px] text-stone">
            Trusted by <span className="font-semibold text-white">500+ families</span> across Dombivli
          </p>
        </Reveal>
      </div>
    </section>
  );
}
