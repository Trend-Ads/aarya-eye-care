import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import CtaBanner from "@/components/CtaBanner";
import FAQSection from "@/components/FAQSection";
import AppointmentModal from "@/components/AppointmentModal";
import PageTransition from "@/components/PageTransition";
import BookAppointmentButton from "@/components/BookAppointmentButton";

export const metadata: Metadata = {
  title: "About Us | Aarya Eye Care Super Speciality Hospital Thrissur",
  description:
    "Founded in 2011, Aarya Eye Care is a premier NABH-accredited eye hospital in Thrissur, Kerala, dedicated to transforming lives through clinical excellence and compassionate vision care.",
};

const DOCTOR_LEADERS = [
  {
    name: "Dr. Sanal Kumar",
    role: "Senior Consultant Phaco & Refractive Surgeon",
    qualification: "MBBS, MS (Ophthalmology), FICO",
    image: "/doctors/Dr.-SANAL-KUMAR-Senior-Consultant-Phaco-Refractive-Surgeon-rr48n6c7h8u6w9tzf9p5f8q565k2585f6k91k9m.webp",
    focus: "Micro-Incision Cataract Surgery, Blade-Free LASIK, Premium IOLs",
  },
  {
    name: "Dr. Suraj C.B",
    role: "Senior Consultant Phaco & Refractive Surgeon",
    qualification: "MBBS, MS (Ophthalmology)",
    image: "/doctors/Dr.-SURAJ-C.B-Senior-Consultant-Phaco-Refractive-Surgeon-rr48oc9f9cpt84e030f0f3t9e3j5x165d49k03.webp",
    focus: "Refractive Laser Surgery, Trans-PRK, Anterior Segment Reconstruction",
  },
  {
    name: "Dr. Liya K.Y",
    role: "Consultant Vitreo-Retinal Surgeon",
    qualification: "MBBS, DNB, FVRS (Retina)",
    image: "/doctors/Dr.-LIYA-.K.Y-Vitreo-Retinal-Surgeon-rr48b3jjqcks0sun2dtbuihqb32001d6po7omf2hu2.webp",
    focus: "Diabetic Retinopathy, Macular Disorders, Micro-Incision Vitrectomy (MIVS)",
  },
  {
    name: "Dr. Maya T.J",
    role: "Consultant Glaucoma & Cataract Surgeon",
    qualification: "MBBS, MS, Fellowship in Glaucoma",
    image: "/doctors/Dr.-MAYA-.T.J-Glaucoma-Cataract-Surgeon-rr48fpwzc0wj3s4z2vqaluibga9yugpocjomke7t8q.webp",
    focus: "Early Glaucoma Detection, Visual Field Perimetry, SLT & YAG Laser",
  },
  {
    name: "Dr. Keziah Mary Thomas",
    role: "Consultant Phaco & Refractive Surgeon",
    qualification: "MBBS, MS (Ophthalmology)",
    image: "/doctors/Dr.-KEZIAH-MARY-THOMAS-Consultant-Phaco-Refractive-Surgeon-rr486h644o90xtkb1vwd36h55vu15m0p2sqqofx6fe.webp",
    focus: "Cornea & Ocular Surface Disease, Pediatric Ophthalmology, Dry Eye Care",
  },
  {
    name: "Dr. Sarin Ibrahim Sha",
    role: "Consultant Cornea & Refractive Surgeon",
    qualification: "MBBS, MS, Fellowship in Cornea",
    image: "/doctors/Dr.-SARIN-IBRAHIM-SHA-Cornea-Phaco-Refractive-Surgeon-rr48lb2fykjw4c0sgaogffqykqqilow8g7aj9lxk96.webp",
    focus: "Keratoconus C3R Cross-Linking, Pterygium Autografting, Complex Cornea",
  },
];

const ABOUT_FAQS = [
  {
    question: "When was Aarya Eye Care established in Thrissur?",
    answer: "Aarya Eye Care was founded in 2011 with the vision of providing ethical, compassionate, and technically advanced eye care to the people of Thrissur and Central Kerala. Over the past 15 years, we have grown into an acclaimed NABH-accredited super speciality hospital with 4 regional centers."
  },
  {
    question: "What does NABH accreditation mean for patients?",
    answer: "National Accreditation Board for Hospitals & Healthcare Providers (NABH) is the highest benchmark for hospital quality and patient safety in India. It guarantees stringent surgical infection controls, sterile laminar flow OTs, standardized medication protocols, verified doctor credentials, and patient-centered clinical rights."
  },
  {
    question: "Does Aarya Eye Care conduct charitable community outreach?",
    answer: "Yes, Community Ophthalmology is a core tenet of our mission. Through our community outreach mobile clinics, we conduct free diagnostic eye camps in rural Panchayats, provide subsidized surgeries for economically underprivileged families, and run vision screening drives in local schools."
  },
  {
    question: "Do you cater to international patients and NRIs visiting Kerala?",
    answer: "Yes! A substantial percentage of our cataract, LASIK, and retina patients are NRIs and international travelers visiting Kerala. We offer prioritized fast-track appointments, comprehensive digital reports, and expedited same-day surgical slots to accommodate limited travel itineraries."
  }
];

