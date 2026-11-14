"use client";

import { useRef, type ReactNode } from "react";
import { cubicBezier, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

// easeOutCubic — gentle enough for a scroll-scrubbed value (a strong UI
// ease-out would finish almost all of the motion in the first few pixels).
const settle = cubicBezier(0.33, 1, 0.68, 1);

/**
 * Scroll-linked card reveal. Progress is tied to the card's position in the
 * viewport, not to a timer, so it is fully reversible: cards rise in as they
 * scroll up into view and sink back out as they leave through the bottom
 * (i.e. when the reader scrolls back up). It only moves while the reader is
 * scrolling, and a card is fully settled by the time it reaches ~3/4 of the
 * viewport — so nothing animates under the reader's eyes while reading.
 *
 * `index` staggers cards that share a row by finishing each one slightly
 * later. Reduced motion keeps the fade and drops the movement.
 */
export function ScrollCard({
  children,
  index = 0,
  className,
}: {
  children: ReactNode;
  index?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const end = 0.8 - (index % 3) * 0.06;
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 1.02", `start ${end}`] });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const transform = useTransform(scrollYProgress, (p) => {
    if (reduce) return "none";
    const e = settle(Math.min(Math.max(p, 0), 1));
    return `translateY(${((1 - e) * 64).toFixed(2)}px) scale(${(0.94 + e * 0.06).toFixed(4)})`;
  });

  return (
    <motion.div ref={ref} style={{ opacity, transform }} className={cn("h-full", className)}>
      {children}
    </motion.div>
  );
}
