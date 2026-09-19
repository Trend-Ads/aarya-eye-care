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

  // Listen for open-mobile-menu custom event from hero
  useEffect(() => {
    const handleOpenMobile = () => setMobileMenuOpen(true);
    window.addEventListener("open-mobile-menu", handleOpenMobile);
    return () => window.removeEventListener("open-mobile-menu", handleOpenMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 60);
      lastScrollY.current = currentScrollY;

      // Active section highlighting
      const sections = ["home", "treatments", "doctors", "vision", "branches"];
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

  const leftNavLinks: NavItem[] = [
    { label: "Home", href: "#home", id: "home", subtitle: "Main Overview" },
    { label: "Treatments", href: "#treatments", id: "treatments", subtitle: "LASIK, Cataract & Super Specialities" },
    { label: "Doctors", href: "#doctors", id: "doctors", subtitle: "Senior Surgeons & Specialists" },
  ];

  const rightNavLinks: NavItem[] = [
    { label: "About Us", href: "#vision", id: "vision", subtitle: "NABH Accredited Hospital & Technology" },
    { label: "Branches", href: "#branches", id: "branches", subtitle: "Thrissur & Regional Centers" },
  ];

  const allNavLinks: NavItem[] = [...leftNavLinks, ...rightNavLinks];

  return (
    <>
      {/* ========================================================= */}
      {/* FLOATING FROSTED PILL NAVBAR (Reveals on Scroll)           */}
      {/* Centered logo matching the hero layout for seamless flow  */}
      {/* ========================================================= */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? "opacity-100 translate-y-0 pt-3 sm:pt-4 px-3 sm:px-6 pointer-events-auto"
            : "opacity-0 -translate-y-6 pointer-events-none"
        }`}
      >
        <header
          className="mx-auto flex items-center justify-between select-none max-w-[1080px] bg-[#30291F]/95 backdrop-blur-md rounded-full px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 shadow-[0_16px_45px_rgba(48,41,31,0.25)] border border-[#C9A581]/20"
        >
          {/* Left Wing (Desktop) */}
          <nav className="hidden md:flex flex-1 items-center justify-center gap-1.5 lg:gap-3 text-[13px] sm:text-[13.5px]">
            {leftNavLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className="relative group/nav px-2.5 py-1 transition-colors duration-200"
                >
                  <span 
                    className={`transition-colors duration-200 ${
                      isActive
                        ? "font-bold text-[#A55322]"
                        : "font-medium text-[#F2E9DC]/85 group-hover/nav:text-[#F2E9DC]"
                    }`}
                  >
                    {item.label}
                  </span>
                  {/* Animated Underline on Hover */}
                  <span 
                    className={`absolute left-2.5 right-2.5 -bottom-0.5 h-[2px] bg-[#A55322] rounded-full transition-all duration-300 origin-left ease-out ${
                      isActive 
                        ? "scale-x-100 opacity-100" 
                        : "scale-x-0 opacity-0 group-hover/nav:scale-x-100 group-hover/nav:opacity-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Center Brand Identity (Matching Hero Center Notch Axis) */}
          <Link
            href="#home"
            className="flex items-center gap-2.5 sm:gap-3 hover:opacity-90 transition-opacity flex-shrink-0 px-1 sm:px-3 lg:px-5"
          >
            <div className="relative flex items-center justify-center flex-shrink-0 w-6.5 h-6.5 sm:w-7.5 sm:h-7.5">
              <Image
                src="/logos/logo-main.png"
                alt="AARYA EYE CARE logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            
            <div className="flex flex-col justify-center">
              <span 
                className="font-avantgarde font-semibold tracking-[0.04em] whitespace-nowrap leading-none text-[13px] sm:text-[14.5px] text-[#F2E9DC]"
                style={{
                  fontFamily: "'AvantGarde Demi', 'AvantGarde-Demi', 'ITC Avant Garde Gothic', 'ITC Avant Garde Gothic Std', 'Avant Garde', 'Century Gothic', sans-serif",
                }}
              >
                AARYA EYE CARE
              </span>
              <span 
                className="font-bold tracking-[0.22em] uppercase leading-none mt-0.5 text-[7px] sm:text-[7.5px] text-[#C9A581]"
              >
                Darkness to Light
              </span>
            </div>
          </Link>

          {/* Right Wing (Desktop & Mobile Actions) */}
          <div className="flex-1 flex items-center justify-end md:justify-center gap-2 sm:gap-3.5">
            {/* Right Nav Links (Desktop) */}
            <nav className="hidden md:flex items-center gap-1.5 lg:gap-3 text-[13px] sm:text-[13.5px]">
              {rightNavLinks.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="relative group/nav px-2.5 py-1 transition-colors duration-200"
                  >
                    <span 
                      className={`transition-colors duration-200 ${
                        isActive
                          ? "font-bold text-[#A55322]"
                          : "font-medium text-[#F2E9DC]/85 group-hover/nav:text-[#F2E9DC]"
                      }`}
                    >
                      {item.label}
                    </span>
                    {/* Animated Underline on Hover */}
                    <span 
                      className={`absolute left-2.5 right-2.5 -bottom-0.5 h-[2px] bg-[#A55322] rounded-full transition-all duration-300 origin-left ease-out ${
                        isActive 
                          ? "scale-x-100 opacity-100" 
                          : "scale-x-0 opacity-0 group-hover/nav:scale-x-100 group-hover/nav:opacity-100"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Book Appointment CTA Button */}
            <Link
              href="#appointment"
              className="hidden sm:inline-flex rounded-full transition-all duration-300 items-center gap-1.5 shadow-2xs hover:scale-[1.02] active:scale-[0.98] bg-white hover:bg-[#F2E9DC] text-[#30291F] text-xs sm:text-[12.5px] font-bold pl-3 sm:pl-3.5 pr-1 py-1 sm:py-1.5 shadow-sm whitespace-nowrap"
            >
              <span>Book Appointment</span>
              <div className="w-4.5 h-4.5 sm:w-5 sm:h-5 rounded-full bg-[#A55322] text-white flex items-center justify-center">
                <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              aria-label="Open mobile menu"
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden w-8.5 h-8.5 rounded-full flex items-center justify-center transition-colors shadow-2xs bg-white/15 hover:bg-white/25 text-white"
            >
              <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
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
            className="fixed inset-0 z-[100] bg-[#F2E9DC] flex flex-col justify-between p-6 sm:p-8"
          >
            {/* Top Bar: Brand + Close Button */}
            <div className="flex items-center justify-between border-b border-[#C9A581]/30 pb-4">
              <div className="flex items-center gap-2.5">
                <div className="relative w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/logos/logo-main.png"
                    alt="AARYA EYE CARE logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span 
                    className="font-avantgarde font-semibold text-base text-[#30291F] tracking-[0.04em] leading-none"
                    style={{
                      fontFamily: "'AvantGarde Demi', 'AvantGarde-Demi', 'ITC Avant Garde Gothic', 'ITC Avant Garde Gothic Std', 'Avant Garde', 'Century Gothic', sans-serif",
                    }}
                  >
                    AARYA EYE CARE
                  </span>
                  <span className="text-[9px] font-bold tracking-[0.2em] text-[#A55322] uppercase leading-none mt-1">
                    Darkness to Light
                  </span>
                </div>
              </div>

              {/* Close button */}
              <button
                type="button"
                aria-label="Close mobile menu"
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 rounded-full bg-[#C9A581]/25 hover:bg-[#C9A581]/40 text-[#30291F] flex items-center justify-center transition-colors shadow-2xs"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* Menu Links List */}
            <div className="flex flex-col gap-6 my-auto py-6">
              {allNavLinks.map((item, idx) => (
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
                      <span className="font-serif text-3xl sm:text-4xl text-[#30291F] group-hover:text-[#A55322] transition-colors font-medium">
                        {item.label}
                      </span>
                      <span className="text-xl text-[#8A875C] group-hover:text-[#A55322] group-hover:translate-x-1 transition-all">
                        ↗
                      </span>
                    </div>
                    {item.subtitle && (
                      <span className="text-xs text-[#30291F]/70 font-medium mt-1">
                        {item.subtitle}
                      </span>
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Bottom Actions & Contacts */}
            <div className="flex flex-col gap-3 pt-4 border-t border-[#C9A581]/30">
              <Link
                href="#appointment"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-3.5 rounded-full bg-[#675E31] text-[#F2E9DC] font-bold text-sm text-center shadow-md hover:bg-[#524B27] transition-colors flex items-center justify-center gap-2"
              >
                <span>Book Appointment</span>
                <span>↗</span>
              </Link>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <a
                  href="tel:04872322288"
                  className="py-2.5 px-4 rounded-full bg-[#C9A581]/25 text-[#30291F] text-xs font-semibold text-center hover:bg-[#C9A581]/40 transition-colors"
                >
                  📞 Call Helpline
                </a>
                <a
                  href="https://wa.me/919946322288"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 rounded-full bg-[#25D366]/15 text-[#1b9e4b] text-xs font-semibold text-center hover:bg-[#25D366]/25 border border-[#25D366]/30 transition-colors"
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
          href="https://wa.me/919946322288?text=Hello%20AARYA%20EYE%20CARE%2C%20I%20would%20like%20to%20inquire%20about%20eye%20care%20treatments%20and%20consultations."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with AARYA EYE CARE on WhatsApp"
          className="fixed z-40 group flex items-center justify-center transition-all duration-300 ease-in-out bottom-5 right-5 sm:bottom-6 sm:right-6 w-12 h-12 sm:w-14 sm:h-14"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-35" />
          <div className="relative w-full h-full rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-[0_6px_24px_rgba(37,211,102,0.45)] hover:scale-110 active:scale-95 transition-all duration-200">
            <svg className="w-6 h-6 sm:w-7 sm:h-7 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </div>
        </a>
      </aside>
    </>
  );
}
