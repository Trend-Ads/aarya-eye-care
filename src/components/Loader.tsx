"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#F2E9DC] flex flex-col items-center justify-center pointer-events-none select-none"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex flex-col items-center justify-center gap-6">
        {/* Animated Brand Eye Concept */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          {/* Outer Ring */}
          <motion.div
            className="absolute w-full h-full border-[1.5px] border-[#675E31]/30 rounded-full"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          />
          {/* Middle Ring */}
          <motion.div
            className="absolute w-2/3 h-2/3 border-[1.5px] border-[#A55322]/45 rounded-full"
            initial={{ scale: 0, opacity: 0, rotate: -45 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 1.1, delay: 0.2, ease: "easeOut" }}
          />
          {/* Center Logo Icon */}
          <motion.div
            className="relative w-8 h-8 flex items-center justify-center"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.45,
              type: "spring",
              stiffness: 220,
              damping: 14,
            }}
          >
            <Image
              src="/logos/logo-main.png"
              alt="AARYA EYE CARE logo"
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        </div>
        
        {/* Text Reveal */}
        <div className="overflow-hidden flex flex-col items-center gap-1.5 text-center">
          <motion.h1 
            className="font-avantgarde font-semibold text-2xl sm:text-3xl text-[#30291F] tracking-[0.06em]"
            style={{
              fontFamily: "'AvantGarde Demi', 'AvantGarde-Demi', 'ITC Avant Garde Gothic', 'ITC Avant Garde Gothic Std', 'Avant Garde', 'Century Gothic', sans-serif",
            }}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            AARYA EYE CARE
          </motion.h1>
          <motion.p
            className="text-[9.5px] sm:text-[11px] font-bold uppercase tracking-[0.24em] text-[#A55322]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease: "easeOut" }}
          >
            Darkness to Light
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
