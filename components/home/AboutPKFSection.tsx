import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { foundationData } from '@/content/foundation';

export default function AboutPKFSection() {
  return (
    <section className="py-24 bg-off-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8">
            <div className="reveal-left">
              <h2 className="text-3xl sm:text-4xl text-navy font-bold mb-4 leading-tight">
                About PKF
              </h2>
              <p className="text-gray-700 leading-relaxed text-base">
                {foundationData.aboutPKF}
              </p>
            </div>

            <div className="stagger-item p-6 bg-white rounded-2xl border border-gray-100 shadow-xs">
              <h3 className="text-xl font-bold text-navy mb-3">
                Why Pediatric Kidney Health Matters
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {foundationData.whyPediatricKidneyHealthMatters}
              </p>
            </div>

            <div className="stagger-item p-6 bg-white rounded-2xl border border-gray-100 shadow-xs">
              <h3 className="text-xl font-bold text-navy mb-3">
                Who We Help
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {foundationData.whoWeHelp}
              </p>
            </div>

            <div className="reveal">
              <Link
                href="/about"
                id="about-history-link"
                className="inline-flex items-center gap-2 text-navy font-bold border-b-2 border-teal pb-1 hover:text-teal transition-colors text-sm"
              >
                About PKF
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Visual Presentation */}
          <div className="lg:w-1/2 relative reveal-right">
            <div className="relative z-10 p-4 bg-white shadow-xl rounded-2xl border border-gray-100">
              <div className="relative h-80 sm:h-96 w-full overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200"
                  alt="Pediatric Kidney Foundation Care"
                  fill
                  className="parallax-image object-cover"
                  data-parallax-speed="0.05"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
