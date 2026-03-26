import { Navbar } from "@/components/sections/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { CurrentJob } from "@/components/sections/CurrentJob";
import { Certificates } from "@/components/sections/Certificates";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { BackgroundGlow } from "@/components/animation/BackgroundGlow";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <BackgroundGlow />
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <CurrentJob />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  );
}
