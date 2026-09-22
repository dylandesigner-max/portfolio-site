"use client";

import { useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { useLocale } from "@/lib/i18n/context";
import { Container } from "@/components/ui/container";

gsap.registerPlugin(ScrollTrigger);

function splitToWords(text: string) {
  return text.split(" ").filter(Boolean);
}

function CharText({
  text,
  className,
  reduce,
}: {
  text: string;
  className?: string;
  reduce: boolean;
}) {
  const words = useMemo(() => splitToWords(text), [text]);
  return (
    <span className={className}>
      {words.map((word, wi) => (
        <span key={wi} className="mr-[0.22em] inline-block whitespace-nowrap">
          {word.split("").map((char, ci) => (
            <span
              key={ci}
              data-char
              className="inline-block"
              style={
                reduce
                  ? undefined
                  : { opacity: 0.08, filter: "blur(6px)", transform: "translateY(6px)" }
              }
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
}

export function AboutTeaser() {
  const { t } = useLocale();
  const reduce = useReducedMotion();
  // A tall wrapper + a CSS-sticky section replaces GSAP's `pin: true`.
  // `pin: true` reparents the section into a "pin-spacer" div it inserts
  // itself, which React doesn't know about; when this page unmounts on
  // client-side navigation, React tries to remove a node from a parent it no
  // longer actually has, throwing "Failed to execute 'removeChild'". Sticky
  // positioning achieves the same "stays in place while scrolling" effect
  // without GSAP ever touching the DOM structure, so React's tree stays
  // accurate and this crash can't happen.
  const wrapperRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const statRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const linkRef = useRef<HTMLDivElement>(null);

  const stats = t.homeTeaser.stats;

  useEffect(() => {
    if (reduce || !wrapperRef.current) return;

    const ctx = gsap.context(() => {
      const headlineChars = headlineRef.current!.querySelectorAll("[data-char]");
      const bodyChars = bodyRef.current!.querySelectorAll("[data-char]");
      const counters = stats.map(() => ({ value: 0 }));

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.4,
          invalidateOnRefresh: true,
        },
      });

      tl.to(
        headlineChars,
        { opacity: 1, filter: "blur(0px)", y: 0, stagger: 0.02, ease: "none", duration: 0.4 },
        0,
      ).to(
        bodyChars,
        { opacity: 1, filter: "blur(0px)", y: 0, stagger: 0.006, ease: "none", duration: 0.5 },
        0.2,
      );

      counters.forEach((counter, i) => {
        tl.to(
          counter,
          {
            value: stats[i].value,
            duration: 0.3,
            ease: "none",
            onUpdate: () => {
              const el = statRefs.current[i];
              if (el) el.textContent = Math.round(counter.value).toString();
            },
          },
          0.6 + i * 0.06,
        );
      });

      tl.to(linkRef.current, { opacity: 1, y: 0, duration: 0.2, ease: "none" }, 0.9);
    }, wrapperRef);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduce]);

  return (
    <div ref={wrapperRef} className="relative border-t border-line" style={reduce ? undefined : { height: "340vh" }}>
      <section
        ref={sectionRef}
        className={
          "flex flex-col items-center justify-center overflow-hidden py-24 text-center" +
          (reduce ? "" : " sticky top-0 min-h-[100dvh]")
        }
      >
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2
              ref={headlineRef}
              className="font-display text-3xl font-medium leading-[1.15] tracking-tight text-ink text-balance md:text-6xl"
            >
              <CharText text={t.homeTeaser.headline} reduce={!!reduce} />
            </h2>

            <p ref={bodyRef} className="mx-auto mt-8 max-w-[56ch] text-lg leading-relaxed text-ink-soft md:text-2xl">
              <CharText text={t.homeTeaser.miniBio} reduce={!!reduce} />
            </p>

            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-6 md:mt-20">
              {stats.map((stat, i) => (
                <div key={stat.label}>
                  <p className="font-display text-4xl font-medium tabular-nums text-ink md:text-6xl">
                    <span
                      ref={(el) => {
                        statRefs.current[i] = el;
                      }}
                    >
                      {reduce ? stat.value : 0}
                    </span>
                    {stat.suffix}
                  </p>
                  <p className="mt-2 text-xs text-ink-faint md:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

            <div
              ref={linkRef}
              className="mt-12"
              style={reduce ? undefined : { opacity: 0, transform: "translateY(12px)" }}
            >
              <Link
                href="/about"
                data-cursor-hover
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
              >
                {t.nav.about}
                <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
