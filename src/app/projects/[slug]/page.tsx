import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects } from "@/lib/projects-data";
import { ProjectDetail } from "@/components/projects/project-detail";

export function generateStaticParams() {
  return projects.filter((project) => project.content).map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Dylan Xavier`,
    description: project.tagline.pt,
  };
}

function pickRelated(currentSlug: string, count: number) {
  const pool = projects.filter((p) => p.content && p.slug !== currentSlug);
  const picked: typeof pool = [];
  const remaining = [...pool];
  while (picked.length < count && remaining.length > 0) {
    const index = Math.floor(Math.random() * remaining.length);
    picked.push(remaining[index]);
    remaining.splice(index, 1);
  }
  return picked;
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project || !project.content) {
    notFound();
  }

  const relatedProjects = pickRelated(slug, 2);

  return (
    <ProjectDetail
      project={{ ...project, content: project.content }}
      relatedProjects={relatedProjects}
    />
  );
}
