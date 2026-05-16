import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
        {/* Google Ads tag — must be in body, not head, for afterInteractive to work */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-config" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.gtag = function(){window.dataLayer.push(arguments);}
            window.gtag('js', new Date());
            window.gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}');
            console.log('[gtag] initialized with ID: ${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
