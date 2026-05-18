import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function AboutHeroSection() {
  return (
    <section className="w-full py-12 md:py-26 bg-gradient-to-br from-primary/5 via-secondary to-primary/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container px-4 md:px-6 relative">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm text-primary font-semibold border border-primary/20">
                🕌 About Our Academy
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                <span className="py-1 transition-all duration-700 ease-in-out bg-gradient-to-r from-gray-900 via-primary to-accent bg-clip-text text-transparent animate-gradient-x">
                  Nurturing Hearts Through
                </span>
                <br />
                <span className="bg-gradient-to-b from-[#001948] to-primary bg-clip-text text-transparent">Authentic Quran Education</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl leading-relaxed">
                For over 17 years, Voice of Holy Quran Academy has been a beacon of authentic Islamic education, serving
                Muslim families across the globe with dedication, excellence, and unwavering commitment to the sacred
                teachings of the Quran.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border shadow-sm">
                <div className="text-2xl font-bold text-primary">10+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border shadow-sm">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Students Taught</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-lg p-4 border shadow-sm">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Countries Served</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/enroll">
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              </Link>
              <Link href="/courses">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
              >
                Our Courses
              </Button>
              </Link>
            </div>
          </div>

          <div className="relative animate-fade-in-up animation-delay-300">
            <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/Voice of Holy Quran.png"
                alt="Voice of Holy Quran Academy"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

              {/* Floating Elements */}
              <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-sm font-semibold">Certified Tutors</span>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5 text-blue-600" />
                  <span className="text-sm font-semibold">Global Community</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
