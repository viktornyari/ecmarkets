"use client";

import { useEffect, useRef } from "react";

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
  displayMode: "adaptive",
  locale: "en_GB",
};

export default function TickerTape() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(max-width: 767px)").matches) return;

    const root = containerRef.current;
    if (!root) return;

    root.replaceChildren();

    const widget = document.createElement("div");
    widget.className = "tradingview-widget-container__widget";

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = EMBED_SRC;
    script.async = true;
    script.textContent = JSON.stringify(WIDGET_CONFIG);

    root.appendChild(widget);
    root.appendChild(script);

    return () => {
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
