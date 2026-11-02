"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import CtaBanner from "@/components/CtaBanner";
import AppointmentModal from "@/components/AppointmentModal";
import PageTransition from "@/components/PageTransition";
import { BRANCHES_DATA } from "@/data/branches";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    branch: "Thrissur Main",
    service: "Cataract Evaluation",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <PageTransition>
      <main className="min-h-screen bg-[#F2E9DC] text-[#30291F] flex flex-col selection:bg-[#C9A581]/40 relative">
        <Navbar />

        <SubpageHero
          badge="GET IN TOUCH"
          tagline="We're Here to Help"
          title="Contact Aarya Eye Care"
          titleAccent="Hospital"
          description="Have questions about eye treatments, surgical consultations, insurance claims, or need emergency assistance? Reach our clinical team easily online or by phone."
          breadcrumbs={[{ label: "Contact Us" }]}
        />

        {/* ─── CONTACT CHANNELS & EMERGENCY STRIP ─── */}
        <section className="w-full bg-[#F2E9DC] py-10 sm:py-14 px-3 sm:px-6 lg:px-10">
          <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
            
            {/* 24/7 Emergency Banner */}
            <div className="rounded-[2rem] p-6 sm:p-8 bg-[#675E31] text-[#F2E9DC] flex flex-col md:flex-row items-center justify-between gap-6 shadow-md border border-[#C9A581]/40">
              <div className="space-y-1 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-sans font-bold uppercase tracking-wider text-[#C9A581]">
                  <span className="w-2 h-2 rounded-full bg-red-400 animate-ping" />
                  <span>24/7 Trauma Emergency Care</span>
                </div>
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
                  Sudden Eye Injury, Chemical Splash, or Acute Pain?
                </h3>
                <p className="text-xs sm:text-sm text-white/80 font-sans">
                  Our emergency ocular trauma surgical team at Thrissur Main Hospital is on stand-by round the clock.
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0 flex-wrap justify-center">
                <a
                  href="tel:+919946322288"
                  className="px-6 py-3 rounded-full bg-[#A55322] hover:bg-[#8C4318] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
                >
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span>Call Emergency Helpline</span>
                </a>
                <a
                  href="tel:04872322288"
                  className="px-5 py-3 rounded-full bg-white/15 hover:bg-white/25 text-white font-semibold text-xs sm:text-sm border border-white/25 transition-all"
                >
                  <span>0487 232 2288</span>
                </a>
              </div>
            </div>

            {/* Grid: Form on Left, Direct Department Directories on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
              
              {/* Form Card (7 Cols) */}
              <div className="lg:col-span-7 rounded-[2.25rem] p-8 sm:p-12 bg-white/85 border border-[#C9A581]/35 shadow-sm space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#A55322]" />
                    <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.22em] text-[#A55322]">
                      ONLINE INQUIRY
                    </span>
                  </div>
                  <h2 className="font-heading font-bold text-2xl sm:text-3xl text-[#30291F]">
                    Send Us a Message
                  </h2>
                  <p className="text-xs sm:text-sm text-[#30291F]/70 font-sans mt-1">
                    Fill out the form below, and our patient coordinator will get in touch with you shortly.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-[#675E31]/10 border border-[#675E31]/30 text-center space-y-3">
                    <div className="w-12 h-12 rounded-full bg-[#675E31] text-white flex items-center justify-center mx-auto shadow-sm">
                      <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <h3 className="font-heading font-bold text-xl text-[#30291F]">
                      Inquiry Received Successfully!
                    </h3>
                    <p className="text-xs sm:text-sm text-[#30291F]/80 font-sans max-w-md mx-auto">
                      Thank you, {formData.name}. Our patient care executive from our {formData.branch} center will call you at <strong>{formData.phone}</strong> within 2 hours.
                    </p>
                    <div className="pt-2">
                      <a
                        href={`https://wa.me/919946322288?text=Hello%20Aarya%20Eye%20Care%2C%20I%20just%20submitted%20an%20inquiry%20for%20${encodeURIComponent(formData.service)}%20at%20${encodeURIComponent(formData.branch)}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#25D366] text-white text-xs font-semibold shadow-sm hover:bg-[#20bd5a] transition-all"
                      >
                        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                        </svg>
                        <span>Follow up on WhatsApp</span>
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-heading font-semibold text-[#30291F] mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Rahul Menon"
                          className="w-full px-4 py-3 rounded-xl bg-[#F2E9DC]/60 border border-[#C9A581]/40 text-sm text-[#30291F] placeholder:text-[#30291F]/40 focus:outline-none focus:ring-2 focus:ring-[#A55322]/40"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-heading font-semibold text-[#30291F] mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. +91 99463 22288"
                          className="w-full px-4 py-3 rounded-xl bg-[#F2E9DC]/60 border border-[#C9A581]/40 text-sm text-[#30291F] placeholder:text-[#30291F]/40 focus:outline-none focus:ring-2 focus:ring-[#A55322]/40"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-heading font-semibold text-[#30291F] mb-1.5">
                          Preferred Hospital Branch
                        </label>
                        <select
                          value={formData.branch}
                          onChange={(e) => setFormData({ ...formData, branch: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#F2E9DC]/60 border border-[#C9A581]/40 text-sm text-[#30291F] focus:outline-none focus:ring-2 focus:ring-[#A55322]/40"
                        >
                          <option value="Thrissur Main">Thrissur (Main Hospital)</option>
                          <option value="Cherpu">Cherpu Center</option>
                          <option value="Kunnamkulam">Kunnamkulam Center</option>
                          <option value="Kodungallur">Kodungallur Center</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-heading font-semibold text-[#30291F] mb-1.5">
                          Department / Treatment
                        </label>
                        <select
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#F2E9DC]/60 border border-[#C9A581]/40 text-sm text-[#30291F] focus:outline-none focus:ring-2 focus:ring-[#A55322]/40"
                        >
                          <option value="Cataract Evaluation">Cataract Surgery (Phaco)</option>
                          <option value="Blade-Free LASIK">Blade-Free LASIK</option>
                          <option value="Trans-PRK SmartSurface">Trans-PRK (No-Touch)</option>
                          <option value="Retina & Vitreous">Retina & Diabetic Eye</option>
                          <option value="Glaucoma Checkup">Glaucoma Evaluation</option>
                          <option value="Pediatric & Squint">Pediatric & Squint</option>
                          <option value="Dry Eye Therapy">Dry Eye Clinic</option>
                          <option value="General Eye Checkup">General Vision Checkup</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-heading font-semibold text-[#30291F] mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. rahul@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-[#F2E9DC]/60 border border-[#C9A581]/40 text-sm text-[#30291F] placeholder:text-[#30291F]/40 focus:outline-none focus:ring-2 focus:ring-[#A55322]/40"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-heading font-semibold text-[#30291F] mb-1.5">
                        Your Query or Symptoms
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Briefly describe your vision concern or preferred consultation time..."
                        className="w-full px-4 py-3 rounded-xl bg-[#F2E9DC]/60 border border-[#C9A581]/40 text-sm text-[#30291F] placeholder:text-[#30291F]/40 focus:outline-none focus:ring-2 focus:ring-[#A55322]/40 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 sm:py-4 rounded-full bg-[#A55322] hover:bg-[#8C4318] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                    >
                      Submit Consultation Request →
                    </button>
                  </form>
                )}
              </div>

              {/* Department Directory & Contact Cards (5 Cols) */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Central Office Directory */}
                <div className="rounded-[2.25rem] p-7 sm:p-8 bg-white/75 border border-[#C9A581]/35 shadow-sm space-y-5">
                  <h3 className="font-heading font-bold text-xl text-[#30291F] pb-3 border-b border-[#C9A581]/25">
                    Hospital Department Contacts
                  </h3>

                  <div className="space-y-4 text-xs sm:text-sm font-sans">
                    <div className="p-3.5 rounded-xl bg-[#F2E9DC]/60 border border-[#C9A581]/25 space-y-1">
                      <div className="font-bold text-[#A55322] font-heading">
                        General OPD &amp; Appointments
                      </div>
                      <div className="text-[#30291F]/80">Phone: 0487 232 2288 / +91 9946 322288</div>
                      <div className="text-[#30291F]/70">Email: info@aaryaeyecare.in</div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#F2E9DC]/60 border border-[#C9A581]/25 space-y-1">
                      <div className="font-bold text-[#675E31] font-heading">
                        TPA &amp; Cashless Mediclaim Desk
                      </div>
                      <div className="text-[#30291F]/80">Helpline: +91 9946 322288 (Ext: 104)</div>
                      <div className="text-[#30291F]/70">Email: tpa@aaryaeyecare.in</div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-[#F2E9DC]/60 border border-[#C9A581]/25 space-y-1">
                      <div className="font-bold text-[#8A875C] font-heading">
                        Corporate Empanelment &amp; Camps
                      </div>
                      <div className="text-[#30291F]/80">Coordinator: +91 9946 322288</div>
                      <div className="text-[#30291F]/70">Email: corporate@aaryaeyecare.in</div>
                    </div>
                  </div>
                </div>

                {/* Main Address Card */}
                <div className="rounded-[2.25rem] p-7 sm:p-8 bg-[#30291F] text-[#F2E9DC] space-y-4 border border-[#C9A581]/20 shadow-md">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#C9A581]">
                    MAIN HOSPITAL ADDRESS
                  </span>
                  <h4 className="font-heading font-bold text-lg text-white">
                    AARYA EYE CARE - THRISSUR
                  </h4>
                  <p className="text-xs sm:text-sm text-white/80 font-sans leading-relaxed">
                    2nd Floor, Pallithamam Building,<br />
                    Near North Bus Stand (Vadakke Stand),<br />
                    Opp. Elite Supermarket, Thrissur - 680 020, Kerala.
                  </p>
                  <div className="pt-2 flex items-center gap-3">
                    <Link
                      href="/branches"
                      className="text-xs font-sans font-bold text-[#C9A581] hover:underline"
                    >
                      View all 4 Branch Locations →
                    </Link>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ─── CTA BANNER ─── */}
        <CtaBanner
          title="Direct Consultations Across 4 Centers"
          tagline="CENTRAL KERALA OPHTHALMIC NETWORK"
          description="Find directions to our Thrissur, Cherpu, Kunnamkulam, or Kodungallur centers."
        />

        <Footer />
        <AppointmentModal />
      </main>
    </PageTransition>
  );
}
