"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const LOADER_DELAY = 2.4;

export default function HeroSection() {
  const tickerItems = [
    { text: "Advanced Blade-Free LASIK", icon: "✨" },
    { text: "Micro-Incision Cataract", icon: "👁️" },
    { text: "NABH Accredited Hospital", icon: "🏥" },
    { text: "20+ Super Specialists", icon: "🩺" },
    { text: "Zeiss Ophthalmic Precision", icon: "🔬" },
    { text: "24/7 Eye Trauma Care", icon: "🚑" },
  ];

  const heroSlides = [
    { src: "/hero/hero-center-woman.png", alt: "Aarya Eye Care Clear Vision",  xOffset: "50%", sizeClass: "max-h-[40dvh] sm:max-h-[54dvh] md:max-h-[60dvh] lg:max-h-[64dvh]" },
    { src: "/hero/second.png",            alt: "Aarya Eye Care Pediatric Care", xOffset: "var(--second-slide-offset, 28%)", sizeClass: "max-h-[40dvh] sm:max-h-[54dvh] md:max-h-[60dvh] lg:max-h-[64dvh]" },
    { src: "/hero/third.png",             alt: "Aarya Eye Care Eye Care",       xOffset: "0%",  sizeClass: "max-h-[47dvh] sm:max-h-[54dvh] md:max-h-[60dvh] lg:max-h-[64dvh]" },
  ];
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3500);
    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section
      id="home"
      className="relative w-full h-[100dvh] max-h-[100dvh] bg-[#F2EBEB] flex flex-col justify-between overflow-hidden pt-14 sm:pt-16 md:pt-18 lg:pt-20 pb-16 sm:pb-16 md:pb-3 px-3 sm:px-6 lg:px-12 select-none"
    >
      {/* ========================================================= */}
      {/* 1. BACKGROUND ENVIRONMENT: hero3.jpg with feathered blend */}
      {/* ========================================================= */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Subtle radial ambient warmth */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[35vh] bg-gradient-to-b from-[#F2EBEB] via-[#F2EBEB]/60 to-transparent blur-2xl" />

        {/* Surgical Suite Background (hero3.jpg) covering full area */}
        <div className="absolute inset-0">
          <Image
            src="/hero/hero3.jpg"
            alt="Aarya Eye Care Surgical Operating Suite"
            fill
            priority
            className="object-cover object-center scale-110 filter brightness-[0.98] contrast-[1.02] saturate-[1.15]"
            sizes="100vw"
          />
          {/* Feathered gradient masks to blend upwards into #F2EBEB */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#F2EBEB]/85 via-[#F2EBEB]/50 to-[#F2EBEB]/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F2EBEB]/40 via-[#F2EBEB]/30 to-[#F2EBEB]/70" />
          {/* Symmetrical Grid Lines Texture Overlay */}
          <div 
            className="absolute inset-0 z-0 pointer-events-none opacity-[0.8] mix-blend-overlay"
            style={{ 
              backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.06) 1px, transparent 1px)',
              backgroundSize: '64px 64px'
            }}
          />
        </div>
      </div>

      {/* ========================================================= */}
      {/* 2. TOP ROW: Photo Cards (Right)                           */}
      {/* ========================================================= */}
      <motion.div 
        className="hidden sm:flex relative z-30 items-start justify-end max-w-7xl mx-auto w-full flex-shrink-0 mt-2 sm:mt-4 md:mt-6 lg:mt-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: LOADER_DELAY + 0.2 }}
      >
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
      </motion.div>

      {/* ========================================================= */}
      {/* 3. CENTER STAGE: Giant Typography & Center Woman Cutout   */}
      {/* ========================================================= */}
      <div className="relative flex-1 flex items-center justify-center my-auto min-h-0 w-full overflow-visible pt-[13dvh] sm:pt-0">
        {/* Giant Background Typography: "CLEAR VISION" */}
        <motion.div 
          className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none select-none overflow-hidden px-2 sm:px-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: LOADER_DELAY, ease: "easeOut" }}
        >
          <div className="w-full flex items-center justify-between max-w-7xl">
            {/* Left Word: CLEAR */}
            <span className="font-serif font-light text-[12vw] sm:text-[10vw] lg:text-[9vw] tracking-widest text-[#9A4F3C] uppercase leading-none opacity-90 sm:opacity-95">
              CLEAR
            </span>

            {/* Right Word: VISION */}
            <span className="font-serif font-light text-[12vw] sm:text-[10vw] lg:text-[9vw] tracking-widest text-[#9A4F3C] uppercase leading-none opacity-90 sm:opacity-95">
              VISION
            </span>
          </div>
        </motion.div>

        {/* Center Stage: Title + Woman Cutout */}
        <div className="relative z-20 flex flex-col items-center justify-end w-full h-full pointer-events-none">
          {/* Title of Aarya Eye Care just above the hero section PNG image */}
          <motion.div 
            className="text-center z-25 pointer-events-auto mb-0 sm:mb-2.5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: LOADER_DELAY + 0.3 }}
          >
            <h1 className="font-display font-black text-4xl sm:text-3xl md:text-4xl lg:text-[42px] uppercase tracking-wider text-slate-900 drop-shadow-xs leading-none">
              Aarya Eye Care
            </h1>
            <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.24em] text-[#9A4F3C] mt-1">
              Super Speciality Eye Hospital
            </p>
          </motion.div>

          {/* Mobile-only: Two photo cards below the title */}
          <div className="flex sm:hidden items-center justify-center gap-2.5 mt-2 pointer-events-auto">
            <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-md border-2 border-white relative">
              <Image
                src="/hero/hero1.webp"
                alt="Pediatric Eye Care"
                fill
                className="object-cover"
                sizes="56px"
              />
            </div>
            <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-md border-2 border-white relative">
              <Image
                src="/hero/hero2.jpg"
                alt="Comprehensive Eye Examination"
                fill
                className="object-cover"
                sizes="56px"
              />
            </div>
          </div>

          {/* Center PNG: Crossfade Carousel */}
          <motion.div 
            className="relative h-full w-auto flex items-end justify-center filter drop-shadow-[0_16px_36px_rgba(0,0,0,0.2)]"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: LOADER_DELAY + 0.5, ease: "easeOut" }}
          >
            <div style={{ display: "grid", alignItems: "end" }}>
              {heroSlides.map((slide, idx) => (
                <Image
                  key={slide.src}
                  src={slide.src}
                  alt={slide.alt}
                  width={800}
                  height={1200}
                  priority={idx === 0}
                  className={`w-auto object-contain pointer-events-auto select-none ${slide.sizeClass}`}
                  style={{
                    gridArea: "1 / 1",
                    opacity: activeSlide === idx ? 1 : 0,
                    transform: `translateX(${slide.xOffset}) scale(${activeSlide === idx ? 1 : 0.97})`,
                    transition: "opacity 0.9s cubic-bezier(0.4,0,0.2,1), transform 0.9s cubic-bezier(0.4,0,0.2,1)",
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="absolute bottom-2 left-0 sm:left-4 z-30"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: LOADER_DELAY + 0.7 }}
        >
          <Link
            href="#appointment"
            className="bg-black hover:bg-slate-900 text-white font-bold text-xs sm:text-sm px-4 sm:px-6 py-2 sm:py-2.5 rounded-full border border-white/10 shadow-sm transition-all duration-200 hover:scale-105 active:scale-95 flex items-center gap-2 group cursor-pointer"
          >
            <span>Book Consultation</span>
            <span className="w-5 h-5 rounded-full bg-white text-black flex items-center justify-center text-[10px] group-hover:rotate-45 transition-transform duration-200">
              ↗
            </span>
          </Link>
        </motion.div>
      </div>

      {/* ========================================================= */}
      {/* 4. BOTTOM FLOATING TICKER STRIP (matching reference)      */}
      {/* ========================================================= */}
      <motion.div 
        className="relative z-30 w-full max-w-4xl mx-auto flex-shrink-0 pb-1"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: LOADER_DELAY + 0.8 }}
      >
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
      </motion.div>
    </section>
  );
}
