# EC Markets – Stocks & Shares ISA Landing Page

A high-converting, performance-optimised landing page for EC Markets' ISA investment product, built with Next.js, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Static Generation)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Deployment:** Vercel (recommended)

## Getting Started

```bash
cd isa-landing
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata & JSON-LD
│   ├── page.tsx            # Landing page (composes all sections)
│   └── globals.css         # Global styles & Tailwind config
├── components/
│   ├── Header.tsx          # Sticky nav with scroll-aware styling
│   ├── Hero.tsx            # Hero with entrance animations & phone mockup
│   ├── Benefits.tsx        # 4 benefit cards with hover interactions
│   ├── AppShowcase.tsx     # Stocks & ETFs / investment options
│   ├── Features.tsx        # 3 feature sections with app visuals
│   ├── ComparisonTable.tsx # ISA vs GIA side-by-side table
│   ├── SocialProof.tsx     # Reviews, ratings & trust badges
│   ├── LeadCapture.tsx     # Email signup form with validation
│   ├── DownloadCTA.tsx     # App Store / Google Play download buttons
│   ├── Footer.tsx          # Links + FCA risk disclaimer
│   ├── ExitIntent.tsx      # Exit-intent popup modal
│   ├── StickyBottomCTA.tsx # Mobile sticky download bar
│   └── AnimatedSection.tsx # Reusable scroll-triggered animation wrapper
└── lib/
    └── analytics.ts        # Event tracking (GA4 / GTM ready)
```

## Key Features

- **Performance:** Statically generated, zero external images, < 2s target load time
- **SEO:** Semantic HTML, Open Graph, Twitter Cards, JSON-LD structured data
- **Animations:** Stripe-inspired smooth reveals, Revolut-style product motion, hover interactions
- **Conversion:** Dual CTA hierarchy, sticky mobile bar, exit intent popup, email capture
- **Compliance:** FCA risk disclaimers, FSCS protection messaging, financial promotion notices
- **Tracking:** GA4 + GTM integration points, event queue for CTA clicks, form submissions, app install intent

## Build

```bash
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # ESLint
```

## Documentation

- [UX Rationale & User Journey](./UX-RATIONALE.md) – Target audience, conversion journey, animation strategy, wireframe
