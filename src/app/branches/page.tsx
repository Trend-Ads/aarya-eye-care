import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CtaBanner from "@/components/CtaBanner";
import FAQSection from "@/components/FAQSection";
import AppointmentModal from "@/components/AppointmentModal";
import PageTransition from "@/components/PageTransition";
import { BRANCHES_DATA } from "@/data/branches";

export const metadata: Metadata = {
  title: "Our Hospital Branches | Aarya Eye Care Thrissur, Cherpu, Kunnamkulam, Kodungallur",
  description:
    "Find your nearest Aarya Eye Care center across Central Kerala. Click any branch to open live directions in Google Maps, or call our direct consultation lines.",
};

const BRANCH_FAQS = [
  {
    question: "Do all 4 branches perform eye surgeries?",
    answer: "Our Thrissur Main Hospital (near North Bus Stand) houses our major surgical suites, including our positive-pressure modular laminar airflow operation theatres, Blade-Free LASIK, and Trans-PRK suites. Our Cherpu, Kunnamkulam, and Kodungallur regional centers provide comprehensive outpatient consultations, computerized diagnostic testing, glaucoma/retina checkups, minor procedures, pre-operative workups, and post-operative follow-up care."
  },
  {
    question: "Are appointments mandatory before visiting a branch?",
    answer: "While walk-ins are always welcomed for emergency ocular complaints and general examinations, we recommend booking a prior appointment online or over the phone to guarantee zero waiting time with your preferred senior consultant ophthalmologist."
  },
  {
    question: "Are optical shops and prescription eyeglasses available at all branches?",
    answer: "Yes, every Aarya Eye Care branch features an in-house optical dispensing unit offering high-index anti-reflective computer lenses, progressive lenses, pediatric frames, and branded prescription sunglasses."
  },
  {
    question: "What should I do in an eye emergency outside normal working hours?",
    answer: "For severe eye trauma, chemical burns, sudden painful vision loss, or acute glaucoma crises, contact our 24/7 emergency hotline at +91 9946 322288 immediately or proceed directly to our Thrissur Main Hospital."
  }
];

// Clean, premium Lucide-style vector SVG icons
function MapPinIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ArrowUpRightIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export default function BranchesPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-[#F2E9DC] text-[#30291F] flex flex-col selection:bg-[#C9A581]/40 relative">
        <Navbar />

        {/* ─── STREAMLINED HEADER ─── */}
        <section className="w-full pt-28 sm:pt-36 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] sm:text-xs font-sans font-bold uppercase tracking-wider bg-[#30291F]/8 text-[#A55322] border border-[#A55322]/20 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#A55322] animate-pulse" />
            <span>4 Centers Across Central Kerala</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#30291F] font-bold tracking-tight">
            Our Hospital Branches
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-[#30291F]/70 mt-2.5 max-w-xl mx-auto leading-relaxed font-sans">
            Click any branch to open live navigation in Google Maps or contact our reception desk.
          </p>
        </section>

        {/* ─── 4 COMPACT BRANCH CARDS: 4 IN 1 ROW (PC), 2 PER ROW (MOBILE) ─── */}
        <section className="w-full bg-[#F2E9DC] pb-14 sm:pb-20 px-3 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5 items-stretch">
              {BRANCHES_DATA.map((branch, idx) => (
                <a
                  key={branch.id}
                  id={branch.id}
                  href={branch.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col justify-between rounded-2xl sm:rounded-3xl bg-white border border-[#C9A581]/35 hover:border-[#A55322] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
                  title={`Open ${branch.name} on Google Maps`}
                >
                  {/* Top Image Banner */}
                  <div className="relative w-full h-32 sm:h-40 md:h-44 overflow-hidden bg-black/10 shrink-0">
                    <Image
                      src={branch.image}
                      alt={branch.name}
                      fill
                      className="object-cover object-center group-hover:scale-108 transition-transform duration-700 ease-out"
                    />

                    {/* Gradient scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent group-hover:from-black/65 transition-colors" />

                    {/* Badge top-left */}
                    <div className="absolute top-2.5 left-2.5 z-10">
                      <span className="px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-sans font-bold uppercase tracking-wider bg-[#221C14]/90 text-[#C9A581] border border-[#C9A581]/30 backdrop-blur-md">
                        {branch.shortName}
                      </span>
                    </div>

                    {/* Index top-right */}
                    <div className="absolute top-2.5 right-2.5 z-10">
                      <span className="text-[10px] sm:text-xs font-sans font-bold text-white/90 bg-black/50 px-2 py-0.5 rounded-full backdrop-blur-sm border border-white/20">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Bottom Google Maps indicator on image */}
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10 flex items-center justify-between text-white text-[11px] sm:text-xs">
                      <span className="font-semibold text-white/95 truncate flex items-center gap-1.5 drop-shadow-sm font-sans">
                        <MapPinIcon className="w-3.5 h-3.5 text-[#F2E9DC]" />
                        <span>Open in Maps</span>
                      </span>
                      <ArrowUpRightIcon className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>

                  {/* Body: Full Title, Address with Pincode, and Both Phone Numbers */}
                  <div className="p-3.5 sm:p-4.5 flex-1 flex flex-col justify-between space-y-3">
                    <div className="space-y-2">
                      {/* Full Branch Title (wraps naturally over 2 lines) */}
                      <h2 className="font-serif font-bold text-sm sm:text-base text-[#30291F] group-hover:text-[#A55322] transition-colors leading-snug">
                        {branch.name}
                      </h2>

                      {/* Address & Pincode with sleek Location Icon */}
                      <div className="flex items-start gap-1.5 text-[11px] sm:text-xs text-[#30291F]/75 leading-relaxed font-sans">
                        <MapPinIcon className="w-3.5 h-3.5 text-[#A55322] shrink-0 mt-0.5" />
                        <div className="space-y-0.5">
                          {branch.addressLines.map((line, i) => (
                            <p key={i}>{line}</p>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Both Phone Numbers */}
                    <div className="pt-2.5 border-t border-[#C9A581]/25 flex flex-col gap-1 text-[11px] sm:text-[12px] font-sans">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-[#675E31] group-hover:text-[#A55322] transition-colors flex items-center gap-1.5 truncate">
                          <PhoneIcon className="w-3 h-3 text-[#A55322] shrink-0" />
                          <span>Ph: {branch.phoneLandline}</span>
                        </span>

                        <span className="px-2 py-0.5 rounded-full bg-[#A55322] text-white font-bold text-[9px] sm:text-[10px] shrink-0 group-hover:bg-[#8C4318] transition-colors shadow-2xs flex items-center gap-1">
                          <MapPinIcon className="w-2.5 h-2.5" />
                          <span>Maps</span>
                        </span>
                      </div>

                      <div className="font-semibold text-[#675E31] group-hover:text-[#A55322] transition-colors pl-4.5 truncate">
                        <span>{branch.phoneMobile}</span>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ─── BRANCHES FAQS ─── */}
        <FAQSection
          title="Frequently Asked Branch Questions"
          subtitle="Information on timings, doctor rotas, and emergency admission across our centers."
          faqs={BRANCH_FAQS}
        />

        {/* ─── CTA BANNER ─── */}
        <CtaBanner
          title="Have Questions or Need an Immediate Appointment?"
          tagline="CENTRALIZED CALL CENTER"
          description="Call our 24/7 hospital helpline at +91 9946 322288 or 0487 232 2288."
        />

        <Footer />
        <AppointmentModal />
      </main>
    </PageTransition>
  );
}
