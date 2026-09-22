"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import { useLocale } from "@/lib/i18n/context";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { ParallaxCover } from "@/components/projects/parallax-cover";
import { ImageGallery } from "@/components/projects/image-gallery";
import { VideoGallery } from "@/components/projects/video-gallery";
import { ProjectLink } from "@/components/projects/project-link";
import type {
  MediaSection as MediaSectionData,
  Project,
  ProjectContent,
  ProjectSection as ProjectSectionData,
} from "@/lib/projects-data";

function ProjectSection({
  label,
  section,
}: {
  label: string;
  section: ProjectSectionData;
}) {
  const { locale } = useLocale();
  if (!section.enabled || (section.images.length === 0 && !section.body)) return null;

  return (
    <Container className="border-t border-line py-16 md:py-24">
      <Reveal>
        <h2 className="font-mono text-sm uppercase tracking-[0.1em] text-ink-faint">{label}</h2>
      </Reveal>
      {section.body && (
        <Reveal delay={0.06}>
          <p className="mt-4 max-w-[65ch] whitespace-pre-line text-base leading-relaxed text-ink-soft md:text-lg">
            {locale === "pt" ? section.body.pt : section.body.en}
          </p>
        </Reveal>
      )}
      {section.images.length > 0 && (
        <Reveal delay={0.12} className="mt-10 md:mt-12">
          <ImageGallery images={section.images} sectionLabel={label} />
        </Reveal>
      )}
    </Container>
  );
}

function VideoSection({
  label,
  section,
}: {
  label: string;
  section: MediaSectionData;
}) {
  const { locale } = useLocale();
  if (!section.enabled || (section.items.length === 0 && !section.body)) return null;

  return (
    <Container className="border-t border-line py-16 md:py-24">
      <Reveal>
        <h2 className="font-mono text-sm uppercase tracking-[0.1em] text-ink-faint">{label}</h2>
      </Reveal>
      {section.body && (
        <Reveal delay={0.06}>
          <p className="mt-4 max-w-[65ch] whitespace-pre-line text-base leading-relaxed text-ink-soft md:text-lg">
            {locale === "pt" ? section.body.pt : section.body.en}
          </p>
        </Reveal>
      )}
      {section.items.length > 0 && (
        <Reveal delay={0.12} className="mt-10 md:mt-12">
          <VideoGallery items={section.items} sectionLabel={label} />
        </Reveal>
      )}
    </Container>
  );
}

export function ProjectDetail({
  project,
  relatedProjects,
}: {
  project: Project & { content: ProjectContent };
  relatedProjects: Project[];
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

            {(content.projectUrl || content.pdfHref) && (
              <div className="mt-6 flex flex-wrap gap-3">
                {content.projectUrl && (
                  <Button
                    href={content.projectUrl}
                    external
                    target="_blank"
                    rel="noreferrer"
                    variant="outline"
                  >
                    {t.projectPage.viewProject}
                  </Button>
                )}
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
              </div>
            )}
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
          <ParallaxCover
            src={content.cover.src}
            alt={locale === "pt" ? content.cover.alt.pt : content.cover.alt.en}
          />
        </Reveal>
      </Container>

      {content.about.enabled && (
        <Container className="grid gap-6 py-16 md:grid-cols-[1fr_1.4fr] md:gap-16 md:py-24">
          <Reveal>
            <h2 className="font-mono text-sm uppercase tracking-[0.1em] text-ink-faint">
              {t.projectPage.about}
            </h2>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="max-w-[65ch] whitespace-pre-line text-base leading-relaxed text-ink-soft md:text-lg">
              {locale === "pt" ? content.about.body.pt : content.about.body.en}
            </p>
          </Reveal>
        </Container>
      )}

      <ProjectSection label={t.projectPage.foundations} section={content.foundations} />
      <ProjectSection label={t.projectPage.product} section={content.product} />
      <ProjectSection label={t.projectPage.research} section={content.research} />
      <ProjectSection label={t.projectPage.designSystem} section={content.designSystem} />
      <VideoSection label={t.projectPage.videos} section={content.videos} />

      {content.backCover.enabled && (
        <Container className="border-t border-line py-16 md:py-24">
          <Reveal>
            <ParallaxCover
              src={content.backCover.src}
              alt={locale === "pt" ? content.backCover.alt.pt : content.backCover.alt.en}
            />
          </Reveal>
        </Container>
      )}

      {relatedProjects.length > 0 && (
        <Container className="border-t border-line py-16 md:py-24">
          <Reveal>
            <h2 className="font-mono text-sm uppercase tracking-[0.1em] text-ink-faint">
              {t.projectPage.relatedTitle}
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {relatedProjects.map((related, i) => (
              <Reveal key={related.slug} delay={i * 0.08}>
                <ProjectLink
                  href={`/projects/${related.slug}`}
                  data-cursor-hover
                  className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-card"
                >
                  <div className="relative aspect-[16/11] overflow-hidden rounded-card border border-line bg-bg-raised">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={related.image}
                      alt={locale === "pt" ? related.imageAlt.pt : related.imageAlt.en}
                      className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-medium text-ink">{related.title}</h3>
                      <p className="mt-1 text-sm text-ink-soft">
                        {locale === "pt" ? related.tagline.pt : related.tagline.en}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={18}
                      weight="bold"
                      className="shrink-0 text-ink-faint transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink"
                      aria-hidden="true"
                    />
                  </div>
                </ProjectLink>
              </Reveal>
            ))}
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
          <Button href="/projects" variant="primary">
            {t.projectPage.viewAll}
          </Button>
        </Container>
      </section>
    </div>
  );
}
