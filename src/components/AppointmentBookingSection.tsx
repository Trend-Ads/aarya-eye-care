"use client";

import { useState, FormEvent, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const departments = [
  "General Eye Examination",
  "Cataract Surgery & IOL",
  "Blade-Free LASIK Laser",
  "Retina & Vitreous Care",
  "Glaucoma Management",
  "Pediatric & Squint Clinic",
  "Cornea & Refractive Services",
];

const doctorsList = [
  "Any Available Specialist",
  "Dr. Divya Dharmarajan",
  "Dr. Nadhna Basheer",
  "Dr. Manju .M",
  "Dr. Sikha Radhakrishnan",
  "Dr. Anju Jose",
  "Dr. Lijo Joseph",
  "Dr. Roshni Robert",
  "Dr. Surya Surendran",
  "Dr. Jyothi .A",
];

const timeSlots = [
  "Morning (9–1 PM)",
  "Afternoon (1–4 PM)",
  "Evening (4–7:30 PM)"
];

function CustomSelect({ 
  options, 
  value, 
  onChange, 
  icon 
}: { 
  options: string[], 
  value: string, 
  onChange: (val: string) => void, 
  icon: React.ReactNode 
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
        className="w-full pl-12 pr-10 py-3 sm:py-3.5 rounded-full border border-[#C9A581]/40 text-sm text-[#30291F] bg-[#F2E9DC]/30 cursor-pointer flex items-center justify-between hover:border-[#675E31] transition-colors select-none"
      >
        <span className="truncate">{value}</span>
        <svg 
          className={`w-4 h-4 text-[#675E31]/70 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-full mt-2 bg-white border border-[#C9A581]/40 rounded-2xl shadow-xl overflow-hidden py-2"
          >
            <div className="max-h-60 overflow-y-auto scrollbar-hide">
              {options.map((option) => (
                <div
                  key={option}
                  onClick={() => {
                    onChange(option);
                    setIsOpen(false);
                  }}
                  className={`px-5 py-2.5 text-sm cursor-pointer transition-colors ${
                    value === option 
                      ? 'text-[#675E31] font-semibold bg-[#8A875C]/15' 
                      : 'text-[#30291F] hover:bg-[#C9A581]/20'
                  }`}
                >
                  {option}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AppointmentBookingSection() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("General Eye Examination");
  const [preferredDoctor, setPreferredDoctor] = useState("Any Available Specialist");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("Morning (9–1 PM)");
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !agreed) return;
    setSubmitted(true);
  };

  const inputClasses =
    "w-full pl-12 pr-4 py-3 sm:py-3.5 rounded-full border border-[#C9A581]/40 text-sm text-[#30291F] placeholder-[#30291F]/40 outline-none focus:border-[#675E31] focus:ring-1 focus:ring-[#675E31]/20 transition-all bg-[#F2E9DC]/30";

  const iconClasses = "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#675E31] z-10 pointer-events-none";

  return (
    <section id="appointment" className="w-full relative overflow-hidden bg-[#F2E9DC] py-16 sm:py-24 border-t border-[#C9A581]/30">
      {/* Background Subtle Shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden flex items-center justify-center opacity-40">
        <div className="w-[120%] h-[120%] rounded-[100%] border-[40px] border-[#C9A581]/15 absolute -top-[50%] -left-[10%]" />
        <div className="w-[80%] h-[80%] rounded-[100%] border-[20px] border-[#C9A581]/15 absolute -bottom-[30%] -right-[10%]" />
      </div>

      {/* Background Scattered Floating Leaves */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -14, 0],
            rotate: [0, 1.2, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-10 -left-10 w-[calc(100%+5rem)] h-[calc(100%+5rem)] opacity-60 sm:opacity-75"
        >
          <Image
            src="/bg-pngs/leaves.png"
            alt="Floating Leaves Background"
            fill
            className="object-cover object-center pointer-events-none"
          />
        </motion.div>
      </div>

      {/* Botanical Leaf Branch - Coming from Edge */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 0.9, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute -bottom-10 -left-10 sm:-bottom-14 sm:-left-8 md:-bottom-16 md:-left-6 pointer-events-none select-none z-0 w-[240px] sm:w-[320px] md:w-[420px] lg:w-[480px] max-w-none"
      >
        <Image
          src="/bg-pngs/leaf.png"
          alt="Botanical Leaf Accent"
          width={800}
          height={533}
          className="w-full h-auto object-contain transform -rotate-12 drop-shadow-[0_20px_35px_rgba(48,41,31,0.12)]"
          priority
        />
      </motion.div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
            className="lg:pr-10"
          >
            {/* Tagline */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-7 h-7 rounded-full bg-[#675E31] flex items-center justify-center text-[#C9A581]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                  <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                  <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <span className="text-[#A55322] text-[11px] font-mono font-semibold tracking-[0.22em] uppercase">Darkness to Light</span>
            </div>

            <h2 className="text-3xl sm:text-[2.75rem] leading-[1.15] font-avantgarde font-semibold text-[#30291F] mb-5 tracking-tight">
              Book Your <span className="font-avantgarde font-semibold text-[#A55322]">Appointment</span>
            </h2>
            
            <p className="font-helvetica text-[#30291F]/75 text-sm leading-relaxed mb-12 max-w-md">
              Schedule your visit with our expert ophthalmologists. We provide world-class eye care services with state-of-the-art diagnostic technology.
            </p>

            {/* Contact Row: 4 items in 1 row on mobile and desktop */}
            <div className="grid grid-cols-4 gap-1.5 sm:gap-4 md:gap-6 mb-8 sm:mb-12 lg:mb-16 border-b border-[#C9A581]/30 pb-6 sm:pb-10">
              <div className="flex flex-col">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#675E31]/10 flex items-center justify-center mb-2 text-[#675E31]">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <h4 className="font-gotham font-semibold text-[11px] sm:text-xs md:text-sm text-[#30291F] leading-tight">Call Us</h4>
                <p className="font-helvetica text-[9px] sm:text-[11px] text-[#30291F]/70 mt-0.5 leading-tight font-medium">+91 99463 22288</p>
              </div>

              <div className="flex flex-col">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#675E31]/10 flex items-center justify-center mb-2 text-[#675E31]">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <h4 className="font-gotham font-semibold text-[11px] sm:text-xs md:text-sm text-[#30291F] leading-tight">Full Week</h4>
                <p className="font-helvetica text-[9px] sm:text-[11px] text-[#30291F]/70 mt-0.5 leading-tight font-medium">Mon – Sun</p>
              </div>

              <div className="flex flex-col">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#675E31]/10 flex items-center justify-center mb-2 text-[#675E31]">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <h4 className="text-[11px] sm:text-xs md:text-sm font-semibold text-[#30291F] leading-tight">Email</h4>
                <p className="text-[9px] sm:text-[11px] text-[#30291F]/70 mt-0.5 leading-tight font-medium truncate" title="info@aaryaeyecare.com">info@aarya...</p>
              </div>

              <div className="flex flex-col">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#675E31]/10 flex items-center justify-center mb-2 text-[#675E31]">
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <h4 className="text-[11px] sm:text-xs md:text-sm font-semibold text-[#30291F] leading-tight">Facility</h4>
                <p className="text-[9px] sm:text-[11px] text-[#30291F]/70 mt-0.5 leading-tight font-medium">Kochi, Kerala</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-[#30291F] font-semibold text-xs">Stay Connected:</span>
              <div className="flex gap-2">
                {['facebook', 'instagram', 'youtube'].map((platform) => (
                  <a key={platform} href={`#${platform}`} className="w-8 h-8 rounded-full bg-white border border-[#C9A581]/40 flex items-center justify-center text-[#675E31] hover:text-[#A55322] hover:border-[#A55322] transition-colors">
                    <div className="w-3.5 h-3.5 bg-current rounded-[2px] opacity-70" style={{ maskImage: platform === 'facebook' ? 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'%3E%3Cpath d=\'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z\'/%3E%3C/svg%3E")' : platform === 'instagram' ? 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'%3E%3Crect x=\'2\' y=\'2\' width=\'20\' height=\'20\' rx=\'5\' ry=\'5\'/%3E%3Cpath d=\'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z\'/%3E%3Cline x1=\'17.5\' y1=\'6.5\' x2=\'17.51\' y2=\'6.5\'/%3E%3C/svg%3E")' : 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\'%3E%3Cpath d=\'M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z\'/%3E%3Cpolygon points=\'9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02\'/%3E%3C/svg%3E")', WebkitMaskImage: platform === 'facebook' ? 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpath d=\'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z\'/%3E%3C/svg%3E")' : platform === 'instagram' ? 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Crect x=\'2\' y=\'2\' width=\'20\' height=\'20\' rx=\'5\' ry=\'5\'/%3E%3Cpath d=\'M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z\'/%3E%3Cline x1=\'17.5\' y1=\'6.5\' x2=\'17.51\' y2=\'6.5\'/%3E%3C/svg%3E")' : 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3E%3Cpath d=\'M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z\'/%3E%3Cpolygon points=\'9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02\'/%3E%3C/svg%3E")', WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskPosition: 'center' }} />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT (FORM CARD) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(48,41,31,0.06)] relative z-10 w-full max-w-lg lg:ml-auto border border-[#C9A581]/40"
          >
            {submitted ? (
              <div className="text-center py-12 space-y-6">
                <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center bg-[#8A875C]/15 border border-[#8A875C]/35">
                  <svg className="w-8 h-8 text-[#675E31]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="font-serif font-medium text-2xl text-[#30291F]">Booking Request Sent!</h4>
                  <p className="text-[#30291F]/75 text-sm mt-3 max-w-xs mx-auto leading-relaxed">
                    We&apos;ll call <strong className="text-[#30291F]">{phone}</strong> shortly to confirm your appointment details.
                  </p>
                </div>
                <div className="flex flex-col gap-3 justify-center pt-4">
                  <a
                    href={`https://wa.me/919946322288?text=Hi%2C%20I%20just%20booked%20an%20appointment%20-%20${encodeURIComponent(fullName)}%20(${encodeURIComponent(phone)})`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3.5 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-sm flex items-center justify-center gap-2 transition-all shadow-sm cursor-pointer"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Chat on WhatsApp
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="w-full py-3.5 rounded-full border border-[#C9A581]/40 text-[#30291F] font-semibold text-sm transition-all hover:bg-[#F2E9DC]/40 mt-2 cursor-pointer"
                  >
                    Book Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Your Name */}
                <div>
                  <label className="block text-[#30291F] text-[11px] font-semibold uppercase tracking-wider mb-2 pl-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <svg className={iconClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Enter Your Name"
                      className={inputClasses}
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-[#30291F] text-[11px] font-semibold uppercase tracking-wider mb-2 pl-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <svg className={iconClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                      <line x1="12" y1="18" x2="12.01" y2="18"></line>
                    </svg>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 99463 22288"
                      className={inputClasses}
                    />
                  </div>
                </div>

                {/* Department & Doctor Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#30291F] text-[11px] font-semibold uppercase tracking-wider mb-2 pl-1">
                      Department
                    </label>
                    <CustomSelect
                      options={departments}
                      value={department}
                      onChange={setDepartment}
                      icon={
                        <svg className={iconClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="8" y1="6" x2="21" y2="6"></line>
                          <line x1="8" y1="12" x2="21" y2="12"></line>
                          <line x1="8" y1="18" x2="21" y2="18"></line>
                          <line x1="3" y1="6" x2="3.01" y2="6"></line>
                          <line x1="3" y1="12" x2="3.01" y2="12"></line>
                          <line x1="3" y1="18" x2="3.01" y2="18"></line>
                        </svg>
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-[#30291F] text-[11px] font-semibold uppercase tracking-wider mb-2 pl-1">
                      Doctor
                    </label>
                    <CustomSelect
                      options={doctorsList}
                      value={preferredDoctor}
                      onChange={setPreferredDoctor}
                      icon={
                        <svg className={iconClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                        </svg>
                      }
                    />
                  </div>
                </div>

                {/* Date & Time Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#30291F] text-[11px] font-semibold uppercase tracking-wider mb-2 pl-1">
                      Date
                    </label>
                    <div className="relative">
                      <svg className={iconClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className={inputClasses}
                        style={{ colorScheme: 'light' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#30291F] text-[11px] font-semibold uppercase tracking-wider mb-2 pl-1">
                      Time Slot
                    </label>
                    <CustomSelect
                      options={timeSlots}
                      value={time}
                      onChange={setTime}
                      icon={
                        <svg className={iconClasses} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                      }
                    />
                  </div>
                </div>

                {/* Submit Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4 border-t border-[#C9A581]/30">
                  <label className="flex items-start sm:items-center gap-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                      <input
                        type="checkbox"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="peer appearance-none w-5 h-5 border border-[#C9A581]/60 rounded-[4px] checked:bg-[#675E31] checked:border-[#675E31] transition-colors cursor-pointer"
                        required
                      />
                      <svg className="absolute w-3 h-3 text-white pointer-events-none opacity-0 peer-checked:opacity-100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-[11px] sm:text-xs text-[#30291F]/70 leading-tight">
                      I agree with <a href="#" className="text-[#A55322] font-semibold hover:underline">Terms of Use</a><br className="hidden sm:block" /> and Privacy Policy.
                    </span>
                  </label>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-10 py-3 sm:py-3.5 rounded-full bg-[#675E31] hover:bg-[#524B27] text-[#F2E9DC] font-gotham font-semibold text-sm tracking-wide transition-all shadow-[0_8px_20px_rgba(103,94,49,0.25)] hover:shadow-[0_8px_25px_rgba(103,94,49,0.35)] hover:-translate-y-0.5 active:translate-y-0 shrink-0 cursor-pointer"
                  >
                    Submit Request
                  </button>
                </div>
              </form>
            )}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
