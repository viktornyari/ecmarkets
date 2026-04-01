"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";

const features = [
  {
    title: "App-Based Investing",
    description:
      "Open your ISA in minutes. Browse and invest in funds, ETFs, and shares — all from your phone. No paperwork, no hassle.",
    details: [
      "Open in under 5 minutes",
      "Fractional shares available",
      "Set up regular investments",
    ],
    image: "/features/feature-1.png",
    objectPosition: "center 30%",
    cardPos: "bottom-4 left-4 sm:bottom-5 sm:left-5",
    visual: (
      <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl p-3 sm:p-6 w-36 sm:w-52 z-10">
        <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
          <div className="h-7 w-7 sm:h-10 sm:w-10 rounded-full bg-brand-red-50 flex items-center justify-center shrink-0">
            <svg className="h-3.5 w-3.5 sm:h-5 sm:w-5 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
          </div>
          <div>
            <p className="text-[9px] sm:text-xs text-neutral-400">Quick Invest</p>
            <p className="text-xs sm:text-sm font-semibold text-black">£500</p>
          </div>
        </div>
        <div className="space-y-1 sm:space-y-2">
          <div className="h-1.5 sm:h-2 rounded-full bg-neutral-100 overflow-hidden">
            <div className="h-full w-3/4 rounded-full bg-brand-red" />
          </div>
          <p className="text-[8px] sm:text-[10px] text-neutral-400">Global Index Fund &bull; 75%</p>
        </div>
        <div className="mt-2 sm:mt-3 rounded-md sm:rounded-lg bg-black py-1.5 sm:py-2.5 text-center">
          <p className="text-[9px] sm:text-xs font-semibold text-white">Confirm Investment</p>
        </div>
      </div>
    ),
  },
  {
    title: "Real-Time Tracking",
    description:
      "Watch your money grow with live portfolio valuations, performance charts, and price alerts — updated to the second.",
    details: [
      "Live portfolio valuation",
      "Interactive performance charts",
      "Custom price alerts",
    ],
    image: "/features/feature-2.png",
    objectPosition: "center 20%",
    cardPos: "bottom-4 right-4 sm:bottom-5 sm:right-5",
    visual: (
      <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl p-3 sm:p-5 w-40 sm:w-56 z-10">
        <div className="flex justify-between items-center mb-2 sm:mb-3">
          <p className="text-xs sm:text-sm font-semibold text-black">Portfolio</p>
          <span className="text-[9px] sm:text-xs text-emerald-600 font-medium bg-emerald-50 px-1.5 py-0.5 rounded-full">Live</span>
        </div>
        <p className="text-lg sm:text-2xl font-bold text-black">£12,847</p>
        <p className="text-[10px] sm:text-xs text-emerald-600 font-medium">+11.1% all time</p>
        <div className="mt-2 sm:mt-4 h-12 sm:h-20">
          <svg viewBox="0 0 200 60" className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="featureGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgb(16, 185, 129)" stopOpacity="0.15" />
                <stop offset="100%" stopColor="rgb(16, 185, 129)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,50 C15,48 30,42 50,35 C70,28 85,30 105,22 C125,14 145,18 165,10 C180,5 190,8 200,3" fill="none" stroke="rgb(16, 185, 129)" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M0,50 C15,48 30,42 50,35 C70,28 85,30 105,22 C125,14 145,18 165,10 C180,5 190,8 200,3 L200,60 L0,60 Z" fill="url(#featureGradient)" />
          </svg>
        </div>
      </div>
    ),
  },
  {
    title: "Portfolio Insights",
    description:
      "Understand where your money is with detailed breakdowns by asset class, geography, sector, and risk level.",
    details: [
      "Asset allocation breakdown",
      "Sector & geography analysis",
      "Risk score assessment",
    ],
    image: "/features/feature-3.png",
    objectPosition: "center 25%",
    cardPos: "bottom-4 left-4 sm:bottom-5 sm:left-5",
    visual: (
      <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl p-3 sm:p-5 w-40 sm:w-56 z-10">
        <p className="text-xs sm:text-sm font-semibold text-black mb-2 sm:mb-4">Allocation</p>
        <div className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-4">
          <div className="relative h-14 w-14 sm:h-20 sm:w-20 shrink-0">
            <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
              <circle cx="18" cy="18" r="14" fill="none" stroke="#f5f5f5" strokeWidth="4" />
              <circle cx="18" cy="18" r="14" fill="none" stroke="#000000" strokeWidth="4" strokeDasharray="52 88" />
              <circle cx="18" cy="18" r="14" fill="none" stroke="#e33a32" strokeWidth="4" strokeDasharray="26 88" strokeDashoffset="-52" />
              <circle cx="18" cy="18" r="14" fill="none" stroke="#d4d4d4" strokeWidth="4" strokeDasharray="10 88" strokeDashoffset="-78" />
            </svg>
          </div>
          <div className="space-y-1 sm:space-y-1.5 text-[10px] sm:text-xs">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-black shrink-0" />
              <span className="text-neutral-600">Equities 60%</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-brand-red shrink-0" />
              <span className="text-neutral-600">Bonds 30%</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-neutral-300 shrink-0" />
              <span className="text-neutral-600">Cash 10%</span>
            </div>
          </div>
        </div>
        <div className="rounded-md sm:rounded-lg bg-neutral-50 border border-neutral-100 p-1.5 sm:p-2.5 text-center">
          <p className="text-[10px] sm:text-xs text-neutral-600 font-medium">Risk Level: Moderate</p>
        </div>
      </div>
    ),
  },
];

function CheckIcon() {
  return (
    <svg className="h-5 w-5 text-brand-red shrink-0" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
  );
}

export default function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 bg-neutral-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16" trackName="features">
          <span className="inline-block text-sm font-semibold text-brand-red tracking-wide uppercase mb-3">
            Product Features
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-tight">
            Powerful tools, beautifully simple
          </h2>
          <p className="mt-4 text-lg text-neutral-500 leading-relaxed">
            Our app puts professional-grade investment tools in your pocket, wrapped in an
            interface anyone can use.
          </p>
        </AnimatedSection>

        <div className="space-y-20">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              <AnimatedSection
                direction={i % 2 === 0 ? "left" : "right"}
                className={i % 2 === 1 ? "lg:order-2" : ""}
              >
                <span className="inline-block text-sm font-bold text-brand-red mb-2">
                  0{i + 1}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                  {feature.title}
                </h3>
                <p className="text-neutral-500 leading-relaxed mb-6">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-3 text-sm text-neutral-600">
                      <CheckIcon />
                      {detail}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>

              <AnimatedSection
                direction={i % 2 === 0 ? "right" : "left"}
                delay={0.15}
                className={i % 2 === 1 ? "lg:order-1" : ""}
              >
                <div className="relative h-80 sm:h-[420px] rounded-2xl overflow-hidden">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                    style={{ objectPosition: feature.objectPosition }}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                  <div className={`absolute z-10 ${feature.cardPos}`}>
                    {feature.visual}
                  </div>
                </div>
              </AnimatedSection>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
