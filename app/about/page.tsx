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
  title: "About Us - Voice of Holy Quran Academy",
  description:
    "Learn about Voice of Holy Quran Academy's 10+ years of experience in Islamic education. Meet our certified tutors, discover our mission, and see why 500+ families trust us worldwide.",
  keywords:
    "About Voice of Holy Quran, Islamic education, Quran academy, certified tutors, online Quran learning, Muslim education",
}

export default function AboutPage() {
  return (
      <main>
        <AboutHeroSection />
        <AboutStorySection />
        <AboutMissionSection />
        <AboutStatsSection />
        {/* <AboutTeamSection /> */}
        <FeaturesSection />
        <StudentSuccessSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

  )
}
