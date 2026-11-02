import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import CtaBanner from "@/components/CtaBanner";
import FAQSection from "@/components/FAQSection";
import TreatmentTestimonials from "@/components/TreatmentTestimonials";
import AppointmentModal from "@/components/AppointmentModal";
import PageTransition from "@/components/PageTransition";
import { TREATMENTS } from "@/data/treatments";

export const metadata: Metadata = {
  title: "Treatments & Super Specialities | Aarya Eye Care Thrissur",
  description:
    "Explore our 11 advanced ophthalmic super specialities including Blade-Free LASIK, Micro-Incision Cataract, Trans-PRK, Vitreo-Retinal surgery, Glaucoma care, and pediatric ophthalmology.",
};

const GENERAL_TREATMENT_FAQS = [
  {
    question: "How do I know which vision correction procedure is right for me?",
    answer: "Every patient undergoes a thorough pre-refractive or surgical evaluation—including Sirius 3D corneal tomography, dilated retinal screening, and optical biometry. Based on your exact corneal thickness, lifestyle demands, and optical power, our senior surgeons recommend whether Blade-Free LASIK, Trans-PRK, or ICL is safest and most effective for you."
  },
  {
    question: "Are treatments done as outpatient day-care procedures?",
    answer: "Yes! Modern microsurgical techniques like phacoemulsification, blade-free laser vision correction, and intravitreal therapy are entirely sutureless and stitchless. Patients walk in and walk out within 2 to 3 hours, recovering comfortably at home the same day."
  },
  {
    question: "Do you offer cashless mediclaim for surgeries?",
    answer: "Yes, Aarya Eye Care is empaneled with all major health insurance providers and Third Party Administrators (TPAs) across India, facilitating seamless cashless hospitalization for eligible day-care procedures."
  },
  {
    question: "How can I book an initial consultation with a specialist?",
    answer: "You can book directly through our online appointment system, call our main helpline at +91 9946 322288, or visit any of our centers in Thrissur, Cherpu, Kunnamkulam, or Kodungallur."
  }
];

export default function TreatmentsPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-[#F2E9DC] text-[#30291F] flex flex-col selection:bg-[#C9A581]/40 relative">
        <Navbar />

        <SubpageHero
          badge="CLINICAL SUPER SPECIALITIES"
          tagline="11 Centers of Excellence"
          title="Advanced Ophthalmic Treatments &"
          titleAccent="Microsurgery"
          description="Combining international clinical protocols, sub-micron diagnostic precision, and compassionate surgical care to restore, protect, and enhance your vision."
          breadcrumbs={[{ label: "Treatments" }]}
          stats={[
            { value: "11+", label: "Super Specialities" },
            { value: "25k+", label: "Surgeries Performed" },
            { value: "100%", label: "NABH Protocol" },
          ]}
          ctaText="Book a Consultation"
        />

        {/* ─── TREATMENTS GRID ─── */}
        <section className="w-full bg-[#F2E9DC] py-10 sm:py-16 px-3 sm:px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-14">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#A55322]" />
                  <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.22em] text-[#A55322]">
                    SURGICAL &amp; MEDICAL CARE
                  </span>
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#30291F] tracking-tight">
                  Comprehensive Eye Care Services
                </h2>
              </div>
              <p className="text-sm sm:text-base text-[#30291F]/70 max-w-md font-sans">
                Each department is headed by senior fellowship-trained ophthalmic surgeons equipped with specialized diagnostic suites.
              </p>
            </div>

            {/* Grid of Treatment Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {TREATMENTS.map((treatment, idx) => (
                <article
                  key={treatment.slug}
                  className="group relative rounded-[2rem] overflow-hidden bg-white/70 hover:bg-white border border-[#C9A581]/30 hover:border-[#A55322]/40 shadow-sm hover:shadow-[0_20px_45px_rgba(48,41,31,0.12)] transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Card Visual Header */}
                  <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-[#30291F]/10">
                    <Image
                      src={treatment.heroImage}
                      alt={treatment.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                      <span className="px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-sans font-semibold uppercase tracking-wider bg-[#30291F]/70 backdrop-blur-md text-[#F2E9DC] border border-white/20">
                        {treatment.badge}
                      </span>
                      <span className="text-white/60 font-sans text-sm">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Title inside visual */}
                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-white group-hover:text-[#C9A581] transition-colors leading-snug">
                        {treatment.name}
                      </h3>
                      <p className="text-xs text-white/75 font-sans mt-0.5 line-clamp-1">
                        {treatment.tagline}
                      </p>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                    <p className="text-sm text-[#30291F]/80 font-sans leading-relaxed line-clamp-3">
                      {treatment.shortDesc}
                    </p>

                    {/* Key Highlights list */}
                    <ul className="space-y-2 pt-2 border-t border-[#C9A581]/20">
                      {treatment.keyHighlights.slice(0, 2).map((hl, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#30291F]/75 font-sans">
                          <span className="text-[#A55322] font-bold text-sm leading-none">•</span>
                          <span><strong>{hl.title}:</strong> {hl.description}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Bottom Action Link */}
                    <div className="pt-3 flex items-center justify-between">
                      <Link
                        href={`/treatments/${treatment.slug}`}
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#A55322] group-hover:text-[#8C4318] transition-colors"
                      >
                        <span>View Procedure &amp; FAQs</span>
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                      </Link>

                      <Link
                        href={`/treatments/${treatment.slug}`}
                        className="w-9 h-9 rounded-full bg-[#30291F]/8 group-hover:bg-[#A55322] text-[#30291F] group-hover:text-white flex items-center justify-center transition-all duration-300"
                        aria-label={`Learn more about ${treatment.name}`}
                      >
                        <svg className="w-3.5 h-3.5 text-current transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <line x1="7" y1="17" x2="17" y2="7" />
                          <polyline points="7 7 17 7 17 17" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─── PATIENT REVIEWS & TESTIMONIALS (AUTO-MOVING MARQUEE) ─── */}
        <TreatmentTestimonials
          treatmentName="All Eye Care Treatments"
          badge="Verified Patient Experiences"
        />

        {/* ─── GENERAL FAQS ─── */}
        <FAQSection
          title="Frequently Asked Treatment Questions"
          subtitle="Everything you need to know about preparing for treatment, safety, and consultations."
          faqs={GENERAL_TREATMENT_FAQS}
        />

        {/* ─── CTA BANNER ─── */}
        <CtaBanner
          title="Need Guidance on the Best Treatment for Your Eyes?"
          tagline="BOOK WITH OUR SENIOR SPECIALISTS"
          description="Our clinical team in Thrissur conducts detailed diagnostic mapping before creating a customized treatment plan for you."
        />

        <Footer />
        <AppointmentModal />
      </main>
    </PageTransition>
  );
}
