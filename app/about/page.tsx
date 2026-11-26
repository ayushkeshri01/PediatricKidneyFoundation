import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Target, Compass, Award, Users } from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import { foundationData, leadershipMembers } from '@/content/foundation';
import PartnersSection from '@/components/home/PartnersSection';

export const metadata = {
  title: 'About PKF | Pediatric Kidney Foundation',
  description: 'Supporting Children with Kidney Diseases Through Awareness, Early Care, and Community Support.'
};

export default function AboutPage() {
  return (
    <div className="bg-warm-white">
      {/* Header Banner */}
      <section className="bg-navy text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: 'About PKF' }]} />
          <div className="max-w-3xl mt-4">
            <span className="text-xs font-bold uppercase tracking-widest text-coral block mb-2">
              Established 5 April 2004
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white">
              About PKF
            </h1>
            <p className="text-lg text-white/90 font-light leading-relaxed">
              {foundationData.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-teal block">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl text-navy font-bold leading-tight">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-base">
                <p>
                  The Pediatric Kidney Foundation (PKF) was established on 5 April 2004 with the goal of improving the lives of children with kidney diseases. Founded by a group of dedicated pediatric nephrologists and healthcare professionals, the Foundation was created to support better care, promote education and research, and raise awareness about childhood kidney diseases.
                </p>
                <p>
                  Over the years, PKF has brought together experts who share a common commitment to advancing pediatric kidney health. Through education, collaboration, research, and advocacy, the Foundation works to improve knowledge, strengthen clinical practice, and support better outcomes for children with kidney diseases.
                </p>
                <p>
                  Today, PKF continues to work towards ensuring that every child with kidney disease has access to quality treatment. As we look to the future, we remain committed to building a stronger network of care, creating greater awareness, and making a lasting difference in the lives of children and their families.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/about/leadership"
                  className="bg-teal text-white px-6 py-3 rounded-xl font-bold hover:brightness-110 transition-all inline-flex items-center gap-2 text-sm"
                >
                  View Leadership
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-navy text-navy px-6 py-3 rounded-xl font-bold hover:bg-navy hover:text-white transition-all inline-flex items-center gap-2 text-sm"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1200"
                  alt="PKF Clinical Campus Archival"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 inset-x-0 bg-navy/85 backdrop-blur-sm p-4 text-white text-xs">
                  <p className="font-bold">Pediatric Kidney Foundation</p>
                  <p className="text-white/70">Established 5 April 2004</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center text-teal mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">Mission</h3>
                <p className="text-gray-700 leading-relaxed text-base">
                  {foundationData.mission}
                </p>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-coral/10 rounded-xl flex items-center justify-center text-coral mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">Vision</h3>
                <p className="text-gray-700 leading-relaxed text-base">
                  {foundationData.vision}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal block mb-1">
                Governance
              </span>
              <h2 className="text-3xl text-navy font-bold">
                Leadership
              </h2>
            </div>
            <Link
              href="/about/leadership"
              className="text-navy font-bold hover:text-teal inline-flex items-center gap-1 transition-colors text-sm"
            >
              View All 16 Members <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {leadershipMembers.map((leader, idx) => (
              <div
                key={idx}
                className="bg-off-white p-5 rounded-xl border border-gray-100 hover:border-teal/30 hover:shadow-sm transition-all flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-teal/10 text-teal flex items-center justify-center font-bold text-xs shrink-0">
                  {idx + 1}
                </div>
                <h3 className="font-bold text-navy text-sm">{leader.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Partners */}
      <PartnersSection />
    </div>
  );
}
