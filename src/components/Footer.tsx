"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <div className="w-full bg-[#FAF7F4]">
      {/* Outer Curved Bezel Layer (#F9D2BA) */}
      <div className="w-full bg-[#F9D2BA] rounded-t-[2.75rem] sm:rounded-t-[3.75rem] lg:rounded-t-[4.75rem] pt-2.5 sm:pt-4 px-1.5 sm:px-3 md:px-4 lg:px-5">
        <footer
          id="branches"
          className="w-full text-white/85 px-5 sm:px-8 lg:px-16 pt-10 sm:pt-16 md:pt-20 pb-20 md:pb-12 shadow-[0_-12px_40px_rgba(94,49,34,0.15)] relative overflow-hidden rounded-t-[2.25rem] sm:rounded-t-[3.25rem] lg:rounded-t-[4.25rem] border-t border-white/20"
          style={{
            background: "linear-gradient(145deg, #5E3122 0%, #52291B 50%, #441F13 100%)",
          }}
        >
          {/* Soft ambient light sheen */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <motion.div 
            className="max-w-7xl mx-auto relative z-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Main Content Grid: 2 columns on mobile, 12 on desktop */}
            <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-7 sm:gap-8 lg:gap-8 pb-8 sm:pb-12">
              
              {/* Column 1: Brand Title & Short Tagline */}
              <div className="col-span-2 lg:col-span-4 space-y-3">
                <div className="flex flex-col">
                  <h3 
                    className="font-avantgarde font-semibold text-2xl sm:text-3xl text-white tracking-tight"
                    style={{
                      fontFamily: "'AvantGarde Demi', 'AvantGarde-Demi', 'ITC Avant Garde Gothic', 'ITC Avant Garde Gothic Std', 'Avant Garde', 'Century Gothic', sans-serif",
                    }}
                  >
                    Aarya Eye Care
                  </h3>
                  <span className="text-[9.5px] sm:text-[10.5px] font-bold tracking-[0.24em] text-[#B85338] uppercase mt-1">
                    Darkness to Light
                  </span>
                </div>
                <p className="text-xs sm:text-[13.5px] text-white/75 font-normal leading-relaxed max-w-sm pt-1">
                  NABH-accredited super speciality eye hospital delivering advanced diagnostics, blade-free microsurgery, and compassionate vision care.
                </p>
              </div>

            {/* Column 2: MENU */}
            <div className="col-span-1 lg:col-span-2 space-y-2.5 sm:space-y-3">
              <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#F9D2BA]/90">
                Menu
              </h4>
              <ul className="space-y-1.5 sm:space-y-2.5 text-xs sm:text-[13.5px]">
                <li>
                  <Link href="#home" className="text-white/75 hover:text-[#F9D2BA] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#vision" className="text-white/75 hover:text-[#F9D2BA] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#treatments" className="text-white/75 hover:text-[#F9D2BA] transition-colors">
                    Treatments
                  </Link>
                </li>
                <li>
                  <Link href="#doctors" className="text-white/75 hover:text-[#F9D2BA] transition-colors">
                    Doctors
                  </Link>
                </li>
                <li>
                  <Link href="#appointment" className="text-white/75 hover:text-[#F9D2BA] transition-colors">
                    Book Appointment
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: SPECIALITIES */}
            <div className="col-span-1 lg:col-span-3 space-y-2.5 sm:space-y-3">
              <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#F9D2BA]/90">
                Specialities
              </h4>
              <ul className="space-y-1.5 sm:space-y-2.5 text-xs sm:text-[13.5px]">
                <li>
                  <Link href="#treatments" className="text-white/75 hover:text-[#F9D2BA] transition-colors">
                    Blade-Free LASIK
                  </Link>
                </li>
                <li>
                  <Link href="#treatments" className="text-white/75 hover:text-[#F9D2BA] transition-colors">
                    Micro-Incision Cataract
                  </Link>
                </li>
                <li>
                  <Link href="#treatments" className="text-white/75 hover:text-[#F9D2BA] transition-colors">
                    Retina &amp; Vitreous Care
                  </Link>
                </li>
                <li>
                  <Link href="#treatments" className="text-white/75 hover:text-[#F9D2BA] transition-colors">
                    Glaucoma Management
                  </Link>
                </li>
                <li>
                  <Link href="#treatments" className="text-white/75 hover:text-[#F9D2BA] transition-colors">
                    Cornea &amp; Pediatric Care
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: CONNECT */}
            <div className="col-span-2 lg:col-span-3 space-y-2.5 sm:space-y-3">
              <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#F9D2BA]/90">
                Connect
              </h4>

              {/* Social Media SVG Icons in #1D4533 accent */}
              <div className="flex items-center gap-2 pt-0.5">
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-[#1D4533] border border-white/15 text-white flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-2xs"
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-[#1D4533] border border-white/15 text-white flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-2xs"
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-[#1D4533] border border-white/15 text-white flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-2xs"
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/919946322288"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/10 hover:bg-[#1D4533] border border-white/15 text-white flex items-center justify-center transition-all duration-200 hover:scale-110 active:scale-95 shadow-2xs"
                >
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                  </svg>
                </a>
              </div>

              {/* Email & Phone */}
              <div className="flex flex-wrap sm:flex-col gap-x-4 gap-y-1 text-xs sm:text-[13px] text-white/75 pt-1">
                <a href="mailto:info@aaryaeyecare.in" className="hover:text-[#F9D2BA] transition-colors">
                  info@aaryaeyecare.in
                </a>
                <a href="tel:+919946322288" className="hover:text-[#F9D2BA] transition-colors font-medium">
                  +91 99463 22288
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Divider & Legal Strip */}
          <div className="pt-4 sm:pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4 text-[11px] sm:text-xs text-white/70 text-center sm:text-left">
            {/* Copyright */}
            <p className="order-2 sm:order-none">
              © {new Date().getFullYear()} Aarya Eye Care. All rights reserved.
            </p>

            {/* Privacy & Terms */}
            <div className="flex items-center gap-3 sm:gap-6 order-1 sm:order-none">
              <Link href="#privacy" className="hover:text-[#F9D2BA] transition-colors">
                Privacy Policy
              </Link>
              <span className="text-white/25">•</span>
              <Link href="#terms" className="hover:text-[#F9D2BA] transition-colors">
                Terms of Service
              </Link>
            </div>

            {/* Right Tagline */}
            <p className="italic text-white/80 order-3 sm:order-none font-serif">
              From Darkness to Light — Restoring clear vision.
            </p>
          </div>

        </motion.div>
      </footer>
    </div>
  </div>
  );
}
