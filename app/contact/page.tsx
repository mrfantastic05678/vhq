import type { Metadata } from "next"
import { AboutHeroSection } from "@/components/about-hero-section"
import { AboutStorySection } from "@/components/about-story-section"
import { AboutMissionSection } from "@/components/about-mission-section"
import { AboutStatsSection } from "@/components/about-stats-section"
import { FeaturesSection } from "@/components/features-section"
import { StudentSuccessSection } from "@/components/student-success-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"

export const metadata: Metadata = {
  title: "Contact - Voice of Holy Quran Academy",
  description:
    "Get in touch with Voice of Holy Quran Academy. We're here to answer your questions and support your journey in Islamic education.",
  keywords:
    "Contact Voice of Holy Quran, Islamic education, Quran academy, certified tutors, online Quran learning, Muslim education",
}

export default function ContactPage() {
  return (
      <main>
        <ContactSection />
        <AboutStatsSection />
        <AboutMissionSection />
        <StudentSuccessSection />
      </main>

  )
}
