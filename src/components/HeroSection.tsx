"use client";

import Image from "next/image";
import Link from "next/link";
import LogoTicker from "./LogoTicker";

export default function HeroSection() {
  return (
    /* Outer Bezel Frame: provides the outer viewport bezel/margins on all screens */
    <div className="w-full h-[100dvh] max-h-[100dvh] p-2 sm:p-3 md:p-4 lg:p-5 box-border bg-[#edf2f7] flex flex-col flex-shrink-0 overflow-hidden">
      
      {/* Hero Inner Screen/Card with rounded bezels all around */}
      <section className="relative w-full h-full flex flex-col justify-between bg-gradient-to-b from-[#bad6ee] via-[#c6def2] to-[#d6e7f7] rounded-[24px] sm:rounded-[32px] md:rounded-[40px] lg:rounded-[48px] overflow-hidden shadow-[0_8px_30px_rgba(15,23,42,0.06)] border border-white/70">
        
        {/* Soft atmospheric ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[250px] bg-white/40 blur-[90px] rounded-full pointer-events-none" />
        <div className="absolute -top-16 right-4 w-72 h-72 bg-sky-200/50 blur-[70px] rounded-full pointer-events-none" />

        {/* Top spacer reserving ample breathing room for the fixed navbar */}
        <div className="h-24 sm:h-28 md:h-32 lg:h-36 w-full flex-shrink-0 pointer-events-none" aria-hidden="true" />

        {/* 2. Middle Content: Headline, Subtitle, and Buttons */}
        <div className="flex-shrink-0 max-w-4xl mx-auto px-3 sm:px-6 text-center mt-0 sm:mt-1 relative z-20">
          <h1 className="font-display font-black text-2xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[62px] tracking-tight text-slate-900 leading-[0.96] uppercase">
            Protect Your <br className="hidden sm:inline" />
            Vision. Naturally. Enjoy Your Life.
          </h1>

          <p className="mt-1.5 sm:mt-2.5 text-slate-600 text-xs sm:text-[13.5px] md:text-[15px] leading-relaxed max-w-xl mx-auto font-normal line-clamp-2 sm:line-clamp-none">
            Advanced eye wellness supplements formulated with powerful nutrients to
            support clearer vision, reduce digital eye strain, and maintain
            long-term eye health.
          </p>

          {/* Action Buttons */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-3.5 mt-2.5 sm:mt-3.5">
            {/* Primary Shop Button */}
            <Link
              href="#shop"
              className="group inline-flex items-center gap-2 sm:gap-2.5 bg-[#17202b] hover:bg-slate-950 text-white pl-4 sm:pl-5 pr-1 sm:pr-1.5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs md:text-[13px] font-semibold shadow-md hover:shadow-lg transition-all"
            >
              <span>Shop Eye Support</span>
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white text-slate-950 flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
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
              href="#science"
              className="group inline-flex items-center gap-2 sm:gap-2.5 bg-white/40 hover:bg-white/70 border border-slate-400/30 text-slate-800 pl-4 sm:pl-5 pr-1 sm:pr-1.5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs md:text-[13px] font-semibold backdrop-blur-sm transition-all"
            >
              <span>Learn More</span>
              <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#17202b] text-white flex items-center justify-center transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
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

        {/* 3. Collage Showcase: Elevated & unorderly on mobile, compact & refined on desktop */}
        <div className="flex-1 min-h-0 relative w-full max-w-5xl mx-auto px-2 sm:px-4 flex items-center sm:items-end justify-center pb-0 sm:pb-2 overflow-visible">
          
          <div className="relative w-full h-full max-h-[260px] sm:max-h-[320px] md:max-h-[340px] lg:max-h-[370px] flex items-center justify-center -translate-y-2 sm:translate-y-0">

            {/* Card 1: Left Tablet (Woman with water) */}
            {/* Mobile: disordered high on left with -12deg tilt; Desktop: compact & refined */}
            <div className="absolute -left-2 sm:left-[5%] md:left-[9%] lg:left-[12%] -top-2 sm:top-[2%] -rotate-12 sm:-rotate-6 w-[112px] sm:w-[145px] md:w-[170px] lg:w-[190px] rounded-[16px] sm:rounded-[22px] md:rounded-[26px] border-[4px] sm:border-[6px] md:border-[7px] border-[#18202a] bg-[#18202a] shadow-[0_14px_30px_rgba(15,23,42,0.22)] overflow-hidden transition-transform duration-300 hover:scale-105 z-10">
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
            {/* Mobile: tilted disorderly at +7deg overlapping bottom-left; Desktop: compact -10deg */}
            <div className="absolute left-0 sm:left-[3%] md:left-[6%] lg:left-[9%] bottom-2 sm:bottom-[3%] rotate-[7deg] sm:-rotate-10 w-[110px] sm:w-[140px] md:w-[165px] lg:w-[185px] bg-white rounded-xl sm:rounded-2xl p-1.5 sm:p-2 shadow-[0_16px_32px_rgba(15,23,42,0.18)] border-[2px] sm:border-[2.5px] border-white transition-transform duration-300 hover:scale-105 z-20">
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

            {/* Card 3: Centerpiece Supplement Bottle (VISIONOVA) */}
            {/* Compact scaled bottle on desktop, elevated on mobile */}
            <div className="relative z-30 h-[92%] sm:h-[95%] max-h-[230px] sm:max-h-[290px] md:max-h-[310px] lg:max-h-[330px] aspect-[3/4] transition-transform duration-300 hover:scale-105 select-none pointer-events-auto flex items-end justify-center -rotate-2 sm:-rotate-1">
              <div className="relative w-full h-full drop-shadow-[0_18px_30px_rgba(15,23,42,0.22)]">
                <Image
                  src="/images/bottle.jpg"
                  alt="VISIONOVA Eye Wellness Formula Supplement Bottle"
                  fill
                  priority
                  className="object-contain rounded-2xl sm:rounded-3xl"
                  sizes="(max-width: 640px) 160px, 280px"
                />
              </div>

              {/* Floating Capsule 1 (Top right) */}
              <div className="absolute -top-2 -right-3 sm:-right-6 w-7 sm:w-10 md:w-12 aspect-square animate-float-capsule pointer-events-none drop-shadow-md">
                <Image
                  src="/images/capsule.jpg"
                  alt="Floating capsule supplement"
                  fill
                  className="object-contain rounded-full"
                  sizes="50px"
                />
              </div>

              {/* Floating Capsule 2 (Mid right) */}
              <div className="absolute top-16 sm:top-20 -right-4 sm:-right-8 w-6 sm:w-8 md:w-10 aspect-square animate-float-gentle pointer-events-none drop-shadow-md rotate-45">
                <Image
                  src="/images/capsule.jpg"
                  alt="Floating capsule supplement"
                  fill
                  className="object-contain rounded-full"
                  sizes="40px"
                />
              </div>
            </div>

            {/* Card 4: Top-Right Card (20k+ Satisfied Senior) */}
            {/* Mobile: shifted high on top-right with disorderly +13deg tilt; Desktop: compact */}
            <div className="absolute -right-2 sm:right-[5%] md:right-[8%] lg:right-[11%] -top-3 sm:top-[2%] rotate-[13deg] sm:rotate-6 w-[108px] sm:w-[140px] md:w-[165px] lg:w-[185px] bg-[#6caad8]/25 backdrop-blur-md rounded-xl sm:rounded-2xl p-1.5 sm:p-2 shadow-[0_14px_28px_rgba(15,23,42,0.15)] border border-white/70 transition-transform duration-300 hover:scale-105 z-10">
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
            {/* Mobile: disordered tilt at -6deg overlapping bottom right; Desktop: compact +10deg */}
            <div className="absolute -right-1 sm:right-[2%] md:right-[5%] lg:right-[8%] bottom-1 sm:bottom-[3%] -rotate-[6deg] sm:rotate-10 w-[112px] sm:w-[145px] md:w-[170px] lg:w-[190px] bg-[#0c1622] text-white rounded-xl sm:rounded-2xl p-1.5 sm:p-2 shadow-[0_18px_36px_rgba(15,23,42,0.28)] border-[2px] sm:border-[2.5px] border-[#1d2734] transition-transform duration-300 hover:scale-105 z-20">
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
