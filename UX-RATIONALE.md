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
- Stocks & ETFs → clarifies the investable universe early ("what can I buy?")
- Features → explains key capabilities (hero imagery + floating UI cards)
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
   │  STOCKS & ETFs       │ ← "What can I buy?" (4,000+ universe)
   │  (Investment options)│   App screenshots in action
   └─────────┬───────────┘
             │
             ▼
   ┌─────────────────────┐
   │  FEATURES SECTION    │ ← Hero imagery + small floating UI cards
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
| Smooth scroll navigation | Quick access to key sections (incl. Stocks & ETFs) |
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

### Conversion Funnel Logic

The page is instrumented around a simple funnel:

1. **Awareness:** Hero + benefits + product story
2. **Intent:** CTA interactions and app-store click intent
3. **Lead capture:** Email signup completion
4. **Conversion proxy:** App install intent event (web-to-store handoff)

This separates engagement actions from final commercial outcomes and makes drop-off analysis clear.

### CTA Hierarchy (Primary vs Secondary)

- **Primary CTAs**
  - Download actions (`Download the App`, store buttons, sticky CTA, exit-intent CTA)
  - Lead capture submit (`Sign Up`)
- **Secondary CTAs**
  - `Learn More`
  - in-page navigation links

Primary actions are mapped to conversion-focused events; secondary actions are treated as assistive engagement.

### Basic Tracking Setup (Current State)

Implemented events:

| Event | Trigger | Properties |
|-------|---------|------------|
| `cta_click` | CTA clicks across the page | `conversion_type`, `page`, `funnel_step` |
| `form_submit` | Successful lead form submission | `form`, `email_domain` |
| `app_install_intent` | App Store / Google Play click | `platform` (`ios`/`android`) |
| `section_view` | Section enters viewport | `section_name` |
| `exit_intent` | Exit-intent modal trigger | `page` |

Runtime setup:
- **GA4 direct** via `gtag.js` (live)
- **dataLayer push** also emitted per event for GTM compatibility
- **Debug mode** available via `?ga_debug=1` (and localStorage flag) for DebugView validation

### Bonus: App Installs and Conversion Rate

#### App installs
- Current measurable web KPI is **`app_install_intent`** (store handoff intent).
- If true post-install confirmation is needed, connect mobile attribution tooling (AppsFlyer/Adjust/Firebase) and map confirmed installs back into GA4.

#### Conversion rate

Recommended formulas:

- **Install intent rate** = `app_install_intent / landing_sessions`
- **Email signup rate** = `form_submit / landing_sessions`
- **CTA-to-install intent rate** = `app_install_intent / cta_click (conversion_type=app_download)`

### Key Metrics to Monitor
1. **Install intent rate** (primary KPI)
2. **Email signup rate** (secondary KPI)
3. **CTA click-through rate** by placement (hero, comparison, sticky, exit)
4. **Funnel drop-off** (awareness → CTA click → install intent / form submit)
5. **Scroll depth** to key trust/conversion sections
6. **Bounce rate and engaged sessions** for traffic quality

---

## 8. Compliance & Trust UX

Financial promotions in the UK are governed by the FCA. This page incorporates:

1. **Risk warning prominence:** Dedicated footer section with capital-at-risk warning, ISA rules, FCA registration details, and financial promotion disclosure
2. **Balanced messaging:** Benefits are paired with appropriate caveats ("past performance is not a reliable indicator")
3. **No misleading performance claims:** Portfolio mockup uses illustrative figures with no guarantee language
4. **Clear product description:** ISA wrapper explained accurately (annual allowance, one-per-year rule)
5. **Regulatory identification:** FCA FRN visible in hero and footer; FSCS protection amounts stated
6. **Accessible disclaimer:** Risk section uses legible type in a visually distinct container (not hidden or diminished)
