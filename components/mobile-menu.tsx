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
                priority={true}
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

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden h-12 w-12 hover:bg-muted/50 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-10 w-10 text-primary" strokeWidth={2.5} />
            ) : (
              <Menu className="h-10 w-10 text-primary" strokeWidth={2.5} />
            )}
          </Button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
            onClick={closeMenu}
          />
          <div className="fixed top-16 left-0 right-0 bg-background border-b shadow-2xl animate-slide-down max-h-[calc(100vh-4rem)] overflow-y-auto rounded-b-3xl overscroll-contain">
            <nav className="container px-6 py-8 space-y-2">
              <Link
                href="/"
                className="block text-xl font-semibold hover:text-primary transition-colors py-3 border-b border-muted/50"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block text-xl font-semibold hover:text-primary transition-colors py-3 border-b border-muted/50"
                onClick={closeMenu}
              >
                About Us
              </Link>
              <div className="py-4 border-b border-muted/50">
                <Link
                  href="/courses"
                  className="flex items-center justify-between text-xl font-semibold hover:text-primary transition-colors mb-4"
                  onClick={closeMenu}
                >
                  Our Courses
                </Link>
                <div className="grid grid-cols-1 gap-3 pl-4 border-l-2 border-primary/20">
                  {coursesData.map((course) => (
                    <Link
                      key={course.id}
                      href={`/courses/${course.slug}`}
                      className="block text-base text-muted-foreground hover:text-primary transition-colors py-1.5"
                      onClick={closeMenu}
                    >
                      {course.title}
                    </Link>
                  ))}
                </div>
              </div>
              <Link
                href="/fee"
                className="block text-xl font-semibold hover:text-primary transition-colors py-3 border-b border-muted/50"
                onClick={closeMenu}
              >
                Fee Structure
              </Link>
              <Link
                href="/contact"
                className="block text-xl font-semibold hover:text-primary transition-colors py-3"
                onClick={closeMenu}
              >
                Contact
              </Link>
              
              <div className="pt-6 pb-4">
                <Link href="/enroll" onClick={closeMenu}>
                  <Button className="w-full h-14 text-lg font-bold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 rounded-xl">
                    Get Free Trial Classes
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
