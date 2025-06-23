"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";

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
            <Image
              src="/logo.webp"
              alt="Voice Of Holy Quran"
              width={120}
              height={60}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6">
            <Link
              href="/"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/courses"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Courses
            </Link>
            <Link
              href="/fee"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-primary transition-colors"
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
          <div className="fixed top-16 left-0 right-0 bg-background border-b shadow-lg animate-slide-down">
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
              <Link
                href="/courses"
                className="block text-lg font-medium hover:text-primary transition-colors py-2"
                onClick={closeMenu}
              >
                Courses
              </Link>
              <Link
                href="/contact"
                className="block text-lg font-medium hover:text-primary transition-colors py-2"
                onClick={closeMenu}
              >
                Contact
              </Link>

              <Link href="/enroll" className="pt-8 mt-6 border-t">
                <Button
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={closeMenu}
                >
                  Start Free Trial
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
