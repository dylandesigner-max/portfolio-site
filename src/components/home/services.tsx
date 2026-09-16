"use client";

import {
  IconComponents,
  IconDeviceDesktop,
  IconTelescope,
} from "@tabler/icons-react";
import { useLocale } from "@/lib/i18n/context";
import { Container } from "@/components/ui/container";
import { RevealGroup } from "@/components/ui/reveal";

const icons = [IconTelescope, IconDeviceDesktop, IconComponents];

export function Services() {
  const { t } = useLocale();

  return (
    <section className="border-t border-line py-24 md:py-32">
      <Container>
        <h2 className="mb-12 max-w-xl text-3xl font-semibold tracking-tight text-ink md:mb-16 md:text-5xl">
          {t.services.headline}
        </h2>

        <RevealGroup
          className="grid gap-6 md:grid-cols-3"
          items={t.services.items.map((service, i) => {
            const Icon = icons[i];
            return (
              <div
                key={service.title}
                className="group relative overflow-visible rounded-md border border-line bg-bg-raised p-8 pt-10 transition-colors hover:border-ink/30"
              >
                <span className="absolute -top-5 -right-5 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-white shadow-[0_12px_24px_-8px_rgba(255,77,35,0.55)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-6">
                  <Icon size={24} strokeWidth={1.6} aria-hidden="true" />
                </span>
                <Icon
                  size={48}
                  strokeWidth={1}
                  className="text-ink-faint/50"
                  aria-hidden="true"
                />
                <h3 className="mt-6 text-lg font-semibold text-ink">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                  {service.body}
                </p>
              </div>
            );
          })}
        />
      </Container>
    </section>
  );
}
