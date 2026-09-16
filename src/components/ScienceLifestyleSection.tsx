"use client";

import Image from "next/image";
import Link from "next/link";

export default function ScienceLifestyleSection() {
  return (
    <section
      id="facilities"
      className="w-full bg-[#f4f7fb] py-14 sm:py-18 md:py-20 px-4 sm:px-6 lg:px-12 relative select-none"
    >
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-10">
        
        {/* ========================================================= */}
        {/* Header Row: Subtitle + Headline (Left) & View All (Right) */}
        {/* ========================================================= */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-2">
          <div className="space-y-1 sm:space-y-1.5">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2">
              <span className="w-5 h-[1.5px] bg-slate-400 inline-block" />
              Our Specialities
            </span>
            <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl lg:text-[40px] text-slate-900 tracking-tight leading-tight">
              Explore Our Range of Eye Care Services
            </h2>
          </div>

          <Link
            href="#appointment"
            className="self-start sm:self-end px-5 py-2 rounded-full border border-slate-300/90 text-xs font-bold text-slate-700 hover:text-white hover:bg-slate-900 hover:border-slate-900 transition-all duration-200 shadow-2xs"
          >
            View All
          </Link>
        </div>

        {/* ========================================================= */}
        {/* 6-Card Grid: Exactly Matching Reference Layout (3x2)      */}
        {/* ========================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          
          {/* ------------------------------------------------------- */}
          {/* Card 1: Cataract & Phaco (White photo card - Top Left)  */}
          {/* ------------------------------------------------------- */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col justify-between hover:-translate-y-1 transition-all duration-200 group">
            <div>
              <div className="relative w-full h-44 sm:h-48 rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-5">
                <Image
                  src="/images/eye-care-consultation.jpg"
                  alt="Cataract & Lens Consultation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="font-bold text-lg sm:text-xl text-slate-900 mb-1.5 group-hover:text-[#2A835F] transition-colors">
                Cataract &amp; Lens Surgery
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Micro-incision phacoemulsification and advanced multifocal &amp; toric intraocular lens implants for clear sight.
              </p>
            </div>
            <Link
              href="#appointment"
              className="mt-4 text-xs sm:text-sm font-bold text-[#2A835F] hover:underline inline-flex items-center gap-1 group-hover:gap-1.5 transition-all"
            >
              <span>Learn more</span>
              <span className="text-xs">↗</span>
            </Link>
          </div>

          {/* ------------------------------------------------------- */}
          {/* Card 2: Refractive LASIK (Gradient card - Top Center)   */}
          {/* ------------------------------------------------------- */}
          <div className="bg-gradient-to-br from-[#7282de] via-[#a16fc4] to-[#ea7684] rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-[0_8px_28px_rgba(161,111,196,0.25)] flex flex-col justify-between text-white hover:-translate-y-1 transition-all duration-200 group min-h-[300px] sm:min-h-[340px]">
            <div>
              {/* Top Tag */}
              <div className="mb-3">
                <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/20 backdrop-blur-xs text-white border border-white/25 inline-block">
                  Refractive Suite
                </span>
              </div>

              {/* Icon Badge */}
              <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center mb-6">
                <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                </svg>
              </div>

              {/* Title & Description */}
              <h3 className="font-bold text-xl sm:text-2xl text-white mb-2">
                Refractive LASIK
              </h3>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                Expert blade-free laser vision correction delivering sharp, glasses-free clarity in minutes with ultra-fast recovery.
              </p>
            </div>

            <Link
              href="#appointment"
              className="mt-4 text-xs sm:text-sm font-bold text-white/95 hover:text-white inline-flex items-center gap-1 group-hover:gap-1.5 transition-all"
            >
              <span>Learn more</span>
              <span className="text-xs">↗</span>
            </Link>
          </div>

          {/* ------------------------------------------------------- */}
          {/* Card 3: Retina & Vitreous (White photo card - Top Right)*/}
          {/* ------------------------------------------------------- */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col justify-between hover:-translate-y-1 transition-all duration-200 group">
            <div>
              <div className="relative w-full h-44 sm:h-48 rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-5">
                <Image
                  src="/hero/hero2.jpg"
                  alt="Retina Diagnostics & Laser Care"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="font-bold text-lg sm:text-xl text-slate-900 mb-1.5 group-hover:text-[#2A835F] transition-colors">
                Retina &amp; Vitreous
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Minimally invasive therapies and high-res imaging for diabetic retinopathy, macula, and vitreoretinal health.
              </p>
            </div>
            <Link
              href="#appointment"
              className="mt-4 text-xs sm:text-sm font-bold text-[#2A835F] hover:underline inline-flex items-center gap-1 group-hover:gap-1.5 transition-all"
            >
              <span>Learn more</span>
              <span className="text-xs">↗</span>
            </Link>
          </div>

          {/* ------------------------------------------------------- */}
          {/* Card 4: Glaucoma Care (Gradient card - Bottom Left)     */}
          {/* ------------------------------------------------------- */}
          <div className="bg-gradient-to-br from-[#3b60de] via-[#4d73e8] to-[#599ef7] rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-[0_8px_28px_rgba(59,96,222,0.25)] flex flex-col justify-between text-white hover:-translate-y-1 transition-all duration-200 group min-h-[300px] sm:min-h-[340px]">
            <div>
              {/* Top Tag */}
              <div className="mb-3">
                <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/20 backdrop-blur-xs text-white border border-white/25 inline-block">
                  Optic Nerve Health
                </span>
              </div>

              {/* Icon Badge */}
              <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-xs flex items-center justify-center mb-6">
                <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
                </svg>
              </div>

              {/* Title & Description */}
              <h3 className="font-bold text-xl sm:text-2xl text-white mb-2">
                Glaucoma Management
              </h3>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                State-of-the-art tonometry, optic nerve OCT imaging, and micro-invasive laser trabeculoplasty to safeguard vision.
              </p>
            </div>

            <Link
              href="#appointment"
              className="mt-4 text-xs sm:text-sm font-bold text-white/95 hover:text-white inline-flex items-center gap-1 group-hover:gap-1.5 transition-all"
            >
              <span>Learn more</span>
              <span className="text-xs">↗</span>
            </Link>
          </div>

          {/* ------------------------------------------------------- */}
          {/* Card 5: Pediatrics (White photo card - Bottom Center)   */}
          {/* ------------------------------------------------------- */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col justify-between hover:-translate-y-1 transition-all duration-200 group">
            <div>
              <div className="relative w-full h-44 sm:h-48 rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-5">
                <Image
                  src="/hero/hero1.webp"
                  alt="Pediatric Eye Care"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="font-bold text-lg sm:text-xl text-slate-900 mb-1.5 group-hover:text-[#2A835F] transition-colors">
                Pediatrics &amp; Squint
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                Compassionate specialized eye care for children from infancy through adolescence, squint surgery, and lazy eye therapy.
              </p>
            </div>
            <Link
              href="#appointment"
              className="mt-4 text-xs sm:text-sm font-bold text-[#2A835F] hover:underline inline-flex items-center gap-1 group-hover:gap-1.5 transition-all"
            >
              <span>Learn more</span>
              <span className="text-xs">↗</span>
            </Link>
          </div>

          {/* ------------------------------------------------------- */}
          {/* Card 6: Emergency Trauma (White photo card - Bottom Right) */}
          {/* ------------------------------------------------------- */}
          <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col justify-between hover:-translate-y-1 transition-all duration-200 group">
            <div>
              <div className="relative w-full h-44 sm:h-48 rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-5">
                <Image
                  src="/hero/hero3.webp"
                  alt="24/7 Eye Trauma Care & Ophthalmic Surgery"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="font-bold text-lg sm:text-xl text-slate-900 mb-1.5 group-hover:text-[#2A835F] transition-colors">
                24/7 Emergency Trauma
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                24/7 round-the-clock emergency surgical response with fully equipped clinical care and immediate trauma intervention.
              </p>
            </div>
            <Link
              href="#appointment"
              className="mt-4 text-xs sm:text-sm font-bold text-[#2A835F] hover:underline inline-flex items-center gap-1 group-hover:gap-1.5 transition-all"
            >
              <span>Learn more</span>
              <span className="text-xs">↗</span>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
