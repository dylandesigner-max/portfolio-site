"use client";

import { useLocale } from "@/lib/i18n/context";
import { Container } from "@/components/ui/container";
import { RevealGroup } from "@/components/ui/reveal";

export function Stats() {
  const { t } = useLocale();

  return (
    <section className="border-y border-line">
      <Container>
        <RevealGroup
          items={t.stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-mono text-3xl font-semibold tabular-nums text-ink md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-ink-soft md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
          className="grid grid-cols-2 gap-8 py-10 md:grid-cols-4 md:py-14"
          stagger={0.08}
        />
      </Container>
    </section>
  );
}
