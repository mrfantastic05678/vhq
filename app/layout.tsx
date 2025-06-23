import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MobileMenu } from "@/components/mobile-menu";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Voice of Holy Quran - Learn Quran with Tajweed Online",
  description:
    "Learn Quran with Tajweed at Voice of Holy Quran Academy! 17+ years experience, certified tutors, flexible plans, affordable monthly fees. Join 10,000+ students worldwide.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MobileMenu />
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
      <Footer />
    </>
  );
}
