"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import AnimatedSection from "./AnimatedSection";
import { trackEvent, trackConversion } from "@/lib/analytics";

export default function LeadCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        setLoading(false);
        return;
      }

      trackEvent("form_submit", { form: "lead_capture", email_domain: email.split("@")[1] });
      trackConversion("email_signup");
      setSubmitted(true);
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="get-started" className="relative min-h-[760px] sm:min-h-[700px] lg:min-h-[640px] overflow-hidden">
      <Image
        src="/lead-capture-bg.jpg"
        alt=""
        fill
        className="object-cover object-[95%_32%] sm:object-[72%_30%] lg:object-[58%_28%]"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/25 lg:to-black/20" />

      <div className="relative mx-auto max-w-7xl px-3 sm:px-6 lg:px-8 py-12 sm:py-24 lg:py-32 flex items-end lg:items-center min-h-[760px] sm:min-h-[700px] lg:min-h-[640px]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
          {/* Left: headline + form */}
          <AnimatedSection direction="left">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-1.5 text-sm font-medium text-white/70 mb-6 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red animate-pulse" />
              Use your ISA allowance before 5 April
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-[1.1] mb-4">
              Ready to invest
              <br />
              tax-free?
            </h2>
            <p className="text-white/60 leading-relaxed mb-8 max-w-md">
              Join thousands of investors using our Stocks &amp; Shares ISA. Get
              updates on new features and market insights — and invest up to
              £20,000 tax-free this year.
            </p>

            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="max-w-md"
                >
                  <div className="flex gap-3">
                    <div className="flex-1">
                      <label htmlFor="email" className="sr-only">Email address</label>
                      <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full rounded-full bg-white/10 border border-white/15 px-5 py-3.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-brand-red focus:border-transparent backdrop-blur-sm transition-all"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="shrink-0 rounded-full bg-brand-red px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-red/20 transition-all hover:bg-brand-red-700 hover:shadow-brand-red/30 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:pointer-events-none"
                    >
                      {loading ? (
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                      ) : (
                        "Sign Up"
                      )}
                    </button>
                  </div>
                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-3 text-sm text-red-400"
                    >
                      {error}
                    </motion.p>
                  )}
                  <label className="mt-3 flex items-start gap-2 text-xs text-white/30 cursor-pointer">
                    <input type="checkbox" required className="mt-0.5 accent-brand-red" />
                    <span>
                      I agree to receive marketing communications from EC Markets.
                      You can unsubscribe at any time.{" "}
                      <a href="https://www.ecmarkets.co.uk/legal" className="underline text-white/40 hover:text-white/60">Privacy Policy</a>
                    </span>
                  </label>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 max-w-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/20">
                    <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">You&apos;re on the list!</p>
                    <p className="text-xs text-white/50">We&apos;ll keep you updated with the latest features and insights.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </AnimatedSection>

          {/* Right: white UI card — ISA allowance tracker */}
          <AnimatedSection direction="right" delay={0.15} className="hidden lg:flex justify-center lg:justify-start lg:pl-4">
            <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-5 w-[13.5rem] sm:w-56 lg:w-64 max-w-[85vw]">
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <p className="text-xs sm:text-sm font-semibold text-black">ISA Allowance</p>
                <span className="text-[10px] sm:text-xs text-emerald-600 font-medium bg-emerald-50 px-1.5 py-0.5 rounded-full">2025/26</span>
              </div>
              <p className="text-2xl sm:text-3xl font-bold text-black">£15,000</p>
              <p className="text-[10px] sm:text-xs text-neutral-400 mt-0.5">of £20,000 used</p>
              <div className="mt-3 sm:mt-4 h-2 sm:h-2.5 rounded-full bg-neutral-100 overflow-hidden">
                <div className="h-full w-3/4 rounded-full bg-brand-red" />
              </div>
              <div className="mt-3 sm:mt-5 grid grid-cols-2 gap-2 sm:gap-3">
                <div className="rounded-lg sm:rounded-xl bg-neutral-50 border border-neutral-100 p-2 sm:p-3">
                  <p className="text-[9px] sm:text-[10px] text-neutral-400 mb-0.5">Tax saved</p>
                  <p className="text-xs sm:text-sm font-bold text-emerald-600">£1,284</p>
                </div>
                <div className="rounded-lg sm:rounded-xl bg-neutral-50 border border-neutral-100 p-2 sm:p-3">
                  <p className="text-[9px] sm:text-[10px] text-neutral-400 mb-0.5">Remaining</p>
                  <p className="text-xs sm:text-sm font-bold text-black">£5,000</p>
                </div>
              </div>
              <div className="mt-3 sm:mt-4 rounded-md sm:rounded-lg bg-black py-2 sm:py-2.5 text-center">
                <p className="text-[10px] sm:text-xs font-semibold text-white">Top Up ISA</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
