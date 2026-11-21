'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HeartPulse, Search, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import SearchModal from './SearchModal';

export default function Header() {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isKidneyDropdownOpen, setIsKidneyDropdownOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Area */}
            <Link href="/" className="flex-shrink-0 flex items-center gap-3 group">
              <div className="w-10 h-10 bg-navy rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
                <HeartPulse className="text-white w-6 h-6" />
              </div>
              <div>
                <span className="block text-navy font-extrabold text-xl leading-none uppercase tracking-tighter">
                  PKF
                </span>
                <span className="block text-[10px] text-teal font-semibold uppercase tracking-widest">
                  Pediatric Kidney Foundation
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex space-x-8 items-center">
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
                      Common Symptoms & Warning Signs
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
                      Diagnosis & Investigations
                    </Link>
                    <Link
                      href="/treatment"
                      className="block px-3 py-2 rounded-lg text-xs font-medium text-gray-700 hover:bg-teal/10 hover:text-teal transition-colors"
                    >
                      Treatment Journey (Dialysis & Transplant)
                    </Link>
                    <Link
                      href="/kidney-health/nutrition"
                      className="block px-3 py-2 rounded-lg text-xs font-medium text-gray-700 hover:bg-teal/10 hover:text-teal transition-colors"
                    >
                      Nutrition & Lifestyle Tips
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
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-gray-500 hover:text-navy transition-colors rounded-lg hover:bg-gray-100"
                aria-label="Search website"
                title="Search website"
              >
                <Search className="w-5 h-5" />
              </button>

              <div className="flex items-center">
                <Link
                  href="/donate"
                  id="header-donate-btn"
                  className="bg-coral text-white px-5 sm:px-6 py-2.5 rounded-lg text-xs sm:text-sm font-bold shadow-md hover:brightness-110 active:scale-95 transition-all text-center"
                >
                  Donate Now
                </Link>
              </div>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-navy hover:text-teal rounded-lg hover:bg-gray-100 ml-1"
                aria-label="Toggle Navigation Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white px-4 pt-3 pb-6 shadow-lg animate-fadeIn">
            <nav className="flex flex-col space-y-3">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-bold text-navy hover:bg-teal/5 rounded-lg"
              >
                Home
              </Link>
              <Link
                href="/kidney-health"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-bold text-teal hover:bg-teal/5 rounded-lg"
              >
                Kidney Health Hub
              </Link>
              <div className="pl-6 space-y-2 border-l-2 border-teal/20 ml-3">
                <Link
                  href="/kidney-health/healthy-kidneys"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-xs text-gray-600 hover:text-navy py-1"
                >
                  Healthy Kidneys Guide
                </Link>
                <Link
                  href="/kidney-health/symptoms"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-xs text-gray-600 hover:text-navy py-1"
                >
                  Common Symptoms
                </Link>
                <Link
                  href="/kidney-health/diseases"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-xs text-gray-600 hover:text-navy py-1"
                >
                  Diseases Library
                </Link>
                <Link
                  href="/kidney-health/diagnosis"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-xs text-gray-600 hover:text-navy py-1"
                >
                  Diagnosis & Investigations
                </Link>
                <Link
                  href="/treatment"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-xs text-gray-600 hover:text-navy py-1"
                >
                  Treatment Journey
                </Link>
                <Link
                  href="/kidney-health/nutrition"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-xs text-gray-600 hover:text-navy py-1"
                >
                  Nutrition & Lifestyle
                </Link>
              </div>
              <Link
                href="/support"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-teal/5 rounded-lg"
              >
                Support
              </Link>
              <Link
                href="/programs"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-teal/5 rounded-lg"
              >
                Programs
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-teal/5 rounded-lg"
              >
                About Us
              </Link>
              <Link
                href="/get-involved"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-teal/5 rounded-lg"
              >
                Get Involved
              </Link>
              <Link
                href="/news"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-teal/5 rounded-lg"
              >
                News & Media
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-teal/5 rounded-lg"
              >
                Contact PKF
              </Link>

              <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
                <Link
                  href="/donate"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="bg-coral text-white py-3 rounded-lg text-center font-bold text-sm shadow-md"
                >
                  Donate to Support PKF
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
