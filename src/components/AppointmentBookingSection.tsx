"use client";

import { useState, FormEvent } from "react";

const stats = [
  { value: "12+", label: "Expert Doctors" },
  { value: "3+", label: "Years of Excellence" },
  { value: "8+", label: "Communities Served" },
  { value: "15k+", label: "Happy Patients" },
];

const departments = [
  "General Eye Examination",
  "Cataract Surgery & IOL",
  "Blade-Free LASIK Laser",
  "Retina & Vitreous Care",
  "Glaucoma Management",
  "Pediatric & Squint Clinic",
  "Cornea & Refractive Services",
];

const doctorsList = [
  "Any Available Specialist",
  "Dr. Divya Dharmarajan",
  "Dr. Nadhna Basheer",
  "Dr. Manju .M",
  "Dr. Sikha Radhakrishnan",
  "Dr. Anju Jose",
  "Dr. Lijo Joseph",
  "Dr. Roshni Robert",
  "Dr. Surya Surendran",
  "Dr. Jyothi .A",
];

export default function AppointmentBookingSection() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("General Eye Examination");
  const [preferredDoctor, setPreferredDoctor] = useState("Any Available Specialist");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("Morning");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;
    setSubmitted(true);
  };

  const inputBase: React.CSSProperties = {
    background: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(255,255,255,0.12)",
  };
  const onFocusIn = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.target.style.border = "1px solid rgba(109,212,164,0.65)";
    e.target.style.background = "rgba(255,255,255,0.10)";
  };
  const onFocusOut = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.target.style.border = "1px solid rgba(255,255,255,0.12)";
    e.target.style.background = "rgba(255,255,255,0.07)";
  };

  return (
    <section id="appointment" className="w-full relative overflow-hidden">

      {/* STATS STRIP */}
      <div className="bg-[#2A835F] px-6 py-10 sm:py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <p className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-none">
                {s.value}
              </p>
              <p className="text-white/65 text-[11px] sm:text-xs font-semibold mt-2 tracking-widest uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* MAIN DARK SECTION */}
      <div
        className="relative w-full px-4 sm:px-8 py-16 sm:py-20 lg:py-24"
        style={{ background: "linear-gradient(135deg, #0d1f17 0%, #112b1f 40%, #0a1a12 100%)" }}
      >
        {/* Radial glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 60% 55% at 68% 50%, rgba(42,131,95,0.22) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* LEFT */}
            <div className="space-y-8">
              <div>
                <span className="inline-flex items-center gap-2 text-[#6dd4a4] text-[11px] font-bold uppercase tracking-[0.2em]">
                  <span className="w-6 h-px bg-[#6dd4a4] inline-block" />
                  Book Online
                </span>
                <h2 className="text-4xl sm:text-5xl lg:text-[3.2rem] font-black text-white leading-[1.08] tracking-tight mt-4">
                  Schedule Your<br />
                  <em className="not-italic text-[#6dd4a4]">Appointment</em><br />
                  in Minutes.
                </h2>
                <p className="text-white/45 text-sm leading-relaxed mt-5 max-w-xs">
                  Choose your specialist and preferred time — we confirm within 15 minutes.
                </p>
              </div>

              {/* Steps */}
              <div className="space-y-2.5">
                {[
                  { n: "01", title: "Fill the Form", desc: "Your details & preferred slot." },
                  { n: "02", title: "Get Confirmed", desc: "Instant callback via WhatsApp." },
                  { n: "03", title: "Visit Us", desc: "Seamless, compassionate care." },
                ].map((step) => (
                  <div
                    key={step.n}
                    className="flex items-center gap-4 py-3 px-4 rounded-2xl"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <span className="text-[#6dd4a4] font-black text-sm w-7 shrink-0">{step.n}</span>
                    <span className="h-7 w-px bg-white/10 shrink-0" />
                    <div>
                      <p className="text-white font-semibold text-sm">{step.title}</p>
                      <p className="text-white/40 text-xs mt-0.5">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Hotline */}
              <a
                href="tel:+919946322288"
                className="group inline-flex items-center gap-4 pl-2 pr-6 py-2 rounded-full w-fit transition-all duration-300"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                <span className="w-10 h-10 rounded-full bg-[#2A835F] flex items-center justify-center text-white text-base shrink-0">
                  📞
                </span>
                <div>
                  <p className="text-white/45 text-[10px] uppercase tracking-widest font-semibold">24/7 Helpline</p>
                  <p className="text-white font-bold text-sm tracking-wide group-hover:text-[#6dd4a4] transition-colors">
                    +91 99463 22288
                  </p>
                </div>
              </a>
            </div>

            {/* RIGHT: GLASS FORM CARD */}
            <div
              className="rounded-3xl p-7 sm:p-9"
              style={{
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(28px)",
                WebkitBackdropFilter: "blur(28px)",
                border: "1px solid rgba(255,255,255,0.10)",
                boxShadow: "0 32px 80px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.07)",
              }}
            >
              {submitted ? (
                <div className="text-center py-10 space-y-5">
                  <div
                    className="w-16 h-16 rounded-full mx-auto flex items-center justify-center text-[#6dd4a4] text-2xl"
                    style={{ background: "rgba(109,212,164,0.15)", border: "1px solid rgba(109,212,164,0.35)" }}
                  >
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-white">Booking Sent!</h4>
                    <p className="text-white/45 text-sm mt-2 max-w-xs mx-auto leading-relaxed">
                      We&apos;ll call <strong className="text-white">{phone}</strong> within 15 minutes to confirm.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                    <a
                      href={`https://wa.me/919946322288?text=Hi%2C%20I%20just%20booked%20an%20appointment%20-%20${encodeURIComponent(fullName)}%20(${encodeURIComponent(phone)})`}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all"
                    >
                      Chat on WhatsApp ↗
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2.5 rounded-xl text-white/60 font-semibold text-xs transition-all cursor-pointer"
                      style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.10)" }}
                    >
                      Book Another
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="mb-7">
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                      Book Appointment
                    </h3>
                    <p className="text-white/35 text-xs mt-1">No advance payment required.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-white/50 text-[11px] font-semibold uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 outline-none transition-all"
                        style={inputBase}
                        onFocus={onFocusIn}
                        onBlur={onFocusOut}
                      />
                    </div>

                    <div>
                      <label className="block text-white/50 text-[11px] font-semibold uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 99463 22288"
                        className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/20 outline-none transition-all"
                        style={inputBase}
                        onFocus={onFocusIn}
                        onBlur={onFocusOut}
                      />
                    </div>

                    <div>
                      <label className="block text-white/50 text-[11px] font-semibold uppercase tracking-wider mb-1.5">
                        Department
                      </label>
                      <select
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none transition-all cursor-pointer"
                        style={inputBase}
                        onFocus={onFocusIn}
                        onBlur={onFocusOut}
                      >
                        {departments.map((d) => (
                          <option key={d} value={d} style={{ background: "#112b1f", color: "#fff" }}>{d}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-white/50 text-[11px] font-semibold uppercase tracking-wider mb-1.5">
                        Preferred Doctor
                      </label>
                      <select
                        value={preferredDoctor}
                        onChange={(e) => setPreferredDoctor(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none transition-all cursor-pointer"
                        style={inputBase}
                        onFocus={onFocusIn}
                        onBlur={onFocusOut}
                      >
                        {doctorsList.map((d) => (
                          <option key={d} value={d} style={{ background: "#112b1f", color: "#fff" }}>{d}</option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-white/50 text-[11px] font-semibold uppercase tracking-wider mb-1.5">
                          Date
                        </label>
                        <input
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none transition-all"
                          style={{ ...inputBase, colorScheme: "dark" }}
                          onFocus={onFocusIn}
                          onBlur={onFocusOut}
                        />
                      </div>
                      <div>
                        <label className="block text-white/50 text-[11px] font-semibold uppercase tracking-wider mb-1.5">
                          Time Slot
                        </label>
                        <select
                          value={time}
                          onChange={(e) => setTime(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl text-sm text-white outline-none transition-all cursor-pointer"
                          style={inputBase}
                          onFocus={onFocusIn}
                          onBlur={onFocusOut}
                        >
                          <option value="Morning" style={{ background: "#112b1f" }}>Morning (9–1 PM)</option>
                          <option value="Afternoon" style={{ background: "#112b1f" }}>Afternoon (1–4 PM)</option>
                          <option value="Evening" style={{ background: "#112b1f" }}>Evening (4–7:30 PM)</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-2 py-3.5 rounded-xl font-bold text-sm text-white tracking-wide transition-all duration-200 hover:opacity-90 active:scale-[0.98] cursor-pointer"
                      style={{
                        background: "linear-gradient(135deg, #2A835F 0%, #1e6347 100%)",
                        boxShadow: "0 8px 28px rgba(42,131,95,0.45)",
                      }}
                    >
                      Schedule Appointment →
                    </button>
                  </form>
                </>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
