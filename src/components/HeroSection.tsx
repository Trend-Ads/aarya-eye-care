"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import LogoTicker from "./LogoTicker";

const heroSlides = [
  {
    src: "/hero/hero1.webp",
    alt: "Pediatric & Family Eye Examination at Aarya Eye Care",
    tag: "Pediatric & Family Care",
  },
  {
    src: "/hero/hero2.jpg",
    alt: "Advanced Slit-Lamp Diagnostic Examination",
    tag: "Advanced Diagnostics",
  },
  {
    src: "/hero/hero3.webp",
    alt: "State-of-the-art Microsurgical & Laser Ophthalmic Suite",
    tag: "Microsurgical Precision",
  },
];

export default function HeroSection() {
  // Automatic hero background slideshow timer (5 seconds timespan)
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  // Interactive layer states for mobile tap and desktop hover
  const [leftFront, setLeftFront] = useState<"tablet" | "runner">("runner");
  const [rightFront, setRightFront] = useState<"senior" | "capsule">("capsule");
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const isTabletFront =
    hoveredCard === "tablet" || (hoveredCard !== "runner" && leftFront === "tablet");
  const isRunnerFront =
    hoveredCard === "runner" || (hoveredCard !== "tablet" && leftFront === "runner");

  const isSeniorFront =
    hoveredCard === "senior" || (hoveredCard !== "capsule" && rightFront === "senior");
  const isCapsuleFront =
    hoveredCard === "capsule" || (hoveredCard !== "senior" && rightFront === "capsule");

  return (
    /* Outer Bezel Frame: provides the outer viewport bezel with gradient finish based on #A5D6A7 */
    <div className="w-full h-[100dvh] max-h-[100dvh] p-2 sm:p-3 md:p-4 lg:p-5 box-border bg-gradient-to-br from-[#c8eccb] via-[#A5D6A7] to-[#7dbd81] flex flex-col flex-shrink-0 overflow-hidden">
      
      {/* Hero Inner Screen/Card: borderless with soft realistic shadow onto the bezel */}
      <section className="relative w-full h-full flex flex-col justify-between bg-slate-900 rounded-[24px] sm:rounded-[32px] md:rounded-[40px] lg:rounded-[48px] overflow-hidden shadow-[0_14px_38px_rgba(0,0,0,0.25),_0_4px_12px_rgba(0,0,0,0.14)]">
        
        {/* Background Slideshow: cycling through public/hero images with smooth crossfade */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {heroSlides.map((slide, index) => {
            const isActive = index === currentSlide;
            return (
              <div
                key={slide.src}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  className={`object-cover object-center transition-transform duration-[6000ms] ease-out ${
                    isActive ? "scale-105" : "scale-100"
                  }`}
                  sizes="100vw"
                />
              </div>
            );
          })}

          {/* Black-related transparent layer above the hero background images */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/50 pointer-events-none" />
        </div>

        {/* Slideshow timespan indicator dots & tag */}
        <div className="absolute bottom-11 sm:bottom-12 right-3 sm:right-6 z-30 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/25 shadow-md">
          <span className="text-[10px] sm:text-[11px] font-bold text-white tracking-wider">
            {heroSlides[currentSlide].tag}
          </span>
          <div className="flex items-center gap-1">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 pointer-events-auto cursor-pointer ${
                  idx === currentSlide
                    ? "w-4 bg-[#9A4F3C]"
                    : "w-1.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Top spacer reserving ample breathing room for the fixed navbar */}
        <div className="h-24 sm:h-28 md:h-32 lg:h-36 w-full flex-shrink-0 pointer-events-none" aria-hidden="true" />

        {/* 2. Middle Content: Headline, Subtitle, and Buttons */}
        <div className="flex-shrink-0 max-w-4xl mx-auto px-3 sm:px-6 text-center mt-0 sm:mt-1 relative z-20">
          {/* Shadow in the background of the title and description */}
          <div className="absolute -inset-x-8 -inset-y-6 bg-radial from-black/65 via-black/30 to-transparent blur-2xl pointer-events-none -z-10" />

          <h1 className="leading-[0.96] text-center">
            <span className="font-brand font-black text-2xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[62px] tracking-[0.03em] text-white block uppercase drop-shadow-[0_4px_18px_rgba(0,0,0,0.95)] [text-shadow:_0_3px_16px_rgba(0,0,0,0.95)]">
              Aarya Eye Care
            </span>
            <span className="font-display font-black text-lg sm:text-2xl md:text-3xl lg:text-[36px] xl:text-[42px] tracking-wide text-slate-100 block uppercase mt-1 sm:mt-1.5 drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)] [text-shadow:_0_2px_12px_rgba(0,0,0,0.9)]">
              <span className="text-[#ff7a60] drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">Super Speciality</span> Eye Care Hospital
            </span>
          </h1>

          <p className="mt-2 sm:mt-3 text-white/95 text-xs sm:text-[13.5px] md:text-[15px] leading-relaxed max-w-2xl mx-auto font-medium drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] [text-shadow:_0_1px_8px_rgba(0,0,0,0.9)] line-clamp-2 sm:line-clamp-none">
            Delivering advanced clinical excellence, state-of-the-art diagnostic technology, and compassionate vision treatments to safeguard and restore your eyesight.
          </p>

          {/* Action Buttons */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-3.5 mt-2.5 sm:mt-3.5">
            {/* Primary Appointment Button */}
            <Link
              href="#appointment"
              className="group inline-flex items-center gap-2 sm:gap-2.5 bg-[#9A4F3C] hover:bg-[#854231] text-white pl-4 sm:pl-5 pr-1 sm:pr-1.5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs md:text-[13px] font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <span>Book Appointment</span>
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white text-[#9A4F3C] flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <svg
                  className="w-2.5 h-2.5 sm:w-3 sm:h-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </span>
            </Link>

            {/* Secondary Learn More Button */}
            <Link
              href="#specialities"
              className="group inline-flex items-center gap-2 sm:gap-2.5 bg-black/35 hover:bg-black/55 border border-white/40 text-white pl-4 sm:pl-5 pr-1 sm:pr-1.5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs md:text-[13px] font-semibold backdrop-blur-md shadow-md transition-all"
            >
              <span>Our Specialities</span>
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#9A4F3C] text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <svg
                  className="w-2.5 h-2.5 sm:w-3 sm:h-3"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </span>
            </Link>
          </div>
        </div>

        {/* 3. Collage Showcase: Elevated & unorderly on mobile, compact & refined on desktop with interactive layering */}
        <div className="flex-1 min-h-0 relative w-full max-w-5xl mx-auto px-2 sm:px-4 flex items-center sm:items-end justify-center pb-0 sm:pb-2 overflow-visible">
          
          <div className="relative w-full h-full max-h-[260px] sm:max-h-[320px] md:max-h-[340px] lg:max-h-[370px] flex items-center justify-center -translate-y-2 sm:translate-y-0">

            {/* Card 1: Left Tablet (Woman with water) */}
            <div
              onClick={() => setLeftFront(leftFront === "tablet" ? "runner" : "tablet")}
              onMouseEnter={() => setHoveredCard("tablet")}
              onMouseLeave={() => setHoveredCard(null)}
              className={`absolute -left-2 sm:left-[5%] md:left-[9%] lg:left-[12%] -top-2 sm:top-[2%] w-[112px] sm:w-[145px] md:w-[170px] lg:w-[190px] rounded-[16px] sm:rounded-[22px] md:rounded-[26px] border-[4px] sm:border-[6px] md:border-[7px] border-[#18202a] bg-[#18202a] overflow-hidden transition-all duration-500 [transition-timing-function:cubic-bezier(0.34,1.45,0.64,1)] cursor-pointer select-none active:scale-95 ${
                isTabletFront
                  ? "z-30 shadow-[0_24px_48px_rgba(15,23,42,0.38)] -rotate-3 sm:rotate-0 scale-105 sm:scale-108 -translate-y-2 sm:-translate-y-3 opacity-100"
                  : "z-10 shadow-[0_12px_24px_rgba(15,23,42,0.18)] -rotate-12 sm:-rotate-6 scale-95 sm:scale-100 opacity-80 sm:opacity-90"
              }`}
            >
              <div className="w-1.5 h-1.5 bg-slate-700 rounded-full mx-auto my-0.5 hidden sm:block" />
              <div className="relative aspect-[3/4] w-full rounded-[10px] sm:rounded-[14px] overflow-hidden">
                <Image
                  src="/images/woman-water.jpg"
                  alt="Woman drinking water for healthy hydration"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 115px, 190px"
                  priority
                />
              </div>
            </div>

            {/* Card 2: Front-Left Card with white bezel (30k+ Runner) */}
            <div
              onClick={() => setLeftFront(leftFront === "runner" ? "tablet" : "runner")}
              onMouseEnter={() => setHoveredCard("runner")}
              onMouseLeave={() => setHoveredCard(null)}
              className={`absolute left-0 sm:left-[3%] md:left-[6%] lg:left-[9%] bottom-2 sm:bottom-[3%] w-[110px] sm:w-[140px] md:w-[165px] lg:w-[185px] bg-white rounded-xl sm:rounded-2xl p-1.5 sm:p-2 border-[2px] sm:border-[2.5px] border-white transition-all duration-500 [transition-timing-function:cubic-bezier(0.34,1.45,0.64,1)] cursor-pointer select-none active:scale-95 ${
                isRunnerFront
                  ? "z-30 shadow-[0_24px_48px_rgba(15,23,42,0.32)] rotate-[4deg] sm:-rotate-6 scale-105 sm:scale-108 -translate-y-2 sm:-translate-y-2 opacity-100"
                  : "z-10 shadow-[0_10px_20px_rgba(15,23,42,0.15)] rotate-[-14deg] sm:-rotate-14 scale-90 sm:scale-95 opacity-80 sm:opacity-90"
              }`}
            >
              <div className="relative aspect-[4/3] w-full rounded-lg sm:rounded-xl overflow-hidden">
                <Image
                  src="/images/runner.jpg"
                  alt="30k+ active member running on beach"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 110px, 185px"
                />
                <div className="absolute top-1 left-1 bg-white/95 backdrop-blur-sm px-1.5 py-0.5 rounded text-slate-900 font-extrabold text-[9px] sm:text-xs font-sans shadow-sm">
                  30k+
                </div>
              </div>
              <p className="text-[8px] sm:text-[9.5px] md:text-[10.5px] font-medium text-slate-700 mt-1 px-0.5 leading-tight line-clamp-2">
                New member join this session every month for better health.
              </p>
            </div>

            {/* Card 3: Centerpiece Aarya Eye Care Visual Showcase */}
            <div className="relative z-20 h-[96%] sm:h-[98%] max-h-[240px] sm:max-h-[300px] md:max-h-[325px] lg:max-h-[350px] aspect-[2/3] transition-transform duration-300 hover:scale-105 select-none pointer-events-auto flex items-end justify-center -rotate-1">
              <div className="relative w-full h-full rounded-2xl sm:rounded-[24px] overflow-hidden border border-white/80 shadow-[0_20px_45px_rgba(15,23,42,0.35)]">
                <Image
                  src="/hero-cards/main-center.png"
                  alt="Aarya Eye Care center visual showcase"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 640px) 170px, 260px"
                />
              </div>

              {/* Floating Specs 1 (Top right) */}
              <div className="absolute -top-3 sm:-top-5 -right-5 sm:-right-8 md:-right-10 w-14 sm:w-18 md:w-22 aspect-[2/1] animate-float-capsule pointer-events-none drop-shadow-xl -rotate-12 z-30">
                <Image
                  src="/specs/spec1.png"
                  alt="Aarya Eye Care optical frames"
                  fill
                  className="object-contain"
                  sizes="90px"
                />
              </div>

              {/* Floating Specs 2 (Mid right) */}
              <div className="absolute top-14 sm:top-18 md:top-22 -right-6 sm:-right-9 md:-right-12 w-16 sm:w-20 md:w-24 aspect-[16/10] animate-float-gentle pointer-events-none drop-shadow-xl rotate-6 z-30">
                <Image
                  src="/specs/spec2.png"
                  alt="Modern precision vision specs"
                  fill
                  className="object-contain"
                  sizes="100px"
                />
              </div>
            </div>

            {/* Card 4: Top-Right Card (20k+ Satisfied Senior) */}
            <div
              onClick={() => setRightFront(rightFront === "senior" ? "capsule" : "senior")}
              onMouseEnter={() => setHoveredCard("senior")}
              onMouseLeave={() => setHoveredCard(null)}
              className={`absolute -right-2 sm:right-[5%] md:right-[8%] lg:right-[11%] -top-3 sm:top-[2%] w-[108px] sm:w-[140px] md:w-[165px] lg:w-[185px] bg-[#6caad8]/25 backdrop-blur-md rounded-xl sm:rounded-2xl p-1.5 sm:p-2 border border-white/70 transition-all duration-500 [transition-timing-function:cubic-bezier(0.34,1.45,0.64,1)] cursor-pointer select-none active:scale-95 ${
                isSeniorFront
                  ? "z-30 shadow-[0_24px_48px_rgba(15,23,42,0.30)] rotate-[3deg] sm:rotate-2 scale-105 sm:scale-108 -translate-y-2 sm:-translate-y-3 opacity-100"
                  : "z-10 shadow-[0_10px_20px_rgba(15,23,42,0.14)] rotate-[14deg] sm:rotate-6 scale-90 sm:scale-95 opacity-80 sm:opacity-90"
              }`}
            >
              <div className="relative aspect-[4/3] w-full rounded-lg sm:rounded-xl overflow-hidden">
                <Image
                  src="/images/senior-man.jpg"
                  alt="Satisfied user active senior man exercising"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 110px, 185px"
                />
                <div className="absolute top-1 left-1 bg-[#266e96]/90 text-white backdrop-blur-sm px-1.5 py-0.5 rounded-full text-[8px] sm:text-[9.5px] font-bold flex items-center gap-1 shadow-sm">
                  <span>20k+</span>
                  <span className="font-medium text-[7.5px] sm:text-[8.5px] opacity-90 hidden sm:inline">Satisfied user</span>
                </div>
              </div>
            </div>

            {/* Card 5: Bottom-Right Dark Card (Woman with Capsule) */}
            <div
              onClick={() => setRightFront(rightFront === "capsule" ? "senior" : "capsule")}
              onMouseEnter={() => setHoveredCard("capsule")}
              onMouseLeave={() => setHoveredCard(null)}
              className={`absolute -right-1 sm:right-[2%] md:right-[5%] lg:right-[8%] bottom-1 sm:bottom-[3%] w-[112px] sm:w-[145px] md:w-[170px] lg:w-[190px] bg-[#0c1622] text-white rounded-xl sm:rounded-2xl p-1.5 sm:p-2 border-[2px] sm:border-[2.5px] border-[#1d2734] transition-all duration-500 [transition-timing-function:cubic-bezier(0.34,1.45,0.64,1)] cursor-pointer select-none active:scale-95 ${
                isCapsuleFront
                  ? "z-30 shadow-[0_26px_52px_rgba(15,23,42,0.38)] -rotate-[3deg] sm:rotate-6 scale-105 sm:scale-108 -translate-y-2 sm:-translate-y-2 opacity-100"
                  : "z-10 shadow-[0_12px_22px_rgba(15,23,42,0.18)] rotate-[14deg] sm:rotate-12 scale-90 sm:scale-95 opacity-80 sm:opacity-90"
              }`}
            >
              <div className="relative aspect-square w-full rounded-lg sm:rounded-xl overflow-hidden mb-1">
                <Image
                  src="/images/woman-capsule.jpg"
                  alt="Woman taking vision supplement capsule"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 115px, 190px"
                />
                <div className="absolute bottom-1 left-1 right-1 flex flex-wrap gap-0.5">
                  <span className="bg-[#e97d26] text-white text-[6.5px] sm:text-[8px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wider">
                    ADVANCED EYE
                  </span>
                </div>
              </div>
              <p className="text-[7.5px] sm:text-[9px] text-slate-300 line-clamp-2 leading-tight px-0.5">
                Advanced eye wellness supplements formulated with powerful nutrients to support...
              </p>
            </div>

          </div>
        </div>

        {/* 4. Moving Brand Ticker Strip inside bottom of Hero Section */}
        <LogoTicker />

      </section>
    </div>
  );
}
