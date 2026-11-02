"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TREATMENTS } from "@/data/treatments";
import { FACILITIES } from "@/data/facilities";

export type MegaMenuType = "treatments" | "facilities";

interface NavMegaMenuProps {
  activeMenu: MegaMenuType;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  facilityOffset?: "left" | "center";
}

// Group treatments into clean clinical categories
const TREATMENT_GROUPS = [
  {
    category: "Refractive & Laser Surgery",
    badge: "Spectacle Freedom",
    slugs: ["lasik", "trans-prk"],
  },
  {
    category: "Cataract & Corneal Care",
    badge: "Clear Natural Optics",
    slugs: ["cataract", "cornea", "dry-eyes"],
  },
  {
    category: "Retina, Glaucoma & Oculoplasty",
    badge: "Advanced Tertiary Care",
    slugs: ["retina-and-uveitis", "glaucoma", "oculoplasty", "wart-tag-mole"],
  },
  {
    category: "Pediatric & Alignment",
    badge: "Child & Binocular Vision",
    slugs: ["pediatric-ophthalmology", "squint"],
  },
];

export default function NavMegaMenu({
  activeMenu,
  onClose,
  onMouseEnter,
  onMouseLeave,
  facilityOffset = "center",
}: NavMegaMenuProps) {
  const triggerAppointment = () => {
    onClose();
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-appointment-modal"));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -10, scale: 0.985 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8, scale: 0.985 }}
      transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="absolute top-full left-0 right-0 pt-3 z-50 pointer-events-auto"
    >
      {/* Invisible hover bridge to prevent closing across tiny pixel gap */}
      <div className="absolute -top-3 left-0 right-0 h-3" />

      {/* Main Container */}
      <div
        className={`mx-auto ${
          activeMenu === "facilities" ? "max-w-[520px]" : "max-w-[1120px]"
        } ${
          facilityOffset === "left" && activeMenu === "facilities"
            ? "md:-translate-x-28 lg:-translate-x-36"
            : ""
        } transition-all duration-300 rounded-[28px] sm:rounded-[32px] bg-[#221C14]/98 backdrop-blur-2xl border border-[#C9A581]/30 shadow-[0_30px_70px_rgba(15,12,8,0.7),0_0_1px_1px_rgba(201,165,129,0.2)] overflow-hidden text-[#F2E9DC]`}
      >
        {/* ========================================================= */}
        {/* 1. TREATMENTS DROPDOWN                                    */}
        {/* ========================================================= */}
        {activeMenu === "treatments" && (
          <div className="p-6 sm:p-7 lg:p-8 space-y-6">
            {/* Header Strip */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-5 border-b border-[#C9A581]/20 gap-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#A55322]/25 text-[#C9A581] border border-[#A55322]/40">
                    11 Super Specialities
                  </span>
                  <span className="text-[11px] text-[#C9A581]/80">
                    NABH Accredited Tertiary Center
                  </span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#F2E9DC] font-medium tracking-tight">
                  Comprehensive Eye Treatments & Laser Surgeries
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href="/treatments"
                  onClick={onClose}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C9A581] hover:text-white transition-colors group/link"
                >
                  <span>View All 11 Treatments</span>
                  <svg className="w-3.5 h-3.5 text-[#C9A581] group-hover/link:text-white transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                </Link>
                <button
                  type="button"
                  onClick={triggerAppointment}
                  className="rounded-full bg-[#A55322] hover:bg-[#8C4318] text-white text-xs font-bold px-3.5 py-1.5 transition-all shadow-sm cursor-pointer whitespace-nowrap"
                >
                  Book Eye Exam
                </button>
              </div>
            </div>

            {/* 4 Clinical Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {TREATMENT_GROUPS.map((group) => {
                const groupTreatments = TREATMENTS.filter((t) =>
                  group.slugs.includes(t.slug)
                );

                return (
                  <div key={group.category} className="space-y-3">
                    <div className="pb-1.5 border-b border-[#C9A581]/15">
                      <div className="text-[10px] uppercase font-bold tracking-wider text-[#C9A581]/80">
                        {group.badge}
                      </div>
                      <h4 className="text-xs font-bold text-[#F2E9DC] font-sans">
                        {group.category}
                      </h4>
                    </div>

                    <div className="space-y-1.5">
                      {groupTreatments.map((treatment) => (
                        <Link
                          key={treatment.slug}
                          href={`/treatments/${treatment.slug}`}
                          onClick={onClose}
                          className="group flex items-start gap-2.5 p-2 rounded-xl transition-all duration-200 hover:bg-white/[0.07] border border-transparent hover:border-[#C9A581]/25"
                        >
                          {/* Mini icon glyph */}
                          <div className="w-7 h-7 rounded-lg bg-[#30291F] border border-[#C9A581]/20 flex items-center justify-center shrink-0 group-hover:bg-[#A55322] group-hover:border-[#A55322] transition-colors mt-0.5">
                            <TreatmentGlyph slug={treatment.slug} />
                          </div>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-1">
                              <span className="text-xs font-bold text-[#F2E9DC] group-hover:text-white transition-colors truncate">
                                {treatment.name}
                              </span>
                              <svg className="w-3 h-3 text-[#8A875C] group-hover:text-[#A55322] group-hover:translate-x-0.5 transition-all shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></svg>
                            </div>
                            <span className="text-[10px] text-[#C9A581]/80 group-hover:text-[#F2E9DC]/90 transition-colors line-clamp-1 block">
                              {treatment.badge}
                            </span>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Strip */}
            <div className="pt-4 border-t border-[#C9A581]/15 flex flex-wrap items-center justify-between text-xs text-[#C9A581]/85 gap-3 bg-[#1A150F]/60 -mx-6 sm:-mx-7 lg:-mx-8 -mb-6 sm:-mb-7 lg:-mb-8 px-6 sm:px-7 lg:px-8 py-3.5">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                <span className="flex items-center gap-1.5 text-white/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                  Micro-Incision Phaco
                </span>
                <span className="hidden sm:inline text-[#C9A581]/40">•</span>
                <span className="flex items-center gap-1.5 text-white/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A55322]" />
                  Custom Contoura LASIK
                </span>
                <span className="hidden sm:inline text-[#C9A581]/40">•</span>
                <span className="flex items-center gap-1.5 text-white/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8A875C]" />
                  Zero Stitches & Same-Day Recovery
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-[11px] text-[#C9A581]/90">
                  Direct Helpline:{" "}
                  <strong className="text-white font-sans">0487 232 2288</strong>
                </span>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* 2. FACILITIES DROPDOWN - CLEAN & REFINED */}
        {activeMenu === "facilities" && (
          <div className="p-5 sm:p-6 space-y-3.5">
            {/* Clean, simple header */}
            <div className="flex items-center justify-between pb-3 border-b border-[#C9A581]/15">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#A55322]" />
                <h3 className="font-serif text-base sm:text-lg text-[#F2E9DC] font-medium tracking-tight">
                  Hospital Facilities
                </h3>
              </div>

              <Link
                href="/facilities"
                onClick={onClose}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C9A581] hover:text-white transition-colors group/link"
              >
                <span>View All Facilities</span>
                <svg className="w-3.5 h-3.5 text-[#C9A581] group-hover/link:text-white transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </Link>
            </div>

            {/* 4 Clean Facility Items (1 In A Row - Single Column) */}
            <div className="flex flex-col gap-2">
              {FACILITIES.map((facility) => (
                <Link
                  key={facility.slug}
                  href={`/facilities/${facility.slug}`}
                  onClick={onClose}
                  className="group flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.09] border border-[#C9A581]/15 hover:border-[#A55322]/60 transition-all duration-200"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-8.5 h-8.5 rounded-lg bg-[#30291F] border border-[#C9A581]/25 flex items-center justify-center shrink-0 group-hover:bg-[#A55322] group-hover:border-[#A55322] transition-colors">
                      <FacilityGlyph slug={facility.slug} />
                    </div>
                    <span className="text-xs sm:text-[13.5px] font-semibold text-[#F2E9DC] group-hover:text-white transition-colors truncate">
                      {facility.title}
                    </span>
                  </div>

                  <svg className="w-3.5 h-3.5 text-[#C9A581]/60 group-hover:text-[#A55322] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

// Crisp, bespoke SVG glyphs for treatments
function TreatmentGlyph({ slug }: { slug: string }) {
  switch (slug) {
    case "lasik":
      return (
        <svg className="w-3.5 h-3.5 text-[#C9A581] group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="3" />
          <line x1="12" y1="2" x2="12" y2="6" />
          <line x1="12" y1="18" x2="12" y2="22" />
          <line x1="2" y1="12" x2="6" y2="12" />
          <line x1="18" y1="12" x2="22" y2="12" />
        </svg>
      );
    case "trans-prk":
      return (
        <svg className="w-3.5 h-3.5 text-[#C9A581] group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      );
    case "cataract":
      return (
        <svg className="w-3.5 h-3.5 text-[#C9A581] group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <circle cx="12" cy="12" r="7" />
          <path d="M12 5a7 7 0 0 0-7 7" strokeDasharray="2 2" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      );
    case "cornea":
      return (
        <svg className="w-3.5 h-3.5 text-[#C9A581] group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case "dry-eyes":
      return (
        <svg className="w-3.5 h-3.5 text-[#C9A581] group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        </svg>
      );
    case "retina-and-uveitis":
      return (
        <svg className="w-3.5 h-3.5 text-[#C9A581] group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3a9 9 0 0 1 9 9" />
          <line x1="12" y1="12" x2="19" y2="7" />
          <circle cx="19" cy="7" r="1.5" fill="currentColor" />
        </svg>
      );
    case "glaucoma":
      return (
        <svg className="w-3.5 h-3.5 text-[#C9A581] group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" />
        </svg>
      );
    case "pediatric-ophthalmology":
      return (
        <svg className="w-3.5 h-3.5 text-[#C9A581] group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <circle cx="12" cy="12" r="9" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3" />
          <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3" />
        </svg>
      );
    case "squint":
      return (
        <svg className="w-3.5 h-3.5 text-[#C9A581] group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <circle cx="8" cy="12" r="5" />
          <circle cx="16" cy="12" r="5" />
        </svg>
      );
    case "oculoplasty":
      return (
        <svg className="w-3.5 h-3.5 text-[#C9A581] group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "wart-tag-mole":
      return (
        <svg className="w-3.5 h-3.5 text-[#C9A581] group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7z" />
        </svg>
      );
    default:
      return (
        <svg className="w-3.5 h-3.5 text-[#C9A581] group-hover:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}


// Clean SVG glyphs for hospital facilities
function FacilityGlyph({ slug }: { slug: string }) {
  switch (slug) {
    case "hospital-facilities":
      return (
        <svg className="w-4 h-4 text-[#C9A581] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 21h18" />
          <path d="M5 21V7l8-4v18" />
          <path d="M19 21V11l-6-3" />
          <path d="M9 9h1" />
          <path d="M9 13h1" />
          <path d="M9 17h1" />
        </svg>
      );
    case "corporate-empanelment":
      return (
        <svg className="w-4 h-4 text-[#C9A581] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case "insurance-facilities":
      return (
        <svg className="w-4 h-4 text-[#C9A581] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "lab":
      return (
        <svg className="w-4 h-4 text-[#C9A581] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M6 18h8" />
          <path d="M3 22h18" />
          <path d="M14 22a7 7 0 1 0-7-7h14" />
          <circle cx="9" cy="9" r="2" />
        </svg>
      );
    default:
      return (
        <svg className="w-4 h-4 text-[#C9A581] group-hover:text-white transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      );
  }
}
