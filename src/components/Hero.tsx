"use client";

import { useState, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { trackConversion } from "@/lib/analytics";
import TickerTape from "./TickerTape";

function useLgViewport() {
  const [lg, setLg] = useState(false);
  useLayoutEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () => setLg(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  return lg;
}

export default function Hero() {
  const [entered, setEntered] = useState(false);
  const showPhone = useLgViewport();
  return (
    <section className="relative flex flex-col overflow-hidden bg-[#0a0a0c]">
      {/* Ambient mesh: deep burgundy left (copy), navy / indigo right (phone side) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-48 -left-40 h-[min(520px,90vw)] w-[min(520px,90vw)] rounded-full bg-[#6b1420]/45 blur-[140px]" />
        <div className="absolute top-[18%] -left-16 h-[400px] w-[400px] rounded-full bg-brand-red/25 blur-[130px]" />
        <div className="absolute -bottom-36 left-[5%] h-[340px] w-[340px] rounded-full bg-[#4a0f18]/35 blur-[110px]" />
        <div className="absolute -top-32 -right-28 h-[min(500px,85vw)] w-[min(500px,85vw)] rounded-full bg-[#152a4a]/55 blur-[130px]" />
        <div className="absolute top-[30%] -right-10 h-[380px] w-[380px] rounded-full bg-brand-blue-900/35 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[8%] h-[320px] w-[320px] rounded-full bg-[#1a2d4d]/40 blur-[100px]" />
      </div>

      {/* Fine grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative flex-1 flex items-center mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 pt-28 pb-12 md:pt-36 md:pb-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-sm font-medium text-white/70 mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-red animate-pulse" />
                ISA allowance 2025/26: £20,000
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05, ease: [0.25, 0.4, 0.25, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight"
            >
              Invest tax-free
              <br />
              with a{" "}
              <span className="text-brand-red">
                Stocks &amp; Shares ISA
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
              className="mt-6 text-lg sm:text-xl text-white/50 leading-relaxed max-w-xl"
            >
              Grow your wealth without paying tax on gains or dividends. Low fees,
              real-time tracking, and a powerful app — all backed by FCA regulation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#download"
                onClick={() => trackConversion("app_download")}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-8 py-4 text-base font-semibold text-white shadow-xl shadow-brand-red/20 transition-all hover:bg-brand-red-700 hover:shadow-brand-red/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                <svg
                  className="h-5 w-5 transition-transform group-hover:scale-110"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download the App
              </a>
              <a
                href="#features"
                onClick={() => trackConversion("learn_more")}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-8 py-4 text-base font-semibold text-white shadow-xl shadow-brand-blue/20 transition-all hover:bg-brand-blue-700 hover:shadow-brand-blue/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                Learn More
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-10 flex items-center gap-1.5 sm:gap-3 text-[10px] sm:text-sm"
            >
              {["FCA Regulated", "£0 Platform Fee", "FSCS Protected"].map((label, i) => (
                <span key={label} className="contents">
                  <span className="inline-flex items-center gap-1 sm:gap-1.5 whitespace-nowrap rounded-full bg-white/5 border border-white/10 px-2 py-1 sm:px-3 sm:py-1.5 text-white/50">
                    <svg className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-emerald-400 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {label}
                  </span>
                  {i < 2 && <span className="hidden sm:inline text-white/10">|</span>}
                </span>
              ))}
            </motion.div>
          </div>

          {/* lg+ column shell keeps grid stable; image only mounts at lg+ so mobile skips fetch/decode */}
          <div className="relative hidden lg:flex justify-center min-h-[min(520px,55vh)]">
            {showPhone ? (
              <motion.div
                initial={{ opacity: 0, y: 60, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                onAnimationComplete={() => setEntered(true)}
                className="relative w-[420px]"
              >
                <motion.div
                  animate={entered ? { y: [0, -10, 0] } : {}}
                  transition={entered ? { duration: 3, repeat: Infinity, ease: "easeInOut" } : {}}
                >
                  <Image
                    src="/hero-phone.webp"
                    alt="EC Markets app showing portfolio"
                    width={1000}
                    height={1239}
                    sizes="420px"
                    className="relative w-full h-auto drop-shadow-2xl"
                    priority
                  />
                </motion.div>
              </motion.div>
            ) : null}
          </div>
        </div>
      </div>

      {/* Ticker tape — above the fold */}
      <div className="relative border-t border-white/5 hidden md:block">
        <TickerTape />
      </div>
    </section>
  );
}
