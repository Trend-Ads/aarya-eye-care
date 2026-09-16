import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ScienceLifestyleSection from "@/components/ScienceLifestyleSection";
import ServicesSection from "@/components/ServicesSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col selection:bg-sky-200 relative">
      {/* Fixed Navigation Bar */}
      <Navbar />

      {/* 1. Hero Section (with bezel frame, floating collage, and bottom logo ticker strip) */}
      <HeroSection />

      {/* 2. Science & Lifestyle Section */}
      <ScienceLifestyleSection />

      {/* 3. Services Section (8 Specialities in reference bento layout) */}
      <ServicesSection />
    </main>
  );
}
