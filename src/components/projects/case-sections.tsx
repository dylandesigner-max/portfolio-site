"use client";

import { CheckCircle, Quotes, Target, WarningCircle } from "@phosphor-icons/react/dist/ssr";
import { useLocale } from "@/lib/i18n/context";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { BrandLogo, type BrandLogoSource } from "@/components/ui/brand-logo";
import { ScrollCard } from "@/components/projects/scroll-card";
import { tools as toolCatalog } from "@/lib/tools";
import { cn } from "@/lib/utils";
import type {
  ChallengeSection,
  LocalizedText,
  Persona,
  PersonasSection,
  Project,
  ProjectFacts,
  ResultsSection,
} from "@/lib/project-types";

type Locale = "pt" | "en";

function pick(locale: Locale, text?: LocalizedText) {
  if (!text) return "";
  return (locale === "pt" ? text.pt : text.en) || text.pt || text.en || "";
}

function filled(text?: LocalizedText) {
  return Boolean(text && (text.pt.trim() || text.en.trim()));
}

function lines(locale: Locale, text?: LocalizedText) {
  return pick(locale, text)
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
}

// Logos for the tools offered in the admin's "Ferramentas" picker
// (portfolio-admin/src/components/ToolsMultiSelect.tsx). Adobe apps aren't on
// Simple Icons, so they come from devicon.
const CASE_TOOL_LOGOS: Record<string, { slug: string; source?: BrandLogoSource }> = {
  figma: { slug: "figma" },
  framer: { slug: "framer" },
  photoshop: { slug: "photoshop", source: "devicon" },
  illustrator: { slug: "illustrator", source: "devicon" },
  "after effects": { slug: "aftereffects", source: "devicon" },
  "premiere pro": { slug: "premierepro", source: "devicon" },
  "adobe xd": { slug: "xd", source: "devicon" },
  jira: { slug: "jira" },
  trello: { slug: "trello" },
  confluence: { slug: "confluence" },
  notion: { slug: "notion" },
  wordpress: { slug: "wordpress" },
  elementor: { slug: "elementor" },
  storybook: { slug: "storybook" },
  "claude code": { slug: "claude" },
};

/** Maps a tool name to its logo: the picker's known tools first, then the
 * site's tool catalog, then a Simple Icons guess (BrandLogo quietly hides a
 * logo that doesn't exist). */
function resolveTool(name: string): { label: string; slug: string; source?: BrandLogoSource } {
  const label = name.trim();
  const key = label.toLowerCase();
  const mapped = CASE_TOOL_LOGOS[key];
  if (mapped) return { label, ...mapped };
  const known = toolCatalog.find((t) => t.slug === key || t.label.toLowerCase() === key);
  if (known) return { label: known.label, slug: known.slug, source: known.source };
  return { label, slug: key.replace(/[^a-z0-9]/g, "") };
}

const sectionLabel = "font-mono text-sm uppercase tracking-[0.1em] text-ink-faint";
const sectionBody = "max-w-[65ch] whitespace-pre-line text-base leading-relaxed text-ink-soft md:text-lg";
const card = "case-card rounded-card border border-line bg-bg-raised";
const microLabel = "font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint";

/* ------------------------------------------------------------------ */
/* Ficha do projeto                                                     */
/* ------------------------------------------------------------------ */

export function hasFacts(facts?: ProjectFacts) {
  return Boolean(facts?.enabled);
}

export function FactsCard({ project, facts }: { project: Project; facts: ProjectFacts }) {
  const { t, locale } = useLocale();

  const rows: { label: string; value: string }[] = [
    { label: t.projectPage.factRole, value: pick(locale, project.role) },
    { label: t.projectPage.factYear, value: project.year },
    { label: t.projectPage.factDuration, value: pick(locale, facts.duration) },
    { label: t.projectPage.factPlatform, value: pick(locale, facts.platform) },
    { label: t.projectPage.factTeam, value: pick(locale, facts.team) },
  ].filter((row) => row.value.trim());

  const tools = facts.tools.filter((name) => name.trim()).map(resolveTool);

  return (
    <aside className="rounded-card border border-line bg-bg-raised p-6 md:p-8">
      <h2 className={sectionLabel}>{t.projectPage.facts}</h2>
      <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5">
        {rows.map((row) => (
          <div key={row.label}>
            <dt className={microLabel}>{row.label}</dt>
            <dd className="mt-1 text-sm font-medium leading-snug text-ink md:text-base">{row.value}</dd>
          </div>
        ))}
        {tools.length > 0 && (
          <div className="col-span-2">
            <dt className={microLabel}>{t.projectPage.factTools}</dt>
            <dd className="mt-2 flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool.label}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-bg px-3 py-1.5 text-xs font-medium text-ink"
                >
                  <BrandLogo slug={tool.slug} source={tool.source} className="h-3.5 w-3.5" />
                  {tool.label}
                </span>
              ))}
            </dd>
          </div>
        )}
      </dl>
    </aside>
  );
}

