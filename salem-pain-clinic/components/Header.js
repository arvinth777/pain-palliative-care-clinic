'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'FAQ', href: '/faq' },
  ];

  const isActive = (href) => pathname === href;

  return (
    <>
      {/* Floating Glassmorphism Navbar - Desktop */}
      <nav className="hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl rounded-2xl border border-white/20 bg-white/60 backdrop-blur-xl shadow-lg shadow-black/5 p-4 z-50">
        <div className="flex items-center justify-between w-full">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 flex-shrink-0">
              <img 
                src="/images/clinic-badge.png" 
                alt="Salem Pain Clinic" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-lg font-heading font-bold text-primary group-hover:text-primary-dark transition-colors duration-300">
              Salem Pain Clinic
            </span>
          </Link>

          {/* Center Navigation Links */}
          <div className="flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${isActive(item.href) 
                    ? 'bg-primary text-white shadow-md' 
                    : 'text-gray-600 hover:text-primary hover:bg-gray-100'
                  }
                `}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Section - Contact & CTA */}
          <div className="flex items-center gap-4">
            {/* Phone Numbers */}
            <div className="flex flex-col items-end space-y-0.5">
              <a 
                href="tel:+919095596999" 
                className="flex items-center text-xs font-semibold text-primary hover:text-primary-dark transition-colors group"
              >
                <Phone className="w-3 h-3 mr-1.5 group-hover:scale-110 transition-transform" />
                +91 9095596999
              </a>
              <a 
                href="tel:+919842798422" 
                className="flex items-center text-xs font-medium text-gray-500 hover:text-primary transition-colors group"
              >
                <Phone className="w-3 h-3 mr-1.5 group-hover:scale-110 transition-transform" />
                +91 9842798422
              </a>
            </div>

            {/* Book Appointment Button */}
            <Button asChild size="sm" className="rounded-full shadow-md">
              <Link href="/contact">
                Book Appointment
              </Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 w-full z-50 bg-white/60 backdrop-blur-xl border-b border-white/20 shadow-sm">
        <div className="container-custom">
          <div className="flex justify-between items-center py-3">
            {/* Mobile Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 flex-shrink-0">
                <img 
                  src="/images/clinic-badge.png" 
                  alt="Salem Pain Clinic" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-lg font-heading font-bold text-primary group-hover:text-primary-dark transition-colors duration-300">
                Salem Pain Clinic
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`transition-all duration-300 ease-in-out overflow-hidden ${
            mobileMenuOpen 
              ? 'max-h-screen opacity-100 visible pb-4' 
              : 'max-h-0 opacity-0 invisible'
          }`}>
            <div className="space-y-1 pt-4 border-t border-gray-200/40">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    block py-3 px-4 rounded-lg text-sm font-medium transition-all duration-200
                    ${isActive(item.href)
                      ? 'bg-primary text-white'
                      : 'text-gray-600 hover:text-primary hover:bg-gray-100'
                    }
                  `}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile CTA Button */}
              <Button asChild className="w-full mt-4">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                  Book Appointment
                </Link>
              </Button>
              
              {/* Mobile Phone Numbers */}
              <div className="mt-4 pt-4 border-t border-gray-200/40 space-y-2">
                <a 
                  href="tel:+919095596999" 
                  className="flex items-center py-2 px-4 text-primary font-semibold hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  +91 9095596999
                </a>
                <a 
                  href="tel:+919842798422" 
                  className="flex items-center py-2 px-4 text-gray-600 font-medium hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5 mr-3" />
                  +91 9842798422
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
