"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface CtaBannerProps {
  title?: string;
  tagline?: string;
  description?: string;
}

export default function CtaBanner({
  title = "Ready to Experience High-Definition Vision?",
  tagline = "CONSULT WITH OUR SENIOR SURGEONS",
  description = "Schedule a comprehensive diagnostic consultation at our Thrissur, Cherpu, Kunnamkulam, or Kodungallur centers today.",
}: CtaBannerProps) {
  const triggerAppointment = () => {
    window.dispatchEvent(new CustomEvent("open-appointment-modal"));
  };

  return (
    <section className="w-full bg-[#F2E9DC] py-10 sm:py-14 px-3 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem] p-8 sm:p-12 md:p-16 overflow-hidden text-center text-[#F2E9DC] shadow-[0_20px_50px_rgba(48,41,31,0.25)] border border-[#C9A581]/30"
          style={{
            background: "linear-gradient(145deg, #675E31 0%, #524B27 45%, #30291F 100%)",
          }}
        >
          {/* Ambient Sheen */}
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#C9A581]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A581]" />
              <span className="text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-[0.22em] text-[#C9A581]">
                {tagline}
              </span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              {title}
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-white/80 font-sans font-normal leading-relaxed max-w-2xl mx-auto">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 pt-3 sm:pt-4">
              <button
                type="button"
                onClick={triggerAppointment}
                className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#A55322] hover:bg-[#8C4318] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-[0_8px_25px_rgba(165,83,34,0.35)] hover:shadow-[0_12px_30px_rgba(165,83,34,0.45)] hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Book Appointment Online</span>
                <span>→</span>
              </button>

              <Link
                href="/branches"
                className="w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 rounded-full bg-white/15 hover:bg-white/25 text-white text-xs sm:text-sm font-semibold tracking-wide transition-all border border-white/30 hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
              >
                <span>View Our 4 Branches</span>
                <svg className="w-3.5 h-3.5 text-[#C9A581]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
