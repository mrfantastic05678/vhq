import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, Award, GraduationCap, ArrowRight, Star } from "lucide-react"
import Link from "next/link"

export function StudentSuccessSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 animate-fade-in-up">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gradient-to-r from-emerald-100 to-teal-100 px-4 py-2 text-sm text-emerald-800 font-semibold border border-emerald-200">
              🏆 Student Success Stories
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
              Our Students Making Us Proud
            </h2>
            <p className="max-w-[900px] text-slate-600 text-base md:text-xl px-4">
              Join our Quran Academy to unlock your potential, achieve excellence, and become the next success story!
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto animate-fade-in-up animation-delay-200">
          {/* Success Story 1 */}
          <Card className="relative overflow-hidden bg-gradient-to-br from-white to-emerald-50 border-2 border-emerald-200 hover:border-emerald-300 hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-500"></div>
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="relative flex-shrink-0 mx-auto sm:mx-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white font-bold text-xl sm:text-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    MO
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <Trophy className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <div className="absolute -top-1 -left-1 flex">
                    {[...Array(3)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="font-bold text-lg sm:text-xl mb-2 text-slate-900">Muhammad Owais Shaikh</h3>
                  <div className="inline-block bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    🥇 National Winner
                  </div>
                  <p className="text-slate-700 text-sm sm:text-base mb-4 leading-relaxed">
                    Our talented student has made us proud by emerging as the{" "}
                    <span className="font-bold text-emerald-700 bg-emerald-100 px-2 py-1 rounded">
                      National Winner in the Australian Islamic Quiz Competition!
                    </span>
                  </p>
                  <div className="flex items-center justify-center sm:justify-start gap-3 p-3 bg-gradient-to-r from-orange-50 to-yellow-50 rounded-lg border border-orange-200">
                    <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-orange-600 flex-shrink-0" />
                    <span className="text-orange-800 font-semibold text-sm">Australian Islamic Quiz Champion</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Success Story 2 */}
          <Card className="relative overflow-hidden bg-gradient-to-br from-white to-orange-50 border-2 border-orange-200 hover:border-orange-300 hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-red-500"></div>
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                <div className="relative flex-shrink-0 mx-auto sm:mx-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-white font-bold text-xl sm:text-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    AM
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                    <Award className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <div className="absolute -top-1 -left-1 flex">
                    {[...Array(3)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="font-bold text-lg sm:text-xl mb-2 text-slate-900">Alman Muhammad</h3>
                  <div className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    🥈 2nd Position Winner
                  </div>
                  <p className="text-slate-700 text-sm sm:text-base mb-4 leading-relaxed">
                    Our talented student made us proud by securing{" "}
                    <span className="font-bold text-orange-700 bg-orange-100 px-2 py-1 rounded">
                      2nd position in their school's Islamic Competition!
                    </span>
                  </p>
                  <div className="flex items-center justify-center sm:justify-start gap-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-blue-200">
                    <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-blue-800 font-semibold text-sm">School Islamic Competition</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center mt-8 lg:mt-12 animate-fade-in-up animation-delay-400">
          <Link href="/enroll">
            <Button className="bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-500 hover:from-emerald-600 hover:via-teal-600 hover:to-blue-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-110 px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold">
              Join Our Success Stories!
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
