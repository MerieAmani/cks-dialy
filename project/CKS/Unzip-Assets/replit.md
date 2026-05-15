# CKS Dialysis Website

A multi-page marketing and information website for CKS Dialysis Centre and CKS Kimuka Hospital — covering four branch locations across Nairobi and Kajiado County, Kenya.

## Run & Operate

- `pnpm --filter @workspace/cks-website run dev` — run the website (port 22005)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite + Tailwind CSS v4 + Wouter routing
- No backend needed for the website (pure static/React)
- Fonts: Playfair Display (headings), Inter (body) via Google Fonts
- Icons: Lucide React

## Where things live

- `artifacts/cks-website/src/pages/` — 5 page components (HomePage, KimukaPage, DialysisPage, ScreeningPage, GalleryPage)
- `artifacts/cks-website/src/components/` — Nav, Footer, MobileCTA
- `artifacts/cks-website/src/index.css` — all design tokens and custom classes
- `artifacts/cks-website/public/images/` — all site images (named)
- `artifacts/cks-website/public/images/gallery/` — 99 WhatsApp gallery images
- `attached_assets/CKS_contents/` — original ZIP assets (reference)

## Pages & Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | HomePage | CKS Dialysis mother homepage — hero slider, services, branch cards, testimonials marquee, FAQ |
| `/kimuka` | KimukaPage | CKS Kimuka Hospital sub-site — full hospital showcase, services, gallery, appointment form |
| `/dialysis` | DialysisPage | Dialysis & renal care deep-dive — unit info, patient amenities, insurance |
| `/screening` | ScreeningPage | Screening & diagnostics — lab tests, imaging, community camps |
| `/gallery` | GalleryPage | Filterable photo gallery with keyboard-navigable lightbox |

## Color Palette

- Primary teal: `#009e96` (var(--teal-600))
- Steel blue: `#4a7fa5` (var(--steel))
- Dark teal: `#005c54` (var(--teal-900))
- Silver scale for neutrals

## Architecture decisions

- Pure frontend — no backend, no DB. Static React SPA with Wouter for client-side routing.
- All images served from `public/images/` for zero-config Vite static serving.
- Reveal animations via IntersectionObserver (no library dependency).
- Mobile CTA bar (WhatsApp + Call) fixed to bottom on mobile, hidden on desktop.
- Testimonials use CSS marquee animation (no JS scroll library).

## Product

- CKS Dialysis / CKS Kimuka Hospital multi-page website
- 5 pages: Home, Kimuka Hospital, Dialysis, Screening, Gallery
- Key stats: 4 branches, SHA accepted, 24/7 Kimuka, 1800%+ dialysis growth
- Key contacts: 0757 614 036 (HQ), 0753 372 814 (Kimuka)

## User preferences

- Remove "4x outpatient" statistic — not used anywhere
- Feature "1,800%+ Scale in Dialysis Capacity" prominently
- Design inspiration: pkckenya.com (professional Kenyan healthcare aesthetic)

## Gotchas

- Google Fonts `@import` must be the first line in `index.css` (before Tailwind)
- Images use root-relative `/images/...` paths (served from `public/`)
- WhatsApp links use format `https://wa.me/254XXXXXXXXX`
- Routes use Wouter; base URL from `import.meta.env.BASE_URL`
