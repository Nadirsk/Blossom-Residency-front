/** Server-rendered FAQ accordion (native <details> — no JS, fully in the HTML for
 *  crawlers & AI engines). Keep the items identical to the page's FAQ schema. */
export default function FaqBlock({
  faqs,
  heading = "Frequently asked questions",
}: {
  faqs: { q: string; a: string }[];
  heading?: string;
}) {
  return (
    <section className="bg-ink-soft py-16 sm:py-24">
      <div className="container-luxe max-w-3xl">
        <span className="eyebrow mb-4">
          <span className="h-px w-8 bg-gold" /> FAQ
        </span>
        <h2 className="font-serif text-3xl font-light text-white sm:text-4xl">{heading}</h2>
        <div className="mt-8 divide-y divide-white/10 border-y border-white/10">
          {faqs.map((f) => (
            <details key={f.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-lg text-white [&::-webkit-details-marker]:hidden">
                {f.q}
                <span className="shrink-0 text-2xl font-light text-gold transition-transform duration-300 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 pr-8 text-sm leading-relaxed text-sand/65">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
