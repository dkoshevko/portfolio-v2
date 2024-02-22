import AboutSection from "@/components/AboutSection";
import HomeSection from "@/components/HomeSection";
import Navigation from "@/components/essentials/Navigation";

export default function Home() {
  return (
    <main className="">
      <HomeSection />
      <AboutSection />
      <Navigation />
    </main>
  );
}
