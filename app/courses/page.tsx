import type { Metadata } from "next"
import { CourseCard } from "@/components/course-card"
import { coursesData } from "@/lib/courses-data"
import { Button } from "@/components/ui/button"
import { BookOpen } from "lucide-react"
import CtaSection from "@/components/CtaSection"

export const metadata: Metadata = {
  title: "All Courses - Voice of Holy Quran Academy",
  description:
    "Explore our comprehensive range of Quran and Arabic courses. From beginner Noorani Qaida to advanced Ijazah certification, find the perfect course for your Islamic education journey.",
  keywords: "Quran courses, Arabic language, Tajweed, Hifz, Ijazah, Islamic education, online Quran classes",
}

export default function CoursesPage() {
  const featuredCourses = coursesData.filter((course) =>
    ["Most Popular", "Best Seller", "Featured"].includes(course.badge || ""),
  )
  const otherCourses = coursesData.filter(
    (course) => !["Most Popular", "Best Seller", "Featured"].includes(course.badge || ""),
  )

  return (
      <main>
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-primary/5 via-secondary to-primary/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
                  All Courses
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Comprehensive Quran & Arabic Courses
                </h1>
                <p className="max-w-[960px] mx-auto text-muted-foreground md:text-xl text-center">
                  Choose from our wide range of Islamic education programs designed for students of all ages and levels.
                  Start your spiritual journey with expert guidance and authentic teaching methods.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Courses */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Courses</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Our most popular and highly-rated courses chosen by thousands of students worldwide.
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </section>

        {/* All Courses */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">All Available Courses</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Explore our complete catalog of Islamic education courses and find the perfect fit for your learning
                  goals.
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {coursesData.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CtaSection />
      </main>
  )
}
