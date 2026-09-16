"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface AppointmentPrefill {
  doctor?: string;
  service?: string;
}

export default function AppointmentModal() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Form State
  const [fullName, setFullName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [branch, setBranch] = useState<string>("Kozhikode (Calicut Flagship)");
  const [treatment, setTreatment] = useState<string>("Comprehensive Eye Examination");
  const [doctor, setDoctor] = useState<string>("Any Senior Consultant Available");
  const [preferredDate, setPreferredDate] = useState<string>("");
  const [timeSlot, setTimeSlot] = useState<string>("Morning");
  const [notes, setNotes] = useState<string>("");

  // Global click interception for any #appointment link or custom event
  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(
        'a[href="#appointment"], button[href="#appointment"], [data-open-appointment]'
      );
      if (target) {
        e.preventDefault();
        const docName = target.getAttribute("data-doctor");
        const svcName = target.getAttribute("data-service");

        if (docName) setDoctor(docName);
        if (svcName) setTreatment(svcName);

        setSubmitted(false);
        setIsOpen(true);
      }
    };

    const handleCustomEvent = (e: CustomEvent<AppointmentPrefill>) => {
      if (e.detail?.doctor) setDoctor(e.detail.doctor);
      if (e.detail?.service) setTreatment(e.detail.service);
      setSubmitted(false);
      setIsOpen(true);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleDocumentClick, true);
    window.addEventListener("open-appointment-modal" as any, handleCustomEvent);
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("click", handleDocumentClick, true);
      window.removeEventListener("open-appointment-modal" as any, handleCustomEvent);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Set default preferred date to tomorrow's date
  useEffect(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const yyyy = tomorrow.getFullYear();
    const mm = String(tomorrow.getMonth() + 1).padStart(2, "0");
    const dd = String(tomorrow.getDate()).padStart(2, "0");
    setPreferredDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clinical booking request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      setSubmitted(false);
    }, 250);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 overflow-hidden animate-in fade-in duration-150"
      onClick={handleClose}
    >
      {/* Minimal Sized Modal Card with Capped Height & Internal Scrolling */}
      <div
        className="bg-white rounded-2xl sm:rounded-3xl max-w-md w-full shadow-2xl border border-slate-100 relative flex flex-col max-h-[86vh] sm:max-h-[82vh] overflow-hidden animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ======================================================== */}
        {/* 1. FIXED HEADER (Non-Scrolling)                          */}
        {/* ======================================================== */}
        <div className="px-5 py-3.5 sm:px-6 sm:py-4 border-b border-slate-100 flex items-center justify-between flex-shrink-0 bg-white z-10">
          <div className="flex items-center gap-2.5">
            <div className="relative w-6 h-6 flex-shrink-0">
              <Image
                src="/logos/logo-main.png"
                alt="Aarya Eye Care"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="font-display font-black text-lg sm:text-xl text-slate-900 tracking-tight leading-none uppercase">
                Book Appointment
              </h3>
              <span className="text-[9.5px] font-bold uppercase tracking-wider text-[#9A4F3C] block mt-0.5">
                NABH Accredited Eye Hospital
              </span>
            </div>
          </div>

          <button
            onClick={handleClose}
            aria-label="Close modal"
            className="w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center text-xs font-bold transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* ======================================================== */}
        {/* 2. INTERNAL SCROLLABLE BODY                              */}
        {/* ======================================================== */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col flex-1 overflow-hidden">
            
            {/* Scrollable Form Fields */}
            <div className="flex-1 overflow-y-auto px-5 sm:px-6 py-4 space-y-3 text-xs overscroll-contain">
              
              {/* Patient Name & Phone (2 cols) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block font-semibold text-slate-800 mb-1 text-[11px]">
                    Patient Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Full name"
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#9A4F3C] focus:ring-1 focus:ring-[#9A4F3C] outline-none text-xs transition-all"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-800 mb-1 text-[11px]">
                    Phone / WhatsApp <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 Mobile number"
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#9A4F3C] focus:ring-1 focus:ring-[#9A4F3C] outline-none text-xs transition-all"
                  />
                </div>
              </div>

              {/* Branch Selection */}
              <div>
                <label className="block font-semibold text-slate-800 mb-1 text-[11px]">
                  Hospital Branch <span className="text-rose-500">*</span>
                </label>
                <select
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:bg-white focus:border-[#9A4F3C] focus:ring-1 focus:ring-[#9A4F3C] outline-none text-xs transition-all cursor-pointer"
                >
                  <option value="Kozhikode (Calicut Flagship)">Kozhikode (Calicut Flagship)</option>
                  <option value="Kannur Care Centre">Kannur Care Centre</option>
                  <option value="Malappuram Speciality Hub">Malappuram Speciality Hub</option>
                  <option value="Kochi (Cochin) LASIK Suite">Kochi (Cochin) LASIK Suite</option>
                </select>
              </div>

              {/* Speciality / Treatment */}
              <div>
                <label className="block font-semibold text-slate-800 mb-1 text-[11px]">
                  Treatment / Speciality <span className="text-rose-500">*</span>
                </label>
                <select
                  value={treatment}
                  onChange={(e) => setTreatment(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:bg-white focus:border-[#9A4F3C] focus:ring-1 focus:ring-[#9A4F3C] outline-none text-xs transition-all cursor-pointer"
                >
                  <option value="Comprehensive Eye Examination">Comprehensive Eye Examination</option>
                  <option value="Cataract & Robotic IOLs">Cataract &amp; Robotic IOLs</option>
                  <option value="LASIK & Contoura Laser Vision">LASIK &amp; Contoura Laser Vision</option>
                  <option value="Retina & Vitreous Care">Retina &amp; Vitreous Care</option>
                  <option value="Glaucoma & Pressure Care">Glaucoma &amp; Pressure Care</option>
                  <option value="Cornea & Keratoconus (C3R)">Cornea &amp; Keratoconus (C3R)</option>
                  <option value="Dry Eye Spa & IPL Treatment">Dry Eye Spa &amp; IPL Treatment</option>
                  <option value="Squint & Pediatric Eye Care">Squint &amp; Pediatric Eye Care</option>
                  <option value="Aesthetic Oculoplasty">Aesthetic Oculoplasty</option>
                </select>
              </div>

              {/* Doctor & Preferred Date (2 cols) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="block font-semibold text-slate-800 mb-1 text-[11px]">
                    Preferred Doctor
                  </label>
                  <input
                    type="text"
                    value={doctor}
                    onChange={(e) => setDoctor(e.target.value)}
                    placeholder="Doctor Name (Optional)"
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:bg-white focus:border-[#9A4F3C] focus:ring-1 focus:ring-[#9A4F3C] outline-none text-xs transition-all"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-800 mb-1 text-[11px]">
                    Date <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="date"
                    required
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 focus:bg-white focus:border-[#9A4F3C] focus:ring-1 focus:ring-[#9A4F3C] outline-none text-xs transition-all cursor-pointer"
                  />
                </div>
              </div>

              {/* Time Slot (Compact 3 Pills) */}
              <div>
                <label className="block font-semibold text-slate-800 mb-1 text-[11px]">
                  Preferred Time Slot
                </label>
                <div className="grid grid-cols-3 gap-1.5">
                  {["Morning", "Afternoon", "Evening"].map((slot) => {
                    const isSelected = timeSlot === slot;
                    return (
                      <button
                        type="button"
                        key={slot}
                        onClick={() => setTimeSlot(slot)}
                        className={`py-1.5 px-1 rounded-xl text-center border text-[11px] font-semibold transition-all cursor-pointer ${
                          isSelected
                            ? "bg-[#9A4F3C] text-white border-[#9A4F3C] shadow-2xs"
                            : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Optional Notes */}
              <div>
                <label className="block font-semibold text-slate-800 mb-1 text-[11px]">
                  Symptoms / Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Routine checkup, vision blur, redness..."
                  className="w-full px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:bg-white focus:border-[#9A4F3C] focus:ring-1 focus:ring-[#9A4F3C] outline-none text-xs transition-all resize-none"
                />
              </div>

            </div>

            {/* ======================================================== */}
            {/* 3. FIXED FOOTER (Non-Scrolling Action Area)              */}
            {/* ======================================================== */}
            <div className="px-5 py-3 sm:px-6 sm:py-3.5 border-t border-slate-100 bg-slate-50/90 flex flex-col gap-2 flex-shrink-0">
              <div className="flex items-center justify-between text-[10px] text-slate-500 font-medium px-1">
                <span>✓ 15-Min Confirmation</span>
                <span>✓ Cashless Insurance</span>
                <span>✓ Emergency 24/7</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 rounded-full bg-[#9A4F3C] hover:bg-[#854030] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#9A4F3C]/20 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-3.5 w-3.5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    <span>Processing Booking...</span>
                  </>
                ) : (
                  <>
                    <span>Confirm Appointment Request</span>
                    <span>→</span>
                  </>
                )}
              </button>
            </div>

          </form>
        ) : (
          /* Success Screen (Compact) */
          <div className="p-6 text-center space-y-3.5 overflow-y-auto flex-1 overscroll-contain">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-md shadow-emerald-600/15">
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>

            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 block">
                Booking Request Confirmed
              </span>
              <h4 className="font-display font-black text-xl sm:text-2xl text-slate-900 tracking-tight mt-0.5 uppercase">
                Thank You, {fullName || "Patient"}!
              </h4>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/80 text-left text-[11px] space-y-1.5 max-w-xs mx-auto">
              <div className="flex justify-between pb-1.5 border-b border-slate-200">
                <span className="text-slate-500">Ref ID:</span>
                <span className="font-mono font-bold text-slate-900">#AEC-8924</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Branch:</span>
                <span className="font-semibold text-slate-800 truncate ml-2">{branch.split("(")[0]}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Speciality:</span>
                <span className="font-semibold text-slate-800 truncate ml-2">{treatment}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Slot:</span>
                <span className="font-semibold text-slate-800">{preferredDate} ({timeSlot})</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 max-w-xs mx-auto leading-relaxed">
              Our coordinator will call <strong className="text-slate-900">{phone}</strong> within 15 mins to confirm your token.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2 max-w-xs mx-auto">
              <a
                href={`https://wa.me/914952728800?text=Hello%20Aarya%20Eye%20Care%2C%20I%20just%20booked%20appointment%20%23AEC-8924%20for%20${encodeURIComponent(fullName || "Patient")}.`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2 px-4 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-[11px] flex items-center justify-center gap-1.5 shadow-xs transition-all"
              >
                <span>WhatsApp Token</span>
                <span>↗</span>
              </a>

              <button
                onClick={handleClose}
                className="w-full py-2 px-4 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-[11px] transition-colors cursor-pointer"
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
