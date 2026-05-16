"use client";

import { Button } from "@/components/ui/button"
import { Clock, Shield, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { WHATSAPP_URL } from "@/lib/constants"
import { trackConversion } from "@/lib/gtm"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      firstName: formData.get("first-name") as string,
      lastName: formData.get("last-name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
      website_url: formData.get("website_url") as string, // Honeypot
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setIsSubmitted(true);
      trackConversion();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Failed to send message.";
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary" id="contact">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 animate-fade-in-up">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
                Get in Touch
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Contact Our Academy</h2>
              <p className="text-muted-foreground md:text-xl">
                Have questions about our courses or need help getting started? Our friendly support team is here to help
                you and your family begin this blessed journey.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-5 w-5 text-primary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                    />
                  </svg>
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium">WhatsApp Us</h3>
                  <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <span className="text-sm text-muted-foreground">+92 335 6438721</span>
                  </Link>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium">Support Hours</h3>
                  <p className="text-sm text-muted-foreground">24/7 Online Support Available</p>
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-xl border bg-white/80 backdrop-blur-sm p-6 shadow-xl">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center space-y-4 py-8">
                <CheckCircle className="h-12 w-12 text-green-600" />
                <h3 className="text-2xl font-bold">Message Sent!</h3>
                <p className="text-muted-foreground">
                  Thank you for reaching out. Our support team will get back to you within 24 hours.
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  variant="outline"
                  className="mt-4"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold">Send us a Message</h3>
                <p className="text-sm text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
                {error && (
                  <div className="mt-4 p-3 bg-red-50 text-red-600 text-sm rounded-md border border-red-200">
                    {error}
                  </div>
                )}
                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {/* Honeypot field - visually hidden to catch bots */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website_url">Website URL</label>
                    <input
                      type="text"
                      id="website_url"
                      name="website_url"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium">
                        First name *
                      </label>
                      <input
                        id="first-name"
                        name="first-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium">
                        Last name
                      </label>
                      <input
                        id="last-name"
                        name="last-name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all"
                    >
                      <option value="">Select a topic</option>
                      <option value="trial">Free Trial Booking</option>
                      <option value="courses">Course Information</option>
                      <option value="pricing">Monthly Plans & Pricing</option>
                      <option value="technical">Technical Support</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all"
                      placeholder="Tell us how we can help you"
                      required
                    />
                  </div>
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
