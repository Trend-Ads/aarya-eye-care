"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function VisionSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x1 = useTransform(scrollYProgress, [0, 1], ["5%", "-25%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-25%", "5%"]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={containerRef} id="vision" className="py-32 md:py-64 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Ambient Color Textures */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-[#2A835F]/15 blur-[120px]" />
        <div className="absolute bottom-[10%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-sky-600/10 blur-[120px]" />
      </div>

      {/* Symmetrical Grid Lines Texture Overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
        style={{ 
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px)',
          backgroundSize: '64px 64px'
        }}
      />

      {/* Background massive typography (Parallax scrolling) */}
      <div className="absolute inset-0 flex flex-col justify-center pointer-events-none z-0">
        <motion.div style={{ x: x1 }} className="whitespace-nowrap flex gap-12 opacity-10">
          <span className="text-[20vw] font-light tracking-widest uppercase leading-none font-serif">AARYA CARE</span>
          <span className="text-[20vw] font-light tracking-widest uppercase leading-none font-serif">AARYA CARE</span>
        </motion.div>
        <motion.div style={{ x: x2 }} className="whitespace-nowrap flex gap-12 opacity-20">
          <span 
            className="text-[20vw] font-light tracking-widest uppercase leading-none text-transparent font-serif"
            style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.8)" }}
          >
            AARYA CARE
          </span>
          <span 
            className="text-[20vw] font-light tracking-widest uppercase leading-none text-transparent font-serif"
            style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.8)" }}
          >
            AARYA CARE
          </span>
        </motion.div>
      </div>

      {/* Foreground Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center gap-12">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-sm font-semibold tracking-widest uppercase border border-white/20 rounded-full px-6 py-3"
        >
          Best Eye Hospital
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wider leading-[1.2] uppercase max-w-4xl text-balance font-serif"
        >
          You can say farewell to blurred vision & <br />
          <span className="text-sky-400 italic font-serif lowercase">welcome the happier days.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-white/70 max-w-2xl font-light tracking-wide"
        >
          The best way to maintain healthy vision is to be proactive!
        </motion.p>
        
        <motion.div 
          style={{ y }}
          className="w-full max-w-lg aspect-square rounded-full overflow-hidden mt-16 relative bg-white/5 shadow-2xl p-12 backdrop-blur-sm border border-white/10"
        >
          <motion.img 
            src="/logos/named-logo.png"
            alt="Aarya Eye Care Logo"
            className="w-full h-full object-contain drop-shadow-[0_0_35px_rgba(255,255,255,0.4)]"
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </motion.div>
      </div>
    </section>
  );
}
