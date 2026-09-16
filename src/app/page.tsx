import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import DoctorsSection from "@/components/DoctorsSection";
import AppointmentBookingSection from "@/components/AppointmentBookingSection";
import Footer from "@/components/Footer";
import AppointmentModal from "@/components/AppointmentModal";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col selection:bg-sky-200 relative">
      {/* Fixed Navigation Bar (Desktop Top + Mobile Bottom + Floating WhatsApp) */}
      <Navbar />

      {/* 1. Hero Section */}
      <HeroSection />

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
  );
}
