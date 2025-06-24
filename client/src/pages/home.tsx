import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import BlogSection from "@/components/blog-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import RecommendationsSection from "@/components/recommendations-section";
import WorkExperienceSection from "@/components/work-experience-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <WorkExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <BlogSection />
        <RecommendationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
