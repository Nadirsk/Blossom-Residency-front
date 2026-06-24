import { Check } from "lucide-react";
import Reveal from "./Reveal";
import Parallax from "./Parallax";
import { WHY_US, PROJECT } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative bg-ink py-24 sm:py-32">
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
            {/* Stat card — solid dark, no backdrop-blur */}
            <div className="card-dark absolute -bottom-6 right-3 hidden rounded-xl px-6 py-5 lg:-right-4 lg:block xl:-bottom-8">
              <div className="font-serif text-3xl font-semibold text-white">{PROJECT.tower.split(" ")[0]}</div>
              <div className="mt-0.5 text-[10px] uppercase tracking-[0.22em] text-gold">Storey Tower</div>
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow mb-4">About the Project</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="font-serif text-4xl font-medium leading-tight text-white sm:text-5xl">
              Thoughtfully designed homes for{" "}
              <span className="gold-text italic">modern living</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-[15px] leading-relaxed text-sand/65">
              At {PROJECT.developer}, we focus on building quality residential spaces designed for
              the way you live today. Located in the prime growth corridor of Nilje, Dombivli East,
              Blossom Residency offers {PROJECT.config.toLowerCase()} with modern amenities,
              Vastu-compliant layouts and excellent connectivity — backed by a transparent process
              and on-time delivery.
            </p>
          </Reveal>

          <Reveal delay={0.14}>
            <ul className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {WHY_US.map((w) => (
                <li key={w} className="flex items-center gap-3 text-[13px] text-sand/75">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15">
                    <Check size={11} className="text-gold" />
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
