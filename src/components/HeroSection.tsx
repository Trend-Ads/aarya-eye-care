"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const MARQUEE_ITEMS = [
  {
    name: "ZEISS",
    sub: "Medical Optics",
    icon: (
      <svg className="w-3.5 h-3.5 text-[#C9A581]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="3" />
        <line x1="12" y1="3" x2="12" y2="7" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <line x1="3" y1="12" x2="7" y2="12" />
        <line x1="17" y1="12" x2="21" y2="12" />
      </svg>
    ),
  },
  {
    name: "NABH",
    sub: "Accredited",
    icon: (
      <svg className="w-3.5 h-3.5 text-[#A55322]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
      </svg>
    ),
  },
  {
    name: "Alcon",
    sub: "Vision Suite",
    icon: (
      <svg className="w-3.5 h-3.5 text-[#C9A581]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <circle cx="12" cy="12" r="4" />
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      </svg>
    ),
  },
  {
    name: "Essilor",
    sub: "Precision Optics",
    icon: (
      <svg className="w-3.5 h-3.5 text-[#A55322]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <circle cx="7" cy="12" r="4" />
        <circle cx="17" cy="12" r="4" />
        <line x1="11" y1="12" x2="13" y2="12" />
      </svg>
    ),
  },
  {
    name: "Bausch + Lomb",
    sub: "Diagnostics",
    icon: (
      <svg className="w-3.5 h-3.5 text-[#C9A581]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 10.5h-5.5V5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5.5H5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h5.5V19c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5.5H19c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z" />
      </svg>
    ),
  },
  {
    name: "Blade-Free LASIK",
    sub: "Advanced Laser",
    icon: (
      <svg className="w-3.5 h-3.5 text-[#A55322]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
];

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative h-[100dvh] max-h-[100dvh] w-full bg-[#F2E9DC] p-2.5 sm:p-3.5 md:p-5 lg:p-6 flex flex-col overflow-hidden select-none"
    >
      {/* ─── INNER CONTAINER WITH 4-SIDED CURVY BEZEL EDGES ─── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative flex-1 min-h-0 w-full rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden flex flex-col justify-between pt-16 sm:pt-20 md:pt-20 lg:pt-24 pb-0 shadow-lg border border-black/5 bg-[#F2E9DC]"
      >
        {/* ─── HERO BACKGROUND IMAGE (Continuous cinematic movement) ─── */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
          {/* Mobile Image: Subtle continuous pan */}
          <img
            src="/bg-pngs/hero-lat-mobile.png"
            alt="Aarya Eye Care Background"
            className="md:hidden w-full h-full object-cover object-right animate-mobile-hero-pan"
          />

          {/* Desktop Image: Balanced micro-zoom (centered) */}
          <motion.img
            src="/bg-pngs/herobg- lat.png"
            alt="Aarya Eye Care Background"
            className="hidden md:block w-full h-full object-cover object-center will-change-transform"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.07, 1] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className="absolute inset-0 bg-black/45" />
        </div>

        {/* ─── TOP NOTCH / TAB (Brand Logo Mark) ─── */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-40 w-[170px] sm:w-[215px] md:w-[260px] h-[28px] sm:h-[34px] md:h-[38px] pointer-events-auto">
          <svg
            viewBox="0 0 260 38"
            className="w-full h-full drop-shadow-[0_2px_4px_rgba(48,41,31,0.06)]"
            preserveAspectRatio="none"
          >
            <path
              d="M 0 0 C 14 0, 18 5, 18 14 L 18 22 C 18 32, 26 38, 38 38 L 222 38 C 234 38, 242 32, 242 22 L 242 14 C 242 5, 246 0, 260 0 Z"
              fill="#F2E9DC"
            />
          </svg>

          {/* Brand Logo & Name */}
          <Link
            href="#home"
            className="absolute inset-0 flex items-center justify-center gap-1.5 sm:gap-2.5 px-2 pb-0.5 hover:opacity-90 transition-opacity"
          >
            <div className="relative w-4.5 h-4.5 sm:w-6 sm:h-6 shrink-0">
              <Image
                src="/logos/logo-main.png"
                alt="Aarya Eye Care logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="relative h-[14px] sm:h-[18px] md:h-[21px] w-[88px] sm:w-[112px] md:w-[126px] shrink-0">
              <Image
                src="/logos/logo-name.png"
                alt="Aarya Eye Care - Darkness to Light"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* ─── BOTTOM NOTCH / TAB (Scroll Down Arrow) ─── */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-40 w-[66px] sm:w-[78px] md:w-[86px] h-[22px] sm:h-[28px] md:h-[32px] pointer-events-auto">
          <svg
            viewBox="0 0 86 32"
            className="w-full h-full drop-shadow-[0_-2px_4px_rgba(48,41,31,0.06)]"
            preserveAspectRatio="none"
          >
            <path
              d="M 0 32 C 10 32, 14 26, 14 18 L 14 12 C 14 4, 20 0, 28 0 L 58 0 C 66 0, 72 4, 72 12 L 72 18 C 72 26, 76 32, 86 32 Z"
              fill="#F2E9DC"
            />
          </svg>

          <button
            type="button"
            onClick={() => scrollToSection("clarity")}
            aria-label="Scroll to next section"
            className="absolute inset-0 flex items-center justify-center pt-0.5 group cursor-pointer"
          >
            <div className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 rounded-full bg-[#30291F] text-[#F2E9DC] group-hover:bg-[#A55322] group-hover:scale-110 active:scale-95 transition-all flex items-center justify-center shadow-xs">
              <svg
                className="w-2 h-2 sm:w-2.5 sm:h-2.5 group-hover:translate-y-0.5 transition-transform"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
            </div>
          </button>
        </div>

        {/* ─── INTEGRATED TOP BAR (Inside the Frame) ─── */}
        <div className="relative z-30 w-full px-3 sm:px-6 lg:px-8 -mt-9 sm:-mt-11 md:-mt-12 lg:-mt-14 flex items-center justify-between text-xs flex-shrink-0">
          {/* Left Wing - Desktop Nav Links */}
          <div className="flex-1 flex items-center justify-center gap-2 sm:gap-3.5 lg:gap-5">
            <Link
              href="#home"
              className="relative group/nav px-3 sm:px-4 py-0.5 sm:py-1 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white font-gotham font-semibold shadow-2xs transition-all duration-200 text-[11px] sm:text-xs whitespace-nowrap hover:scale-[1.02] active:scale-[0.98] hidden md:inline-flex"
            >
              <span>Home</span>
            </Link>
            <Link
              href="#clarity"
              className="relative group/nav py-0.5 sm:py-1 text-white/85 hover:text-white font-gotham font-semibold transition-colors text-[11px] sm:text-xs whitespace-nowrap hidden md:inline-block"
            >
              <span>Clarity</span>
              <span className="absolute left-0 right-0 -bottom-0.5 h-[1.5px] bg-white rounded-full transition-all duration-300 origin-left ease-out scale-x-0 opacity-0 group-hover/nav:scale-x-100 group-hover/nav:opacity-100" />
            </Link>
            <Link
              href="#treatments"
              className="relative group/nav py-0.5 sm:py-1 text-white/85 hover:text-white font-gotham font-semibold transition-colors text-[11px] sm:text-xs whitespace-nowrap hidden md:inline-block"
            >
              <span>Treatments</span>
              <span className="absolute left-0 right-0 -bottom-0.5 h-[1.5px] bg-white rounded-full transition-all duration-300 origin-left ease-out scale-x-0 opacity-0 group-hover/nav:scale-x-100 group-hover/nav:opacity-100" />
            </Link>
            <Link
              href="#doctors"
              className="relative group/nav py-0.5 sm:py-1 text-white/85 hover:text-white font-gotham font-semibold transition-colors text-[11px] sm:text-xs whitespace-nowrap hidden md:inline-block"
            >
              <span>Doctors</span>
              <span className="absolute left-0 right-0 -bottom-0.5 h-[1.5px] bg-white rounded-full transition-all duration-300 origin-left ease-out scale-x-0 opacity-0 group-hover/nav:scale-x-100 group-hover/nav:opacity-100" />
            </Link>
          </div>

          {/* Spacer matching Center Notch Tab */}
          <div className="w-[170px] sm:w-[215px] md:w-[260px] shrink-0 pointer-events-none" />

          {/* Right Wing - Desktop Nav Links & CTA / Mobile Hamburger */}
          <div className="flex-1 flex items-center justify-end md:justify-center gap-2 sm:gap-3.5 lg:gap-5">
            <Link
              href="#vision"
              className="relative group/nav py-0.5 sm:py-1 text-white/85 hover:text-white font-gotham font-semibold transition-colors text-[11px] sm:text-xs whitespace-nowrap hidden md:inline-block"
            >
              <span>About Us</span>
              <span className="absolute left-0 right-0 -bottom-0.5 h-[1.5px] bg-white rounded-full transition-all duration-300 origin-left ease-out scale-x-0 opacity-0 group-hover/nav:scale-x-100 group-hover/nav:opacity-100" />
            </Link>
            <Link
              href="#branches"
              className="relative group/nav py-0.5 sm:py-1 text-white/85 hover:text-white font-gotham font-semibold transition-colors text-[11px] sm:text-xs whitespace-nowrap hidden md:inline-block"
            >
              <span>Branches</span>
              <span className="absolute left-0 right-0 -bottom-0.5 h-[1.5px] bg-white rounded-full transition-all duration-300 origin-left ease-out scale-x-0 opacity-0 group-hover/nav:scale-x-100 group-hover/nav:opacity-100" />
            </Link>

            {/* "Appointment" Button (Desktop only) */}
            <Link
              href="#appointment"
              className="bg-white hover:bg-[#F2E9DC] text-[#30291F] font-gotham font-semibold pl-2.5 sm:pl-3.5 pr-1 py-0.5 sm:py-1 rounded-full items-center gap-1.5 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] whitespace-nowrap hidden md:inline-flex"
            >
              <span className="text-[10.5px] sm:text-[11.5px]">Book Appointment</span>
              <div className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-[#A55322] text-white flex items-center justify-center">
                <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </Link>

            {/* Mobile Hamburger Trigger */}
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => {
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new CustomEvent("open-mobile-menu"));
                }
              }}
              className="md:hidden w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors shrink-0 shadow-2xs"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            </button>
          </div>
        </div>

        {/* ─── DESKTOP BACKGROUND TEXT (Hidden on mobile) ─── */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 0.95, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:flex absolute inset-0 z-[1] flex-col items-center justify-center pointer-events-none select-none overflow-hidden -translate-y-12 lg:-translate-y-16 xl:-translate-y-20"
        >
          <h1 className="font-sans font-black tracking-tight uppercase leading-none text-white whitespace-nowrap text-center flex flex-col items-center w-full drop-shadow-[0_4px_32px_rgba(0,0,0,0.65)]">
            <span className="md:text-[5vw] lg:text-[4.75rem] xl:text-[5.75rem] font-black tracking-tight text-white">
              AARYA EYE CARE
            </span>
            <span className="mt-3 lg:mt-4 text-xs sm:text-sm lg:text-base font-gotham font-bold tracking-[0.34em] text-[#C9A581] uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
              Super Speciality Hospital
            </span>
          </h1>
        </motion.div>

        {/* ─── MOBILE VIEW CONTENT (Centered & balanced, no overflow) ─── */}
        <div className="flex md:hidden flex-col items-center justify-between flex-1 min-h-0 w-full px-4 pt-1 pb-3 z-10">
          {/* 1. Main Headline with Smooth Entrance Transition - positioned lower toward reviews badge */}
          <motion.div
            initial={{ opacity: 0, y: -24, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative top-14 flex flex-col items-center text-center font-sans font-black tracking-tight uppercase leading-none text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.7)] pt-7 sm:pt-9"
          >
            <span className="text-[clamp(1.4rem,6.8vw,2.25rem)] tracking-tight text-white font-black whitespace-nowrap">
              AARYA EYE CARE
            </span>
            <span className="mt-1.5 text-[9.5px] sm:text-xs font-gotham font-bold tracking-[0.24em] text-[#C9A581] uppercase">
              Super Speciality Hospital
            </span>
          </motion.div>

          {/* 2. Review Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md rounded-full py-1.5 px-4 border border-white/15 shadow-md"
          >
            <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center p-0.5 overflow-hidden shadow-inner shrink-0">
              <Image src="/logos/logo-main.png" alt="Aarya" width={24} height={24} className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col items-start leading-none">
              <div className="flex items-center gap-1 text-[#F2E9DC] font-bold text-xs">
                <svg className="w-2.5 h-2.5 fill-[#A55322] text-[#A55322]" viewBox="0 0 24 24">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>{" "}
                4.9
              </div>
              <span className="text-[8px] uppercase tracking-wider font-semibold text-[#EDE9E6] mt-0.5">
                15k+ (Reviews)
              </span>
            </div>
          </motion.div>

          {/* 3. Description Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="text-xs sm:text-sm text-[#EDE9E6] font-medium text-center max-w-[300px] sm:max-w-[340px] leading-relaxed drop-shadow-sm px-1"
          >
            Delivering clinical excellence, advanced diagnostics, and compassionate eye treatments to protect your vision.
          </motion.p>

          {/* 4. Complete Stats & Features Box */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-sm bg-black/35 backdrop-blur-md rounded-2xl p-2.5 sm:p-3 border border-white/15 flex flex-col gap-1.5 shadow-lg"
          >
            {/* Header: Speciality Care */}
            <div className="flex items-center justify-between border-b border-white/10 pb-1 px-1">
              <span className="text-[10px] sm:text-[11px] font-bold text-[#C9A581] uppercase tracking-wider">
                Clinical Eye Excellence
              </span>
              <span className="text-[9px] text-[#EDE9E6]/80 font-medium">
                100% NABH Accredited
              </span>
            </div>

            {/* 3 Metrics Row */}
            <div className="grid grid-cols-3 gap-1.5 items-center text-center">
              {/* Metric 1: 100% Blade-Free */}
              <div className="flex flex-col items-center justify-center py-1.5 px-0.5 bg-white/5 rounded-xl border border-white/5">
                <span className="text-base sm:text-lg font-bold tracking-tight text-[#A55322] leading-none">100%</span>
                <span className="text-[8.5px] sm:text-[9.5px] font-semibold text-[#F2E9DC] mt-1 leading-tight">Blade-Free</span>
              </div>

              {/* Metric 2: 25+ Years */}
              <div className="flex flex-col items-center justify-center py-1.5 px-0.5 bg-white/5 rounded-xl border border-white/5">
                <div className="flex items-center gap-1 leading-none">
                  <svg className="w-2.5 h-2.5 text-[#C9A581]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  <span className="font-bold text-[#A55322] text-sm sm:text-base">25+</span>
                </div>
                <span className="text-[8.5px] sm:text-[9.5px] font-semibold text-[#EDE9E6] uppercase mt-1 leading-tight">Years Care</span>
              </div>

              {/* Metric 3: 15k+ Surgeries */}
              <div className="flex flex-col items-center justify-center py-1.5 px-0.5 bg-white/5 rounded-xl border border-white/5">
                <div className="flex items-center gap-1 leading-none">
                  <svg className="w-2.5 h-2.5 text-[#C9A581]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <circle cx="12" cy="12" r="3" />
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  </svg>
                  <span className="font-bold text-[#A55322] text-sm sm:text-base">15k+</span>
                </div>
                <span className="text-[8.5px] sm:text-[9.5px] font-semibold text-[#EDE9E6] uppercase mt-1 leading-tight">Surgeries</span>
              </div>
            </div>
          </motion.div>

          {/* 5. Order Now Button (Positioned exactly with relative -top-7) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
            className="relative -top-7 flex justify-center w-full"
          >
            <Link
              href="#appointment"
              className="bg-white text-[#30291F] hover:bg-white/90 px-8 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all shadow-lg active:scale-95 hover:shadow-xl flex items-center gap-2"
            >
              <span>Book Appointment</span>
              <div className="w-4 h-4 rounded-full bg-[#A55322] text-white flex items-center justify-center">
                <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* ─── DESKTOP VIEW CONTENT ─── */}
        <div className="hidden md:flex relative z-10 w-full px-5 sm:px-7 md:px-9 lg:px-10 flex-1 min-h-0 flex-row items-end justify-between pb-3 md:pb-4 gap-6">
          {/* Left Side Content - Only Follow and Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-2 pb-1 pointer-events-auto"
          >
            <span className="text-[11px] uppercase tracking-wider font-semibold text-[#EDE9E6]/80 pr-1">
              Follow:
            </span>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#30291F] flex items-center justify-center transition-all shadow-2xs hover:scale-105"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#30291F] flex items-center justify-center transition-all shadow-2xs hover:scale-105"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://wa.me/919447000000"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#30291F] flex items-center justify-center transition-all shadow-2xs hover:scale-105"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </a>
          </motion.div>

          {/* Center Spacer */}
          <div className="flex-1 pointer-events-none" />

          {/* Right Side Content - Consultation Card Anchored in the bottom right corner with Review Badge above */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-30 flex flex-col justify-end items-end w-full max-w-[200px] sm:max-w-[240px] md:max-w-[260px] pointer-events-auto shrink-0"
          >
            {/* Review Badge directly above Consultation Card, centered */}
            <div className="flex items-center gap-2.5 bg-white/10 backdrop-blur-md rounded-full py-1.5 px-3.5 border border-white/15 shadow-md mb-2.5 self-center">
              <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center p-1 overflow-hidden shadow-inner shrink-0">
                <Image src="/logos/logo-main.png" alt="Aarya Logo" width={28} height={28} className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col items-start leading-none">
                <div className="flex items-center gap-1 text-[#F2E9DC] font-bold text-xs sm:text-sm">
                  <svg className="w-3 h-3 fill-[#A55322] text-[#A55322]" viewBox="0 0 24 24">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>{" "}
                  4.9
                </div>
                <span className="text-[8.5px] uppercase tracking-wider font-semibold text-[#EDE9E6] mt-0.5">
                  15k+ (Reviews)
                </span>
              </div>
            </div>

            {/* Consultation Card */}
            <div className="w-full bg-[#F2E9DC] rounded-[18px] sm:rounded-[24px] p-2.5 sm:p-3.5 shadow-[0_16px_40px_rgba(48,41,31,0.22)] border border-white/60 text-[#30291F]">
              <div className="flex items-center justify-between gap-2 mb-2">
                <div>
                  <h3 className="font-gotham font-semibold text-[11px] sm:text-xs text-[#30291F] leading-tight">
                    Consultation
                  </h3>
                  <p className="font-helvetica text-[9.5px] sm:text-[10.5px] text-[#30291F]/75 leading-tight mt-0.5 hidden sm:block">
                    Our specialist will reach out to assist you.
                  </p>
                </div>
                <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-[#C9A581]/40 shrink-0 shadow-2xs">
                  <Image
                    src="/hero/avatar-curly.jpg"
                    alt="Consultation Specialist"
                    fill
                    className="object-cover"
                    sizes="36px"
                  />
                </div>
              </div>

              <Link
                href="#appointment"
                className="w-full bg-[#A55322] hover:bg-[#8D451B] text-white text-[10.5px] sm:text-xs font-gotham font-semibold py-1.5 sm:py-2 px-3 rounded-full flex items-center justify-between shadow-xs transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <span>Request Call</span>
                <div className="w-3.5 h-3.5 rounded-full bg-white/20 flex items-center justify-center">
                  <svg className="w-2 h-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="7" y1="17" x2="17" y2="7" />
                    <polyline points="7 7 17 7 17 17" />
                  </svg>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* ─── BOTTOM FLOWING MARQUEE (Included in hero, framed by bezel) ─── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="w-full bg-[#30291F]/85 backdrop-blur-xs py-2 md:py-2.5 border-t border-white/10 relative z-30 overflow-hidden flex items-center shadow-sm shrink-0"
        >
          <motion.div
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 18 }}
            className="flex items-center gap-6 md:gap-10 w-max"
          >
            {/* 3x repeat for seamless infinite loop */}
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5 md:gap-3.5 pr-3 md:pr-5">
                <span className="whitespace-nowrap text-xs sm:text-sm md:text-base font-bold tracking-tight text-[#F2E9DC]">
                  {item.name}{" "}
                  <span className="text-[9.5px] sm:text-[10.5px] font-medium tracking-normal text-[#C9A581] uppercase">
                    {item.sub}
                  </span>
                </span>
                <div className="w-5 h-5 md:w-6 md:h-6 bg-white/10 rounded-full flex items-center justify-center p-1 shadow-sm border border-white/10 shrink-0">
                  {item.icon}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
