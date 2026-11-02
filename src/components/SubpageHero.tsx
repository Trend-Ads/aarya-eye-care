"use client";

import Link from "next/link";

interface SubpageHeroProps {
  badge?: string;
  title: string;
  titleAccent?: string;
  tagline?: string;
  description: string;
  breadcrumbs?: {
    label: string;
    href?: string;
  }[];
  stats?: {
    value: string;
    label: string;
  }[];
  ctaText?: string;
  ctaHref?: string;
}

export default function SubpageHero({
  badge = "DARKNESS TO LIGHT",
  title,
  titleAccent,
  tagline,
  description,
  breadcrumbs,
  stats,
}: SubpageHeroProps) {
  return (
    <section className="w-full bg-[#F2E9DC] pt-28 sm:pt-36 pb-6 sm:pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center space-y-3 sm:space-y-4">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-2 text-xs font-sans text-[#30291F]/50 mb-2 flex-wrap">
            <Link href="/" className="hover:text-[#A55322] transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, idx) => (
              <span key={idx} className="flex items-center gap-2">
                <span className="text-[#30291F]/30">/</span>
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-[#A55322] transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#30291F] font-semibold">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Tagline Badge */}
        {badge && (
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#30291F]/8 border border-[#30291F]/15">
            <span className="w-2 h-2 rounded-full bg-[#A55322] animate-pulse" />
            <span className="text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-[#A55322]">
              {badge}
            </span>
            {tagline && (
              <>
                <span className="text-[#30291F]/30">•</span>
                <span className="text-[11px] sm:text-xs font-sans text-[#30291F]/75 font-medium">
                  {tagline}
                </span>
              </>
            )}
          </div>
        )}

        {/* Main Title */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-[#30291F] tracking-tight leading-[1.15]">
          {title}{" "}
          {titleAccent && (
            <span className="text-[#A55322] font-serif">{titleAccent}</span>
          )}
        </h1>

        {/* Description */}
        {description && (
          <p className="text-sm sm:text-base md:text-lg text-[#30291F]/75 font-sans font-normal leading-relaxed max-w-2xl mx-auto pt-1">
            {description}
          </p>
        )}

        {/* Subtle Stats Row (Optional, Unboxed) */}
        {stats && stats.length > 0 && (
          <div className="flex items-center justify-center gap-6 sm:gap-10 pt-5 mt-4 border-t border-[#C9A581]/25 flex-wrap">
            {stats.map((st, i) => (
              <div key={i} className="text-center">
                <div className="text-lg sm:text-xl font-bold font-serif text-[#30291F]">
                  {st.value}
                </div>
                <div className="text-[10px] sm:text-[11px] text-[#30291F]/60 font-medium uppercase tracking-wider">
                  {st.label}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
