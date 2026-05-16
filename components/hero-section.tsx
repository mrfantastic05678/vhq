"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, CheckCircle, Award, Users, Globe, ArrowRight } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { trackConversion } from "@/lib/gtm"

export function HeroSection() {
  const [currentText, setCurrentText] = useState(0)
  const animatedTexts = [
    "Learn Quran with Perfect Tajweed.",
    "Master Arabic Language & Quran.",
    "Get Ijazah Certification Online.",
    "Join 500+ Happy Students.",
  ]

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isSubmitted && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [isSubmitted]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % animatedTexts.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [animatedTexts.length])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      studentName: formData.get("studentName") as string,
      parentName: formData.get("parentName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      age: formData.get("age") as string,
      course: formData.get("course") as string,
      website_url: formData.get("website_url") as string, // Honeypot
    };

    try {
      const res = await fetch("/api/enroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setIsSubmitted(true);
      trackConversion();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to submit. Please try again.";
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  <span className="text-[10px] sm:text-xs font-medium">10+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-2 sm:px-3 py-1.5 rounded-full border shadow-sm animate-badge-float animation-delay-100">
                  <Award className="h-4 w-4 text-primary" />
                  <span className="text-[10px] sm:text-xs font-medium">Certified Tutors</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-2 sm:px-3 py-1.5 rounded-full border shadow-sm animate-badge-float animation-delay-200">
                  <Users className="h-4 w-4 text-accent" />
                  <span className="text-[10px] sm:text-xs font-medium">500+ Students</span>
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
              <Link href="/enroll">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-pulse-glow"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/courses">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105"
                >
                  View Courses
                </Button>
              </Link>
            </div>
          </div>
          <div ref={formRef} className="rounded-xl border bg-white/80 backdrop-blur-sm p-6 shadow-2xl animate-fade-in-up animation-delay-300 hover:shadow-3xl transition-all duration-500">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center space-y-4 py-4 animate-fade-in-up">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mx-auto mb-2">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold">🎉 Enrollment Successful!</h3>
                <p className="text-sm text-muted-foreground">
                  Thank you for choosing Voice of Holy Quran Academy! We're excited to begin this blessed journey with you.
                </p>
                
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border shadow-sm w-full my-4 text-left">
                  <h4 className="font-semibold text-sm mb-3">What happens next?</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-semibold mt-0.5">1</div>
                      <p className="text-xs text-muted-foreground">Our advisor will contact you within 24 hours to schedule your free trial.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-semibold mt-0.5">2</div>
                      <p className="text-xs text-muted-foreground">We'll match you with the perfect tutor based on your preferences.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-xs font-semibold mt-0.5">3</div>
                      <p className="text-xs text-muted-foreground">You'll receive instructions on how to access your classes.</p>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="w-full mt-2"
                >
                  Register Another Student
                </Button>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-2 mb-4">
                  <Shield className="h-5 w-5 text-green-600" />
                  <h3 className="text-xl font-bold">Book Your Free Trial</h3>
                </div>
                {error && (
                  <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-md border border-red-200">
                    {error}
                  </div>
                )}
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  {/* Honeypot field - visually hidden to catch bots */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website_url">Website URL</label>
                    <input
                      type="text"
                      id="website_url"
                      name="website_url"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="studentName" className="text-sm font-medium">
                        Student's Name *
                      </label>
                      <input
                        id="studentName"
                        name="studentName"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all hover:border-primary/50"
                        placeholder="Enter student's name"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="parentName" className="text-sm font-medium">
                        Parent's Name 
                      </label>
                      <input
                        id="parentName"
                        name="parentName"
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
                      name="email"
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
                        name="phone"
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
                        name="age"
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
                      name="course"
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

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        Book Free Trial Class
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                  <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                    <Shield className="h-3 w-3 text-green-600" />
                    <span>No credit card required • Risk-free • Instant confirmation</span>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
