import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import CtaBanner from "@/components/CtaBanner";
import FAQSection from "@/components/FAQSection";
import AppointmentModal from "@/components/AppointmentModal";
import PageTransition from "@/components/PageTransition";
import { FACILITIES } from "@/data/facilities";

export const metadata: Metadata = {
  title: "Hospital Facilities, Tech & Insurance | Aarya Eye Care Thrissur",
  description:
    "Explore our world-class medical infrastructure: Optical Biometer OA-2000, REVO Spectral OCT, Modular OTs, Cashless Insurance TPAs, Corporate Empanelment, and Diagnostic Lab.",
};

const GENERAL_FACILITY_FAQS = [
  {
    question: "Are your operation theatres equipped with laminar airflow HEPA filters?",
    answer: "Yes, our modular operation theatres feature positive-pressure laminar airflow passing through multi-stage HEPA filters, ensuring complete sterile compliance and virtually zero surgical site infections."
  },
  {
    question: "Do you have cashless mediclaim tie-ups with private health insurance companies?",
    answer: "Yes! Aarya Eye Care is empaneled with all major TPAs and private health insurance companies including Star Health, Medi Assist, Vidal, MD India, Heritage, ICICI Lombard, Niva Bupa, and Care Health."
  },
  {
    question: "Can companies organize on-site eye checkup camps for their employees?",
    answer: "Absolutely. Our Corporate Empanelment wing conducts on-site automated visual screening camps with portable diagnostic units for IT parks, banking institutions, government bodies, and factories across Central Kerala."
  },
  {
    question: "Is the Aarya Institute of Optometry open to student admissions?",
    answer: "Yes, Aarya Institute of Optometry (affiliated to B.S.S., Govt. of India) invites admissions annually for diploma courses in optometry and ophthalmic assistance."
  }
];

export default function FacilitiesPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-[#F2E9DC] text-[#30291F] flex flex-col selection:bg-[#C9A581]/40 relative">
        <Navbar />

        <SubpageHero
          badge="WORLD-CLASS INFRASTRUCTURE"
          tagline="Engineering & Care"
          title="Hospital Facilities, Technology &"
          titleAccent="Patient Services"
          description="Aarya Eye Care combines international clinical diagnostic suites from Japan and Europe with positive-pressure sterile modular operation theatres and dedicated insurance desks."
          breadcrumbs={[{ label: "Facilities" }]}
          stats={[
            { value: "HEPA", label: "Laminar Flow OTs" },
            { value: "30+", label: "Insurance TPAs" },
            { value: "Govt. B.S.S.", label: "Optometry Institute" },
          ]}
          ctaText="Explore Our Hospital"
        />

        {/* ─── 4 CORE FACILITY SECTORS ─── */}
        <section className="w-full bg-[#F2E9DC] py-10 sm:py-16 px-3 sm:px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {FACILITIES.map((facility, idx) => (
                <article
                  key={facility.slug}
                  className="rounded-[2.25rem] bg-white/75 hover:bg-white border border-[#C9A581]/35 hover:border-[#A55322]/40 shadow-sm hover:shadow-[0_20px_45px_rgba(48,41,31,0.12)] transition-all duration-300 overflow-hidden flex flex-col justify-between group"
                >
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#30291F]/10">
                    <Image
                      src={facility.heroImage}
                      alt={facility.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10" />

                    {/* Top Badges */}
                    <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10">
                      <span className="px-3.5 py-1 rounded-full text-[10px] sm:text-[11px] font-sans font-semibold uppercase tracking-wider bg-[#30291F]/70 backdrop-blur-md text-[#F2E9DC] border border-white/20">
                        {facility.badge}
                      </span>
                      <span className="text-white/60 font-sans text-sm">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Title inside visual */}
                    <div className="absolute bottom-5 left-5 right-5 z-10">
                      <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white group-hover:text-[#C9A581] transition-colors leading-snug">
                        {facility.title}
                      </h3>
                      <p className="text-xs text-white/75 font-sans mt-0.5 line-clamp-1">
                        {facility.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="p-7 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                    <p className="text-sm sm:text-[15px] text-[#30291F]/80 font-sans leading-relaxed">
                      {facility.shortDesc}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-[#C9A581]/25">
                      <span className="text-xs font-sans font-bold uppercase text-[#A55322] tracking-wider block mb-1.5">
                        Key Features &amp; Equipment
                      </span>
                      {facility.highlights.slice(0, 3).map((hl, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#30291F]/75 font-sans">
                          <svg className="w-3.5 h-3.5 text-[#675E31] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 flex items-center justify-between border-t border-[#C9A581]/20">
                      <Link
                        href={`/facilities/${facility.slug}`}
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#A55322] group-hover:text-[#8C4318] transition-colors"
                      >
                        <span>Explore Sector Details &amp; Equipment</span>
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                      </Link>

                      <Link
                        href={`/facilities/${facility.slug}`}
                        className="w-10 h-10 rounded-full bg-[#30291F]/8 group-hover:bg-[#A55322] text-[#30291F] group-hover:text-white flex items-center justify-center transition-all duration-300"
                        aria-label={`View ${facility.title}`}
                      >
                        <svg className="w-4 h-4 text-current transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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

        {/* ─── CASHLESS TPA LOGO PREVIEW STRIP ─── */}
        <section className="w-full bg-[#FAF6F0] py-12 px-3 sm:px-6 lg:px-10 border-y border-[#C9A581]/25">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="text-center space-y-1">
              <span className="text-[11px] font-sans font-bold uppercase tracking-[0.22em] text-[#A55322]">
                SEAMLESS CASHLESS REIMBURSEMENT
              </span>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-[#30291F]">
                Empaneled with Leading Health Insurers &amp; TPAs Across India
              </h2>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-3">
              {FACILITIES.find((f) => f.slug === "insurance-facilities")?.partnerLogos?.slice(0, 9).map((p, idx) => (
                <div
                  key={idx}
                  className="rounded-xl p-2.5 bg-white border border-[#C9A581]/25 shadow-xs flex items-center justify-center aspect-[3/2] hover:border-[#A55322]/40 transition-colors"
                  title={p.name}
                >
                  <div className="relative w-full h-10">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-contain p-1"
                      sizes="100px"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/facilities/insurance-facilities"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#A55322] hover:text-[#8C4318] transition-colors"
              >
                <span>View all 17+ empaneled TPAs &amp; cashless procedure guide</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* ─── GENERAL FAQS ─── */}
        <FAQSection
          title="Hospital Infrastructure & Services FAQs"
          subtitle="Answers to common questions regarding our equipment, admission, and cashless insurance."
          faqs={GENERAL_FACILITY_FAQS}
        />

        {/* ─── CTA BANNER ─── */}
        <CtaBanner
          title="Experience Advanced Clinical Infrastructure"
          tagline="PATIENT SAFETY FIRST"
          description="Visit our NABH-accredited facilities in Thrissur or consult our specialist teams across all branches."
        />

        <Footer />
        <AppointmentModal />
      </main>
    </PageTransition>
  );
}
