"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import { useLocale } from "@/lib/i18n/context";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import type { Project, ProjectContent } from "@/lib/projects-data";

export function ProjectDetail({
  project,
}: {
  project: Project & { content: ProjectContent };
}) {
  const { t, locale } = useLocale();
  const content = project.content;

  return (
    <div className="pt-24 md:pt-28">
      <Container className="py-12 md:py-16">
        <Link
          href="/projects"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink-soft transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
        >
          <ArrowLeft size={16} weight="bold" aria-hidden="true" />
          {t.projectPage.back}
        </Link>

        <div className="mt-8 flex flex-wrap items-start justify-between gap-8">
          <div className="max-w-2xl">
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-ink-faint">
              {locale === "pt" ? project.role.pt : project.role.en} · {project.year}
            </p>
            <h1 className="font-display text-4xl font-medium tracking-tight text-ink text-balance md:text-6xl">
              {project.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
              {locale === "pt" ? project.tagline.pt : project.tagline.en}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-line px-3 py-1 text-xs font-medium text-ink-soft">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Container>

      <Container>
        <Reveal>
          <div className="relative aspect-[16/10] overflow-hidden rounded-card border border-line bg-bg-raised">
            <Image
              src={project.image}
              alt={locale === "pt" ? project.imageAlt.pt : project.imageAlt.en}
              fill
              sizes="100vw"
              priority
              className="object-cover object-top"
            />
          </div>
        </Reveal>
      </Container>

      <Container className="grid gap-10 py-16 md:grid-cols-[1fr_1.4fr] md:gap-16 md:py-24">
        <Reveal>
          <h2 className="font-mono text-sm uppercase tracking-[0.1em] text-ink-faint">
            {t.projectPage.overview}
          </h2>
        </Reveal>
        <div className="flex flex-col gap-5">
          {content.overview.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <p className="max-w-[65ch] text-base leading-relaxed text-ink-soft md:text-lg">
                {locale === "pt" ? paragraph.pt : paragraph.en}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>

      {content.gallery.length > 0 && (
        <Container className="border-t border-line py-16 md:py-24">
          <Reveal>
            <h2 className="mb-10 font-mono text-sm uppercase tracking-[0.1em] text-ink-faint md:mb-14">
              {t.projectPage.gallery}
            </h2>
          </Reveal>
          <div className="flex flex-col gap-16 md:gap-24">
            {content.gallery.map((item, i) => {
              const caption = locale === "pt" ? item.caption.pt : item.caption.en;
              return (
                <Reveal key={item.src} delay={(i % 3) * 0.05}>
                  <div className="relative overflow-hidden rounded-card border border-line bg-bg-raised">
                    <Image
                      src={item.src}
                      alt={caption || project.title}
                      width={1600}
                      height={1000}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                  {caption && (
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-faint">{caption}</p>
                  )}
                </Reveal>
              );
            })}
          </div>
        </Container>
      )}

      <section className="border-t border-line bg-bg-raised">
        <Container className="flex flex-col items-start gap-6 py-16 md:flex-row md:items-center md:justify-between md:py-20">
          <div>
            <h2 className="font-display text-2xl font-medium tracking-tight text-ink md:text-3xl">
              {t.projectPage.nextTitle}
            </h2>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-ink-soft">{t.projectPage.nextBody}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {content.pdfHref && (
              <Button
                href={content.pdfHref}
                external
                target="_blank"
                rel="noreferrer"
                variant="outline"
                iconNode={<DownloadSimple size={16} weight="bold" aria-hidden="true" />}
              >
                {t.projectPage.downloadPdf}
              </Button>
            )}
            <Button href="/projects" variant="primary">
              {t.projectPage.viewAll}
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
