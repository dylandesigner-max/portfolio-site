"use client";

import {
  IconBrandAdobeAfterEffects,
  IconBrandAdobeIllustrator,
  IconBrandAdobePhotoshop,
  IconArrowUpRight,
  IconBrandCss3,
  IconBrandFigma,
  IconBrandFramer,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandWhatsapp,
  IconBrandWordpress,
  IconMail,
} from "@tabler/icons-react";
import { useLocale } from "@/lib/i18n/context";
import { Container } from "@/components/ui/container";
import { Reveal, RevealGroup } from "@/components/ui/reveal";

const EMAIL = "dylan.dsgner@gmail.com";
const WHATSAPP_HREF = "https://wa.me/5511977555253";

const tools = [
  { icon: IconBrandFigma, label: "Figma" },
  { icon: IconBrandAdobePhotoshop, label: "Photoshop" },
  { icon: IconBrandAdobeIllustrator, label: "Illustrator" },
  { icon: IconBrandAdobeAfterEffects, label: "After Effects" },
  { icon: IconBrandFramer, label: "Framer" },
  { icon: IconBrandHtml5, label: "HTML5" },
  { icon: IconBrandCss3, label: "CSS3" },
  { icon: IconBrandJavascript, label: "JavaScript" },
  { icon: IconBrandWordpress, label: "WordPress" },
];

export default function AboutPage() {
  const { t } = useLocale();
  const page = t.aboutPage;

  return (
    <div className="pt-24 md:pt-24">
      <Container className="py-12 md:py-16">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-ink-faint">
          {page.eyebrow}
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight text-ink text-balance md:text-6xl">
          {page.headline}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg">
          {page.intro}
        </p>
      </Container>

      <Container className="grid gap-10 py-12 md:grid-cols-[1fr_1.4fr] md:gap-16 md:py-16">
        <Reveal>
          <h2 className="text-sm font-semibold uppercase tracking-[0.1em] text-ink-faint">
            {page.bioTitle}
          </h2>
        </Reveal>
        <div className="flex flex-col gap-5">
          {page.bio.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <p className="max-w-[65ch] text-base leading-relaxed text-ink-soft md:text-lg">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>

      <Container className="border-t border-line py-16 md:py-24">
        <Reveal>
          <h2 className="max-w-xl text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            {page.valuesTitle}
          </h2>
        </Reveal>

        <RevealGroup
          className="mt-10 grid gap-8 md:grid-cols-3"
          items={page.values.map((value, i) => (
            <div key={value.title} className="border-t border-line pt-5">
              <span className="font-mono text-xs font-semibold text-ink-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-ink">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                {value.body}
              </p>
            </div>
          ))}
        />
      </Container>

      <Container className="border-t border-line py-16 md:py-24">
        <Reveal>
          <h2 className="text-sm font-semibold uppercase tracking-[0.1em] text-ink-faint">
            {page.toolsTitle}
          </h2>
        </Reveal>
        <div className="mt-8 flex flex-wrap gap-3">
          {tools.map((tool) => (
            <span
              key={tool.label}
              className="inline-flex items-center gap-2 rounded-pill border border-line px-4 py-2 text-sm font-medium text-ink-soft"
            >
              <tool.icon size={18} strokeWidth={1.5} aria-hidden="true" />
              {tool.label}
            </span>
          ))}
        </div>
      </Container>

      <section id="contact" className="border-t border-line bg-bg-raised">
        <Container className="py-20 md:py-28">
          <div className="mb-3 inline-flex items-center gap-2 rounded-pill border border-line px-3 py-1 text-xs font-medium text-ink-soft">
            <span
              className="h-1.5 w-1.5 rounded-full bg-emerald-500"
              aria-hidden="true"
            />
            {page.availability}
          </div>
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-ink md:text-5xl">
            {page.contactTitle}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
            {page.contactBody}
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:max-w-xl">
            <a
              href={`mailto:${EMAIL}`}
              className="group flex items-center justify-between rounded-md border border-line bg-bg px-5 py-4 transition-colors hover:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              <span className="flex items-center gap-3">
                <IconMail size={18} strokeWidth={1.75} aria-hidden="true" />
                <span>
                  <span className="block text-xs text-ink-faint">
                    {page.emailLabel}
                  </span>
                  <span className="block text-sm font-medium text-ink">
                    {EMAIL}
                  </span>
                </span>
              </span>
              <IconArrowUpRight
                size={16}
                strokeWidth={2}
                className="text-ink-faint transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>

            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-md border border-line bg-bg px-5 py-4 transition-colors hover:border-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              <span className="flex items-center gap-3">
                <IconBrandWhatsapp size={18} strokeWidth={1.75} aria-hidden="true" />
                <span>
                  <span className="block text-xs text-ink-faint">
                    {page.whatsappLabel}
                  </span>
                  <span className="block text-sm font-medium text-ink">
                    +55 11 97755-5253
                  </span>
                </span>
              </span>
              <IconArrowUpRight
                size={16}
                strokeWidth={2}
                className="text-ink-faint transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}
