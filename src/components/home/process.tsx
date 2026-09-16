"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "motion/react";
import { useLocale } from "@/lib/i18n/context";
import { Container } from "@/components/ui/container";

gsap.registerPlugin(ScrollTrigger);

const accentByIndex = [
  "text-accent",
  "text-ink",
  "text-ink",
  "text-ink",
  "text-ink",
];

export function Process() {
  const { t } = useLocale();
  const wrapRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const steps = t.process.steps;

  useEffect(() => {
    if (reduce || !wrapRef.current) return;

    const ctx = gsap.context(() => {
      const cardEls = gsap.utils.toArray<HTMLElement>(".process-card");

      cardEls.forEach((card, i) => {
        if (i === cardEls.length - 1) return;

        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          endTrigger: cardEls[cardEls.length - 1],
          end: "top top",
          pin: true,
          pinSpacing: false,
        });

        gsap.to(card, {
          scale: 0.94,
          opacity: 0.45,
          ease: "none",
          scrollTrigger: {
            trigger: cardEls[i + 1],
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        });
      });
    }, wrapRef);

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
    <section className="border-t border-line" aria-label={t.process.headline}>
      <Container className="py-16 md:py-24">
        <h2 className="max-w-2xl text-3xl font-semibold leading-[1.15] tracking-tight text-ink text-balance md:text-5xl">
          {t.process.headline}
        </h2>
      </Container>

      <div ref={wrapRef} className="relative">
        {steps.map((step, i) => (
          <div
            key={step.number}
            className="process-card sticky top-0 flex min-h-[100dvh] items-center border-t border-line bg-bg"
          >
            <Container>
              <div className="grid gap-6 md:grid-cols-[auto_1fr] md:items-center md:gap-16">
                <span
                  className={`font-mono text-7xl font-semibold tabular-nums md:text-9xl ${accentByIndex[i]}`}
                >
                  {step.number}
                </span>
                <div className="max-w-xl">
                  <h3 className="text-2xl font-semibold tracking-tight text-ink md:text-4xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-ink-soft md:text-lg">
                    {step.body}
                  </p>
                </div>
              </div>
            </Container>
          </div>
        ))}
      </div>
    </section>
  );
}
