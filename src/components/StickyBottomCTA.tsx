"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { trackConversion } from "@/lib/analytics";

export default function StickyBottomCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
        >
          <div className="bg-white/95 backdrop-blur-lg border-t border-slate-200 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
            <div className="flex items-center gap-3">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-slate-900 truncate">
                  Stocks & Shares ISA
                </p>
                <p className="text-xs text-slate-500">
                  Invest tax-free. £0 platform fee.
                </p>
              </div>
              <a
                href="#download"
                onClick={() => trackConversion("app_download")}
                className="shrink-0 rounded-full bg-brand-red px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-red/25"
              >
                Get the App
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
