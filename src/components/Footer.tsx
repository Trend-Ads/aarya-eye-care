"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <div className="w-full bg-[#f8fafc] pt-8 sm:pt-12">
      <footer
        id="branches"
        className="w-full bg-[#0d1c16] text-slate-300 rounded-t-[32px] sm:rounded-t-[44px] md:rounded-t-[52px] px-6 sm:px-10 lg:px-16 pt-14 sm:pt-16 pb-24 md:pb-12 shadow-2xl relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          {/* Main 4-Column Row matching reference image */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 sm:pb-14">
            
            {/* Column 1: Brand Title & Short 2-Line Tagline (4 cols) */}
            <div className="lg:col-span-4 space-y-3">
              <h3 className="font-display font-black text-2xl sm:text-3xl text-white tracking-wider uppercase">
                Aarya Eye Care
              </h3>
              <p className="text-sm text-slate-400 font-normal leading-relaxed max-w-xs">
                Super speciality eye hospital delivering advanced diagnostics, microsurgery, and compassionate vision care.
              </p>
            </div>

            {/* Column 2: MENU (2 cols) */}
            <div className="lg:col-span-2 space-y-3.5">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Menu
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="#home" className="text-slate-300 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#facilities" className="text-slate-300 hover:text-white transition-colors">
                    Facilities
                  </Link>
                </li>
                <li>
                  <Link href="#treatments" className="text-slate-300 hover:text-white transition-colors">
                    Treatments
                  </Link>
                </li>
                <li>
                  <Link href="#doctors" className="text-slate-300 hover:text-white transition-colors">
                    Doctors
                  </Link>
                </li>
                <li>
                  <Link href="#branches" className="text-slate-300 hover:text-white transition-colors">
                    Branches
                  </Link>
                </li>
                <li>
                  <Link href="#appointment" className="text-slate-300 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: SPECIALITIES (3 cols) */}
            <div className="lg:col-span-3 space-y-3.5">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Specialities
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <Link href="#treatments" className="text-slate-300 hover:text-white transition-colors">
                    Cataract Surgery
                  </Link>
                </li>
                <li>
                  <Link href="#treatments" className="text-slate-300 hover:text-white transition-colors">
                    LASIK Laser
                  </Link>
                </li>
                <li>
                  <Link href="#treatments" className="text-slate-300 hover:text-white transition-colors">
                    Retina &amp; Uveitis
                  </Link>
                </li>
                <li>
                  <Link href="#treatments" className="text-slate-300 hover:text-white transition-colors">
                    Glaucoma
                  </Link>
                </li>
                <li>
                  <Link href="#treatments" className="text-slate-300 hover:text-white transition-colors">
                    Cornea &amp; Squint
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 4: CONNECT (3 cols) */}
            <div className="lg:col-span-3 space-y-3.5">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">
                Connect
              </h4>
              <ul className="space-y-2.5 text-sm">
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white transition-colors">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white transition-colors">
                    YouTube
                  </a>
                </li>
              </ul>

              {/* Email & Phone matching reference layout */}
              <div className="pt-3 space-y-1 text-sm text-slate-400">
                <p>
                  <a href="mailto:care@aaryaeyecare.com" className="hover:text-white transition-colors">
                    care@aaryaeyecare.com
                  </a>
                </p>
                <p>
                  <a href="tel:+914952728800" className="hover:text-white transition-colors">
                    +91 495 272 8800
                  </a>
                </p>
              </div>
            </div>

          </div>

          {/* Bottom Divider & Minimal Legal Strip matching reference image */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            {/* Copyright */}
            <p className="order-1 sm:order-none">
              © {new Date().getFullYear()} Aarya Eye Care. All rights reserved.
            </p>

            {/* Privacy & Terms */}
            <div className="flex items-center gap-6 order-2 sm:order-none">
              <Link href="#privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>

            {/* Right Italic Motto matching reference image */}
            <p className="italic text-slate-400 order-3 sm:order-none font-serif">
              Clear vision, compassionate care.
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
}
