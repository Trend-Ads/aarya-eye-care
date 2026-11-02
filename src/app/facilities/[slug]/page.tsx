import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import CtaBanner from "@/components/CtaBanner";
import FAQSection from "@/components/FAQSection";
import AppointmentModal from "@/components/AppointmentModal";
import PageTransition from "@/components/PageTransition";
import { FACILITIES, getFacilityBySlug } from "@/data/facilities";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return FACILITIES.map((f) => ({
    slug: f.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const facility = getFacilityBySlug(slug);

  if (!facility) {
    return {
      title: "Facility Not Found | Aarya Eye Care",
    };
  }

  return {
    title: `${facility.title} | Aarya Eye Care Hospital`,
    description: facility.shortDesc,
    openGraph: {
      title: `${facility.title} | Aarya Eye Care`,
      description: facility.shortDesc,
      images: [facility.heroImage],
    },
  };
}

export default async function FacilityDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const facility = getFacilityBySlug(slug);

  if (!facility) {
    notFound();
  }

  return (
    <PageTransition>
      <main className="min-h-screen bg-[#F2E9DC] text-[#30291F] flex flex-col selection:bg-[#C9A581]/40 relative">
        <Navbar />

        {/* ─── SUBPAGE HERO ─── */}
        <SubpageHero
          badge={facility.badge}
          tagline={facility.tagline}
          title={facility.title}
          description={facility.shortDesc}
          breadcrumbs={[
            { label: "Facilities", href: "/facilities" },
            { label: facility.title },
          ]}
          stats={[
            { value: "NABH", label: "Hospital Standard" },
            { value: "Precision", label: "Optical Tech" },
            { value: "Cashless", label: "Available" },
          ]}
          ctaText="Inquire About Facilities"
        />

        {/* ─── NARRATIVE CONTENT SECTIONS ─── */}
        <section className="w-full bg-[#F2E9DC] py-10 sm:py-16 px-3 sm:px-6 lg:px-10">
          <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
            {facility.contentSections.map((sec, idx) => (
              <div
                key={idx}
                className="rounded-[2.25rem] p-7 sm:p-10 md:p-14 bg-white/75 border border-[#C9A581]/35 shadow-sm space-y-6"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#A55322]" />
                  <span className="text-[11px] font-sans font-semibold uppercase tracking-[0.22em] text-[#A55322]">
                    INFRASTRUCTURE OVERVIEW
                  </span>
                </div>

                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#30291F] tracking-tight">
                  {sec.heading}
                </h2>

                <div className="space-y-4 text-sm sm:text-base md:text-[17px] text-[#30291F]/85 font-sans leading-relaxed">
                  {sec.body.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── EQUIPMENT SHOWCASE (IF PRESENT) ─── */}
        {facility.equipment && facility.equipment.length > 0 && (
          <section className="w-full bg-[#F2E9DC] py-12 px-3 sm:px-6 lg:px-10 border-t border-[#C9A581]/25">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12 sm:mb-16 space-y-2">
                <span className="text-[11px] font-sans font-bold uppercase tracking-[0.22em] text-[#A55322]">
                  ADVANCED TECHNOLOGY
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#30291F] tracking-tight">
                  State-of-the-Art Diagnostic &amp; Surgical Suites
                </h2>
                <p className="text-sm sm:text-base text-[#30291F]/70 max-w-xl mx-auto font-sans">
                  Engineered by global leaders in ophthalmic optics to deliver sub-micron diagnostic precision.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {facility.equipment.map((eq, i) => (
                  <div
                    key={i}
                    className="rounded-[2rem] p-7 sm:p-9 bg-white/80 border border-[#C9A581]/35 shadow-sm space-y-5 flex flex-col justify-between group hover:border-[#A55322]/40 transition-all duration-300"
                  >
                    <div className="space-y-3.5">
                      <div className="flex items-center justify-between gap-3">
                        <span className="px-3 py-1 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider bg-[#30291F]/8 text-[#675E31] border border-[#675E31]/20">
                          {eq.badge}
                        </span>
                        <span className="text-xs font-sans text-[#30291F]/40 font-semibold">
                          TECH 0{i + 1}
                        </span>
                      </div>

                      {eq.image && (
                        <div className="relative w-full h-52 sm:h-60 rounded-2xl overflow-hidden bg-[#FAF6F0] border border-[#C9A581]/25 flex items-center justify-center p-4 group-hover:bg-white transition-colors">
                          <Image
                            src={eq.image}
                            alt={eq.name}
                            fill
                            className="object-contain p-3 group-hover:scale-105 transition-transform duration-500 ease-out"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      )}

                      <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#30291F] group-hover:text-[#A55322] transition-colors">
                        {eq.name}
                      </h3>

                      <p className="text-xs sm:text-sm font-semibold text-[#8A875C]">
                        {eq.subtitle}
                      </p>

                      <p className="text-sm text-[#30291F]/80 font-sans leading-relaxed">
                        {eq.description}
                      </p>

                      {/* Indications */}
                      <div className="pt-2">
                        <span className="text-xs font-sans font-bold uppercase tracking-wider text-[#A55322] block mb-2">
                          Clinical Indications:
                        </span>
                        <ul className="space-y-1.5">
                          {eq.indications.map((ind, indIdx) => (
                            <li key={indIdx} className="flex items-start gap-2 text-xs sm:text-[13px] text-[#30291F]/75 font-sans">
                              <span className="text-[#675E31] font-bold">•</span>
                              <span>{ind}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Specs strip */}
                    <div className="pt-4 border-t border-[#C9A581]/25 flex flex-wrap gap-2">
                      {eq.specs.map((sp, spIdx) => (
                        <span
                          key={spIdx}
                          className="px-2.5 py-1 rounded-md text-[11px] font-sans bg-[#F2E9DC] text-[#30291F]/80 border border-[#C9A581]/30"
                        >
                          {sp}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ─── CASHLESS INSURANCE PARTNER LOGO GRID (IF PRESENT) ─── */}
        {facility.partnerLogos && facility.partnerLogos.length > 0 && (
          <section className="w-full bg-[#F2E9DC] py-12 sm:py-16 px-3 sm:px-6 lg:px-10 border-t border-[#C9A581]/25">
            <div className="max-w-7xl mx-auto space-y-10">
              <div className="text-center space-y-3 max-w-2xl mx-auto">
                <span className="text-[11px] font-sans font-bold uppercase tracking-[0.22em] text-[#A55322]">
                  OFFICIAL CASHLESS NETWORK
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#30291F] tracking-tight">
                  Empaneled Insurance Companies &amp; TPAs
                </h2>
                <p className="text-sm sm:text-base text-[#30291F]/70 font-sans">
                  We have direct cashless settlement tie-ups with leading health insurers and Third Party Administrators across India.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                {facility.partnerLogos.map((partner, pIdx) => (
                  <div
                    key={pIdx}
                    className="rounded-2xl p-4 bg-white/90 hover:bg-white border border-[#C9A581]/30 hover:border-[#A55322]/40 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col items-center justify-center text-center group min-h-[140px]"
                  >
                    <div className="relative w-full h-16 sm:h-20 flex items-center justify-center">
                      <Image
                        src={partner.image}
                        alt={partner.name}
                        fill
                        className="object-contain p-1.5 group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 16vw"
                      />
                    </div>
                    <p className="text-[11px] sm:text-xs font-semibold text-[#30291F]/80 group-hover:text-[#A55322] transition-colors mt-2 line-clamp-2 leading-tight">
                      {partner.name}
                    </p>
                  </div>
                ))}
              </div>

              {/* Cashless Help Desk Banner */}
              <div className="rounded-2xl p-6 sm:p-8 bg-[#675E31]/10 border border-[#675E31]/25 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="space-y-1 text-center sm:text-left">
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#30291F]">
                    Need Pre-Authorization Assistance for Your Surgery?
                  </h3>
                  <p className="text-xs sm:text-sm text-[#30291F]/75 font-sans">
                    Our dedicated insurance coordinators handle initial approval, documentation, query resolution, and final cashless settlement.
                  </p>
                </div>
                <a
                  href="tel:+919946322288"
                  className="shrink-0 px-6 py-3 rounded-full bg-[#A55322] hover:bg-[#8C4318] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm"
                >
                  Call Insurance Desk: +91 9946 322288
                </a>
              </div>
            </div>
          </section>
        )}

        {/* ─── NABH ACCREDITATION SPOTLIGHT (FOR CORPORATE EMPANELMENT) ─── */}
        {facility.slug === "corporate-empanelment" && (
          <section className="w-full bg-[#F2E9DC] py-12 px-3 sm:px-6 lg:px-10 border-t border-[#C9A581]/25">
            <div className="max-w-7xl mx-auto">
              <div className="rounded-[2.25rem] p-8 sm:p-12 md:p-14 bg-white/85 border border-[#C9A581]/35 shadow-sm flex flex-col md:flex-row items-center gap-8 md:gap-12">
                <div className="relative w-44 h-44 sm:w-52 sm:h-52 shrink-0 bg-[#FAF6F0] rounded-2xl p-4 border border-[#C9A581]/30 flex items-center justify-center">
                  <Image
                    src="/facilities/nabh-accreditation.png"
                    alt="NABH Accredited Hospital"
                    fill
                    className="object-contain p-2"
                    sizes="200px"
                  />
                </div>
                <div className="space-y-4 text-center md:text-left flex-1">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[10px] sm:text-[11px] font-sans font-bold uppercase tracking-wider bg-[#A55322]/10 text-[#A55322] border border-[#A55322]/20">
                    BENCHMARKED EXCELLENCE
                  </div>
                  <h3 className="font-heading font-bold text-2xl sm:text-3xl text-[#30291F]">
                    NABH Accredited Hospital Standard
                  </h3>
                  <p className="text-sm sm:text-base text-[#30291F]/80 font-sans leading-relaxed">
                    Aarya Eye Care complies with the rigorous standards set by the National Accreditation Board for Hospitals &amp; Healthcare Providers (NABH). For corporate partners, this ensures top-tier clinical hygiene, certified infection control protocols, and verified clinical competence across all treatments.
                  </p>
                  <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
                    <a
                      href="tel:+919946322288"
                      className="px-6 py-3 rounded-full bg-[#A55322] hover:bg-[#8C4318] text-white text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm"
                    >
                      Empanel Your Company: +91 9946 322288
                    </a>
                    <a
                      href="mailto:info@aaryaeyecare.in"
                      className="px-6 py-3 rounded-full bg-[#30291F]/8 hover:bg-[#30291F]/15 text-[#30291F] text-xs sm:text-sm font-semibold tracking-wide transition-all border border-[#30291F]/15"
                    >
                      Email: info@aaryaeyecare.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ─── PARTNERS & TPA LISTS (IF PRESENT) ─── */}
        {facility.partners && facility.partners.length > 0 && (
          <section className="w-full bg-[#F2E9DC] py-12 px-3 sm:px-6 lg:px-10 border-t border-[#C9A581]/25">
            <div className="max-w-7xl mx-auto space-y-10">
              <div className="text-center space-y-2">
                <span className="text-[11px] font-sans font-bold uppercase tracking-[0.22em] text-[#A55322]">
                  OFFICIAL EMPANELMENT
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#30291F] tracking-tight">
                  Trusted Network &amp; Institutional Partners
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {facility.partners.map((group, gIdx) => (
                  <div
                    key={gIdx}
                    className="rounded-[2rem] p-7 sm:p-9 bg-white/80 border border-[#C9A581]/35 shadow-sm space-y-5"
                  >
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#30291F] pb-3 border-b border-[#C9A581]/30">
                      {group.category}
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {group.items.map((it, itIdx) => (
                        <li
                          key={itIdx}
                          className="flex items-center gap-2 p-2.5 rounded-xl bg-[#F2E9DC]/60 border border-[#C9A581]/25 text-xs sm:text-sm font-sans font-medium text-[#30291F]/85"
                        >
                          <span className="w-2 h-2 rounded-full bg-[#A55322] shrink-0" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ─── INTERACTIVE FAQS ─── */}
        <FAQSection
          title={`${facility.title} FAQs`}
          subtitle="Frequently asked questions about our facilities, claims, and clinical protocols."
          faqs={facility.faqs}
        />

        {/* ─── CTA BANNER ─── */}
        <CtaBanner
          title={`Connect with our ${facility.title} Team`}
          tagline="NABH ACCREDITED HEALTHCARE"
          description="Have questions about diagnostic appointments, corporate tie-ups, or cashless insurance? Reach out today."
        />

        <Footer />
        <AppointmentModal />
      </main>
    </PageTransition>
  );
}
