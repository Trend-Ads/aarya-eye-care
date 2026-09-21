import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TheQuestion from "@/components/TheQuestion";
import VisionSection from "@/components/VisionSection";
import ServicesSection from "@/components/ServicesSection";
import DoctorsSection from "@/components/DoctorsSection";
import AppointmentBookingSection from "@/components/AppointmentBookingSection";
import Footer from "@/components/Footer";
import AppointmentModal from "@/components/AppointmentModal";
import PageTransition from "@/components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-[#F2E9DC] text-[#30291F] flex flex-col selection:bg-[#C9A581]/40 relative">
        {/* Fixed Navigation Bar (Desktop Top + Mobile Bottom + Floating WhatsApp) */}
        <Navbar />

        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. The Question (Kinetic Parallax Section) */}
        <TheQuestion />

        {/* 3. Vision Acuity Section */}
        <VisionSection />

        {/* 2. Treatments Section (Clean Cards with Background Image & Title Only) */}
        <ServicesSection />

        {/* 3. Doctors Section */}
        <DoctorsSection />

        {/* 4. Appointment Booking Section + Top Metrics Stats */}
        <AppointmentBookingSection />

        {/* 5. Clean Minimal Footer */}
        <Footer />

        {/* 5. Global Appointment Modal */}
        <AppointmentModal />
      </main>
    </PageTransition>
  );
}
