"use client";

import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

export function ScrollTextReveal({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const words = useMemo(() => text.split(" ").filter(Boolean), [text]);

  useEffect(() => {
    if (reduce || !ref.current) return;

    const ctx = gsap.context(() => {
      const spans = ref.current!.querySelectorAll("[data-word]");
      gsap.fromTo(
        spans,
        { opacity: 0.2 },
        {
          opacity: 1,
          stagger: 0.02,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 88%",
            end: "bottom 55%",
            scrub: true,
          },
        },
      );
    }, ref);

    const refresh = () => ScrollTrigger.refresh();
    if (document.readyState === "complete") {
      refresh();
    } else {
      window.addEventListener("load", refresh);
    }

    return () => {
      window.removeEventListener("load", refresh);
      ctx.revert();
    };
  }, [reduce]);

  return (
    <p ref={ref} className={cn(className)}>
      {words.map((word, i) => (
        <span
          key={i}
          data-word
          className="mr-[0.28em] inline-block"
          style={reduce ? undefined : { opacity: 0.2 }}
        >
          {word}
        </span>
      ))}
    </p>
  );
}
