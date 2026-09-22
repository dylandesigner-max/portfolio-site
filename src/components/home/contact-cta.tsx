"use client";

import Image from "next/image";
import { EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";
import { useLocale } from "@/lib/i18n/context";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "@/components/ui/brand-logo";
import { socialLinks } from "@/lib/social-links";

const EMAIL = "dylan.dsgner@gmail.com";

function ContactRow({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      data-cursor-hover
      className="group flex items-center gap-3"
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#111318] text-white transition-colors group-hover:bg-accent group-hover:text-accent-ink">
        {icon}
      </span>
      <span className="truncate text-sm text-ink-soft transition-colors group-hover:text-ink">{label}</span>
    </a>
  );
}

export function ContactCta() {
  const { t } = useLocale();

  return (
    <section className="border-t border-line py-24 md:py-32">
      <div className="mx-auto grid max-w-page grid-cols-1 gap-12 px-5 md:grid-cols-2 md:gap-16 md:px-10">
        <div className="flex flex-col">
          <Reveal>
            <h2 className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink text-balance md:text-6xl">
              {t.contactCta.headline}
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[46ch] text-base leading-relaxed text-ink-soft md:text-lg">
              {t.contactCta.body}
            </p>
          </Reveal>
          <Reveal delay={0.18} className="mt-10">
            <Button href="/about#contact" variant="primary">
              {t.contactCta.cta}
            </Button>
          </Reveal>

          <Reveal delay={0.26} className="mt-16 grid grid-cols-2 gap-x-6 gap-y-6">
            <ContactRow
              icon={<EnvelopeSimple size={17} weight="bold" aria-hidden="true" />}
              label={EMAIL}
              href={`mailto:${EMAIL}`}
            />
            {socialLinks.map((link) => (
              <ContactRow
                key={link.platform}
                icon={<BrandLogo slug={link.slug} source={link.source} tone="onDark" className="h-4 w-4" />}
                label={link.platform}
                href={link.href}
              />
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-card border border-line bg-bg-raised">
            <Image
              src="/dylan/dylan-cta.webp"
              alt="Dylan Xavier"
              fill
              quality={92}
              sizes="(min-width: 768px) 45vw, 100vw"
              className="object-cover object-top grayscale"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
