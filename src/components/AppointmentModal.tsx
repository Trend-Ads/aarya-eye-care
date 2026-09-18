"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { useLenis } from "lenis/react";

const departments = [
  "General Eye Examination",
  "Blade-Free LASIK Laser",
  "Cataract Surgery & IOL",
  "Retina & Vitreous Care",
  "Glaucoma Management",
  "Pediatric & Cornea Clinic",
];

function ModalCustomSelect({
  options,
  value,
  onChange,
  icon,
}: {
  options: string[];
  value: string;
  onChange: (val: string) => void;
  icon: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      {icon}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="w-full pl-10 pr-8 py-2.5 sm:py-3 rounded-2xl bg-white border border-[#C9A581]/40 text-[#30291F] text-xs sm:text-[13px] cursor-pointer flex items-center justify-between hover:border-[#675E31] focus:border-[#675E31] transition-all shadow-2xs select-none"
      >
        <span className="truncate">{value}</span>
        <svg
          className={`w-3.5 h-3.5 text-[#675E31]/70 transition-transform duration-300 shrink-0 ${isOpen ? "rotate-180 text-[#675E31]" : ""}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute z-50 w-full mt-1.5 bg-white border border-[#C9A581]/40 rounded-2xl shadow-[0_15px_35px_rgba(48,41,31,0.15)] overflow-hidden py-1.5"
          >
            <div
              data-lenis-prevent
              className="max-h-48 overflow-y-auto overscroll-contain scrollbar-hide"
            >
              {options.map((option) => (
                <div
                  key={option}
                  onClick={() => {
                    onChange(option);
                    setIsOpen(false);
                  }}
                  className={`px-4 py-2.5 text-xs sm:text-[12.5px] cursor-pointer transition-colors flex items-center justify-between ${
                    value === option
                      ? "text-[#675E31] font-semibold bg-[#8A875C]/15"
                      : "text-[#30291F] hover:bg-[#C9A581]/20 hover:text-[#675E31]"
                  }`}
                >
                  <span>{option}</span>
                  {value === option && (
                    <span className="text-[#675E31] text-xs font-bold">✓</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AppointmentModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const lenis = useLenis();

  // Form State
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [department, setDepartment] = useState<string>("General Eye Examination");
  const [email, setEmail] = useState<string>("");

  // Lock background scroll (both native body and Lenis) when modal is open
  useEffect(() => {
    if (isOpen) {
      lenis?.stop();
      const originalBodyOverflow = document.body.style.overflow;
      const originalHtmlOverflow = document.documentElement.style.overflow;
      const originalBodyPaddingRight = document.body.style.paddingRight;

      // Compensate for scrollbar width to prevent horizontal layout shift
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }

      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";

      return () => {
        lenis?.start();
        document.body.style.overflow = originalBodyOverflow;
        document.documentElement.style.overflow = originalHtmlOverflow;
        document.body.style.paddingRight = originalBodyPaddingRight;
      };
    } else {
      lenis?.start();
    }
  }, [isOpen, lenis]);

  // Global click interception on any href="#appointment" or data-open-appointment
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(
        'a[href="#appointment"], button[href="#appointment"], [data-open-appointment]'
      );
      if (target) {
        e.preventDefault();
        setSubmitted(false);
        setIsOpen(true);
      }
    };

    const handleCustomEvent = () => {
      setSubmitted(false);
      setIsOpen(true);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleDocumentClick, true);
    window.addEventListener("open-appointment-modal", handleCustomEvent);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("click", handleDocumentClick, true);
      window.removeEventListener("open-appointment-modal", handleCustomEvent);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setSubmitted(false);
    }, 250);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          data-lenis-prevent
          className="fixed inset-0 z-[100] flex items-center justify-center p-3.5 sm:p-4 overflow-y-auto overscroll-contain"
        >
          {/* Ambient Warm Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 bg-[#30291F]/60 backdrop-blur-sm -z-10"
            onClick={handleClose}
          />

          {/* Editorial Double-Bezel Framed Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-md my-auto z-10 select-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Outer Warm Beige Frame (#C9A581) */}
            <div className="w-full bg-[#C9A581] p-2 sm:p-2.5 rounded-[32px] sm:rounded-[36px] shadow-[0_30px_90px_rgba(48,41,31,0.35)] border border-[#F2E9DC]/60">
              
              {/* Inner Warm Linen Surface Card */}
              <div className="bg-[#F2E9DC] rounded-[24px] sm:rounded-[28px] p-6 sm:p-7 sm:px-8 relative border border-[#C9A581]/40 shadow-xs">
                
                {/* Subtle decorative background light sheen */}
                <div className="absolute inset-0 rounded-[24px] sm:rounded-[28px] overflow-hidden pointer-events-none">
                  <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#C9A581]/30 rounded-full blur-2xl" />
                </div>

                {/* Close Button */}
                <button
                  onClick={handleClose}
                  aria-label="Close dialog"
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#30291F]/10 hover:bg-[#30291F] text-[#30291F] hover:text-[#F2E9DC] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-2xs group z-20"
                >
                  <svg className="w-4 h-4 transition-transform group-hover:rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>

                {!submitted ? (
                  <div>
                    {/* Header: Logo, Tagline & Rigid Title */}
                    <div className="pr-8 mb-5">
                      <div className="flex items-center gap-2 mb-1.5">
                        <div className="relative w-6 h-6 flex-shrink-0">
                          <Image
                            src="/logos/logo-main.png"
                            alt="AARYA EYE CARE logo"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <span 
                          className="font-avantgarde font-semibold text-xs text-[#30291F] tracking-[0.04em] leading-none"
                          style={{
                            fontFamily: "'AvantGarde Demi', 'AvantGarde-Demi', 'ITC Avant Garde Gothic', 'ITC Avant Garde Gothic Std', 'Avant Garde', 'Century Gothic', sans-serif",
                          }}
                        >
                          AARYA EYE CARE
                        </span>
                        <span className="text-[#30291F]/30 text-xs">•</span>
                        <span className="text-[#A55322] text-[9.5px] font-mono font-semibold tracking-[0.2em] uppercase">
                          Darkness to Light
                        </span>
                      </div>

                      <h3 className="font-serif font-medium text-2xl sm:text-[26px] text-[#30291F] tracking-tight leading-tight">
                        Book Consultation
                      </h3>
                      <p className="text-[#30291F]/75 text-xs mt-1 leading-relaxed">
                        Share your details and our clinical care desk will contact you to confirm your priority slot.
                      </p>
                    </div>

                    {/* Bespoke Form */}
                    <form onSubmit={handleSubmit} className="space-y-3.5">
                      
                      {/* Full Name */}
                      <div>
                        <label className="block text-[#30291F] text-[11px] font-semibold uppercase tracking-wider mb-1.5 pl-0.5">
                          Full Name <span className="text-[#A55322]">*</span>
                        </label>
                        <div className="relative">
                          <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#675E31] pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                          <input
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="e.g. Rahul Menon"
                            className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-2xl bg-white border border-[#C9A581]/40 text-[#30291F] placeholder:text-[#30291F]/40 focus:bg-white focus:border-[#675E31] focus:ring-2 focus:ring-[#675E31]/15 outline-none text-xs sm:text-[13px] transition-all shadow-2xs"
                          />
                        </div>
                      </div>

                      {/* Phone Number */}
                      <div>
                        <label className="block text-[#30291F] text-[11px] font-semibold uppercase tracking-wider mb-1.5 pl-0.5">
                          Phone Number <span className="text-[#A55322]">*</span>
                        </label>
                        <div className="relative">
                          <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#675E31] pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
                            <line x1="12" y1="18" x2="12.01" y2="18" />
                          </svg>
                          <input
                            type="tel"
                            required
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+91 99463 22288"
                            className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-2xl bg-white border border-[#C9A581]/40 text-[#30291F] placeholder:text-[#30291F]/40 focus:bg-white focus:border-[#675E31] focus:ring-2 focus:ring-[#675E31]/15 outline-none text-xs sm:text-[13px] transition-all shadow-2xs"
                          />
                        </div>
                      </div>

                      {/* Care Specialty with Premium Custom Select */}
                      <div>
                        <label className="block text-[#30291F] text-[11px] font-semibold uppercase tracking-wider mb-1.5 pl-0.5">
                          Department / Treatment
                        </label>
                        <ModalCustomSelect
                          options={departments}
                          value={department}
                          onChange={setDepartment}
                          icon={
                            <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#675E31] pointer-events-none z-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="12" r="10" />
                              <polyline points="12 6 12 12 16 14" />
                            </svg>
                          }
                        />
                      </div>

                      {/* Email (Optional) */}
                      <div>
                        <label className="block text-[#30291F] text-[11px] font-semibold uppercase tracking-wider mb-1.5 pl-0.5">
                          Email Address <span className="text-[#30291F]/50 font-normal lowercase">(optional)</span>
                        </label>
                        <div className="relative">
                          <svg className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#675E31] pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                            <polyline points="22,6 12,13 2,6" />
                          </svg>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="your.email@example.com"
                            className="w-full pl-10 pr-4 py-2.5 sm:py-3 rounded-2xl bg-white border border-[#C9A581]/40 text-[#30291F] placeholder:text-[#30291F]/40 focus:bg-white focus:border-[#675E31] focus:ring-2 focus:ring-[#675E31]/15 outline-none text-xs sm:text-[13px] transition-all shadow-2xs"
                          />
                        </div>
                      </div>

                      {/* Subtle Reassurance Bar */}
                      <div className="pt-2 pb-1 flex items-center justify-between text-[10.5px] text-[#30291F]/80 font-medium border-t border-[#C9A581]/40">
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#675E31]" />
                          NABH Accredited Hospital
                        </span>
                        <span className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#A55322]" />
                          Senior Surgeon Review
                        </span>
                      </div>

                      {/* Primary Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 sm:py-3.5 rounded-full bg-[#675E31] hover:bg-[#524B27] text-[#F2E9DC] font-semibold text-xs tracking-wider uppercase shadow-[0_10px_25px_rgba(103,94,49,0.22)] hover:shadow-[0_12px_28px_rgba(103,94,49,0.32)] transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2 mt-2"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin h-3.5 w-3.5 text-[#F2E9DC]" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                            </svg>
                            <span>Submitting Consultation Request...</span>
                          </>
                        ) : (
                          <>
                            <span>Request Consultation</span>
                            <span className="text-sm">→</span>
                          </>
                        )}
                      </button>

                    </form>
                  </div>
                ) : (
                  /* Bespoke Confirmation Screen */
                  <div className="py-6 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
                    <div className="w-14 h-14 rounded-full bg-[#8A875C]/15 border border-[#8A875C]/35 text-[#675E31] mx-auto flex items-center justify-center shadow-xs">
                      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>

                    <div>
                      <span className="text-[10px] font-mono font-semibold uppercase tracking-[0.22em] text-[#A55322] block">
                        Request Registered
                      </span>
                      <h4 className="font-serif font-medium text-2xl text-[#30291F] tracking-tight mt-1">
                        Thank You, {name || "Patient"}
                      </h4>
                    </div>

                    <p className="text-xs sm:text-[13px] text-[#30291F]/75 leading-relaxed max-w-xs mx-auto">
                      Your appointment request for <strong className="text-[#30291F]">{department}</strong> has been logged. Our coordination team will call you on <strong className="text-[#30291F]">{phone}</strong> shortly.
                    </p>

                    <div className="pt-3 flex flex-col gap-2.5">
                      <a
                        href={`https://wa.me/919946322288?text=Hello%20AARYA%20EYE%20CARE%2C%20I%20just%20requested%20an%20appointment%20for%20${encodeURIComponent(name || "Patient")}%20(${encodeURIComponent(phone)})%20for%20${encodeURIComponent(department)}.`}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-3 px-5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        <span>Connect Directly on WhatsApp</span>
                      </a>

                      <button
                        onClick={handleClose}
                        className="w-full py-2.5 px-4 rounded-full border border-[#C9A581]/40 text-[#30291F] hover:text-[#30291F] hover:bg-white text-xs font-semibold transition-colors cursor-pointer"
                      >
                        Dismiss
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
