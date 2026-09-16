"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ServiceItem {
  id: string;
  name: string;
  category: string;
  shortDesc: string;
  detailedDesc: string;
  features: string[];
  icon: string;
}

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services: ServiceItem[] = [
    {
      id: "cataract",
      name: "Cataract",
      category: "Microsurgical",
      shortDesc: "Micro-incision phacoemulsification with premium robotic IOL implants.",
      detailedDesc:
        "State-of-the-art sutureless cataract surgery restoring youthful vision through monofocal, multifocal, toric, and extended-depth-of-focus (EDOF) intraocular lenses.",
      features: ["Micro-incision phaco", "Toric & Multifocal IOLs", "Same-day recovery", "Blade-free precision"],
      icon: "👁️",
    },
    {
      id: "lasik",
      name: "LASIK",
      category: "Refractive",
      shortDesc: "100% blade-free CustomContoura laser vision correction.",
      detailedDesc:
        "Say goodbye to glasses and contact lenses with high-precision topography-guided laser treatments including Femto-LASIK, SMILE, and PRK.",
      features: ["CustomContoura topography", "100% blade-free femtosecond", "Pain-free 10-min procedure", "Rapid 24-hr visual recovery"],
      icon: "✨",
    },
    {
      id: "retina",
      name: "Retina & Uveitis",
      category: "Surgical & Medical",
      shortDesc: "Comprehensive vitreo-retinal surgery and ocular inflammation care.",
      detailedDesc:
        "Specialized management of diabetic retinopathy, retinal detachment, macular degeneration (AMD), and complex uveitic ocular autoimmune conditions.",
      features: ["25G/27G Vitrectomy", "Anti-VEGF intravitreal therapy", "Retinal laser photocoagulation", "Immunosuppressive uveitis management"],
      icon: "🔬",
    },
    {
      id: "glaucoma",
      name: "Glaucoma",
      category: "Diagnostic & Surgical",
      shortDesc: "Early optic nerve protection and pressure management.",
      detailedDesc:
        "Advanced glaucoma screening utilizing OCT ganglion cell analysis, automated perimetry, and surgical interventions including trabeculectomy and MIGS.",
      features: ["Selective Laser Trabeculoplasty (SLT)", "OCT Nerve Fiber Analysis", "Automated Visual Field Tests", "Micro-Invasive Glaucoma Surgery (MIGS)"],
      icon: "🎯",
    },
    {
      id: "cornea",
      name: "Cornea",
      category: "Transplants & Diseases",
      shortDesc: "Corneal grafting, cross-linking, and ocular surface restoration.",
      detailedDesc:
        "Specialized cornea clinic providing full and partial thickness transplants (DMEK, DSAEK, PKP), keratoconus collagen cross-linking (C3R), and pterygium excision.",
      features: ["DMEK / DSAEK endothelial keratoplasty", "C3R Cross-linking for Keratoconus", "Amniotic membrane grafting", "Corneal ulcer & trauma management"],
      icon: "🛡️",
    },
    {
      id: "dry-eyes",
      name: "Dry Eyes",
      category: "Therapeutic & Spa",
      shortDesc: "Advanced tear film diagnostics and LipiFlow thermal pulsation.",
      detailedDesc:
        "Targeted relief from burning, grittiness, and digital eye strain with non-invasive meibomian gland imaging, intense pulsed light (IPL), and punctal plugs.",
      features: ["Non-invasive tear film analysis", "IPL / LipiFlow thermal pulsation", "Autologous serum eye drops", "Punctal occlusion therapy"],
      icon: "💧",
    },
    {
      id: "squint",
      name: "Squint",
      category: "Pediatric & Strabismus",
      shortDesc: "Precise ocular alignment for children and adults.",
      detailedDesc:
        "Correction of misaligned eyes (strabismus) to restore single binocular vision, depth perception, and facial symmetry via tailored muscle adjustments.",
      features: ["Custom muscle recession & resection", "Adjustable suture technique", "Amblyopia (lazy eye) therapy", "Prism lens optical correction"],
      icon: "👀",
    },
    {
      id: "oculoplasty",
      name: "Oculoplasty",
      category: "Aesthetics & Reconstruction",
      shortDesc: "Cosmetic and reconstructive eyelid and facial surgery.",
      detailedDesc:
        "Eyelid ptosis repair, blepharoplasty, tear duct surgery (DCR), and orbital reconstruction combining ophthalmic safety with aesthetic precision.",
      features: ["Ptosis (drooping lid) repair", "Cosmetic upper & lower blepharoplasty", "Endonasal DCR for watery eyes", "Orbital fracture & tumor care"],
      icon: "⭐",
    },
  ];

  const filteredServices =
    activeTab === "all" ? services : services.filter((s) => s.id === activeTab);

  return (
    <section
      id="treatments"
      className="w-full bg-gradient-to-b from-[#eaf3fc] via-[#f3f8fd] to-[#ffffff] py-16 sm:py-20 md:py-24 px-3 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 1. Header Row (Editorial Serif Title + Customize pill + Luxury/Accredited Badge) */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 sm:pb-10 border-b border-sky-200/60">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-normal text-slate-900 tracking-tight leading-none">
              Intelligent style comfort
            </h2>
            
            {/* Customize / Explore Pill Button matching reference */}
            <button
              onClick={() => setActiveTab(activeTab === "all" ? "cataract" : "all")}
              className="px-3.5 py-1.5 rounded-full border border-slate-300 bg-white/90 hover:bg-white text-xs font-semibold text-slate-800 shadow-xs hover:shadow transition-all inline-flex items-center gap-1.5 cursor-pointer"
            >
              <span>{activeTab === "all" ? "Specialities" : "Show All"}</span>
              <span className="text-slate-400 font-bold">+</span>
            </button>
          </div>

          {/* Right Badge: Luxury in Every Look / Super Speciality Care */}
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-sky-200/80 shadow-xs text-xs font-medium text-slate-700">
            <svg
              className="w-4 h-4 text-sky-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M3 12h1m16 0h1M12 3v1m0 16v1m-6.36-2.64.7-.7m9.9 0 .7.7m0-11.32-.7.7m-9.9 0-.7-.7" />
            </svg>
            <span>Super Speciality in Every Care</span>
          </div>
        </div>

        {/* 2. Interactive Service Pills Bar (Cornea, Squint, Oculoplasty, Glaucoma, Dry Eyes, Cataract, LASIK, Retina) */}
        <div className="flex items-center gap-2 py-6 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
              activeTab === "all"
                ? "bg-[#9A4F3C] text-white shadow-sm"
                : "bg-white/80 hover:bg-white text-slate-700 border border-slate-200"
            }`}
          >
            All Specialities (8)
          </button>

          {services.map((svc) => (
            <button
              key={svc.id}
              onClick={() => setActiveTab(svc.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                activeTab === svc.id
                  ? "bg-[#9A4F3C] text-white shadow-sm"
                  : "bg-white/80 hover:bg-white text-slate-700 border border-slate-200/90"
              }`}
            >
              <span>{svc.icon}</span>
              <span>{svc.name}</span>
            </button>
          ))}
        </div>

        {/* 3. Reference Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 mt-2">
          
          {/* Card 1 (Left Tall Card with chamfered top-left corner): Glasses Preview Mode & LASIK */}
          <div className="lg:col-span-4 bg-white rounded-[26px] p-5 sm:p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] border border-slate-200/90 relative flex flex-col justify-between overflow-hidden group hover:shadow-lg transition-all duration-300 [clip-path:polygon(32px_0%,100%_0%,100%_100%,0%_100%,0%_32px)]">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-slate-900 leading-tight">
                Glasses &amp; Lens <br />
                Preview Mode
              </h3>
              <p className="text-xs text-slate-500 mt-1 font-medium">
                Digital pupillometry, corneal topography &amp; titanium eyewear preview.
              </p>
            </div>

            {/* Centerpiece Pedestal with Glasses */}
            <div className="relative w-full aspect-[4/4.5] my-4 rounded-2xl overflow-hidden bg-slate-50">
              <Image
                src="/images/glasses-pedestal.jpg"
                alt="Glasses Preview on Marble Pedestal"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 380px"
              />
            </div>

            {/* Bottom Tag */}
            <div className="flex items-center justify-between pt-2 border-t border-slate-100">
              <span className="text-[11px] font-bold tracking-wider uppercase text-[#9A4F3C]">
                Cataract &amp; LASIK Suites
              </span>
              <span className="text-xs font-semibold text-slate-700 hover:text-[#9A4F3C] transition-colors cursor-pointer">
                Explore Lenses →
              </span>
            </div>
          </div>

          {/* Card 2 (Middle-Left Vertical Card with chamfered corners): Close-up Eye & Caring for vision */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <div className="bg-white rounded-[26px] overflow-hidden shadow-[0_10px_30px_rgba(15,23,42,0.06)] border border-slate-200/90 flex flex-col h-full [clip-path:polygon(28px_0%,100%_0%,100%_calc(100%-28px),calc(100%-28px)_100%,0%_100%,0%_28px)] group">
              {/* Top Photo with Eye Close-up & Glowing Play Button */}
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src="/images/eye-closeup.jpg"
                  alt="Crystal clear vision eye close-up"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 320px"
                />

                {/* Glowing Center Play Button from reference */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setActiveTab("retina")}
                    aria-label="Inspect vision test"
                    className="w-12 h-12 rounded-full bg-[#1877F2] text-white flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110 active:scale-95 cursor-pointer"
                  >
                    <svg
                      className="w-5 h-5 fill-current translate-x-0.5"
                      viewBox="0 0 24 24"
                    >
                      <polygon points="5 3 19 12 5 21 5 3" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Bottom White Area: Caring for your vision */}
              <div className="p-5 flex flex-col justify-between flex-1 bg-white">
                <p className="font-serif text-lg sm:text-xl text-slate-900 leading-snug font-normal">
                  Caring for your vision, one Test at a time
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100">
                  <Link
                    href="#appointment"
                    className="text-xs font-bold tracking-wider uppercase text-slate-800 underline underline-offset-4 hover:text-[#9A4F3C] transition-colors"
                  >
                    GET TESTED &gt;
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 2 Top Feature Cards + 1 Bottom Wide Banner */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5 justify-between">
            
            {/* Top Row: 2 White Feature Cards (BLB & Anti-reflective / Glaucoma & Cornea) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Feature Card 1: BLB / Dry Eyes & Digital Strain */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-[0_4px_16px_rgba(15,23,42,0.05)] border border-slate-200/90 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center gap-2 mb-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#0d2238] text-white flex items-center justify-center text-xs">
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2m0 16v2M2 12h2m16 0h2" />
                      </svg>
                    </div>
                    <span className="font-bold text-xs sm:text-[13px] text-slate-900">
                      BLB ⌄
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    Protect your eyes from <strong className="text-slate-900 font-semibold">digital strain</strong> &amp; dry ocular surface.
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab("dry-eyes")}
                  className="text-[11px] font-bold text-[#9A4F3C] mt-3 text-left hover:underline cursor-pointer"
                >
                  Dry Eyes Care →
                </button>
              </div>

              {/* Feature Card 2: Anti-reflective / Glaucoma & Oculoplasty */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-[0_4px_16px_rgba(15,23,42,0.05)] border border-slate-200/90 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center gap-2 mb-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#0d2238] text-white flex items-center justify-center text-xs">
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                      </svg>
                    </div>
                    <span className="font-bold text-xs sm:text-[13px] text-slate-900">
                      Anti-reflective ⌄
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    <strong className="text-slate-900 font-semibold">Blue light blocking</strong> lenses &amp; optic nerve pressure filters.
                  </p>
                </div>
                <button
                  onClick={() => setActiveTab("glaucoma")}
                  className="text-[11px] font-bold text-[#9A4F3C] mt-3 text-left hover:underline cursor-pointer"
                >
                  Glaucoma Care →
                </button>
              </div>
            </div>

            {/* Bottom Wide Banner Card matching reference layout */}
            <div className="bg-[#1877F2] rounded-[26px] p-5 sm:p-6 text-white shadow-[0_12px_32px_rgba(24,119,242,0.30)] flex items-center justify-between overflow-hidden relative group">
              <div className="max-w-[62%] sm:max-w-[65%] z-10">
                <h4 className="font-serif text-xl sm:text-2xl lg:text-[26px] font-normal leading-tight">
                  Your look instantly with our real-time
                </h4>
                
                {/* Pill CTA button with arrow from reference */}
                <div className="mt-4 sm:mt-5">
                  <Link
                    href="#appointment"
                    className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-slate-50 px-4 py-2 rounded-full text-xs font-semibold shadow-md transition-transform duration-200 hover:scale-105 active:scale-95"
                  >
                    <span className="w-4 h-4 rounded-full bg-[#1877F2] text-white flex items-center justify-center text-[10px]">
                      ↗
                    </span>
                    <span>Eco-conscious materials</span>
                  </Link>
                </div>
              </div>

              {/* Right Cutout Photo of smiling person with glasses */}
              <div className="relative w-28 sm:w-36 md:w-40 aspect-square rounded-2xl overflow-hidden shadow-lg border-2 border-white/30 flex-shrink-0">
                <Image
                  src="/images/glasses-banner-model.jpg"
                  alt="Patient smiling with precision eyewear"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="160px"
                />
              </div>
            </div>

          </div>

        </div>

        {/* 4. Complete 8-Service Catalog Directory */}
        <div className="mt-12 sm:mt-16 pt-10 border-t border-sky-200/70">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#9A4F3C]">
                Clinical Directory
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-900 uppercase tracking-tight">
                All 8 Super Speciality Treatments
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 max-w-md">
              NABH-accredited surgical facilities and experienced ophthalmologists dedicated to your complete visual health.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredServices.map((service) => {
              const isSelected = selectedService === service.id;
              return (
                <div
                  key={service.id}
                  onClick={() => setSelectedService(isSelected ? null : service.id)}
                  className={`bg-white rounded-2xl p-4 sm:p-5 border transition-all duration-200 cursor-pointer flex flex-col justify-between group ${
                    isSelected
                      ? "border-[#9A4F3C] shadow-md ring-1 ring-[#9A4F3C]"
                      : "border-slate-200/90 shadow-xs hover:shadow-md hover:border-slate-300"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl">{service.icon}</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        {service.category}
                      </span>
                    </div>

                    <h4 className="font-bold text-base text-slate-900 group-hover:text-[#9A4F3C] transition-colors">
                      {service.name}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed mt-1.5">
                      {service.shortDesc}
                    </p>

                    {isSelected && (
                      <div className="mt-3 pt-3 border-t border-slate-100">
                        <p className="text-[11px] text-slate-500 leading-relaxed">
                          {service.detailedDesc}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {service.features.map((feat, fidx) => (
                            <span
                              key={fidx}
                              className="text-[9.5px] bg-slate-50 border border-slate-200 px-1.5 py-0.5 rounded text-slate-700"
                            >
                              ✓ {feat}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] font-bold text-[#9A4F3C]">
                      {isSelected ? "Less Details ▴" : "View Details ▾"}
                    </span>
                    <Link
                      href="#appointment"
                      onClick={(e) => e.stopPropagation()}
                      className="text-xs text-slate-400 hover:text-slate-900 transition-colors"
                    >
                      Book →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
