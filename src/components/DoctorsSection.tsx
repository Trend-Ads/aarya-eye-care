"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

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
    <section id="doctors" className="w-full bg-[#fcfdfd] py-16 sm:py-20 md:py-24 px-3 sm:px-6 lg:px-8 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200/80">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-[#9A4F3C] tracking-tight">
              Our Doctors
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-2xl">
              Our panel of highly qualified, compassionate and experienced ophthalmologists and super-speciality eye surgeons ensures the highest standards of clinical precision and patient care.
            </p>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#9A4F3C] text-white shadow-xs"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Doctors Grid - 5 columns on desktop matching reference layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5 md:gap-6 mt-8 sm:mt-10">
          {filteredDoctors.map((doc, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[22px] sm:rounded-[26px] p-2.5 sm:p-3 border border-slate-200/80 shadow-[0_4px_16px_rgba(15,23,42,0.04)] hover:shadow-[0_12px_28px_rgba(15,23,42,0.08)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Doctor Photo */}
                <div className="relative w-full aspect-[4/4.4] rounded-[18px] sm:rounded-[22px] overflow-hidden bg-slate-100 shadow-inner">
                  <Image
                    src={doc.image}
                    alt={doc.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 20vw"
                  />
                  
                  {/* Subtle speciality pill tag */}
                  <div className="absolute top-2 left-2">
                    <span className="bg-white/90 backdrop-blur-xs text-[9px] font-bold text-slate-700 px-1.5 py-0.5 rounded-md shadow-2xs">
                      {doc.category}
                    </span>
                  </div>
                </div>

                {/* Name & Role */}
                <div className="text-center mt-3 px-1">
                  <h3 className="font-bold text-xs sm:text-[13px] md:text-[13.5px] text-slate-900 leading-tight uppercase tracking-tight group-hover:text-[#9A4F3C] transition-colors">
                    {doc.name}
                  </h3>
                  <p className="text-[10px] sm:text-[11px] text-slate-500 leading-snug mt-1 font-medium line-clamp-2">
                    {doc.role}
                  </p>
                </div>
              </div>

              {/* Make Appointment Button matching reference layout */}
              <div className="mt-3.5 pt-2 border-t border-slate-100 flex justify-center">
                <Link
                  href="#appointment"
                  className="w-full text-center px-3 py-1.5 rounded-full border border-[#9A4F3C] text-[#9A4F3C] hover:bg-[#9A4F3C] hover:text-white text-[10.5px] sm:text-[11px] font-semibold transition-all duration-200 shadow-2xs hover:shadow-xs active:scale-95"
                >
                  Make Appointment
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner Reassurance */}
        <div className="mt-12 p-4 sm:p-5 rounded-2xl bg-[#9A4F3C]/5 border border-[#9A4F3C]/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#9A4F3C] text-white flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-900">
                Over 20+ Experienced Ophthalmologists &amp; Surgeons
              </h4>
              <p className="text-xs text-slate-600">
                Committed to delivering individualized and NABH-accredited vision care for every patient.
              </p>
            </div>
          </div>

          <Link
            href="#appointment"
            className="inline-flex items-center gap-2 bg-[#9A4F3C] hover:bg-[#854231] text-white px-5 py-2.5 rounded-full text-xs font-semibold shadow-sm transition-all"
          >
            <span>Book Consultation With a Specialist</span>
            <span>→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
