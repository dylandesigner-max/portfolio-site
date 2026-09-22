"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { useLocale } from "@/lib/i18n/context";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ProjectLink } from "@/components/projects/project-link";
import { projects } from "@/lib/projects-data";

const FEATURED_SLUGS = ["auge", "ellysium", "gestao-a-vista"];

export function ProjectsShowcase() {
  const { t, locale } = useLocale();
  const featured = FEATURED_SLUGS.map((slug) => projects.find((p) => p.slug === slug && p.content)).filter(
    (p): p is (typeof projects)[number] => Boolean(p),
  );

  return (
    <section className="border-t border-line py-24 md:py-32">
      <Container>
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6 md:mb-16">
          <div>
            <p className="mb-3 font-mono text-xs uppercase tracking-[0.16em] text-ink-faint">
              {t.projectsSection.eyebrow}
            </p>
            <h2 className="font-display text-3xl font-medium tracking-tight text-ink md:text-5xl">
              {t.projectsSection.headline}
            </h2>
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink underline decoration-line underline-offset-4 transition-colors hover:decoration-accent"
          >
            {t.projectsSection.viewAll}
            <ArrowUpRight size={16} weight="bold" aria-hidden="true" />
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3 md:grid-rows-2">
          {featured.map((project, i) => (
            <Reveal
              key={project.slug}
              delay={i * 0.08}
              className={i === 0 ? "md:col-span-2 md:row-span-2" : undefined}
            >
              <ProjectLink
                href={`/projects/${project.slug}`}
                data-cursor-hover
                className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-card"
              >
                <div
                  className={
                    "relative overflow-hidden rounded-card border border-line bg-bg-raised " +
                    (i === 0 ? "aspect-[16/11] md:h-full md:aspect-auto" : "aspect-[4/3]")
                  }
                >
                  <Image
                    src={project.image}
                    alt={locale === "pt" ? project.imageAlt.pt : project.imageAlt.en}
                    fill
                    sizes={i === 0 ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 md:p-6">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-medium text-white md:text-xl">{project.title}</h3>
                        <p className="mt-1 max-w-sm text-sm text-white/70">
                          {locale === "pt" ? project.tagline.pt : project.tagline.en}
                        </p>
                      </div>
                      <ArrowUpRight
                        size={18}
                        weight="bold"
                        className="shrink-0 text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
              </ProjectLink>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
