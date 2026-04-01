"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { trackConversion } from "@/lib/analytics";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <a href="https://www.ecmarkets.co.uk" className="flex items-center">
            <Image
              src={scrolled ? "/ec-logo.svg" : "/ec-logo-white.svg"}
              alt="EC Markets"
              width={120}
              height={36}
              priority
              className="h-8 w-auto transition-opacity duration-300"
            />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {[
              { label: "Benefits", href: "#benefits" },
              { label: "Features", href: "#features" },
              { label: "Compare", href: "#compare" },
              { label: "Reviews", href: "#reviews" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-300 ${
                  scrolled
                    ? "text-slate-600 hover:text-brand-red"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#download"
              onClick={() => trackConversion("app_download")}
              className="rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-red/25 transition-all hover:bg-brand-red-700 hover:shadow-brand-red/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              Download App
            </a>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative z-50 h-10 w-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-6 transition-all duration-300 ${
                  mobileOpen
                    ? "rotate-45 translate-y-2 bg-slate-900"
                    : scrolled
                      ? "bg-slate-900"
                      : "bg-white"
                }`}
              />
              <span
                className={`block h-0.5 w-6 transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : scrolled ? "bg-slate-900" : "bg-white"
                }`}
              />
              <span
                className={`block h-0.5 w-6 transition-all duration-300 ${
                  mobileOpen
                    ? "-rotate-45 -translate-y-2 bg-slate-900"
                    : scrolled
                      ? "bg-slate-900"
                      : "bg-white"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-1">
              {[
                { label: "Benefits", href: "#benefits" },
                { label: "Features", href: "#features" },
                { label: "Compare", href: "#compare" },
                { label: "Reviews", href: "#reviews" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#download"
                onClick={() => {
                  trackConversion("app_download");
                  setMobileOpen(false);
                }}
                className="mt-2 rounded-full bg-brand-red px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Download App
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
