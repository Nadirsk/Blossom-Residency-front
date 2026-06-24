"use client";

import { useState } from "react";
import { Phone, Download, ArrowRight, Check } from "lucide-react";
import { PROJECT, waLink } from "@/lib/data";
import Reveal from "./Reveal";

const REQUIREMENTS = ["1 BHK", "2 BHK", "Investment", "Not sure yet"];

export default function LeadForm() {
  const [form, setForm] = useState({ name: "", mobile: "", email: "", requirement: "1 BHK" });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg =
      `Hi ${PROJECT.developer}, I'd like the best offer on ${PROJECT.name}.\n\n` +
      `Name: ${form.name}\n` +
      `Mobile: ${form.mobile}\n` +
      (form.email ? `Email: ${form.email}\n` : "") +
      `Looking for: ${form.requirement}`;
    setSent(true);
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
  };

  const field =
    "w-full rounded-xl border border-white/[0.12] bg-white/[0.06] px-4 py-3 text-sm text-white placeholder:text-sand/35 outline-none transition-colors focus:border-gold/60 focus:bg-white/[0.08]";

  return (
    <section id="enquire" className="relative bg-ink py-24 sm:py-32">
      <div className="container-luxe grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow mb-4">Book Your Dream Home</p>
          <h2 className="font-serif text-4xl font-medium leading-tight text-white sm:text-5xl">
            Get the <span className="gold-text italic">best offer</span> on{" "}
            Blossom Residency
          </h2>
          <p className="mt-5 max-w-md text-[14px] leading-relaxed text-sand/60">
            Share a few details and our team will connect with you on WhatsApp with the latest price
            sheet, floor plans and site-visit slots.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${PROJECT.phoneRaw}`} className="btn-gold">
              <Phone size={15} /> {PROJECT.phone}
            </a>
            <a href={PROJECT.brochure} download className="btn-ghost">
              <Download size={15} /> Brochure
            </a>
          </div>

          <p className="mt-6 text-[11px] text-stone">
            {PROJECT.location} · MahaRERA {PROJECT.rera}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={submit}
            className="rounded-2xl border border-white/[0.09] bg-ink-soft p-6 sm:p-8"
          >
            <div className="grid gap-4">
              <input
                required
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={field}
              />
              <input
                required
                type="tel"
                inputMode="tel"
                pattern="[0-9+ ]{7,15}"
                placeholder="Mobile Number"
                value={form.mobile}
                onChange={(e) => setForm({ ...form, mobile: e.target.value })}
                className={field}
              />
              <input
                type="email"
                placeholder="Email (optional)"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={field}
              />
              <div>
                <label className="mb-2 block text-[10px] font-medium uppercase tracking-widest text-stone">
                  I&apos;m looking for
                </label>
                <div className="flex flex-wrap gap-2">
                  {REQUIREMENTS.map((r) => (
                    <button
                      type="button"
                      key={r}
                      onClick={() => setForm({ ...form, requirement: r })}
                      className={`rounded-full border px-4 py-2 text-xs font-medium transition-all ${
                        form.requirement === r
                          ? "border-gold bg-gold/12 text-gold"
                          : "border-white/12 text-sand/60 hover:border-white/25 hover:text-sand/80"
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              <button type="submit" className="btn-gold mt-2 w-full">
                {sent ? (
                  <>
                    <Check size={15} /> Opening WhatsApp…
                  </>
                ) : (
                  <>
                    Get Best Offer <ArrowRight size={15} />
                  </>
                )}
              </button>
              <p className="text-center text-[11px] text-stone/50">
                By submitting you agree to be contacted about this project.
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
