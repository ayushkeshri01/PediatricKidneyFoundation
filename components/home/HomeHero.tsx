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
          <div className="lg:col-span-7 text-white reveal active">
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

          {/* Right Column: Relevant Pediatric Care Photo with Official Logo Badge */}
          <div className="lg:col-span-5 relative reveal active">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-navy/60">
                <div className="relative h-[420px] sm:h-[460px] w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1200"
                    alt="Pediatric kidney care and medical support"
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating Logo Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-3 rounded-2xl shadow-2xl border border-gray-100 flex items-center gap-3">
                <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0 bg-white">
                  <Image
                    src="/logo.jpg"
                    alt="Pediatric Kidney Foundation"
                    fill
                    sizes="56px"
                    className="object-contain"
                  />
                </div>
                <div className="pr-2">
                  <span className="font-extrabold text-navy text-sm block">Pediatric Kidney Foundation</span>
                  <span className="text-[10px] text-teal font-semibold block">Saving Young Kidneys, Securing Young Lives</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
