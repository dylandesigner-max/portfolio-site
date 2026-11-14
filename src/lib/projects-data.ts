import auge from "@/content/projects/auge.json";
import askray from "@/content/projects/askray.json";
import ellysium from "@/content/projects/ellysium.json";
import gestaoAVista from "@/content/projects/gestao-a-vista.json";
import contasco from "@/content/projects/contasco.json";
import taskfy from "@/content/projects/taskfy.json";
import moonBase from "@/content/projects/moon-base.json";
import pronto from "@/content/projects/pronto.json";

import type { Project } from "@/lib/project-types";

// Types live in project-types.ts; re-exported here so existing imports keep
// working.
export * from "@/lib/project-types";

// Each project's actual data lives in its own file under
// src/content/projects/<slug>.json — this is the only place that needs a
// new line when a project is added or removed. The CMS admin panel writes
// directly to those JSON files (and to this import list, for brand-new
// projects) via the GitHub API; every commit there rebuilds and redeploys
// this site automatically.
export const projects: Project[] = [
  auge,
  askray,
  ellysium,
  gestaoAVista,
  contasco,
  taskfy,
  moonBase,
  pronto,
] as Project[];
