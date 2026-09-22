"use client";

// A single always-mounted overlay panel that sweeps up to cover the screen,
// swaps the route, then continues sweeping up and off to reveal the new page.
// Deliberately NOT built on framer-motion's <AnimatePresence> (see
// page-transition.tsx for why that class of approach crashed on route
// changes): this overlay never mounts/unmounts, it only animates its own
// transform, so it can never conflict with Next's own DOM patching.

import { createContext, useCallback, useContext, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion, useAnimation, useReducedMotion } from "framer-motion";
import { useLenis } from "@/lib/smooth-scroll";

type RouteTransitionContextValue = {
  navigate: (href: string) => void;
};

const RouteTransitionContext = createContext<RouteTransitionContextValue | null>(null);

const EASE = [0.76, 0, 0.24, 1] as const;

export function RouteTransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const lenis = useLenis();
  const controls = useAnimation();
  const reduce = useReducedMotion();
  const busyRef = useRef(false);

  const navigate = useCallback(
    async (href: string) => {
      if (busyRef.current) return;
      busyRef.current = true;

      if (reduce) {
        router.push(href);
        busyRef.current = false;
        return;
      }

      lenis?.stop();
      await controls.start({ y: "0%", transition: { duration: 0.6, ease: EASE } });
      router.push(href);
      await new Promise((resolve) => setTimeout(resolve, 280));
      await controls.start({ y: "-100%", transition: { duration: 0.6, ease: EASE } });
      controls.set({ y: "100%" });
      lenis?.start();
      busyRef.current = false;
    },
    [controls, lenis, reduce, router],
  );

  return (
    <RouteTransitionContext.Provider value={{ navigate }}>
      {children}
      <motion.div
        initial={{ y: "100%" }}
        animate={controls}
        className="pointer-events-none fixed inset-0 z-[90] bg-ink"
        aria-hidden="true"
      />
    </RouteTransitionContext.Provider>
  );
}

export function useRouteTransition() {
  const ctx = useContext(RouteTransitionContext);
  if (!ctx) {
    throw new Error("useRouteTransition must be used within RouteTransitionProvider");
  }
  return ctx.navigate;
}
