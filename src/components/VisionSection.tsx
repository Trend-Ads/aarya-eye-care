"use client";

import Image from "next/image";
import { useState } from "react";

interface VisionPreset {
  id: "near" | "intermediate" | "distance";
  name: string;
  distance: string;
  focalTarget: string;
  description: string;
  focalHUD: {
    x: string; // percentage position
    y: string;
    label: string;
    sublabel: string;
  };
  image: string;
}

const VISION_PRESETS: VisionPreset[] = [
  {
    id: "near",
    name: "Near Vision",
    distance: "Foreground",
    focalTarget: "Phone screen",
    description: "A man holds a phone in sharp focus. The TV and the hall beyond it are blurred.",
    focalHUD: {
      x: "19%",
      y: "51%",
      label: "Near focus",
      sublabel: "Phone screen",
    },
    image: "/vision/phone-focus.webp",
  },
  {
    id: "intermediate",
    name: "Intermediate",
    distance: "Middle ground",
    focalTarget: "Television",
    description: "The mountain landscape on the TV comes into focus. The phone and distant hall are blurred.",
    focalHUD: {
      x: "49%",
      y: "40%",
      label: "Intermediate focus",
      sublabel: "Television screen",
    },
    image: "/vision/tv-focus.webp",
  },
  {
    id: "distance",
    name: "Long Distance",
    distance: "Background",
    focalTarget: "Distant hall",
    description: "The pillars, dining table, and windows at the far end of the hall come into focus. The phone and TV are blurred.",
    focalHUD: {
      x: "79%",
      y: "46%",
      label: "Distance focus",
      sublabel: "Far end of the hall",
    },
    image: "/vision/hall-focus.webp",
  },
];

