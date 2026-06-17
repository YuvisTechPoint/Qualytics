# Qualytics.ai Clone

Production-grade marketing website clone of [qualytics.ai](https://qualytics.ai/) with dark enterprise UI, 3D data visualizations, scroll animations, and full-stack backend.

## Stack

- **Next.js 14** (App Router) + TypeScript + Tailwind CSS
- **Framer Motion** — scroll reveals, tab transitions, CountUp stats
- **Three.js / React Three Fiber** — DataFlowNetwork, ParticleField, ControlLayerMesh, DataGlobe
- **D3.js** — CircularProgress rings, AnomalyTimeline spark-lines
- **Prisma 7** + PostgreSQL — forms, integrations catalog
- **Sanity CMS** — content architecture (static fallback included)
- **React Hook Form** + Zod — validated forms with honeypot

## Getting Started

```bash
cd qualytics-clone
cp .env.example .env
npm install --legacy-peer-deps
npx prisma generate
npx prisma db push   # requires PostgreSQL
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

Visual dev playground: [http://localhost:3000/dev/visuals](http://localhost:3000/dev/visuals)

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with 8 sections, 3D hero, tab demo |
| `/augmented-data-quality` | Platform page |
| `/built-for-humans-and-ai` | Platform page |
| `/trusted-context-at-use` | Platform page |
| `/why-qualytics` | Industry tabs + CircularProgress |
| `/integrations` | Filterable integration grid |
| `/customer-love` | Testimonial grid |
| `/about-us`, `/careers`, `/contact` | Company pages |
| `/demo`, `/free-trial` | Conversion forms |
| `/resources/*` | Blog, guides, webinars, stories, inline articles |
| `/tos`, `/privacy` | Legal pages |

## API Routes

- `POST /api/demo` — Demo request
- `POST /api/trial` — Free trial signup
- `POST /api/contact` — Contact form
- `POST /api/newsletter` — Newsletter subscription
- `GET /api/search?q=` — Content search
- `POST /api/revalidate` — Sanity ISR webhook

## Visual Features

- Dark palette: `#09090F` bg, `#FF6B35` CTAs, `#0E8DD6` accents
- Syne display + Inter body typography
- 3D scenes desktop-only with `prefers-reduced-motion` support
- Animated Control Gap SVG diagram
- Logo marquee with infinite scroll
- Framer Motion scroll reveals throughout

## Build

```bash
npm run build
npm start
```

## Deploy

Configure environment variables from `.env.example` on Vercel. Connect Supabase for PostgreSQL and Sanity for CMS content.
