"use client";

import Image from "next/image";
import { ArrowUpRight, EnvelopeSimple, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { useLocale } from "@/lib/i18n/context";
import { Container } from "@/components/ui/container";
import { Reveal, RevealGroup } from "@/components/ui/reveal";
import { BrandLogo } from "@/components/ui/brand-logo";
import { tools } from "@/lib/tools";

const EMAIL = "dylan.dsgner@gmail.com";
const WHATSAPP_HREF = "https://wa.me/5511977555253";

export default function AboutPage() {
  const { t } = useLocale();
  const page = t.aboutPage;

  return (
    <div className="pt-24 md:pt-28">
      <Container className="py-12 md:py-16">
        <h1 className="max-w-3xl font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink text-balance md:text-6xl">
          {page.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">{page.intro}</p>
      </Container>

      <Container>
        <Reveal>
          <div className="relative aspect-[16/9] overflow-hidden rounded-card border border-line bg-bg-raised md:aspect-[21/9]">
            <Image
              src="/dylan/dylan-1.png"
              alt="Dylan Xavier"
              fill
              sizes="100vw"
              priority
              className="object-cover object-top"
            />
          </div>
        </Reveal>
      </Container>

      <Container className="grid gap-10 py-12 md:grid-cols-[1fr_1.4fr] md:gap-16 md:py-16">
        <Reveal>
          <div className="md:sticky md:top-24">
            <h2 className="font-mono text-sm uppercase tracking-[0.1em] text-ink-faint">{page.bioTitle}</h2>
            <div className="relative mt-6 aspect-[4/5] w-full max-w-xs overflow-hidden rounded-card border border-line bg-bg-raised">
              <Image
                src="/dylan/dylan-2.png"
                alt="Dylan Xavier"
                fill
                sizes="(min-width: 768px) 320px, 100vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </Reveal>
        <div className="flex flex-col gap-5">
          {page.bio.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <p className="max-w-[65ch] text-base leading-relaxed text-ink-soft md:text-lg">{paragraph}</p>
            </Reveal>
          ))}
        </div>
      </Container>

      <Container className="border-t border-line py-16 md:py-24">
        <Reveal>
          <h2 className="max-w-xl font-display text-2xl font-medium tracking-tight text-ink md:text-3xl">
            {page.valuesTitle}
          </h2>
        </Reveal>
        <RevealGroup
          className="mt-10 grid gap-8 md:grid-cols-3"
          items={page.values.map((value, i) => (
            <div key={value.title} className="border-t border-line pt-5">
              <span className="font-mono text-xs font-semibold text-ink-faint">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-3 text-lg font-medium text-ink">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{value.body}</p>
            </div>
          ))}
        />
      </Container>

      <Container className="border-t border-line py-16 md:py-24">
        <Reveal>
          <h2 className="font-mono text-sm uppercase tracking-[0.1em] text-ink-faint">{page.toolsTitle}</h2>
        </Reveal>
        <div className="mt-8 flex flex-wrap gap-3">
          {tools.map((tool) => (
            <span key={tool.slug} className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-medium text-ink-soft">
              <BrandLogo slug={tool.slug} source={tool.source} className="h-4 w-4" />
              {tool.label}
            </span>
          ))}
        </div>
      </Container>

      <section id="contact" className="border-t border-line bg-bg-raised">
        <Container className="py-20 md:py-28">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-xs font-medium text-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            {page.availability}
          </div>
          <h2 className="max-w-xl font-display text-3xl font-medium tracking-tight text-ink md:text-5xl">
            {page.contactTitle}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">{page.contactBody}</p>

          <div className="mt-10 grid gap-4 sm:max-w-xl sm:grid-cols-2">
            <a
              href={`mailto:${EMAIL}`}
              className="group flex items-center justify-between rounded-card border border-line bg-bg px-5 py-4 transition-colors hover:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span className="flex items-center gap-3">
                <EnvelopeSimple size={18} weight="bold" aria-hidden="true" />
                <span>
                  <span className="block text-xs text-ink-faint">{page.emailLabel}</span>
                  <span className="block text-sm font-medium text-ink">{EMAIL}</span>
                </span>
              </span>
              <ArrowUpRight size={16} weight="bold" className="text-ink-faint transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>

            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-card border border-line bg-bg px-5 py-4 transition-colors hover:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <span className="flex items-center gap-3">
                <WhatsappLogo size={18} weight="bold" aria-hidden="true" />
                <span>
                  <span className="block text-xs text-ink-faint">{page.whatsappLabel}</span>
                  <span className="block text-sm font-medium text-ink">+55 11 97755-5253</span>
                </span>
              </span>
              <ArrowUpRight size={16} weight="bold" className="text-ink-faint transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}
