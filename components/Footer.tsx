import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Facebook, Instagram } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/constants";
import { coursesData } from "@/lib/courses-data";

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-800 bg-gradient-to-b from-[#001948] to-[#000d26] text-slate-300 pt-12 md:pt-16 pb-6 md:pb-8">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 sm:grid-cols-2 md:grid-cols-3">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-white/95 p-2 rounded-xl inline-block shadow-lg">
                <Image
                  src="/logo.webp"
                  alt="Voice Of Holy Quran"
                  width={140}
                  height={70}
                />
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Providing authentic Islamic education with over 10 years of experience. We are dedicated to helping Muslim families worldwide connect with the Holy Quran.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white tracking-tight">Explore</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/" className="text-slate-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="text-slate-400 hover:text-white transition-colors">
                    Our Courses
                  </Link>
                </li>
                <li>
                  <Link href="/fee" className="text-slate-400 hover:text-white transition-colors">
                    Fee Structure
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white tracking-tight">Courses</h3>
              <ul className="space-y-3 text-sm">
                {coursesData.map((course) => (
                  <li key={course.id}>
                    <Link href={`/courses/${course.slug}`} className="text-slate-400 hover:text-white transition-colors">
                      {course.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white tracking-tight">Contact Us</h3>
            <div className="space-y-4 text-sm">
              <Link 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20 text-white transition-colors">
                  <MessageCircle className="h-4 w-4" />
                </div>
                <span>+92 335 6438721</span>
              </Link>
            </div>
            
            <div className="pt-4">
              <h3 className="text-lg font-bold text-white tracking-tight mb-4">Follow Us</h3>
              <div className="flex items-center gap-4">
                <Link 
                  href="https://www.facebook.com/voiceholyquran" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-[#1877F2] text-white transition-all duration-300 hover:scale-110 shadow-sm"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
                <Link 
                  href="https://www.instagram.com/quranvoiceofholy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] text-white transition-all duration-300 hover:scale-110 shadow-sm"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>
            © {new Date().getFullYear()} Voice of Holy Quran Academy. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
