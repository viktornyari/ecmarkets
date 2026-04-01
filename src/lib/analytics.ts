type EventName =
  | "cta_click"
  | "form_submit"
  | "app_install_intent"
  | "section_view"
  | "exit_intent";

interface AnalyticsEvent {
  event: EventName;
  properties?: Record<string, string | number | boolean>;
  timestamp: number;
}

const eventQueue: AnalyticsEvent[] = [];

export function trackEvent(
  event: EventName,
  properties?: Record<string, string | number | boolean>
) {
  const analyticsEvent: AnalyticsEvent = {
    event,
    properties,
    timestamp: Date.now(),
  };

  eventQueue.push(analyticsEvent);

  if (typeof window !== "undefined") {
    console.log(`[Analytics] ${event}`, properties);
    const debugEnabled =
      window.location.search.includes("ga_debug=1") ||
      window.localStorage.getItem("ga_debug") === "1";

    const gaPayload: Record<string, string | number | boolean> = {
      ...(properties || {}),
      // Helps surface events in GA4 DebugView while troubleshooting.
      ...(debugEnabled ? { debug_mode: true } : {}),
    };

    // Google Analytics 4 integration point
    if ("gtag" in window) {
      const gtag = (window as Record<string, (...args: unknown[]) => void>).gtag;
      gtag?.("event", event, gaPayload);
    }

    // DataLayer push for GTM
    const w = window as unknown as Record<string, unknown[]>;
    if (w.dataLayer) {
      w.dataLayer.push({ event, ...gaPayload });
    }
  }
}

export function getEventQueue() {
  return [...eventQueue];
}

export function trackConversion(type: "app_download" | "email_signup" | "learn_more") {
  trackEvent("cta_click", {
    conversion_type: type,
    page: "isa_landing",
    funnel_step:
      type === "app_download" ? "bottom" : type === "email_signup" ? "capture" : "mid",
  });
}
