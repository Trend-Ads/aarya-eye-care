import Image from "next/image";
import Link from "next/link";

export default function ScienceLifestyleSection() {
  const pillars = [
    {
      title: "Unique Eye Treatment",
      description:
        "Aarya Eye Care super speciality eye hospital is NABH accredited and offers highest level patient care and best quality services.",
      tag: "NABH Accredited",
      icon: (
        <svg
          className="w-5 h-5 text-[#9A4F3C]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Eye with shield / cross */}
          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      ),
    },
    {
      title: "Modern Equipment",
      description:
        "Aided by the most modern diagnostic tools and state-of-the-art surgical equipment, we strive to provide the best eye care facilities to our patients.",
      tag: "Advanced Tech",
      icon: (
        <svg
          className="w-5 h-5 text-[#9A4F3C]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Diagnostic scanner / crosshair */}
          <circle cx="12" cy="12" r="10" />
          <line x1="22" y1="12" x2="18" y2="12" />
          <line x1="6" y1="12" x2="2" y2="12" />
          <line x1="12" y1="6" x2="12" y2="2" />
          <line x1="12" y1="22" x2="12" y2="18" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ),
    },
    {
      title: "Certified Doctors",
      description:
        "Our panel of highly qualified, experienced and compassionate doctors ensures the best quality care and comfort for our patients.",
      tag: "Expert Panel",
      icon: (
        <svg
          className="w-5 h-5 text-[#9A4F3C]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Doctor / Specialist */}
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M19 8v6" />
          <path d="M22 11h-6" />
        </svg>
      ),
    },
  ];

  const highlights = [
    { title: "Modern Technology", desc: "Precision diagnostic & surgical suites" },
    { title: "NABH Certified Hospital", desc: "Gold standard quality & patient safety" },
    { title: "Personalized eye care for your all vision needs", desc: "Tailored to your lifestyle & health" },
    { title: "Talented eye surgeons and latest treatment modalities", desc: "Decades of combined clinical mastery" },
  ];

  return (
    <section className="relative w-full bg-[#f8fafc] py-16 sm:py-20 md:py-24 px-3 sm:px-6 lg:px-8 overflow-hidden">
      {/* Feathered mask blend from hero bezel color to section 2 */}
      <div
        className="absolute top-0 left-0 right-0 h-32 sm:h-44 md:h-52 pointer-events-none z-0"
        style={{
          background: "linear-gradient(to bottom, #7dbd81 0%, #95ce99 25%, rgba(165, 214, 167, 0.45) 55%, rgba(165, 214, 167, 0.15) 75%, transparent 100%)",
          maskImage: "linear-gradient(to bottom, black 0%, black 20%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 20%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Visual card with doctor consultation & floating trust badges */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md lg:max-w-none aspect-[4/4.9] sm:aspect-[4/4.6] rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.12)] border border-slate-200/90 group bg-white">
              <Image
                src="/images/eye-care-consultation.jpg"
                alt="Doctor consulting with patient at Aarya Eye Care Hospital"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 520px"
                priority
              />

              {/* Gradient Overlay for card readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent pointer-events-none" />

              {/* Top Floating Badge: NABH Certified */}
              <div className="absolute top-4 left-4 sm:top-5 sm:left-5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-md border border-white/60 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-900">
                  NABH Certified Hospital
                </span>
              </div>

              {/* Bottom Floating Card: We're putting your comfort first */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-5 sm:left-5 sm:right-5 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-white/80 flex items-center gap-3.5 transition-transform duration-300 group-hover:-translate-y-1">
                <div className="w-11 h-11 rounded-xl bg-[#9A4F3C]/10 text-[#9A4F3C] flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] sm:text-[10.5px] font-bold uppercase tracking-wider text-[#9A4F3C] block">
                    Patient-First Healthcare
                  </span>
                  <p className="text-[13px] sm:text-[14px] font-bold text-slate-900 leading-tight mt-0.5">
                    We’re putting your comfort first
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content, Pillars, Features and CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Top Eyebrow Badge & Tagline */}
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3.5 py-1 rounded-full text-[11px] sm:text-xs font-bold tracking-wider uppercase bg-[#9A4F3C]/10 text-[#9A4F3C] inline-flex items-center gap-1.5 border border-[#9A4F3C]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9A4F3C]" />
                Best Eye Hospital
              </span>
              <span className="text-xs sm:text-[13px] text-slate-500 font-medium flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#9A4F3C]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                Best Medical Advice at your Fingertips
              </span>
            </div>

            {/* Bold Main Headline */}
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-[46px] text-slate-900 leading-[1.04] tracking-tight uppercase mt-3">
              Say farewell to blurred vision &amp; <br className="hidden sm:inline" />
              <span className="text-[#9A4F3C]">welcome the happier days.</span>
            </h2>

            {/* Proactive Statement */}
            <div className="mt-3 p-3 sm:p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-xs flex items-start gap-3">
              <span className="w-5 h-5 text-[#9A4F3C] mt-0.5 flex-shrink-0 flex items-center justify-center">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L14.3 8.5L21 9.2L16 13.8L17.5 20.5L12 17L6.5 20.5L8 13.8L3 9.2L9.7 8.5L12 2Z" />
                </svg>
              </span>
              <p className="text-slate-700 text-xs sm:text-sm font-medium leading-relaxed">
                <strong className="text-slate-900 font-semibold">The best way to maintain a healthy smile is to be proactive!</strong>{" "}
                Take charge of your vision with preventative screenings and advanced eye care designed for a lifetime of crystal-clear clarity.
              </p>
            </div>

            {/* 3 Core Pillars: Unique Treatment, Modern Equipment, Certified Doctors */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-3.5 mt-5">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="bg-white rounded-2xl p-4 border border-slate-200/85 shadow-[0_2px_8px_rgba(15,23,42,0.04)] hover:shadow-[0_8px_20px_rgba(15,23,42,0.08)] hover:border-[#9A4F3C]/30 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-xl bg-[#9A4F3C]/10 text-[#9A4F3C] flex items-center justify-center group-hover:scale-105 transition-transform">
                        {pillar.icon}
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                        {pillar.tag}
                      </span>
                    </div>
                    <h3 className="font-bold text-sm text-slate-900 leading-snug font-sans group-hover:text-[#9A4F3C] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-600 text-[11.5px] leading-relaxed mt-1.5">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Highlights & Modalities Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-5">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50/80 border border-slate-200/70"
                >
                  <span className="w-5 h-5 rounded-full bg-[#10b981]/15 text-[#10b981] flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                    ✓
                  </span>
                  <div>
                    <h4 className="text-xs sm:text-[13px] font-semibold text-slate-900 leading-tight">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-tight mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action CTA Row */}
            <div className="mt-6 sm:mt-7 flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200/80">
              <div className="flex items-center gap-3">
                <Link
                  href="#appointment"
                  className="group inline-flex items-center gap-3 bg-[#9A4F3C] hover:bg-[#854231] text-white pl-5 pr-2 py-2.5 rounded-full text-xs sm:text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <span>Book Appointment Now</span>
                  <span className="w-7 h-7 rounded-full bg-white text-[#9A4F3C] flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                    <svg
                      width="13"
                      height="13"
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

                <Link
                  href="#doctors"
                  className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-[#9A4F3C] transition-colors py-2 px-3 rounded-full hover:bg-slate-100"
                >
                  Meet Our Doctors →
                </Link>
              </div>

              <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
                <svg className="w-4 h-4 text-[#10b981]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span>NABH Accredited • Putting Your Comfort First</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
