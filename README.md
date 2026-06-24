# Blossom Residency — by Shree Construction

A luxury real-estate landing site for **Blossom Residency**, Nilje, Dombivli East.
Built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, **Framer Motion** and **Lenis** smooth scroll.

## Run locally

```bash
npm install      # already done
npm run dev      # http://localhost:3000  (hot reload)
```

## Production

```bash
npm run build
npm start        # serves the optimized build on http://localhost:3000
```

## Deploy

Zero-config on **Vercel** (recommended): push the folder to a Git repo and import it, or run `npx vercel`.
Also works on Netlify or any Node host. `public/brochure.pdf` and `public/images/*` ship as-is.

## Editing content

Everything is data-driven from one file: **`src/lib/data.ts`**
— phone, RERA number, price, location, amenities, configurations, location advantages, FAQs and gallery.
Change a value there and it updates across the whole site. No component edits needed for copy changes.

### Lead capture
The enquiry form, "Book Site Visit", floating WhatsApp and Call buttons all route to
**+91 98679 89323** via `wa.me` and `tel:` links — they compose a pre-filled WhatsApp message.
To wire the form to a CRM/API later, edit the `submit` handler in `src/components/LeadForm.tsx`.

### Images
Located in `public/images/` (renamed from your originals). Swap a file (keep the name) to update it.

## Sections
Hero · Highlights (animated counters) · About · Residences & Pricing (floor-plan modal) ·
Amenities · Location + Investment · Gallery (lightbox) · Developer · FAQ · Lead form · Footer.

SEO: dynamic metadata, OpenGraph, and `Residence` JSON-LD schema in `src/app/layout.tsx`.
