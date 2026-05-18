import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Users, Clock, Award, CheckCircle } from "lucide-react";

interface CourseCardProps {
  course: {
    id: string;
    title: string;
    description: string;
    image: string;
    rating: number;
    students?: number;
    reviews?: number;
    duration?: string;
    level: string;
    badge?: string;
    badgeColor?: string;
    features: string[];
    slug: string;
  };
  variant?: "default" | "featured" | "compact";
  showCTA?: boolean;
}

export function CourseCard({
  course,
  variant = "default",
  showCTA = true,
}: CourseCardProps) {
  const badgeColors = {
    "Most Popular": "bg-green-500",
    Featured: "bg-red-500",
    Premium: "bg-purple-500",
    Beginner: "bg-blue-500",
    Advanced: "bg-orange-500",
    Trending: "bg-pink-500",
    "Best Seller": "bg-emerald-500",
  };

  if (variant === "featured") {
    return (
      <Card className="h-full bg-gradient-to-br from-gray-900 to-gray-800 text-white hover:shadow-2xl transition-all duration-300 hover:scale-105 group overflow-hidden">
        <CardContent className="p-0 h-full flex flex-col">
          <div className="relative h-48 overflow-hidden rounded-t-lg">
            <Image
              src={course.image || "/placeholder.svg"}
              alt={course.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              {course.badge && (
                <span
                  className={`${
                    badgeColors[course.badge as keyof typeof badgeColors] ||
                    "bg-primary"
                  } text-white px-3 py-1 rounded-full text-xs font-medium`}
                >
                  {course.badge}
                </span>
              )}
            </div>
          </div>
          <div className="p-6 flex-1 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-3">{course.title}</h3>
              <p className="text-primary-foreground/90 mb-4 line-clamp-3">
                {course.description}
              </p>
              <h3 className="font-semibold mb-4">This course includes:</h3>
              <ul className="space-y-2">
                {course.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    {course.rating && (
                      <span className="text-yellow-400 font-semibold ml-1">
                        {course.rating.toFixed(1)} {course.reviews && <span className="text-muted-foreground text-xs font-normal">({course.reviews} reviews)</span>}
                      </span>
                    )}
                  </div>

                  {course.students && (
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{course.students.toLocaleString()} students</span>
                    </div>
                  )}

                  {course.level && (
                    <div className="flex items-center gap-1">
                      <Award className="h-4 w-4" />
                      <span>{course.level}</span>
                    </div>
                  )}

                  {course.duration && (
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                  )}
                </div>

                {showCTA && (
                <div className="flex flex-col gap-2">
                  <Link href={`/enroll?course=${course.slug}`}>
                    <Button className="w-full bg-primary/50 text-white hover:bg-white/90 hover:text-primary shadow-lg hover:shadow-xl transition-all duration-300">
                      Enroll Now
                    </Button>
                  </Link>
                  <Link href={`/courses/${course.slug}`}>
                    <Button
                      variant="outline"
                      className="w-full border-primary bg-black/40 text-white hover:bg-white hover:text-primary transition-all duration-300"
                    >
                      Learn More
                    </Button>
                  </Link>
                </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (variant === "compact") {
    return (
      <Card className="bg-white hover:shadow-lg transition-all duration-300 hover:scale-105 group">
        <CardContent className="p-0">
          <Link href={`/courses/${course.slug}`}>
            <div className="flex flex-col gap-4 p-4">
              <div className="relative w-full h-36 flex-shrink-0 overflow-hidden rounded-lg">
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex gap-2 mb-2">
                  {course.badge && (
                    <span
                      className={`${
                        badgeColors[course.badge as keyof typeof badgeColors] ||
                        "bg-primary"
                      } text-white px-2 py-1 rounded-full text-xs font-medium`}
                    >
                      {course.badge}
                    </span>
                  )}
                </div>
                <h4 className="font-bold mb-1 line-clamp-1">{course.title}</h4>
                <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                  {course.description}
                </p>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-3 w-3 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  {course.reviews && (
                    <span className="text-xs ml-1 text-muted-foreground">
                      ({course.reviews})
                    </span>
                  )}
                </div>
              </div>
            </div>
          </Link>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white hover:shadow-lg transition-all duration-300 hover:scale-105 group h-full">
      <CardContent className="p-0 h-full flex flex-col">
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <Image
            src={course.image || "/placeholder.svg"}
            alt={course.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            {course.badge && (
              <span
                className={`${
                  badgeColors[course.badge as keyof typeof badgeColors] ||
                  "bg-primary"
                } text-white px-2 py-1 rounded-full text-xs font-medium`}
              >
                {course.badge}
              </span>
            )}
          </div>
        </div>
        <div className="p-4 flex-1 flex flex-col justify-between">
          <div>
            <h4 className="font-bold mb-2 line-clamp-2">{course.title}</h4>
            <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
              {course.description}
            </p>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Users className="h-3 w-3" />
                {course.students && (
                  <span>{course.students.toLocaleString()} students</span>
                )}
              </div>
              <div className="flex items-center gap-1">
                <Award className="h-3 w-3" />
                <span>{course.level}</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-3 w-3 fill-yellow-400 text-yellow-400"
                />
              ))}
              {course.reviews && (
                <span className="text-xs ml-1 text-muted-foreground">
                  ({course.reviews} reviews)
                </span>
              )}
            </div>
            {/* <div className="text-sm font-medium text-primary">Monthly Plans Available</div> */}
            {showCTA && (
              <div className="flex flex-col gap-2">
                <Link href={`/enroll?course=${course.slug}`}>
                  <Button className="w-full bg-primary text-white hover:bg-primary/80 font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                    Enroll Now
                  </Button>
                </Link>
                <Link href={`/courses/${course.slug}`}>
                  <Button
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-blue-300 hover:text-primary transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
