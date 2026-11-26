'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Search,
  ChevronDown,
  Menu,
  X,
  Phone,
  ArrowRight,
  Heart,
  BookOpen,
  HelpCircle,
  Clock,
  MapPin
} from 'lucide-react';
import SearchModal from './SearchModal';

export default function Header() {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isKidneyDropdownOpen, setIsKidneyDropdownOpen] = useState(false);
  const [isMobileKidneyOpen, setIsMobileKidneyOpen] = useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);

  // Close mobile drawer when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileKidneyOpen(false);
    setIsMobileAboutOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-xs">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            
            {/* Logo Area */}
            <Link href="/" className="flex-shrink-0 flex items-center gap-2 sm:gap-3 group">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg overflow-hidden transition-transform group-hover:scale-105 shrink-0 bg-white">
                <Image
                  src="/logo.jpg"
                  alt="Pediatric Kidney Foundation"
                  fill
                  sizes="48px"
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <span className="block text-navy font-extrabold text-lg sm:text-xl leading-none uppercase tracking-tighter">
                  PKF
                </span>
                <span className="block text-[8px] sm:text-[10px] text-teal font-semibold uppercase tracking-wider sm:tracking-widest">
                  Pediatric Kidney Foundation
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6 items-center">
              <Link
                href="/"
                id="nav-home-link"
                className={`text-sm font-semibold transition-colors ${
                  pathname === '/' ? 'text-teal font-bold' : 'text-navy hover:text-teal'
                }`}
              >
                Home
              </Link>

              {/* About PKF Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setIsMobileAboutOpen(true)}
                onMouseLeave={() => setIsMobileAboutOpen(false)}
              >
                <Link
                  href="/about"
                  className={`flex items-center text-sm font-semibold gap-1 py-2 ${
                    pathname?.startsWith('/about')
                      ? 'text-teal font-bold'
                      : 'text-gray-700 hover:text-teal'
                  }`}
                >
                  About PKF
                  <ChevronDown className="w-3.5 h-3.5" />
                </Link>
                <div className="absolute top-full left-0 w-52 bg-white rounded-xl shadow-xl border border-gray-100 p-2 z-50 hidden group-hover:block">
                  <Link
                    href="/about"
                    className="block px-3 py-2 rounded-lg text-xs font-bold text-navy hover:bg-teal/10 hover:text-teal transition-colors"
                  >
                    About PKF
                  </Link>
                  <Link
                    href="/about/leadership"
                    className="block px-3 py-2 rounded-lg text-xs font-medium text-gray-700 hover:bg-teal/10 hover:text-teal transition-colors"
                  >
                    Leadership
                  </Link>
                </div>
              </div>

              {/* Kidney Health Hub Dropdown */}
              <div
                className="relative group"
                onMouseEnter={() => setIsKidneyDropdownOpen(true)}
                onMouseLeave={() => setIsKidneyDropdownOpen(false)}
              >
                <Link
                  href="/kidney-health"
                  className={`flex items-center text-sm font-semibold gap-1 py-2 ${
                    pathname?.startsWith('/kidney-health') || pathname?.startsWith('/treatment')
                      ? 'text-teal font-bold'
                      : 'text-gray-700 hover:text-teal'
                  }`}
                >
                  Kidney Health Hub
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isKidneyDropdownOpen ? 'rotate-180' : ''}`} />
                </Link>

                {/* Dropdown Menu */}
                {isKidneyDropdownOpen && (
                  <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-gray-100 p-2 z-50 animate-fadeIn">
                    <Link
                      href="/kidney-health"
                      className="block px-3 py-2 rounded-lg text-xs font-bold text-navy hover:bg-teal/10 hover:text-teal transition-colors"
                    >
                      Kidney Health Hub
                    </Link>
                    <Link
                      href="/kidney-health/healthy-kidneys"
                      className="block px-3 py-2 rounded-lg text-xs font-medium text-gray-700 hover:bg-teal/10 hover:text-teal transition-colors"
                    >
                      Understanding Healthy Kidneys
                    </Link>
                    <Link
                      href="/kidney-health/symptoms"
                      className="block px-3 py-2 rounded-lg text-xs font-medium text-gray-700 hover:bg-teal/10 hover:text-teal transition-colors"
                    >
                      Common Symptoms of Unhealthy kidneys
                    </Link>
                    <Link
                      href="/kidney-health/diseases"
                      className="block px-3 py-2 rounded-lg text-xs font-medium text-gray-700 hover:bg-teal/10 hover:text-teal transition-colors"
                    >
                      Kidney Diseases in Children
                    </Link>
                    <Link
                      href="/kidney-health/diagnosis"
                      className="block px-3 py-2 rounded-lg text-xs font-medium text-gray-700 hover:bg-teal/10 hover:text-teal transition-colors"
                    >
                      Diagnosis &amp; Investigations
                    </Link>
                    <Link
                      href="/treatment"
                      className="block px-3 py-2 rounded-lg text-xs font-medium text-gray-700 hover:bg-teal/10 hover:text-teal transition-colors"
                    >
                      Treatment Journey
                    </Link>
                    <Link
                      href="/kidney-health/nutrition"
                      className="block px-3 py-2 rounded-lg text-xs font-medium text-gray-700 hover:bg-teal/10 hover:text-teal transition-colors"
                    >
                      Nutrition &amp; Lifestyle
                    </Link>
                    <Link
                      href="/faq"
                      className="block px-3 py-2 rounded-lg text-xs font-bold text-teal hover:bg-teal/10 transition-colors border-t border-gray-50 mt-1 pt-2"
                    >
                      Frequently Asked Questions
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/support"
                id="nav-support-link"
                className={`text-sm font-semibold transition-colors ${
                  pathname?.startsWith('/support') ? 'text-teal font-bold' : 'text-gray-700 hover:text-teal'
                }`}
              >
                Patient &amp; Family Support
              </Link>
              <Link
                href="/programs"
                id="nav-programs-link"
                className={`text-sm font-semibold transition-colors ${
                  pathname?.startsWith('/programs') ? 'text-teal font-bold' : 'text-gray-700 hover:text-teal'
                }`}
              >
                Programs &amp; Initiatives
              </Link>
              <Link
                href="/get-involved"
                id="nav-involved-link"
                className={`text-sm font-semibold transition-colors ${
                  pathname?.startsWith('/get-involved') ? 'text-teal font-bold' : 'text-gray-700 hover:text-teal'
                }`}
              >
                Get Involved
              </Link>
              <Link
                href="/news"
                id="nav-news-link"
                className={`text-sm font-semibold transition-colors ${
                  pathname?.startsWith('/news') ? 'text-teal font-bold' : 'text-gray-700 hover:text-teal'
                }`}
              >
                News &amp; Media
              </Link>
              <Link
                href="/contact"
                id="nav-contact-link"
                className={`text-sm font-semibold transition-colors ${
                  pathname === '/contact' ? 'text-teal font-bold' : 'text-gray-700 hover:text-teal'
                }`}
              >
                Contact Us
              </Link>
            </nav>

            {/* Actions: Search, Donate & Hamburger Button */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 sm:p-2.5 text-gray-500 hover:text-navy transition-colors rounded-xl hover:bg-gray-100 cursor-pointer"
                aria-label="Search website"
                title="Search website"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Donate Button */}
              <Link
                href="/get-involved"
                id="header-donate-btn"
                className="bg-coral text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-sm hover:brightness-110 active:scale-95 transition-all text-center inline-flex items-center gap-1.5 shrink-0"
              >
                <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white" />
                <span>Donate</span>
              </Link>

              {/* Hamburger Button for Mobile */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="lg:hidden p-2 sm:p-2.5 rounded-xl text-gray-700 hover:text-navy hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal/30 cursor-pointer"
                aria-label="Open mobile navigation menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (100% responsive) */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer Menu */}
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col z-50 overflow-y-auto">
            {/* Header inside drawer */}
            <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-off-white">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2.5"
              >
                <div className="relative w-8 h-8 rounded-lg overflow-hidden shrink-0 bg-white">
                  <Image
                    src="/logo.jpg"
                    alt="Pediatric Kidney Foundation"
                    fill
                    sizes="32px"
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="block text-navy font-extrabold text-base leading-none uppercase tracking-tighter">
                    PKF
                  </span>
                  <span className="block text-[8px] text-teal font-semibold uppercase tracking-wider">
                    Pediatric Kidney Foundation
                  </span>
                </div>
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-500 hover:text-navy hover:bg-gray-200/60 rounded-xl transition-colors cursor-pointer"
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Links List */}
            <nav className="p-4 space-y-1 text-sm font-semibold text-gray-800">
              {/* Home */}
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between p-3 rounded-xl transition-colors ${
                  pathname === '/' ? 'bg-teal/10 text-teal font-bold' : 'hover:bg-gray-50'
                }`}
              >
                <span>Home</span>
                <ArrowRight className="w-4 h-4 text-gray-300" />
              </Link>

              {/* About PKF */}
              <div>
                <button
                  onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl transition-colors text-left ${
                    pathname?.startsWith('/about')
                      ? 'bg-teal/10 text-teal font-bold'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <span>About PKF</span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform ${
                      isMobileAboutOpen ? 'rotate-180 text-teal' : ''
                    }`}
                  />
                </button>

                {isMobileAboutOpen && (
                  <div className="pl-4 pr-2 py-1 space-y-1 bg-off-white/60 rounded-xl mt-1 text-xs">
                    <Link
                      href="/about"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 px-3 rounded-lg font-bold text-navy hover:text-teal hover:bg-white"
                    >
                      • About PKF
                    </Link>
                    <Link
                      href="/about/leadership"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 px-3 rounded-lg text-gray-600 hover:text-teal hover:bg-white"
                    >
                      • Leadership
                    </Link>
                  </div>
                )}
              </div>

              {/* Collapsible Kidney Health Accordion */}
              <div>
                <button
                  onClick={() => setIsMobileKidneyOpen(!isMobileKidneyOpen)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl transition-colors text-left ${
                    pathname?.startsWith('/kidney-health') || pathname?.startsWith('/treatment')
                      ? 'bg-teal/10 text-teal font-bold'
                      : 'hover:bg-gray-50'
                  }`}
                >
                  <span>Kidney Health Hub</span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform ${
                      isMobileKidneyOpen ? 'rotate-180 text-teal' : ''
                    }`}
                  />
                </button>

                {isMobileKidneyOpen && (
                  <div className="pl-4 pr-2 py-1 space-y-1 bg-off-white/60 rounded-xl mt-1 text-xs">
                    <Link
                      href="/kidney-health"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 px-3 rounded-lg font-bold text-navy hover:text-teal hover:bg-white"
                    >
                      • Kidney Health Hub
                    </Link>
                    <Link
                      href="/kidney-health/healthy-kidneys"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 px-3 rounded-lg text-gray-600 hover:text-teal hover:bg-white"
                    >
                      • Understanding Healthy Kidneys
                    </Link>
                    <Link
                      href="/kidney-health/symptoms"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 px-3 rounded-lg text-gray-600 hover:text-teal hover:bg-white"
                    >
                      • Common Symptoms of Unhealthy kidneys
                    </Link>
                    <Link
                      href="/kidney-health/diseases"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 px-3 rounded-lg text-gray-600 hover:text-teal hover:bg-white"
                    >
                      • Kidney Diseases in Children
                    </Link>
                    <Link
                      href="/kidney-health/diagnosis"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 px-3 rounded-lg text-gray-600 hover:text-teal hover:bg-white"
                    >
                      • Diagnosis &amp; Investigations
                    </Link>
                    <Link
                      href="/treatment"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 px-3 rounded-lg text-gray-600 hover:text-teal hover:bg-white"
                    >
                      • Treatment Journey
                    </Link>
                    <Link
                      href="/kidney-health/nutrition"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 px-3 rounded-lg text-gray-600 hover:text-teal hover:bg-white"
                    >
                      • Nutrition &amp; Lifestyle
                    </Link>
                    <Link
                      href="/faq"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-2 px-3 rounded-lg font-bold text-teal hover:bg-white"
                    >
                      • Frequently Asked Questions
                    </Link>
                  </div>
                )}
              </div>

              {/* Patient & Family Support */}
              <Link
                href="/support"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between p-3 rounded-xl transition-colors ${
                  pathname?.startsWith('/support') ? 'bg-teal/10 text-teal font-bold' : 'hover:bg-gray-50'
                }`}
              >
                <span>Patient &amp; Family Support</span>
                <ArrowRight className="w-4 h-4 text-gray-300" />
              </Link>

              {/* Programs & Initiatives */}
              <Link
                href="/programs"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between p-3 rounded-xl transition-colors ${
                  pathname?.startsWith('/programs') ? 'bg-teal/10 text-teal font-bold' : 'hover:bg-gray-50'
                }`}
              >
                <span>Programs &amp; Initiatives</span>
                <ArrowRight className="w-4 h-4 text-gray-300" />
              </Link>

              {/* Get Involved */}
              <Link
                href="/get-involved"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between p-3 rounded-xl transition-colors ${
                  pathname?.startsWith('/get-involved') ? 'bg-teal/10 text-teal font-bold' : 'hover:bg-gray-50'
                }`}
              >
                <span>Get Involved</span>
                <ArrowRight className="w-4 h-4 text-gray-300" />
              </Link>

              {/* News & Media */}
              <Link
                href="/news"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between p-3 rounded-xl transition-colors ${
                  pathname?.startsWith('/news') ? 'bg-teal/10 text-teal font-bold' : 'hover:bg-gray-50'
                }`}
              >
                <span>News &amp; Media</span>
                <ArrowRight className="w-4 h-4 text-gray-300" />
              </Link>

              {/* Contact Us */}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between p-3 rounded-xl transition-colors ${
                  pathname === '/contact' ? 'bg-teal/10 text-teal font-bold' : 'hover:bg-gray-50'
                }`}
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 text-gray-300" />
              </Link>
            </nav>

            {/* Quick Contact & Action in Drawer Footer */}
            <div className="p-4 mt-auto border-t border-gray-100 bg-off-white space-y-3">
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <Phone className="w-3.5 h-3.5 text-teal" />
                <span>+91 11 2469 8888</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <MapPin className="w-3.5 h-3.5 text-coral" />
                <span>E-11, South Extension-1, New Delhi-110049</span>
              </div>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-teal text-white py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm hover:brightness-110 transition-all text-center block"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Global Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
