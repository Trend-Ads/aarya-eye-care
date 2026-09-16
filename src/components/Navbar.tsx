"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Benefits", href: "#benefits" },
    { label: "Ingredients", href: "#ingredients" },
    { label: "Science", href: "#science" },
    { label: "Reviews", href: "#reviews" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-5 sm:top-7 md:top-8 lg:top-9 left-0 right-0 z-50 px-3 sm:px-6 max-w-5xl mx-auto pointer-events-none transition-all duration-300">
      <nav
        className={`pointer-events-auto backdrop-blur-md rounded-full px-4 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between transition-all duration-200 ${
          scrolled
            ? "bg-white/95 shadow-[0_8px_28px_rgba(15,23,42,0.12)] border border-slate-200/80"
            : "bg-white/90 shadow-[0_4px_20px_rgba(15,23,42,0.06)] border border-white/80"
        }`}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          className="font-extrabold text-lg sm:text-xl tracking-wider text-slate-900 hover:opacity-90 transition-opacity uppercase font-sans"
        >
          VISIONOVA
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[13.5px] lg:text-[14.5px] font-medium text-slate-600 hover:text-slate-950 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right CTA Button */}
        <div className="hidden sm:flex items-center">
          <Link
            href="#shop"
            className="group inline-flex items-center gap-2.5 bg-[#17202c] hover:bg-slate-950 text-white pl-4 sm:pl-5 pr-1.5 sm:pr-2 py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-sm transition-all hover:shadow"
          >
            <span>Shop Now</span>
            <span className="w-6 h-6 rounded-full bg-white text-slate-900 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
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
        </div>

        {/* Mobile menu toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <Link
            href="#shop"
            className="group inline-flex items-center gap-1.5 bg-[#17202c] text-white pl-3 pr-1.5 py-1 rounded-full text-xs font-semibold"
          >
            <span>Shop</span>
            <span className="w-5 h-5 rounded-full bg-white text-slate-900 flex items-center justify-center">
              <svg
                width="10"
                height="10"
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

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-full text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-slate-100 flex flex-col gap-3 pointer-events-auto">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-lg transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
