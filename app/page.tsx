import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import HomeSection from "@/components/sections/HomeSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import Navigation from "@/components/essentials/Navigation";

export default function Home() {
  return (
    <main className="container mx-auto px-4 h-screen">
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <ReviewsSection />
      <ContactSection />
      <Navigation />
    </main>
  );
}
