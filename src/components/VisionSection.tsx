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
    <section 
      ref={containerRef} 
      id="vision" 
      className="py-32 md:py-64 bg-dark-green text-ivory relative overflow-hidden"
    >
      {/* Background massive typography (Parallax scrolling) */}
      <div className="absolute inset-0 flex flex-col justify-center pointer-events-none z-0 select-none">
        <motion.div style={{ x: x1 }} className="whitespace-nowrap flex gap-8 opacity-10">
          <span className="text-[20vw] font-bold tracking-tighter uppercase leading-none">Aarya Eye Care</span>
          <span className="text-[20vw] font-bold tracking-tighter uppercase leading-none">Aarya Eye Care</span>
        </motion.div>
        <motion.div style={{ x: x2 }} className="whitespace-nowrap flex gap-8 opacity-20">
          <span 
            className="text-[20vw] font-bold tracking-tighter uppercase leading-none text-transparent"
            style={{ WebkitTextStroke: "2px rgba(255, 255, 240, 1)" }}
          >
            Aarya Eye Care
          </span>
          <span 
            className="text-[20vw] font-bold tracking-tighter uppercase leading-none text-transparent"
            style={{ WebkitTextStroke: "2px rgba(255, 255, 240, 1)" }}
          >
            Aarya Eye Care
          </span>
        </motion.div>
      </div>

      {/* Foreground Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center gap-12">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block text-sm font-semibold tracking-widest uppercase border border-ivory/20 rounded-full px-6 py-3"
        >
          01 / Best Eye Hospital
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] uppercase max-w-4xl text-balance"
        >
          You can say farewell to blurred vision & <br />
          <span className="text-leaf italic font-serif lowercase">welcome the happier days.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-ivory/70 max-w-2xl font-light tracking-wide -mt-4"
        >
          The best way to maintain healthy vision is to be proactive!
        </motion.p>
        
        <motion.div 
          style={{ y }}
          className="w-full max-w-[340px] sm:max-w-[400px] md:max-w-md aspect-square rounded-full overflow-hidden mt-12 sm:mt-16 relative bg-ivory/5 shadow-2xl p-8 sm:p-10 backdrop-blur-sm border border-ivory/10 flex items-center justify-center"
        >
          <motion.img 
            src="/logos/logo-main.png"
            alt="Aarya Eye Care"
            className="w-[78%] h-[78%] object-contain drop-shadow-[0_0_35px_rgba(255,255,255,0.3)]"
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

// Named alias for convenience if imported as TheQuestion
export { VisionSection as TheQuestion };