/* ------------------------------------------------------------------ */
/* O desafio                                                            */
/* ------------------------------------------------------------------ */

export function ChallengeBlock({ section }: { section?: ChallengeSection }) {
  const { t, locale } = useLocale();
  if (!section?.enabled) return null;
  const items = section.items.filter((item) => filled(item.title) || filled(item.body));
  if (!filled(section.headline) && !filled(section.body) && items.length === 0) return null;

  return (
    <Container className="border-t border-line py-16 md:py-24">
      <Reveal>
        <h2 className={sectionLabel}>{t.projectPage.challenge}</h2>
      </Reveal>
      {filled(section.headline) && (
        <Reveal delay={0.04}>
          <p className="mt-4 max-w-3xl font-display text-2xl font-medium leading-tight tracking-tight text-ink text-balance md:text-4xl">
            {pick(locale, section.headline)}
          </p>
        </Reveal>
      )}
      {filled(section.body) && (
        <Reveal delay={0.08}>
          <p className={`mt-5 ${sectionBody}`}>{pick(locale, section.body)}</p>
        </Reveal>
      )}
      {items.length > 0 && (
        <div className="mt-10 grid gap-4 md:mt-12 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <ScrollCard key={i} index={i}>
              <article className={`${card} flex h-full flex-col p-6 md:p-7`}>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-wash font-mono text-xs font-medium text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-lg font-medium leading-snug text-ink">{pick(locale, item.title)}</h3>
                {filled(item.body) && (
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft md:text-[15px]">
                    {pick(locale, item.body)}
                  </p>
                )}
              </article>
            </ScrollCard>
          ))}
        </div>
      )}
    </Container>
  );
}

/* ------------------------------------------------------------------ */
/* Principais resultados                                                */
/* ------------------------------------------------------------------ */

/** Big numbers ("62%") get the full display size; wordier values
 * ("Web + Mobile") step down so they never overflow their tile. */
function metricSize(value: string) {
  const len = value.trim().length;
  if (len <= 5) return "text-6xl md:text-7xl";
  if (len <= 9) return "text-5xl md:text-6xl";
  return "text-4xl md:text-5xl";
}

export function ResultsBlock({ section }: { section?: ResultsSection }) {
  const { t, locale } = useLocale();
  if (!section?.enabled) return null;
  const metrics = section.metrics.filter((m) => m.value.trim());
  const highlights = section.highlights.filter((h) => filled(h.title) || filled(h.body));
  if (!filled(section.body) && metrics.length === 0 && highlights.length === 0) return null;

  const metricCols =
    metrics.length >= 4 ? "lg:grid-cols-4" : metrics.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-2";

  return (
    <Container className="border-t border-line py-16 md:py-24">
      <Reveal>
        <h2 className={sectionLabel}>{t.projectPage.results}</h2>
      </Reveal>
      {filled(section.body) && (
        <Reveal delay={0.06}>
          <p className={`mt-4 ${sectionBody}`}>{pick(locale, section.body)}</p>
        </Reveal>
      )}

      {metrics.length > 0 && (
        <div className={cn("mt-10 grid gap-4 sm:grid-cols-2 md:mt-12", metricCols)}>
          {metrics.map((metric, i) => (
            <ScrollCard key={i} index={i}>
              <article
                className={`${card} group flex h-full min-h-[220px] flex-col p-7 md:min-h-[260px] md:p-8`}
              >
                {/* texture + glow, both decorative */}
                <span
                  aria-hidden="true"
                  className="dot-grid pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(120%_90%_at_100%_0%,black,transparent_65%)]"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-20 -z-10 h-56 w-56 rounded-full bg-accent opacity-[0.10] blur-3xl transition-opacity duration-300 group-hover:opacity-25"
                />

                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 rounded-full border border-line bg-bg px-3 py-1 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="mt-12 md:mt-16">
                  <p
                    className={cn(
                      "font-display font-medium leading-[0.9] tracking-tighter text-ink [overflow-wrap:anywhere]",
                      metricSize(metric.value),
                    )}
                  >
                    {metric.value}
                  </p>
                  <p className="mt-4 max-w-[28ch] text-sm leading-snug text-ink-soft md:text-[15px]">
                    {pick(locale, metric.label)}
                  </p>
                </div>
              </article>
            </ScrollCard>
          ))}
        </div>
      )}

      {highlights.length > 0 && (
        <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, i) => (
            <ScrollCard key={i} index={i}>
              <article className={`${card} flex h-full flex-col p-6 md:p-7`}>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-wash text-accent">
                  <CheckCircle size={20} weight="bold" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-medium leading-snug text-ink">{pick(locale, item.title)}</h3>
                {filled(item.body) && (
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft md:text-[15px]">
                    {pick(locale, item.body)}
                  </p>
                )}
              </article>
            </ScrollCard>
          ))}
        </div>
      )}
    </Container>
  );
}

