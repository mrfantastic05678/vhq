"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

export function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isMobile, setIsMobile] = useState(false)

  const testimonials = [
    {
      quote:
        "My daughter has improved tremendously in her Quran recitation. The female tutor is patient and knowledgeable. Highly recommended!",
      name: "Fatima Ahmed",
      role: "Parent from London, UK",
      rating: 5,
    },
    {
      quote:
        "The flexible scheduling works perfectly with our busy family life. My son loves his classes and looks forward to them every week.",
      name: "Omar Hassan",
      role: "Parent from Sydney, Australia",
      rating: 5,
    },
    {
      quote:
        "Excellent teaching methodology. My children have memorized several Surahs and their Tajweed has improved significantly.",
      name: "Aisha Khan",
      role: "Parent from New York, USA",
      rating: 5,
    },
    {
      quote:
        "The online platform is user-friendly and the tutors are very professional. My son's Arabic pronunciation has improved dramatically.",
      name: "Abdullah Rahman",
      role: "Parent from Toronto, Canada",
      rating: 5,
    },
    {
      quote:
        "Amazing experience! The Ijazah program is authentic and the scholars are highly qualified. Worth every penny.",
      name: "Khadija Ali",
      role: "Parent from Birmingham, UK",
      rating: 5,
    },
    {
      quote:
        "My twins are learning Noorani Qaida and they absolutely love their classes. The interactive approach keeps them engaged.",
      name: "Sarah Mohammad",
      role: "Parent from Melbourne, Australia",
      rating: 5,
    },
  ]

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const itemsPerSlide = isMobile ? 1 : 3
  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, totalSlides])

  const getVisibleTestimonials = () => {
    const start = currentSlide * itemsPerSlide
    return testimonials.slice(start, start + itemsPerSlide)
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-in-up">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
              Testimonials
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl">What Parents Say About Us</h2>
            <p className="max-w-[900px] text-muted-foreground text-base md:text-xl px-4">
              Hear from Muslim families who have transformed their children's Quran learning journey with our academy.
            </p>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto py-8 md:py-12">
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-6 md:mb-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full border-primary/20 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 h-8 w-8 md:h-10 md:w-10"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <ChevronLeft className="h-3 w-3 md:h-4 md:w-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-1.5 md:gap-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? "bg-primary scale-125" : "bg-primary/30 hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full border-primary/20 hover:border-primary hover:bg-primary hover:text-white transition-all duration-300 h-8 w-8 md:h-10 md:w-10"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <ChevronRight className="h-3 w-3 md:h-4 md:w-4" />
            </Button>
          </div>

          {/* Testimonials Slider */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div
                    className={`grid gap-4 md:gap-6 px-2 md:px-4 ${
                      isMobile ? "grid-cols-1" : "md:grid-cols-2 lg:grid-cols-3"
                    }`}
                  >
                    {testimonials
                      .slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide)
                      .map((testimonial, index) => (
                        <Card
                          key={index}
                          className="bg-white hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in-up"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <CardContent className="pt-4 md:pt-6 p-4 md:p-6">
                            <div className="space-y-3 md:space-y-4">
                              <div className="flex items-center gap-1 justify-center md:justify-start">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <Star key={i} className="h-3 w-3 md:h-4 md:w-4 fill-yellow-400 text-yellow-400" />
                                ))}
                              </div>
                              <p className="italic text-muted-foreground text-sm md:text-base text-center md:text-left leading-relaxed">
                                "{testimonial.quote}"
                              </p>
                              <div className="text-center md:text-left">
                                <h4 className="font-semibold text-foreground text-sm md:text-base">
                                  {testimonial.name}
                                </h4>
                                <p className="text-xs md:text-sm text-muted-foreground">{testimonial.role}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress Bar */}
          {/* <div className="mt-6 md:mt-8 w-full bg-primary/10 rounded-full h-1">
            <div
              className="bg-primary h-1 rounded-full transition-all duration-300"
              style={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
            />
          </div> */}
          
        </div>
      </div>
    </section>
  )
}
