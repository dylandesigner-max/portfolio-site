import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects-data";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/projects"].map((path) => ({ url: `${SITE_URL}${path}` }));
  const cases = projects
    .filter((project) => project.content)
    .map((project) => ({ url: `${SITE_URL}/projects/${project.slug}` }));
  return [...pages, ...cases];
}
