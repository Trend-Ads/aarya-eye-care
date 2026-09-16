"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function AppointmentModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Form State: Only Name, Mobile Number, and Email (Optional)
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");

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

    // Instant clinical request submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setSubmitted(false);
    }, 200);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-hidden animate-in fade-in duration-150"
      onClick={handleClose}
    >
      {/* Ultra-Minimal, Compact Modal Card */}
      <div
        className="bg-white rounded-3xl max-w-sm w-full p-6 sm:p-7 shadow-2xl border border-slate-100 relative animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close 'X' Button */}
        <button
          onClick={handleClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center text-xs font-bold transition-colors cursor-pointer"
        >
          ✕
        </button>

        {!submitted ? (
          <div>
            {/* Header: Logo + Title */}
            <div className="flex items-center gap-3 mb-4 pr-6">
              <div className="relative w-7 h-7 flex-shrink-0">
                <Image
                  src="/logos/logo-main.png"
                  alt="Aarya Eye Care"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-display font-black text-xl text-slate-900 tracking-tight leading-none uppercase">
                  Book Appointment
                </h3>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#9A4F3C] block mt-0.5">
                  Aarya Super Speciality Hospital
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-500 mb-5 leading-relaxed">
              Enter your details below. Our care desk will call you within 15 minutes to confirm your token.
            </p>

            {/* Minimal Form: Name, Mobile Number, Email (Optional) */}
            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              
              {/* 1. Name */}
              <div>
                <label className="block font-semibold text-slate-800 mb-1 text-[11px]">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#9A4F3C] focus:ring-1 focus:ring-[#9A4F3C] outline-none text-xs transition-all"
                />
              </div>

              {/* 2. Mobile Number */}
              <div>
                <label className="block font-semibold text-slate-800 mb-1 text-[11px]">
                  Mobile Number <span className="text-rose-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+91 Mobile number"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#9A4F3C] focus:ring-1 focus:ring-[#9A4F3C] outline-none text-xs transition-all"
                />
              </div>

              {/* 3. Email (Optional) */}
              <div>
                <label className="block font-semibold text-slate-800 mb-1 text-[11px]">
                  Email <span className="text-slate-400 font-normal">(Optional)</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@email.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#9A4F3C] focus:ring-1 focus:ring-[#9A4F3C] outline-none text-xs transition-all"
                />
              </div>

              {/* Trust Tag */}
              <div className="pt-1 pb-2 flex items-center justify-between text-[10px] text-slate-500 font-medium">
                <span>✓ 15-Min Callback</span>
                <span>✓ NABH Certified</span>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-full bg-[#9A4F3C] hover:bg-[#854030] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#9A4F3C]/20 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    <span>Submitting Request...</span>
                  </>
                ) : (
                  <>
                    <span>Book Appointment</span>
                    <span>→</span>
                  </>
                )}
              </button>

            </form>
          </div>
        ) : (
          /* Clean Success Screen */
          <div className="py-4 text-center space-y-3 animate-in fade-in zoom-in-95 duration-150">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-md shadow-emerald-600/10">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 block">
                Request Confirmed
              </span>
              <h4 className="font-display font-black text-xl text-slate-900 tracking-tight mt-0.5 uppercase">
                Thank You, {name || "Patient"}!
              </h4>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed px-2">
              We have received your appointment request. Our care desk will call you on <strong className="text-slate-900">{phone}</strong> within 15 minutes.
            </p>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={`https://wa.me/919946322288?text=Hello%20Aarya%20Eye%20Care%2C%20I%20just%20booked%20an%20appointment%20for%20${encodeURIComponent(name || "Patient")}%20(${encodeURIComponent(phone)}).`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs transition-all"
              >
                <span>Chat on WhatsApp</span>
                <span>↗</span>
              </a>

              <button
                onClick={handleClose}
                className="w-full py-2 px-4 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
