import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

const montserrat = Montserrat({
  variable: "--font-gotham-fallback",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "AARYA EYE CARE - Super Speciality Eye Care Hospital",
  description:
    "Delivering advanced clinical excellence, state-of-the-art diagnostic technology, and compassionate vision treatments to safeguard and restore your eyesight.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col font-helvetica bg-[#F2E9DC] text-[#30291F] selection:bg-[#C9A581]/40 selection:text-[#30291F]">
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
