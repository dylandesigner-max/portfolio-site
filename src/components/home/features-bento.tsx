"use client";

import { MagnifyingGlass, SquaresFour, Stack, DeviceMobile } from "@phosphor-icons/react/dist/ssr";
import type { Icon } from "@phosphor-icons/react";
import { useLocale } from "@/lib/i18n/context";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { BentoGrid, BentoCard } from "@/components/ui/bento-grid";

const icons: Icon[] = [MagnifyingGlass, SquaresFour, Stack, DeviceMobile];

function IconBadge({ Icon: IconComp, inverted = false }: { Icon: Icon; inverted?: boolean }) {
  return (
    <span
      className={
        inverted
          ? "flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-bg"
          : "flex h-11 w-11 items-center justify-center rounded-xl bg-accent-wash text-accent"
      }
    >
      <IconComp size={22} weight="bold" aria-hidden="true" />
    </span>
  );
}

export function FeaturesBento() {
  const { t } = useLocale();
  const items = t.bento.items;

  return (
    <section className="border-t border-line py-24 md:py-32">
      <Container>
        <Reveal>
          <h2 className="mb-12 max-w-xl font-display text-3xl font-medium tracking-tight text-ink md:mb-16 md:text-5xl">
            {t.bento.headline}
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <BentoGrid>
            <BentoCard className="md:col-span-2 md:row-span-2">
              <div className="relative">
                <IconBadge Icon={icons[0]} inverted />
              </div>
              <div className="relative mt-16 md:mt-0">
                <h3 className="text-xl font-medium text-ink md:text-2xl">{items[0].title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-soft">{items[0].body}</p>
              </div>
            </BentoCard>

            <BentoCard className="md:col-span-2">
              <IconBadge Icon={icons[1]} />
              <div className="mt-6">
                <h3 className="text-lg font-medium text-ink">{items[1].title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-ink-soft">{items[1].body}</p>
              </div>
            </BentoCard>

            <BentoCard>
              <IconBadge Icon={icons[2]} />
              <div className="mt-6">
                <h3 className="text-lg font-medium text-ink">{items[2].title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{items[2].body}</p>
              </div>
            </BentoCard>

            <BentoCard>
              <IconBadge Icon={icons[3]} />
              <div className="mt-6">
                <h3 className="text-lg font-medium text-ink">{items[3].title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{items[3].body}</p>
              </div>
            </BentoCard>
          </BentoGrid>
        </Reveal>
      </Container>
    </section>
  );
}
