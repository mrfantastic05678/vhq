import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { Award, BookOpen, Users, Globe } from "lucide-react"

export function AboutTeamSection() {
  const teamMembers = [
    {
      name: "Sheikh Dr. Muhammad Al-Hafiz",
      role: "Founder & Chief Academic Officer",
      image: "/placeholder.svg?height=300&width=300",
      qualifications: ["PhD Islamic Studies", "Ijazah in 10 Qira'at", "25+ Years Experience"],
      specialties: ["Quran Recitation", "Tajweed", "Ijazah Certification"],
      description:
        "Our visionary founder who established the academy with a dream to make authentic Quran education accessible worldwide.",
    },
    {
      name: "Dr. Fatima Al-Zahra",
      role: "Head of Arabic Language Department",
      image: "/placeholder.svg?height=300&width=300",
      qualifications: ["PhD Arabic Literature", "MA Islamic Studies", "15+ Years Experience"],
      specialties: ["Arabic Grammar", "Quranic Arabic", "Classical Literature"],
      description:
        "Leading expert in Arabic language education with a passion for helping students understand the Quran in its original language.",
    },
    {
      name: "Qari Yusuf Al-Baghdadi",
      role: "Senior Tajweed Instructor",
      image: "/placeholder.svg?height=300&width=300",
      qualifications: ["International Qira'at Champion", "Ijazah in 7 Qira'at", "20+ Years Experience"],
      specialties: ["Advanced Tajweed", "Voice Training", "Competition Preparation"],
      description:
        "Renowned Qari with multiple international awards, specializing in perfecting the art of Quranic recitation.",
    },
    {
      name: "Hafiz Dr. Ahmad Ali",
      role: "Director of Hifz Program",
      image: "/placeholder.svg?height=300&width=300",
      qualifications: ["Hafiz-e-Quran", "PhD Education", "18+ Years Experience"],
      specialties: ["Quran Memorization", "Memory Techniques", "Student Psychology"],
      description:
        "Expert in Quran memorization with innovative teaching methods that have helped thousands complete their Hifz journey.",
    },
  ]

  const departments = [
    {
      icon: BookOpen,
      name: "Academic Excellence",
      description: "50+ certified instructors with authentic Islamic qualifications",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: Users,
      name: "Student Support",
      description: "Dedicated team ensuring every student receives personalized attention",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: Globe,
      name: "Global Operations",
      description: "24/7 support team serving students across different time zones",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      icon: Award,
      name: "Quality Assurance",
      description: "Continuous monitoring and improvement of teaching standards",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-secondary to-primary/5">
      <div className="container px-4 md:px-6">
        {/* Leadership Team */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 animate-fade-in-up">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
              Our Leadership
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Meet Our Expert Team</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Our academy is led by renowned Islamic scholars and educators who bring decades of experience and
              authentic knowledge.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mb-16 animate-fade-in-up animation-delay-200">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
              <CardContent className="p-0">
                <div className="relative h-64 overflow-hidden">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-sm opacity-90">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{member.description}</p>

                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Qualifications:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.qualifications.map((qual, qualIndex) => (
                          <Badge key={qualIndex} variant="outline" className="text-xs">
                            {qual}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm mb-2">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, specIndex) => (
                          <Badge key={specIndex} className="text-xs bg-primary/10 text-primary hover:bg-primary/20">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Departments */}
        <div className="animate-fade-in-up animation-delay-400">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Our Departments</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Each department works together to ensure the highest quality of Islamic education and student experience.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {departments.map((dept, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl ${dept.bgColor} mx-auto mb-4`}
                  >
                    <dept.icon className={`h-8 w-8 ${dept.color}`} />
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{dept.name}</h4>
                  <p className="text-sm text-muted-foreground">{dept.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Join Our Team CTA */}
        <div className="mt-16 text-center animate-fade-in-up animation-delay-600">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold mb-4">Join Our Teaching Team</h3>
              <p className="text-muted-foreground mb-6">
                Are you a qualified Islamic educator passionate about teaching? We're always looking for dedicated
                teachers to join our global team and help spread authentic Islamic knowledge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                  View Open Positions
                </button>
                <button className="px-6 py-2 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors">
                  Submit Your CV
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
