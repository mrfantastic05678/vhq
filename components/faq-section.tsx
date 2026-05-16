import { Card, CardContent } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"

export function FAQSection() {
  const faqs = [
    {
      question: "Are your tutors qualified and certified?",
      answer:
        "Yes, all our tutors are certified with Ijazah in Quran recitation and have extensive teaching experience. They undergo a rigorous selection process and regular training to maintain high teaching standards.",
    },
    {
      question: "Can I choose a female tutor for my daughter?",
      answer:
        "We have qualified female Quran tutors available for female students. You can specify your preference when booking classes, and we'll match you with an appropriate tutor.",
    },
    {
      question: "What technology do I need for online classes?",
      answer:
        "You need a computer, tablet, or smartphone with a stable internet connection, webcam, and microphone. We use user-friendly platforms that work on all devices. Our support team can help you set up if needed.",
    },
    {
      question: "How flexible is the scheduling?",
      answer:
        "Very flexible! You can choose class times that work for your family's schedule. We offer classes 7 days a week with various time slots to accommodate different time zones (US, UK, Australia).",
    },
    {
      question: "What are your monthly fee structures?",
      answer:
        "We offer various monthly plans based on the number of classes per week, course type, and duration. Our fees are very competitive and we provide flexible payment options. Contact us for detailed pricing information.",
    },
    {
      question: "Do you provide certificates upon completion?",
      answer:
        "Yes, we provide certificates of completion for all our courses. For advanced students, we also offer Ijazah certification in Quran recitation from qualified scholars with authentic chains of transmission.",
    },
    {
      question: "What if my child misses a class?",
      answer:
        "We understand that schedules can change. You can reschedule classes with 24-hour notice. We also provide makeup classes for missed sessions to ensure continuous learning progress.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-in-up">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">FAQ</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Frequently Asked Questions</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Find answers to common questions about Voice of Holy Quran Academy.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl py-12 animate-fade-in-up animation-delay-200">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-white hover:shadow-md transition-all duration-300">
                <CardContent className="p-6">
                  <details className="group">
                    <summary className="flex items-center justify-between cursor-pointer list-none">
                      <h3 className="font-semibold">{faq.question}</h3>
                      <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
                    </summary>
                    <p className="mt-4 text-muted-foreground">{faq.answer}</p>
                  </details>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
