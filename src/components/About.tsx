import { Check } from "lucide-react";
import Reveal from "./Reveal";
import Parallax from "./Parallax";
import { WHY_US, PROJECT } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-luxe grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <div className="relative">
            <Parallax
              src="/images/wing-b-lifestyle.jpg"
              alt="Blossom Residency lifestyle"
              amount={50}
              zoom
              className="aspect-[7/6] shadow-luxe"
            />
            <div className="glass absolute -bottom-6 right-3 hidden rounded-2xl px-6 py-5 shadow-card lg:bottom-auto lg:-right-4 lg:top-auto lg:block xl:-bottom-8">
              <div className="font-serif text-3xl text-white">{PROJECT.tower.split(" ")[0]}</div>
              <div className="text-xs uppercase tracking-widest text-gold">Storey Tower</div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow mb-4">
              <span className="h-px w-8 bg-gold" /> About the Project
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-serif text-4xl font-light leading-tight text-white sm:text-5xl">
              Thoughtfully designed homes for <span className="gold-text">modern living</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-sand/70">
              At {PROJECT.developer}, we focus on building quality residential spaces designed for
              the way you live today. Located in the prime growth corridor of Nilje, Dombivli East,
              Blossom Residency offers {PROJECT.config.toLowerCase()} with modern amenities,
              Vastu-compliant layouts and excellent connectivity — all backed by transparent process
              and on-time delivery.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {WHY_US.map((w) => (
                <li key={w} className="flex items-center gap-3 text-sm text-sand/85">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Check size={14} />
                  </span>
                  {w}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
