"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import { coursesData } from "@/lib/courses-data";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.webp"
                alt="Voice Of Holy Quran"
                width={120}
                height={60}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium hover:text-primary transition-colors py-2"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-primary transition-colors py-2"
            >
              About
            </Link>
            <div className="relative group py-2">
              <Link
                href="/courses"
                className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors"
              >
                Courses
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </Link>
              <div className="absolute left-0 top-full hidden w-[250px] flex-col rounded-md border bg-background p-2 shadow-md group-hover:flex animate-fade-in-up">
                {coursesData.map((course) => (
                  <Link
                    key={course.id}
                    href={`/courses/${course.slug}`}
                    className="block rounded-sm px-3 py-2 text-sm hover:bg-muted transition-colors"
                  >
                    {course.title}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/fee"
              className="text-sm font-medium hover:text-primary transition-colors py-2"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-primary transition-colors py-2"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <Link href="/enroll">
            <Button className="hidden md:flex bg-primary hover:bg-primary/90">
              Start Free Trial
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
          </Button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMenu}
          />
          <div className="fixed min-h-[calc(100vh-4rem)] top-16 left-0 right-0 bg-background border-b shadow-lg animate-slide-down">
            <nav className="container py-6 space-y-4">
              <Link
                href="/"
                className="block text-lg font-medium hover:text-primary transition-colors py-2"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-lg font-medium hover:text-primary transition-colors py-2"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                href="/fee"
                className="block text-lg font-medium hover:text-primary transition-colors py-2"
                onClick={closeMenu}
              >
                Pricing Fee
              </Link>
              <div className="space-y-2 py-2">
                <Link
                  href="/courses"
                  className="flex items-center justify-between text-lg font-medium hover:text-primary transition-colors"
                  onClick={closeMenu}
                >
                  Courses
                </Link>
                <div className="pl-4 space-y-2 border-l-2 border-muted mt-2">
                  {coursesData.map((course) => (
                    <Link
                      key={course.id}
                      href={`/courses/${course.slug}`}
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors py-1"
                      onClick={closeMenu}
                    >
                      {course.title}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href="/contact"
                className="block text-lg font-medium hover:text-primary transition-colors py-2"
                onClick={closeMenu}
              >
                Contact
              </Link>
            </nav>

            <Link href="/enroll" className="pt-2 mt-6 border-t">
              <Button
                className="w-full bg-primary hover:bg-primary/90"
                onClick={closeMenu}
              >
                Start Free Trial
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
