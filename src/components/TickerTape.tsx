"use client";

import { useEffect, useRef } from "react";

const SYMBOLS = [
  { proName: "NASDAQ:NVDA", title: "NVIDIA" },
  { proName: "NASDAQ:MSFT", title: "Microsoft" },
  { proName: "NASDAQ:TSLA", title: "Tesla" },
  { proName: "NASDAQ:AMZN", title: "Amazon" },
  { proName: "NASDAQ:META", title: "Meta" },
  { proName: "NASDAQ:GOOGL", title: "Alphabet" },
  { proName: "NASDAQ:AAPL", title: "Apple" },
  { proName: "NASDAQ:MU", title: "Micron" },
  { proName: "NASDAQ:PLTR", title: "Palantir" },
];

export default function TickerTape() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const widgetDiv = document.createElement("div");
    widgetDiv.className = "tradingview-widget-container__widget";
    container.appendChild(widgetDiv);

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.async = true;
    script.textContent = JSON.stringify({
      symbols: SYMBOLS,
      showSymbolLogo: true,
      isTransparent: true,
      displayMode: "regular",
      colorTheme: "dark",
      locale: "en",
    });

    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="tradingview-widget-container w-full overflow-hidden"
    />
  );
}
