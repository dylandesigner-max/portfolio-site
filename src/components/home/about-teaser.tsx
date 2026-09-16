"use client";

import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
import { useLocale } from "@/lib/i18n/context";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ScrollTextReveal } from "@/components/ui/scroll-text-reveal";

export function AboutTeaser() {
  const { t } = useLocale();

  return (
    <section className="py-24 md:py-32">
      <Container>
        <div className="max-w-3xl">
          <Reveal>
            <h2 className="text-3xl font-semibold leading-[1.15] tracking-tight text-ink text-balance md:text-5xl">
              {t.about.headline}
            </h2>
          </Reveal>
          <ScrollTextReveal
            text={t.about.body}
            className="mt-6 max-w-[60ch] text-base leading-relaxed text-ink-faint md:text-xl"
          />
          <Reveal delay={0.18}>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
            >
              {t.about.ctaLabel}
              <IconArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
