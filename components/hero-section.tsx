"use client"

import { Button } from "@/components/ui/button"
import { Shield, CheckCircle, Award, Users, Globe, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [currentText, setCurrentText] = useState(0)
  const animatedTexts = [
    "Learn Quran with Perfect Tajweed.",
    "Master Arabic Language & Quran.",
    "Get Ijazah Certification Online.",
    "Join 10,000+ Happy Students.",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % animatedTexts.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="w-full py-12 md:py-22 lg:py-26 bg-gradient-to-br from-primary/5 via-secondary to-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container px-4 md:px-6 relative">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-6 animate-fade-in-up">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3 mb-4">
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-2 sm:px-3 py-1.5 rounded-full border shadow-sm animate-badge-float">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <span className="text-[10px] sm:text-xs font-medium">17+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-2 sm:px-3 py-1.5 rounded-full border shadow-sm animate-badge-float animation-delay-100">
                  <Award className="h-4 w-4 text-primary" />
                  <span className="text-[10px] sm:text-xs font-medium">Certified Tutors</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-2 sm:px-3 py-1.5 rounded-full border shadow-sm animate-badge-float animation-delay-200">
                  <Users className="h-4 w-4 text-accent" />
                  <span className="text-[10px] sm:text-xs font-medium">10,000+ Students</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-2 sm:px-3 py-1.5 rounded-full border shadow-sm animate-badge-float animation-delay-300">
                  <Globe className="h-4 w-4 text-blue-600" />
                  <span className="text-[10px] sm:text-xs font-medium">Global Academy</span>
                </div>
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                <span className="block py-2 transition-all duration-700 ease-in-out bg-gradient-to-r from-gray-900 via-primary to-accent bg-clip-text text-transparent animate-gradient-x">
                  {animatedTexts[currentText]}
                </span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl animate-fade-in-up animation-delay-200">
                Join our international Islamic academy with authentic Quran education, flexible schedules, and
                affordable monthly plans. Transform your child's spiritual journey today.
              </p>
            </div>
            <div className="flex flex-col gap-3 min-[400px]:flex-row animate-fade-in-up animation-delay-400">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-pulse-glow"
              >
                Start 3-Day Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105"
              >
                View Courses
              </Button>
            </div>
          </div>
          <div className="rounded-xl border bg-white/80 backdrop-blur-sm p-6 shadow-2xl animate-fade-in-up animation-delay-300 hover:shadow-3xl transition-all duration-500">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-5 w-5 text-green-600" />
              <h3 className="text-xl font-bold">Book Your Free Trial</h3>
            </div>
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">

                                <div className="space-y-2">
                  <label htmlFor="child-name" className="text-sm font-medium">
                    Student's Name *
                  </label>
                  <input
                    id="child-name"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all hover:border-primary/50"
                    placeholder="Enter student's name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="parent-name" className="text-sm font-medium">
                    Parent's Name 
                  </label>
                  <input
                    id="parent-name"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all hover:border-primary/50"
                    placeholder="Enter your name"
                  />
                </div>

              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address *
                </label>
                <input
                  id="email"
                  type="email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all hover:border-primary/50"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    WhatsApp Number *
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all hover:border-primary/50"
                    placeholder="+1 (555) 000-0000"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="age" className="text-sm font-medium">
                    Student's Age *
                  </label>
                  <select
                    id="age"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all hover:border-primary/50"
                    required
                  >
                    <option value="">Select age</option>
                    <option value="4-6">4-6 years</option>
                    <option value="7-10">7-10 years</option>
                    <option value="11-15">11-15 years</option>
                    <option value="16+">16+ years</option>
                    <option value="adult">Adult</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="course" className="text-sm font-medium">
                  Interested Course *
                </label>
                <select
                  id="course"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all hover:border-primary/50"
                  required
                >
                  <option value="">Select a course</option>
                  <option value="quran-recitation">Quran Recitation with Tajweed</option>
                  <option value="quran-memorization">Quran Memorization (Hifz)</option>
                  <option value="arabic-language">Arabic Language Course</option>
                  <option value="noorani-qaida">Noorani Qaida (Beginner)</option>
                  <option value="ijazah">Online Ijazah Certification</option>
                  <option value="tafseer">Quran Tafseer Course</option>
                  <option value="ten-qirat">Ten Qirat Course</option>
                  <option value="islamic-studies">Islamic Studies</option>
                </select>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Book Free Trial Class
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Shield className="h-3 w-3 text-green-600" />
                <span>No credit card required • 100% Risk-free • Instant confirmation</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
