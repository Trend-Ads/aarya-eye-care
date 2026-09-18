"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface TreatmentItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export default function ServicesSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const treatments: TreatmentItem[] = [
    {
      id: "cataract",
      title: "Cataract Surgery",
      category: "Micro-Incision Phaco",
      image: "/images/eye-care-consultation.jpg",
    },
    {
      id: "lasik",
      title: "Blade-Free LASIK",
      category: "Laser Vision Correction",
      image: "/images/eye-closeup.jpg",
    },
    {
      id: "retina",
      title: "Retina & Vitreous",
      category: "Advanced Vitreo-Retinal Care",
      image: "/hero/hero2.jpg",
    },
    {
      id: "glaucoma",
      title: "Glaucoma Care",
      category: "Early Pressure & OCT Shield",
      image: "/images/doctor-exam.jpg",
    },
    {
      id: "pediatric",
      title: "Pediatric Ophthalmology",
      category: "Child Eye Care & Squint",
      image: "/hero/hero1.webp",
    },
    {
      id: "emergency",
      title: "24/7 Eye Trauma",
      category: "Emergency Surgical Care",
      image: "/hero/hero3.webp",
    },
  ];

  // We have 6 items, so we move the container by -83.33% to show the last one fully
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-83.333%"]);

  return (
    <section 
      ref={containerRef} 
      id="treatments"
      className="w-full bg-[#f8fafc] relative h-[400vh] select-none"
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col pt-24 md:pt-32 pb-12 border-t border-slate-200/70">
        
        {/* Header */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-12 z-20 mb-8 shrink-0 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1 sm:space-y-1.5">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#2A835F] flex items-center gap-2">
              <span className="w-5 h-[2px] bg-[#2A835F] inline-block rounded-full" />
              Specialised Clinical Treatments
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-slate-900 tracking-tight leading-tight uppercase">
              Our Treatments &amp; Procedures
            </h2>
          </div>

          <Link
            href="#appointment"
            className="self-start sm:self-end px-5 py-2.5 rounded-full bg-[#2A835F] hover:bg-[#236e4f] text-white text-xs font-bold transition-all duration-200 shadow-sm hover:scale-105 active:scale-95 flex items-center gap-1.5"
          >
            <span>Book Consultation</span>
            <span>↗</span>
          </Link>
        </div>

        {/* Horizontal Scrolling Track */}
        <div className="flex-1 relative w-full flex items-center">
          <motion.div 
            className="flex gap-6 md:gap-12 px-4 sm:px-6 lg:px-12 h-[50vh] md:h-[65vh]" 
            style={{ x, width: `${treatments.length * 100}vw` }}
          >
            {treatments.map((item, index) => (
              <div
                key={item.id}
                className="group relative w-[80vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] h-full shrink-0 rounded-3xl overflow-hidden shadow-lg border border-slate-200/50"
              >
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 40vw"
                />

                {/* Dark Gradient Overlay for title clarity */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 group-hover:from-black/90 transition-all duration-300" />

                {/* Subtle top badge for category */}
                <div className="absolute top-6 left-6 z-10">
                  <span className="px-3 py-1 rounded-full text-[11px] sm:text-xs font-normal tracking-wide bg-white/20 backdrop-blur-md text-white/95 border border-white/25">
                    {item.category}
                  </span>
                </div>

                {/* Number Indicator */}
                <div className="absolute top-6 right-6 z-10">
                  <span className="text-white/60 font-mono text-lg sm:text-xl font-normal">
                    0{index + 1}
                  </span>
                </div>

                {/* Title & Arrow at Bottom */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end">
                  <div className="flex items-end justify-between gap-3">
                    <h3 className="font-sans font-normal text-2xl sm:text-3xl lg:text-4xl text-white tracking-normal leading-snug group-hover:text-emerald-200 transition-colors max-w-[85%]">
                      {item.title}
                    </h3>
                    <Link
                      href="#appointment"
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center text-sm sm:text-base group-hover:bg-[#2A835F] group-hover:scale-110 transition-all duration-300 flex-shrink-0 shadow-xs cursor-pointer pointer-events-auto"
                    >
                      ↗
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Progress Bar at the bottom */}
        <div className="absolute bottom-6 left-0 right-0 px-4 sm:px-6 lg:px-12 z-20">
          <div className="max-w-7xl mx-auto">
            <div className="w-full h-[3px] bg-slate-200 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-[#2A835F] origin-left"
                style={{ scaleX: scrollYProgress }}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
