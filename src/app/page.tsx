import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ScienceLifestyleSection from "@/components/ScienceLifestyleSection";
import ServicesSection from "@/components/ServicesSection";
import DoctorsSection from "@/components/DoctorsSection";
import Footer from "@/components/Footer";
import AppointmentModal from "@/components/AppointmentModal";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col selection:bg-sky-200 relative">
      {/* Fixed Navigation Bar (Desktop Top + Mobile Bottom + Floating WhatsApp) */}
      <Navbar />

      {/* 1. Hero Section (with bezel frame, floating collage, and bottom logo ticker strip) */}
      <HeroSection />

      {/* 2. Science & Lifestyle Section */}
      <ScienceLifestyleSection />

      {/* 3. Services Section (8 Specialities in reference bento layout) */}
      <ServicesSection />

      {/* 4. Doctors Section (Our Doctors gallery) */}
      <DoctorsSection />

      {/* 5. Clean Minimal Footer (matching reference design) */}
      <Footer />

      {/* 6. Global Appointment Modal */}
      <AppointmentModal />
    </main>
  );
}
