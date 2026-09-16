"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface PillarData {
  id: string;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  badge: string;
  statValue: string;
  statLabel: string;
}

export default function ScienceLifestyleSection() {
  const [activePillarIndex, setActivePillarIndex] = useState<number>(0);
  const [isStatementExpanded, setIsStatementExpanded] = useState<boolean>(false);
  const [isPillarDescExpanded, setIsPillarDescExpanded] = useState<boolean>(false);
  const [isRehabExpanded, setIsRehabExpanded] = useState<boolean>(false);
  const [isEquipmentExpanded, setIsEquipmentExpanded] = useState<boolean>(false);
  const [isDoctorsExpanded, setIsDoctorsExpanded] = useState<boolean>(false);

  // The 3 previous core hospital pillars
  const pillars: PillarData[] = [
    {
      id: "treatment",
      title: "Unique Eye Treatment",
      shortDesc: "NABH accredited hospital offering patient-first care & quality services.",
      detailedDesc:
        "Aarya Eye Care super speciality eye hospital is NABH accredited and offers highest level patient care and best quality services tailored to your unique visual needs.",
      badge: "NABH Accredited",
      statValue: "100 / 80",
      statLabel: "Visual Acuity",
    },
    {
      id: "equipment",
      title: "Modern Equipment",
      shortDesc: "Aided by modern diagnostic tools & state-of-the-art surgical equipment.",
      detailedDesc:
        "Aided by the most modern diagnostic tools and state-of-the-art surgical equipment, we strive to provide the best eye care facilities to our patients.",
      badge: "Advanced Tech",
      statValue: "0.1 mm",
      statLabel: "Laser Precision",
    },
    {
      id: "doctors",
      title: "Certified Doctors",
      shortDesc: "Panel of highly qualified, experienced & compassionate eye surgeons.",
      detailedDesc:
        "Our panel of highly qualified, experienced and compassionate doctors ensures the best quality care and comfort for our patients across all sub-specialities.",
      badge: "Expert Panel",
      statValue: "18+ Experts",
      statLabel: "Eye Surgeons",
    },
  ];

  // The 4 previous hospital highlights
  const highlights = [
    { title: "Modern Technology", desc: "Precision diagnostic & surgical suites" },
    { title: "NABH Certified Hospital", desc: "Gold standard quality & patient safety" },
    { title: "Personalized Eye Care", desc: "For all your vision needs" },
    { title: "Talented Eye Surgeons", desc: "Latest treatment modalities" },
  ];

  const activePillar = pillars[activePillarIndex];

  return (
    <section id="facilities" className="relative w-full bg-[#f8fafc] py-12 sm:py-16 md:py-20 px-3 sm:px-6 lg:px-8 overflow-hidden">
      {/* Feathered mask blend from hero bezel color to section 2 */}
      <div
        className="absolute top-0 left-0 right-0 h-28 sm:h-36 pointer-events-none z-0"
        style={{
          background:
            "linear-gradient(to bottom, #7dbd81 0%, #95ce99 25%, rgba(165, 214, 167, 0.45) 55%, rgba(165, 214, 167, 0.15) 75%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, black 0%, black 20%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 20%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10 space-y-6 sm:space-y-7">
        
        {/* 1. Header: Eyebrow + Main Headline + Collapsible Proactive Statement */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-3 border-b border-slate-200/80">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#9A4F3C]/10 text-[#9A4F3C] inline-flex items-center gap-1.5 border border-[#9A4F3C]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9A4F3C]" />
                Best Eye Hospital • NABH Certified
              </span>
              <span className="text-xs text-slate-500 font-medium hidden sm:inline">
                • Best Medical Advice at your Fingertips
              </span>
            </div>

            <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-slate-900 uppercase tracking-tight leading-none">
              Say farewell to blurred vision &amp; <span className="text-[#9A4F3C]">welcome the happier days.</span>
            </h2>
          </div>

          {/* Minimal Proactive Statement with Collapse Method */}
          <div className="bg-white rounded-2xl p-3 sm:p-3.5 border border-slate-200/90 shadow-xs max-w-md">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                <span className="w-4 h-4 text-[#9A4F3C] flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2L14.3 8.5L21 9.2L16 13.8L17.5 20.5L12 17L6.5 20.5L8 13.8L3 9.2L9.7 8.5L12 2Z" />
                  </svg>
                </span>
                <span>Proactive Vision Statement</span>
              </div>
              <button
                onClick={() => setIsStatementExpanded(!isStatementExpanded)}
                className="text-[11px] font-bold text-[#9A4F3C] hover:underline cursor-pointer flex items-center gap-0.5"
              >
                <span>{isStatementExpanded ? "Collapse ▴" : "Read More ▾"}</span>
              </button>
            </div>

            <p className="text-slate-600 text-xs mt-1 leading-relaxed">
              <strong className="text-slate-900 font-semibold">The best way to maintain healthy eyes is to be proactive!</strong>
              {isStatementExpanded && (
                <span className="block mt-1 text-[11.5px] text-slate-500 border-t border-slate-100 pt-1 animate-in fade-in duration-200">
                  Take charge of your vision with preventative screenings and advanced eye care designed for a lifetime of crystal-clear clarity. Aarya Eye Care super speciality hospital is NABH accredited and offers highest level patient care.
                </span>
              )}
            </p>
          </div>
        </div>

        {/* 2. Main Minimal Diagnostic Dashboard (Matching Reference Layout) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          
          {/* LEFT LARGE CARD: 3D Eye Model, Diagnosis Capsule & Acuity Status */}
          <div className="lg:col-span-7 bg-white rounded-[32px] p-5 sm:p-7 shadow-[0_10px_35px_rgba(15,23,42,0.06)] border border-slate-200/90 flex flex-col justify-between relative overflow-hidden group">
            
            {/* Top Bar: Title & Acuity Status Pill */}
            <div className="flex items-start justify-between gap-4 z-10">
              <div>
                <div className="flex items-center gap-2">
                  <div className="w-9 h-5 rounded-full bg-gradient-to-r from-sky-400 to-teal-400 flex items-center px-1">
                    <div className="w-3 h-3 rounded-full bg-white shadow-xs" />
                  </div>
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 tracking-tight">
                    Your eye lens diagnosis
                  </h3>
                </div>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">
                  {activePillar.title} • {activePillar.badge}
                </p>
              </div>

              {/* Status Pill (From reference: Eye lens 100/80) */}
              <div className="bg-slate-50/90 rounded-2xl p-2.5 sm:p-3 border border-slate-200/90 shadow-xs flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-teal-500/15 text-teal-700 flex items-center justify-center">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  </svg>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">
                    {activePillar.statLabel}
                  </span>
                  <span className="text-base sm:text-lg font-black text-slate-900 leading-none">
                    {activePillar.statValue}
                  </span>
                </div>
              </div>
            </div>

            {/* Center Area: 3D Eye Illustration + Left Pillar Capsule */}
            <div className="relative my-3 sm:my-5 py-2 flex items-center justify-center min-h-[220px] sm:min-h-[260px]">
              
              {/* Left Floating Pillar Capsule matching reference */}
              <div className="absolute left-0 z-20 max-w-[190px] sm:max-w-[220px] rounded-3xl p-3.5 sm:p-4 bg-gradient-to-r from-[#229ed9] via-[#38b6db] to-[#4ac7df] text-white shadow-lg shadow-sky-500/20 border border-white/20">
                <span className="text-[9px] font-extrabold uppercase tracking-widest bg-white/20 px-2 py-0.5 rounded-full inline-block mb-1">
                  {activePillar.badge}
                </span>
                <h4 className="font-bold text-sm sm:text-base leading-tight">
                  {activePillar.title}
                </h4>
                <p className="text-[10.5px] text-sky-100 mt-1 leading-snug line-clamp-2">
                  {activePillar.shortDesc}
                </p>

                {/* Dial indicator icons */}
                <div className="mt-2.5 pt-2 border-t border-white/20 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-white/25 flex items-center justify-center text-[10px]">
                    👁️
                  </span>
                  <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center text-[10px]">
                    ⚙️
                  </span>
                  <span className="w-6 h-6 rounded-full bg-white/15 flex items-center justify-center text-[10px]">
                    🩺
                  </span>
                </div>
              </div>

              {/* Centerpiece 3D Eye Graphic */}
              <div className="relative w-[280px] sm:w-[330px] h-[200px] sm:h-[235px] transition-transform duration-500 group-hover:scale-105">
                <Image
                  src="/diagnostics/diagnosis-hero-box.png"
                  alt="3D Human Eye Lens Anatomy and Diagnosis"
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 420px"
                  priority
                />
              </div>

            </div>

            {/* Bottom Controls Bar: Left/Right View switcher + Collapsible details */}
            <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2.5 z-10">
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    setActivePillarIndex((prev) => (prev === 0 ? pillars.length - 1 : prev - 1))
                  }
                  aria-label="Previous pillar"
                  className="w-8 h-8 rounded-full bg-slate-800 text-white hover:bg-[#9A4F3C] flex items-center justify-center text-xs transition-colors cursor-pointer"
                >
                  ←
                </button>

                <button
                  onClick={() =>
                    setActivePillarIndex((prev) => (prev === pillars.length - 1 ? 0 : prev + 1))
                  }
                  aria-label="Next pillar"
                  className="w-8 h-8 rounded-full bg-slate-800 text-white hover:bg-[#9A4F3C] flex items-center justify-center text-xs transition-colors cursor-pointer"
                >
                  →
                </button>

                <div className="flex items-center gap-1.5 ml-1">
                  {pillars.map((p, idx) => (
                    <button
                      key={p.id}
                      onClick={() => setActivePillarIndex(idx)}
                      className={`text-[11px] px-2.5 py-1 rounded-full font-semibold transition-all cursor-pointer ${
                        activePillarIndex === idx
                          ? "bg-slate-900 text-white"
                          : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                      }`}
                    >
                      {p.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Collapse Method Toggle for Pillar Description */}
              <button
                onClick={() => setIsPillarDescExpanded(!isPillarDescExpanded)}
                className="text-xs font-bold text-[#9A4F3C] hover:underline cursor-pointer flex items-center gap-1"
              >
                <span>{isPillarDescExpanded ? "Less Details ▴" : "More Details ▾"}</span>
              </button>
            </div>

            {/* Collapsed/Expanded Pillar Text */}
            {isPillarDescExpanded && (
              <div className="mt-2 pt-2 text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-200/80 animate-in fade-in duration-200">
                <strong className="text-slate-900 block font-semibold mb-0.5">{activePillar.title}:</strong>
                {activePillar.detailedDesc}
              </div>
            )}

          </div>

          {/* RIGHT COLUMN: Post Surgery Rehab Card + 2 Minimal Sub-Cards */}
          <div className="lg:col-span-5 flex flex-col gap-4 justify-between">
            
            {/* 1. Post Surgery Rehabilitation Card matching reference */}
            <div className="bg-slate-900 rounded-[28px] overflow-hidden relative p-5 text-white shadow-[0_10px_30px_rgba(15,23,42,0.10)] group min-h-[175px] flex flex-col justify-between">
              {/* Background Photo */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/diagnostics/rehab-eye.png"
                  alt="Post Surgery Rehabilitation Eye Examination"
                  fill
                  className="object-cover object-center opacity-85 group-hover:scale-105 transition-transform duration-700"
                  sizes="400px"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
              </div>

              {/* Card Header */}
              <div className="relative z-10">
                <span className="text-[10px] font-bold uppercase tracking-wider text-sky-300 block mb-1">
                  Rehabilitation &amp; Recovery
                </span>
                <h4 className="font-serif text-xl sm:text-2xl font-normal leading-tight text-white max-w-[220px]">
                  Post surgery rehabilitation
                </h4>
              </div>

              {/* Bottom Actions with Collapse Method */}
              <div className="relative z-10 flex items-center justify-between mt-4">
                <button
                  onClick={() => setIsRehabExpanded(!isRehabExpanded)}
                  className="px-3 py-1.5 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md border border-white/20 text-xs font-semibold text-white flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                >
                  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                  <span>{isRehabExpanded ? "Hide Plan ▴" : "View Plan ▾"}</span>
                </button>

                <Link
                  href="#appointment"
                  aria-label="Book Consultation"
                  className="w-8 h-8 rounded-full bg-black/60 hover:bg-[#9A4F3C] border border-white/20 text-white flex items-center justify-center text-xs transition-colors"
                >
                  →
                </Link>
              </div>

              {/* Collapsible Rehab Plan info */}
              {isRehabExpanded && (
                <div className="relative z-10 mt-3 pt-2.5 border-t border-white/20 text-[11px] text-slate-200 leading-relaxed bg-black/50 p-2.5 rounded-xl backdrop-blur-md animate-in fade-in duration-200">
                  Comprehensive post-operative follow-up schedule ensuring rapid corneal epithelial healing, intraocular pressure stabilization, and tailored refractive recovery.
                </div>
              )}
            </div>

            {/* 2. Sub-Cards (Side-by-Side): Modern Equipment & Certified Doctors */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              
              {/* Card 1: Modern Equipment (Slit Lamp visual) */}
              <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-2.5 bg-gradient-to-br from-sky-400 to-teal-400">
                    <Image
                      src="/diagnostics/astigmatism-lens.png"
                      alt="Modern Diagnostic Equipment"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="160px"
                    />
                  </div>
                  <h5 className="font-bold text-sm text-slate-900 group-hover:text-[#9A4F3C] transition-colors leading-tight">
                    Modern Equipment
                  </h5>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                    State-of-the-art surgical &amp; diagnostic suites.
                  </p>
                </div>

                {isEquipmentExpanded && (
                  <p className="text-[10.5px] text-slate-600 bg-slate-50 p-2 rounded-lg mt-2 border border-slate-100 animate-in fade-in duration-200">
                    Aided by the most modern diagnostic tools, OCT analyzers, and sutureless phaco instrumentation.
                  </p>
                )}

                <button
                  onClick={() => setIsEquipmentExpanded(!isEquipmentExpanded)}
                  className="text-[10.5px] font-bold text-[#9A4F3C] mt-2 text-left hover:underline cursor-pointer"
                >
                  {isEquipmentExpanded ? "Collapse ▴" : "Details ▾"}
                </button>
              </div>

              {/* Card 2: Certified Doctors (MRI / Labs visual) */}
              <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group">
                <div>
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-2.5 bg-black">
                    <Image
                      src="/diagnostics/mri-scan.png"
                      alt="Certified Doctors & Diagnostic Labs"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="160px"
                    />
                  </div>
                  <h5 className="font-bold text-sm text-slate-900 group-hover:text-[#9A4F3C] transition-colors leading-tight">
                    Certified Doctors
                  </h5>
                  <p className="text-[11px] text-slate-500 mt-0.5 leading-snug">
                    Decades of combined clinical mastery.
                  </p>
                </div>

                {isDoctorsExpanded && (
                  <p className="text-[10.5px] text-slate-600 bg-slate-50 p-2 rounded-lg mt-2 border border-slate-100 animate-in fade-in duration-200">
                    Panel of highly qualified, compassionate surgeons ensuring patient comfort and clinical excellence.
                  </p>
                )}

                <button
                  onClick={() => setIsDoctorsExpanded(!isDoctorsExpanded)}
                  className="text-[10.5px] font-bold text-[#9A4F3C] mt-2 text-left hover:underline cursor-pointer"
                >
                  {isDoctorsExpanded ? "Collapse ▴" : "Details ▾"}
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* 3. Minimal Strip: The 4 Hospital Highlights & Direct Action CTA */}
        <div className="pt-4 border-t border-slate-200/80 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          {/* 4 Minimal Highlight Tags */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 flex-1">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs"
              >
                <span className="w-5 h-5 rounded-full bg-[#10b981]/15 text-[#10b981] flex items-center justify-center flex-shrink-0 text-xs font-bold">
                  ✓
                </span>
                <div className="min-w-0">
                  <span className="text-xs font-bold text-slate-900 block truncate">
                    {item.title}
                  </span>
                  <span className="text-[10px] text-slate-500 block truncate">
                    {item.desc}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="flex items-center gap-3 self-end lg:self-center flex-shrink-0">
            <Link
              href="#doctors"
              className="text-xs font-semibold text-slate-700 hover:text-[#9A4F3C] transition-colors py-2 px-3 rounded-full hover:bg-white"
            >
              Meet Our Doctors →
            </Link>

            <Link
              href="#appointment"
              className="group inline-flex items-center gap-2.5 bg-[#9A4F3C] hover:bg-[#854231] text-white pl-4 pr-1.5 py-2 rounded-full text-xs font-semibold shadow-xs hover:shadow-md transition-all duration-200"
            >
              <span>Book Appointment</span>
              <span className="w-6 h-6 rounded-full bg-white text-[#9A4F3C] flex items-center justify-center text-xs">
                ↗
              </span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
