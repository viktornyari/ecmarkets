# UX Rationale & User Journey

## EC Markets – Stocks & Shares ISA Landing Page

---

## 1. Target Audience

### Primary: First-time investors (25–40, UK)
- Digitally native, smartphone-first users
- Interested in saving and investing but overwhelmed by options
- Driven by tax efficiency, simplicity, and trust
- Likely comparing ISA providers (Vanguard, Hargreaves Lansdown, Nutmeg, Freetrade)

### Secondary: Experienced investors
- Already understand ISA wrappers and tax advantages
- Comparing fees, platform features, and execution quality
- Looking for a modern, responsive app experience alongside robust trading tools

---

## 2. Key User Intent

When visitors land on this page, they are typically:

1. **Researching ISA options** — "Should I open a Stocks & Shares ISA?"
2. **Comparing providers** — "How does EC Markets compare to [X]?"
3. **Ready to act** — "I want to invest tax-free before the April deadline"

The page addresses all three intents through a progressive disclosure model:
- Hero → immediate value proposition and credibility
- Benefits → answers "why an ISA?" and "why EC Markets?"
- Features → shows the product in action
- Comparison → side-by-side proof of tax advantage
- Social proof → builds confidence to commit
- Lead capture / CTA → converts interest into action

---

## 3. Conversion Journey

```
Visitor lands (ad, search, referral)
        │
        ▼
   ┌─────────────────────┐
   │  HERO SECTION        │ ← Immediate value prop, trust signals
   │  CTAs: Download App  │   (FCA regulated, £0 fee, FSCS)
   │        Learn More    │
   └─────────┬───────────┘
             │ (scroll / click "Learn More")
             ▼
   ┌─────────────────────┐
   │  BENEFITS SECTION    │ ← Tax-free, low fees, app, security
   └─────────┬───────────┘
             │
             ▼
   ┌─────────────────────┐
   │  FEATURES SECTION    │ ← Product in action (app mockups)
   └─────────┬───────────┘
             │
             ▼
   ┌─────────────────────┐
   │  COMPARISON TABLE    │ ← ISA vs GIA, concrete tax savings
   │  CTA: Open Your ISA  │
   └─────────┬───────────┘
             │
             ▼
   ┌─────────────────────┐
   │  SOCIAL PROOF        │ ← Testimonials, ratings, trust badges
   └─────────┬───────────┘
             │
             ▼
   ┌─────────────────────┐
   │  LEAD CAPTURE        │ ← Email signup (lower commitment)
   └─────────┬───────────┘
             │
             ▼
   ┌─────────────────────┐
   │  DOWNLOAD CTA        │ ← App Store / Google Play (primary goal)
   └─────────────────────┘
```

**Two conversion paths:**
- **High intent:** Hero CTA → Direct app download
- **Nurture path:** Scroll through page → Email signup → App download

---

## 4. Page Structure Rationale

### Building Trust

| Technique | Location | Purpose |
|-----------|----------|---------|
| FCA registration number | Hero, Footer | Regulatory credibility |
| FSCS protection badge | Hero, Trust section | Financial safety assurance |
| Star ratings & review count | Social proof | Third-party validation |
| Security badges (encryption, ISO) | Trust section | Technical credibility |
| Detailed risk disclaimer | Footer | Compliance + transparency |

### Reducing Friction

| Technique | Implementation |
|-----------|---------------|
| Short email form (1 field) | Lead capture — minimal commitment |
| App store buttons | One-tap install path |
| Sticky mobile CTA | Always-visible action on mobile |
| Smooth scroll navigation | Quick access to any section |
| Progressive disclosure | Information complexity increases as user scrolls |

### Driving Action

| Technique | Implementation |
|-----------|---------------|
| Dual CTA hierarchy | Primary (Download App) + Secondary (Learn More) |
| ISA deadline urgency | "Before 5 April" messaging |
| Repeated CTAs | Header, comparison section, lead capture, download section, sticky bar |
| Exit intent popup | Captures abandoning visitors with deadline urgency |
| Social proof momentum | Stats (15,000+ ISAs, £250M+) create bandwagon effect |

