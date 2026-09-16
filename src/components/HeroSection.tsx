"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const tickerItems = [
    { text: "Advanced Blade-Free LASIK", icon: "✨" },
    { text: "Micro-Incision Cataract", icon: "👁️" },
    { text: "NABH Accredited Hospital", icon: "🏥" },
    { text: "20+ Super Specialists", icon: "🩺" },
    { text: "Zeiss Ophthalmic Precision", icon: "🔬" },
    { text: "24/7 Eye Trauma Care", icon: "🚑" },
  ];

  return (
    <section
      id="home"
      className="relative w-full h-[100dvh] max-h-[100dvh] bg-[#f7f8f4] flex flex-col justify-between overflow-hidden pt-14 sm:pt-16 md:pt-18 lg:pt-20 pb-16 sm:pb-16 md:pb-3 px-3 sm:px-6 lg:px-12 select-none"
    >
      {/* ========================================================= */}
      {/* 1. BACKGROUND ENVIRONMENT: hero3.jpg with feathered blend */}
      {/* ========================================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Subtle radial ambient warmth */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[35vh] bg-gradient-to-b from-white via-white/80 to-transparent blur-2xl" />

        {/* Surgical Suite Background (hero3.jpg) emerging from lower half */}
        <div className="absolute inset-0 top-[20%] sm:top-[16%]">
          <Image
            src="/hero/hero3.jpg"
            alt="Aarya Eye Care Surgical Operating Suite"
            fill
            priority
            className="object-cover object-bottom filter brightness-[0.98] contrast-[1.02] saturate-[1.15]"
            sizes="100vw"
          />
          {/* Feathered gradient masks to blend upwards into #f7f8f4 */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#f7f8f4]/95 via-[#f7f8f4]/60 to-[#f7f8f4]" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#f7f8f4] via-[#f7f8f4]/40 to-[#f7f8f4]/80" />
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. TOP ROW: Photo Cards (Right)                           */}
      {/* ========================================================= */}
      <div className="relative z-30 flex items-start justify-end max-w-7xl mx-auto w-full flex-shrink-0 mt-2 sm:mt-4 md:mt-6 lg:mt-8">
        {/* Top-Right Media Photo Cards */}
        <div className="flex flex-col items-end gap-1.5 sm:gap-2 flex-shrink-0 pt-1 sm:pt-2">
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Card 1: Pediatric & Family Exam */}
            <div className="w-13 h-13 sm:w-18 sm:h-18 md:w-22 md:h-22 rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-md border-2 border-white relative group">
              <Image
                src="/hero/hero1.webp"
                alt="Pediatric Eye Care"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 52px, 88px"
              />
            </div>

            {/* Card 2: Slit-Lamp Diagnostic Exam */}
            <div className="w-13 h-13 sm:w-18 sm:h-18 md:w-22 md:h-22 rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-md border-2 border-white relative group">
              <Image
                src="/hero/hero2.jpg"
                alt="Comprehensive Eye Examination"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 52px, 88px"
              />
            </div>
          </div>

          {/* Caption below cards */}
          <p className="hidden sm:block text-[11px] sm:text-xs text-slate-500 font-medium leading-tight max-w-[210px] text-right pt-0.5 tracking-tight">
            Precision Microsurgery &amp; Diagnostics.
            <br />
            NABH Accredited. 100% Compassionate Care.
          </p>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 3. CENTER STAGE: Giant Typography & Center Woman Cutout   */}
      {/* ========================================================= */}
      <div className="relative flex-1 flex items-center justify-center my-auto min-h-0 w-full overflow-visible">
        {/* Giant Background Typography: "CLEAR VISION" */}
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none select-none overflow-hidden px-2 sm:px-4">
          <div className="w-full flex items-center justify-between max-w-7xl">
            {/* Left Word: CLEAR */}
            <span className="font-display font-black text-[15vw] sm:text-[13.5vw] lg:text-[12.5vw] tracking-tighter text-[#1e2722] uppercase leading-none opacity-90 sm:opacity-95">
              CLEAR
            </span>

            {/* Right Word: VISION */}
            <span className="font-display font-black text-[15vw] sm:text-[13.5vw] lg:text-[12.5vw] tracking-tighter text-[#1e2722] uppercase leading-none opacity-90 sm:opacity-95">
              VISION
            </span>
          </div>
        </div>

        {/* Center Stage: Title + Woman Cutout */}
        <div className="relative z-20 flex flex-col items-center justify-end w-full h-full pointer-events-none">
          {/* Title of Aarya Eye Care just above the hero section PNG image */}
          <div className="text-center z-25 pointer-events-auto mb-0 sm:mb-2.5">
            <h1 className="font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-[42px] uppercase tracking-wider text-slate-900 drop-shadow-xs leading-none">
              Aarya Eye Care
            </h1>
            <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.24em] text-[#9A4F3C] mt-1">
              Super Speciality Eye Hospital
            </p>
          </div>

          {/* Center Woman with Glasses Image (z-20 in front of giant text) */}
          <div className="relative h-full w-auto flex items-end justify-center filter drop-shadow-[0_16px_36px_rgba(0,0,0,0.2)]">
            <Image
              src="/hero/hero-center-woman.png"
              alt="Aarya Eye Care Clear Vision"
              width={800}
              height={1200}
              priority
              className="h-full w-auto object-contain max-h-[40dvh] sm:max-h-[54dvh] md:max-h-[60dvh] lg:max-h-[64dvh] pointer-events-auto select-none"
            />
          </div>
        </div>

        {/* Bottom-Left CTA Pill (matching reference "Order Now" lime pill) */}
        <div className="absolute bottom-2 left-0 sm:left-4 z-30">
          <Link
            href="#appointment"
            className="bg-[#d6f075] hover:bg-[#c6e35c] text-slate-900 font-bold text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-2.5 rounded-full border border-black/10 shadow-sm transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-2 group cursor-pointer"
          >
            <span>Book Consultation</span>
            <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center text-[10px] group-hover:rotate-45 transition-transform duration-200">
              ↗
            </span>
          </Link>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 4. BOTTOM FLOATING TICKER STRIP (matching reference)      */}
      {/* ========================================================= */}
      <div className="relative z-30 w-full max-w-4xl mx-auto flex-shrink-0 pb-1">
        <div className="bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-full py-1.5 sm:py-2 px-4 sm:px-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)] overflow-hidden">
          <div className="flex items-center animate-ticker whitespace-nowrap gap-8 text-xs sm:text-sm font-semibold text-slate-800">
            {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 flex-shrink-0">
                <span>{item.text}</span>
                <span className="text-sm">{item.icon}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
