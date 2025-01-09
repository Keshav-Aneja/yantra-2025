import Navbar from "@/components/Navbar";
import AboutSection from "@/sections/About";
import Hero from "@/sections/Hero";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero/>
      <AboutSection />
    </div>
  );
}
