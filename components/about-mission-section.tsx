import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Compass } from "lucide-react"

export function AboutMissionSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-secondary to-primary/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 animate-fade-in-up">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
              Our Purpose
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Mission, Vision & Values</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Discover what drives us every day to provide exceptional Islamic education to Muslim families worldwide.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 animate-fade-in-up animation-delay-200">
          {/* Mission */}
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To provide authentic, accessible, and high-quality Islamic education that nurtures spiritual growth,
                builds strong character, and empowers Muslims worldwide to connect deeply with the Holy Quran and their
                faith, regardless of age, location, or background.
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 hover:shadow-lg transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                  <Eye className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To become the world's most trusted and beloved Islamic education platform, creating a global community
                of confident Quran reciters, knowledgeable Muslims, and spiritually enriched individuals who carry the
                light of Islamic teachings to every corner of the world.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values */}
        <div className="mt-12 animate-fade-in-up animation-delay-400">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
              <Compass className="h-6 w-6 text-primary" />
              Our Core Values
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These fundamental principles guide every decision we make and every interaction we have with our students
              and families.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 mx-auto mb-4">
                  <span className="text-2xl">🤲</span>
                </div>
                <h4 className="font-semibold mb-2">Authenticity</h4>
                <p className="text-sm text-muted-foreground">
                  Teaching with genuine Islamic principles and authentic scholarly traditions
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 mx-auto mb-4">
                  <span className="text-2xl">💝</span>
                </div>
                <h4 className="font-semibold mb-2">Compassion</h4>
                <p className="text-sm text-muted-foreground">
                  Treating every student with patience, kindness, and understanding
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100 mx-auto mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <h4 className="font-semibold mb-2">Excellence</h4>
                <p className="text-sm text-muted-foreground">
                  Striving for the highest standards in education and student experience
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 mx-auto mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h4 className="font-semibold mb-2">Inclusivity</h4>
                <p className="text-sm text-muted-foreground">
                  Welcoming students from all backgrounds and making education accessible to all
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
