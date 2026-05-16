"use client"

import { MobileMenu } from "@/components/mobile-menu"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { TrendingCoursesSection } from "@/components/trending-courses-section"
import { StudentSuccessSection } from "@/components/student-success-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { NewsletterSection } from "@/components/newsletter-section"

export default function Home() {
  return (
      <main>
        <HeroSection />
        <FeaturesSection />
        <TrendingCoursesSection />
        <StudentSuccessSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
        <NewsletterSection />
      </main>
  )
}
