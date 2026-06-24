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
    "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-sand/40 outline-none transition-colors focus:border-gold focus:bg-white/[0.07]";

  return (
    <section id="enquire" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_80%_20%,rgba(201,162,75,0.12),transparent)]" />
      <div className="container-luxe relative grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow mb-4">
            <span className="h-px w-8 bg-gold" /> Book Your Dream Home
          </span>
          <h2 className="font-serif text-4xl font-light leading-tight text-white sm:text-5xl">
            Get the <span className="gold-text">best offer</span> on Blossom{" "}
            <span className="gold-text">Residency</span>
          </h2>
          <p className="mt-5 max-w-md text-sand/65">
            Share a few details and our team will instantly connect with you on WhatsApp with the
            latest price sheet, floor plans and site-visit slots.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${PROJECT.phoneRaw}`} className="btn-gold">
              <Phone size={16} /> {PROJECT.phone}
            </a>
            <a href={PROJECT.brochure} download className="btn-ghost">
              <Download size={16} /> Brochure
            </a>
          </div>

          <p className="mt-6 text-xs text-sand/45">
            {PROJECT.location} · MahaRERA {PROJECT.rera}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={submit} className="glass rounded-3xl p-6 shadow-luxe sm:p-8">
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
                <label className="mb-2 block text-xs uppercase tracking-widest text-sand/50">
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
                          ? "border-gold bg-gold/15 text-gold"
                          : "border-white/15 text-sand/70 hover:border-white/30"
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
                    <Check size={16} /> Opening WhatsApp…
                  </>
                ) : (
                  <>
                    Get Best Offer <ArrowRight size={16} />
                  </>
                )}
              </button>
              <p className="text-center text-[11px] text-sand/40">
                By submitting you agree to be contacted about this project.
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
