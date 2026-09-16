import { Hero } from "@/components/home/hero";
import { Stats } from "@/components/home/stats";
import { AboutTeaser } from "@/components/home/about-teaser";
import { Services } from "@/components/home/services";
import { Process } from "@/components/home/process";
import { ProjectsPreview } from "@/components/home/projects-preview";
import { SkillsMarquee } from "@/components/home/skills-marquee";
import { ContactCta } from "@/components/home/contact-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutTeaser />
      <Services />
      <Process />
      <ProjectsPreview />
      <SkillsMarquee />
      <ContactCta />
    </>
  );
}
