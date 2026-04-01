"use client";

import { useEffect, useRef, type ReactNode } from "react";
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

  useEffect(() => {
    if (isInView && trackName && !tracked.current) {
      tracked.current = true;
      trackEvent("section_view", { section_name: trackName });
    }
  }, [isInView, trackName]);

  return (
    <motion.div
      ref={ref}
      initial={prefersReduced ? { opacity: 0 } : { opacity: 0, ...directionOffsets[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{
        duration: prefersReduced ? 0.01 : 0.7,
        delay: prefersReduced ? 0 : delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
