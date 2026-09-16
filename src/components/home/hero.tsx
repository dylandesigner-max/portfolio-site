"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { IconArrowUpRight } from "@tabler/icons-react";
import { useLocale } from "@/lib/i18n/context";
import { Container } from "@/components/ui/container";

export function Hero() {
  const { t } = useLocale();
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="hero-gradient relative isolate flex min-h-[100dvh] flex-col justify-center overflow-hidden pt-16"
    >
      <Container className="py-16 md:py-24">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 text-xs font-semibold uppercase tracking-[0.16em] text-white/50"
        >
          {t.hero.eyebrow}
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
          className="hero-glow-text max-w-4xl text-[3rem] font-semibold leading-[1.02] tracking-tighter text-balance sm:text-7xl md:text-8xl lg:text-9xl"
        >
          {t.hero.headlineA}{" "}
          <span className="italic leading-[1.1] pb-1 inline-block">
            {t.hero.headlineEmphasis}
          </span>
          .
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 max-w-[42ch] text-base leading-relaxed text-white/65 md:text-lg"
        >
          {t.hero.subtext}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 rounded-pill bg-white px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-px active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            {t.hero.ctaPrimary}
            <IconArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
          </Link>
          <Link
            href="/about#contact"
            className="inline-flex items-center gap-1.5 rounded-pill border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            {t.hero.ctaSecondary}
          </Link>
        </motion.div>
      </Container>
    </section>
  );
}
