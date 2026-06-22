import type { Metadata } from "next";
import { Archivo, DM_Serif_Display, Space_Mono } from "next/font/google";

import { profile } from "@/content/profile";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-archivo",
  display: "swap",
});

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-dm-serif",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

const fullName = `${profile.firstName} ${profile.lastName}`;

export const metadata: Metadata = {
  title: `${fullName} — ${profile.role}`,
  description: profile.heroIntro,
  openGraph: {
    title: `${fullName} — ${profile.role}`,
    description: profile.heroIntro,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${dmSerif.variable} ${spaceMono.variable} scroll-smooth`}
    >
      <body>{children}</body>
    </html>
  );
}
