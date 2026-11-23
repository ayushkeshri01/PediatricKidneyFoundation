import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Heart, Sparkles, Stethoscope, Users } from 'lucide-react';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

export default function HomeHero() {
  return (
    <section className="relative bg-navy overflow-hidden min-h-[720px] lg:min-h-[780px] flex items-center py-16 lg:py-0">
      {/* Subtle background ambient mesh */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-teal rounded-full blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-coral rounded-full blur-[140px]" />
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-turquoise/30 rounded-full blur-[100px]" />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Key Actions */}
          <div className="lg:col-span-7 text-white">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/15 shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-coral animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-white/95">
                Pioneering Pediatric Nephrology Since 2004
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold mb-6 leading-[1.08] tracking-tight">
              Saving Young Kidneys, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-turquoise to-white italic font-normal">
                Securing Young Lives
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-xl text-white/85 mb-8 max-w-2xl leading-relaxed font-light">
              Dedicated to early detection, specialized pediatric nephrology care, medical education, and compassionate financial assistance for children facing kidney disease across India.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="/contact?inquiry=help"
                id="hero-cta-help-link"
                className="bg-coral text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-center shadow-lg shadow-coral/25 hover:shadow-coral/40 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 group text-sm sm:text-base"
              >
                Get Help for Your Child
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/donate"
                id="hero-cta-support-link"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/25 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-center hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <Heart className="w-5 h-5 text-coral fill-coral/30" />
                Support Our Mission
              </Link>
            </div>

            {/* Trust Markers Bar */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-2 sm:gap-4 max-w-xl">
              <div>
                <p className="text-xl sm:text-3xl font-extrabold text-coral">
                  <AnimatedCounter target={15000} suffix="+" />
                </p>
                <p className="text-[10px] sm:text-xs text-white/70 font-medium uppercase tracking-wider mt-0.5">
                  Children Supported
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-3xl font-extrabold text-white">
                  <AnimatedCounter target={20} suffix="+ Yrs" />
                </p>
                <p className="text-[10px] sm:text-xs text-white/70 font-medium uppercase tracking-wider mt-0.5">
                  Dedicated Care
                </p>
              </div>
              <div>
                <p className="text-xl sm:text-3xl font-extrabold text-turquoise">
                  <AnimatedCounter target={100} suffix="%" />
                </p>
                <p className="text-[10px] sm:text-xs text-white/70 font-medium uppercase tracking-wider mt-0.5">
                  Doctor-Led Board
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Decorative Gradient Ring */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-teal via-turquoise to-coral rounded-3xl opacity-30 blur-xl animate-pulse" />

              {/* Main Photo Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 bg-navy/60 backdrop-blur-sm">
                <div className="relative h-[440px] sm:h-[480px] w-full">
                  <Image
                    src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1200"
                    alt="Pediatric specialist doctor providing compassionate care to a child"
                    fill
                    priority
                    className="object-cover object-top hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent" />
                  
                  {/* Bottom Caption inside Photo */}
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal/80 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider mb-2">
                      <Stethoscope className="w-3.5 h-3.5" /> Clinical Excellence
                    </div>
                    <p className="text-sm font-semibold text-white/95">
                      Specialized Pediatric Nephrology Care &amp; Early Screening
                    </p>
                    <p className="text-xs text-white/75 font-light">
                      Guided by senior faculty from AIIMS, Lady Hardinge &amp; Sir Ganga Ram Hospital
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Highlight Card 1: Top Right */}
              <div className="absolute -top-4 right-2 sm:-top-6 sm:-right-6 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2.5 sm:gap-3.5 z-20 animate-bounce-subtle">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-teal/10 text-teal flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-teal" />
                </div>
                <div>
                  <p className="text-[11px] sm:text-xs font-bold text-navy uppercase tracking-wider">Early Screening</p>
                  <p className="text-[10px] sm:text-xs text-gray-500 font-medium">Prevents renal damage</p>
                </div>
              </div>

              {/* Floating Highlight Card 2: Bottom Left */}
              <div className="absolute -bottom-4 left-2 sm:-bottom-6 sm:-left-6 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-2.5 sm:gap-3.5 z-20">
                <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-coral/10 text-coral flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-coral" />
                </div>
                <div>
                  <p className="text-[11px] sm:text-xs font-bold text-navy uppercase tracking-wider">Family Support</p>
                  <p className="text-[10px] sm:text-xs text-gray-500 font-medium">Counseling &amp; Treatment Aid</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
