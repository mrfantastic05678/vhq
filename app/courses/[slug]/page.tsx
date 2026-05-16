import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CourseHero } from "@/components/course-hero";
import { CourseCard } from "@/components/course-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getCourseBySlug, getRelatedCourses, coursesData } from "@/lib/courses-data";
import {
  CheckCircle,
  Clock,
  Users,
  Award,
  Star,
  ArrowRight,
  Play,
  Globe,
  Shield,
} from "lucide-react";
import { CoursePricingSection } from "@/components/CoursePricing";

interface CoursePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return coursesData.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    return {
      title: "Course Not Found - Voice of Holy Quran Academy",
    };
  }

  return {
    title: `${course.title} - Voice of Holy Quran Academy`,
    description: course.description,
    keywords: `${course.title}, Quran course, Islamic education, online learning, ${course.level}, Voice of Holy Quran`,
    openGraph: {
      title: `${course.title} - Voice of Holy Quran Academy`,
      description: course.description,
      images: [course.image],
    },
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const relatedCourses = getRelatedCourses(course.id);

  return (
    <main>
      {/* Course Hero */}
      <CourseHero course={course} />

      {/* Course Details */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Course Overview */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Course Overview</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {course.description}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-secondary rounded-lg">
                    <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold">
                      {course.students.toLocaleString()}+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Students
                    </div>
                  </div>
                  <div className="text-center p-4 bg-secondary rounded-lg">
                    <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold">{course.duration}</div>
                    <div className="text-sm text-muted-foreground">
                      Duration
                    </div>
                  </div>
                  <div className="text-center p-4 bg-secondary rounded-lg">
                    <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold">{course.level}</div>
                    <div className="text-sm text-muted-foreground">Level</div>
                  </div>
                  <div className="text-center p-4 bg-secondary rounded-lg">
                    <Star className="h-8 w-8 text-primary mx-auto mb-2" />
                    <div className="font-semibold">{course.rating}/5</div>
                    <div className="text-sm text-muted-foreground">Rating</div>
                  </div>
                </div>
              </div>

              {/* Curriculum */}
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">Course Curriculum</h2>
                <div className="space-y-4">
                  {course.curriculum.map((module, index) => (
                    <Card key={index} className="border-l-4 border-l-primary">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-4">
                          {module.title}
                        </h3>
                        <ul className="space-y-2">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <li
                              key={lessonIndex}
                              className="flex items-start gap-3"
                            >
                              <Play className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                              <span>{lesson}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Prerequisites & Certification */}
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      Prerequisites
                    </h3>
                    <p className="text-muted-foreground">
                      {course.prerequisites}
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Award className="h-5 w-5 text-primary" />
                      Certification
                    </h3>
                    <p className="text-muted-foreground">
                      {course.certification}
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Instructor */}
              {/* <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4">Meet Your Instructor</h3>
                    <div className="flex items-start gap-4">
                      <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={course.instructor.image || "/placeholder.svg"}
                          alt={course.instructor.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">{course.instructor.name}</h4>
                        <p className="text-muted-foreground">{course.instructor.qualification}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card> */}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Enrollment Card */}
              <div className="sticky top-24 flex flex-col gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-primary mb-2">
                          Start Learning Today
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Join {course.students.toLocaleString()}+ students
                          already enrolled
                        </p>
                      </div>

                      <div className="space-y-3">
                        <Button className="w-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300">
                          Start Free Trial
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                        >
                          Contact Advisor
                        </Button>
                      </div>

                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Shield className="h-4 w-4 text-green-600" />
                          <span>Money-back guarantee</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Globe className="h-4 w-4 text-blue-600" />
                          <span>Learn from anywhere</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="h-4 w-4 text-primary" />
                          <span>Certificate upon completion</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Course Features */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4">
                      This course includes:
                    </h3>
                    <ul className="space-y-2">
                      {course.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-2 text-sm"
                        >
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Pricing */}
      <CoursePricingSection />

      {/* Related Courses */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Related Courses
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl">
                Continue your Islamic education journey with these complementary
                courses.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedCourses.map((relatedCourse) => (
              <CourseCard key={relatedCourse.id} course={relatedCourse} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
