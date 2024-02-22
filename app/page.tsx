import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import HomeSection from "@/components/sections/HomeSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import Navigation from "@/components/essentials/Navigation";


export default function Home() {
  return (
    <main className="">
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <ReviewsSection />
      <ContactSection />
      <Navigation />
    </main>
  );
}
