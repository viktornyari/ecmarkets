"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { trackEvent, trackConversion } from "@/lib/analytics";

export default function ExitIntent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let triggered = false;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !triggered) {
        triggered = true;
        trackEvent("exit_intent", { page: "isa_landing" });
        setVisible(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  if (!visible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        onClick={() => setVisible(false)}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl"
        >
          <button
            onClick={() => setVisible(false)}
            className="absolute top-4 right-4 h-8 w-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-400 hover:text-neutral-600 hover:bg-neutral-200 transition-colors"
            aria-label="Close"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="text-center">
            <div className="mx-auto mb-5">
              <Image
                src="/ec-logo.svg"
                alt="EC Markets"
                width={140}
                height={42}
                className="h-10 w-auto mx-auto"
              />
            </div>
            <h3 className="text-xl font-bold text-black mb-2">
              Don&apos;t miss out on tax-free investing
            </h3>
            <p className="text-sm text-neutral-500 mb-6 leading-relaxed">
              The ISA allowance resets on 5 April. Make the most of your £20,000
              tax-free allowance before it&apos;s too late.
            </p>
            <a
              href="#download"
              onClick={() => { trackConversion("app_download"); setVisible(false); }}
              className="inline-flex w-full items-center justify-center rounded-full bg-brand-red px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-red/20 transition-all hover:bg-brand-red-700"
            >
              Open Your ISA Now
            </a>
            <button
              onClick={() => setVisible(false)}
              className="mt-3 text-xs text-neutral-400 hover:text-neutral-600 transition-colors"
            >
              Maybe later
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
