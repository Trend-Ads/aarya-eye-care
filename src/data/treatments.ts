export interface TreatmentTestimonial {
  author: string;
  role?: string;
  location?: string;
  rating?: number;
  text: string;
}

export interface TreatmentDetail {
  slug: string;
  name: string;
  badge: string;
  tagline: string;
  heroImage: string;
  shortDesc: string;
  overview: string[];
  keyHighlights: {
    title: string;
    description: string;
    icon: string;
  }[];
  candidates: string[];
  procedureSteps: {
    step: string;
    title: string;
    description: string;
  }[];
  technologies: {
    name: string;
    role: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  recoveryTimeline: {
    time: string;
    milestone: string;
  }[];
  relatedSlugs: string[];
  testimonials?: TreatmentTestimonial[];
}

export const TREATMENTS: TreatmentDetail[] = [
  {
    slug: "cataract",
    name: "Cataract Surgery",
    badge: "Micro-Incision Phaco",
    tagline: "Crystal Clear Vision Restoration with Premium IOLs",
    heroImage: "/images/eye-care-consultation.jpg",
    shortDesc: "Advanced stitchless, painless micro-incision cataract surgery (MICS) with cold phacoemulsification and foldable premium intraocular lenses.",
    overview: [
      "A cataract is the natural clouding of the eye's crystalline lens, preventing light from focusing sharply onto the retina. It commonly develops with age, prolonged UV exposure, genetics, or systemic conditions like diabetes.",
      "At Aarya Eye Care Thrissur, our cataract department provides world-class surgical care utilizing state-of-the-art cold phacoemulsification technology. Through a sub-2.2mm micro-incision, the cloudy cataract lens is gently emulsified and aspirated, followed by the implantation of a customized premium intraocular lens (IOL).",
      "The procedure is entirely outpatient, requiring zero needles, zero stitches, and no ocular bandages. Most patients achieve functional, bright vision within 24 hours."
    ],
    keyHighlights: [
      {
        title: "Micro-Incision Phaco",
        description: "Sub-2.2mm incision ensures zero stitches, negligible astigmatism, and rapid natural sealing.",
        icon: "microscope"
      },
      {
        title: "Premium Foldable IOLs",
        description: "Monofocal, Toric (astigmatism correcting), and Multifocal/EDOF lenses for spectacle freedom at multiple distances.",
        icon: "lens"
      },
      {
        title: "Same-Day Recovery",
        description: "Walk in and walk out within 2 hours. Resume light reading and daily activities the very next day.",
        icon: "clock"
      },
      {
        title: "Topical Drop Anesthesia",
        description: "Gentle eye-drop numbing eliminates deep needle injections and facial bruising.",
        icon: "shield"
      }
    ],
    candidates: [
      "Individuals experiencing blurred, foggy, or dimmed vision",
      "Difficulty driving at night due to glare and halos around headlights",
      "Colors appearing faded, yellowish, or less vibrant",
      "Frequent changes in spectacle prescription without satisfactory vision",
      "Double vision or ghosting in a single eye"
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Precision Biometry & IOL Power Calculation",
        description: "Using the Optical Biometer OA-2000, we obtain sub-micron measurements of axial length, anterior chamber depth, and corneal curvature to select the ideal replacement lens."
      },
      {
        step: "02",
        title: "Topical Anesthesia & Micro-Incision",
        description: "Anesthetic eye drops ensure total comfort. A self-sealing 2.0-2.2mm clear corneal incision is placed without cutting vascular tissue."
      },
      {
        step: "03",
        title: "Phacoemulsification & Ultrasonic Aspiration",
        description: "High-frequency ultrasound gently liquefies the opacified cataract lens, which is vacuumed out cleanly while preserving the natural capsular bag."
      },
      {
        step: "04",
        title: "Foldable IOL Implantation & Rapid Discharge",
        description: "The foldable intraocular lens is injected through the micro-incision into the capsular bag, unfolding perfectly into place. The patient returns home comfortably the same day."
      }
    ],
    technologies: [
      { name: "Optical Biometer OA-2000", role: "High-precision non-contact biometry & IOL ray-tracing" },
      { name: "Alcon / Appasamy Phaco Suite", role: "Cold ultrasonic fluidics with active anterior chamber stability" },
      { name: "Premium Aspheric & Toric IOLs", role: "ZEISS, Alcon & Rayner optics for sharp contrast" }
    ],
    faqs: [
      {
        question: "How do I choose the best cataract surgeon and hospital in Thrissur?",
        answer: "Look for NABH-accredited facilities with dedicated sterile laminar airflow operation theatres, senior surgeons experienced in thousands of micro-incision phaco procedures, and advanced optical biometry machines like the OA-2000 for pinpoint lens calculation."
      },
      {
        question: "Is cataract surgery painful?",
        answer: "No. With modern topical drop anesthesia, patients feel no pain during the procedure. At most, you may perceive a gentle flow of fluid and light sensations. Needle injections around the eye are not needed for routine cases."
      },
      {
        question: "What food should I eat after cataract surgery?",
        answer: "Eat a balanced, nutritious diet rich in fiber, green leafy vegetables, antioxidants, and adequate hydration. Avoid excessively spicy, oily, or unhygienic street food during the first week to prevent gastrointestinal strain."
      },
      {
        question: "How long does recovery take before I can resume work?",
        answer: "Most patients can resume desk work, screen reading, and light domestic chores within 24 to 48 hours. Strenuous weightlifting, swimming, and splashing raw tap water into the operated eye should be avoided for 2 to 3 weeks."
      }
    ],
    recoveryTimeline: [
      { time: "Day 1", milestone: "Post-op checkup, immediate vision brightening, resume gentle indoor activities." },
      { time: "Week 1", milestone: "Stabilization of corneal refraction; can resume routine office work." },
      { time: "Month 1", milestone: "Full tissue healing; final prescription check and clearance for swimming/sports." }
    ],
    relatedSlugs: ["lasik", "glaucoma", "cornea"],
    testimonials: [
      {
            author: "Sudhakar Dev",
            location: "Thrissur",
            role: "Cataract Surgery Patient",
            rating: 5,
            text: "Aarya eye care hospital has changed my life from blurry vision. The medical team and their support were amazing. They were very friendly and cooperative throughout my cataract procedure. Thank you Aarya Eye Care Hospital."
      },
      {
            author: "Krishnan V",
            location: "Thrissur",
            role: "Micro-Incision Phaco Patient",
            rating: 5,
            text: "I got the best eye cataract treatment in Thrissur from here. I was challenged to do my day-to-day activities with cataracts. From visiting this hospital, I got hope. From the beginning of the procedure to post-operative care, their service was outstanding. Thanks to the medical team."
      },
      {
            author: "Remya Santhosh",
            location: "Cherpu",
            role: "Patient Family Member",
            rating: 5,
            text: "Arya Eye Care Hospital provides the best cataract surgery in Thrissur. My father suffered from cataracts. From the diagnosis, their medical support was excellent. They explained the treatment method and each procedure thoroughly, making the entire procedure stress-free for us."
      },
      {
            author: "Lakshmi Priya",
            location: "Kunnamkulam",
            role: "Premium Multifocal IOL Patient",
            rating: 5,
            text: "Arya Eye Care provides medical care for cataracts. From my experience, I can assure you that they are the best in Kerala. The surgery was quick and painless. The entire medical team was very supportive and incredibly caring throughout the process."
      }
]
  },
  {
    slug: "lasik",
    name: "Blade-Free LASIK",
    badge: "Laser Vision Correction",
    tagline: "Permanent Freedom from Glasses and Contact Lenses",
    heroImage: "/images/eye-closeup.jpg",
    shortDesc: "Ultra-precise customized laser vision correction correcting myopia, hyperopia, and astigmatism with zero manual blades.",
    overview: [
      "Blade-Free LASIK (Laser-Assisted In Situ Keratomileusis) is the premier global gold standard for individuals wishing to liberate themselves from spectacles and contact lenses.",
      "At Aarya Eye Care, our refractive suite combines high-frequency femtosecond laser flap creation with customized wavefront-guided excimer ablation. The corneal bed is reshaped with microscopic precision according to your eye's individual topographic map.",
      "The entire bilateral treatment takes less than 15 minutes. Patients wake up the next morning with high-definition natural vision, ready to enjoy sports, driving, and active professional lives without visual aids."
    ],
    keyHighlights: [
      {
        title: "100% Blade-Free",
        description: "Femtosecond infrared laser creates a uniform, microscopically thin corneal flap without any mechanical blades.",
        icon: "laser"
      },
      {
        title: "Wavefront Customized",
        description: "Maps and corrects microscopic optical aberrations for superior night vision and contrast sensitivity.",
        icon: "sparkles"
      },
      {
        title: "10-15 Min Procedure",
        description: "Both eyes are treated in a single swift outpatient session with rapid visual recovery within hours.",
        icon: "clock"
      },
      {
        title: "Rapid Visual Recovery",
        description: "Over 95% of patients achieve 20/20 vision or better by the next morning.",
        icon: "eye"
      }
    ],
    candidates: [
      "Age 18 or above with a stable spectacle power for at least 1 year",
      "Diagnosed with myopia (nearsightedness), hyperopia (farsightedness), or astigmatism",
      "Adequate central corneal thickness verified by Sirius corneal tomography",
      "Healthy ocular surface free from severe dry eye disease or keratoconus",
      "Not currently pregnant or breastfeeding"
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Comprehensive Refractive Workup",
        description: "Sirius corneal topography, pachymetry, dilated retina screening, and dry eye workup to verify 100% candidacy."
      },
      {
        step: "02",
        title: "Femtosecond Flap Creation",
        description: "An ultra-fast femtosecond laser separates a microscopic corneal flap in seconds with smooth, planoconcave geometry."
      },
      {
        step: "03",
        title: "Excimer Laser Reshaping",
        description: "Cold ultraviolet laser pulses reshape the stromal bed in 10-20 seconds with sub-micron 3D eye tracking."
      },
      {
        step: "04",
        title: "Flap Repositioning & Natural Adhesion",
        description: "The corneal flap is gently smoothed back into place, adhering naturally without stitches within minutes."
      }
    ],
    technologies: [
      { name: "Sirius Corneal Topographer", role: "3D Scheimpflug & Placido anterior segment structural analyzer" },
      { name: "High-Speed Refractive Laser", role: "Wavefront-optimized corneal stromal reshaping" },
      { name: "Dynamic Eye-Tracking System", role: "Sub-millisecond tracking compensating for involuntary saccades" }
    ],
    faqs: [
      {
        question: "Is LASIK permanent, or will my power return later?",
        answer: "The corneal reshaping performed during LASIK is permanent. As long as your eye power was stable before the procedure, the distance vision correction remains lifelong. Normal age-related reading changes (presbyopia) after age 45 may still occur naturally."
      },
      {
        question: "Does blade-free LASIK hurt?",
        answer: "No. Numbing anesthetic drops are administered before surgery. You may feel a brief sensation of mild pressure during flap creation, but there is no sharp pain during or after the laser application."
      },
      {
        question: "How long after LASIK can I use my mobile phone or laptop?",
        answer: "We recommend resting your eyes for the first 12-24 hours. You can resume moderate screen usage and office work on day 2 while keeping eyes well-lubricated with prescribed preservative-free drops."
      },
      {
        question: "What happens if I blink or move my eye during the laser?",
        answer: "Modern refractive lasers are equipped with multi-dimensional infrared eye trackers operating at over 500-1000 frames per second. If your eye moves even a fraction of a millimeter, the laser automatically pauses and resumes only when aligned."
      }
    ],
    recoveryTimeline: [
      { time: "Hour 4", milestone: "Mild tearing and scratchiness subside; clear distance vision begins." },
      { time: "Day 1", milestone: "Next-day clinical review; legal driving vision usually attained." },
      { time: "Week 1", milestone: "Resumption of gym, light sports, and normal makeup (avoiding eyes)." }
    ],
    relatedSlugs: ["trans-prk", "cataract", "dry-eyes"],
    testimonials: [
      {
            author: "Rahul Menon",
            location: "Thrissur",
            role: "Software Professional",
            rating: 5,
            text: "Working 10+ hours on screens with high cylindrical power had become exhausting. The Blade-Free LASIK suite at Aarya Eye Care corrected my vision in less than 15 minutes. The very next morning I woke up with 20/20 vision without any dry eye issues. Truly liberating experience."
      },
      {
            author: "Dr. Neha Varghese",
            location: "Kochi",
            role: "Medical Practitioner",
            rating: 5,
            text: "Being in the healthcare field, clear uncompromised vision is critical. The corneal topography profiling and precision femtosecond flap creation were handled with immense clinical finesse. Highly recommend Aarya Eye Care for anyone considering LASIK."
      },
      {
            author: "Sudhakar Dev",
            location: "Thrissur",
            role: "Laser Vision Patient",
            rating: 5,
            text: "Aarya eye care hospital has changed my life from blurry vision. The medical team and their support were amazing. They were very friendly and cooperative throughout my treatment procedure. Thank you Aarya Eye Care."
      },
      {
            author: "Ananya S",
            location: "Kodungallur",
            role: "Glasses-Free Vision",
            rating: 5,
            text: "I was hesitant about laser surgery, but the detailed pre-LASIK corneal diagnostics and thorough doctor counseling gave me complete peace of mind. Completely painless procedure and now I enjoy life glasses-free!"
      }
]
  },
  {
    slug: "trans-prk",
    name: "Trans-PRK (SmartSurface)",
    badge: "100% No-Touch Laser",
    tagline: "No Flap, No Blade, No Touch – Ultimate Cornea Stability",
    heroImage: "/hero/hero1.webp",
    shortDesc: "Schwind Amaris SmartSurface Trans-PRK: all-laser, no-touch surface ablation delivering pristine biomechanical strength for athletes and thinner corneas.",
    overview: [
      "Trans-PRK (Trans-epithelial Photorefractive Keratectomy) is the most advanced all-laser surface ablation treatment available in modern ophthalmology. Unlike LASIK or SMILE, it requires no surgical cut, no mechanical spatula, and no suction ring.",
      "Using the revolutionary Schwind Amaris laser system, both the epithelial surface and the underlying refractive curvature are treated in a single seamless laser step lasting less than 40 seconds.",
      "Because no corneal flap is ever created, the structural integrity and tensile strength of your eye remain 100% intact. This makes Trans-PRK the ideal treatment for defense personnel, police officers, contact sports athletes, and individuals with thin or borderline corneas."
    ],
    keyHighlights: [
      {
        title: "100% No-Touch",
        description: "Zero surgical instruments touch your eye. Only gentle laser light shapes the corneal surface.",
        icon: "shield"
      },
      {
        title: "Zero Flap Complications",
        description: "No risk of flap dislodgement, flap striae, or interface debris – perfect for athletes and active lifestyles.",
        icon: "sparkles"
      },
      {
        title: "Maximum Cornea Preservation",
        description: "Preserves the thickest residual stromal bed, making it suitable for thinner corneas unsuitable for LASIK.",
        icon: "lens"
      },
      {
        title: "Reduced Dry Eyes",
        description: "Deep corneal nerve plexuses are preserved, significantly lowering post-operative dry eye incidence.",
        icon: "sparkles"
      }
    ],
    candidates: [
      "Candidates with thin, steep, or flat corneas not suitable for flap-based LASIK",
      "Police personnel, military recruits, martial artists, and outdoor sports enthusiasts",
      "Individuals seeking the least invasive, zero-blade, zero-cut vision correction",
      "Patients with mild to moderate dry eye tendencies",
      "Stable spectacle prescription for 12+ months"
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Painless Anesthetic Drops",
        description: "Topical eye drops numb the corneal surface thoroughly within 30 seconds."
      },
      {
        step: "02",
        title: "Single-Step SmartSurface Laser",
        description: "The Schwind laser evaporates the epithelium and sculpts the refractive curvature in one uninterrupted, continuous laser pulse."
      },
      {
        step: "03",
        title: "Chilled Saline Rinse",
        description: "A cool balanced salt solution soothes the treated surface, followed by a momentary application of protective drops."
      },
      {
        step: "04",
        title: "Soft Bandage Contact Lens Placement",
        description: "A transparent bandage contact lens is placed to protect the surface while the epithelium regenerates naturally in 3-4 days."
      }
    ],
    technologies: [
      { name: "Schwind Amaris SmartSurface", role: "1050Hz 7D multi-axial laser ablation system" },
      { name: "Sirius Corneal Tomography", role: "Sub-micron epithelial thickness mapping" },
      { name: "High-O2 Bandage Lens", role: "Therapeutic healing shield for epithelial restoration" }
    ],
    faqs: [
      {
        question: "Is Trans-PRK painful during or after the procedure?",
        answer: "The procedure itself is 100% painless thanks to numbing drops. As the outer epithelial surface heals over the subsequent 48 to 72 hours, patients may experience mild aching, tearing, and light sensitivity, which are effectively managed with prescribed oral pain relievers and soothing drops."
      },
      {
        question: "How long does recovery take compared to LASIK?",
        answer: "While LASIK visual recovery is within 24 hours, Trans-PRK vision improves steadily over 4 to 7 days as the epithelial cell layer closes. By day 4 or 5, the bandage lens is removed, and functional vision stabilizes rapidly thereafter."
      },
      {
        question: "Why choose Trans-PRK over LASIK or SMILE?",
        answer: "Trans-PRK creates no incision or flap whatsoever. In active sports, combat training, or accidental trauma, there is zero risk of flap displacement. Furthermore, it preserves more natural corneal tissue than any other refractive method."
      },
      {
        question: "Are the long-term visual results of Trans-PRK equal to LASIK?",
        answer: "Yes. Clinical studies worldwide demonstrate that after 1 to 3 months, visual acuity and optical quality for Trans-PRK and LASIK are virtually identical, with Trans-PRK showing superior corneal biomechanical retention."
      }
    ],
    recoveryTimeline: [
      { time: "Days 1-3", milestone: "Epithelial layer regenerates under protective bandage contact lens." },
      { time: "Day 4-5", milestone: "Bandage lens safely removed by ophthalmologist; crisp vision accelerates." },
      { time: "Week 2", milestone: "Excellent functional eyesight; safe for strenuous workouts and travel." }
    ],
    relatedSlugs: ["lasik", "cornea", "dry-eyes"],
    testimonials: [
      {
            author: "Arjun",
            location: "Thrissur",
            role: "Sports Enthusiast & Driver",
            rating: 5,
            text: "I used to wear glasses since my school days and always struggled with extra curricular activities. After researching vision correction options, I chose Trans-PRK as a simple procedure. The procedure was quick and within a few days, I noticed a significant improvement. Today, I enjoy sports and driving without worrying about glasses or lenses. It truly gave me a new perspective literally and emotionally."
      },
      {
            author: "Krishnan V",
            location: "Palakkad",
            role: "Professional Athlete",
            rating: 5,
            text: "I am a professional athlete and I used to wear glasses for 10 years. It was always inconvenient to wear glasses during practice and games. Running long distances with glasses was uncomfortable, especially in rain or humidity. Trans-PRK gave me a new life. The procedure was quick, and within days, my vision was clear. Now, every run feels lighter not just physically, but mentally too."
      },
      {
            author: "Santhosh",
            location: "Kunnamkulam",
            role: "Trans-PRK SmartSurface Patient",
            rating: 5,
            text: "I was always afraid of eye surgeries, but I knew it was time to make a change. They recommended Trans-PRK with advanced laser technology, and I felt reassured throughout the entire process. From the initial consultation to post-operative care, everything was handled with professionalism and care. The recovery was smooth with minimal discomfort. Choosing Aarya Eye Care was one of the best decisions I have made."
      }
]
  },
  {
    slug: "retina-and-uveitis",
    name: "Retina & Vitreous Care",
    badge: "Advanced Vitreo-Retinal Care",
    tagline: "Preserving Sight from Diabetic Retinopathy, Detachment & Macular Disease",
    heroImage: "/hero/hero2.jpg",
    shortDesc: "Comprehensive vitreo-retinal diagnostic imaging, Green PRP laser photocoagulation, anti-VEGF injections, and micro-incision vitrectomy surgery (MIVS).",
    overview: [
      "The retina is the neurosensory photographic film of the eye, capturing visual images and transmitting them via the optic nerve to the brain. Retinal diseases can cause irreversible vision loss if not diagnosed and arrested promptly.",
      "Aarya Eye Care's Vitreo-Retinal department provides specialized tertiary medical and surgical retina care. Our clinic is equipped with the REVO FC combined fundus camera and Spectral Domain OCT, OCT Angiography (OCTA), and Appasamy Green Laser PRP.",
      "From diabetic retinopathy screenings and retinal vein occlusion treatments to complex retinal detachment surgeries and uveitis immune management, our senior retinal specialists deliver precision clinical care."
    ],
    keyHighlights: [
      {
        title: "Non-Invasive OCT Angiography",
        description: "Dye-free imaging maps retinal and choroidal microcirculation down to capillary resolution in seconds.",
        icon: "microscope"
      },
      {
        title: "Green Laser PRP",
        description: "Precision 532nm retinal photocoagulation halts abnormal neovascularization in proliferative diabetic retinopathy.",
        icon: "laser"
      },
      {
        title: "Targeted Anti-VEGF Therapy",
        description: "Intravitreal injections (Lucentis, Eylea, Accentrix, Ozurdex) to treat macular edema and wet AMD.",
        icon: "shield"
      },
      {
        title: "Micro-Incision Vitrectomy (MIVS)",
        description: "23G/25G sutureless vitrectomy for vitreous hemorrhage, macular holes, and retinal detachments.",
        icon: "eye"
      }
    ],
    candidates: [
      "Diabetic patients requiring mandatory annual or bi-annual retinal screening",
      "Sudden onset of dark floating spots (floaters), cobwebs, or bright flashing lights",
      "Curtain or shadow descending over part of your field of vision",
      "Distortion of straight lines (metamorphopsia) or central blind spots",
      "Patients diagnosed with hypertension, sickle cell, or retinal vein occlusions"
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Dilated Fundoscopy & Retinal OCT",
        description: "Pupils are dilated for indirect ophthalmoscopy and high-resolution REVO Spectral Domain OCT scans of the macula."
      },
      {
        step: "02",
        title: "OCT Angiography / Fundus Fluorescein Angiography",
        description: "Visualizes capillary dropouts, microaneurysms, and ischemic zones without invasive intravenous dyes whenever possible."
      },
      {
        step: "03",
        title: "In-Clinic Laser or Intravitreal Injection",
        description: "Targeted Green Laser PRP or anti-VEGF injection under complete sterile topical anesthesia."
      },
      {
        step: "04",
        title: "Long-Term Monitoring & Vision Preservation",
        description: "Structured follow-up protocols tracking central macular thickness and systemic glycemic control."
      }
    ],
    technologies: [
      { name: "REVO FC Spectral Domain OCT", role: "High-resolution cross-sectional retinal layer imaging" },
      { name: "OCT Angiography (OCTA)", role: "Capillary-level microvascular blood flow mapping" },
      { name: "Appasamy Green Laser 532nm", role: "Precision pan-retinal and focal laser photocoagulation" }
    ],
    faqs: [
      {
        question: "Why do diabetic patients need regular eye checkups even if vision feels normal?",
        answer: "Diabetic retinopathy progresses silently in its early stages without causing blurriness or pain. By the time noticeable vision loss occurs, irreversible damage to retinal blood vessels may have developed. Annual dilated OCT screenings detect micro-leaks before vision is permanently compromised."
      },
      {
        question: "What are floaters and flashes of light?",
        answer: "Floaters are shadows cast by tiny protein clumps within the vitreous gel. Sudden onset of new floaters, especially accompanied by lightning-like flashes of light, can indicate that the vitreous is pulling away from the retina or causing a retinal tear, which requires emergency assessment."
      },
      {
        question: "Is an intravitreal anti-VEGF injection painful?",
        answer: "No. The procedure is performed under sterile operating conditions after applying potent numbing drops and antiseptic povidone-iodine. The injection takes less than 2 seconds, and patients typically feel only a brief dull pressure sensation."
      },
      {
        question: "Can a detached retina be cured?",
        answer: "Yes, provided it is treated promptly. Retinal tears can be sealed with green laser before detachment occurs. If full detachment has taken place, surgical reattachment via vitrectomy and gas/silicone oil tamponade restores anatomical attachment and preserves visual potential."
      }
    ],
    recoveryTimeline: [
      { time: "Day 1", milestone: "Post-laser or injection check; resume normal non-strenuous daily routines." },
      { time: "Week 4", milestone: "Repeat OCT scan to quantify reduction in central macular thickness and fluid." },
      { time: "Month 3", milestone: "Structured surveillance interval to maintain disease remission." }
    ],
    relatedSlugs: ["cataract", "glaucoma", "dry-eyes"],
    testimonials: [
      {
            author: "Krishnan V",
            location: "Thrissur",
            role: "Diabetic Retinopathy Patient",
            rating: 5,
            text: "Diagnosed with early diabetic macular changes, I was terrified of irreversible vision loss. The retinal specialists at Aarya initiated targeted therapies and routine scans. My visual acuity is fully stabilized and I am back to my daily work with complete confidence."
      },
      {
            author: "Remya Santhosh",
            location: "Cherpu",
            role: "Patient Family Member",
            rating: 5,
            text: "My father had a retinal tear that was detected immediately during a routine fundus exam. The prompt laser photocoagulation performed by the vitreoretinal team prevented retinal detachment. We are deeply indebted to Aarya Eye Care."
      },
      {
            author: "Sudhakar Dev",
            location: "Thrissur",
            role: "Vitreoretinal Clinic Patient",
            rating: 5,
            text: "Aarya eye care hospital has changed my life from blurry vision. The specialized medical team and their vitreous support were amazing. They were very friendly and cooperative throughout my treatment procedure."
      },
      {
            author: "Lakshmi Priya",
            location: "Kodungallur",
            role: "Retinal Care Patient",
            rating: 5,
            text: "Arya Eye Care provides exceptional medical care for complex retinal conditions. The doctors explained the treatment method and each procedure thoroughly. Outstanding technology and caring medical staff."
      }
]
  },
  {
    slug: "glaucoma",
    name: "Glaucoma Management",
    badge: "Early Pressure & OCT Shield",
    tagline: "The Silent Thief of Sight – Early Detection & Vision Safeguarding",
    heroImage: "/images/doctor-exam.jpg",
    shortDesc: "Gold standard non-contact & applanation tonometry, Humphrey visual field perimetry, RNFL optical coherence tomography, and selective laser trabeculoplasty.",
    overview: [
      "Glaucoma is a group of eye diseases that cause progressive, irreversible damage to the optic nerve, often driven by elevated intraocular pressure (IOP). Known as the 'silent thief of sight,' it typically causes no pain or symptoms until peripheral vision has been substantially lost.",
      "At Aarya Eye Care, our glaucoma clinic focuses on early algorithmic detection. Using Goldmann applanation tonometry, central corneal pachymetry, automated Humphrey visual field perimetry, and REVO OCT Retinal Nerve Fiber Layer (RNFL) thickness analysis, we identify optic nerve stress years before noticeable visual field deficits.",
      "Treatment strategies range from customized pressure-lowering drops and Selective Laser Trabeculoplasty (SLT) to YAG peripheral iridotomy and surgical filtration procedures (trabeculectomy)."
    ],
    keyHighlights: [
      {
        title: "OCT RNFL Analysis",
        description: "Detects microscopic nerve fiber thinning years before visual field loss becomes apparent on functional tests.",
        icon: "microscope"
      },
      {
        title: "Automated Visual Field Perimetry",
        description: "Standard automated Humphrey perimetry precisely maps your 24-2 and 30-2 peripheral visual sensitivity.",
        icon: "eye"
      },
      {
        title: "Appasamy YAG Laser Iridotomy",
        description: "In-office preventive laser treatment for narrow-angle and angle-closure glaucoma risk in minutes.",
        icon: "laser"
      },
      {
        title: "Target Pressure Customization",
        description: "Tailored pharmacological and surgical therapy based on individual diurnal IOP fluctuations.",
        icon: "shield"
      }
    ],
    candidates: [
      "Individuals aged 40 or above with or without symptoms",
      "People with a direct family history of glaucoma",
      "High myopes (nearsighted) or high hyperopes (short eyes prone to angle closure)",
      "Long-term users of steroid eye drops, inhalers, or oral medications",
      "Individuals with chronic migraines, Raynaud's syndrome, or systemic hypertension"
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Applanation Tonometry & Pachymetry",
        description: "Goldmann tonometry measures IOP, corrected accurately against central corneal thickness (CCT)."
      },
      {
        step: "02",
        title: "Gonioscopy Angle Examination",
        description: "Direct mirrored lens evaluation of the trabecular meshwork to classify open-angle vs. angle-closure glaucoma."
      },
      {
        step: "03",
        title: "Humphrey Perimetry & RNFL OCT",
        description: "Quantifies optic nerve cup-to-disc ratio, neuroretinal rim volume, and peripheral visual field sensitivity."
      },
      {
        step: "04",
        title: "Therapeutic Intervention & Target IOP Control",
        description: "Initiation of prostaglandin analogues/beta-blockers, SLT/YAG laser, or surgical filtration as needed."
      }
    ],
    technologies: [
      { name: "Goldmann Applanation Tonometer", role: "Global standard IOP measurement tool" },
      { name: "REVO FC OCT Optic Nerve Analyzer", role: "Ganglion cell complex and RNFL quadrant thickness profiling" },
      { name: "Appasamy Nd:YAG Laser", role: "Painless laser peripheral iridotomy for narrow angles" }
    ],
    faqs: [
      {
        question: "Can lost vision from glaucoma be restored?",
        answer: "Vision lost to glaucoma cannot be restored because severed optic nerve fibers cannot regenerate. However, with early diagnosis and strict IOP management, further damage can be completely halted, safeguarding your remaining vision for life."
      },
      {
        question: "What are the common symptoms of glaucoma?",
        answer: "Open-angle glaucoma is completely asymptomatic in 90% of cases until advanced stages. Acute angle-closure glaucoma, by contrast, presents suddenly with severe eye pain, headache, nausea, colored halos around lights, and blurred vision, requiring immediate emergency treatment."
      },
      {
        question: "Will I need to use eye drops for the rest of my life?",
        answer: "Most glaucoma patients manage their condition successfully with daily pressure-lowering drops. Laser procedures like SLT or iridotomy can sometimes reduce or eliminate the need for medications depending on individual response."
      },
      {
        question: "How frequently should glaucoma patients be reviewed?",
        answer: "Once intraocular pressure is stable, we recommend comprehensive follow-up evaluations every 3 to 6 months, including tonometry checks, and repeated visual field and OCT tests every 6 to 12 months."
      }
    ],
    recoveryTimeline: [
      { time: "Day 1", milestone: "Establishment of baseline pressure and initiation of anti-glaucoma regimen." },
      { time: "Week 4", milestone: "First IOP review to evaluate therapeutic response and adjust target drops." },
      { time: "Month 6", milestone: "Repeat visual field perimetry to confirm absolute optic nerve stability." }
    ],
    relatedSlugs: ["cataract", "retina-and-uveitis", "cornea"],
    testimonials: [
      {
            author: "K. Ramachandran",
            location: "Thrissur",
            role: "Glaucoma Care Patient",
            rating: 5,
            text: "Glaucoma had caused silent visual field loss before I noticed symptoms. The computerized visual field analysis and non-contact tonometry caught it in time. My intraocular pressure is now perfectly managed with daily drops and routine quarterly monitoring."
      },
      {
            author: "Lakshmi Priya",
            location: "Kunnamkulam",
            role: "Optic Nerve Protection Patient",
            rating: 5,
            text: "Arya Eye Care provides top-tier medical care. From my experience, I can assure you that they are the best in Kerala for glaucoma screening. The pressure evaluation and preventive care were quick, painless, and supportive throughout."
      },
      {
            author: "Krishnan V",
            location: "Cherpu",
            role: "Regular OPD Follow-up",
            rating: 5,
            text: "The medical team's dedication to preserving my optic nerve health over the past 3 years has been remarkable. State-of-the-art perimetry machines, zero waiting time, and personalized doctor attention every visit."
      },
      {
            author: "Sudhakar Dev",
            location: "Thrissur",
            role: "Glaucoma Management Patient",
            rating: 5,
            text: "Aarya eye care hospital has changed my life. From visiting this hospital, I got hope. The medical team explained every detail thoroughly, making the management completely stress-free."
      }
]
  },
  {
    slug: "cornea",
    name: "Cornea Care Specialists",
    badge: "Anterior Segment & Ocular Surface",
    tagline: "Restoring the Window of the Eye with Precision Science",
    heroImage: "/diagnostics/astigmatism-lens.png",
    shortDesc: "Specialized management of corneal dystrophies, keratoconus cross-linking (C3R), infectious keratitis, and sutureless pterygium excision with autograft.",
    overview: [
      "The cornea is the clear dome-shaped front surface of the eye responsible for two-thirds of the eye's total focusing power. Any clouding, irregular curvature, or infection directly degrades visual sharpness.",
      "Aarya Eye Care's cornea subspeciality clinic treats a comprehensive spectrum of anterior segment disorders. Using Sirius 3D Scheimpflug corneal topography, we diagnose subclinical keratoconus in early stages and arrest its progression through Corneal Collagen Cross-Linking (C3R).",
      "We also perform advanced sutureless pterygium excision utilizing fibrin glue tissue adhesives, therapeutic contact lens fittings, and targeted treatment for recurrent corneal erosions."
    ],
    keyHighlights: [
      {
        title: "Keratoconus C3R Cross-Linking",
        description: "Ultraviolet-A and Riboflavin photo-polymerization stiffens the biomechanically weakened cornea to halt cone bulging.",
        icon: "shield"
      },
      {
        title: "Sirius 3D Corneal Topography",
        description: "Scheimpflug tomography maps anterior and posterior elevation, pachymetry, and optical aberrations.",
        icon: "microscope"
      },
      {
        title: "Sutureless Pterygium Surgery",
        description: "Excision with conjunctival autograft secured using bio-compatible fibrin glue for zero suture irritation and low recurrence.",
        icon: "lens"
      },
      {
        title: "Specialty Scleral & RGP Lenses",
        description: "Custom vaulting lenses for irregular corneas, post-graft astigmatism, and severe keratoconus.",
        icon: "sparkles"
      }
    ],
    candidates: [
      "Patients with progressive astigmatism or frequent changes in cylinder power",
      "Diagnosed or suspected keratoconus with corneal thinning",
      "Pterygium (fleshy growth over the cornea) causing redness, irritation, or vision blocking",
      "Persistent corneal ulcers, bacterial, fungal, or viral keratitis",
      "Recurrent morning eye pain, watering, and foreign body sensation"
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Sirius Scheimpflug Topography & Pachymetry",
        description: "Captures 25 radial Scheimpflug images and Placido rings to map corneal thickness and elevation maps."
      },
      {
        step: "02",
        title: "Microbiological Slit-Lamp Evaluation",
        description: "High-magnification evaluation of epithelial integrity, corneal stroma, and endothelial cell health."
      },
      {
        step: "03",
        title: "Targeted Corneal Intervention (C3R / Pterygium / Medical)",
        description: "Minimally invasive surgical treatment under sterile operating theatre standards."
      },
      {
        step: "04",
        title: "Surface Rehabilitation & Protective Shield",
        description: "Application of therapeutic bandage contact lenses and anti-inflammatory restorative regimens."
      }
    ],
    technologies: [
      { name: "Sirius Corneal Tomographer", role: "Placido disk & 3D Scheimpflug anterior segment analyzer" },
      { name: "C3R UVA Cross-Linking Suite", role: "Riboflavin photochemical corneal collagen stabilization" },
      { name: "Bio-Tissue Fibrin Adhesive", role: "Sutureless conjunctival grafting for pterygium" }
    ],
    faqs: [
      {
        question: "What is Keratoconus, and what are its early warning signs?",
        answer: "Keratoconus is a progressive condition where the normally round cornea thins and bulges into an irregular cone shape. Early signs include frequent cylinder power changes in your glasses, sensitivity to light, glare at night, and ghosting of images."
      },
      {
        question: "How does Corneal Collagen Cross-Linking (C3R) work?",
        answer: "C3R uses Vitamin B2 (Riboflavin) eye drops activated by gentle UVA light to create new chemical bonds between collagen fibers in your cornea. This strengthens the cornea by up to 300%, preventing further bulging and vision loss."
      },
      {
        question: "Does pterygium surgery leave scars or hurt?",
        answer: "Our modern sutureless technique uses biological tissue glue instead of stitches. This virtually eliminates post-op pain, foreign-body sensation, and reduces recurrence rates to under 2-3%, leaving a clear, natural-looking eye."
      },
      {
        question: "Can corneal infections cause permanent blindness?",
        answer: "Yes, untreated infectious corneal ulcers can perforate or form dense white scars that block vision. Any acute red eye with white spots, severe pain, and light sensitivity must be examined immediately by a cornea specialist."
      }
    ],
    recoveryTimeline: [
      { time: "Day 1", milestone: "Initial post-treatment check; protective eye shield worn during sleep." },
      { time: "Day 5", milestone: "Epithelial re-growth completed; therapeutic bandage lens removed." },
      { time: "Month 1", milestone: "Full corneal surface stabilization and evaluation for specialty optical correction." }
    ],
    relatedSlugs: ["lasik", "trans-prk", "dry-eyes"],
    testimonials: [
      {
            author: "Gokul Krishna",
            location: "Thrissur",
            role: "Keratoconus C3R Patient",
            rating: 5,
            text: "I was diagnosed with progressive keratoconus in my early twenties. Dr. Nadhna Basheer performed Corneal Collagen Cross-Linking (C3R). It successfully halted the thinning of my cornea and preserved my functional vision. Exceptional clinical expertise."
      },
      {
            author: "Santhosh",
            location: "Kunnamkulam",
            role: "Corneal Ulcer Recovery",
            rating: 5,
            text: "After a severe corneal scratch from foreign debris, the emergency corneal smear diagnostic and targeted antimicrobial drops resolved the infection within 48 hours without any scarring. Incredible emergency response."
      },
      {
            author: "Sudhakar Dev",
            location: "Thrissur",
            role: "Cornea Care Patient",
            rating: 5,
            text: "Aarya eye care hospital has changed my life from blurry vision. The medical team and their cornea support were amazing. They were very friendly and cooperative throughout my treatment procedure."
      },
      {
            author: "Remya Santhosh",
            location: "Cherpu",
            role: "Dry Eye & Corneal Therapy",
            rating: 5,
            text: "From diagnosis to follow-up, their medical support was excellent. They explained the treatment method and each procedure thoroughly. So, the entire procedure was stress-free for us."
      }
]
  },
  {
    slug: "dry-eyes",
    name: "Dry Eyes & Ocular Surface Clinic",
    badge: "Digital Eye Strain & Tear Film",
    tagline: "Comprehensive Relief for Irritated, Strained, and Fatigued Eyes",
    heroImage: "/hero/hero3.webp",
    shortDesc: "Targeted therapy for computer vision syndrome, Meibomian Gland Dysfunction (MGD), tear film evaporation, and chronic ocular surface inflammation.",
    overview: [
      "Dry Eye Disease (DED) is a multifaceted ocular surface condition driven by insufficient tear production, excessive tear evaporation, or abnormal tear film quality. Prolonged screen use, air-conditioned workspaces, contact lens wear, and hormonal changes exacerbate this condition.",
      "At Aarya Eye Care, we evaluate dry eyes beyond superficial lubrication. Our clinic analyzes tear break-up time (TBUT), meibomian gland oil expression, corneal staining, and working environment ergonomics.",
      "Treatment plans combine preservative-free artificial tear formulations, anti-inflammatory immunomodulators, thermal meibomian gland expression, and silicone punctal occlusion for sustained, long-term comfort."
    ],
    keyHighlights: [
      {
        title: "Tear Film Break-Up Analysis",
        description: "Measures the precise second-by-second stability of your lipid and aqueous tear layers under cobalt blue illumination.",
        icon: "microscope"
      },
      {
        title: "MGD Thermal Expression",
        description: "Gentle warming and mechanical expression clears blocked oil glands to restore natural tear film barrier.",
        icon: "sparkles"
      },
      {
        title: "Collagen & Silicone Punctal Plugs",
        description: "Microscopic biocompatible plugs placed in tear ducts retain your natural tears on the eye surface.",
        icon: "shield"
      },
      {
        title: "Computer Vision Syndrome Care",
        description: "Ergonomic workspace recommendations, 20-20-20 visual rest coaching, and anti-glare optical filters.",
        icon: "eye"
      }
    ],
    candidates: [
      "Software engineers, students, and professionals spending 4+ hours daily on screens",
      "Persistent gritty, burning, sandy sensation or foreign-body discomfort",
      "Paradoxical excessive reflex eye watering triggered by wind, AC, or screen glare",
      "Fluctuating vision that clears momentarily upon forceful blinking",
      "Contact lens wearers experiencing end-of-day dryness and redness"
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Ocular Surface Disease Index (OSDI) & Slit-Lamp Exam",
        description: "Structured symptomatic survey paired with high-magnification tear film evaluation and fluorescein vital dye staining."
      },
      {
        step: "02",
        title: "TBUT & Meibography Evaluation",
        description: "Determines whether your dry eye is aqueous deficient (low tear volume) or evaporative (poor oil seal)."
      },
      {
        step: "03",
        title: "In-Clinic Gland Clearance & Punctal Occlusion",
        description: "Clearing inspissated meibomian secretions and placing comfortable punctal plugs if indicated."
      },
      {
        step: "04",
        title: "Customized At-Home Maintenance Protocol",
        description: "Tailored preservative-free lubricant drops, eyelid hygiene foam, warm compresses, and omega-3 recommendations."
      }
    ],
    technologies: [
      { name: "Slit-Lamp Digital Cobalt Filter", role: "Tear film break-up and epithelial micro-erosion mapping" },
      { name: "Thermal Meibomian Expression", role: "Therapeutic clearance of hardened meibomian lipid obstructions" },
      { name: "FCI Biocompatible Punctal Plugs", role: "Micro-occlusion retaining natural ocular surface lubrication" }
    ],
    faqs: [
      {
        question: "Why do my eyes water constantly if they are supposed to be dry?",
        answer: "This is a classic paradox known as reflex tearing. When your baseline tear film is dry and unstable, nerve endings on the cornea send an emergency distress signal to the lacrimal gland, flooding the eye with watery tears lacking the essential oil layer. These flood tears quickly roll down your cheeks without lubricating the eye."
      },
      {
        question: "Can over-the-counter eye drops cure dry eye?",
        answer: "Generic drops often contain harsh preservatives like benzalkonium chloride (BAK), which can worsen ocular surface toxicity with frequent use. Our clinic prescribes targeted preservative-free lubricants, anti-inflammatory drops, or oil-layer restorers matched to your specific dry eye type."
      },
      {
        question: "What is the 20-20-20 rule for digital screens?",
        answer: "Every 20 minutes of screen work, look at an object at least 20 feet away for at least 20 seconds, and make 3 to 4 complete, intentional blinks. This restores tear film distribution across the cornea and relaxes the ciliary focusing muscle."
      },
      {
        question: "Are punctal plugs permanent and noticeable?",
        answer: "Punctal plugs are microscopic (less than 1mm) and completely invisible and unnoticeable once seated inside the tear drainage duct. They can be temporary (dissolvable in 3 months) or semi-permanent silicone plugs, easily removed in seconds if desired."
      }
    ],
    recoveryTimeline: [
      { time: "Day 3", milestone: "Immediate reduction in stinging, burning, and screen fatigue." },
      { time: "Week 2", milestone: "Meibomian gland oil secretion normalizes; sustained clear vision." },
      { time: "Month 1", milestone: "Substantial improvement in ocular comfort scores and contact lens tolerance." }
    ],
    relatedSlugs: ["lasik", "trans-prk", "cornea"],
    testimonials: [
      {
            author: "Deepa Balakrishnan",
            location: "Thrissur",
            role: "IT Professional",
            rating: 5,
            text: "Chronic dry eye and burning sensation from computer work made it painful to work past 3 PM. The tear film osmolarity testing and customized thermal gland therapy at Aarya Eye Care brought long-lasting soothing relief."
      },
      {
            author: "Arjun",
            location: "Kochi",
            role: "Meibomian Gland Therapy Patient",
            rating: 5,
            text: "Suffered from gritty eye irritation for years. The non-invasive meibomian gland imaging and preservative-free ocular lubricant regimen prescribed here made an immediate difference to my daily comfort."
      },
      {
            author: "Lakshmi Priya",
            location: "Kunnamkulam",
            role: "Ocular Surface Clinic Patient",
            rating: 5,
            text: "Professional, caring, and modern approach to dry eye syndrome. The optometrists and doctors take genuine time to understand daily lifestyle triggers and give practical, lasting remedies."
      },
      {
            author: "Sudhakar Dev",
            location: "Thrissur",
            role: "Digital Eye Strain Patient",
            rating: 5,
            text: "Aarya eye care hospital has changed my life. The medical team and their support were amazing. Very cooperative throughout my treatment procedure."
      }
]
  },
  {
    slug: "pediatric-ophthalmology",
    name: "Pediatric Ophthalmology",
    badge: "Child Eye Care & Amblyopia",
    tagline: "Nurturing Clear Childhood Vision from Early Infancy through Adolescence",
    heroImage: "/hero/hero1.webp",
    shortDesc: "Compassionate child-friendly eye examinations, amblyopia (lazy eye) patching therapy, pediatric refraction, congenital cataract screening, and squint correction.",
    overview: [
      "A child's visual system develops rapidly during the first 7 to 8 years of life. Undiagnosed refractive errors, squint (misaligned eyes), or media opacities can cause amblyopia (lazy eye), where the brain permanently ignores input from one eye.",
      "At Aarya Eye Care, our pediatric ophthalmology department is designed to make young children feel safe, happy, and unhurried. Our specialized team uses objective streak retinoscopy, child-friendly picture charts, and non-invasive cycloplegic refraction.",
      "We provide early intervention for strabismus, refractive errors, congenital nasolacrimal duct obstruction (watering eyes in infants), and digital myopia control."
    ],
    keyHighlights: [
      {
        title: "Amblyopia (Lazy Eye) Therapy",
        description: "Structured occlusion patching and vision therapy programs to rewire cortical visual pathways before age 9.",
        icon: "eye"
      },
      {
        title: "Child-Friendly Objective Refraction",
        description: "Cycloplegic streak retinoscopy accurately detects hidden refractive errors without relying on young children's verbal answers.",
        icon: "microscope"
      },
      {
        title: "Pediatric Squint Alignment",
        description: "Non-surgical optical prism correction and delicate micro-surgical eye muscle alignment.",
        icon: "lens"
      },
      {
        title: "Nasolacrimal Duct Syringing & Probing",
        description: "Gentle resolution of congenital blocked tear ducts in infants suffering from constant eye watering.",
        icon: "shield"
      }
    ],
    candidates: [
      "Children who sit unusually close to the TV or hold books close to their face",
      "Frequent eye rubbing, blinking, squinting, or head-tilting when looking at distant objects",
      "One eye drifting inward, outward, upward, or downward (squint)",
      "White reflex (leukocoria) visible in the pupil in flash photographs",
      "Family history of childhood spectacles, lazy eye, or congenital eye conditions"
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Play-Based Visual Acuity Assessment",
        description: "LEA symbols, Cardiff acuity cards, or tumbling-E charts tailored to your child's age and developmental stage."
      },
      {
        step: "02",
        title: "Gentle Cycloplegic Dilatation",
        description: "Safe, child-specific relaxing eye drops relax the active focusing muscle to measure true optical refractive power."
      },
      {
        step: "03",
        title: "Fundus & Binocular Vision Workup",
        description: "Indirect ophthalmoscopy checks optic nerve and retina health; stereopsis tests evaluate depth perception."
      },
      {
        step: "04",
        title: "Treatment Plan & Parental Guidance",
        description: "Prescription of impact-resistant pediatric spectacles, occlusion patching, or surgical scheduling if needed."
      }
    ],
    technologies: [
      { name: "Streak Retinoscope", role: "Gold standard objective child refraction" },
      { name: "Titmus / Randot Stereo Test", role: "3D stereoscopic depth perception evaluation" },
      { name: "Pediatric Indirect Ophthalmoscope", role: "Wide-field fundus visualization in infants" }
    ],
    faqs: [
      {
        question: "At what age should my child have their first eye exam?",
        answer: "A child should have an initial vision check between 6 to 12 months, another at age 3, and a comprehensive pre-school exam before entering kindergarten (age 4 to 5). Immediate checks are warranted if you notice any eye turn, white reflex, or persistent watering."
      },
      {
        question: "Can lazy eye (amblyopia) be cured if detected late?",
        answer: "Amblyopia responds best when treatment begins before the critical period of neuroplasticity ends (around age 8 to 9). While older children and teens can still show improvement with modern vision therapy, early detection guarantees the highest chance of restoring normal 20/20 vision."
      },
      {
        question: "Will wearing glasses weaken my child's natural eyes?",
        answer: "No. Wearing the correct optical prescription ensures that clear visual signals reach the brain, stimulating healthy development of the visual cortex. Forcing a child to go without needed glasses causes chronic eyestrain and permanent amblyopia."
      },
      {
        question: "My baby has had watering and discharge in one eye since birth. What should I do?",
        answer: "This is most commonly caused by a congenital nasolacrimal duct obstruction (a thin membrane blocking tear drainage). In over 90% of cases, gentle lacrimal sac massage guided by our pediatric ophthalmologist clears the blockage by age 1."
      }
    ],
    recoveryTimeline: [
      { time: "Week 2", milestone: "Child adapts comfortably to lightweight flexible pediatric frames." },
      { time: "Month 2", milestone: "First amblyopia follow-up to measure visual gain in the patching eye." },
      { time: "Month 6", milestone: "Stereopsis depth perception review and alignment verification." }
    ],
    relatedSlugs: ["squint", "cornea", "dry-eyes"],
    testimonials: [
      {
            author: "Remya Santhosh",
            location: "Cherpu",
            role: "Parent of 5-Year-Old Patient",
            rating: 5,
            text: "Brought my 5-year-old daughter for routine preschool refraction. The pediatric ophthalmologists were remarkably patient, gentle, and made the examination fun for her. Her refractive amblyopia was identified early."
      },
      {
            author: "Anoop & Smitha",
            location: "Thrissur",
            role: "Parents of Pediatric Patient",
            rating: 5,
            text: "Finding child-friendly eye care in Thrissur was difficult until we visited Aarya Eye Care. The doctor explained my son's high astigmatism clearly and the pediatric optical unit helped pick lightweight, durable frames."
      },
      {
            author: "Krishnan V",
            location: "Kunnamkulam",
            role: "Grandparent",
            rating: 5,
            text: "Outstanding pediatric care. Child-friendly diagnostic rooms and extremely compassionate doctors who understand pediatric patient comfort and anxiety."
      },
      {
            author: "Lakshmi Priya",
            location: "Kodungallur",
            role: "Parent",
            rating: 5,
            text: "Arya Eye Care provides exceptional medical care for children. The entire medical team was very supportive and incredibly caring throughout the process."
      }
]
  },
  {
    slug: "squint",
    name: "Squint (Strabismus) Surgery",
    badge: "Ocular Motility & Alignment",
    tagline: "Restoring Binocular Eye Alignment, Depth Perception & Self-Confidence",
    heroImage: "/images/doctor-exam.jpg",
    shortDesc: "Precision extraocular muscle surgery and optical rehabilitation for esotropia (crossed eyes), exotropia (outward drift), and paralytic strabismus in both children and adults.",
    overview: [
      "Squint, clinically known as strabismus, is a condition where the two eyes do not point in the same direction at the same time. One eye may look straight ahead while the other turns inward, outward, upward, or downward.",
      "At Aarya Eye Care, squint treatment is addressed as both a functional restoration and an aesthetic enhancement. In children, prompt alignment prevents amblyopia and restores stereoscopic 3D depth perception. In adults, squint surgery eliminates double vision (diplopia) and restores social confidence.",
      "Our strabismus surgeons utilize micro-surgical techniques on the extraocular muscles (recessions, resections, and adjustable sutures) to achieve symmetrical, natural alignment."
    ],
    keyHighlights: [
      {
        title: "Children & Adult Surgery",
        description: "Squint can be corrected at any age. Adults achieve excellent cosmetic and functional alignment without age restrictions.",
        icon: "shield"
      },
      {
        title: "Adjustable Suture Techniques",
        description: "Enables sub-millimeter fine-tuning of ocular muscle tension for pinpoint alignment accuracy.",
        icon: "lens"
      },
      {
        title: "Prism & Optical Correction",
        description: "Non-surgical optical prism spectacles for small angle deviations and diplopia relief.",
        icon: "microscope"
      },
      {
        title: "Outpatient Day Surgery",
        description: "Micro-surgical muscle realignment performed cleanly under general or local anesthesia with same-day discharge.",
        icon: "clock"
      }
    ],
    candidates: [
      "Children or adults with noticeable inward, outward, or vertical eye deviation",
      "Adults experiencing bothersome double vision (diplopia) after nerve palsy or trauma",
      "Individuals who tilt their head or turn their chin to see clearly without double images",
      "Adults seeking aesthetic eye alignment to eliminate social self-consciousness",
      "Intermittent squint that worsens during fatigue or stress"
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Synoptophore & Prism Bar Cover Test",
        description: "Precisely measures the angle of squint in prism diopters across all 9 diagnostic gaze positions."
      },
      {
        step: "02",
        title: "Binocular Vision & Sensory Testing",
        description: "Assesses suppression, retinal correspondence, and potential for binocular fusion."
      },
      {
        step: "03",
        title: "Microsurgical Muscle Realignment",
        description: "The surgeon strengthens (resection) or weakens (recession) specific extraocular eye muscles through a tiny conjunctival opening."
      },
      {
        step: "04",
        title: "Post-Op Alignment Check & Recovery",
        description: "Rapid outpatient discharge with soothing topical drops. Straightened alignment is visible immediately upon bandage removal."
      }
    ],
    technologies: [
      { name: "Clement Clarke Synoptophore", role: "Binocular sensory fusion & angle of squint measurement" },
      { name: "Prism Bar Diagnostic Set", role: "Objective measurement of horizontal and vertical deviations" },
      { name: "Micro-Surgical Bipolar Cautery", role: "Delicate hematic control on extraocular muscles" }
    ],
    faqs: [
      {
        question: "Is it too late to correct squint in adulthood?",
        answer: "No, this is a common myth. Squint surgery can be successfully performed at any age, whether you are 18, 45, or 70. While adults may not always recover childhood 3D depth perception, the surgery straightens the eyes naturally, expands the visual field, and provides transformative self-confidence."
      },
      {
        question: "Does squint surgery involve taking the eye out of the socket?",
        answer: "Absolutely not. The surgery is performed entirely on the small muscles located on the outer surface of the eyeball, underneath the thin white conjunctival tissue. The eyeball is never removed, and the internal vision structures are untouched."
      },
      {
        question: "How long does squint surgery take, and is it painful?",
        answer: "The surgery typically takes 45 to 60 minutes. Under general anesthesia for children or monitored conscious sedation for adults, there is zero pain during surgery. Afterward, a mild scratchy sensation similar to an eyelash in the eye is felt for 1 to 2 days."
      },
      {
        question: "Can squint return after surgery?",
        answer: "In the vast majority of patients, a single surgery provides stable lifelong alignment. In a small percentage of complex cases (such as paralytic strabismus), a minor touch-up adjustment may be planned to maintain perfect symmetry."
      }
    ],
    recoveryTimeline: [
      { time: "Day 1", milestone: "Bandage removed; eyes are straight; resume light indoor activities." },
      { time: "Week 1", milestone: "Pinkness and mild redness fade; desk work and school resumed." },
      { time: "Month 1", milestone: "Complete healing of conjunctiva; full clearance for swimming and contact sports." }
    ],
    relatedSlugs: ["pediatric-ophthalmology", "cataract", "oculoplasty"],
    testimonials: [
      {
            author: "Preetha M",
            location: "Thrissur",
            role: "Strabismus Surgery Patient",
            rating: 5,
            text: "Had adult strabismus that caused double vision and social hesitation. The micro-muscle realignment surgery restored perfect binocular alignment. My confidence has improved manifold."
      },
      {
            author: "Sudhakar Dev",
            location: "Thrissur",
            role: "Eye Alignment Patient",
            rating: 5,
            text: "Aarya eye care hospital has changed my life. The medical team and their support were amazing. They were very friendly and cooperative throughout my squint treatment procedure."
      },
      {
            author: "Remya Santhosh",
            location: "Cherpu",
            role: "Binocular Vision Therapy",
            rating: 5,
            text: "Arya Eye Care Hospital provides the best surgical care in Thrissur. They explained the treatment method and each procedure thoroughly. The entire procedure was stress-free for us."
      },
      {
            author: "Lakshmi Priya",
            location: "Kunnamkulam",
            role: "Alignment Surgery Recovery",
            rating: 5,
            text: "The surgery was quick, painless, and performed with microscopic accuracy. Very supportive staff and world-class post-op follow-up care."
      }
]
  },
  {
    slug: "oculoplasty",
    name: "Oculoplasty & Aesthetic Eyelid Surgery",
    badge: "Eyelid & Orbital Reconstructive Care",
    tagline: "Restoring Eyelid Function, Symmetry, and Periocular Rejuvenation",
    heroImage: "/hero/hero3.jpg",
    shortDesc: "Comprehensive surgical care for ptosis (drooping eyelids), blepharoplasty, ectropion/entropion correction, tear duct dacryocystorhinostomy (DCR), and orbital lesion excision.",
    overview: [
      "Oculoplastic surgery is the specialized branch of ophthalmology dealing with the plastic, reconstructive, and cosmetic management of the eyelids, tear drainage pathways, orbit (eye socket), and surrounding facial structures.",
      "At Aarya Eye Care, our oculoplastic surgeons blend microscopic surgical precision with aesthetic sensitivity. We treat conditions that impair vision—such as severe ptosis blocking the pupil or inward-turning eyelashes scratching the cornea—while achieving cosmetically refined, symmetrical results.",
      "Our services include adult and pediatric ptosis correction, blepharoplasty for redundant eyelid skin, endoscopic/external DCR for chronic tearing, and benign periocular lesion excision."
    ],
    keyHighlights: [
      {
        title: "Ptosis (Drooping Eyelid) Surgery",
        description: "Levator muscle resection or frontal sling suspension restores normal eyelid aperture and clears the visual axis.",
        icon: "shield"
      },
      {
        title: "Functional & Cosmetic Blepharoplasty",
        description: "Removes hooded, baggy, or redundant eyelid skin and herniated orbital fat for a refreshed, open look.",
        icon: "sparkles"
      },
      {
        title: "DCR Tear Duct Surgery",
        description: "Creates a new bypass channel for blocked tear ducts to permanently stop sticky eye discharge and chronic tearing.",
        icon: "microscope"
      },
      {
        title: "Entropion & Ectropion Repair",
        description: "Realigns eyelids turned inward (rubbing cornea) or outward (causing severe drying and tears).",
        icon: "eye"
      }
    ],
    candidates: [
      "Drooping of one or both upper eyelids obstructing your superior visual field",
      "Tired, heavy sensation in the eyes caused by hooded skin resting on the eyelashes",
      "Constant tearing and sticky discharge from a blocked nasolacrimal tear duct (dacryocystitis)",
      "Eyelashes scratching the cornea due to inward-rolling eyelids (entropion)",
      "Growths, cyst, or lesions on the eyelids requiring biopsied removal"
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Oculoplastic Slit-Lamp & Anthropometric Assessment",
        description: "Precise millimeter measurement of margin-reflex distance (MRD-1), levator function, and facial symmetry."
      },
      {
        step: "02",
        title: "Customized Incision Design Along Natural Skin Creases",
        description: "Surgical markings are hidden within natural eyelid creases to ensure virtually imperceptible healed scars."
      },
      {
        step: "03",
        title: "Muscle Tightening or Duct Reconstruction",
        description: "Performed under sterile magnification with ultra-fine instruments and micro-cautery."
      },
      {
        step: "04",
        title: "Sub-Cuticular Closure & Rapid Outpatient Discharge",
        description: "Delicate hair-thin sutures close the skin cleanly. Patients return home comfortably on the same day."
      }
    ],
    technologies: [
      { name: "Radiofrequency Micro-Surgical Unit", role: "Bloodless cold cutting and pinpoint coagulation" },
      { name: "Endoscopic DCR Tower", role: "Endonasal visualization for scarless tear duct bypass" },
      { name: "Silicone Lacrimal Intubation Stents", role: "Bicanalicular stenting keeping newly created drainage pathways patent" }
    ],
    faqs: [
      {
        question: "Will oculoplastic or eyelid surgery leave noticeable scars on my face?",
        answer: "No. Eyelid skin is the thinnest skin on the human body and heals exceptionally well. Our surgeons hide incisions precisely within natural skin folds (such as the upper eyelid crease or directly below the lower lash line), making healed scars virtually invisible."
      },
      {
        question: "Is ptosis surgery only cosmetic, or will insurance cover it?",
        answer: "When drooping eyelids block your upper field of vision (proven by automated visual field testing and photographic evidence), ptosis surgery and functional blepharoplasty are considered medically necessary and are covered by most health insurance providers and corporate TPAs."
      },
      {
        question: "What is DCR surgery for tearing eyes?",
        answer: "Dacryocystorhinostomy (DCR) is a procedure to unblock tear drainage when the nasolacrimal duct is obstructed. The surgeon creates a tiny new pathway between the tear sac and the nasal cavity, allowing tears to drain freely and permanently curing watering and sticky discharge."
      },
      {
        question: "How long until swelling and bruising disappear after eyelid surgery?",
        answer: "Mild swelling and light bruising are normal for the first 5 to 7 days and can be minimized with cold ice compresses. Most patients feel confident returning to social activities and work within 7 to 10 days."
      }
    ],
    recoveryTimeline: [
      { time: "Day 3", milestone: "Swelling peaks and begins resolving rapidly with cold compresses." },
      { time: "Day 7", milestone: "Micro-sutures removed smoothly; light makeup and desk work resumed." },
      { time: "Month 1", milestone: "Natural symmetrical contour established; healed incision lines blend invisibly." }
    ],
    relatedSlugs: ["wart-tag-mole", "squint", "cataract"],
    testimonials: [
      {
            author: "Dr. Priya S",
            location: "Thrissur",
            role: "Ptosis Correction Patient",
            rating: 5,
            text: "Underwent functional blepharoplasty for severe drooping eyelids that obstructed my superior visual field. The scar is completely invisible within natural eyelid creases and my vision is bright and expansive again."
      },
      {
            author: "Sudhakar Dev",
            location: "Thrissur",
            role: "Eyelid Repair Patient",
            rating: 5,
            text: "Aarya eye care hospital has changed my life from blurry vision. The medical team and their support were amazing. Very cooperative throughout my treatment procedure."
      },
      {
            author: "Krishnan V",
            location: "Kodungallur",
            role: "Periocular Care Patient",
            rating: 5,
            text: "From pre-operative planning to suture-less recovery, their service was outstanding. Thanks to the oculoplastic surgical team for wonderful aesthetic and clinical outcomes."
      },
      {
            author: "Remya Santhosh",
            location: "Cherpu",
            role: "Cosmetic Oculoplasty Patient",
            rating: 5,
            text: "From the diagnosis, their medical support was excellent. They explained the procedure thoroughly, ensuring minimal bruising and very natural symmetrical healing."
      }
]
  },
  {
    slug: "wart-tag-mole",
    name: "Eyelid Wart, Skin Tag & Mole Removal",
    badge: "Cosmetic & Minor Oculoplasty",
    tagline: "Safe, Painless & Scarless Excision of Periocular Skin Lesions",
    heroImage: "/hero/avatar-curly.jpg",
    shortDesc: "Radiofrequency and micro-surgical removal of eyelid skin tags, xanthelasma, papillomas, cysts, and benign moles with pristine aesthetic skin preservation.",
    overview: [
      "The delicate skin around the eyes is frequently affected by benign skin growths, including skin tags (acrochordons), viral warts (verruca), eyelid cysts (chalazion/hidrocystoma), yellow cholesterol deposits (xanthelasma), and pigmented moles (nevi).",
      "Because the eyelid margins contain critical tear drainage puncta and delicate eyelash follicles, removing lesions in this region requires an experienced oculoplastic surgeon rather than a general practitioner or beauty salon.",
      "At Aarya Eye Care, we use advanced high-frequency radiofrequency ablation and micro-excision. The lesion is vaporized or excised with microscopic precision under local numbing, safeguarding the eyelid margin and leaving smooth, natural skin without scarring."
    ],
    keyHighlights: [
      {
        title: "Radiofrequency Precision",
        description: "Low-temperature radio waves vaporize the lesion cell by cell with zero thermal collateral damage to surrounding skin.",
        icon: "laser"
      },
      {
        title: "15-Minute In-Clinic Procedure",
        description: "Quick walk-in, walk-out treatment performed under gentle local numbing with immediate return to work.",
        icon: "clock"
      },
      {
        title: "Zero Scarring & Lash Preservation",
        description: "Eyelash roots, eyelid margin contours, and natural skin pigmentation are meticulously preserved.",
        icon: "sparkles"
      },
      {
        title: "Histopathological Biopsy",
        description: "Any suspicious pigmented mole or recurrent lesion is sent for laboratory biopsy to confirm benign pathology.",
        icon: "shield"
      }
    ],
    candidates: [
      "Individuals with irritating, cosmetic, or enlarging skin tags on upper or lower eyelids",
      "Yellowish fatty deposits (xanthelasma) appearing near the inner corner of the eyes",
      "Eyelid cysts, chalazions, or papillomas that snag on eyeglasses or clothing",
      "Pigmented moles that have grown, altered in color, or cause cosmetic distress",
      "Viral warts on the eyelid margins causing chronic surface conjunctivitis"
    ],
    procedureSteps: [
      {
        step: "01",
        title: "Dermatoscopic & Slit-Lamp Examination",
        description: "High-magnification evaluation of lesion depth, proximity to tear ducts, and benign characteristics."
      },
      {
        step: "02",
        title: "Micro-Local Anesthetic Injection",
        description: "A tiny insulin-gauge needle delivers a drop of local numbing solution, rendering the area completely insensitive."
      },
      {
        step: "03",
        title: "Radiofrequency Ablation / Micro-Excision",
        description: "The lesion is cleanly shaved flush with the skin or excised, simultaneously sealing micro-capillaries without bleeding."
      },
      {
        step: "04",
        title: "Antiseptic Shield & Immediate Discharge",
        description: "Antibiotic ointment is applied. The patient resumes normal activities immediately with simple wash instructions."
      }
    ],
    technologies: [
      { name: "Ellman Radiofrequency Generator", role: "4.0MHz cold radio-wave cellular vaporization" },
      { name: "Operating Slit-Lamp Microscope", role: "High-magnification visualization protecting meibomian orifices" },
      { name: "Fine Micro-Dissection Electrodes", role: "Sub-millimeter needle-point tip for delicate eyelid borders" }
    ],
    faqs: [
      {
        question: "Why should eyelid skin tags or warts be removed by an eye specialist?",
        answer: "The eyelid is uniquely complex, housing the delicate tear drainage puncta, the eyelid margin line, and hair follicles of the eyelashes. Improper removal by non-specialists can cause permanent notched eyelid margins, loss of eyelashes, or damage to tear drainage. An oculoplastic surgeon guarantees safe, precise results."
      },
      {
        question: "Does the procedure hurt?",
        answer: "No. Before beginning, we apply a gentle topical numbing cream followed by a microscopic drop of local anesthetic. You will feel no pain, burning, or cutting sensation during the treatment."
      },
      {
        question: "Will the removed skin tag or wart grow back?",
        answer: "Once a benign skin tag or cyst is fully removed with its base ablated, that specific lesion does not grow back. If you have a general genetic tendency toward skin tags, new ones may occasionally develop elsewhere over time, which can be treated equally easily."
      },
      {
        question: "What is the aftercare after lesion removal?",
        answer: "Keep the area dry for 24 hours and apply the prescribed antibiotic ointment twice daily for 5 days. A tiny superficial scab forms and flakes off naturally within 5 to 7 days, leaving healthy, smooth pink skin that matches your normal tone."
      }
    ],
    recoveryTimeline: [
      { time: "Day 1", milestone: "Immediate discharge; tiny dry scab forms with zero bleeding." },
      { time: "Day 5-7", milestone: "Scab flakes off naturally revealing smooth, healthy, flat skin." },
      { time: "Week 3", milestone: "Skin pigmentation blends completely with surrounding eyelid tone." }
    ],
    relatedSlugs: ["oculoplasty", "squint", "cornea"],
    testimonials: [
      {
            author: "Meera Nair",
            location: "Thrissur",
            role: "Eyelid Tag Removal Patient",
            rating: 5,
            text: "Had two benign eyelid papillomas right near the lash line. Radiofrequency excision at Aarya took less than 10 minutes with local numbing. Healed completely within 4 days with zero visible marks or lash loss."
      },
      {
            author: "Lakshmi Priya",
            location: "Kunnamkulam",
            role: "Radiofrequency Mole Excision",
            rating: 5,
            text: "Quick, painless minor procedure conducted with surgical sterility in the minor OT. The doctors ensured no scarring on delicate eyelid skin. Highly impressed by the clinical hygiene."
      },
      {
            author: "Santhosh",
            location: "Cherpu",
            role: "Facial Tag Removal Patient",
            rating: 5,
            text: "Extremely professional minor surgical suite. Clean, comfortable, and healing was completely effortless. Best clinic in Thrissur for periocular skin procedures."
      },
      {
            author: "Sudhakar Dev",
            location: "Thrissur",
            role: "Minor Surgical Suite Patient",
            rating: 5,
            text: "The medical team and their support were amazing. They were very friendly and cooperative throughout my treatment procedure. Thank you Aarya Eye Care Hospital."
      }
]
  }
];

export function getTreatmentBySlug(slug: string): TreatmentDetail | undefined {
  const normalized = slug.toLowerCase().replace(/-2$/, "");
  return TREATMENTS.find((t) => t.slug === normalized || t.slug === slug);
}
