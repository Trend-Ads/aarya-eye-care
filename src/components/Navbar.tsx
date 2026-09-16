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
      const sections = ["home", "facilities", "treatments", "branches"];
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
      label: "Facilities",
      href: "#facilities",
      id: "facilities",
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
          <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
          <path d="M9 22v-4h6v4" />
          <path d="M8 6h.01M16 6h.01M8 10h.01M16 10h.01M8 14h.01M16 14h.01" />
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
      <header className="fixed top-3 sm:top-5 md:top-6 lg:top-7 left-0 right-0 z-50 px-3 sm:px-6 max-w-5xl mx-auto pointer-events-none transition-all duration-300">
        <nav
          className={`pointer-events-auto backdrop-blur-md rounded-full px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between transition-all duration-200 ${
            scrolled
              ? "bg-white/95 shadow-[0_8px_28px_rgba(15,23,42,0.12)] border border-slate-200/80"
              : "bg-white/90 shadow-[0_4px_20px_rgba(15,23,42,0.06)] border border-white/80"
          }`}
        >
          {/* Brand Logo & Name */}
          <Link
            href="#home"
            className="flex items-center gap-2 sm:gap-2.5 hover:opacity-90 transition-opacity group flex-shrink-0"
          >
            <div className="relative w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0">
              <Image
                src="/logos/logo-main.png"
                alt="Aarya Eye Care logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 font-sans whitespace-nowrap">
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
                  className={`text-[13.5px] lg:text-[14.5px] font-medium transition-colors ${
                    isActive
                      ? "text-[#9A4F3C] font-semibold"
                      : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Right CTA Button (Desktop & Mobile Compact) */}
          <div className="flex items-center">
            {/* Desktop Full CTA */}
            <Link
              href="#appointment"
              className="hidden sm:inline-flex group items-center gap-2.5 bg-[#9A4F3C] hover:bg-[#854231] text-white pl-4 sm:pl-5 pr-1.5 sm:pr-2 py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-sm transition-all hover:shadow"
            >
              <span>Book Appointment</span>
              <span className="w-6 h-6 rounded-full bg-white text-[#9A4F3C] flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
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
              className="sm:hidden inline-flex items-center gap-1.5 bg-[#9A4F3C] hover:bg-[#854231] text-white pl-3 pr-1.5 py-1 rounded-full text-xs font-semibold shadow-xs"
            >
              <span>Book</span>
              <span className="w-5 h-5 rounded-full bg-white text-[#9A4F3C] flex items-center justify-center text-[10px]">
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
                    ? "text-[#9A4F3C]"
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {/* Top Active Line Indicator */}
                {isActive && (
                  <span className="absolute -top-2 w-8 h-0.5 bg-[#9A4F3C] rounded-full" />
                )}

                {/* Tab Icon */}
                <div className="relative mb-0.5">
                  {item.icon(isActive)}
                </div>

                {/* Tab Label */}
                <span
                  className={`text-[10px] tracking-tight font-medium ${
                    isActive ? "font-bold text-[#9A4F3C]" : "text-slate-600"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
