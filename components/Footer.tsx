import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-primary text-white py-12">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.webp"
                alt="Voice Of Holy Quran"
                width={120}
                height={60}
              />
            </div>
            <p className="text-sm text-primary-foreground/80">
              Authentic Islamic education with 10+ years of experience serving
              Muslim families worldwide.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg text-[#001948] font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:underline transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/fee"
                  className="hover:underline transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="hover:underline transition-colors"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:underline transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg text-[#001948] font-semibold">Popular Courses</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/courses/quran-recitation-tajweed" className="hover:underline transition-colors">
                  Quran Recitation
                </Link>
              </li>
              <li>
                <Link href="/courses/tajweed-mastery-course" className="hover:underline transition-colors">
                  Tajweed Mastery
                </Link>
              </li>
              <li>
                <Link href="/courses/quran-memorization-hifz" className="hover:underline transition-colors">
                  Quran Memorization
                </Link>
              </li>
              <li>
                <Link href="/courses/arabic-language-course" className="hover:underline transition-colors">
                  Arabic Language
                </Link>
              </li>
              <li>
                <Link href="/courses/online-ijazah-course" className="hover:underline transition-colors">
                  Online Ijazah
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg text-[#001948] font-semibold">Connect</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="flex items-center hover:underline transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center hover:underline transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="flex items-center hover:underline transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                  Twitter
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-sm">
          <p>
            © {new Date().getFullYear()} Voice of Holy Quran Academy. All rights
            reserved. | Serving Muslim families worldwide with authentic Islamic
            education.
          </p>
        </div>
      </div>
    </footer>
  );
}