export default function AboutPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-[#F2E9DC] text-[#30291F] flex flex-col selection:bg-[#C9A581]/40 relative">
        <Navbar />

        <SubpageHero
          badge="OUR LEGACY & MISSION"
          tagline="Established 2011 in Thrissur"
          title="Transforming Lives from Darkness"
          titleAccent="to Light"
          description="Aarya Eye Care is a premier NABH-accredited tertiary eye hospital committed to delivering uncompromising clinical excellence, state-of-the-art surgical technology, and compassionate patient care."
          breadcrumbs={[{ label: "About Us" }]}
          stats={[
            { value: "2011", label: "Founded in Thrissur" },
            { value: "4", label: "Regional Centers" },
            { value: "NABH", label: "Accredited Hospital" },
          ]}
          ctaText="Consult Our Specialists"
        />

        {/* ─── FOUNDATION STORY & VALUES ─── */}
        <section className="w-full bg-[#F2E9DC] py-10 sm:py-16 px-3 sm:px-6 lg:px-10">
          <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
            <div className="rounded-[2.5rem] p-8 sm:p-12 md:p-16 bg-white/75 border border-[#C9A581]/35 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#30291F]/8 border border-[#30291F]/15">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A55322]" />
                  <span className="text-[10px] sm:text-[11px] font-sans font-semibold uppercase tracking-[0.22em] text-[#A55322]">
                    WHO WE ARE
                  </span>
                </div>

                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#30291F] tracking-tight leading-snug">
                  See The World With Us: 15 Years of Clinical Excellence
                </h2>

                <div className="space-y-4 text-sm sm:text-base text-[#30291F]/80 font-sans leading-relaxed">
                  <p>
                    Aarya Eye Clinic in Thrissur was founded in 2011. Over the years, we have taken great pride in delivering the highest standards of patient care, safety, and surgical innovation. We recognize the profound impact that clear eyesight has on an individual’s independence, self-confidence, and quality of life.
                  </p>
                  <p>
                    At our hospital, every patient is treated as family. We are dedicated to fostering a warm, transparent, and positive atmosphere, ensuring that you consistently feel informed, relaxed, and secure under our care.
                  </p>
                  <p>
                    Today, Aarya Eye Care operates as a comprehensive tertiary institute with specialized wings for Blade-Free LASIK, Micro-Incision Phaco Cataract Surgery, Vitreo-Retinal disease, Glaucoma care, Cornea cross-linking, Pediatric ophthalmology, and Oculoplastic reconstruction across our 4 centers in Thrissur, Cherpu, Kunnamkulam, and Kodungallur.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] sm:aspect-square shadow-lg border border-[#C9A581]/40">
                  <Image
                    src="/images/doctor-exam.jpg"
                    alt="Doctor examining patient at Aarya Eye Care"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-xs font-sans font-bold uppercase text-[#C9A581] block mb-1">
                      NABH ACCREDITED EXCELLENCE
                    </span>
                    <p className="font-heading font-semibold text-lg leading-tight">
                      Zero compromise on hygiene, precision, and patient dignity.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ─── 4 CORE PILLARS ─── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Clinical Excellence",
                  desc: "Senior fellowship-trained surgeons following evidence-based international medical protocols.",
                  icon: "01",
                },
                {
                  title: "Compassionate Care",
                  desc: "Unrushed consultations where doctors listen patiently to your fears and answer every query.",
                  icon: "02",
                },
                {
                  title: "Advanced Technology",
                  desc: "Next-gen Swept-Source biometry, Spectral Domain OCT, and blade-free refractive lasers.",
                  icon: "03",
                },
                {
                  title: "Ethical Transparency",
                  desc: "Transparent treatment recommendations with honest pricing, zero hidden charges, and full insurance support.",
                  icon: "04",
                },
              ].map((pillar, pIdx) => (
                <div
                  key={pIdx}
                  className="rounded-2xl p-6 sm:p-7 bg-white/70 border border-[#C9A581]/30 hover:border-[#A55322]/40 transition-all duration-300 space-y-3"
                >
                  <span className="text-xs font-sans font-bold text-[#A55322] bg-[#A55322]/10 px-2.5 py-1 rounded-md">
                    PILLAR {pillar.icon}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-[#30291F]">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#30291F]/75 font-sans leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── MEDICAL LEADERSHIP TEAM ─── */}
        <section className="w-full bg-[#F2E9DC] py-12 px-3 sm:px-6 lg:px-10 border-t border-[#C9A581]/25">
          <div className="max-w-7xl mx-auto space-y-10 sm:space-y-12">
            <div className="text-center space-y-2.5">
              <span className="text-[11px] font-sans font-bold uppercase tracking-[0.22em] text-[#A55322]">
                SURGICAL LEADERSHIP
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#30291F] tracking-tight">
                Meet Our Senior Consultant Specialists
              </h2>
              <p className="text-sm sm:text-base text-[#30291F]/70 max-w-xl mx-auto font-sans">
                Our medical panel comprises senior ophthalmic surgeons with decades of collective surgical experience across premier national and international eye institutes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {DOCTOR_LEADERS.map((doc, idx) => (
                <div
                  key={idx}
                  className="rounded-[2rem] bg-white/80 border border-[#C9A581]/35 hover:border-[#A55322]/40 shadow-xs hover:shadow-md transition-all duration-300 p-6 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="relative h-60 w-full rounded-2xl overflow-hidden bg-[#30291F]/10">
                      <Image
                        src={doc.image}
                        alt={doc.name}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="text-[10px] font-sans text-[#C9A581] font-bold block">
                          {doc.qualification}
                        </span>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-heading font-bold text-xl text-[#30291F] group-hover:text-[#A55322] transition-colors">
                        {doc.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#8A875C] mt-0.5">
                        {doc.role}
                      </p>
                      <p className="text-xs text-[#30291F]/75 font-sans mt-2.5 leading-relaxed">
                        <strong>Clinical Focus:</strong> {doc.focus}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#C9A581]/20 flex items-center justify-between">
                    <span className="text-xs font-sans text-[#A55322] font-bold">
                      OPD CONSULTATION
                    </span>
                    <BookAppointmentButton className="px-3.5 py-1.5 rounded-full bg-[#675E31] hover:bg-[#524B27] text-white text-xs font-semibold transition-colors cursor-pointer">
                      Book Slot
                    </BookAppointmentButton>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── COMMUNITY OPHTHALMOLOGY & OUTREACH ─── */}
        <section className="w-full bg-[#F2E9DC] py-12 px-3 sm:px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-[2.5rem] p-8 sm:p-12 md:p-16 bg-[#30291F] text-[#F2E9DC] relative overflow-hidden shadow-xl border border-[#C9A581]/25">
              <div className="max-w-3xl space-y-5 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A581]" />
                  <span className="text-[10px] sm:text-[11px] font-sans font-semibold uppercase tracking-[0.22em] text-[#C9A581]">
                    COMMUNITY OUTREACH
                  </span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-snug">
                  Sight for All: Extending Care to Every Corner of Kerala
                </h3>

                <p className="text-sm sm:text-base text-white/80 font-sans leading-relaxed">
                  We believe economic standing should never dictate whether a human being retains their gift of vision. Our Community Ophthalmology division organizes free rural diagnostic screening camps, conducts school refraction initiatives for children, and subsidizes modern micro-incision cataract surgeries for underprivileged senior citizens.
                </p>

                <div className="pt-3 flex flex-wrap gap-3 text-xs font-sans text-[#C9A581]">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/15">
                    <svg className="w-3.5 h-3.5 text-[#C9A581] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                    <span>50+ Annual Free Vision Camps</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/15">
                    <svg className="w-3.5 h-3.5 text-[#C9A581] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                    <span>School Eye Health Initiatives</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/15">
                    <svg className="w-3.5 h-3.5 text-[#C9A581] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                    <span>Diabetic Retinopathy Mobile Screening</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── ABOUT FAQS ─── */}
        <FAQSection
          title="Frequently Asked Questions About Aarya Eye Care"
          subtitle="Learn more about our institution, credentials, and patient-first care model."
          faqs={ABOUT_FAQS}
        />

        {/* ─── CTA BANNER ─── */}
        <CtaBanner
          title="Experience Patient-First Ophthalmic Care"
          tagline="15 YEARS OF SIGHT RESTORATION"
          description="Book your appointment today at our Thrissur main hospital or visit your nearest regional center."
        />

        <Footer />
        <AppointmentModal />
      </main>
    </PageTransition>
  );
}
