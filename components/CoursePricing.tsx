import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Users, Star, Gift, ArrowRight } from "lucide-react"
import PricingCards from "./PricingCards"

export function CoursePricingSection() {
  const pricingPlans = [
    {
      name: "Basic",
      classesPerWeek: 2,
      duration: "30 min",
      usaPrice: 30,
      ukPrice: 20,
      popular: false,
      description: "Perfect for beginners starting their Quran journey",
      features: [
        "2 classes per week",
        "30 minutes per class",
        "One-on-one instruction",
        "Flexible scheduling",
        "Progress tracking",
      ],
    },
    {
      name: "Essential",
      classesPerWeek: 3,
      duration: "30 min",
      usaPrice: 37,
      ukPrice: 25,
      popular: true,
      description: "Most popular choice for consistent learning",
      features: [
        "3 classes per week",
        "30 minutes per class",
        "One-on-one instruction",
        "Flexible scheduling",
        "Progress tracking",
        "Weekly assessments",
      ],
    },
    {
      name: "Standard",
      classesPerWeek: 4,
      duration: "30 min",
      usaPrice: 50,
      ukPrice: 35,
      popular: false,
      description: "Accelerated learning for dedicated students",
      features: [
        "4 classes per week",
        "30 minutes per class",
        "One-on-one instruction",
        "Flexible scheduling",
        "Progress tracking",
        "Weekly assessments",
        "Monthly progress reports",
      ],
    },
    {
      name: "Advanced",
      classesPerWeek: 5,
      duration: "30 min",
      usaPrice: 69,
      ukPrice: 45,
      popular: false,
      description: "Intensive program for serious learners",
      features: [
        "5 classes per week",
        "30 minutes per class",
        "One-on-one instruction",
        "Flexible scheduling",
        "Progress tracking",
        "Weekly assessments",
        "Monthly progress reports",
        "Priority support",
      ],
    },
        {
      name: "Hifz",
      classesPerWeek: 5,
      duration: "60 min",
      usaPrice: 100,
      ukPrice: 70,
      popular: false,
      premium: true,
      description: "Comprehensive memorization program",
      features: [
        "5 classes per week",
        "60 minutes per class",
        "Specialized Hifz curriculum",
        "Memory techniques training",
        "Regular revision schedule",
        "Progress monitoring",
        "Ijazah preparation",
      ],
    },
    {
      name: "Weekend",
      classesPerWeek: 2,
      duration: "30 min",
      usaPrice: 25,
      ukPrice: 17,
      popular: false,
      description: "Perfect for busy weekday schedules",
      features: [
        "2 weekend classes",
        "30 minutes per class",
        "Saturday & Sunday slots",
        "One-on-one instruction",
        "Flexible weekend timing",
      ],
    }
  ]

  const benefits = [
    {
      icon: Gift,
      title: "3 Free Trial Lessons",
      description: "Experience our teaching quality with no commitment",
    },
    {
      icon: Users,
      title: "Family Discounts",
      description: "10% discount for 2nd student, 4th person learns FREE",
    },
    {
      icon: CheckCircle,
      title: "Lowest Cost Guarantee",
      description: "Individual lessons as low as $20 (USA) / £15 (UK)",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Choose times that work for your family",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-primary/5 via-secondary to-primary/10">
      <div className="container px-4 md:px-6">
        {/* Header */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 animate-fade-in-up">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-4 py-2 text-sm text-primary font-semibold border border-primary/20">
              💰 Progressive Fee Structure
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl">Affordable Monthly Plans</h2>
            <p className="max-w-[900px] text-muted-foreground text-base md:text-xl px-4">
              Choose the perfect plan for your learning goals. All plans include one-on-one classes with certified
              tutors.
            </p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12 animate-fade-in-up animation-delay-200">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="bg-white/80 backdrop-blur-sm border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-4 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mx-auto mb-3">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm mb-2">{benefit.title}</h3>
                <p className="text-xs text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pricing Cards */}
        <PricingCards pricingPlans={pricingPlans} />

        {/* Additional Information */}
        <div className="mt-12 text-center animate-fade-in-up animation-delay-600">
          <Card className="bg-white/80 backdrop-blur-sm border-primary/20 max-w-4xl mx-auto">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center justify-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                Important Notes
              </h3>
              <div className="grid gap-4 md:grid-cols-2 text-sm text-muted-foreground">
                <div className="space-y-2">
                  <p className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Regular classes: 30 minutes duration
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Hifz classes: 60 minutes for in-depth learning
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    Monthly billing after trial satisfaction
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    No long-term contracts required
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
