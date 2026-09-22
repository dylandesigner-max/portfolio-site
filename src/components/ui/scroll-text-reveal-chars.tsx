"use client";

import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

function splitWords(text: string) {
  return text.split(" ").filter(Boolean);
}

export function ScrollTextRevealChars({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const words = useMemo(() => splitWords(text), [text]);

  useEffect(() => {
    if (reduce || !ref.current) return;

    const ctx = gsap.context(() => {
      const chars = ref.current!.querySelectorAll("[data-char]");
      gsap.fromTo(
        chars,
        { opacity: 0.12, y: 10, filter: "blur(6px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          stagger: 0.012,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            end: "bottom 50%",
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
      {words.map((word, wi) => (
        <span key={wi} className="mr-[0.25em] inline-block whitespace-nowrap">
          {word.split("").map((char, ci) => (
            <span
              key={ci}
              data-char
              className="inline-block"
              style={reduce ? undefined : { opacity: 0.12 }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </p>
  );
}
