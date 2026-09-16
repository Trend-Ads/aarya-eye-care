import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ScienceLifestyleSection from "@/components/ScienceLifestyleSection";
import ServicesSection from "@/components/ServicesSection";
import DoctorsSection from "@/components/DoctorsSection";
import BranchesSection from "@/components/BranchesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col selection:bg-sky-200 relative pb-16 md:pb-0">
      {/* Fixed Navigation Bar (Desktop Top + Mobile Bottom) */}
      <Navbar />

      {/* 1. Hero Section (with bezel frame, floating collage, and bottom logo ticker strip) */}
      <HeroSection />

      {/* 2. Science & Lifestyle Section */}
      <ScienceLifestyleSection />

      {/* 3. Services Section (8 Specialities in reference bento layout) */}
      <ServicesSection />

      {/* 4. Doctors Section (Our Doctors gallery) */}
      <DoctorsSection />

      {/* 5. Branches Section (Locations & Contact) */}
      <BranchesSection />

      {/* 6. Comprehensive Hospital Footer */}
      <Footer />
    </main>
  );
}
