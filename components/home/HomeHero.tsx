import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import RealisticKidneyCanvas from '@/components/three/RealisticKidneyCanvas';

export default function HomeHero() {
  return (
    <section className="relative bg-navy overflow-hidden h-[720px] flex items-center">
      {/* Three.js 3D Realistic Kidney Canvas Container */}
      <div
        id="renal-canvas-container"
        className="absolute right-0 top-0 w-full lg:w-3/5 h-full z-0 opacity-85 pointer-events-auto"
      >
        <RealisticKidneyCanvas className="w-full h-full" />
      </div>

      {/* Subtle background medical photography overlay */}
      <div
        className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000')",
          backgroundSize: 'cover'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 pointer-events-none">
        <div className="max-w-2xl text-white pointer-events-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20">
            <span className="w-2 h-2 rounded-full bg-coral animate-pulse" />
            <span className="text-xs font-bold tracking-widest uppercase">Leading Pediatric Care</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl mb-6 leading-[1.05] tracking-tight animate-hero-title">
            Saving Young Kidneys, <br />
            <span className="italic font-light">Securing Young Lives</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-light animate-hero-text">
            Supporting children with kidney diseases through awareness, early care, education, research, and compassionate support.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-hero-cta">
            <Link
              href="/contact?inquiry=help"
              id="hero-cta-help-link"
              className="bg-coral text-white px-8 py-4 rounded font-bold text-center shadow-lg hover:shadow-coral/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 group"
            >
              Get Help for Your Child
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/donate"
              id="hero-cta-support-link"
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded font-bold text-center hover:bg-white/20 transition-all"
            >
              Support Our Mission
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
