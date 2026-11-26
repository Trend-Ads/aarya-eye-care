import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SubpageHero from "@/components/SubpageHero";
import CtaBanner from "@/components/CtaBanner";
import FAQSection from "@/components/FAQSection";
import AppointmentModal from "@/components/AppointmentModal";
import PageTransition from "@/components/PageTransition";
import { BRANCHES_DATA } from "@/data/branches";

export const metadata: Metadata = {
  title: "Our Hospital Branches | Aarya Eye Care Thrissur, Cherpu, Kunnamkulam, Kodungallur",
  description:
    "Find your nearest Aarya Eye Care center across Central Kerala. Find branch addresses, opening hours, phone numbers, and directions.",
};

const BRANCH_FAQS = [
  {
    question: "Do all 4 branches perform eye surgeries?",
    answer: "Our Thrissur Main Hospital (near North Bus Stand) houses our major surgical suites, including our positive-pressure modular laminar airflow operation theatres, and the Trans-PRK suite. Our Cherpu, Kunnamkulam, and Kodungallur regional centers provide comprehensive outpatient consultations, computerized diagnostic testing, glaucoma/retina checkups, minor procedures, pre-operative workups, and post-operative follow-up care."
  },
  {
    question: "Are appointments mandatory before visiting a branch?",
    answer: "While walk-ins are always welcomed for emergency ocular complaints and general examinations, we recommend booking a prior appointment online or over the phone to guarantee zero waiting time with your preferred senior consultant ophthalmologist."
  },
  {
    question: "Are optical shops and prescription eyeglasses available at all branches?",
    answer: "Yes, every Aarya Eye Care branch features an in-house optical dispensing unit offering high-index anti-reflective computer lenses, progressive lenses, pediatric frames, and branded prescription sunglasses."
  },
  {
    question: "What should I do in an eye emergency outside normal working hours?",
    answer: "For severe eye trauma, chemical burns, sudden painful vision loss, or acute glaucoma crises, contact our hospital helpline at +91 9946 322288 or proceed directly to our Thrissur Main Hospital during operating hours (Mon – Sat: 8:00 AM – 6:00 PM, Sun: 10:00 AM – 2:00 PM)."
  }
];

// Clean, premium Lucide-style vector SVG icons
function ClockIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function MapPinIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function ArrowUpRightIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

export default function BranchesPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-[#F2E9DC] text-[#30291F] flex flex-col selection:bg-[#C9A581]/40 relative">
        <Navbar />

        <SubpageHero
          badge="Central Kerala"
          title="Our hospital"
          titleAccent="branches"
          description="Find your nearest Aarya Eye Care centre, check visiting hours, and get directions."
          breadcrumbs={[{ label: "Branches" }]}
        />

        <section aria-label="Branch locations" className="mx-auto w-full max-w-7xl px-4 pb-14 pt-4 sm:px-6 sm:pb-20 lg:px-10">
          <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
            {BRANCHES_DATA.map((branch) => (
              <article
                key={branch.id}
                id={branch.id}
                aria-labelledby={`${branch.id}-name`}
                className="flex min-w-0 scroll-mt-28 flex-col overflow-hidden rounded-[2rem] border border-[#C9A581]/45 bg-[#FFFCF7] shadow-[0_8px_28px_rgba(48,41,31,0.06)]"
              >
                <a
                  href={branch.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View the ${branch.name} branch on Google Maps`}
                  className="group relative block aspect-[16/9] overflow-hidden bg-[#E5DACB] focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-[#A55322]"
                >
                  <Image
                    src={branch.image}
                    alt={`Exterior of the Aarya Eye Care branch in ${branch.name}`}
                    fill
                    sizes="(min-width: 1280px) 584px, (min-width: 768px) 48vw, 100vw"
                    className="object-cover object-[center_36%] motion-safe:transition-transform motion-safe:duration-500 motion-safe:group-hover:scale-[1.025]"
                  />
                </a>

                <div className="flex flex-1 flex-col px-5 pb-5 pt-5 sm:px-7 sm:pb-6">
                  <p className="text-xs font-semibold tracking-wide text-[#675E31]">{branch.badge}</p>
                  <h2 id={`${branch.id}-name`} className="mt-1 text-3xl font-bold tracking-tight">{branch.name}</h2>
                  <address className="mt-3 flex items-start gap-2.5 text-sm not-italic leading-relaxed text-[#51493C]">
                    <MapPinIcon className="mt-0.5 size-4 shrink-0 text-[#A55322]" />
                    <span>{branch.addressLines.join(", ")}</span>
                  </address>

                  <div className="mt-5 flex-1 rounded-2xl bg-[#F2E9DC]/65 px-4 py-3.5">
                    <h3 className="flex items-center gap-2 text-sm font-semibold">
                      <ClockIcon className="size-4 text-[#675E31]" />
                      Opening hours
                    </h3>
                    <ul className="mt-2 space-y-1 text-sm leading-relaxed text-[#51493C]">
                      <li>{branch.timings.weekdays}</li>
                      <li>{branch.timings.sunday}</li>
                    </ul>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-x-4 gap-y-3 border-t border-[#C9A581]/40 pt-4">
                    <div className="flex items-start gap-2.5">
                      <PhoneIcon className="mt-1 size-4 shrink-0 text-[#A55322]" />
                      <div className="flex flex-col items-start text-sm font-semibold leading-7 text-[#51493C]">
                        {[branch.phoneLandline, branch.phoneMobile].map((phone) => (
                          <a key={phone} href={`tel:${phone.replace(/^0/, "+91").replaceAll(" ", "")}`} aria-label={`Call ${branch.name} at ${phone}`} className="hover:text-[#A55322] hover:underline">
                            {phone}
                          </a>
                        ))}
                      </div>
                    </div>
                    <a
                      href={branch.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Get directions to Aarya Eye Care ${branch.name}`}
                      className="inline-flex min-h-11 items-center gap-2 rounded-full bg-[#675E31] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#514A27]"
                    >
                      Get directions <ArrowUpRightIcon className="size-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <FAQSection
          title="Frequently Asked Branch Questions"
          subtitle="Information on timings, doctor rotas, and emergency admission across our centers."
          faqs={BRANCH_FAQS}
        />

        {/* ─── CTA BANNER ─── */}
        <CtaBanner
          title="Have Questions or Need an Immediate Appointment?"
          tagline="CENTRALIZED CALL CENTER"
          description="Call our hospital helpline at +91 9946 322288 or 0487 232 2288 (Mon – Sat: 8:00 AM – 6:00 PM | Sun: 10:00 AM – 2:00 PM for Thrissur)."
        />

        <Footer />
        <AppointmentModal />
      </main>
    </PageTransition>
  );
}
