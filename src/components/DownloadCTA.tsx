"use client";

import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { trackConversion, trackEvent } from "@/lib/analytics";

export default function DownloadCTA() {
  return (
    <section
      id="download"
      className="relative min-h-[760px] sm:min-h-[700px] lg:min-h-[640px] overflow-hidden"
    >
      <Image
        src="/download-cta-bg-v2.jpg"
        alt=""
        fill
        className="object-cover"
        style={{ objectPosition: "center 45%" }}
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />

      <div className="relative mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-12 sm:py-24 lg:py-32 flex items-end sm:items-center min-h-[760px] sm:min-h-[700px] lg:min-h-[640px]">
        <AnimatedSection>
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.1]">
              Start investing
              <br />
              tax-free today
            </h2>
            <p className="mt-4 text-lg text-white/60 leading-relaxed max-w-md">
              Download the EC Markets app and open your Stocks &amp; Shares ISA in
              minutes. Available on iOS and Android.
            </p>

            <div className="mt-10 flex flex-row gap-3 sm:gap-4">
              <a
                href="https://apps.apple.com/gb/app/ec-markets-trading/id6444405587"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackConversion("app_download");
                  trackEvent("app_install_intent", { platform: "ios" });
                }}
                className="group inline-flex items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl bg-white px-4 py-3 sm:px-7 sm:py-4 text-black transition-all hover:bg-white/90 hover:-translate-y-1 hover:shadow-xl"
              >
                <svg className="h-6 w-6 sm:h-8 sm:w-8 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <p className="text-[9px] sm:text-[10px] leading-none text-black/50">Download on the</p>
                  <p className="text-sm sm:text-lg font-semibold leading-tight">App Store</p>
                </div>
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=info.ecmarkets.app"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackConversion("app_download");
                  trackEvent("app_install_intent", { platform: "android" });
                }}
                className="group inline-flex items-center gap-2 sm:gap-3 rounded-xl sm:rounded-2xl bg-white/10 backdrop-blur-sm border border-white/15 px-4 py-3 sm:px-7 sm:py-4 text-white transition-all hover:bg-white/20 hover:-translate-y-1 hover:shadow-xl"
              >
                <svg className="h-6 w-6 sm:h-8 sm:w-8 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.3 2.3-8.636-8.632z" />
                </svg>
                <div className="text-left">
                  <p className="text-[9px] sm:text-[10px] leading-none text-white/50">Get it on</p>
                  <p className="text-sm sm:text-lg font-semibold leading-tight">Google Play</p>
                </div>
              </a>
            </div>

            <p className="mt-8 text-xs text-white/30">
              Requires iOS 15+ or Android 10+. Free to download. Capital at risk.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
