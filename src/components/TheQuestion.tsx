"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export function TheQuestion() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["5%", "-25%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-25%", "5%"]);
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={containerRef}
      id="clarity"
      className="py-12 sm:py-16 md:py-20 text-[#FFF9F2] relative overflow-hidden select-none"
      style={{
        background: "linear-gradient(145deg, #BA6534 0%, #A55322 45%, #7D3915 100%)",
      }}
    >
      {/* Subtle warm ambient lighting sheen */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(ellipse at 50% 15%, rgba(255, 215, 185, 0.35), transparent 70%)",
        }}
      />

      {/* Background massive kinetic typography (Parallax scrolling in opposite directions) */}
      <div className="absolute inset-0 flex flex-col justify-center pointer-events-none z-0">
        {/* Upper stream: Solid fill */}
        <motion.div
          style={{ x: x1 }}
          className="whitespace-nowrap flex gap-8 sm:gap-14 opacity-15"
        >
          <span className="text-[12vw] sm:text-[13vw] font-avantgarde font-semibold tracking-tighter uppercase leading-none text-white">
            AARYA CARE • AARYA CARE • AARYA CARE
          </span>
          <span className="text-[12vw] sm:text-[13vw] font-avantgarde font-semibold tracking-tighter uppercase leading-none text-white">
            AARYA CARE • AARYA CARE • AARYA CARE
          </span>
        </motion.div>

        {/* Lower stream: Stroked outline */}
        <motion.div
          style={{ x: x2 }}
          className="whitespace-nowrap flex gap-8 sm:gap-14 opacity-35 mt-1 sm:mt-2"
        >
          <span
            className="text-[12vw] sm:text-[13vw] font-avantgarde font-semibold tracking-tighter uppercase leading-none text-transparent"
            style={{ WebkitTextStroke: "2px rgba(255, 245, 235, 0.85)" }}
          >
            AARYA CARE • AARYA CARE • AARYA CARE
          </span>
          <span
            className="text-[12vw] sm:text-[13vw] font-avantgarde font-semibold tracking-tighter uppercase leading-none text-transparent"
            style={{ WebkitTextStroke: "2px rgba(255, 245, 235, 0.85)" }}
          >
            AARYA CARE • AARYA CARE • AARYA CARE
          </span>
        </motion.div>
      </div>

      {/* Foreground Content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 relative z-10 flex flex-col items-center text-center gap-4 sm:gap-6">
        {/* Editorial Statement */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-avantgarde font-semibold tracking-tight leading-[1.15] uppercase max-w-4xl text-balance text-white"
        >
          It begins long before the lens is crafted. <br />
          <span className="block mt-2 sm:mt-3 text-sm sm:text-base md:text-lg lg:text-xl text-[#FCECDD] italic font-serif lowercase font-normal tracking-normal">
            It begins with trusted care.
          </span>
        </motion.h2>

        {/* Circular Floating Focal Frame with Vertical Parallax */}
        <motion.div
          style={{ y }}
          className="w-full max-w-[160px] sm:max-w-[200px] md:max-w-[230px] aspect-square rounded-full overflow-hidden mt-2 sm:mt-4 relative bg-[#F2E9DC] shadow-[0_24px_55px_rgba(48,41,31,0.35)] ring-4 sm:ring-[6px] ring-white/20 border-2 border-white/80 flex items-center justify-center group"
        >
          {/* Ambient soft glow */}
          <div className="absolute inset-0 rounded-full bg-radial from-white/60 via-transparent to-transparent pointer-events-none" />

          {/* Brand Logo Symbol */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0.8 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative w-[58%] h-[58%] flex items-center justify-center drop-shadow-xs"
          >
            <Image
              src="/logos/logo-main.png"
              alt="Aarya Eye Care brand emblem"
              fill
              className="object-contain pointer-events-none select-none transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 150px, 180px"
              priority={false}
            />
          </motion.div>
        </motion.div>

        {/* Subtle Brand Foundation Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-helvetica text-xs sm:text-[13px] text-white/80 tracking-widest uppercase max-w-md pt-1"
        >
          From Darkness to Light — Super Speciality Eye Care
        </motion.p>
      </div>
    </section>
  );
}

export default TheQuestion;
