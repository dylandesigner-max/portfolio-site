"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, ChartBar, EnvelopeSimple, Sparkle, TestTube, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { useLocale } from "@/lib/i18n/context";
import type { Locale } from "@/lib/i18n/dictionaries";
import { Container } from "@/components/ui/container";
import { Reveal, RevealGroup } from "@/components/ui/reveal";
import { BrandLogo } from "@/components/ui/brand-logo";
import { tools, type Tool } from "@/lib/tools";

const EMAIL = "dylan.dsgner@gmail.com";
const WHATSAPP_HREF = "https://wa.me/5511977555253";
const VALUE_ICONS = [ChartBar, Sparkle, TestTube];

const STACK_TOP_BASE = 128; // px — clears the header with room to spare
const STACK_TOP_STEP = 14; // px added per card, so earlier cards keep peeking out

function ToolCardBody({ tool, locale }: { tool: Tool; locale: Locale }) {
  return (
    <>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-bg md:h-12 md:w-12">
        <BrandLogo slug={tool.slug} source={tool.source} className="h-5 w-5 md:h-6 md:w-6" />
      </span>
      <div>
        <h3 className="text-base font-medium text-ink md:text-lg">{tool.label}</h3>
        <p className="mt-1.5 max-w-md text-sm leading-relaxed text-ink-soft">{tool.description[locale]}</p>
      </div>
    </>
  );
}

function ToolStack({ locale }: { locale: Locale }) {
  return (
    <div className="flex flex-col gap-6">
      {tools.map((tool, i) => {
        // Earlier cards sit further back in the stack and stay mostly hidden
        // behind later ones — a full shadow on every card compounds into a
        // heavy dark band where they overlap, so shadow strength ramps up
        // with index instead of being uniform.
        const depth = i / (tools.length - 1);
        const shadowAlpha = 0.12 + depth * 0.28;
        const shadowBlur = 24 + depth * 24;
        return (
          <div key={tool.slug} className="sticky" style={{ top: STACK_TOP_BASE + i * STACK_TOP_STEP, zIndex: i + 1 }}>
            <div
              className="flex items-start gap-4 rounded-card border border-line bg-bg-raised p-6 md:gap-5 md:p-7"
              style={{ boxShadow: `0 ${shadowBlur / 2}px ${shadowBlur}px -24px rgba(0,0,0,${shadowAlpha})` }}
            >
              <ToolCardBody tool={tool} locale={locale} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function AboutPage() {
  const { t, locale } = useLocale();
  const page = t.aboutPage;

  return (
    <div className="pt-24 md:pt-28">
      <Container className="grid gap-10 py-12 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-16 md:py-16">
        <div>
          <h1 className="font-display text-4xl font-medium leading-[1.1] tracking-tight text-ink text-balance md:text-6xl">
            {page.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">{page.intro}</p>
        </div>
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-card border border-line bg-bg-raised">
            <Image
              src="/dylan/dylan-1.png"
              alt="Dylan Xavier"
              fill
              sizes="(min-width: 768px) 560px, 100vw"
              priority
              quality={95}
              className="object-cover object-top grayscale"
            />
          </div>
        </Reveal>
      </Container>

      <Container className="grid gap-10 py-12 md:grid-cols-[1fr_1.4fr] md:gap-16 md:py-16">
        <Reveal>
          <div className="md:sticky md:top-24">
            <h2 className="font-mono text-sm uppercase tracking-[0.1em] text-ink-faint">{page.bioTitle}</h2>
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
          className="mt-10 grid gap-6 md:grid-cols-3"
          items={page.values.map((value, i) => {
            const Icon = VALUE_ICONS[i] ?? Sparkle;
            return (
              <motion.div
                key={value.title}
                initial="rest"
                animate="rest"
                whileHover="hover"
                className="group relative flex h-full flex-col overflow-hidden rounded-card border border-line bg-bg-raised p-7 transition-colors duration-300 hover:border-accent/50"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute right-5 top-5 select-none font-display text-4xl font-medium text-ink-faint/15 md:text-5xl"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <motion.div
                  variants={{ rest: { opacity: 0, scale: 0.6 }, hover: { opacity: 1, scale: 1 } }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-accent/25 blur-3xl"
                />
                <motion.div
                  variants={{ rest: { y: 0, rotate: 0 }, hover: { y: -3, rotate: -8 } }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-full border border-line bg-bg text-ink transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-ink"
                >
                  <Icon size={22} weight="bold" aria-hidden="true" />
                </motion.div>
                <h3 className="relative z-10 mt-6 text-lg font-medium text-ink">{value.title}</h3>
                <p className="relative z-10 mt-2 text-sm leading-relaxed text-ink-soft">{value.body}</p>
              </motion.div>
            );
          })}
        />
      </Container>

      <Container className="border-t border-line py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <div className="relative">
            <div className="md:sticky md:top-32">
              <Reveal>
                <h2 className="font-display text-3xl font-medium tracking-tight text-ink md:text-5xl">{page.toolsTitle}</h2>
              </Reveal>
            </div>
          </div>
          <ToolStack locale={locale} />
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
