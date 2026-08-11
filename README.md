# Ayodhya Samil & Timber Depot — Website

A bilingual (Telugu/English), mobile-first website built with React, TypeScript, Vite and Tailwind CSS.

All business details (name, GST, phone numbers, address, wood varieties) are taken directly
from the provided business card — nothing has been invented. No fake reviews, ratings,
customer counts, years-of-experience claims, or certifications are used anywhere on the site.

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
```

Output goes to `dist/` — upload that folder to any static host (Netlify, Vercel, GitHub Pages,
cPanel, etc).

## Structure

```
src/
  components/     UI sections (Navbar, Hero, About, ProductGrid, TimberSection,
                   PlywoodSection, DoorsSection, WhyChooseUs, Gallery, EnquiryForm,
                   Location, Contact, Footer, MobileCTA, Icons, WoodArt)
  context/        LanguageContext — Telugu/English toggle used across the whole site
  data/
    business.ts   Business name, phones, GST, address, WhatsApp message templates
    products.ts   Product categories + wood varieties (from the card)
```

## Editing content

- **Business info** (phones, address, GST): edit `src/data/business.ts`
- **Products / wood varieties**: edit `src/data/products.ts`
- **Colors / fonts**: edit `tailwind.config.js`
- **Google Map**: `src/components/Location.tsx` currently links to a Maps *search* built
  from the printed address (no GPS pin was confirmed). Once you have the exact
  Google Maps place link, swap it in — and you can also drop an `<iframe>` embed
  into the placeholder box in that same file.
- **Images**: The gallery and hero currently use original SVG wood illustrations
  (`src/components/WoodArt.tsx`) instead of stock photography. Drop real product
  photos into `src/assets/` and swap them in when you have them.

## Notes on trust & accuracy

Per the request, this build deliberately avoids:
- Fabricated years of experience, customer counts, or awards
- Invented certifications (BWP/MR/marine-grade etc. for plywood)
- Fake testimonials or star ratings
- A guessed GPS pin (directions link uses a Maps address search instead)

If any of the above becomes available (real experience, real certifications, a confirmed
map pin), add it in the relevant data file / component.
