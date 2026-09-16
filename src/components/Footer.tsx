"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const specialities = [
    { name: "Cataract & Robotic IOLs", href: "#treatments" },
    { name: "Contoura Blade-Free LASIK", href: "#treatments" },
    { name: "Retina & Vitreous Surgery", href: "#treatments" },
    { name: "Glaucoma Care & MIGS", href: "#treatments" },
    { name: "Corneal Transplants (DMEK)", href: "#treatments" },
    { name: "Dry Eye Spa & IPL Therapy", href: "#treatments" },
    { name: "Squint & Pediatric Eye Care", href: "#treatments" },
    { name: "Aesthetic Oculoplasty", href: "#treatments" },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Hospital Facilities", href: "#facilities" },
    { name: "All 8 Treatments", href: "#treatments" },
    { name: "Meet Our 18 Doctors", href: "#doctors" },
    { name: "Hospital Branches", href: "#branches" },
    { name: "Cashless Insurance TPAs", href: "#appointment" },
    { name: "Patient Care Guidelines", href: "#facilities" },
    { name: "NABH Quality Accreditations", href: "#facilities" },
  ];

  const branches = [
    {
      city: "Kozhikode (Calicut)",
      desc: "Mavoor Rd, Near Medical College",
      phone: "+91 495 272 8800",
    },
    {
      city: "Kannur",
      desc: "Thavakkara Rd, Opp. Railway Station",
      phone: "+91 497 270 4400",
    },
    {
      city: "Malappuram",
      desc: "Down Hill, Bypass Junction",
      phone: "+91 483 273 6600",
    },
    {
      city: "Kochi (Cochin)",
      desc: "MG Road, Ravipuram",
      phone: "+91 484 235 9900",
    },
  ];

  return (
    <footer className="w-full bg-[#070e17] text-slate-300 relative overflow-hidden border-t border-slate-800/80">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#9A4F3C]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* ======================================================== */}
      {/* 1. PRE-FOOTER APPOINTMENT & EMERGENCY CALLOUT BANNER     */}
      {/* ======================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20">
        <div className="relative rounded-[32px] p-6 sm:p-10 lg:p-12 overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-r from-slate-900 via-[#101e33] to-[#1a1215]">
          
          {/* Subtle Background Accent */}
          <div className="absolute -right-10 -bottom-10 w-72 h-72 bg-[#9A4F3C]/20 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                  NABH Accredited Super Speciality Eye Hospital
                </span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl md:text-4xl text-white uppercase tracking-tight leading-tight">
                Ready to rediscover the world in <span className="text-[#ff7a60]">crystal-clear vision?</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl font-normal">
                Schedule your comprehensive eye checkup, robotic cataract consultation, or blade-free LASIK assessment with our senior surgeons today.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4 flex-shrink-0">
              <Link
                href="#appointment"
                className="group px-6 sm:px-8 py-3.5 rounded-full bg-[#9A4F3C] hover:bg-[#854030] text-white text-xs sm:text-sm font-bold tracking-wide uppercase shadow-lg shadow-[#9A4F3C]/30 transition-all hover:scale-105 active:scale-95 inline-flex items-center gap-2"
              >
                <span>Book Appointment</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>

              <a
                href="tel:18004252279"
                className="px-5 sm:px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs sm:text-sm font-semibold transition-all inline-flex items-center gap-2"
              >
                <span className="text-rose-400">📞</span>
                <span>1800 425 2279</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 2. MAIN FOOTER MULTI-COLUMN DIRECTORY                    */}
      {/* ======================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Column 1: Brand, Mission & Accreditations (4 Cols) */}
          <div className="lg:col-span-4 space-y-5">
            {/* Logo & Brand Name */}
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8 flex-shrink-0">
                <Image
                  src="/logos/logo-main.png"
                  alt="Aarya Eye Care Hospital Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h4 className="font-extrabold text-xl text-white tracking-tight leading-none">
                  Aarya Eye Care
                </h4>
                <span className="text-[10.5px] font-semibold text-rose-300 uppercase tracking-widest block mt-0.5">
                  Super Speciality Eye Hospital
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Aarya Eye Care is a premier NABH-accredited tertiary eye care hospital providing world-class ophthalmic surgical care, state-of-the-art diagnostic imaging, and compassionate patient rehabilitation.
            </p>

            {/* Quality Accreditations Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-[10px] font-bold text-slate-300">
                🛡️ NABH Certified
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-[10px] font-bold text-slate-300">
                ✨ 100K+ Eyes Restored
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-slate-800 border border-slate-700 text-[10px] font-bold text-slate-300">
                👨‍⚕️ 18+ Surgeons
              </span>
            </div>

            {/* Social Media Channels */}
            <div className="pt-2 flex items-center gap-2.5">
              {[
                { name: "Facebook", icon: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
                { name: "Instagram", icon: "M16 4H8a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4zm-4 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm4.5-7.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" },
                { name: "LinkedIn", icon: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z M4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" },
                { name: "YouTube", icon: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43zM9.75 15.02V8.53l5.88 3.25-5.88 3.24z" },
              ].map((item) => (
                <a
                  key={item.name}
                  href="#"
                  aria-label={item.name}
                  className="w-8 h-8 rounded-full bg-slate-800 hover:bg-[#9A4F3C] text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d={item.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: 8 Super Specialities (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="text-xs font-bold uppercase tracking-widest text-white border-b border-slate-800 pb-2">
              Super Specialities
            </h5>
            <ul className="space-y-2 text-xs">
              {specialities.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-[#ff7a60] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-slate-600 group-hover:text-[#ff7a60] transition-colors">›</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h5 className="text-xs font-bold uppercase tracking-widest text-white border-b border-slate-800 pb-2">
              Quick Links
            </h5>
            <ul className="space-y-2 text-xs">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-slate-600 group-hover:text-white transition-colors">›</span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Hospital Branches & Contact (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h5 className="text-xs font-bold uppercase tracking-widest text-white border-b border-slate-800 pb-2">
              Our Hospital Branches
            </h5>
            <div className="space-y-3 text-xs">
              {branches.map((b) => (
                <div key={b.city} className="border-b border-slate-800/60 pb-2">
                  <div className="flex items-center justify-between">
                    <strong className="text-slate-200 font-semibold text-[12px]">{b.city}</strong>
                    <a
                      href={`tel:${b.phone}`}
                      className="text-[11px] text-[#ff7a60] hover:underline font-mono"
                    >
                      Call
                    </a>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-0.5">{b.desc}</p>
                </div>
              ))}

              <div className="pt-2 text-xs text-slate-400 space-y-1">
                <p className="flex items-center gap-2">
                  <span className="text-slate-500">✉️</span>
                  <a href="mailto:care@aaryaeyecare.com" className="hover:text-white">
                    care@aaryaeyecare.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-slate-500">⏰</span>
                  <span>OPD: 8:00 AM - 8:00 PM (Mon-Sat)</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ======================================================== */}
      {/* 3. BOTTOM LEGAL, COPYRIGHT & BACK TO TOP                 */}
      {/* ======================================================== */}
      <div className="border-t border-slate-800/80 bg-[#040810]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-24 sm:pb-28 md:pb-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          
          <div>
            <p>
              © {new Date().getFullYear()} Aarya Eye Care Super Speciality Hospital. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-600 mt-0.5">
              NABH Accredited Tertiary Eye Care Institution • Approved for Cashless TPA Mediclaim.
            </p>
          </div>

          <div className="flex items-center gap-6 text-[11px]">
            <Link href="#privacy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#terms" className="hover:text-slate-300 transition-colors">
              Patient Charter
            </Link>
            <Link href="#clinical-safety" className="hover:text-slate-300 transition-colors">
              Clinical Governance
            </Link>

            {/* Back to Top button */}
            <button
              onClick={scrollToTop}
              className="px-3 py-1 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <span>Back to top</span>
              <span>↑</span>
            </button>
          </div>

        </div>
      </div>

    </footer>
  );
}