export default function VisionSection() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const current = VISION_PRESETS[activeIdx];

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? VISION_PRESETS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === VISION_PRESETS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section
      id="vision"
      className="relative bg-[#F2E9DC] text-[#30291F] font-sans py-12 sm:py-16 lg:py-20 overflow-hidden border-t border-[#C9A581]/30 select-none"
    >
      {/* Warm Ambient Glow Sheen */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-72 pointer-events-none opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201, 165, 129, 0.35), transparent 75%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ========================================================= */}
        {/* 1. HEADER & SINGLE-LINE PILL NAVIGATION                   */}
        {/* ========================================================= */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-6 sm:mb-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A581]/20 border border-[#C9A581]/40 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A55322] animate-pulse" />
              <span className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-semibold text-[#A55322]">
                PERSPECTIVE &amp; CARE
              </span>
              <span className="text-[#30291F]/30 text-xs">•</span>
              <span className="text-[10px] sm:text-[11px] tracking-wider text-[#8A875C] font-medium uppercase">
                Chapter 01
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-semibold text-[#30291F] tracking-tight leading-snug">
              Say farewell to blurred vision &amp;{" "}
              <span className="font-heading font-semibold text-[#A55322]">
                experience pure clarity at every distance.
              </span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#30291F]/70 font-sans max-w-xl leading-relaxed">
              Switch between the phone, the TV, and the far end of the hall to see how focus changes with distance.
            </p>
          </div>

          {/* Unified Single Segmented Pill Control (No Scrolling, Clean One-Piece Look) */}
          <div className="w-full sm:w-auto self-start lg:self-end">
            <div className="grid grid-cols-3 sm:flex items-center p-1 rounded-full bg-[#C9A581]/25 border border-[#C9A581]/45 shadow-xs">
              {VISION_PRESETS.map((preset, idx) => {
                const isActive = activeIdx === idx;
                return (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => setActiveIdx(idx)}
                    className={`relative flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs font-heading font-semibold tracking-wide transition-all duration-200 cursor-pointer text-center ${
                      isActive
                        ? "bg-[#F2E9DC] text-[#30291F] shadow-xs"
                        : "text-[#30291F]/70 hover:text-[#30291F] hover:bg-[#F2E9DC]/30"
                    }`}
                    aria-pressed={isActive}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full transition-colors shrink-0 ${
                        isActive ? "bg-[#A55322]" : "bg-transparent"
                      }`}
                    />
                    <span className="whitespace-nowrap">{preset.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. HIGH CREATIVITY CINEMATIC LENS VIEWPORT                */}
        {/* ========================================================= */}
        <div className="relative w-full aspect-[16/10] sm:aspect-[21/10] md:aspect-[21/9] max-h-[520px] rounded-[24px] sm:rounded-[32px] overflow-hidden border border-[#C9A581]/50 shadow-[0_24px_60px_rgba(48,41,31,0.14)] bg-[#30291F]/10 group">
          {/* Full-Bleed Images with Smooth Cross-Fade */}
          {VISION_PRESETS.map((preset, idx) => (
            <div
              key={preset.id}
              aria-hidden={activeIdx !== idx}
              className={`absolute inset-0 transition-opacity duration-700 ease-out select-none ${
                activeIdx === idx ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
              }`}
            >
              <Image
                src={preset.image}
                alt={preset.description}
                fill
                priority={idx === 0}
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover select-none"
                draggable={false}
              />
            </div>
          ))}

          {/* Aesthetic Cinema Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#30291F]/70 via-transparent to-black/25 pointer-events-none" />

          {/* TOP OVERLAYS: Medical Optics Tag & Active Zone Indicator */}
          <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
            {/* Top-Left: Optical Depth Protocol Pill */}
            <div className="px-3 py-1.5 rounded-full bg-[#30291F]/80 backdrop-blur-md border border-white/20 text-[#F2E9DC] text-[10px] sm:text-xs font-medium tracking-wide flex items-center gap-2 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A581]" />
              <span className="hidden sm:inline uppercase tracking-widest text-[9px] sm:text-[10px] text-[#C9A581] font-semibold">
                Multifocal Simulation
              </span>
              <span className="hidden sm:inline text-white/40">•</span>
              <span className="text-[#F2E9DC]/90 font-sans tabular-nums text-[10px] sm:text-[11px]">
                {current.focalTarget}
              </span>
            </div>

            {/* Top-Right: Focal Acuity Badge */}
            <div className="px-3.5 py-1.5 rounded-full bg-[#F2E9DC]/95 backdrop-blur-md border border-[#C9A581]/50 text-[#30291F] text-[10px] sm:text-xs font-semibold tracking-wide flex items-center gap-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#A55322] animate-ping" />
              <span className="text-[#A55322] font-sans tabular-nums font-bold">FOCUS</span>
              <span className="text-[#30291F]/30">•</span>
              <span className="font-sans tabular-nums text-[#30291F]/80">{current.distance}</span>
            </div>
          </div>

          {/* CREATIVE OPTICAL FOCUS RETICLE / VIEWFINDER HUD */}
          <div
            className="absolute z-20 -translate-x-1/2 -translate-y-1/2 pointer-events-none transition-all duration-700 ease-out"
            style={{
              left: current.focalHUD.x,
              top: current.focalHUD.y,
            }}
          >
            {/* Optical Target Ring */}
            <div className="relative flex items-center justify-center">
              {/* Outer pulsing ring */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-white/60 animate-ping opacity-30" />
              {/* Mid ring */}
              <div className="absolute w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-dashed border-[#F2E9DC]/80 shadow-[0_0_15px_rgba(255,255,255,0.4)] animate-[spin_12s_linear_infinite]" />
              {/* Inner focal dot */}
              <div className="absolute w-2 h-2 rounded-full bg-[#A55322] ring-2 ring-white shadow-[0_0_10px_#A55322]" />

              {/* Viewfinder Brackets */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-[#F2E9DC]" />
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-[#F2E9DC]" />
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-[#F2E9DC]" />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-[#F2E9DC]" />

              {/* Viewfinder Data Pill */}
              <div className="hidden sm:block absolute top-full mt-3 whitespace-nowrap px-3 py-1 rounded-md bg-[#30291F]/85 backdrop-blur-md border border-white/20 text-[#F2E9DC] text-center shadow-lg">
                <p className="text-[10px] font-sans tabular-nums tracking-wider font-semibold text-[#C9A581]">
                  {current.focalHUD.label}
                </p>
                <p className="text-[9px] text-[#F2E9DC]/80 font-sans">
                  {current.focalHUD.sublabel}
                </p>
              </div>
            </div>
          </div>

          {/* NAVIGATION ARROWS (Cycle between Near / Intermediate / Distance) */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous focal distance"
            className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#30291F]/60 hover:bg-[#30291F]/80 text-[#F2E9DC] backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 shadow-md"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next focal distance"
            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-[#30291F]/60 hover:bg-[#30291F]/80 text-[#F2E9DC] backdrop-blur-md border border-white/20 flex items-center justify-center transition-all duration-200 cursor-pointer hover:scale-105 active:scale-95 shadow-md"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Clean Bottom Pagination Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 pointer-events-auto bg-[#30291F]/70 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/15">
            {VISION_PRESETS.map((preset, idx) => (
              <button
                key={preset.id}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  activeIdx === idx
                    ? "w-6 h-2 bg-[#A55322]"
                    : "w-2 h-2 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to ${preset.name}`}
              />
            ))}
          </div>
        </div>

        {/* Minimalist Editorial Footnote */}
        <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-[#30291F]/60 font-sans border-t border-[#C9A581]/30 pt-3">
          <span>
            Aarya Customized Progressive Lenses • Seamless focal continuity from 35 cm to infinity
          </span>
          <span className="font-sans tabular-nums text-[#A55322] font-medium">
            Zero Corridor Distortion • Natural Eye Adaptation
          </span>
        </div>
      </div>
    </section>
  );
}

// Named alias for convenience if imported as TheQuestion
export { VisionSection as TheQuestion };
