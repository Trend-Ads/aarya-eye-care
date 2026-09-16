import type { Metadata } from "next";
import { Barlow_Condensed, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-heading",
  weight: ["600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aarya Eye Care - Super Speciality Eye Care Hospital",
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
      className={`${barlowCondensed.variable} ${plusJakarta.variable} antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900 selection:bg-sky-200">
        {children}
      </body>
    </html>
  );
}
