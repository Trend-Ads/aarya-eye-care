import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/about-us", destination: "/about", permanent: true },
      { source: "/about-us-2", destination: "/about", permanent: true },
      { source: "/contact-us", destination: "/contact", permanent: true },
      { source: "/contact-us-new", destination: "/contact", permanent: true },
      { source: "/cataract-2", destination: "/treatments/cataract", permanent: true },
      { source: "/cataract-treatment-in-thrissur", destination: "/treatments/cataract", permanent: true },
      { source: "/lasik", destination: "/treatments/lasik", permanent: true },
      { source: "/trans-prk", destination: "/treatments/trans-prk", permanent: true },
      { source: "/retina-and-uveitis-2", destination: "/treatments/retina-and-uveitis", permanent: true },
      { source: "/glaucoma-2", destination: "/treatments/glaucoma", permanent: true },
      { source: "/cornea-2", destination: "/treatments/cornea", permanent: true },
      { source: "/dry-eyes-2", destination: "/treatments/dry-eyes", permanent: true },
      { source: "/pediatric-ophthalmology", destination: "/treatments/pediatric-ophthalmology", permanent: true },
      { source: "/squint-2", destination: "/treatments/squint", permanent: true },
      { source: "/oculoplastics", destination: "/treatments/oculoplasty", permanent: true },
      { source: "/oculoplastic", destination: "/treatments/oculoplasty", permanent: true },
      { source: "/warttag-mole", destination: "/treatments/wart-tag-mole", permanent: true },
      { source: "/hospital-facilities", destination: "/facilities/hospital-facilities", permanent: true },
      { source: "/corporate-empanelment", destination: "/facilities/corporate-empanelment", permanent: true },
      { source: "/insurance-facilities", destination: "/facilities/insurance-facilities", permanent: true },
      { source: "/lab", destination: "/facilities/lab", permanent: true },
    ];
  },
};

export default nextConfig;
