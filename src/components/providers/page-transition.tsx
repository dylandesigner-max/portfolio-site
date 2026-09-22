"use client";

// Deliberately not using framer-motion's <AnimatePresence> here. Wrapping
// Next.js App Router's {children} in AnimatePresence's exit-mode races with
// Next's own RSC DOM patching during navigation: framer-motion measures and
// holds the outgoing tree to animate its exit, and if Next swaps the subtree
// underneath it first, React ends up trying to removeChild a node from a
// parent it no longer has ("Failed to execute 'removeChild'"), crashing the
// whole page on every route change. A plain motion.div keyed by pathname
// still gets a fresh mount (and its initial->animate entrance) on every
// navigation, without any exit-tracking machinery to conflict with.

import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();

  return (
    <motion.div
      key={pathname}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
    >
      {children}
    </motion.div>
  );
}
