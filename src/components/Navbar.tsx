"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface NavItem {
  label: string;
  href: string;
  id: string;
  subtitle?: string;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const lastScrollY = useRef<number>(0);

  // Lock body scroll when mobile full-screen menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 25);
      lastScrollY.current = currentScrollY;

      // Active section highlighting
      const sections = ["home", "treatments", "doctors", "branches"];
      const scrollPosition = currentScrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks: NavItem[] = [
    { label: "Treatments", href: "#treatments", id: "treatments", subtitle: "LASIK, Cataract & Super Specialities" },
    { label: "Doctors", href: "#doctors", id: "doctors", subtitle: "Senior Surgeons & Specialists" },
    { label: "About Us", href: "#vision", id: "vision", subtitle: "NABH Accredited Hospital & Technology" },
    { label: "Branches", href: "#branches", id: "branches", subtitle: "Thrissur & Regional Centers" },
  ];

  return (
    <>
      {/* ========================================================= */}
      {/* UNIFIED MORPHING WHITE NAVBAR                             */}
      {/* Top State: Flat & embedded above hero card (max-w-1500px) */}
      {/* Scrolled State: Morphs into floating frosted pill         */}
      {/* ========================================================= */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled ? "pt-2 sm:pt-3.5 px-3 sm:px-6" : "pt-2 sm:pt-3.5 lg:pt-4 px-0"
        }`}
      >
        <header
          className={`pointer-events-auto mx-auto flex items-center justify-between select-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            scrolled
              ? "max-w-[940px] bg-[#F9D2BA]/95 backdrop-blur-md rounded-full px-5 sm:px-8 py-3 sm:py-3.5 shadow-[0_16px_45px_rgba(94,49,34,0.12)] border border-[#5E3122]/15"
              : "w-full max-w-[1500px] bg-[#F9D2BA] rounded-none px-5 sm:px-8 lg:px-12 xl:px-14 py-2.5 sm:py-3 border-b border-transparent shadow-none"
          }`}
        >
          {/* Left Brand Identity */}
          <Link
            href="#home"
            className="flex items-center gap-2.5 sm:gap-3 hover:opacity-90 transition-opacity flex-shrink-0"
          >
            <div 
              className={`relative flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                scrolled ? "w-7 h-7 sm:w-8 sm:h-8" : "w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10"
              }`}
            >
              <Image
                src="/logos/logo-main.png"
                alt="Aarya Eye Care logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            
            <span 
              className={`font-extrabold text-[#5E3122] tracking-tight whitespace-nowrap transition-all duration-300 ${
                scrolled ? "text-[14.5px] sm:text-[16px]" : "text-base sm:text-lg lg:text-[20px]"
              }`}
            >
              Aarya Eye Care
            </span>
          </Link>

          {/* Center Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-2.5 lg:gap-4 text-[13.5px] sm:text-[14px] font-semibold text-[#5E3122]">
            {navLinks.map((item, idx) => {
              const isActive = activeSection === item.id;
              return (
                <div key={item.id} className="flex items-center gap-2.5 lg:gap-4">
                  <Link
                    href={item.href}
                    className={`transition-all duration-200 rounded-full px-3 py-1 ${
                      isActive && scrolled
                        ? "bg-[#5E3122]/15 text-[#5E3122] font-bold"
                        : "text-[#5E3122]/85 hover:text-[#5E3122]"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {idx < navLinks.length - 1 && (
                    <span className="text-[#5E3122]/30 text-xs pointer-events-none">•</span>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Actions (Desktop & Mobile Hamburger) */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            {/* Desktop Appointment CTA Button */}
            <Link
              href="#appointment"
              className={`hidden sm:inline-flex rounded-full transition-all duration-300 items-center gap-1.5 shadow-2xs hover:scale-[1.02] active:scale-[0.98] ${
                scrolled
                  ? "bg-[#5E3122] text-white hover:bg-[#492215] text-xs sm:text-[13px] font-bold px-4 sm:px-5 py-2 sm:py-2.5 shadow-sm"
                  : "border border-[#5E3122] hover:border-[#492215] text-[#5E3122] hover:bg-[#5E3122] hover:text-white text-[13.5px] sm:text-sm lg:text-[14.5px] font-bold px-5 sm:px-6 lg:px-7 py-2 sm:py-2.5"
              }`}
            >
              <span>Book Appointment</span>
              <span className="text-xs">↗</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              aria-label="Open mobile menu"
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden w-9 h-9 rounded-full bg-[#5E3122]/10 hover:bg-[#5E3122]/20 text-[#5E3122] flex items-center justify-center transition-colors shadow-2xs"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            </button>
          </div>
        </header>
      </div>

      {/* ========================================================= */}
      {/* FULL-SCREEN MOBILE MENU OVERLAY                           */}
      {/* Covers screen with smooth slide/fade & animated list      */}
      {/* ========================================================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-[100] bg-white flex flex-col justify-between p-6 sm:p-8"
          >
            {/* Top Bar: Brand + Close Button */}
            <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="relative w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/logos/logo-main.png"
                    alt="Aarya Eye Care logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-base text-neutral-950 tracking-tight leading-none">
                    Aarya Eye Care
                  </span>
                  <span className="text-[10.5px] font-semibold text-neutral-500 uppercase tracking-widest mt-0.5">
                    Super Speciality
                  </span>
                </div>
              </div>

              {/* Close button */}
              <button
                type="button"
                aria-label="Close mobile menu"
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-900 flex items-center justify-center transition-colors shadow-2xs"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Menu Links List */}
            <div className="flex flex-col gap-6 my-auto py-6">
              {[
                { label: "Home", href: "#home", subtitle: "Aarya Eye Care Main" },
                ...navLinks,
              ].map((item, idx) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: idx * 0.06 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex flex-col"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-serif text-3xl sm:text-4xl text-neutral-900 group-hover:text-emerald-700 transition-colors font-medium">
                        {item.label}
                      </span>
                      <span className="text-xl text-neutral-300 group-hover:text-neutral-900 group-hover:translate-x-1 transition-all">
                        ↗
                      </span>
                    </div>
                    {item.subtitle && (
                      <span className="text-xs text-neutral-500 font-medium mt-1">
                        {item.subtitle}
                      </span>
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bottom Actions & Contacts */}
            <div className="flex flex-col gap-3 pt-4 border-t border-neutral-100">
              <Link
                href="#appointment"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-full bg-neutral-950 text-white font-bold text-sm text-center shadow-md hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2"
              >
                <span>Book Appointment</span>
                <span>↗</span>
              </Link>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href="tel:04872322288"
                  className="py-2.5 px-4 rounded-full bg-neutral-100 text-neutral-900 text-xs font-semibold text-center hover:bg-neutral-200 transition-colors"
                >
                  📞 Call Helpline
                </a>
                <a
                  href="https://wa.me/919946322288"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold text-center hover:bg-emerald-100 transition-colors"
                >
                  💬 WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ========================================================= */}
      {/* FLOATING WHATSAPP BUTTON (Synced for Desktop & Mobile)    */}
      {/* ========================================================= */}
      <aside aria-label="WhatsApp quick contact">
        <a
          href="https://wa.me/919946322288?text=Hello%20Aarya%20Eye%20Care%2C%20I%20would%20like%20to%20inquire%20about%20eye%20care%20treatments%20and%20consultations."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Aarya Eye Care on WhatsApp"
          className="fixed z-40 group flex items-center justify-center transition-all duration-300 ease-in-out bottom-5 right-5 sm:bottom-6 sm:right-6 w-12 h-12 sm:w-14 sm:h-14"
        >
          <span className="absolute inset-0 rounded-full bg-[#1D4533] animate-ping opacity-25" />
          <div className="relative w-full h-full rounded-full bg-[#1D4533] hover:bg-[#163628] text-white flex items-center justify-center shadow-[0_6px_22px_rgba(29,69,51,0.45)] hover:scale-110 active:scale-95 transition-all duration-200">
            <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </div>
        </a>
      </aside>
    </>
  );
}
