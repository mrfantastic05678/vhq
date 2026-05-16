"use client";

import type React from "react";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Shield,
  CheckCircle,
  Award,
  Users,
  Globe,
  ArrowRight,
  Star,
  Clock,
  Trophy,
} from "lucide-react";
import { coursesData } from "@/lib/courses-data";
import Link from "next/link";

export function LeadFormSection() {
  const searchParams = useSearchParams();
  const [selectedCourse, setSelectedCourse] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Get course from URL parameter
  useEffect(() => {
    const courseParam = searchParams.get("course");
    if (courseParam) {
      // Find the course by slug and set the title as selected
      const course = coursesData.find((c) => c.slug === courseParam);
      if (course) {
        setSelectedCourse(course.title);
      }
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container px-4 md:px-6 relative">
          <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100 mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
              🎉 Enrollment Successful!
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              Thank you for choosing Voice of Holy Quran Academy! We're excited
              to begin this blessed journey with you.
            </p>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 border shadow-sm mb-8">
              <h3 className="font-semibold text-lg mb-4">What happens next?</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-semibold mt-0.5">
                    1
                  </div>
                  <p className="text-sm">
                    Our academic advisor will contact you within 24 hours to
                    schedule your free trial classes
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-semibold mt-0.5">
                    2
                  </div>
                  <p className="text-sm">
                    We'll match you with the perfect tutor based on your
                    preferences and goals
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-semibold mt-0.5">
                    3
                  </div>
                  <p className="text-sm">
                    You'll receive instructions for how to access your classes
                    and get started
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="w-full sm:w-auto">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Return to Home
                </Button>
              </Link>
              <Link href="/courses" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Explore More Courses
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-primary/5 via-secondary to-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container px-4 md:px-6 relative">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          {/* Left Side - Content */}
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
                <span className="block transition-all duration-700 ease-in-out bg-gradient-to-r from-gray-900 via-primary to-accent bg-clip-text text-transparent animate-gradient-x py-5">
                  Start Your Quran Learning Journey Today
                </span>
              </h1>

              <p className="max-w-[600px] text-muted-foreground md:text-xl animate-fade-in-up animation-delay-200">
                Join thousands of families who have transformed their Islamic
                education with our expert tutors, authentic teaching methods,
                and flexible online classes. Begin with 3 free trial lessons!
              </p>
            </div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-fade-in-up animation-delay-300">
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-lg p-3 border">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-sm font-medium">
                  No Credit Card Required
                </span>
              </div>
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-lg p-3 border">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-sm font-medium">
                  Instant Confirmation
                </span>
              </div>
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-lg p-3 border">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-sm font-medium">Flexible Scheduling</span>
              </div>
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-lg p-3 border">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-sm font-medium">
                  Money-Back Guarantee
                </span>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground animate-fade-in-up animation-delay-400">
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-primary" />
                <span>500+ Happy Students</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-green-600" />
                <span>10+ Years Experience</span>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="rounded-xl border bg-white/80 backdrop-blur-sm p-6 shadow-2xl animate-fade-in-up animation-delay-300 hover:shadow-3xl transition-all duration-500">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-5 w-5 text-green-600" />
              <h3 className="text-xl font-bold">
                Book Your Free Trial Classes
              </h3>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              Fill out the form below and we'll contact you within 24 hours to
              schedule your personalized trial lessons.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
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
                  value={selectedCourse}
                  onChange={(e) => setSelectedCourse(e.target.value)}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all hover:border-primary/50"
                  required
                >
                  <option value="">Select a course</option>
                  <option value="Quran Recitation with Tajweed">
                    Quran Recitation with Tajweed
                  </option>
                  <option value="Quran Memorization (Hifz)">
                    Quran Memorization (Hifz)
                  </option>
                  <option value="Arabic Language Course">
                    Arabic Language Course
                  </option>
                  <option value="Noorani Qaida Course">
                    Noorani Qaida (Beginner)
                  </option>
                  <option value="Online Ijazah Course">
                    Online Ijazah Certification
                  </option>
                  <option value="Tajweed Mastery Course">
                    Tajweed Mastery Course
                  </option>
                  <option value="Quran Tafseer Course">
                    Quran Tafseer Course
                  </option>
                  <option value="Ten Qirat Course">Ten Qirat Course</option>
                  <option value="Islamic Studies">Islamic Studies</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="comments" className="text-sm font-medium">
                  Additional Comments (Optional)
                </label>
                <textarea
                  id="comments"
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all hover:border-primary/50"
                  placeholder="Any specific requirements or questions?"
                />
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
                    Book Free Trial Classes
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>

              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Shield className="h-3 w-3 text-green-600" />
                <span>100% secure • No spam • Instant confirmation</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
