import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Heart, Star, Users } from "lucide-react"

export function AboutStorySection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
                Our Story
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                A Journey That Started With a Simple Dream
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  In 2007, our founder, a passionate Islamic scholar and educator, recognized the growing need for
                  authentic Quran education that could reach Muslim families regardless of their geographical location.
                  What began as a small initiative to teach neighborhood children has blossomed into a global academy
                  serving thousands of students worldwide.
                </p>
                <p>
                  Our journey has been guided by the principle that every Muslim child and adult deserves access to
                  quality Islamic education. We've witnessed countless transformations - from hesitant beginners to
                  confident reciters, from struggling readers to fluent Arabic speakers, and from curious learners to
                  devoted scholars.
                </p>
                <p>
                  Today, Voice of Holy Quran Academy stands as a testament to what dedication, authentic teaching, and
                  genuine care for students can achieve. We're not just an online academy; we're a family committed to
                  nurturing the spiritual growth of our global Muslim community.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 animate-fade-in-up animation-delay-200">
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Founded on Faith</h3>
                    <p className="text-sm text-muted-foreground">
                      Established in 2007 with the vision of making authentic Quran education accessible to all Muslims,
                      regardless of location or background.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100">
                    <Heart className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Built with Love</h3>
                    <p className="text-sm text-muted-foreground">
                      Every aspect of our academy reflects our deep love for the Quran and genuine care for our
                      students' spiritual and educational journey.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-yellow-50 to-orange-50 border-yellow-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100">
                    <Star className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Proven Excellence</h3>
                    <p className="text-sm text-muted-foreground">
                      10+ years of consistent excellence, with thousands of successful graduates who have gone on to
                      become teachers, scholars, and community leaders.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Global Community</h3>
                    <p className="text-sm text-muted-foreground">
                      A thriving community of students, parents, and educators from over 50 countries, united by our
                      shared commitment to Islamic education.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
