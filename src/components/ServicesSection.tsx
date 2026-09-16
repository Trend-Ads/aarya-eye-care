"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface TreatmentItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export default function ServicesSection() {
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

  return (
    <section
      id="treatments"
      className="w-full bg-[#f8fafc] py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-12 relative select-none border-t border-slate-200/70"
    >
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
        {/* ========================================================= */}
        {/* Header: Title and Book Consultation Button                */}
        {/* ========================================================= */}
        {/* ========================================================= */}
        {/* Header: Title and Book Consultation Button                */}
        {/* ========================================================= */}
        <motion.div 
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2 border-b border-slate-200/80"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
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
        </motion.div>

        {/* ========================================================= */}
        {/* Treatment Cards Grid: Background Image & Title Only       */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {treatments.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                href="#appointment"
                className="group relative h-64 sm:h-72 md:h-80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-end p-5 sm:p-6 select-none block"
              >
                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Dark Gradient Overlay for title clarity */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/10 group-hover:from-black/90 transition-all duration-300" />

                {/* Subtle top badge for category */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white border border-white/25">
                    {item.category}
                  </span>
                </div>

                {/* Title & Arrow at Bottom */}
                <div className="relative z-10 flex items-end justify-between gap-3">
                  <h3 className="font-display font-black text-2xl sm:text-3xl text-white uppercase tracking-tight leading-none group-hover:text-emerald-300 transition-colors drop-shadow-xs">
                    {item.title}
                  </h3>
                  <span className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center text-sm group-hover:bg-[#2A835F] group-hover:scale-110 transition-all duration-300 flex-shrink-0 shadow-xs">
                    ↗
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
