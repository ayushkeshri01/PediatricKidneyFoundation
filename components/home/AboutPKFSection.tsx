import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

export default function AboutPKFSection() {
  return (
    <section className="py-24 bg-off-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="lg:w-1/2 reveal-left active">
            <h4 className="text-teal font-bold uppercase tracking-widest text-sm mb-4">
              Institutional Identity
            </h4>
            <h2 className="text-4xl text-navy mb-6 leading-tight">
              Two Decades of Excellence in Pediatric Nephrology
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                For over two decades, the Pediatric Kidney Foundation (PKF) has served as an essential institutional pillar for thousands of families navigating the complex journey of kidney disease.
              </p>
              <p>
                Our mission is anchored in clinical excellence, compassionate family empowerment, and a relentless pursuit of accessibility for every child, regardless of their socioeconomic background.
              </p>
            </div>
            <Link
              href="/about"
              id="about-history-link"
              className="inline-flex items-center gap-2 text-navy font-bold border-b-2 border-teal pb-1 hover:text-teal transition-colors group"
            >
              Learn About PKF History
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Editorial Visual Composition */}
          <div className="lg:w-1/2 relative reveal-right active">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-teal/5 rounded-full blur-3xl" />
            <div className="relative z-10 p-4 bg-white shadow-2xl rounded-2xl rotate-2 parallax-image-container">
              {/* Archival Photography */}
              <div className="relative h-80 w-full overflow-hidden rounded-lg">
                <Image
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200"
                  alt="Pediatric healthcare professionals at PKF"
                  fill
                  className="rounded-lg object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700 hover:scale-[1.05] parallax-image"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="mt-4 text-[10px] text-gray-400 font-mono tracking-wider">
                ARCHIVAL IMAGE: PKF CLINICAL CAMPUS 2008
              </p>
            </div>

            {/* Impact Metric Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl z-20 hidden md:block animate-bounce-subtle border border-gray-50">
              <p className="text-3xl font-extrabold text-navy">
                <AnimatedCounter target={15000} suffix="+" />
              </p>
              <p className="text-xs font-bold uppercase tracking-widest text-teal">
                Children Supported
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
