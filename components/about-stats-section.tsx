import { Card, CardContent } from "@/components/ui/card"
import { Users, Clock, Star, Heart } from "lucide-react"

export function AboutStatsSection() {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Students Taught",
      description: "Happy families worldwide",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    // {
    //   icon: Globe,
    //   number: "50+",
    //   label: "Countries Served",
    //   description: "Global reach and impact",
    //   color: "text-green-600",
    //   bgColor: "bg-green-100",
    // },
    {
      icon: Clock,
      number: "10+",
      label: "Years Experience",
      description: "Proven track record",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    // {
    //   icon: Award,
    //   number: "100+",
    //   label: "Certified Tutors",
    //   description: "Qualified instructors",
    //   color: "text-orange-600",
    //   bgColor: "bg-orange-100",
    // },
    // {
    //   icon: BookOpen,
    //   number: "8",
    //   label: "Course Categories",
    //   description: "Comprehensive curriculum",
    //   color: "text-indigo-600",
    //   bgColor: "bg-indigo-100",
    // },
    {
      icon: Star,
      number: "4.9/5",
      label: "Average Rating",
      description: "Student satisfaction",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
    },
    // {
    //   icon: GraduationCap,
    //   number: "5,000+",
    //   label: "Graduates",
    //   description: "Successful completions",
    //   color: "text-emerald-600",
    //   bgColor: "bg-emerald-100",
    // },
    {
      icon: Heart,
      number: "99%",
      label: "Retention Rate",
      description: "Student loyalty",
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 animate-fade-in-up">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
              Our Impact
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Numbers That Tell Our Story</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              These achievements reflect our commitment to excellence and the trust placed in us by Muslim families
              worldwide.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 animate-fade-in-up animation-delay-200">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 group">
              <CardContent className="p-6">
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl ${stat.bgColor} mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-foreground">{stat.number}</div>
                  <div className="font-semibold text-lg">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.description}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Context */}
        <div className="mt-12 text-center animate-fade-in-up animation-delay-400">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">What These Numbers Mean</h3>
              <p className="text-muted-foreground leading-relaxed">
                Behind every statistic is a story of transformation, growth, and spiritual enrichment. Our 500+
                students represent families who have chosen to prioritize Islamic education, and our 10+ years of experience demonstrate our
                unwavering commitment to excellence in Islamic education.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
