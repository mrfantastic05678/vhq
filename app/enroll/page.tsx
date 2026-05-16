"use client";

import { Suspense } from "react";
import { LeadFormSection } from "@/components/lead-form-section";
import { FeaturesSection } from "@/components/features-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { FAQSection } from "@/components/faq-section";

function EnrollPageContent() {
  return (
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <LeadFormSection />
      </Suspense>
      <FeaturesSection />
      <TestimonialsSection />
      <FAQSection />
    </main>
  );
}

export default function EnrollPage() {
  return <EnrollPageContent />;
}
