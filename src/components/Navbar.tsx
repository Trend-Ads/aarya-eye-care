"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavItem {
  label: string;
  href: string;
  id: string;
  icon: (isActive: boolean) => React.ReactNode;
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("home");
  const [navVisible, setNavVisible] = useState<boolean>(true);
  const lastScrollY = useRef<number>(0);

  // Track scroll position for:
  // 1. Top navbar blur
  // 2. Mobile bottom navbar auto-hide on scroll down & show on scroll up
  // 3. Active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      // Hide mobile bottom navbar when scrolling down, show when scrolling up
      if (currentScrollY <= 40) {
        setNavVisible(true);
      } else if (currentScrollY > lastScrollY.current + 6) {
        // Scrolling DOWN -> hide navbar
        setNavVisible(false);
      } else if (currentScrollY < lastScrollY.current - 6) {
        // Scrolling UP -> view navbar
        setNavVisible(true);
      }
      lastScrollY.current = currentScrollY;

      // Detect active section based on scroll position
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
    {
      label: "Home",
      href: "#home",
      id: "home",
      icon: (isActive: boolean) => (
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${isActive ? "scale-105" : ""}`}
          viewBox="0 0 24 24"
          fill={isActive ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={isActive ? "2" : "1.8"}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      ),
    },
    {
      label: "Treatments",
      href: "#treatments",
      id: "treatments",
      icon: (isActive: boolean) => (
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${isActive ? "scale-105" : ""}`}
          viewBox="0 0 24 24"
          fill={isActive ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={isActive ? "2" : "1.8"}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      label: "Doctors",
      href: "#doctors",
      id: "doctors",
      icon: (isActive: boolean) => (
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${isActive ? "scale-105" : ""}`}
          viewBox="0 0 24 24"
          fill={isActive ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={isActive ? "2" : "1.8"}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      label: "Branches",
      href: "#branches",
      id: "branches",
      icon: (isActive: boolean) => (
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${isActive ? "scale-105" : ""}`}
          viewBox="0 0 24 24"
          fill={isActive ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth={isActive ? "2" : "1.8"}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* ========================================================= */}
      {/* 1. TOP HEADER (Desktop Links + Clean Mobile Brand Header) */}
      {/* ========================================================= */}
      <header className="fixed top-2.5 sm:top-3.5 md:top-4.5 left-0 right-0 z-50 px-3 sm:px-6 max-w-5xl mx-auto pointer-events-none transition-all duration-300">
        <nav
          className={`pointer-events-auto backdrop-blur-md rounded-full px-5 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 flex items-center justify-between transition-all duration-200 ${
            scrolled
              ? "bg-[#2A835F] shadow-[0_12px_36px_rgba(42,131,95,0.4)] border border-white/20"
              : "bg-[#2A835F]/95 shadow-[0_8px_28px_rgba(42,131,95,0.3)] border border-white/25"
          }`}
        >
          {/* Brand Logo & Name */}
          <Link
            href="#home"
            className="flex items-center gap-2.5 sm:gap-3 hover:opacity-95 transition-opacity group flex-shrink-0"
          >
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white p-1 flex items-center justify-center shadow-xs flex-shrink-0">
              <Image
                src="/logos/logo-main.png"
                alt="Aarya Eye Care logo"
                fill
                className="object-contain p-0.5"
                priority
              />
            </div>
            <span className="font-extrabold text-base sm:text-lg md:text-xl tracking-tight text-white font-sans whitespace-nowrap">
              Aarya Eye Care
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-[13.5px] lg:text-[14.5px] font-medium transition-all ${
                    isActive
                      ? "text-white font-bold bg-white/20 px-3 py-1 rounded-full backdrop-blur-xs shadow-2xs"
                      : "text-emerald-100 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Right CTA Button (Desktop & Mobile Compact) */}
          <div className="flex items-center">
            {/* Desktop Full CTA (Crisp contrast white pill) */}
            <Link
              href="#appointment"
              className="hidden sm:inline-flex group items-center gap-2.5 bg-white hover:bg-emerald-50 text-[#2A835F] pl-4 sm:pl-5 pr-1.5 sm:pr-2 py-2 rounded-full text-xs sm:text-sm font-bold shadow-md transition-all hover:scale-105 active:scale-95"
            >
              <span>Book Appointment</span>
              <span className="w-6 h-6 rounded-full bg-[#2A835F] text-white flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="7" y1="17" x2="17" y2="7"></line>
                  <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </span>
            </Link>

            {/* Mobile Compact CTA */}
            <Link
              href="#appointment"
              className="sm:hidden inline-flex items-center gap-1.5 bg-white hover:bg-emerald-50 text-[#2A835F] pl-3.5 pr-2 py-1.5 rounded-full text-xs font-bold shadow-sm"
            >
              <span>Book</span>
              <span className="w-5 h-5 rounded-full bg-[#2A835F] text-white flex items-center justify-center text-[10px]">
                ↗
              </span>
            </Link>
          </div>
        </nav>
      </header>

      {/* ========================================================= */}
      {/* 2. NATIVE MOBILE APP BOTTOM TAB BAR (Docked & Auto-Hiding) */}
      {/* ========================================================= */}
      <nav
        aria-label="Mobile Bottom App Navigation"
        className={`md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-slate-200/90 shadow-[0_-4px_20px_rgba(15,23,42,0.08)] transition-transform duration-300 ease-in-out ${
          navVisible ? "translate-y-0" : "translate-y-full pointer-events-none"
        }`}
      >
        <div className="max-w-lg mx-auto px-2 pt-2 pb-[max(0.6rem,env(safe-area-inset-bottom))] flex items-center justify-around">
          {navLinks.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setActiveSection(item.id)}
                className={`flex-1 flex flex-col items-center justify-center py-1 transition-colors duration-150 relative ${
                  isActive
                    ? "text-[#2A835F]"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {/* Top Active Line Indicator */}
                {isActive && (
                  <span className="absolute -top-2 w-8 h-0.5 bg-[#2A835F] rounded-full" />
                )}

                {/* Tab Icon */}
                <div className="relative mb-0.5">
                  {item.icon(isActive)}
                </div>

                {/* Tab Label */}
                <span
                  className={`text-[10px] tracking-tight font-medium ${
                    isActive ? "font-bold text-[#2A835F]" : "text-slate-600"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* ========================================================= */}
      {/* 3. APP-WIDE FLOATING WHATSAPP BUTTON                      */}
      {/* Synchronized with mobile bottom navbar:                   */}
      {/* - Above navbar when navbar is visible (bottom-[68px])     */}
      {/* - Slides down to very bottom when navbar hides (bottom-4) */}
      {/* - Anchored at bottom-6 right-6 on desktop                 */}
      {/* ========================================================= */}
      <aside aria-label="WhatsApp quick contact">
        <a
          href="https://wa.me/919946322288?text=Hello%20Aarya%20Eye%20Care%2C%20I%20would%20like%20to%20inquire%20about%20eye%20care%20treatments%20and%20consultations."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Aarya Eye Care on WhatsApp"
          className={`fixed z-40 group flex items-center justify-center transition-all duration-300 ease-in-out ${
            /* Desktop placement */
            "md:bottom-6 md:right-6 md:w-14 md:h-14"
          } ${
            /* Mobile dynamic placement based on navbar visibility */
            navVisible
              ? "bottom-[68px] right-4 w-12 h-12"
              : "bottom-4 right-4 w-12 h-12"
          }`}
        >
          {/* Subtle pulse ring */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />

          {/* Button circle with WhatsApp icon */}
          <div className="relative w-full h-full rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white flex items-center justify-center shadow-[0_6px_22px_rgba(37,211,102,0.45)] hover:shadow-[0_8px_30px_rgba(37,211,102,0.65)] hover:scale-110 active:scale-95 transition-all duration-200">
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
          </div>

          {/* Desktop Hover Tooltip */}
          <span className="hidden md:group-hover:inline-block absolute right-full mr-3 px-3 py-1.5 bg-slate-900/90 text-white text-xs font-semibold rounded-xl whitespace-nowrap shadow-lg backdrop-blur-xs transition-opacity duration-200">
            Chat on WhatsApp
          </span>
        </a>
      </aside>
    </>
  );
}
