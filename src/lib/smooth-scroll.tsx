"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { useReducedMotion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const LenisContext = createContext<Lenis | null>(null);

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const reduce = useReducedMotion();
  const pathname = usePathname();

  useEffect(() => {
    if (reduce) return;

    const instance = new Lenis({
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
    });
    setLenis(instance);
    instance.on("scroll", ScrollTrigger.update);

    let frame: number;
    const raf = (time: number) => {
      instance.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      instance.destroy();
      setLenis(null);
    };
  }, [reduce]);

  useEffect(() => {
    if (!lenis) return;
    lenis.scrollTo(0, { immediate: true });
    // The new page's content is in the DOM by now; recompute the scroll
    // limit straight away instead of waiting on the observer below.
    lenis.resize();
    const frame = requestAnimationFrame(() => lenis.resize());
    return () => cancelAnimationFrame(frame);
  }, [pathname, lenis]);

  // Lenis caches the page height as its scroll limit and only refreshes it
  // when its content element resizes. Its default content element is
  // <html>, which is `h-full` here — pinned to the viewport height — so it
  // never resizes: after a client-side navigation to a longer page (or once
  // lazy images grow it), the limit stays at the old height and scrolling
  // stops partway down until a reload. <body> (min-h-full) grows with the
  // content, so watch that instead.
  useEffect(() => {
    if (!lenis) return;
    const resizeObserver = new ResizeObserver(() => lenis.resize());
    resizeObserver.observe(document.body);
    return () => resizeObserver.disconnect();
  }, [lenis]);

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>;
}

export function useLenis() {
  return useContext(LenisContext);
}
