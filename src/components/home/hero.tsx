"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { useLocale } from "@/lib/i18n/context";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { InteractiveGrid } from "./interactive-grid";

const wordVariants = {
  hidden: { opacity: 0, y: "100%" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.25 + i * 0.045, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

function Words({
  text,
  startIndex,
  reduce,
  className,
}: {
  text: string;
  startIndex: number;
  reduce: boolean;
  className?: string;
}) {
  return (
    <>
      {text.split(" ").map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.14em] align-bottom">
          <motion.span
            className={`inline-block ${className ?? ""}`}
            custom={startIndex + i}
            initial={reduce ? false : "hidden"}
            animate="visible"
            variants={wordVariants}
          >
            {word}&nbsp;
          </motion.span>
        </span>
      ))}
    </>
  );
}

export function Hero() {
  const { t } = useLocale();
  const reduce = !!useReducedMotion();
  const introWords = t.hero.titleA.split(" ").length;

  return (
    <section
      id="top"
      className="relative isolate flex h-[760px] flex-col overflow-hidden pt-24 md:h-[860px]"
    >
      <InteractiveGrid />
      <div
        className="pointer-events-none absolute inset-0 z-[1] bg-bg opacity-70 md:hidden"
        aria-hidden="true"
      />

      <Container className="relative z-10 flex flex-1 flex-col justify-between pb-12 md:pb-16">
        <div>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative mb-6 aspect-square w-20 overflow-hidden rounded-card border border-line bg-bg-raised md:mb-8 md:w-24"
          >
            <Image
              src="/dylan/dylan-hero.webp"
              alt="Dylan Xavier"
              fill
              priority
              sizes="96px"
              className="object-cover object-top"
            />
          </motion.div>

          <h1 className="max-w-4xl font-display text-3xl font-medium leading-[1.1] tracking-tight text-ink sm:text-4xl md:text-5xl">
            <Words text={t.hero.titleA} startIndex={0} reduce={reduce} />
            <Words
              text={t.hero.titleEmphasis}
              startIndex={introWords}
              reduce={reduce}
              className="italic text-accent"
            />
          </h1>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-[38ch] text-base leading-relaxed text-ink-soft md:text-lg"
          >
            {t.hero.subtext}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button href="/projects" variant="primary">
              {t.hero.ctaPrimary}
            </Button>
            <Button href="/about#contact" variant="outline">
              {t.hero.ctaSecondary}
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
