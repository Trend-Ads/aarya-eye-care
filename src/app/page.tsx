import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ScienceLifestyleSection from "@/components/ScienceLifestyleSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col selection:bg-sky-200 relative">
      {/* Fixed Navigation Bar */}
      <Navbar />

      {/* 1. Hero Section (with bezel frame, floating collage, and bottom logo ticker strip) */}
      <HeroSection />

      {/* 2. Science & Lifestyle Section */}
      <ScienceLifestyleSection />
    </main>
  );
}
