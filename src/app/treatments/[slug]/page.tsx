import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import CtaBanner from "@/components/CtaBanner";
import FAQSection from "@/components/FAQSection";
import TreatmentTestimonials from "@/components/TreatmentTestimonials";
import AppointmentModal from "@/components/AppointmentModal";
import PageTransition from "@/components/PageTransition";
import { TREATMENTS, getTreatmentBySlug } from "@/data/treatments";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return TREATMENTS.map((t) => ({
    slug: t.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);

  if (!treatment) {
    return {
      title: "Treatment Not Found | Aarya Eye Care",
    };
  }

  return {
    title: `${treatment.name} in Thrissur | Aarya Eye Care`,
    description: treatment.shortDesc,
    openGraph: {
      title: `${treatment.name} | Aarya Eye Care Hospital`,
      description: treatment.shortDesc,
      images: [treatment.heroImage],
    },
  };
}

export default async function TreatmentDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const treatment = getTreatmentBySlug(slug);

  if (!treatment) {
    notFound();
  }

  const relatedTreatments = treatment.relatedSlugs
    .map((s) => getTreatmentBySlug(s))
    .filter((t): t is NonNullable<typeof t> => Boolean(t));

  return (
    <PageTransition>
      <main className="min-h-screen bg-[#F2E9DC] text-[#30291F] flex flex-col selection:bg-[#C9A581]/40 relative">
        <Navbar />

        {/* ─── EDITORIAL SUBPAGE HERO ─── */}
        <SubpageHero
          badge={treatment.badge}
          tagline={treatment.tagline}
          title={treatment.name}
          description={treatment.shortDesc}
          breadcrumbs={[
            { label: "Treatments", href: "/treatments" },
            { label: treatment.name },
          ]}
          stats={[
            { value: "NABH", label: "Accredited Protocol" },
            { value: "Zero Pain", label: "Topical Anesthesia" },
            { value: "Same-Day", label: "Outpatient Discharge" },
          ]}
          ctaText="Schedule Consultation"
        />

        {/* ─── 1. CLINICAL OVERVIEW & VISUAL ─── */}
        <section className="w-full bg-[#F2E9DC] py-10 sm:py-16 px-3 sm:px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Visual Pillar */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden aspect-[4/3] sm:aspect-square shadow-[0_20px_50px_rgba(48,41,31,0.18)] border border-[#C9A581]/35">
                  <Image
                    src={treatment.heroImage}
                    alt={treatment.name}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

                  {/* Corner Badge */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="text-[11px] font-sans uppercase tracking-[0.22em] text-[#C9A581] font-bold block mb-1">
                      AARYA SPECIALITY CLINIC
                    </span>
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-white leading-tight">
                      {treatment.name}
                    </h3>
                  </div>
                </div>

                {/* Floating Micro Badge */}
                <div className="absolute -bottom-4 -right-4 hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#30291F]/90 backdrop-blur-md text-[#F2E9DC] border border-[#C9A581]/30 shadow-lg text-xs font-sans font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#25D366]" />
                  <span>Accepting OPD Appointments</span>
                </div>
              </div>

              {/* Right Column: Detailed Narrative */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#30291F]/8 border border-[#30291F]/15">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#A55322]" />
                  <span className="text-[10px] sm:text-[11px] font-sans font-semibold uppercase tracking-[0.22em] text-[#A55322]">
                    CLINICAL METHODOLOGY
                  </span>
                </div>

                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#30291F] tracking-tight leading-snug">
                  Comprehensive Precision Care for {treatment.name}
                </h2>

                <div className="space-y-4 text-sm sm:text-base text-[#30291F]/85 font-sans leading-relaxed">
                  {treatment.overview.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>

                {/* Quick Doctor Consultation Quote */}
                <div className="p-5 sm:p-6 rounded-2xl bg-white/70 border border-[#C9A581]/30 backdrop-blur-sm">
                  <p className="italic text-xs sm:text-sm text-[#30291F]/80 font-serif leading-relaxed">
                    &ldquo;Our treatment philosophy marries surgical mastery with patient-first compassion. Every eye is anatomically unique, and we tailor technology to individual vision goals.&rdquo;
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#675E31] text-white flex items-center justify-center text-xs font-bold font-heading">
                      AE
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#30291F] font-heading">
                        Surgical Directorship Panel
                      </div>
                      <div className="text-[11px] text-[#30291F]/60">
                        Aarya Eye Care Hospital, Thrissur
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2. KEY HIGHLIGHTS (4-CARD GRID) ─── */}
        <section className="w-full bg-[#F2E9DC] py-12 px-3 sm:px-6 lg:px-10 border-t border-[#C9A581]/25">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-10 sm:mb-14 space-y-2">
              <span className="text-[11px] font-sans font-bold uppercase tracking-[0.22em] text-[#A55322]">
                CLINICAL ADVANTAGES
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#30291F] tracking-tight">
                Why Patients Trust Aarya for {treatment.name}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {treatment.keyHighlights.map((hl, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6 bg-white/70 hover:bg-white border border-[#C9A581]/30 hover:border-[#A55322]/40 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-[#675E31]/10 text-[#675E31] flex items-center justify-center font-bold text-sm font-sans">
                      0{i + 1}
                    </div>
                    <h4 className="font-heading font-bold text-lg text-[#30291F]">
                      {hl.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#30291F]/75 font-sans leading-relaxed">
                      {hl.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 3. ARE YOU A CANDIDATE? ─── */}
        <section className="w-full bg-[#F2E9DC] py-12 px-3 sm:px-6 lg:px-10">
          <div className="max-w-7xl mx-auto">
            <div className="rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-12 md:p-16 bg-[#30291F] text-[#F2E9DC] relative overflow-hidden shadow-xl border border-[#C9A581]/20">
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A581]" />
                    <span className="text-[10px] sm:text-[11px] font-sans font-semibold uppercase tracking-[0.22em] text-[#C9A581]">
                      PATIENT ELIGIBILITY
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-snug">
                    Are You a Candidate for {treatment.name}?
                  </h3>
                  <p className="text-sm sm:text-base text-white/75 font-sans leading-relaxed">
                    Our diagnostic team in Thrissur conducts multi-factorial safety assessments to verify whether this treatment offers optimal clinical benefit.
                  </p>
                </div>

                <div className="lg:col-span-7">
                  <ul className="space-y-3.5">
                    {treatment.candidates.map((cand, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 p-3.5 sm:p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                      >
                        <span className="w-5 h-5 rounded-full bg-[#A55322] text-white flex items-center justify-center shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className="text-sm sm:text-[15px] text-white/90 font-sans leading-snug">
                          {cand}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 4. STEP-BY-STEP PROCEDURE TIMELINE ─── */}
        <section className="w-full bg-[#F2E9DC] py-14 sm:py-20 px-3 sm:px-6 lg:px-10 border-t border-[#C9A581]/25">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 space-y-2.5">
              <span className="text-[11px] font-sans font-bold uppercase tracking-[0.22em] text-[#A55322]">
                SURGICAL PROTOCOL
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#30291F] tracking-tight">
                The Treatment Journey Step-by-Step
              </h2>
              <p className="text-sm sm:text-base text-[#30291F]/70 max-w-xl mx-auto font-sans">
                From pre-operative diagnostic mapping to same-day discharge and structured follow-up.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {treatment.procedureSteps.map((st) => (
                <div
                  key={st.step}
                  className="relative rounded-2xl p-6 sm:p-7 bg-white/75 border border-[#C9A581]/35 shadow-xs flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="inline-block px-3 py-1 rounded-full bg-[#A55322]/10 text-[#A55322] font-sans font-bold text-xs">
                      STEP {st.step}
                    </div>
                    <h4 className="font-heading font-bold text-lg sm:text-xl text-[#30291F] leading-snug">
                      {st.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#30291F]/75 font-sans leading-relaxed">
                      {st.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 5. TECHNOLOGIES USED & RECOVERY ─── */}
        <section className="w-full bg-[#F2E9DC] py-12 px-3 sm:px-6 lg:px-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Tech Suite Card */}
            <div className="lg:col-span-6 rounded-[2rem] p-7 sm:p-9 bg-white/75 border border-[#C9A581]/35 shadow-sm space-y-5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#675E31]" />
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#30291F]">
                  Diagnostic &amp; Laser Technology
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#30291F]/75 font-sans">
                We invest in international optical engineering to guarantee predictable, precise outcomes.
              </p>

              <div className="space-y-3">
                {treatment.technologies.map((tech, i) => (
                  <div
                    key={i}
                    className="p-3.5 sm:p-4 rounded-xl bg-[#F2E9DC]/60 border border-[#C9A581]/30 flex items-start justify-between gap-3"
                  >
                    <div>
                      <div className="font-heading font-semibold text-sm sm:text-base text-[#30291F]">
                        {tech.name}
                      </div>
                      <div className="text-xs text-[#30291F]/70 font-sans mt-0.5">
                        {tech.role}
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-sans font-bold text-[#A55322]">
                      <svg className="w-3.5 h-3.5 text-[#A55322]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>CERTIFIED</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recovery Milestones Card */}
            <div className="lg:col-span-6 rounded-[2rem] p-7 sm:p-9 bg-white/75 border border-[#C9A581]/35 shadow-sm space-y-5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#A55322]" />
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#30291F]">
                  Recovery &amp; Healing Milestones
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#30291F]/75 font-sans">
                Typical post-treatment recovery milestones based on outpatient clinical protocols.
              </p>

              <div className="space-y-3">
                {treatment.recoveryTimeline.map((rec, i) => (
                  <div
                    key={i}
                    className="p-3.5 sm:p-4 rounded-xl bg-[#F2E9DC]/60 border border-[#C9A581]/30 flex items-start gap-3"
                  >
                    <div className="px-2.5 py-1 rounded-md bg-[#675E31] text-[#F2E9DC] text-xs font-sans font-bold shrink-0">
                      {rec.time}
                    </div>
                    <div className="text-xs sm:text-sm text-[#30291F]/80 font-sans leading-relaxed">
                      {rec.milestone}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── 5.5 PATIENT REVIEWS & TESTIMONIALS (AUTO-MOVING MARQUEE) ─── */}
        <TreatmentTestimonials
          treatmentName={treatment.name}
          badge={`${treatment.name} Reviews`}
          testimonials={treatment.testimonials}
        />

        {/* ─── 6. INTERACTIVE FAQS ─── */}
        <FAQSection
          title={`${treatment.name} FAQs`}
          subtitle="Frequently asked questions answered by our surgical leadership team."
          faqs={treatment.faqs}
        />

        {/* ─── 7. RELATED TREATMENTS CROSS-NAV ─── */}
        {relatedTreatments.length > 0 && (
          <section className="w-full bg-[#F2E9DC] py-10 px-3 sm:px-6 lg:px-10 border-t border-[#C9A581]/25">
            <div className="max-w-7xl mx-auto">
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#30291F] mb-6">
                Related Eye Care Treatments
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {relatedTreatments.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/treatments/${rel.slug}`}
                    className="p-5 rounded-2xl bg-white/70 hover:bg-white border border-[#C9A581]/30 hover:border-[#A55322] transition-all duration-200 group flex items-center justify-between"
                  >
                    <div>
                      <div className="text-[10px] font-sans text-[#A55322] uppercase tracking-wider font-bold">
                        {rel.badge}
                      </div>
                      <div className="font-heading font-semibold text-base text-[#30291F] group-hover:text-[#A55322] transition-colors">
                        {rel.name}
                      </div>
                    </div>
                    <span className="text-base text-[#8A875C] group-hover:text-[#A55322] group-hover:translate-x-1 transition-all">
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ─── 8. CTA BANNER & GLOBAL MODAL ─── */}
        <CtaBanner
          title={`Schedule Your ${treatment.name} Consultation`}
          tagline="TALK WITH SENIOR OPHTHALMIC SURGEONS"
          description="Visit our Thrissur main hospital or regional centers in Cherpu, Kunnamkulam, and Kodungallur."
        />

        <Footer />
        <AppointmentModal />
      </main>
    </PageTransition>
  );
}