/* ------------------------------------------------------------------ */
/* User personas                                                        */
/* ------------------------------------------------------------------ */

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

function PersonaList({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: "pain" | "goal";
}) {
  const Icon = tone === "pain" ? WarningCircle : Target;
  return (
    <div className="rounded-2xl border border-line bg-bg p-5">
      <h4 className="flex items-center gap-2 text-sm font-medium text-ink">
        <Icon
          size={18}
          weight="bold"
          className={tone === "pain" ? "text-ink-faint" : "text-accent"}
          aria-hidden="true"
        />
        {title}
      </h4>
      <ul className="mt-3 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
            <span
              aria-hidden="true"
              className={cn(
                "mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full",
                tone === "pain" ? "bg-ink-faint" : "bg-accent",
              )}
            />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function PersonaCard({ persona }: { persona: Persona }) {
  const { t, locale } = useLocale();
  const frustrations = lines(locale, persona.frustrations);
  const goals = lines(locale, persona.goals);

  return (
    <article className={`${card} flex h-full flex-col p-6 md:p-8`}>
      <header className="flex items-center gap-4">
        {persona.avatar ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={persona.avatar}
            alt=""
            className="h-14 w-14 shrink-0 rounded-2xl border border-line bg-bg object-cover"
          />
        ) : (
          <span
            aria-hidden="true"
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-ink font-display text-lg font-medium text-bg"
          >
            {initials(persona.name)}
          </span>
        )}
        <div className="min-w-0">
          <h3 className="text-lg font-medium leading-tight text-ink md:text-xl">{persona.name}</h3>
          {filled(persona.role) && <p className="mt-0.5 text-sm text-ink-soft">{pick(locale, persona.role)}</p>}
        </div>
      </header>

      {filled(persona.meta) && (
        <div className="mt-5 flex flex-wrap gap-2">
          {pick(locale, persona.meta)
            .split("·")
            .map((chip) => chip.trim())
            .filter(Boolean)
            .map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-line bg-bg px-3 py-1 text-xs font-medium text-ink-soft"
              >
                {chip}
              </span>
            ))}
        </div>
      )}

      {filled(persona.quote) && (
        <blockquote className="mt-7 border-l-2 border-accent pl-4">
          <Quotes size={18} weight="fill" className="mb-2 text-accent" aria-hidden="true" />
          <p className="font-display text-xl font-medium leading-snug tracking-tight text-ink text-balance md:text-2xl">
            {pick(locale, persona.quote)}
          </p>
        </blockquote>
      )}

      {filled(persona.bio) && (
        <div className="mt-7">
          <h4 className={microLabel}>{t.projectPage.personaBio}</h4>
          <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-ink-soft md:text-[15px]">
            {pick(locale, persona.bio)}
          </p>
        </div>
      )}

      {(frustrations.length > 0 || goals.length > 0) && (
        <div className="mt-7 grid gap-3 xl:grid-cols-2">
          {frustrations.length > 0 && (
            <PersonaList title={t.projectPage.personaFrustrations} items={frustrations} tone="pain" />
          )}
          {goals.length > 0 && <PersonaList title={t.projectPage.personaGoals} items={goals} tone="goal" />}
        </div>
      )}
    </article>
  );
}

export function PersonasBlock({ section }: { section?: PersonasSection }) {
  const { t, locale } = useLocale();
  if (!section?.enabled) return null;
  const items = section.items.filter((p) => p.name.trim());
  if (items.length === 0 && !filled(section.body)) return null;

  return (
    <Container className="border-t border-line py-16 md:py-24">
      <Reveal>
        <h2 className={sectionLabel}>{t.projectPage.personas}</h2>
      </Reveal>
      {filled(section.body) && (
        <Reveal delay={0.06}>
          <p className={`mt-4 ${sectionBody}`}>{pick(locale, section.body)}</p>
        </Reveal>
      )}
      {items.length > 0 && (
        <div className="mt-10 grid gap-6 md:mt-12 md:grid-cols-2">
          {items.map((persona, i) => (
            <ScrollCard key={persona.name + i} index={i}>
              <PersonaCard persona={persona} />
            </ScrollCard>
          ))}
        </div>
      )}
    </Container>
  );
}
