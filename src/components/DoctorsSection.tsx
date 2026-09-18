"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

interface Doctor {
  name: string;
  role: string;
  speciality: string;
  category: string;
  image: string;
}

export default function DoctorsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const doctors: Doctor[] = [
    {
      name: "Dr. Divya Dharmarajan",
      role: "Senior Consultant Ophthalmologist",
      speciality: "General & Comprehensive Eye Care",
      category: "General",
      image: "/doctors/Dr.-Divya-Dharmsrajan-qotapjlt62r1qfr9lmtu0cu1trfev3ycy13p7mfc96.webp",
    },
    {
      name: "Dr. Nadhna Basheer",
      role: "Cornea Specialist & Phaco Refractive Surgeon",
      speciality: "Cornea, Cataract & LASIK",
      category: "Cornea & Refractive",
      image: "/doctors/Dr.Nadhan-Basheer-qotapd0xu8i1h60to1zg0whto2bud888l4jauop3gq.webp",
    },
    {
      name: "Dr. Manju .M",
      role: "Glaucoma Specialist & Phaco Surgeon",
      speciality: "Glaucoma & Micro-Incision Cataract",
      category: "Glaucoma",
      image: "/doctors/Dr.Manju_.M-qotap99l2wcw6q6aa0cxqxfzaiudiftb8lxcxkuo5m.webp",
    },
    {
      name: "Dr. Sikha Radhakrishnan",
      role: "Medical Retina & Consultant Ophthalmologist",
      speciality: "Retina, Diabetic Eye Care & Uveitis",
      category: "Retina",
      image: "/doctors/Dr.-Sikha-Radhakrishnan-1-qotbqtvc9hsi9lljvr12wy4a3znk6vz22kp2ir55fu.webp",
    },
    {
      name: "Dr. Anju Jose",
      role: "Consultant Ophthalmologist",
      speciality: "Comprehensive Ophthalmology & Refraction",
      category: "General",
      image: "/doctors/Dr.-ANJU-JOSE-Consultant-Ophthalmologist-rr47qmm2w8jz6il2lj9tjogckzy8dc3mkcr0dhf5ca.webp",
    },
    {
      name: "Dr. Lijo Joseph",
      role: "Consultant Ophthalmologist & Phaco Surgeon",
      speciality: "Phacoemulsification & Cataract",
      category: "Cataract",
      image: "/doctors/Dr.-Lijo-Joseph-scaled-r9v197ug1ilpsjrqpzyb4ldjek0uaoquvq8s5i7f0q.jpg",
    },
    {
      name: "Dr. Roshni Robert",
      role: "Consultant Ophthalmologist",
      speciality: "Comprehensive Eye Consultations",
      category: "General",
      image: "/doctors/Dr-copy-scaled-r9v19fd5k6w0dfgti37bojh85mzs09kpkrgnzpw9my.jpg",
    },
    {
      name: "Dr. Surya Surendran",
      role: "Medical Retina & Consultant Ophthalmologist",
      speciality: "Retina Diagnostics & Laser Photocoagulation",
      category: "Retina",
      image: "/doctors/Dr.-SURYA-SURENDRAN-Medical-Retina-Consultant-Ophthalmologist-rr48mweljgqdsjpi5hgp5ja2t8vwn87v0335jhkjpm.webp",
    },
    {
      name: "Dr. Jyothi .A",
      role: "Cornea Specialist & Phaco Refractive Surgeon",
      speciality: "Cornea Transplants & LASIK",
      category: "Cornea & Refractive",
      image: "/doctors/ABP05564-scaled-r9v0ztgjp5qhoxf9lxom6yrljucpbnfhl7dzdw558q.jpg",
    },
    {
      name: "Dr. Maya .T.J",
      role: "Glaucoma Specialist & Phaco Surgeon",
      speciality: "Glaucoma Filtration & Cataract",
      category: "Glaucoma",
      image: "/doctors/Dr.-MAYA-.T.J-Glaucoma-Cataract-Surgeon-rr48fpwzc0wj3s4z2vqaluibga9yugpocjomke7t8q.webp",
    },
    {
      name: "Dr. Liya .K.Y",
      role: "Vitreo - Retinal Surgeon",
      speciality: "Vitrectomy & Retinal Surgery",
      category: "Retina",
      image: "/doctors/Dr.-LIYA-.K.Y-Vitreo-Retinal-Surgeon-rr48b3jjqcks0sun2dtbuihqb32001d6po7omf2hu2.webp",
    },
    {
      name: "Dr. Praveena .S. Kumar",
      role: "Glaucoma Specialist & Phaco Surgeon",
      speciality: "Early Glaucoma Detection & Laser SLT",
      category: "Glaucoma",
      image: "/doctors/Dr.-PRAVEENA.-S.-KUMAR-Consultant-Ophthalmologist-Glaucoma-Specialist-rr48j6xikznnzx3dsvrobgymgj5sa7hz5qg7e72g96.webp",
    },
    {
      name: "Dr. Rosemary Paul",
      role: "Consultant Ophthalmologist",
      speciality: "Clinical Eye Evaluations & Vision Care",
      category: "General",
      image: "/doctors/Dr.ROSEMARY-PAUL_Consultant-Ophthalmologist-rr48shk260dqt3lbiweuz4ipxpcgegef3qp28paaq2.webp",
    },
    {
      name: "Dr. Keziah Mary Thomas",
      role: "Consultant Ophthalmologist & Phaco Refractive Surgeon",
      speciality: "Refractive Surgery & Advanced Cataract",
      category: "Cornea & Refractive",
      image: "/doctors/Dr.-KEZIAH-MARY-THOMAS-Consultant-Phaco-Refractive-Surgeon-rr486h644o90xtkb1vwd36h55vu15m0p2sqqofx6fe.webp",
    },
    {
      name: "Dr. Nandhinikutty .P.S",
      role: "Medical Retina & Consultant Ophthalmologist",
      speciality: "Macular Diseases & Diabetic Retinopathy",
      category: "Retina",
      image: "/doctors/Dr.NANDHINIKUTTY.P.S-MBBS.DO_.Medical-Retina-Consultant-Ophthalmologist-rr48r2srwyg9e5n1rah08hbtuwamusswwrgubrdk22.webp",
    },
    {
      name: "Dr. Sarin Ibrahim Sha",
      role: "Cornea Specialist & Phaco Refractive Surgeon",
      speciality: "Corneal Grafting (DMEK) & Refractive LASIK",
      category: "Cornea & Refractive",
      image: "/doctors/Dr.-SARIN-IBRAHIM-SHA-Cornea-Phaco-Refractive-Surgeon-rr48lb2fykjw4c0sgaogffqykqqilow8g7aj9lxk96.webp",
    },
    {
      name: "Dr. Anjusree Nair",
      role: "Consultant Ophthalmologist",
      speciality: "Preventative Eye Screening & Cataract",
      category: "General",
      image: "/doctors/Dr.-ANJUSREE-NAIR-Consultant-Ophthalmologist-rr484mfknfpo1i98vl1uo5beziyyz3nr5mf9lso4p6.webp",
    },
    {
      name: "Dr. Jayasree",
      role: "Glaucoma Specialist & Phaco Surgeon",
      speciality: "Advanced Trabeculectomy & Phaco",
      category: "Glaucoma",
      image: "/doctors/Dr.JAYASREE-Glaucoma-Phaco-Refractive-Surgeon-rr48p9xwtdzh5299a0fqyfp0vb6b3onfnugc7o1pze.webp",
    },
  ];

  const categories = ["All", "Cornea & Refractive", "Glaucoma", "Retina", "Cataract", "General"];

  const filteredDoctors = doctors.filter((doc) => {
    const matchesCategory =
      selectedCategory === "All" || doc.category === selectedCategory;
    const matchesSearch =
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.speciality.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="doctors" className="w-full bg-[#F2E9DC] py-16 sm:py-20 md:py-24 px-3 sm:px-6 lg:px-8 border-t border-[#C9A581]/30">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#C9A581]/30"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#A55322]" />
              <span className="text-[#A55322] text-[11px] font-mono font-semibold uppercase tracking-[0.22em]">
                DARKNESS TO LIGHT
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-normal text-[#30291F] tracking-tight leading-tight">
              Our Specialists &amp; Surgeons
            </h2>
            <p className="text-xs sm:text-sm text-[#30291F]/75 mt-2 max-w-2xl">
              Our panel of highly qualified, compassionate and experienced ophthalmologists and super-speciality eye surgeons ensures the highest standards of clinical precision and patient care.
            </p>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#675E31] text-[#F2E9DC] shadow-xs"
                    : "bg-white text-[#30291F] border border-[#C9A581]/40 hover:border-[#675E31] hover:text-[#675E31]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Doctors Grid - matching reference layout with full-bleed image and soft tinted bottom gradient */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 sm:gap-4 md:gap-5 mt-6 sm:mt-8"
          layout
        >
          <AnimatePresence>
            {filteredDoctors.map((doc, idx) => {
            const cardGradients = [
              "from-[#30291F]/85 via-[#30291F]/25 to-transparent", // Warm charcoal
              "from-[#675E31]/85 via-[#675E31]/20 to-transparent", // Deep olive
              "from-[#544D28]/85 via-[#544D28]/20 to-transparent", // Satin olive
              "from-[#A55322]/85 via-[#A55322]/20 to-transparent", // Terracotta
            ];
            const gradient = cardGradients[idx % cardGradients.length];

            return (
              <motion.div
                key={doc.name} // Key by name for AnimatePresence
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: (idx % 8) * 0.05 }} // Stagger visible items
              >
                <Link
                  href="#appointment"
                  className="relative w-full aspect-[3/4.2] rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-end p-3 sm:p-4 group select-none cursor-pointer block border border-[#C9A581]/30"
                >
                  {/* Doctor Photo */}
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                  />

                  {/* Soft Tinted Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${gradient} transition-opacity duration-300`}
                  />

                  {/* Doctor Name & Role / Speciality at bottom inside gradient */}
                  <div className="relative z-10 text-left">
                    <h3 className="font-serif font-medium text-sm sm:text-base md:text-lg text-[#F2E9DC] leading-tight drop-shadow-xs group-hover:underline">
                      {doc.name}
                    </h3>
                    <p className="text-[11px] sm:text-xs md:text-[13px] text-[#F2E9DC]/90 font-normal leading-snug mt-1 line-clamp-1">
                      {doc.speciality || doc.role}
                    </p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Banner Reassurance */}
        <motion.div 
          className="mt-12 p-4 sm:p-5 rounded-2xl bg-[#C9A581]/15 border border-[#C9A581]/35 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#675E31] text-[#F2E9DC] flex items-center justify-center shrink-0 shadow-xs">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-sm text-[#30291F]">
                Over 20+ Experienced Ophthalmologists &amp; Surgeons
              </h4>
              <p className="text-xs text-[#30291F]/75">
                Committed to delivering individualized and NABH-accredited vision care for every patient.
              </p>
            </div>
          </div>

          <Link
            href="#appointment"
            className="inline-flex items-center gap-2 bg-[#675E31] hover:bg-[#524B27] text-[#F2E9DC] px-5 py-2.5 rounded-full text-xs font-semibold shadow-sm transition-all"
          >
            <span>Book Consultation With a Specialist</span>
            <span>→</span>
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
