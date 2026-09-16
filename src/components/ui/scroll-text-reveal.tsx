"use client";

import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";
import { clsx } from "clsx";

gsap.registerPlugin(ScrollTrigger);

type Word = { text: string; bold: boolean };

function parseWords(source: string): Word[] {
  const segments = source.split("**");
  const words: Word[] = [];
  segments.forEach((segment, i) => {
    const bold = i % 2 === 1;
    segment
      .split(" ")
      .filter(Boolean)
      .forEach((w) => words.push({ text: w, bold }));
  });
  return words;
}

export function ScrollTextReveal({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const words = useMemo(() => parseWords(text), [text]);

  useEffect(() => {
    if (reduce || !ref.current) return;

    const ctx = gsap.context(() => {
      const spans = ref.current!.querySelectorAll("[data-word]");
      gsap.fromTo(
        spans,
        { opacity: 0.22 },
        {
          opacity: 1,
          stagger: 0.025,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            end: "bottom 60%",
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
    <p ref={ref} className={clsx(className)}>
      {words.map((word, i) => (
        <span
          key={i}
          data-word
          className={clsx(
            "mr-[0.28em] inline-block",
            word.bold ? "font-semibold text-ink" : undefined,
          )}
          style={reduce ? undefined : { opacity: 0.22 }}
        >
          {word.text}
        </span>
      ))}
    </p>
  );
}
