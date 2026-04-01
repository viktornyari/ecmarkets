"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { trackEvent } from "@/lib/analytics";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  trackName?: string;
}

const directionOffsets = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: 40 },
  right: { x: -40 },
  none: {},
};

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
  trackName,
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const prefersReduced = useReducedMotion();
  const tracked = useRef(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (isInView && trackName && !tracked.current) {
      tracked.current = true;
      trackEvent("section_view", { section_name: trackName });
    }
  }, [isInView, trackName]);

  const desktopMotion = !prefersReduced && !isMobile;
  const mobileLightMotion = !prefersReduced && isMobile;

  return (
    <motion.div
      ref={ref}
      initial={
        desktopMotion
          ? { opacity: 0, ...directionOffsets[direction] }
          : mobileLightMotion
            ? { opacity: 0 }
            : { opacity: 1 }
      }
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{
        duration: desktopMotion ? 0.5 : mobileLightMotion ? 0.2 : 0,
        delay: desktopMotion ? delay : mobileLightMotion ? Math.min(delay * 0.25, 0.08) : 0,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
