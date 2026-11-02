export interface FacilityEquipment {
  name: string;
  badge: string;
  subtitle: string;
  description: string;
  image?: string;
  indications: string[];
  specs: string[];
}

export interface FacilitySector {
  slug: string;
  title: string;
  badge: string;
  tagline: string;
  shortDesc: string;
  heroImage: string;
  highlights: string[];
  contentSections: {
    heading: string;
    body: string[];
  }[];
  equipment?: FacilityEquipment[];
  partners?: {
    category: string;
    items: string[];
  }[];
  partnerLogos?: {
    name: string;
    image: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export const FACILITIES: FacilitySector[] = [
  {
    slug: "hospital-facilities",
    title: "Hospital Facilities & Diagnostic Technology",
    badge: "NABH Accredited Infrastructure",
    tagline: "World-Class Ophthalmic Engineering & Ultra-Modern Surgical Suites",
    heroImage: "/facilities/hospital-facilities-main.webp",
    shortDesc: "Equipped with state-of-the-art optical biometry, high-resolution fundus OCT, green PRP lasers, Nd:YAG lasers, and positive-pressure sterile laminar airflow modular operating suites.",
    highlights: [
      "Ultra-modern modular operation theatres with HEPA laminar air filters & zero-infection protocol",
      "Optical Biometer OA-2000 for sub-micron cataract evaluation and IOL ray-tracing",
      "REVO FC combined fundus camera & high-speed Spectral Domain OCT with OCT Angiography",
      "Sirius 3D Scheimpflug & Placido corneal topography and tomography analyzer",
      "Appasamy Nd:YAG Laser & Green 532nm PRP Laser surgical units",
      "Aarya Institute of Optometry (Affiliated to B.S.S., Govt. of India)",
      "In-House Ocular Prosthetic & Specialized Low Vision Aids Clinic"
    ],
    contentSections: [
      {
        heading: "Patient Comfort & Advanced Infrastructure",
        body: [
          "At Aarya Eye Care, we prioritize the comfort of our patients. Every facet of our facility is meticulously designed to deliver the highest level of care and comfort to our patients while consistently upholding the highest standards of quality in eye care services.",
          "Our hospital is equipped with modern facilities and advanced equipment to perform a wide range of eye treatments. With state-of-the-art infrastructure and machinery, we ensure that your vision and eye health are in capable hands.",
          "Whether you require routine eye examinations, advanced surgical procedures, or specialized treatments for complex eye conditions, we have the resources and expertise to address your unique needs.",
          "We understand that a welcoming and comfortable environment is integral to the healing process and the overall patient experience. Thus, our facility is thoughtfully designed to provide a serene and reassuring atmosphere, from our waiting areas to our consultation rooms and sterile treatment spaces."
        ]
      },
      {
        heading: "Aarya Institute of Optometry",
        body: [
          "Aarya Institute of Optometry (A unit of Aarya Health Care), affiliated with Bharat Sevak Samaj (B.S.S., Govt. of India), aims to impart education of the highest standards in ophthalmic medicine and clinical optometry and instill in students the spirit of promoting quality eye care.",
          "Students undergo rigorous clinical training under the mentorship of senior ophthalmologists, mastering digital refractometry, corneal topography, biometry, perimetry, and pre-operative triage. Admission is open annually for aspiring ophthalmic professionals seeking comprehensive careers in eye healthcare."
        ]
      },
      {
        heading: "Aarya Opticals & Contact Lens Clinic",
        body: [
          "Our hospital houses an exclusive optical shop featuring leading international brands of frames, high-index anti-reflective computer lenses, progressive lenses, and polarized sunglasses for children and adults.",
          "A complete multi-stage quality check is performed by experienced optometrists on all lenses and frames to ensure perfect prescription compliance.",
          "Our Contact Lens Clinic offers expert medical fitting and careful instruction for daily disposables, toric soft lenses, rigid gas permeable (RGP) lenses, and specialized scleral lenses."
        ]
      }
    ],
    equipment: [
      {
        name: "Optical Biometer OA-2000 (Tomey, Japan)",
        badge: "Pre-Cataract Gold Standard",
        subtitle: "A New Approach to Pre-Cataract Evaluation",
        description: "Cataract surgery is the removal of the cataractous lens and implantation of a new intraocular lens (IOL). The Optical Biometer OA-2000 is a highly accurate, non-invasive automated method for measuring IOL power, integrating axial length, keratometry, anterior chamber depth, and lens thickness in under 0.5 seconds for premium toric and multifocal implants.",
        image: "/facilities/optical-biometer-oa2000.webp",
        indications: [
          "Pre-cataract surgery intraocular lens (IOL) calculation",
          "Toric IOL axis planning and post-refractive surgery lens formulas",
          "Myopia progression axial length tracking in children"
        ],
        specs: ["Measuring range: 14 - 40mm axial length", "Integrated ray-tracing formulas (Barrett, Haigis, Hill-RBF)", "Non-contact fast capture under 0.5 seconds"]
      },
      {
        name: "REVO FC – Fundus Camera & Spectral Domain OCT",
        badge: "High-Resolution Retinal Layering",
        subtitle: "Combined True-Color Fundus Photo & 130,000 A-Scans/sec OCT",
        description: "This state-of-the-art machine provides a detailed color photo of the retina along with high-quality OCT cross-sectional images. This helps in detecting even the minutest retinal changes invisible to the naked eye. The incorporated eye-tracking software is a major timesaver and provides utmost patient comfort.",
        image: "/facilities/revo-fc-oct.png",
        indications: [
          "Diabetic macular edema and diabetic retinopathy classification",
          "Wet & dry age-related macular degeneration (AMD)",
          "Glaucoma RNFL loss and optic disc cupping profiling",
          "Central serous chorioretinopathy and vitreo-macular traction"
        ],
        specs: ["Scan speed: Up to 130,000 A-scans per second", "Axial optical resolution: 5 microns", "Automated eye tracking & follow-up registration"]
      },
      {
        name: "OCT Angiography (SOCT)",
        badge: "Dye-Free Microvascular Imaging",
        subtitle: "Non-Invasive 3D Microvasculature Mapping",
        description: "Angiography SOCT is a non-invasive, dye-free technique providing a 3D image of retinal blood circulation. The software allows clinicians to observe, track, and compare subtle microvascular alterations in the retina across both eyes without intravenous fluorescein injection.",
        image: "/diagnostics/eye-anatomy-3d.png",
        indications: [
          "Capillary dropout and foveal avascular zone (FAZ) enlargement in diabetics",
          "Choroidal neovascularization (CNV) in macular degeneration",
          "Branch and central retinal vein occlusion collateral tracking"
        ],
        specs: ["Zero dye injection required", "Deep, superficial, and choriocapillaris layer segmentation", "Instant high-definition capillary angiography in seconds"]
      },
      {
        name: "Sirius – 3D Corneal Topography & Tomography (CSO, Italy)",
        badge: "Anterior Segment Architecture",
        subtitle: "Placido Disk Topography + Scheimpflug Tomography",
        description: "SIRIUS combines a 24-ring Placido disk with 3D Scheimpflug tomography of the anterior segment. It creates a computer-assisted 3-dimensional elevation map of both the anterior and posterior corneal surfaces, with the critical ability to detect irregular conditions like keratoconus early.",
        image: "/diagnostics/astigmatism-lens.png",
        indications: [
          "Pre-LASIK & Trans-PRK safety evaluation",
          "Early keratoconus detection and progression tracking for C3R",
          "Custom contact lens and scleral lens fitting"
        ],
        specs: ["25 Scheimpflug radial scans + Placido reflection rings", "Full corneal pachymetry map from limbus to limbus", "Automated keratoconus screening and cone apex grading"]
      },
      {
        name: "Appasamy Nd:YAG Laser Suite",
        badge: "Precision Anterior Photodisruption",
        subtitle: "Dual-Wavelength Q-Switched Laser System",
        description: "Delivers instantaneous in-clinic laser capsulotomy for cloudy capsular haze (after-cataract) following cataract surgery and peripheral iridotomy for narrow-angle glaucoma. The procedure takes under 3 minutes with zero downtime.",
        image: "/facilities/appasamy-yag-laser.png",
        indications: [
          "YAG Capsulotomy for cloudy capsular haze after cataract surgery",
          "YAG Peripheral Iridotomy (YAG PI) to relieve pupillary block in narrow angles",
          "Anterior vitrectomy strand disruption"
        ],
        specs: ["Energy range: 0.2 to 10 mJ variable burst mode", "He-Ne dual aiming beam with pinpoint confocal focus", "Slit-lamp integrated ergonomic delivery"]
      },
      {
        name: "Green Laser 532nm (PRP Retinal Laser)",
        badge: "Retinal Photocoagulation",
        subtitle: "Solid-State Diode Frequency-Doubled Laser",
        description: "The 532nm wavelength provides optimal absorption by retinal pigment epithelium with minimal light scatter. It is the gold standard for pan-retinal photocoagulation (PRP) in proliferative diabetic retinopathy and barrage laser sealing of retinal tears.",
        image: "/facilities/green-laser-prp.webp",
        indications: [
          "Pan-retinal photocoagulation (PRP) in proliferative diabetic retinopathy",
          "Barrage laser for peripheral retinal tears and lattice degeneration",
          "Focal macular photocoagulation for microaneurysm leakage"
        ],
        specs: ["Wavelength: 532 nm pure green emission", "Variable pulse duration: 10ms to continuous", "Slit-lamp & indirect ophthalmoscope delivery modes"]
      },
      {
        name: "Ocular Prosthetic Clinic",
        badge: "Cosmetic Vision Rehabilitation",
        subtitle: "Custom-Fitted Artificial Eye Implants",
        description: "An ocular prosthesis is a custom-crafted artificial eye fitted for patients who have lost an eye due to trauma, surgery, or shrunken damaged eyes (phthisical eyes) with no visual potential. It restores natural facial symmetry and patient confidence.",
        image: "/diagnostics/rehab-eye.png",
        indications: [
          "Traumatic ocular injury and surgical eye removal",
          "Shrunken damaged eye (phthisis bulbi) cosmetic masking",
          "Congenital anophthalmos or microphthalmos rehabilitation"
        ],
        specs: ["Medical-grade polymethyl methacrylate (PMMA)", "Hand-painted custom iris color matching", "Comfortable movement matching natural contralateral eye"]
      },
      {
        name: "Low Vision Aids Division",
        badge: "Visual Enhancement Technology",
        subtitle: "Optical & Non-Optical Residual Vision Magnifiers",
        description: "Specialized optical devices that enhance residual vision by magnifying retinal image size for patients with irreversible visual impairment from AMD, advanced glaucoma, diabetic maculopathy, or optic atrophy.",
        image: "/diagnostics/mri-scan.png",
        indications: [
          "Advanced Age-Related Macular Degeneration (ARMD)",
          "End-stage Glaucoma tunnel vision magnification",
          "Diabetic maculopathy reading assistance"
        ],
        specs: ["Dome magnifiers & LED illuminated double magnification", "High-contrast amber filter glasses", "Hands-free head-mounted & Fresnel prism lenses"]
      }
    ],
    faqs: [
      {
        question: "What makes Aarya Eye Care's operation theatres safe from infections?",
        answer: "Our modular operation theatres feature positive-pressure laminar air flow passing through multi-stage HEPA filtration, creating an ultra-sterile, dust-free, microbe-free zone around the surgical table. Surgical air is exchanged over 25 times per hour, ensuring highest international surgical hygiene standards."
      },
      {
        question: "Can I get my diagnostic tests and consultation completed in a single visit?",
        answer: "Yes. All diagnostic equipment—including optical biometry, OCT, OCT Angiography, visual fields, and corneal tomography—is housed within the hospital. Most patients complete their entire diagnostic workup and receive surgical advice on the same day."
      },
      {
        question: "How do I apply for the Aarya Institute of Optometry courses?",
        answer: "Admissions for the Diploma in Optometry (affiliated to B.S.S., Govt. of India) open prior to each academic session. Candidates who have completed 10+2 with a science background can contact our academic coordinator directly at the Thrissur main branch or call 0487 232 2288."
      }
    ]
  },
  {
    slug: "corporate-empanelment",
    title: "Corporate Healthcare Empanelment",
    badge: "Institutional Wellness & Screening",
    tagline: "Dedicated Corporate Eye Care Programs, Executive Health & On-Site Camps",
    heroImage: "/images/doctor-exam.jpg",
    shortDesc: "In our endeavor to provide quality eye care for our privileged clientele base, we have tied up with a wide range of corporate organizations, providing special discounts for both outpatient consultation and in-patient procedures for employees and family members.",
    highlights: [
      "Special discounts on outpatient consultations and in-patient surgeries for employees and family",
      "Dedicated team of experienced ophthalmologists fostering a healthier, productive workforce",
      "On-site portable diagnostic eye screening camps conducted at company premises",
      "Direct cashless billing tie-ups and priority executive OPD appointments",
      "Ergonomic computer vision syndrome workshops and digital eye strain evaluations"
    ],
    contentSections: [
      {
        heading: "Corporate Empanelment & Partnerships",
        body: [
          "In our endeavor to provide quality eye care for our privileged clientele base, we have tied up with a wide range of corporate organizations, providing special discounts for both outpatient consultation and in-patient procedures for the employees and family members.",
          "Our dedicated team of experienced ophthalmologists and support staff ensures that every member of your organization receives the highest standard of eye care, fostering a healthier and more productive workforce.",
          "If you would like to empanel your company with us and get access to world-class facilities at special rates, do contact us on 9946322288 or mail us at info@aaryaeyecare.in"
        ]
      },
      {
        heading: "On-Site Corporate Screening Camps",
        body: [
          "Our mobile outreach unit brings advanced ophthalmic diagnostic equipment directly to your corporate premises across Thrissur and Central Kerala. We conduct automated computer refractions, intraocular pressure checks, dry eye assessments, and consultations with senior optometrists.",
          "Employees receive personalized diagnostic reports, ergonomic advice for dual-monitor setups, and prescription verification on the spot, minimizing work disruption."
        ]
      }
    ],
    partners: [
      {
        category: "Corporate & Institutional Benefits",
        items: [
          "Special subsidized consultation and surgical packages for staff and direct dependents",
          "Dedicated corporate desk coordinator for priority OPD appointments and admission",
          "Comprehensive Computer Vision Syndrome (CVS) digital ergonomics workshops",
          "Free annual on-site eye screening camps for organizations with 50+ employees",
          "Subsidized high-index anti-reflective computer lenses and optical frames"
        ]
      },
      {
        category: "Empaneled Sectors & Industries",
        items: [
          "Information Technology & Software Parks",
          "Public & Private Sector Banking Institutions",
          "Government Departments & Municipal Corporations",
          "Educational Universities & Teacher Associations",
          "Manufacturing Industries & Industrial Estates",
          "Senior Citizen Forums & Employee Welfare Trusts"
        ]
      }
    ],
    faqs: [
      {
        question: "How can our organization tie up with Aarya Eye Care for corporate empanelment?",
        answer: "HR directors or employee welfare representatives can get in touch with our Institutional Coordinator via email at corporate@aaryaeyecare.in or by calling +91 9946 322288. We will share a tailored MOU detailing subsidized OPD, surgical benefits, and schedule an on-site camp."
      },
      {
        question: "Are corporate discounts extended to employee family members?",
        answer: "Yes. Our corporate empanelment agreements typically cover the employee, their spouse, children, and dependent parents upon presenting a valid company ID card."
      },
      {
        question: "What equipment does Aarya bring to on-site corporate screening camps?",
        answer: "We deploy portable auto-refractometers, hand-held slit lamps, non-contact tonometer devices, visual acuity charts, and dry-eye tear testing kits, providing a comprehensive screening setup on-site."
      }
    ]
  },
  {
    slug: "insurance-facilities",
    title: "Cashless Insurance & Mediclaim Facilities",
    badge: "Hassle-Free TPA Network",
    tagline: "Seamless Cashless Hospitalization with Leading Health Insurers Across India",
    heroImage: "/images/eye-care-consultation.jpg",
    shortDesc: "We've partnered with major medical claim service providers across India for seamless processing, eliminating the need for you to handle claim filings. AARYA EYE CARE ensures full support and documentation for insurance claims, offering hassle-free billing.",
    highlights: [
      "Direct cashless tie-ups with 17+ leading TPAs and major private/public health insurance providers",
      "Full support and documentation handled by dedicated in-house Patient Educators",
      "Hassle-free billing during eye surgeries or ocular trauma emergencies",
      "Fast-track pre-authorization approvals within 2 hours",
      "Assistance with reimbursement options and itemized documentation"
    ],
    contentSections: [
      {
        heading: "Hassle-Free Cashless Processing",
        body: [
          "We've partnered with major medical claim service providers across India for seamless processing, eliminating the need for you to handle claim filings.",
          "AARYA EYE CARE ensures full support and documentation for insurance claims, offering hassle-free billing during eye surgeries or emergencies.",
          "Our dedicated Patient Educators guide you through the process, ensuring you have all necessary information for cashless facility or reimbursement options."
        ]
      },
      {
        heading: "Step-by-Step Cashless Hospitalization Process",
        body: [
          "Step 1: Clinical Evaluation – The ophthalmologist confirms surgery requirement and outlines the medical protocol.",
          "Step 2: Document Submission – Present your health insurance card, Aadhaar card, PAN card, and policy document at our TPA Desk.",
          "Step 3: Pre-Authorization – Our desk sends the cashless request form to your TPA, typically receiving pre-approval within 2 to 4 hours.",
          "Step 4: Surgery & Discharge – Undergo treatment comfortably. On discharge day, our team settles the bill directly with your insurer, with the patient only responsible for non-medical expenses if specified in their policy."
        ]
      }
    ],
    partnerLogos: [
      { name: "Star Health & Allied Insurance", image: "/facilities/insurance/partner-1.webp" },
      { name: "Medi Assist Insurance TPA", image: "/facilities/insurance/partner-2.webp" },
      { name: "Vidal Health TPA", image: "/facilities/insurance/partner-3.webp" },
      { name: "MD India Health Insurance TPA", image: "/facilities/insurance/partner-4.webp" },
      { name: "Heritage Health Insurance TPA", image: "/facilities/insurance/partner-5.webp" },
      { name: "Paramount Health Services", image: "/facilities/insurance/partner-6.webp" },
      { name: "Family Health Plan Insurance TPA (FHPL)", image: "/facilities/insurance/partner-8.webp" },
      { name: "Health India Insurance TPA", image: "/facilities/insurance/partner-9.webp" },
      { name: "Raksha Health Insurance TPA", image: "/facilities/insurance/partner-10.webp" },
      { name: "ICICI Lombard General Insurance", image: "/facilities/insurance/partner-11.webp" },
      { name: "Niva Bupa Health Insurance", image: "/facilities/insurance/partner-12.webp" },
      { name: "Care Health Insurance", image: "/facilities/insurance/partner-13.webp" },
      { name: "HDFC ERGO General Insurance", image: "/facilities/insurance/partner-14.webp" },
      { name: "Bajaj Allianz General Insurance", image: "/facilities/insurance/partner-15.webp" },
      { name: "Tata AIG General Insurance", image: "/facilities/insurance/partner-16.webp" },
      { name: "New India Assurance Company", image: "/facilities/insurance/partner-17.webp" },
      { name: "United India Insurance Company", image: "/facilities/insurance/partner-18.webp" }
    ],
    partners: [
      {
        category: "Empaneled Third Party Administrators (TPAs)",
        items: [
          "Medi Assist Insurance TPA Pvt. Ltd.",
          "Vidal Health TPA (Vipul MedCorp)",
          "MD India Health Insurance TPA",
          "Heritage Health Insurance TPA",
          "Paramount Health Services & Insurance TPA",
          "Family Health Plan Insurance TPA (FHPL)",
          "Health India Insurance TPA Services",
          "Raksha Health Insurance TPA"
        ]
      },
      {
        category: "Leading Empaneled Health Insurers",
        items: [
          "Star Health & Allied Insurance",
          "ICICI Lombard General Insurance",
          "Niva Bupa Health Insurance (Max Bupa)",
          "Care Health Insurance (Religare)",
          "HDFC ERGO General Insurance",
          "Bajaj Allianz General Insurance",
          "Tata AIG General Insurance",
          "New India Assurance Company Ltd.",
          "United India Insurance Company Ltd.",
          "National Insurance Company Ltd.",
          "Oriental Insurance Company Ltd."
        ]
      }
    ],
    faqs: [
      {
        question: "Does health insurance cover modern cataract surgery with premium lenses?",
        answer: "Yes, cataract surgery is universally recognized by all health insurers as a covered day-care procedure. The majority of insurance policies cover standard monofocal surgery completely. If you choose premium toric or multifocal IOLs, the insurer covers the base eligible amount while the patient pays the difference directly."
      },
      {
        question: "Is blade-free LASIK covered under health insurance?",
        answer: "Refractive LASIK performed purely for aesthetic spectacle freedom is generally excluded by standard policies. However, if your refractive error is high (usually -7.5 diopters or greater) or caused by severe trauma/anisometropia, many modern insurers and corporate policies provide coverage upon medical review."
      },
      {
        question: "What documents must I carry for cashless admission?",
        answer: "Please bring: 1) Your original Health Insurance Card / TPA E-card, 2) Patient's Aadhaar card and PAN card, 3) Primary policyholder's ID proof, 4) Current year's policy copy, and 5) Previous medical records and consultation prescriptions."
      },
      {
        question: "Can I claim reimbursement if my policy is not on the cashless list?",
        answer: "Yes! If you prefer reimbursement or have a private overseas policy, our TPA team provides complete itemized hospital bills, discharge summaries, surgeon certificates, break-up receipts, and OT notes to ensure your reimbursement claim is approved without delay."
      }
    ]
  },
  {
    slug: "lab",
    title: "Clinical Diagnostic Lab & Neuro-Ophthalmology",
    badge: "Accurate Diagnostic Profiling",
    tagline: "Advanced Ocular Diagnostics, Automated Perimetry & Clinical Microbiology",
    heroImage: "/diagnostics/diagnosis-hero-box.png",
    shortDesc: "Dedicated ocular diagnostic laboratory providing Humphrey visual field perimetry, pachymetry, endothelial specular microscopy, tear film osmolarity, and clinical microbiology.",
    highlights: [
      "Automated Humphrey Visual Field Analyzer for optic nerve and neurological pathway mapping",
      "Non-contact specular microscopy evaluating corneal endothelial cell density and morphology",
      "Corneal pachymetry for sub-micron corneal thickness profiling",
      "Microbiological ocular smear staining and culture for rapid infectious keratitis identification",
      "Electro-diagnostic coordination for unexplained visual loss and optic neuritis"
    ],
    contentSections: [
      {
        heading: "Precision Diagnostics at the Core of Eye Health",
        body: [
          "Ophthalmic diagnostics require microscopic precision. Subtle alterations in the corneal endothelial cell count or micro-deficits in the retinal nerve fiber layer can alter surgical outcomes and long-term visual prognosis.",
          "Aarya Eye Care's Diagnostic & Neuro Lab operates as an integrated center of excellence. Equipped with standardized automated perimetry (Humphrey Field Analyzer), ultrasonic and optical pachymetry, and specular microscopy, we deliver objective numerical indices that guide clinical decisions.",
          "Our neuro-ophthalmology wing collaborates closely with neurologists to evaluate unexplained vision reduction, visual field defects from pituitary tumors or strokes, optic neuritis, and cranial nerve palsies."
        ]
      },
      {
        heading: "Specialized Laboratory Diagnostic Services",
        body: [
          "Automated Visual Field Perimetry (Humphrey): Detects subtle optic nerve damage from glaucoma, brain tumors, stroke, and toxic optic neuropathies across 24-2, 30-2, and 10-2 central field thresholds.",
          "Specular Microscopy: Evaluates the density (cells/mm²), coefficient of variation, and hexagonal cell percentage of corneal endothelium, critical before cataract surgery, ICL phakic lens implantation, and corneal grafting.",
          "Corneal Pachymetry: Precision corneal thickness measurement essential for accurate intraocular pressure calibration and pre-refractive surgery screening.",
          "Ocular Microbiology: Rapid direct smears (Gram stain, KOH wet mount) for immediate identification of bacterial and fungal corneal infections, enabling targeted antimicrobial therapy within hours."
        ]
      }
    ],
    equipment: [
      {
        name: "Humphrey Field Analyzer (HFA)",
        badge: "Global Standard in Visual Fields",
        subtitle: "SITA Standard automated threshold perimetry",
        description: "The internationally recognized reference standard for detecting and tracking visual field sensitivity loss in glaucoma and neurological disorders.",
        image: "/diagnostics/mri-scan.png",
        indications: ["Glaucoma progression staging", "Pituitary tumor visual field compression", "Optic neuritis and toxic neuropathies"],
        specs: ["SITA-Fast & SITA-Standard algorithms", "Gaze tracking with pupil measurement", "Guided Progression Analysis (GPA) software"]
      },
      {
        name: "Non-Contact Specular Microscope",
        badge: "Corneal Endothelial Counter",
        subtitle: "Automated endothelial cell morphology analyzer",
        description: "Non-invasively photographs and counts the non-regenerative endothelial cell layer on the back of the cornea, ensuring surgical safety before intraocular procedures.",
        image: "/diagnostics/eye-anatomy-full.png",
        indications: ["Pre-cataract corneal health assessment", "Fuchs' endothelial dystrophy diagnosis", "Phakic ICL candidate eligibility"],
        specs: ["Cell density (CD), CV, and Hexagonal cell count (%)", "Non-contact rapid auto-alignment", "High-magnification dark-field optical view"]
      }
    ],
    faqs: [
      {
        question: "What should I expect during an automated visual field test?",
        answer: "The visual field test is completely painless and takes approximately 10 to 15 minutes per eye. You sit comfortably with your chin on a rest and look at a central fixation light inside a curved bowl. Small flashes of light appear at varying brightnesses in your peripheral vision, and you simply press a handheld response button whenever you see a flash."
      },
      {
        question: "Why is an endothelial cell count needed before eye surgery?",
        answer: "The corneal endothelium is a single layer of cells responsible for pumping water out of the cornea to keep it crystal clear. Humans are born with a fixed number of these cells, which do not regenerate. Checking your cell density before surgery ensures your cornea has ample cellular reserve to remain clear and healthy."
      },
      {
        question: "How quickly are emergency corneal microbiology results available?",
        answer: "Direct microscopy smears (Gram stain and fungal KOH wet mounts) are prepared and interpreted within 1 to 2 hours, allowing our corneal specialists to begin immediate targeted antibiotic or antifungal eye drops to protect your eye."
      }
    ]
  }
];

export function getFacilityBySlug(slug: string): FacilitySector | undefined {
  return FACILITIES.find((f) => f.slug === slug);
}
