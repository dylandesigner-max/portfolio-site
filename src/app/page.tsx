import { Hero } from "@/components/home/hero";
import { AboutTeaser } from "@/components/home/about-teaser";
import { FeaturesBento } from "@/components/home/features-bento";
import { ProjectsShowcase } from "@/components/home/projects-showcase";
import { TestimonialsCarousel } from "@/components/home/testimonials-carousel";
import { SocialCards } from "@/components/home/social-cards";
import { SkillsMarquee } from "@/components/home/skills-marquee";
import { ContactCta } from "@/components/home/contact-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutTeaser />
      <SkillsMarquee />
      <FeaturesBento />
      <ProjectsShowcase />
      <TestimonialsCarousel />
      <SocialCards />
      <SkillsMarquee />
      <ContactCta />
    </>
  );
}
