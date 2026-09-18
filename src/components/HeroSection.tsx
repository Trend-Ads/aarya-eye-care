"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="w-full bg-[#F9D2BA] min-h-screen lg:h-screen lg:max-h-screen flex flex-col justify-between pt-15 sm:pt-17 lg:pt-19 pb-2 sm:pb-3 select-none overflow-hidden"
    >
      {/* ========================================================= */}
      {/* MAIN HERO CARD (Large Satin Grey Rounded Container)       */}
      {/* Thinner side bezels: px-2 sm:px-3 md:px-4 lg:px-5         */}
      {/* ========================================================= */}
      <div className="w-full max-w-[1500px] mx-auto px-2 sm:px-3 md:px-4 lg:px-5 flex-1 flex flex-col justify-center min-h-0 my-auto py-1">
        <div 
          className="relative w-full rounded-[28px] sm:rounded-[36px] lg:rounded-[44px] overflow-hidden border border-white/20 px-5 sm:px-8 lg:px-12 py-5 sm:py-7 lg:py-8 shadow-[0_24px_60px_rgba(94,49,34,0.25)] flex flex-col justify-center"
          style={{
            background: "linear-gradient(145deg, #5E3122 0%, #52291B 50%, #441F13 100%)",
          }}
        >
          {/* Subtle soft ambient light sheen on top-left */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* ========================================================= */}
            {/* LEFT COLUMN: Typography & Content                         */}
            {/* ========================================================= */}
            <div className="lg:col-span-7 flex flex-col justify-center pl-2 sm:pl-4 lg:pl-6 xl:pl-8">
              
              {/* Top Badge: 20M+ User / Read Our Success Stories */}
              <motion.div 
                className="flex items-center gap-3 mb-4 sm:mb-5 lg:mb-6"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Badge circle with white dual-avatar icon */}
                <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full bg-white/15 backdrop-blur-xs flex items-center justify-center flex-shrink-0 shadow-xs border border-white/20">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    <circle cx="17.5" cy="8.5" r="2.5" />
                    <path d="M17.5 13c1.66 0 4.5.83 4.5 2.5V18h-2v-2.5c0-.85-1.52-1.77-2.5-2.08z" opacity="0.8" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="font-extrabold text-[13.5px] sm:text-[14.5px] lg:text-[15px] text-white tracking-tight leading-none">
                    1500+ Happy Patients
                  </span>
                  <span className="text-[11.5px] sm:text-[12.5px] text-white/85 font-medium leading-tight mt-0.5">
                    Read Our{" "}
                    <Link href="#stories" className="font-bold underline decoration-white/70 decoration-1 underline-offset-2 hover:opacity-80">
                      Success Stories
                    </Link>
                  </span>
                </div>
              </motion.div>

              {/* Main Headline: Grow⁺ */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="relative"
              >
                <h1 className="font-serif font-medium text-4xl sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[80px] text-white tracking-tight leading-[1.02] select-none flex items-start">
                  <span>Aarya Eye care</span>
                  <span className="font-sans font-normal text-2xl sm:text-3xl lg:text-4xl text-white/90 -translate-y-1 sm:-translate-y-2 ml-1">
                    +
                  </span>
                </h1>
              </motion.div>

              {/* Divider Line 1 */}
              <div className="w-full max-w-xl h-px bg-white/20 my-4 sm:my-5 lg:my-6" />

              {/* Subtitle */}
              <motion.p 
                className="text-white/90 text-sm sm:text-base lg:text-[17.5px] font-medium leading-snug max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                From Darkness to Light - Restoring clear vision and brighter tomorrows with advanced, compassionate eye care.
              </motion.p>

              {/* Testimonial Snippet */}
              <motion.div 
                className="flex items-center gap-3.5 my-4 sm:my-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              >
                {/* Avatar with subtle ray doodle */}
                <div className="relative">
                  {/* Sunburst rays doodle on top-left */}
                  <svg className="absolute -top-2.5 -left-2.5 w-5 h-5 text-amber-200/80 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="4" y1="4" x2="8" y2="8" />
                    <line x1="12" y1="2" x2="12" y2="7" />
                    <line x1="2" y1="12" x2="7" y2="12" />
                  </svg>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full overflow-hidden relative border border-white/40 shadow-xs">
                    <Image
                      src="/hero/avatar-curly.jpg"
                      alt="Customer testimonial reviewer"
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center gap-2 text-xs sm:text-[13px] font-semibold text-white">
                    <span>Loved the experience</span>
                    <span className="text-white/40 font-light">/</span>
                    <span className="flex items-center gap-1 font-bold text-amber-300">
                      ★ 4.9
                    </span>
                  </div>
                  <span className="text-[11px] sm:text-xs text-white/75 font-medium mt-0.5">
                    100% Satisfied
                  </span>
                </div>
              </motion.div>

              {/* Divider Line 2 */}
              <div className="w-full max-w-xl h-px bg-white/20 mb-5 sm:mb-6" />

              {/* CTA Action Buttons */}
              <motion.div 
                className="flex items-center gap-4 sm:gap-6 pt-0.5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <Link
                  href="#appointment"
                  className="bg-[#1D4533] hover:bg-[#163628] text-white text-xs sm:text-[14px] font-bold px-6 sm:px-8 py-3 sm:py-3.5 rounded-full shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center gap-2"
                >
                  <span>Book Appointment</span>
                </Link>

                <Link
                  href="#vision"
                  className="text-white hover:text-white/80 text-xs sm:text-[14px] font-bold flex items-center gap-1 group transition-colors"
                >
                  <span className="underline decoration-white/70 decoration-1 underline-offset-4">
                    About Us
                  </span>
                  <span className="text-base group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
                    ↗
                  </span>
                </Link>
              </motion.div>

            </div>

            {/* ========================================================= */}
            {/* RIGHT COLUMN: Visual Composite & Floating Glass Cards     */}
            {/* ========================================================= */}
            <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-center lg:-translate-x-6 xl:-translate-x-12 mt-2 lg:mt-0">
              
              <div className="relative w-[265px] sm:w-[305px] lg:w-[330px] xl:w-[345px]">
                
                {/* 1. Main Orange Pillar Card with Athlete */}
                <motion.div 
                  className="relative w-full h-[360px] sm:h-[415px] lg:h-[440px] xl:h-[465px] rounded-[32px] sm:rounded-[38px] lg:rounded-[42px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.35)] border-2 border-white/25"
                  style={{
                    background: "linear-gradient(160deg, #FF6633 0%, #FF5520 40%, #E63E0B 100%)",
                  }}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover object-[center_top]"
                  >
                    <source src="/videos/hero1.mp4" type="video/mp4" />
                  </video>
                </motion.div>

                {/* 2. Floating Question Pill 1: "How is the fit?" */}
                <motion.div 
                  className="absolute -left-6 sm:-left-9 top-[25%] sm:top-[23%] z-30 bg-white/95 backdrop-blur-md px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.18)] border border-white/80 flex items-center gap-2 transition-transform hover:scale-105 cursor-default"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.45 }}
                >
                  <div className="w-4.5 h-4.5 rounded-md bg-[#FF5C28] text-white flex items-center justify-center flex-shrink-0 shadow-2xs">
                    <svg className="w-2.5 h-2.5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-[11.5px] sm:text-xs font-bold text-neutral-900 whitespace-nowrap">
                    How is the fit?
                  </span>
                </motion.div>

                {/* 3. Floating Question Pill 2: "Do you like the design?" */}
                <motion.div 
                  className="absolute -left-9 sm:-left-14 top-[39%] sm:top-[37%] z-30 bg-white/95 backdrop-blur-md px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.18)] border border-white/80 flex items-center gap-2 transition-transform hover:scale-105 cursor-default"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, delay: 0.55 }}
                >
                  <div className="w-4.5 h-4.5 rounded-md bg-[#2563EB] text-white flex items-center justify-center flex-shrink-0 shadow-2xs">
                    <svg className="w-2.5 h-2.5 stroke-current" viewBox="0 0 24 24" fill="none" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <span className="text-[11.5px] sm:text-xs font-bold text-neutral-900 whitespace-nowrap">
                    Do you like the design?
                  </span>
                </motion.div>

                {/* 4. Top-Right Stat Card: "15+ Doctors Support" */}
                <motion.div 
                  className="absolute -right-8 sm:-right-14 lg:-right-16 xl:-right-20 top-2 sm:top-4 z-25 bg-white/45 backdrop-blur-xl border border-[#1D4533]/40 rounded-[24px] sm:rounded-[26px] p-3.5 sm:p-4.5 shadow-[0_20px_45px_rgba(0,0,0,0.18)] min-w-[145px] sm:min-w-[170px]"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                >
                  <span className="text-[9.5px] sm:text-[10.5px] font-medium text-[#1D4533]/75 tracking-wider uppercase block">
                    — EXPERT CARE
                  </span>
                  <div className="font-sans font-medium text-3xl sm:text-4xl lg:text-[42px] text-[#1D4533] leading-tight my-0.5 sm:my-1 tracking-normal">
                    15+
                  </div>
                  <span className="text-[11px] sm:text-xs font-normal text-[#1D4533]/85 leading-snug block">
                    Doctors Support
                  </span>
                </motion.div>

                {/* 5. Bottom-Right Eyewear Card */}
                <motion.div 
                  className="absolute -right-10 sm:-right-16 lg:-right-20 xl:-right-24 bottom-2 sm:bottom-4 z-30 bg-white/50 backdrop-blur-2xl border border-[#1D4533]/40 rounded-[24px] sm:rounded-[28px] p-2.5 sm:p-3 shadow-[0_24px_50px_rgba(0,0,0,0.2)] flex items-center gap-3 sm:gap-3.5 min-w-[245px] sm:min-w-[280px]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                  {/* Eyewear Model Thumbnail */}
                  <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-white/85 border border-[#1D4533]/30 overflow-hidden flex-shrink-0 relative shadow-2xs">
                    <Image
                      src="/hero/model-woman.jpg"
                      alt="Stylish Glasses & Designer Frames"
                      fill
                      className="object-cover"
                      sizes="72px"
                    />
                  </div>

                  {/* Product Copy (#1D4533 color) */}
                  <div className="flex flex-col">
                    <span className="text-xs sm:text-[13px] font-normal text-[#1D4533]/80 leading-tight">
                      Stylish Eyewear
                    </span>
                    <span className="text-[14px] sm:text-[15.5px] font-medium text-[#1D4533] mt-0.5 tracking-normal">
                      Premium Optics
                    </span>
                    <div className="flex items-center gap-1.5 text-[10.5px] sm:text-[11.5px] font-medium text-[#1D4533]/90 mt-0.5">
                      <span className="text-amber-500">★</span>
                      <span>4.9</span>
                      <span className="text-[#1D4533]/70 font-normal ml-0.5">• Custom Fit</span>
                    </div>
                  </div>
                </motion.div>

              </div>

            </div>

          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* 3. BOTTOM EYE CARE ACCREDITATIONS & TECH TICKER           */}
      {/* ========================================================= */}
      <footer className="w-full max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-14 py-2 sm:py-2.5 overflow-hidden flex-shrink-0 relative">
        <div className="flex items-center animate-ticker hover:[animation-play-state:running] select-none">
          {/* 2 identical sets for seamless -50% infinite marquee loop */}
          {[0, 1].map((setIdx) => (
            <div key={setIdx} className="flex items-center gap-9 sm:gap-14 md:gap-18 pr-9 sm:pr-14 md:pr-18 flex-shrink-0 opacity-95">
              
              {/* 1. ZEISS Medical Optics */}
              <div className="h-6 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#5E3122]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="3" />
                  <line x1="12" y1="3" x2="12" y2="7" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                  <line x1="3" y1="12" x2="7" y2="12" />
                  <line x1="17" y1="12" x2="21" y2="12" />
                </svg>
                <span className="text-lg sm:text-xl font-black tracking-wider text-[#5E3122] font-sans">
                  ZEISS <span className="text-[12px] font-medium tracking-normal text-[#5E3122]/70 uppercase">Medical</span>
                </span>
              </div>

              {/* 2. NABH Accredited Hospital */}
              <div className="h-6 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#5E3122]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                </svg>
                <span className="text-lg sm:text-xl font-extrabold tracking-tight text-[#5E3122] font-sans">
                  NABH <span className="text-[13px] font-semibold tracking-normal text-[#5E3122]/75">Accredited</span>
                </span>
              </div>

              {/* 3. Alcon Vision */}
              <div className="h-6 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#5E3122]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                </svg>
                <span className="text-lg sm:text-xl font-black tracking-tight text-[#5E3122] font-sans">
                  Alcon <span className="text-[12.5px] font-light text-[#5E3122]/75">Vision Suite</span>
                </span>
              </div>

              {/* 4. Essilor Optics */}
              <div className="h-6 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#5E3122]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="7" cy="12" r="4" />
                  <circle cx="17" cy="12" r="4" />
                  <line x1="11" y1="12" x2="13" y2="12" />
                </svg>
                <span className="text-lg sm:text-xl font-bold tracking-tight text-[#5E3122] font-sans">
                  Essilor <span className="text-[12px] font-semibold text-[#5E3122]/70 uppercase tracking-wider">Optics</span>
                </span>
              </div>

              {/* 5. Bausch + Lomb */}
              <div className="h-6 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#5E3122]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 10.5h-5.5V5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5.5H5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h5.5V19c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5.5H19c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z" />
                </svg>
                <span className="text-lg sm:text-xl font-bold tracking-tight text-[#5E3122] font-sans">
                  Bausch + Lomb
                </span>
              </div>

              {/* 6. Blade-Free LASIK */}
              <div className="h-6 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#5E3122]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
                <span className="text-lg sm:text-xl font-extrabold tracking-tight text-[#5E3122] font-sans">
                  Blade-Free <span className="text-[12.5px] font-semibold text-[#5E3122]/75 uppercase tracking-wide">LASIK</span>
                </span>
              </div>

            </div>
          ))}
        </div>
      </footer>
    </section>
  );
}
