"use client";

import { useMemo } from "react";
import type { TreatmentTestimonial } from "@/data/treatments";

interface TreatmentTestimonialsProps {
  treatmentName: string;
  badge?: string;
  testimonials?: TreatmentTestimonial[];
}

// Fallback testimonials if none provided
const DEFAULT_TESTIMONIALS: TreatmentTestimonial[] = [
  {
    author: "Sudhakar Dev",
    location: "Thrissur",
    role: "Verified Patient",
    rating: 5,
    text: "Aarya eye care hospital has changed my life from blurry vision. The medical team and their support were amazing. They were very friendly and cooperative throughout my treatment procedure. Thank you Aarya Eye Care Hospital.",
  },
  {
    author: "Krishnan V",
    location: "Thrissur",
    role: "Verified Patient",
    rating: 5,
    text: "I got the best eye treatment in Thrissur from here. I was challenged to do my day-to-day activities with vision problems. From visiting this hospital, I got hope. From the beginning of the procedure to post-operative care, their service was outstanding.",
  },
  {
    author: "Remya Santhosh",
    location: "Cherpu",
    role: "Patient Family Member",
    rating: 5,
    text: "Arya Eye Care Hospital provides the best surgical care in Thrissur. From the diagnosis, their medical support was excellent. They explained the treatment method and each procedure thoroughly. The entire procedure was stress-free for us.",
  },
  {
    author: "Lakshmi Priya",
    location: "Kunnamkulam",
    role: "Verified Patient",
    rating: 5,
    text: "Arya Eye Care provides medical care of the highest standard. From my experience, I can assure you that they are the best in Kerala. The surgery was quick and painless. The entire medical team was very supportive and incredibly caring throughout the process.",
  },
];

// Clean vector SVG star icon (never emoji)
function StarIcon({ className = "w-4 h-4 text-[#A55322]" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1"
      aria-hidden="true"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

// Clean vector quote icon
function QuoteIcon({ className = "w-7 h-7 text-[#C9A581]/40" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
  );
}

// Clean vector check icon for verified badge
function CheckBadgeIcon({ className = "w-3 h-3 text-[#675E31]" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function TreatmentTestimonials({
  treatmentName,
  badge = "PATIENT EXPERIENCES",
  testimonials,
}: TreatmentTestimonialsProps) {
  // Use provided testimonials or fallback, ensuring at least 4 items for seamless marquee loop
  const list = useMemo(() => {
    const raw = testimonials && testimonials.length > 0 ? testimonials : DEFAULT_TESTIMONIALS;
    if (raw.length < 4) {
      return [...raw, ...DEFAULT_TESTIMONIALS.slice(0, 4 - raw.length)];
    }
    return raw;
  }, [testimonials]);

  // Duplicate items for continuous 50% translation loop
  const duplicatedList = useMemo(() => [...list, ...list], [list]);

  // Extract initials from author name (e.g., "Sudhakar Dev" -> "SD")
  const getInitials = (name: string) => {
    const parts = name.trim().split(" ");
    if (parts.length >= 2) {
      return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  return (
    <section className="w-full bg-[#F2E9DC] py-16 sm:py-20 md:py-24 border-t border-[#C9A581]/25 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14 text-center">
        {/* Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] sm:text-xs font-sans font-bold uppercase tracking-wider bg-[#30291F]/8 text-[#A55322] border border-[#A55322]/20 mb-3">
          <span className="w-2 h-2 rounded-full bg-[#A55322] animate-pulse" />
          <span>{badge}</span>
        </div>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#30291F] font-bold tracking-tight">
          What Our Patients Say
        </h2>

        {/* Subtitle */}
        <p className="text-xs sm:text-sm md:text-base text-[#30291F]/75 mt-2.5 max-w-2xl mx-auto font-sans leading-relaxed">
          Real recovery stories and reviews from patients who underwent {treatmentName} at Aarya Eye Care.
        </p>

        {/* Aggregate Review Trust Indicator */}
        <div className="mt-4 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/80 border border-[#C9A581]/30 shadow-2xs font-sans text-xs text-[#30291F]">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="w-3.5 h-3.5 text-[#A55322]" />
            ))}
          </div>
          <span className="font-bold text-[#A55322]">4.9 / 5</span>
          <span className="text-[#30291F]/50">•</span>
          <span className="text-[#30291F]/80">Over 2,500+ Happy Patients</span>
        </div>
      </div>

      {/* Auto-Moving Reviews Marquee */}
      <div className="relative w-full overflow-hidden group">
        {/* Left & Right Soft Fade Gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-8 sm:w-20 md:w-32 bg-gradient-to-r from-[#F2E9DC] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-8 sm:w-20 md:w-32 bg-gradient-to-l from-[#F2E9DC] to-transparent z-10 pointer-events-none" />

        {/* Continuous Moving Row (Pauses on Hover for easy reading) */}
        <div
          className="animate-ticker flex gap-4 sm:gap-6 w-max cursor-grab active:cursor-grabbing hover:[animation-play-state:paused]"
          style={{ animationDuration: "38s" }}
        >
          {duplicatedList.map((item, idx) => (
            <div
              key={`${item.author}-${idx}`}
              className="w-[300px] sm:w-[360px] md:w-[400px] shrink-0 p-5 sm:p-6.5 rounded-2xl sm:rounded-3xl bg-white border border-[#C9A581]/35 shadow-sm hover:shadow-xl hover:border-[#A55322] transition-all duration-300 flex flex-col justify-between select-none"
            >
              {/* Card Header: 5 Stars + Decorative Quote Glyph */}
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating || 5)].map((_, sIdx) => (
                      <StarIcon key={sIdx} className="w-3.5 h-3.5 text-[#A55322]" />
                    ))}
                  </div>
                  <QuoteIcon className="w-6 h-6 text-[#C9A581]/40" />
                </div>

                {/* Patient Review Text */}
                <p className="text-xs sm:text-sm text-[#30291F]/85 font-sans leading-relaxed line-clamp-4 italic">
                  &ldquo;{item.text}&rdquo;
                </p>
              </div>

              {/* Card Footer: Patient Initials Avatar, Name & Verified Badge */}
              <div className="mt-5 pt-4 border-t border-[#C9A581]/25 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#675E31] text-[#F2E9DC] font-bold text-xs sm:text-sm flex items-center justify-center font-serif shrink-0 shadow-xs">
                    {getInitials(item.author)}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xs sm:text-sm text-[#30291F] leading-tight">
                      {item.author}
                    </h3>
                    <div className="text-[10px] sm:text-[11px] text-[#30291F]/65 font-sans mt-0.5">
                      {item.role || "Verified Patient"}
                      {item.location ? ` • ${item.location}` : ""}
                    </div>
                  </div>
                </div>

                {/* Verified Check Badge */}
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#675E31]/10 text-[#675E31] text-[10px] font-sans font-bold shrink-0">
                  <CheckBadgeIcon className="w-2.5 h-2.5" />
                  <span>Verified</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Hint */}
      <div className="text-center mt-6">
        <span className="text-[11px] text-[#30291F]/50 font-sans tracking-wide">
          Hover over any review card to pause and read.
        </span>
      </div>
    </section>
  );
}

