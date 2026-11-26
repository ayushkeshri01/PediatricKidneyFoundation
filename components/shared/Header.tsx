'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  HeartPulse,
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
            <nav className="hidden lg:flex space-x-7 items-center">
              <Link
                href="/"
                id="nav-home-link"
                className={`text-sm font-semibold nav-link link-underline ${
                  pathname === '/' ? 'text-teal font-bold' : 'text-navy hover:text-teal'
                }`}
              >
                Home
              </Link>

              {/* Kidney Health Dropdown */}
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
                      : 'text-gray-600 hover:text-navy'
                  }`}
                >
                  Kidney Health
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isKidneyDropdownOpen ? 'rotate-180' : ''}`} />
                </Link>

                {/* Dropdown Menu */}
                {isKidneyDropdownOpen && (
                  <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-gray-100 p-2 z-50 animate-fadeIn">
                    <Link
                      href="/kidney-health"
                      className="block px-3 py-2 rounded-lg text-xs font-bold text-navy hover:bg-teal/10 hover:text-teal transition-colors"
                    >
                      Kidney Health Hub Overview
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
                      Common Symptoms &amp; Warning Signs
                    </Link>
                    <Link
                      href="/kidney-health/diseases"
                      className="block px-3 py-2 rounded-lg text-xs font-medium text-gray-700 hover:bg-teal/10 hover:text-teal transition-colors"
                    >
                      Kidney Diseases Library (7 Conditions)
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
                      Treatment Journey (Dialysis &amp; Transplant)
                    </Link>
                    <Link
                      href="/kidney-health/nutrition"
                      className="block px-3 py-2 rounded-lg text-xs font-medium text-gray-700 hover:bg-teal/10 hover:text-teal transition-colors"
                    >
                      Nutrition &amp; Lifestyle Tips
                    </Link>
                    <Link
                      href="/faq"
                      className="block px-3 py-2 rounded-lg text-xs font-bold text-teal hover:bg-teal/10 transition-colors border-t border-gray-50 mt-1 pt-2"
                    >
                      Frequently Asked Questions (FAQs)
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/support"
                id="nav-support-link"
                className={`text-sm font-semibold nav-link link-underline ${
                  pathname?.startsWith('/support') ? 'text-teal font-bold' : 'text-gray-600 hover:text-navy'
                }`}
              >
                Support
              </Link>
              <Link
                href="/programs"
                id="nav-programs-link"
                className={`text-sm font-semibold nav-link link-underline ${
                  pathname?.startsWith('/programs') ? 'text-teal font-bold' : 'text-gray-600 hover:text-navy'
                }`}
              >
                Programs
              </Link>
              <Link
                href="/about"
                id="nav-about-link"
                className={`text-sm font-semibold nav-link link-underline ${
                  pathname?.startsWith('/about') ? 'text-teal font-bold' : 'text-gray-600 hover:text-navy'
                }`}
              >
                About Us
              </Link>
              <Link
                href="/get-involved"
                id="nav-involved-link"
                className={`text-sm font-semibold nav-link link-underline ${
                  pathname?.startsWith('/get-involved') ? 'text-teal font-bold' : 'text-gray-600 hover:text-navy'
                }`}
              >
                Get Involved
              </Link>
              <Link
                href="/news"
                id="nav-news-link"
                className={`text-sm font-semibold nav-link link-underline ${
                  pathname?.startsWith('/news') ? 'text-teal font-bold' : 'text-gray-600 hover:text-navy'
                }`}
              >
                News
              </Link>
              <Link
                href="/contact"
                id="nav-contact-link"
                className={`text-sm font-semibold nav-link link-underline ${
                  pathname === '/contact' ? 'text-teal font-bold' : 'text-gray-600 hover:text-navy'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Actions: Search, Donate & Hamburger Button */}
            <div className="flex items-center gap-1.5 sm:gap-3">
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 sm:p-2.5 text-gray-500 hover:text-navy transition-colors rounded-xl hover:bg-gray-100 cursor-pointer"
                aria-label="Search website"
                title="Search website"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Donate Button (Responsive sizes) */}
              <Link
                href="/donate"
                id="header-donate-btn"
                className="bg-coral text-white px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold shadow-sm hover:shadow-md hover:brightness-110 active:scale-95 transition-all text-center inline-flex items-center gap-1.5 shrink-0"
              >
                <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white" />
                <span>Donate</span>
              </Link>

              {/* Mobile Hamburger Toggle Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 sm:p-2.5 text-navy hover:text-teal rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-navy" />
                ) : (
                  <Menu className="w-6 h-6 text-navy" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* =========================================================================
          FULL-FEATURED MOBILE NAVIGATION DRAWER & BACKDROP
         ========================================================================= */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden animate-fadeIn">
          {/* Backdrop Overlay */}
          <div
            className="fixed inset-0 bg-navy/60 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-in Drawer Container */}
          <div className="fixed inset-y-0 right-0 w-[88vw] max-w-[360px] bg-white shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-gray-100 animate-slideInRight">
            
            {/* Drawer Top Header */}
            <div>
              <div className="p-4 sm:p-5 border-b border-gray-100 flex items-center justify-between bg-warm-white">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-2.5"
                >
                  <div className="relative w-9 h-9 rounded-lg overflow-hidden shrink-0 bg-white">
                    <Image
                      src="/logo.jpg"
                      alt="Pediatric Kidney Foundation"
                      fill
                      sizes="36px"
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
                        • Hub Overview
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
                        • Common Symptoms
                      </Link>
                      <Link
                        href="/kidney-health/diseases"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-2 px-3 rounded-lg text-gray-600 hover:text-teal hover:bg-white"
                      >
                        • Diseases Library (7 Conditions)
                      </Link>
                      <Link
                        href="/kidney-health/diagnosis"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-2 px-3 rounded-lg text-gray-600 hover:text-teal hover:bg-white"
                      >
                        • Diagnosis &amp; Tests
                      </Link>
                      <Link
                        href="/treatment"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-2 px-3 rounded-lg text-gray-600 hover:text-teal hover:bg-white"
                      >
                        • Dialysis &amp; Transplant Care
                      </Link>
                      <Link
                        href="/kidney-health/nutrition"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-2 px-3 rounded-lg text-gray-600 hover:text-teal hover:bg-white"
                      >
                        • Nutrition &amp; Diet Tips
                      </Link>
                      <Link
                        href="/faq"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-2 px-3 rounded-lg font-bold text-teal hover:bg-white"
                      >
                        • Frequently Asked Questions (FAQs)
                      </Link>
                    </div>
                  )}
                </div>

                {/* Patient Support */}
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

                {/* Programs */}
                <Link
                  href="/programs"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-3 rounded-xl transition-colors ${
                    pathname?.startsWith('/programs') ? 'bg-teal/10 text-teal font-bold' : 'hover:bg-gray-50'
                  }`}
                >
                  <span>Programs &amp; Screening Camps</span>
                  <ArrowRight className="w-4 h-4 text-gray-300" />
                </Link>

                {/* Collapsible About Us */}
                <div>
                  <button
                    onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl transition-colors text-left ${
                      pathname?.startsWith('/about') || pathname?.startsWith('/annual-reports')
                        ? 'bg-teal/10 text-teal font-bold'
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <span>About PKF Foundation</span>
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
                        className="block py-2 px-3 rounded-lg font-medium text-gray-700 hover:text-teal hover:bg-white"
                      >
                        • History &amp; Mission
                      </Link>
                      <Link
                        href="/about/leadership"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-2 px-3 rounded-lg font-medium text-gray-700 hover:text-teal hover:bg-white"
                      >
                        • Leadership &amp; Medical Board
                      </Link>
                      <Link
                        href="/annual-reports"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block py-2 px-3 rounded-lg font-medium text-gray-700 hover:text-teal hover:bg-white"
                      >
                        • Annual Reports &amp; Governance
                      </Link>
                    </div>
                  )}
                </div>

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
                  <span>News &amp; Event Reports</span>
                  <ArrowRight className="w-4 h-4 text-gray-300" />
                </Link>

                {/* Contact */}
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between p-3 rounded-xl transition-colors ${
                    pathname === '/contact' ? 'bg-teal/10 text-teal font-bold' : 'hover:bg-gray-50'
                  }`}
                >
                  <span>Contact Secretariat Desk</span>
                  <ArrowRight className="w-4 h-4 text-gray-300" />
                </Link>
              </nav>
            </div>

            {/* Drawer Bottom Actions & Helpline */}
            <div className="p-4 sm:p-5 border-t border-gray-100 bg-warm-white space-y-3">
              <Link
                href="/donate"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full bg-coral hover:brightness-110 active:scale-95 text-white py-3.5 px-4 rounded-xl font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Heart className="w-4 h-4 fill-white" />
                <span>Donate to Save Young Kidneys</span>
              </Link>

              <div className="pt-2 text-xs text-gray-500 space-y-1.5">
                <a
                  href="tel:+911145678901"
                  className="flex items-center gap-2 font-bold text-navy hover:text-teal transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-teal shrink-0" />
                  <span>Helpline: +91 (011) 4567-8901</span>
                </a>
                <p className="flex items-center gap-2 text-[11px] text-gray-400">
                  <MapPin className="w-3.5 h-3.5 text-teal shrink-0" />
                  <span>South Extension-1, New Delhi</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Global Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
