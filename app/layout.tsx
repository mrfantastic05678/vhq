import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { MobileMenu } from "@/components/mobile-menu";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Voice of Holy Quran - Learn Quran with Tajweed Online",
  description:
    "Learn Quran with Tajweed at Voice of Holy Quran Academy! 10+ years experience, certified tutors, flexible plans, affordable monthly fees. Join 500+ students worldwide.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MobileMenu />
        {children}
        <WhatsAppButton />
        <Footer />
      </body>
      {/* @next/third-parties handles script loading timing, hydration, and dataLayer correctly */}
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ADS_ID!} />
    </html>
  );
}