---

## 5. Animation & Interaction Strategy

Inspired by **Stripe** (gradient transitions), **Revolut** (product-focused motion), and **Square** (minimal interactions):

| Animation | Purpose | Implementation |
|-----------|---------|---------------|
| Hero fade/slide entrance | First impression, draws eye to CTA | Framer Motion staggered animation |
| Scroll-triggered reveals | Maintains engagement, guides attention | InView-based fade + translate |
| Card hover lift + shadow | Interaction feedback, explorability | CSS transition (translate-y, shadow) |
| Benefit icon color swap | Delight, indicates interactivity | CSS group-hover transition |
| CTA hover elevation | Button affordance, micro-feedback | CSS translate-y + shadow increase |
| Phone mockup float-in | Hero visual anchor, product showcase | Framer Motion spring |
| Exit intent modal | Last-chance conversion | Mouse leave detection + spring modal |
| Sticky CTA slide-up | Mobile persistent action | Framer Motion spring on scroll threshold |
| Form success animation | Completion feedback | AnimatePresence crossfade |

All animations use `ease: [0.25, 0.4, 0.25, 1]` (custom bezier) for natural, Stripe-like motion. `once: true` on scroll triggers prevents replay distraction.

---

## 6. Performance Considerations

- **Static generation (SSG):** Page is pre-rendered at build time — no server round-trips
- **Font optimization:** `next/font` with `display: swap` prevents layout shift
- **Zero external JS dependencies** beyond React and Framer Motion
- **No images:** All visuals are SVG/CSS — zero image network requests
- **Tailwind CSS purging:** Only used classes ship to production
- **Semantic HTML:** `<section>`, `<nav>`, `<main>`, `<header>`, `<footer>` for SEO + accessibility
- **Passive scroll listeners:** `{ passive: true }` on all scroll handlers
- **Client component boundaries:** Only interactive components are marked `"use client"`

---

## 7. Tracking & Conversion Measurement

### Implemented Events

| Event | Trigger | Properties |
|-------|---------|------------|
| `cta_click` | Any CTA button click | `conversion_type`, `page`, `funnel_step` |
| `form_submit` | Email form submission | `form`, `email_domain` |
| `app_install_intent` | App store button click | `platform` (ios/android) |
| `section_view` | Section enters viewport | `section_name` |
| `exit_intent` | Mouse leaves viewport | `page` |

### Recommended Tracking Stack
- **Google Analytics 4** (GA4) via `gtag.js` — event-based, pre-wired
- **Google Tag Manager** — dataLayer push on every event
- **Adjust / AppsFlyer** — deep-link app install attribution
- **Hotjar / FullStory** — session recordings for UX insights

### Key Metrics to Monitor
1. **Conversion rate:** Visitors → App downloads (primary)
2. **Email capture rate:** Visitors → Email signups (secondary)
3. **CTA click-through rate:** By position (hero, comparison, sticky, exit)
4. **Scroll depth:** % reaching comparison table, social proof, download section
5. **Bounce rate:** First-time visitor engagement
6. **Time on page:** Engagement quality signal

---

## 8. Compliance & Trust UX

Financial promotions in the UK are governed by the FCA. This page incorporates:

1. **Risk warning prominence:** Dedicated footer section with capital-at-risk warning, ISA rules, FCA registration details, and financial promotion disclosure
2. **Balanced messaging:** Benefits are paired with appropriate caveats ("past performance is not a reliable indicator")
3. **No misleading performance claims:** Portfolio mockup uses illustrative figures with no guarantee language
4. **Clear product description:** ISA wrapper explained accurately (annual allowance, one-per-year rule)
5. **Regulatory identification:** FCA FRN visible in hero and footer; FSCS protection amounts stated
6. **Accessible disclaimer:** Risk section uses legible type in a visually distinct container (not hidden or diminished)
