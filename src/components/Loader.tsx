"use client";

import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-[#f7f8f4] flex flex-col items-center justify-center pointer-events-none"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex flex-col items-center justify-center gap-6">
        {/* Animated Abstract Eye Concept */}
        <div className="relative w-24 h-24 flex items-center justify-center">
          {/* Outer Ring */}
          <motion.div
            className="absolute w-full h-full border-[1.5px] border-[#2A835F]/40 rounded-full"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          {/* Middle Ring */}
          <motion.div
            className="absolute w-2/3 h-2/3 border-[1.5px] border-[#9A4F3C]/60 rounded-full"
            initial={{ scale: 0, opacity: 0, rotate: -45 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          />
          {/* Inner Iris (Lime accent) */}
          <motion.div
            className="absolute w-3 h-3 bg-[#d6f075] rounded-full shadow-[0_0_15px_rgba(214,240,117,0.8)]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              type: "spring",
              stiffness: 200,
              damping: 12,
            }}
          />
        </div>
        
        {/* Text Reveal */}
        <div className="overflow-hidden flex flex-col items-center gap-1">
          <motion.h1 
            className="font-display font-black text-2xl sm:text-3xl tracking-[0.25em] text-[#1e2722] uppercase"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.33, 1, 0.68, 1] }}
          >
            Aarya Eye Care
          </motion.h1>
          <motion.p
             className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.24em] text-[#9A4F3C]"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.8, delay: 1 }}
          >
            Super Speciality Eye Hospital
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
