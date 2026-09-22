"use client";

import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { useLocale } from "@/lib/i18n/context";
import { Container } from "@/components/ui/container";
import { Reveal, RevealGroup } from "@/components/ui/reveal";
import { BrandLogo } from "@/components/ui/brand-logo";
import { socialLinks } from "@/lib/social-links";

export function SocialCards() {
  const { t } = useLocale();

  return (
    <section className="border-t border-line py-24 md:py-32">
      <Container>
        <Reveal>
          <h2 className="max-w-xl font-display text-3xl font-medium tracking-tight text-ink md:text-5xl">
            {t.social.headline}
          </h2>
          <p className="mt-4 max-w-md text-base text-ink-soft">{t.social.subtext}</p>
        </Reveal>

        <RevealGroup
          className="mt-12 grid gap-5 md:mt-16 md:grid-cols-3 md:items-stretch"
          itemClassName="h-full"
          stagger={0.08}
          items={socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              data-cursor-hover
              className="group flex h-full flex-col justify-between rounded-card border border-line bg-bg-raised p-7 transition-colors duration-300 hover:border-ink md:p-8"
            >
              <div className="flex items-start justify-between">
                <BrandLogo slug={link.slug} source={link.source} className="h-8 w-8" />
                <ArrowUpRight
                  size={20}
                  weight="bold"
                  className="text-ink-faint transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent"
                  aria-hidden="true"
                />
              </div>
              <div className="mt-10">
                <h3 className="text-lg font-medium text-ink">{link.platform}</h3>
                <p className="mt-1 text-sm text-ink-soft">{link.handle}</p>
              </div>
            </a>
          ))}
        />
      </Container>
    </section>
  );
}
