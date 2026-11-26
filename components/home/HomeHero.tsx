import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Heart, Users, Stethoscope } from 'lucide-react';

export default function HomeHero() {
  return (
    <section className="relative bg-navy overflow-hidden min-h-[640px] flex items-center py-16 lg:py-24">
      {/* Ambient background styling */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-teal rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-coral rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 text-white">
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
              Saving Young Kidneys, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-turquoise to-white">
                Securing Young Lives
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-white/90 mb-8 max-w-2xl leading-relaxed font-light">
              Supporting Children with Kidney Diseases Through Awareness, Early Care, and Community Support.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-3.5 mb-10">
              <Link
                href="/contact"
                id="hero-cta-help-link"
                className="bg-coral text-white px-6 sm:px-7 py-3.5 rounded-xl font-bold text-center shadow-lg shadow-coral/25 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
              >
                Get Help for Your Child
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/get-involved"
                id="hero-cta-donate-link"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white px-6 sm:px-7 py-3.5 rounded-xl font-bold text-center active:scale-95 transition-all flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
              >
                <Heart className="w-4 h-4 text-coral fill-coral/30" />
                Donate
              </Link>
              <Link
                href="/get-involved"
                id="hero-cta-partner-link"
                className="bg-teal text-white hover:brightness-110 px-6 sm:px-7 py-3.5 rounded-xl font-bold text-center active:scale-95 transition-all flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
              >
                Partner With Us
              </Link>
            </div>

            {/* Quick Help */}
            <div className="pt-6 border-t border-white/15">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-200 block mb-3">
                Quick Help
              </span>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  id="quick-help-doctor"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/15 rounded-xl text-xs sm:text-sm font-semibold text-white border border-white/15 transition-all"
                >
                  <Stethoscope className="w-4 h-4 text-teal" />
                  Find a Pediatric Nephrologist
                </Link>
                <Link
                  href="/support"
                  id="quick-help-parent-groups"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/15 rounded-xl text-xs sm:text-sm font-semibold text-white border border-white/15 transition-all"
                >
                  <Users className="w-4 h-4 text-coral" />
                  Parent Support Groups
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Visual with Official Logo and Pediatric Care */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10 shadow-2xl flex flex-col items-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 bg-white rounded-2xl p-4 shadow-lg flex items-center justify-center overflow-hidden mb-6">
                <Image
                  src="/logo.jpg"
                  alt="Pediatric Kidney Foundation Logo"
                  width={200}
                  height={200}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-white mb-1">Pediatric Kidney Foundation</h3>
                <p className="text-xs text-white/70">Saving Young Kidneys, Securing Young Lives</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
