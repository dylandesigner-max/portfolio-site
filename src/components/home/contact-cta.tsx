"use client";

import Link from "next/link";
import { IconArrowUpRight } from "@tabler/icons-react";
import { useLocale } from "@/lib/i18n/context";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

export function ContactCta() {
  const { t } = useLocale();

  return (
    <section className="bg-ink py-24 text-bg md:py-32">
      <Container>
        <div className="max-w-2xl">
          <Reveal>
            <h2 className="text-3xl font-semibold leading-[1.15] tracking-tight text-balance md:text-5xl">
              {t.contactCta.headline}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[55ch] text-base leading-relaxed text-bg/70 md:text-lg">
              {t.contactCta.body}
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <Link
              href="/about#contact"
              className="mt-10 inline-flex items-center gap-1.5 rounded-pill bg-bg px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:-translate-y-px active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              {t.contactCta.ctaLabel}
              <IconArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
