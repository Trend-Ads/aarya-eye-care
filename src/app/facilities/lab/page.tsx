import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import CtaBanner from "@/components/CtaBanner";
import AppointmentModal from "@/components/AppointmentModal";
import PageTransition from "@/components/PageTransition";
import { LAB_FACILITY } from "@/data/facilities";

const services = [
  {
    id: "eeg",
    name: "Electroencephalography (EEG)",
    image: "/clinical/neuro-lab-eeg.webp",
    description: "Records the brain’s electrical activity through electrodes placed on the scalp.",
  },
  {
    id: "ncs",
    name: "Nerve Conduction Study (NCS)",
    image: "/clinical/neuro-lab-ncs.webp",
    description: "Uses skin electrodes to measure how electrical signals travel through motor and sensory nerves.",
  },
  {
    id: "bera",
    name: "Brainstem Evoked Response Audiometry (BERA)",
    image: "/clinical/neuro-lab-bera.webp",
    description: "Records the auditory nerve and brainstem response to sounds delivered through earphones.",
  },
  {
    id: "vep",
    name: "Visual Evoked Potential (VEP) Study",
    image: "/clinical/neuro-lab-vep.webp",
    description: "Measures the brain’s response to a visual stimulus to assess the pathway from the eye to the brain.",
  },
];

const { title, shortDesc, heroImage } = LAB_FACILITY;

export const metadata: Metadata = {
  title: `${title} | Aarya Eye Care`,
  description: shortDesc,
  alternates: { canonical: "/facilities/lab" },
  openGraph: { title, description: shortDesc, images: [heroImage] },
};

export default function NeuroLabPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-[#F2E9DC] text-[#30291F]">
        <Navbar />
        <div className="mx-auto max-w-7xl space-y-12 px-4 pb-10 pt-28 sm:px-8 sm:pb-16 sm:pt-36">
          <section aria-labelledby="lab-title" className="relative isolate flex min-h-[360px] items-end overflow-hidden rounded-3xl bg-[#30291F] sm:min-h-[460px]">
            <Image src={heroImage} alt="" fill preload sizes="(min-width: 1280px) 1216px, 100vw" className="-z-20 object-cover object-center" />
            <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-tr from-black/80 via-black/35 to-black/15" />
            <div className="max-w-2xl space-y-3 p-6 text-white sm:p-12">
              <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-xs text-white/90">
                <Link href="/" className="hover:underline">Home</Link>
                <span aria-hidden="true">/</span>
                <Link href="/facilities" className="hover:underline">Facilities</Link>
                <span aria-hidden="true">/</span>
                <span aria-current="page">Neuro Lab</span>
              </nav>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#F2E9DC]">{LAB_FACILITY.badge}</p>
              <h1 id="lab-title" className="text-4xl font-bold tracking-tight sm:text-6xl">{title}</h1>
              <p className="font-semibold">{LAB_FACILITY.tagline}</p>
              <p className="text-sm leading-relaxed text-white/90 sm:text-base">{shortDesc}</p>
            </div>
          </section>

          <section aria-labelledby="neuro-services">
            <h2 id="neuro-services" className="mb-6 text-3xl font-bold">Neurodiagnostic services</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <article key={service.id} className="overflow-hidden rounded-2xl border border-[#C9A581]/40 bg-white/80">
                  <Image
                    src={service.image}
                    alt=""
                    width={768}
                    height={768}
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="aspect-square w-full object-cover"
                  />
                  <div className="space-y-2 p-5">
                    <h3 className="text-lg font-bold">{service.name}</h3>
                    <p className="text-sm leading-relaxed text-[#30291F]/80">{service.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section aria-labelledby="neuro-setup" className="grid items-center gap-6 rounded-3xl border border-[#C9A581]/40 bg-white/70 p-5 sm:p-8 md:grid-cols-2">
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <Image src="/clinical/neuro-lab-setup.webp" alt="" fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
            </div>
            <div className="space-y-4">
              <h2 id="neuro-setup" className="text-3xl font-bold">Neuro Lab setup</h2>
              <p className="leading-relaxed">The lab uses electrophysiology equipment to record responses from the brain, peripheral nerves, and auditory and visual pathways. The setup varies with the test your clinician requests.</p>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed">
                <li>Scalp electrodes and a recording workstation for EEG</li>
                <li>Skin electrodes and a stimulator for nerve conduction studies</li>
                <li>Earphones and recording electrodes for BERA</li>
                <li>A visual stimulus display and recording electrodes for VEP</li>
              </ul>
            </div>
          </section>
        </div>
        <CtaBanner title="Need to schedule a Neuro Lab test?" tagline="Aarya Neuro Lab" description="Contact Aarya Eye Care to confirm availability and preparation instructions for your test." />
        <Footer />
        <AppointmentModal />
      </main>
    </PageTransition>
  );
}
