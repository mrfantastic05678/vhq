import { CoursePricingSection } from "@/components/CoursePricing";
import CtaSection from "@/components/CtaSection";
import React from "react";

const FeePage = () => {
  return (
    <div className="min-h-screen">
      <CoursePricingSection />

      {/* CTA Section */}
      <CtaSection />
    </div>
  );
};

export default FeePage;
