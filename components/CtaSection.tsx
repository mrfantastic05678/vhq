import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const CtaSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Ready to Start Your Journey?
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Join thousands of students who have transformed their Islamic
              education with our expert tutors and proven methods.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/enroll">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Start 3-Day Free Trial
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                Contact Our Advisors
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
