"use client";

import { useState, useRef, useEffect, useCallback, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

export interface ServiceItem {
  id: string;
  name: string;
  category: string;
  shortDesc: string;
  detailedDesc: string;
  features: string[];
  iconType: "cataract" | "lasik" | "retina" | "glaucoma" | "cornea" | "dry-eyes" | "squint" | "oculoplasty";
  badge: string;
}

// Professional Clinical & Ophthalmology Vector SVG Icons
export function ServiceClinicalIcon({
  type,
  className = "w-5 h-5",
}: {
  type: ServiceItem["iconType"];
  className?: string;
}) {
  switch (type) {
    case "cataract":
      // Intraocular Lens (IOL) with C-loop haptics & crystalline light rays
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12C3.8 7.5 7.5 4.5 12 4.5C16.5 4.5 20.2 7.5 22 12C20.2 16.5 16.5 19.5 12 19.5C7.5 19.5 3.8 16.5 2 12Z" />
          <ellipse cx="12" cy="12" rx="4.2" ry="4.2" className="fill-current/10" />
          <path d="M8.5 9.5C7.2 7.5 7 5.5 8.5 4.5" />
          <path d="M15.5 14.5C16.8 16.5 17 18.5 15.5 19.5" />
          <circle cx="12" cy="12" r="1.5" className="fill-current" />
        </svg>
      );
    case "lasik":
      // High-precision laser emitter focusing onto corneal stroma crosshair
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 15C5 9 8.2 6 12 6C15.8 6 19 9 21 15" />
          <circle cx="12" cy="13" r="3.2" strokeDasharray="1.5 1.5" />
          <circle cx="12" cy="13" r="1.2" className="fill-current" />
          <path d="M12 2V6" strokeWidth="2.2" />
          <path d="M7.5 3.5L9.5 5.5" />
          <path d="M16.5 3.5L14.5 5.5" />
          <path d="M4 19H20" strokeDasharray="2 2" />
        </svg>
      );
    case "retina":
      // Vitreo-retinal fundus, optic disc & branching microvascular tree
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <circle cx="8" cy="12" r="2.2" className="fill-current/15" />
          <path d="M8 9.8C8.5 7.5 10.5 6 13 6C14.5 6 16.5 7 17.5 8.5" />
          <path d="M13 6L14 4" />
          <path d="M8 14.2C8.8 16.2 10.8 18 13.5 18C15 18 17 17 18 15.5" />
          <path d="M13.5 18L14.5 20" />
          <circle cx="15" cy="12" r="1.5" className="fill-current" />
          <circle cx="15" cy="12" r="3.2" strokeDasharray="1.5 1.5" />
        </svg>
      );
    case "glaucoma":
      // Intraocular pressure gauge / optic cup perimetry target
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 14.5A8.5 8.5 0 1 1 19.5 14.5" />
          <circle cx="12" cy="12" r="5" strokeDasharray="2 2" />
          <circle cx="12" cy="12" r="2.5" />
          <path d="M12 12L15.5 8.5" strokeWidth="2.2" />
          <circle cx="12" cy="12" r="1" className="fill-current" />
          <path d="M7 17L5 19" />
          <path d="M17 17L19 19" />
          <path d="M12 19V21" />
        </svg>
      );
    case "cornea":
      // Multilayer corneal dome shield & optical clarity arc
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 13C3.5 7.5 7.3 3.5 12 3.5C16.7 3.5 20.5 7.5 21 13" />
          <path d="M5.5 14C6 9.5 8.8 6.2 12 6.2C15.2 6.2 18 9.5 18.5 14" strokeDasharray="2 1.5" />
          <path d="M8 15C8.4 12 10.1 9.5 12 9.5C13.9 9.5 15.6 12 16 15" />
          <path d="M9 6.5L10.5 8" />
          <path d="M13.5 5.5L14.5 7" />
          <path d="M2 17.5C4.5 19 8 20 12 20C16 20 19.5 19 22 17.5" />
        </svg>
      );
    case "dry-eyes":
      // Lacrimal tear film droplet & lipid layer hydration waves
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2.5C12 2.5 7 8.5 7 12.5C7 15.3 9.2 17.5 12 17.5C14.8 17.5 17 15.3 17 12.5C17 8.5 12 2.5 12 2.5Z" className="fill-current/10" />
          <path d="M4 18.5C6.5 17.5 9 17.5 12 18.5C15 19.5 17.5 19.5 20 18.5" />
          <path d="M6 21.5C8 20.8 10 20.8 12 21.5C14 22.2 16 22.2 18 21.5" />
          <path d="M10 11C10 9.8 10.8 8.8 12 8" strokeWidth="1.5" />
        </svg>
      );
    case "squint":
      // Binocular optical alignment & convergence axes
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 12C3 9 5.5 7 8 7C10.5 7 13 9 14 12C13 15 10.5 17 8 17C5.5 17 3 15 2 12Z" />
          <circle cx="8" cy="12" r="2.5" className="fill-current/15" />
          <circle cx="8" cy="12" r="1" className="fill-current" />
          <path d="M10 12C11 9 13.5 7 16 7C18.5 7 21 9 22 12C21 15 18.5 17 16 17C13.5 17 11 15 10 12Z" />
          <circle cx="16" cy="12" r="2.5" className="fill-current/15" />
          <circle cx="16" cy="12" r="1" className="fill-current" />
          <path d="M8 3.5L12 6.5L16 3.5" strokeWidth="1.5" />
          <path d="M12 6.5V9.5" strokeDasharray="1.5 1.5" />
          <path d="M5 20H19" strokeDasharray="2 2" />
        </svg>
      );
    case "oculoplasty":
      // Oculofacial contour & eyelid aesthetic curve
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 13C4 7.5 8 4.5 13 4.5C17.5 4.5 20.5 7 22 11" />
          <path d="M2 13C4.5 17 8.5 19.5 13 19.5C17.5 19.5 20.5 16.5 22 11" />
          <circle cx="12.5" cy="12" r="3.5" />
          <circle cx="12.5" cy="12" r="1.5" className="fill-current" />
          <path d="M6 7.5C8.5 6 11.5 5.5 14.5 6C17.5 6.5 20 8 21.5 9.5" strokeDasharray="2 1.5" />
          <path d="M19.5 3V5.5M18.25 4.25H20.75" strokeWidth="1.5" />
        </svg>
      );
    default:
      return null;
  }
}

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isInteractingRef = useRef<boolean>(false);

  const services: ServiceItem[] = [
    {
      id: "cornea",
      name: "Cornea",
      category: "Transplants & Diseases",
      badge: "Surgical Speciality",
      shortDesc: "Full & partial thickness corneal grafting, cross-linking & surface reconstruction.",
      detailedDesc:
        "Specialized cornea clinic providing advanced endothelial transplants (DMEK, DSAEK, PKP), keratoconus collagen cross-linking (C3R), amniotic membrane grafting, and urgent trauma restoration.",
      features: ["DMEK / DSAEK micro-grafts", "C3R Cross-linking for Keratoconus", "Amniotic membrane grafting", "Corneal ulcer & trauma care"],
      iconType: "cornea",
    },
    {
      id: "squint",
      name: "Squint",
      category: "Pediatric & Strabismus",
      badge: "Binocular Vision",
      shortDesc: "Precise ocular realignment for children & adults restoring single binocular vision.",
      detailedDesc:
        "Comprehensive management of misaligned eyes (strabismus) to restore binocular fusion, depth perception, and facial symmetry via tailored muscle resections, recessions, and vision therapy.",
      features: ["Custom muscle recession & resection", "Adjustable suture technique", "Amblyopia (lazy eye) therapy", "Prism lens optical correction"],
      iconType: "squint",
    },
    {
      id: "oculoplasty",
      name: "Oculoplasty",
      category: "Aesthetics & Reconstruction",
      badge: "Cosmetic & Plastic",
      shortDesc: "Cosmetic & reconstructive eyelid, orbital and tear duct micro-surgery.",
      detailedDesc:
        "Eyelid ptosis repair, aesthetic blepharoplasty, lacrimal tear duct surgery (DCR), and orbital reconstruction combining ophthalmic ocular safety with artistic facial precision.",
      features: ["Ptosis (drooping lid) repair", "Cosmetic upper & lower blepharoplasty", "Endonasal DCR for watery eyes", "Orbital fracture & tumor care"],
      iconType: "oculoplasty",
    },
    {
      id: "glaucoma",
      name: "Glaucoma",
      category: "Diagnostic & Surgical",
      badge: "Vision Shield",
      shortDesc: "Early optic nerve protection, OCT ganglion analysis & pressure control.",
      detailedDesc:
        "Advanced glaucoma screening utilizing OCT ganglion cell analysis, automated Humphrey perimetry, laser trabeculoplasty (SLT), and micro-invasive glaucoma surgery (MIGS) to prevent irreversible loss.",
      features: ["Selective Laser Trabeculoplasty (SLT)", "OCT Nerve Fiber Analysis", "Automated Visual Field Tests", "Micro-Invasive Glaucoma Surgery (MIGS)"],
      iconType: "glaucoma",
    },
    {
      id: "dry-eyes",
      name: "Dry Eyes",
      category: "Therapeutic & Spa",
      badge: "Ocular Surface",
      shortDesc: "Advanced tear film diagnostics, LipiFlow thermal pulsation & IPL relief.",
      detailedDesc:
        "Targeted clinical relief from burning, grittiness, redness, and digital eye strain with non-invasive meibomian gland imaging, intense pulsed light (IPL), autologous serum drops, and punctal plugs.",
      features: ["Non-invasive tear film analysis", "IPL / LipiFlow thermal pulsation", "Autologous serum eye drops", "Punctal occlusion therapy"],
      iconType: "dry-eyes",
    },
    {
      id: "cataract",
      name: "Cataract",
      category: "Microsurgical",
      badge: "Robotic Precision",
      shortDesc: "Micro-incision phacoemulsification with premium robotic IOL implants.",
      detailedDesc:
        "State-of-the-art sutureless cataract surgery restoring youthful vision through monofocal, multifocal, toric, and extended-depth-of-focus (EDOF) intraocular lenses with same-day recovery.",
      features: ["Micro-incision phaco", "Toric & Multifocal IOLs", "Same-day recovery", "Blade-free precision"],
      iconType: "cataract",
    },
    {
      id: "lasik",
      name: "LASIK",
      category: "Refractive",
      badge: "Blade-Free Laser",
      shortDesc: "100% blade-free CustomContoura laser vision correction in 10 minutes.",
      detailedDesc:
        "Say goodbye to glasses and contact lenses with high-precision topography-guided laser treatments including Femto-LASIK, SMILE, and PRK for sharp, high-definition natural visual freedom.",
      features: ["CustomContoura topography", "100% blade-free femtosecond", "Pain-free 10-min procedure", "Rapid 24-hr visual recovery"],
      iconType: "lasik",
    },
    {
      id: "retina",
      name: "Retina & Uveitis",
      category: "Surgical & Medical",
      badge: "Vitreo-Retinal",
      shortDesc: "Vitreo-retinal microsurgery, macular degeneration & uveitis autoimmune care.",
      detailedDesc:
        "Specialized management of diabetic retinopathy, retinal detachment, macular degeneration (AMD), vascular occlusions, and complex uveitic ocular autoimmune conditions with sutureless vitrectomy.",
      features: ["25G/27G Vitrectomy", "Anti-VEGF intravitreal therapy", "Retinal laser photocoagulation", "Immunosuppressive uveitis management"],
      iconType: "retina",
    },
  ];

  // Tripled dataset to make continuous horizontal infinite auto-scrolling 100% seamless
  const carouselItems = [...services, ...services, ...services];

  // Continuous Auto-scroll Engine
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;
    let lastTime = performance.now();
    const speed = 0.55; // Pixels per frame (smooth cinematic glide)

    const step = (time: number) => {
      const delta = time - lastTime;
      lastTime = time;

      if (!isPaused && !isInteractingRef.current && container) {
        container.scrollLeft += speed * (delta / 16.67);

        // Seamless loop calculation: If scrolled past 1/3 of total scrollable width, wrap back cleanly
        const singleSetWidth = container.scrollWidth / 3;
        if (container.scrollLeft >= singleSetWidth * 2) {
          container.scrollLeft -= singleSetWidth;
        } else if (container.scrollLeft <= 0) {
          container.scrollLeft += singleSetWidth;
        }
      }

      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused]);

  // Manual scroll buttons
  const scrollManual = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const scrollAmount = 380;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Scroll to a specific service when clicked from the header pills
  const scrollToService = useCallback((id: string) => {
    setActiveTab(id);
    const container = scrollContainerRef.current;
    if (!container) return;

    const targetEl = container.querySelector(`[data-service-id="${id}"]`);
    if (targetEl) {
      targetEl.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, []);

  return (
    <section
      id="treatments"
      className="w-full bg-gradient-to-b from-[#eaf3fc] via-[#f3f8fd] to-[#ffffff] py-16 sm:py-20 md:py-24 px-3 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* 1. Header Row (Editorial Serif Title + Specialities explore button + Accreditation badge) */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 sm:pb-10 border-b border-sky-200/60">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-normal text-slate-900 tracking-tight leading-none">
              Intelligent style comfort
            </h2>
            
            <button
              onClick={() => {
                const el = document.getElementById("clinical-horizontal-directory");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-3.5 py-1.5 rounded-full border border-slate-300 bg-white/90 hover:bg-white text-xs font-semibold text-slate-800 shadow-xs hover:shadow transition-all inline-flex items-center gap-1.5 cursor-pointer"
            >
              <span>8 Specialities</span>
              <span className="text-slate-400 font-bold">↓</span>
            </button>
          </div>

          {/* Right Badge: Super Speciality Care with professional medical crosshair icon */}
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

        {/* 2. Interactive Service Navigation Pills (All 8 Specialities with Professional Clinical Icons) */}
        <div className="flex items-center gap-2 py-6 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
              activeTab === "all"
                ? "bg-[#9A4F3C] text-white shadow-sm"
                : "bg-white/80 hover:bg-white text-slate-700 border border-slate-200"
            }`}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="9" />
              <path d="m9 12 2 2 4-4" />
            </svg>
            <span>All Specialities (8)</span>
          </button>

          {services.map((svc) => (
            <button
              key={svc.id}
              onClick={() => scrollToService(svc.id)}
              className={`px-3.5 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                activeTab === svc.id
                  ? "bg-[#9A4F3C] text-white shadow-sm"
                  : "bg-white/80 hover:bg-white text-slate-700 border border-slate-200/90"
              }`}
            >
              <span className={`${activeTab === svc.id ? "text-white" : "text-[#9A4F3C]"}`}>
                <ServiceClinicalIcon type={svc.iconType} className="w-4 h-4" />
              </span>
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
              <button
                onClick={() => scrollToService("lasik")}
                className="text-xs font-semibold text-slate-700 hover:text-[#9A4F3C] transition-colors cursor-pointer"
              >
                Explore Lenses →
              </button>
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
                    onClick={() => scrollToService("retina")}
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
                      <ServiceClinicalIcon type="dry-eyes" className="w-4 h-4 text-sky-300" />
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
                  onClick={() => scrollToService("dry-eyes")}
                  className="text-[11px] font-bold text-[#9A4F3C] mt-3 text-left hover:underline cursor-pointer flex items-center gap-1"
                >
                  <span>Dry Eyes Care</span>
                  <span>→</span>
                </button>
              </div>

              {/* Feature Card 2: Anti-reflective / Glaucoma & Oculoplasty */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-[0_4px_16px_rgba(15,23,42,0.05)] border border-slate-200/90 flex flex-col justify-between hover:shadow-md transition-shadow">
                <div>
                  <div className="flex items-center gap-2 mb-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#0d2238] text-white flex items-center justify-center text-xs">
                      <ServiceClinicalIcon type="glaucoma" className="w-4 h-4 text-sky-300" />
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
                  onClick={() => scrollToService("glaucoma")}
                  className="text-[11px] font-bold text-[#9A4F3C] mt-3 text-left hover:underline cursor-pointer flex items-center gap-1"
                >
                  <span>Glaucoma Care</span>
                  <span>→</span>
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

        {/* 4. Complete 8-Service HORIZONTAL Auto-Scrolling Carousel Section */}
        <div id="clinical-horizontal-directory" className="mt-14 sm:mt-20 pt-10 border-t border-sky-200/70">
          
          {/* Header Row with Title, Controls & Auto-scroll indicator */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 sm:mb-8">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#9A4F3C] px-2.5 py-0.5 rounded-full bg-[#9A4F3C]/10 border border-[#9A4F3C]/20">
                  Comprehensive Clinical Portfolio
                </span>
                <span className="text-xs text-slate-400 font-medium hidden sm:inline">
                  • Cornea, Squint, Oculoplasty, Glaucoma, Dry Eyes, Cataract, LASIK, Retina &amp; Uveitis
                </span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-slate-900 uppercase tracking-tight mt-1.5">
                All 8 Super Speciality Treatments
              </h3>
            </div>

            {/* Navigation Controls: Left/Right Arrows + Auto-Scroll Pause Indicator */}
            <div className="flex items-center gap-3 self-start md:self-end">
              {/* Play/Pause Auto-scroll toggle pill */}
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-xs hover:border-[#9A4F3C] transition-colors flex items-center gap-1.5 cursor-pointer"
                title={isPaused ? "Resume Auto-scroll" : "Pause Auto-scroll"}
              >
                <span className={`w-2 h-2 rounded-full ${isPaused ? "bg-amber-500" : "bg-emerald-500 animate-pulse"}`} />
                <span className="text-[11px]">{isPaused ? "Auto-scroll Paused" : "Auto-scrolling"}</span>
                <span className="text-[10px] text-slate-400 font-mono">({isPaused ? "▶" : "❚❚"})</span>
              </button>

              {/* Left Arrow Button */}
              <button
                onClick={() => scrollManual("left")}
                aria-label="Scroll left"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-white hover:bg-[#9A4F3C] hover:border-[#9A4F3C] shadow-xs flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6" />
                </svg>
              </button>

              {/* Right Arrow Button */}
              <button
                onClick={() => scrollManual("right")}
                aria-label="Scroll right"
                className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-white hover:bg-[#9A4F3C] hover:border-[#9A4F3C] shadow-xs flex items-center justify-center transition-all duration-200 cursor-pointer active:scale-95"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Horizontal Scrolling Track Container */}
          <div
            ref={scrollContainerRef}
            onMouseEnter={() => {
              isInteractingRef.current = true;
              setIsPaused(true);
            }}
            onMouseLeave={() => {
              isInteractingRef.current = false;
              setIsPaused(false);
            }}
            onTouchStart={() => {
              isInteractingRef.current = true;
              setIsPaused(true);
            }}
            onTouchEnd={() => {
              setTimeout(() => {
                isInteractingRef.current = false;
                setIsPaused(false);
              }, 1200);
            }}
            className="flex gap-5 overflow-x-auto pb-6 pt-2 px-1 cursor-grab active:cursor-grabbing no-scrollbar select-none"
            style={{ scrollBehavior: "auto" }}
          >
            {carouselItems.map((service, index) => {
              const isActive = activeTab === service.id;
              return (
                <div
                  key={`${service.id}-${index}`}
                  data-service-id={service.id}
                  onClick={() => setSelectedService(service)}
                  className={`w-[320px] sm:w-[350px] md:w-[365px] flex-shrink-0 bg-white rounded-2xl p-5 sm:p-6 border transition-all duration-300 flex flex-col justify-between group relative cursor-pointer ${
                    isActive
                      ? "border-[#9A4F3C] shadow-[0_12px_28px_rgba(154,79,60,0.16)] ring-1 ring-[#9A4F3C]"
                      : "border-slate-200/90 shadow-[0_4px_18px_rgba(15,23,42,0.05)] hover:shadow-[0_12px_30px_rgba(15,23,42,0.10)] hover:border-slate-300 hover:-translate-y-1"
                  }`}
                >
                  {/* Top Bar: Professional Medical Icon + Category Badge */}
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-50 to-slate-100 border border-sky-200/80 text-[#0d2238] flex items-center justify-center group-hover:bg-[#9A4F3C] group-hover:text-white group-hover:border-[#9A4F3C] transition-all duration-300 shadow-xs">
                        <ServiceClinicalIcon type={service.iconType} className="w-6 h-6" />
                      </div>
                      
                      <div className="flex flex-col items-end">
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200/70">
                          {service.badge}
                        </span>
                        <span className="text-[9px] text-slate-400 font-medium mt-0.5">
                          {service.category}
                        </span>
                      </div>
                    </div>

                    {/* Service Name & Clinical Description */}
                    <h4 className="font-display font-bold text-2xl text-slate-900 group-hover:text-[#9A4F3C] transition-colors uppercase tracking-tight">
                      {service.name}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed mt-2 line-clamp-2">
                      {service.shortDesc}
                    </p>

                    {/* Procedure Highlights Tags */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap gap-1.5">
                      {service.features.slice(0, 3).map((feat, fidx) => (
                        <span
                          key={fidx}
                          className="inline-flex items-center gap-1 text-[10px] bg-slate-50 border border-slate-200/80 px-2 py-0.5 rounded text-slate-700 font-medium"
                        >
                          <svg className="w-2.5 h-2.5 text-emerald-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          <span>{feat}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom: Quick Actions */}
                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-[#9A4F3C] flex items-center gap-1 group-hover:underline">
                      <span>Clinical Details</span>
                      <span>▾</span>
                    </span>

                    <Link
                      href="#appointment"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-slate-700 hover:text-[#9A4F3C] px-3 py-1 rounded-full bg-slate-50 hover:bg-[#9A4F3C]/10 transition-colors"
                    >
                      <span>Book Slot</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Helper caption below track */}
          <div className="mt-3 flex items-center justify-between text-xs text-slate-500 px-1">
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-sky-500" />
              <span>Hover anywhere to pause auto-scrolling • Swipe or drag horizontally to explore</span>
            </span>
            <span className="hidden sm:inline text-slate-400">
              Click any treatment card to view comprehensive clinical protocols
            </span>
          </div>

        </div>

      </div>

      {/* 5. Clinical Protocol Modal for Selected Service */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 relative overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#9A4F3C] text-white flex items-center justify-center shadow-md shadow-[#9A4F3C]/20">
                  <ServiceClinicalIcon type={selectedService.iconType} className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                      {selectedService.category}
                    </span>
                    <span className="text-[10px] font-semibold text-[#9A4F3C]">
                      {selectedService.badge}
                    </span>
                  </div>
                  <h3 className="font-display font-black text-2xl text-slate-900 uppercase tracking-tight mt-0.5">
                    {selectedService.name} Speciality
                  </h3>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                aria-label="Close modal"
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center text-sm font-bold transition-colors cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Modal Body */}
            <div className="py-4 space-y-4">
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                {selectedService.detailedDesc}
              </p>

              <div>
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                  Specialized Procedures &amp; Diagnostic Technologies:
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedService.features.map((feat, fidx) => (
                    <div
                      key={fidx}
                      className="p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2"
                    >
                      <svg className="w-4 h-4 text-emerald-600 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span className="text-xs text-slate-800 font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-sky-50/70 border border-sky-100 flex items-start gap-2.5">
                <svg className="w-4 h-4 text-sky-700 mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="16" x2="12" y2="12" />
                  <line x1="12" y1="8" x2="12.01" y2="8" />
                </svg>
                <p className="text-xs text-sky-900 leading-relaxed">
                  Every consultation includes pre-operative pupillometry, digital intraocular pressure assessment, and a direct review with an accredited surgical consultant.
                </p>
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2.5 rounded-full border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-50 transition-colors cursor-pointer"
              >
                Close
              </button>

              <Link
                href="#appointment"
                onClick={() => setSelectedService(null)}
                className="px-6 py-2.5 rounded-full bg-[#9A4F3C] hover:bg-[#854030] text-white text-xs font-bold tracking-wide uppercase shadow-md shadow-[#9A4F3C]/20 transition-all hover:scale-105 active:scale-95"
              >
                Book {selectedService.name} Consultation →
              </Link>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
