"use client";

import { useLayoutEffect, useRef } from "react";

/**
 * Legacy thin ticker strip (official embed script).
 * Docs: https://www.tradingview.com/widget-docs/widgets/tickers/ticker-tape/
 */
const EMBED_SRC =
  "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";

const WIDGET_CONFIG = {
  symbols: [
    { proName: "NASDAQ:NVDA", title: "" },
    { proName: "NASDAQ:MSFT", title: "" },
    { proName: "NASDAQ:TSLA", title: "" },
    { proName: "NASDAQ:AMZN", title: "" },
    { proName: "NASDAQ:META", title: "" },
    { proName: "NASDAQ:GOOGL", title: "" },
    { proName: "NASDAQ:AAPL", title: "" },
  ],
  showSymbolLogo: true,
  colorTheme: "dark",
  isTransparent: true,
  /* "regular" avoids adaptive relayout that can reorder / swap symbols by width */
  displayMode: "regular",
  locale: "en_GB",
};

export default function TickerTape() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (window.matchMedia("(max-width: 767px)").matches) return;

    const root = containerRef.current;
    if (!root) return;

    let cancelled = false;
    let raf0 = 0;
    let raf1 = 0;

    function inject() {
      if (cancelled) return;
      const el = containerRef.current;
      if (!el) return;

      el.replaceChildren();

      const widget = document.createElement("div");
      widget.className = "tradingview-widget-container__widget";

      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = EMBED_SRC;
      script.textContent = JSON.stringify(WIDGET_CONFIG);

      el.appendChild(widget);
      el.appendChild(script);
    }

    /* Wait for layout + skip racing React Strict Mode’s mount→unmount→remount vs async TV script */
    raf0 = requestAnimationFrame(() => {
      raf1 = requestAnimationFrame(inject);
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf0);
      cancelAnimationFrame(raf1);
      root.replaceChildren();
    };
  }, []);

  return (
    <div className="relative w-full min-h-[40px] md:min-h-[46px]">
      <div
        ref={containerRef}
        className="tradingview-widget-container h-full w-full"
      />
      {/* Block pointer events to the iframe (cross-origin — can’t disable links inside). */}
      <div
        className="absolute inset-0 z-[5] cursor-default"
        aria-hidden
      />
      {/*
        TV branding sits inside a cross-origin iframe — no CSS hook.
        Fade both edges to match Hero (bg-black): right badge + cleaner tape crop.
      */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-black from-40% to-transparent md:w-[4.5rem]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-black from-40% to-transparent md:w-[4.5rem]"
        aria-hidden
      />
    </div>
  );
}
