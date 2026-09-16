"use client";

import Link from "next/link";

interface Branch {
  city: string;
  name: string;
  address: string;
  timing: string;
  phone: string;
  badge: string;
  isMain?: boolean;
}

export default function BranchesSection() {
  const branches: Branch[] = [
    {
      city: "Kozhikode (Calicut)",
      name: "Main Super Speciality Hospital",
      address: "Mavoor Road Junction, Near Medical College, Calicut, Kerala 673016",
      timing: "Open 24/7 (Emergency) • OPD 8:00 AM - 8:00 PM",
      phone: "+91 99463 22288",
      badge: "NABH Flagship",
      isMain: true,
    },
    {
      city: "Kannur",
      name: "Cataract & Cornea Care Centre",
      address: "Thavakkara Road, Opposite Railway Station, Kannur, Kerala 670001",
      timing: "Mon - Sat: 8:30 AM - 7:30 PM • Sun: Emergency Only",
      phone: "+91 99463 22288",
      badge: "Surgical Suite",
    },
    {
      city: "Malappuram",
      name: "Retina & Pediatric Eye Clinic",
      address: "Down Hill, Bypass Road, Malappuram, Kerala 676505",
      timing: "Mon - Sat: 9:00 AM - 7:00 PM",
      phone: "+91 99463 22288",
      badge: "Speciality Hub",
    },
    {
      city: "Kochi (Cochin)",
      name: "Refractive LASIK & Aesthetic Oculoplasty",
      address: "MG Road, Ravipuram, Ernakulam, Kochi, Kerala 682016",
      timing: "Mon - Sat: 9:00 AM - 8:00 PM",
      phone: "+91 99463 22288",
      badge: "LASIK Center",
    },
  ];

  return (
    <section id="branches" className="w-full bg-slate-900 text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-slate-800">
      {/* Subtle top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#9A4F3C] to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#9A4F3C]/20 text-rose-300 border border-[#9A4F3C]/40">
                Hospital Network
              </span>
              <span className="text-xs text-slate-400 font-medium hidden sm:inline">
                • Accredited Super Speciality Centres
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
              Our Branches &amp; Locations
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <span className="text-xs text-slate-400 block font-medium">24/7 Emergency Eye Trauma</span>
              <a href="tel:+919946322288" className="text-sm font-bold text-[#ff7a60] hover:underline">+91 99463 22288</a>
            </div>
            <Link
              href="#appointment"
              className="px-5 py-2.5 rounded-full bg-[#9A4F3C] hover:bg-[#854030] text-white text-xs sm:text-sm font-bold tracking-wide transition-all shadow-md shadow-[#9A4F3C]/30"
            >
              Book at Nearest Branch →
            </Link>
          </div>
        </div>

        {/* 4 Branches Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {branches.map((b) => (
            <div
              key={b.city}
              className={`rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between ${
                b.isMain
                  ? "bg-slate-800/90 border-[#9A4F3C]/60 shadow-lg shadow-black/30 ring-1 ring-[#9A4F3C]/40"
                  : "bg-slate-800/40 border-slate-700/80 hover:bg-slate-800/70 hover:border-slate-600"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-sky-400 flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>{b.city}</span>
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-700/80 text-slate-300">
                    {b.badge}
                  </span>
                </div>

                <h3 className="font-bold text-base text-white leading-snug">
                  {b.name}
                </h3>

                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {b.address}
                </p>

                <div className="mt-3.5 pt-3 border-t border-slate-700/60 space-y-1.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">🕒</span>
                    <span className="text-[11px]">{b.timing}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">📞</span>
                    <a href={`tel:${b.phone}`} className="text-[11px] font-semibold text-rose-300 hover:underline">
                      {b.phone}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-700/60 flex items-center justify-between">
                <a
                  href={`tel:${b.phone}`}
                  className="text-xs font-bold text-[#ff7a60] hover:underline flex items-center gap-1"
                >
                  <span>Call Hospital</span>
                  <span>→</span>
                </a>

                <Link
                  href="#appointment"
                  className="text-[11px] text-slate-400 hover:text-white transition-colors"
                >
                  Consultation
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
