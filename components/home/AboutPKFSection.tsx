import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, HeartHandshake } from 'lucide-react';
import { foundationData } from '@/content/foundation';

export default function AboutPKFSection() {
  return (
    <section className="py-24 bg-off-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="lg:w-1/2 reveal-left active space-y-8">
            <div>
              <span className="text-teal font-bold uppercase tracking-widest text-xs mb-2 block">
                About PKF
              </span>
              <h2 className="text-3xl sm:text-4xl text-navy font-bold mb-4 leading-tight">
                About PKF
              </h2>
              <p className="text-gray-700 leading-relaxed text-base">
                {foundationData.aboutPKF}
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-xs">
              <h3 className="text-xl font-bold text-navy mb-3">
                Why Pediatric Kidney Health Matters
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {foundationData.whyPediatricKidneyHealthMatters}
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-gray-100 shadow-xs">
              <h3 className="text-xl font-bold text-navy mb-3">
                Who We Help
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {foundationData.whoWeHelp}
              </p>
            </div>

            <div>
              <Link
                href="/about"
                id="about-history-link"
                className="inline-flex items-center gap-2 text-navy font-bold border-b-2 border-teal pb-1 hover:text-teal transition-colors group text-sm"
              >
                Learn More About PKF
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Editorial Visual Composition */}
          <div className="lg:w-1/2 relative reveal-right active">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-teal/5 rounded-full blur-3xl" />
            <div className="relative z-10 p-4 bg-white shadow-2xl rounded-2xl border border-gray-100">
              <div className="relative h-80 w-full overflow-hidden rounded-xl">
                <Image
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200"
                  alt="Pediatric healthcare professionals at PKF"
                  fill
                  className="rounded-xl object-cover hover:scale-105 transition-all duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span className="font-semibold text-navy">Pediatric Kidney Care</span>
                <span>Established 5 April 2004</span>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-navy text-white p-5 rounded-2xl shadow-xl z-20 hidden md:block">
              <p className="text-2xl font-extrabold text-coral">
                15,000+
              </p>
              <p className="text-[11px] font-bold uppercase tracking-widest text-white/80">
                Children Supported
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
