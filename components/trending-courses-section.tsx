import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { coursesData } from "@/lib/courses-data";
import { CourseCard } from "./course-card";

export function TrendingCoursesSection() {
  const featuredCourse = {
    id: "quran-recitation-tajweed",
    title: "Quran Recitation with Tajweed Mastery",
    description:
      "Master the art of beautiful Quran recitation with proper Tajweed rules. Learn from certified Qaris with years of experience in teaching students worldwide. This comprehensive course covers all aspects of Quranic recitation.",
    image: "/images/1.png",
    rating: 4.9,
    level: "All Levels",
    slug: "quran-recitation-tajweed",
    features: [
      "One-on-one live classes",
      "Certified Qari instructors",
      "Flexible scheduling",
      "Progress tracking",
      "Certificate upon completion",
    ],
  };

  // const courses = [
  //   {
  //     title: "Quran Memorization (Hifz)",
  //     instructor: "Hafiz Dr. Ahmad Ali",
  //     description: "Systematic Hifz program with proven memorization techniques and regular revision schedules.",
  //     image: "/placeholder.svg?height=200&width=300",
  //     rating: 4.8,
  //     students: 1800,
  //     badges: ["Best Seller", "20% Off"],
  //     slug: "quran-memorization-hifz",
  //   },
  //   {
  //     title: "Arabic Language Course",
  //     instructor: "Dr. Fatima Al-Zahra",
  //     description: "Learn Arabic to understand Quran better. From basics to advanced conversation skills.",
  //     image: "/placeholder.svg?height=200&width=300",
  //     rating: 4.7,
  //     students: 1200,
  //     badges: ["Best Seller", "30% Off"],
  //     slug: "arabic-language-course",
  //   },
  //   {
  //     title: "Online Ijazah Certification",
  //     instructor: "Sheikh Dr. Abdullah",
  //     description: "Get certified with Ijazah in Quran recitation from qualified scholars with authentic chains.",
  //     image: "/placeholder.svg?height=200&width=300",
  //     rating: 4.9,
  //     students: 950,
  //     badges: ["Best Seller", "25% Off"],
  //     slug: "online-ijazah-course",
  //   },
  //   {
  //     title: "Noorani Qaida Course",
  //     instructor: "Ustadha Aisha Rahman",
  //     description: "Perfect foundation course for beginners to learn Arabic letters and basic reading skills.",
  //     image: "/placeholder.svg?height=200&width=300",
  //     rating: 4.9,
  //     students: 2100,
  //     badges: ["Best Seller", "15% Off"],
  //     slug: "noorani-qaida-course",
  //   },
  // ]

  const getBadgeColor = (badge: string) => {
    switch (badge) {
      case "Best Seller":
        return "bg-green-500";
      case "20% Off":
      case "25% Off":
      case "30% Off":
      case "15% Off":
        return "bg-purple-500";
      default:
        return "bg-primary";
    }
  };

  return (
    <section
      className="w-full py-12 md:py-24 lg:py-32 bg-secondary"
      id="courses"
    >
      <div className="container px-4 md:px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tighter mb-2">
            Trending Courses
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Featured Course - Large Card */}
          <div className="lg:col-span-1">
            <CourseCard
              key={featuredCourse.id}
              course={featuredCourse}
              variant="featured"
            />
          </div>

          {/* Other Courses - 2x2 Grid */}
          <div className="lg:col-span-2 grid gap-4 sm:grid-cols-2">
            {/* {courses.map((course, index) => (
              <Card
                key={index}
                className="bg-white hover:shadow-lg transition-all duration-300 hover:scale-105 group overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="relative h-32 overflow-hidden">
                    <Image
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      {course.badges.map((badge, badgeIndex) => (
                        <span
                          key={badgeIndex}
                          className={`${getBadgeColor(badge)} text-white px-2 py-1 rounded-full text-xs font-medium`}
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold mb-1 line-clamp-2 text-lg">{course.title}</h4>
                    <p className="text-sm text-primary mb-2">by {course.instructor}</p>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{course.description}</p>
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-xs ml-1">({course.students.toLocaleString()})</span>
                    </div>
                    <div className="text-sm font-medium text-primary">Monthly Plans Available</div>
                  </div>
                </CardContent>
              </Card>
            ))} */}

            {/* <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"> */}
            {coursesData.slice(1, 5).map((course) => (
              <CourseCard key={course.id} course={course} variant="compact" />
            ))}
            {/* </div> */}
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <Link href="/courses">
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              View All Courses
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
