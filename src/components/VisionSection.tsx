"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useCallback, useEffect } from "react";

export default function VisionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState<number>(50); // percentage 0 - 100
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [activePreset, setActivePreset] = useState<number>(1);
  const isDraggingRef = useRef<boolean>(false);

  const presets = [
    { name: "Morning Reading", pos: 25, note: "Sharp contrast for books & fine print" },
    { name: "Cafe Ambience", pos: 50, note: "Glare-free natural light transmission" },
    { name: "Distance Focus", pos: 78, note: "Effortless, crystal-clear 20/20 sight" },
  ];

  // Helper to compute percentage from clientX
  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
    setSliderPos(Number(percentage.toFixed(1)));
  }, []);

  // Unified drag starter for mouse and touch
  const startDragging = useCallback(
    (clientX: number) => {
      isDraggingRef.current = true;
      setIsDragging(true);
      updatePosition(clientX);

      const handleMove = (e: MouseEvent | TouchEvent) => {
        if (!isDraggingRef.current) return;
        const currentX = "touches" in e ? e.touches[0]?.clientX : e.clientX;
        if (typeof currentX === "number") {
          updatePosition(currentX);
        }
      };

      const handleEnd = () => {
        isDraggingRef.current = false;
        setIsDragging(false);
        window.removeEventListener("mousemove", handleMove);
        window.removeEventListener("mouseup", handleEnd);
        window.removeEventListener("touchmove", handleMove);
        window.removeEventListener("touchend", handleEnd);
        window.removeEventListener("touchcancel", handleEnd);
      };

      window.addEventListener("mousemove", handleMove, { passive: true });
      window.addEventListener("mouseup", handleEnd);
      window.addEventListener("touchmove", handleMove, { passive: true });
      window.addEventListener("touchend", handleEnd);
      window.addEventListener("touchcancel", handleEnd);
    },
    [updatePosition]
  );

  // Mouse handler
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.button !== 0) return; // Only left click
    e.preventDefault();
    startDragging(e.clientX);
  };

  // Mobile Touch handler
  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length > 0) {
      startDragging(e.touches[0].clientX);
    }
  };

  // Keyboard accessibility
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      setSliderPos((prev) => Math.max(0, prev - 5));
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      setSliderPos((prev) => Math.min(100, prev + 5));
    }
  };

  const setPreset = (idx: number, pos: number) => {
    setActivePreset(idx);
    setSliderPos(pos);
  };

  return (
    <section
      id="vision"
      className="relative bg-[#F2E9DC] text-[#30291F] font-helvetica py-12 sm:py-16 lg:py-20 overflow-hidden border-t border-[#C9A581]/30 select-none"
    >
      {/* Subtle Warm Linen Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-64 pointer-events-none opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(201, 165, 129, 0.3), transparent 75%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ========================================================= */}
        {/* 1. COMPACT HEADER & EDITORIAL STATEMENT                   */}
        {/* ========================================================= */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C9A581]/20 border border-[#C9A581]/40 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A55322]" />
              <span className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-semibold text-[#A55322]">
                PERSPECTIVE &amp; CARE
              </span>
              <span className="text-[#30291F]/30 text-xs">•</span>
              <span className="text-[10px] sm:text-[11px] tracking-wider text-[#8A875C] font-medium uppercase">
                Chapter 01
              </span>
            </div>

            {/* Main Title: AvantGarde Demi */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-avantgarde font-semibold text-[#30291F] tracking-tight leading-snug">
              Say farewell to blurred vision &amp;{" "}
              <span className="font-avantgarde font-semibold text-[#A55322]">
                welcome the quiet, clearer days.
              </span>
            </h2>
          </div>

          {/* Segmented Preset Controls */}
          <div className="flex items-center gap-1.5 bg-[#C9A581]/20 p-1 rounded-full border border-[#C9A581]/40 self-start sm:self-end">
            {presets.map((preset, idx) => (
              <button
                key={preset.name}
                type="button"
                onClick={() => setPreset(idx, preset.pos)}
                className={`relative px-3 py-1.5 rounded-full text-xs font-gotham font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
                  activePreset === idx
                    ? "bg-[#F2E9DC] text-[#30291F] shadow-xs"
                    : "text-[#30291F]/70 hover:text-[#30291F]"
                }`}
              >
                {preset.name}
              </button>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* 2. THE "COOL THING": INTERACTIVE DIRECT-MANIPULATION LENS  */}
        {/* Wipes between Blurred Sight and 20/20 Natural Acuity       */}
        {/* ========================================================= */}
        <div
          ref={containerRef}
          role="slider"
          aria-label="Comparison slider showing blurred vision versus 20/20 clarity"
          aria-valuenow={Math.round(sliderPos)}
          aria-valuemin={0}
          aria-valuemax={100}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          style={{ touchAction: "none" }}
          className="relative w-full aspect-[16/9] sm:aspect-[21/9] max-h-[440px] rounded-[24px] sm:rounded-[32px] overflow-hidden border border-[#C9A581]/40 shadow-[0_16px_40px_rgba(48,41,31,0.06)] cursor-ew-resize touch-none group bg-[#C9A581]/20 focus:outline-none focus:ring-2 focus:ring-[#A55322]/50"
        >
          {/* BASE LAYER: Crystal-Clear 20/20 Sharp Vision */}
          <div className="absolute inset-0 pointer-events-none select-none">
            <Image
              src="/images/coffee-shop-vision.jpg"
              alt="Crisp, clear vision of eyeglasses and coffee cup in morning sunlight"
              fill
              draggable={false}
              sizes="(max-width: 1200px) 100vw, 1200px"
              className="object-cover pointer-events-none select-none"
              priority={false}
            />
            {/* Subtle aesthetic gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#30291F]/50 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* OVERLAY LAYER: Blurred Pre-Treatment Vision (Clipped to Slider) */}
          <div
            className="absolute inset-0 overflow-hidden pointer-events-none select-none"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
            <div className="relative w-full h-full pointer-events-none select-none">
              <Image
                src="/images/coffee-shop-vision.jpg"
                alt="Simulated blurred vision"
                fill
                draggable={false}
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover filter blur-[9px] contrast-[0.92] brightness-[0.98] pointer-events-none select-none"
                priority={false}
              />
              <div className="absolute inset-0 bg-[#F2E9DC]/10 pointer-events-none" />
            </div>
          </div>

          {/* SLIDER HANDLE & TRACK (Large touch hitbox for fingers) */}
          <div
            className="absolute top-0 bottom-0 z-20"
            style={{ left: `${sliderPos}%` }}
          >
            {/* Divider Line */}
            <div className="absolute top-0 bottom-0 w-[2px] -translate-x-1/2 bg-[#A55322] shadow-[0_0_12px_rgba(165,83,34,0.6)] pointer-events-none" />

            {/* Tactile Grab Handle Hit Area (w-12 h-full ensures easy mobile dragging) */}
            <div className="absolute top-0 bottom-0 w-12 -translate-x-1/2 flex items-center justify-center cursor-ew-resize">
              <div
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#F2E9DC] border-2 border-[#A55322] shadow-[0_4px_16px_rgba(48,41,31,0.25)] flex items-center justify-center transition-transform duration-100 ${
                  isDragging ? "scale-110 shadow-[0_6px_22px_rgba(165,83,34,0.4)] ring-4 ring-[#A55322]/20" : "group-hover:scale-105"
                }`}
              >
                <svg
                  className="w-4 h-4 text-[#A55322]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-3 3m0 0l3 3m-3-3h14m-3-3l3 3m0 0l-3 3" />
                </svg>
              </div>
            </div>
          </div>

          {/* TOP TAGS (Helvetica) */}
          <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
            {/* Left Pill: Blurred Vision State */}
            <div className="px-3 py-1 rounded-full bg-[#30291F]/70 backdrop-blur-md border border-white/20 text-[#F2E9DC] text-[10px] sm:text-xs font-medium tracking-wide flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A581]" />
              <span>Prior: 20/80 Blurred</span>
            </div>

            {/* Right Pill: Restored Acuity State */}
            <div className="px-3 py-1 rounded-full bg-[#F2E9DC]/90 backdrop-blur-md border border-[#C9A581]/40 text-[#30291F] text-[10px] sm:text-xs font-semibold tracking-wide flex items-center gap-1.5 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#A55322]" />
              <span>Restored: Natural 20/20</span>
            </div>
          </div>

          {/* BOTTOM INTERACTION HINT & NOTE (Helvetica) */}
          <div className="absolute bottom-3 sm:bottom-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none text-[#F2E9DC]">
            <p className="text-xs sm:text-sm text-[#F2E9DC]/90 drop-shadow-sm hidden sm:block tracking-wide">
              “{presets[activePreset].note}”
            </p>
            <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#F2E9DC]/80 bg-[#30291F]/60 px-2.5 py-1 rounded-md backdrop-blur-xs ml-auto font-medium">
              ↔ Drag or Tap to Focus
            </span>
          </div>
        </div>



      </div>
    </section>
  );
}

// Named alias for convenience if imported as TheQuestion
export { VisionSection as TheQuestion };


