"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { trackConversion } from "@/lib/analytics";

const screens = [
  { src: "/screenshots/onboarding.png", alt: "Onboarding screen" },
  { src: "/screenshots/portfolio.png", alt: "Portfolio home screen" },
  { src: "/screenshots/stock-details.png", alt: "Stock details screen" },
];

export default function AppShowcase() {
  return (
    <section className="relative py-20 sm:py-24 bg-black overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-brand-red/5 blur-[160px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center max-w-3xl mx-auto mb-4" trackName="app_showcase">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            4,000+ Stocks &amp; ETFs
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1} className="text-center max-w-2xl mx-auto mb-3">
          <p className="text-base text-white/50 leading-relaxed">
            Explore UK, US, and EEA stocks, fractional shares, and ETFs — from tech
            titans to global funds — and build a Stocks &amp; Shares ISA portfolio that
            aligns with you and your values.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.12} className="text-center mb-10">
          <p className="text-xs text-white/30">
            Asset performance displayed is for illustrative purposes only
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div className="relative flex items-end justify-center gap-3 sm:gap-5 lg:gap-8">
            {screens.map((screen, i) => {
              const isCenter = i === 1;
              return (
                <div
                  key={screen.alt}
                  className={`relative shrink-0 ${
                    isCenter
                      ? "w-[160px] sm:w-[200px] lg:w-[220px] z-10"
                      : "w-[130px] sm:w-[170px] lg:w-[190px] opacity-90"
                  }`}
                >
                  {isCenter && (
                    <div className="absolute -inset-6 rounded-full bg-brand-red/10 blur-[50px] pointer-events-none" />
                  )}
                  <div
                    className={`relative overflow-hidden border shadow-2xl ${
                      isCenter
                        ? "rounded-[20px] sm:rounded-[28px] border-white/15 shadow-brand-red/10"
                        : "rounded-[16px] sm:rounded-[24px] border-white/10 shadow-black/50"
                    }`}
                  >
                    <Image
                      src={screen.src}
                      alt={screen.alt}
                      width={isCenter ? 220 : 190}
                      height={isCenter ? 476 : 411}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.25} className="mt-10 text-center">
          <a
            href="#download"
            onClick={() => trackConversion("app_download")}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black shadow-xl transition-all hover:bg-white/90 hover:-translate-y-0.5 active:translate-y-0"
          >
            Get the App
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
