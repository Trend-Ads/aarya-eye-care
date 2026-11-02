export interface BranchLocation {
  id: string;
  name: string;
  shortName: string;
  badge: string;
  image: string;
  addressLines: string[];
  pincode: string;
  phoneLandline: string;
  phoneMobile: string;
  email: string;
  timings: {
    weekdays: string;
    sunday: string;
  };
  features: string[];
  googleMapsUrl: string;
  whatsappNumber: string;
}

export const BRANCHES_DATA: BranchLocation[] = [
  {
    id: "thrissur",
    name: "AARYA EYE CARE - THRISSUR",
    shortName: "Thrissur",
    badge: "Super Speciality & Surgical Center",
    image: "/branches/Thrissur-aarya.webp",
    addressLines: [
      "2nd Floor Pallithamam Building Near North Bus Stand",
      "Thrissur - 680 020"
    ],
    pincode: "680 020",
    phoneLandline: "0487 232 2288",
    phoneMobile: "+91 9946 322288",
    email: "thrissur@aaryaeyecare.in",
    timings: {
      weekdays: "Monday – Saturday: 8:00 AM – 6:00 PM",
      sunday: "Sunday: 10:00 AM – 2:00 PM"
    },
    features: [
      "Modular Laminar Flow Operation Theatres",
      "Blade-Free LASIK & Trans-PRK Refractive Suite",
      "Optical Biometer OA-2000 & REVO Spectral Domain OCT",
      "Full Cashless TPA & Mediclaim Insurance Desk",
      "24/7 Ocular Trauma & Emergency Services"
    ],
    googleMapsUrl: "https://maps.google.com/?q=Aarya+Eye+Care+Thrissur+Pallithamam+Building",
    whatsappNumber: "919946322288"
  },
  {
    id: "cherpu",
    name: "AARYA EYE CARE - CHERPU",
    shortName: "Cherpu",
    badge: "Regional Eye Health Center",
    image: "/branches/Cherpu-aarya.webp",
    addressLines: [
      "Near Cherpu Grama Panchayat Thayamkulangara,",
      "Cherpu - 680 561"
    ],
    pincode: "680 561",
    phoneLandline: "0487 234 5678",
    phoneMobile: "+91 9188 885678",
    email: "cherpu@aaryaeyecare.in",
    timings: {
      weekdays: "Monday – Saturday: 8:30 AM – 5:30 PM",
      sunday: "Sunday: 9:30 AM – 1:30 PM"
    },
    features: [
      "Senior Consultant Ophthalmologist OPD",
      "Computerized Refraction & Vision Testing",
      "Glaucoma Screening & Non-Contact Tonometry",
      "Optical Dispensing & Contact Lens Clinic",
      "Cataract Evaluation & Post-Op Follow-up"
    ],
    googleMapsUrl: "https://maps.google.com/?q=Aarya+Eye+Care+Cherpu+Thayamkulangara",
    whatsappNumber: "919188885678"
  },
  {
    id: "kunnamkulam",
    name: "AARYA EYE CARE - KUNNAMKULAM",
    shortName: "Kunnamkulam",
    badge: "Comprehensive Diagnostic Center",
    image: "/branches/Kunnamkulam-aarya.webp",
    addressLines: [
      "Achuthan Tower, Town Hall Road, Near New Bus Stand,",
      "Kunnamkulam - 680 503"
    ],
    pincode: "680 503",
    phoneLandline: "04885 29 9669",
    phoneMobile: "+91 7994 949669",
    email: "kunnamkulam@aaryaeyecare.in",
    timings: {
      weekdays: "Monday – Saturday: 8:30 AM – 6:00 PM",
      sunday: "Sunday: 9:30 AM – 1:30 PM"
    },
    features: [
      "Super Speciality Retina & Glaucoma Consultation",
      "Digital Slit-Lamp Anterior Segment Photography",
      "Diabetic Retinopathy Screening Unit",
      "Children's Vision & Amblyopia Testing",
      "Direct TPA Insurance Claim Coordination"
    ],
    googleMapsUrl: "https://maps.google.com/?q=Aarya+Eye+Care+Kunnamkulam+Achuthan+Tower",
    whatsappNumber: "917994949669"
  },
  {
    id: "kodungallur",
    name: "AARYA EYE CARE - KODUNGALLUR",
    shortName: "Kodungallur",
    badge: "Coastal Vision Care Center",
    image: "/branches/kodungallur-2-aarya.webp",
    addressLines: [
      "Seashore Arcade, Near Kalyan Jewellers Chandapura,",
      "Kodungallur - 680 664"
    ],
    pincode: "680 664",
    phoneLandline: "0480 280 8182",
    phoneMobile: "+91 8138 012348",
    email: "kodungallur@aaryaeyecare.in",
    timings: {
      weekdays: "Monday – Saturday: 8:30 AM – 5:30 PM",
      sunday: "Sunday: Closed"
    },
    features: [
      "Comprehensive Eye Examinations & Dilated Funduscopy",
      "Pre-Cataract & Refractive Surgery Consultation",
      "Dry Eye Disease Diagnostic Workup",
      "Emergency Minor Foreign Body Removal",
      "Designer Eyewear & High-Index Lens Lab"
    ],
    googleMapsUrl: "https://maps.google.com/?q=Aarya+Eye+Care+Kodungallur+Seashore+Arcade",
    whatsappNumber: "918138012348"
  }
];
