"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
      className="w-full bg-[#F2E9DC] h-[100dvh] max-h-[100dvh] flex flex-col justify-between p-1.5 sm:p-2.5 lg:p-3 select-none overflow-hidden"
    >
      {/* ========================================================= */}
      {/* 1. SCULPTURAL FRAMED CARD CONTAINER (Flexible 100dvh Fit) */}
      {/* ========================================================= */}
      <div className="w-full max-w-[1540px] mx-auto flex-1 min-h-0 flex flex-col justify-between">
        <motion.div
          initial={{ opacity: 0, scale: 0.985, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-full flex-1 min-h-0 flex flex-col justify-between rounded-[22px] sm:rounded-[34px] lg:rounded-[44px] overflow-hidden border-[6px] sm:border-[10px] lg:border-[13px] border-[#F2E9DC] shadow-[0_18px_50px_rgba(48,41,31,0.16)] ring-1 ring-[#C9A581]/30 bg-[#F2E9DC]"
        >
          {/* Background Images: Desktop & Mobile */}
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
            {/* Mobile Background */}
            <Image
              src="/bg-pngs/hero-lat-mobile.png"
              alt="Hero Background Mobile"
              fill
              priority
              className="block md:hidden object-cover object-center pointer-events-none select-none"
              sizes="100vw"
            />
            {/* Desktop Background */}
            <Image
              src="/bg-pngs/herobg- lat.png"
              alt="Hero Background"
              fill
              priority
              className="hidden md:block object-cover object-center pointer-events-none select-none"
              sizes="100vw"
            />
          </div>

          {/* Full Hero Section Black Transparent Layer Coverage */}
          <div className="absolute inset-0 bg-black/25 pointer-events-none z-10" />

          {/* ========================================================= */}
          {/* TOP NOTCH / TAB (Brand Logo Mark)                         */}
          {/* ========================================================= */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 z-40 w-[190px] sm:w-[230px] md:w-[260px] h-[32px] sm:h-[38px] pointer-events-auto">
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
              className="absolute inset-0 flex items-center justify-center gap-2 sm:gap-2.5 px-2.5 pb-0.5 hover:opacity-90 transition-opacity"
            >
              <div className="relative w-5.5 h-5.5 sm:w-7 sm:h-7 shrink-0">
                <Image
                  src="/logos/logo-main.png"
                  alt="Aarya Eye Care logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="relative h-[16px] sm:h-[21px] w-[96px] sm:w-[126px] shrink-0">
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

          {/* ========================================================= */}
          {/* BOTTOM NOTCH / TAB (Scroll Down Arrow)                     */}
          {/* ========================================================= */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-40 w-[74px] sm:w-[86px] h-[26px] sm:h-[32px] pointer-events-auto">
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
              onClick={() => scrollToSection("treatments")}
              aria-label="Scroll to treatments"
              className="absolute inset-0 flex items-center justify-center pt-0.5 group cursor-pointer"
            >
              <div className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-[#30291F] text-[#F2E9DC] group-hover:bg-[#A55322] group-hover:scale-110 active:scale-95 transition-all flex items-center justify-center shadow-xs">
                <svg
                  className="w-2.5 h-2.5 group-hover:translate-y-0.5 transition-transform"
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



          {/* ========================================================= */}
          {/* INTEGRATED TOP BAR (Inside the Frame)                     */}
          {/* ========================================================= */}
          <div className="relative z-30 w-full px-2 sm:px-4 lg:px-6 pt-2 sm:pt-3 flex items-center justify-between text-xs flex-shrink-0">
            {/* Left Wing - Centered in Left Half */}
            <div className="flex-1 flex items-center justify-center gap-2.5 sm:gap-3.5 lg:gap-5">
              <Link
                href="#home"
                className="relative group/nav px-3.5 sm:px-4 py-1 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white font-gotham font-semibold shadow-2xs transition-all duration-200 text-[11px] sm:text-xs whitespace-nowrap hover:scale-[1.02] active:scale-[0.98] hidden md:inline-flex"
              >
                <span>Home</span>
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
            <div className="w-[190px] sm:w-[230px] md:w-[260px] shrink-0 pointer-events-none" />

            {/* Right Wing - Centered in Right Half */}
            <div className="flex-1 flex items-center justify-end md:justify-center gap-2.5 sm:gap-3.5 lg:gap-5">
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

          {/* ========================================================= */}
          {/* MAIN HERO STAGE (Flex-1 and strictly non-overflowing)     */}
          {/* ========================================================= */}
          <div className="relative w-full flex-1 min-h-0 px-3 sm:px-6 lg:px-10 flex items-center justify-between overflow-hidden">
            




            {/* ------------------------------------------------------- */}
            {/* LEFT COLUMN: Social Media Channels                      */}
            {/* ------------------------------------------------------- */}
            <div className="relative z-30 flex flex-col justify-end h-full pt-4 sm:pt-8 pb-4 sm:pb-6 pointer-events-auto">
              <h1 className="sr-only">
                Aarya Eye Care - Super Speciality Eye Care Hospital
              </h1>

              {/* Social Media Buttons */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#30291F] flex items-center justify-center transition-all shadow-2xs"
                >
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#30291F] flex items-center justify-center transition-all shadow-2xs"
                >
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                <a
                  href="https://wa.me/919447000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-white/20 hover:bg-white text-white hover:text-[#30291F] flex items-center justify-center transition-all shadow-2xs"
                >
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* ------------------------------------------------------- */}
            {/* RIGHT COLUMN: Consultation Card                         */}
            {/* ------------------------------------------------------- */}
            <div className="relative z-30 flex flex-col justify-end items-end h-full pt-4 sm:pt-8 pb-4 sm:pb-6 max-w-[190px] sm:max-w-[270px] pointer-events-auto">
              {/* Consultation Card */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="w-full bg-[#F2E9DC] rounded-[18px] sm:rounded-[24px] p-2.5 sm:p-3.5 shadow-[0_16px_40px_rgba(48,41,31,0.22)] border border-white/60 text-[#30291F]"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div>
                    <h3 className="font-gotham font-semibold text-[11px] sm:text-xs text-[#30291F] leading-tight">
                      Free Consultation
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
                      <line x1="7" y1="17" x2="17" y2="17" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            </div>

          </div>

          {/* ========================================================= */}
          {/* FLOWING TICKER COMPONENT (Inside Hero Card on the Bottom) */}
          {/* ========================================================= */}
          <div className="relative z-30 w-full border-t border-white/10 bg-black/20 backdrop-blur-xs py-1.5 sm:py-2 overflow-hidden flex-shrink-0 select-none">
            <div className="flex items-center animate-ticker hover:[animation-play-state:running]">
              {[0, 1].map((setIdx) => (
                <div
                  key={setIdx}
                  className="flex items-center gap-7 sm:gap-12 md:gap-16 pr-7 sm:pr-12 md:pr-16 flex-shrink-0 opacity-90"
                >
                  {/* 1. ZEISS Medical Optics */}
                  <div className="h-5 flex items-center gap-1.5">
                    <svg
                      className="w-4 h-4 text-[#C9A581]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <circle cx="12" cy="12" r="3" />
                      <line x1="12" y1="3" x2="12" y2="7" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                      <line x1="3" y1="12" x2="7" y2="12" />
                      <line x1="17" y1="12" x2="21" y2="12" />
                    </svg>
                    <span className="text-xs sm:text-sm font-black tracking-wider text-[#F2E9DC] font-sans">
                      ZEISS{" "}
                      <span className="text-[9.5px] font-medium tracking-normal text-[#C9A581] uppercase">
                        Medical
                      </span>
                    </span>
                  </div>

                  {/* 2. NABH Accredited Hospital */}
                  <div className="h-5 flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-[#A55322]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                    </svg>
                    <span className="text-xs sm:text-sm font-extrabold tracking-tight text-[#F2E9DC] font-sans">
                      NABH{" "}
                      <span className="text-[10px] font-semibold tracking-normal text-[#C9A581]">
                        Accredited
                      </span>
                    </span>
                  </div>

                  {/* 3. Alcon Vision */}
                  <div className="h-5 flex items-center gap-1.5">
                    <svg
                      className="w-4 h-4 text-[#C9A581]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <circle cx="12" cy="12" r="4" />
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    </svg>
                    <span className="text-xs sm:text-sm font-black tracking-tight text-[#F2E9DC] font-sans">
                      Alcon{" "}
                      <span className="text-[10px] font-light text-[#F2E9DC]/75">Vision Suite</span>
                    </span>
                  </div>

                  {/* 4. Essilor Optics */}
                  <div className="h-5 flex items-center gap-1.5">
                    <svg
                      className="w-4 h-4 text-[#A55322]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <circle cx="7" cy="12" r="4" />
                      <circle cx="17" cy="12" r="4" />
                      <line x1="11" y1="12" x2="13" y2="12" />
                    </svg>
                    <span className="text-xs sm:text-sm font-bold tracking-tight text-[#F2E9DC] font-sans">
                      Essilor{" "}
                      <span className="text-[9.5px] font-semibold text-[#C9A581] uppercase tracking-wider">
                        Optics
                      </span>
                    </span>
                  </div>

                  {/* 5. Bausch + Lomb */}
                  <div className="h-5 flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-[#C9A581]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 10.5h-5.5V5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5.5H5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h5.5V19c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5.5H19c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z" />
                    </svg>
                    <span className="text-xs sm:text-sm font-bold tracking-tight text-[#F2E9DC] font-sans">
                      Bausch + Lomb
                    </span>
                  </div>

                  {/* 6. Blade-Free LASIK */}
                  <div className="h-5 flex items-center gap-1.5">
                    <svg
                      className="w-4 h-4 text-[#A55322]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                    <span className="text-xs sm:text-sm font-extrabold tracking-tight text-[#F2E9DC] font-sans">
                      Blade-Free{" "}
                      <span className="text-[10px] font-semibold text-[#C9A581] uppercase tracking-wide">
                        LASIK
                      </span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
