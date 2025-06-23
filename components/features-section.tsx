import { Shield, Users, UserCheck, Award, Video, Clock, Zap, Globe } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Shield,
      title: "3 Days Risk-Free Trial",
      description: "Experience our teaching quality with no commitment. Full satisfaction guaranteed.",
    },
    {
      icon: Users,
      title: "One-on-One Classes",
      description: "Personalized attention with dedicated tutors for accelerated learning progress.",
    },
    {
      icon: UserCheck,
      title: "Female Quran Tutors",
      description: "Qualified female teachers available for comfortable learning environment.",
    },
    {
      icon: Award,
      title: "Certified Tutors",
      description: "Learn from qualified teachers with authentic Ijazah certification.",
    },
    {
      icon: Video,
      title: "Interactive Learning",
      description: "Modern platform with interactive tools and engaging learning resources.",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Choose class times that perfectly fit your family's busy schedule.",
    },
    {
      icon: Zap,
      title: "Affordable Monthly Plans",
      description: "Quality education at competitive rates with flexible payment options.",
    },
    {
      icon: Globe,
      title: "17+ Years Experience",
      description: "Trusted international institute serving students across the globe.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white" id="about">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-in-up">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
              Why Choose Us
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Trusted by Muslim Families Worldwide</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Experience authentic Quran education with our certified tutors, flexible scheduling, and proven teaching
              methods that have transformed thousands of lives.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col justify-center space-y-4 text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 mx-auto group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <feature.icon className="h-8 w-8 text-primary group-hover:text-white" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-bold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
