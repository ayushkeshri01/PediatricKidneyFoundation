import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Target, Compass, Award, Users, HeartPulse, CheckCircle2 } from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import { foundationData, leadershipMembers, partnerOrganizations } from '@/content/foundation';
import PartnersSection from '@/components/home/PartnersSection';

export const metadata = {
  title: 'About PKF | Pediatric Kidney Foundation',
  description: 'Established on 5 April 2004 by dedicated pediatric nephrologists to improve childhood kidney healthcare across India.'
};

export default function AboutPage() {
  return (
    <div className="bg-warm-white">
      {/* Header Banner */}
      <section className="bg-navy text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#5E9CA0_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: 'About Us' }]} />
          <div className="max-w-3xl mt-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full mb-4 border border-white/20">
              <span className="text-xs font-bold tracking-widest uppercase text-coral">
                Est. {foundationData.establishedDate}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white">
              Two Decades of Dedicated Care for Young Kidneys
            </h1>
            <p className="text-lg text-white/80 font-light leading-relaxed">
              Founded by visionary pediatric nephrologists and healthcare professionals to ensure no child suffers from preventable kidney complications.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story & Editorial Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-teal">Our Story</span>
              <h2 className="text-3xl sm:text-4xl text-navy font-bold leading-tight">
                Pioneering Pediatric Nephrology Since 2004
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-base">
                <p>
                  The Pediatric Kidney Foundation (PKF) was established on 5 April 2004 with the goal of improving the lives of children with kidney diseases. Founded by a group of dedicated pediatric nephrologists and healthcare professionals, the Foundation was created to support better clinical care, promote medical education and clinical research, and raise awareness about childhood kidney diseases.
                </p>
                <p>
                  Over the years, PKF has brought together national and international experts who share a common commitment to advancing pediatric kidney health. Through education, collaborative networks, research initiatives, and patient advocacy, the Foundation works to improve clinical knowledge, strengthen practice guidelines, and support better outcomes for young patients.
                </p>
                <p>
                  Today, PKF continues to work towards ensuring that every child with kidney disease has access to quality treatment. As we look to the future, we remain committed to building a stronger network of care, creating greater awareness, and making a lasting difference in the lives of children and their families.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/about/leadership"
                  className="bg-teal text-white px-6 py-3 rounded font-bold hover:brightness-110 transition-all inline-flex items-center gap-2"
                >
                  Meet Our Leadership Board
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/donate"
                  className="border-2 border-navy text-navy px-6 py-3 rounded font-bold hover:bg-navy hover:text-white transition-all inline-flex items-center gap-2"
                >
                  Support Our Mission
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
                  <p className="font-bold">Archival Documentation</p>
                  <p className="text-white/70">PKF Clinical Campus & Community Care Foundation, Est. 2004</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-teal">Core Purpose</span>
            <h2 className="text-3xl text-navy font-bold mt-1">Our Guiding Mission & Vision</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-teal/10 rounded-xl flex items-center justify-center text-teal mb-6">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {foundationData.mission}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal" /> Promoting early childhood diagnosis
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal" /> Subsidizing clinical dialysis & surgeries
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal" /> Empowering family caregivers with knowledge
                  </li>
                </ul>
              </div>
            </div>

            {/* Vision Card */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-coral/10 rounded-xl flex items-center justify-center text-coral mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed text-base">
                  {foundationData.vision}
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-gray-100">
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-coral" /> Equitable access regardless of socioeconomic status
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-coral" /> National recognition as public health priority
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-coral" /> Every child securing a fulfilling, active life
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Pediatric Kidney Health Matters */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy rounded-3xl p-8 sm:p-14 text-white">
            <div className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-coral">Why It Matters</span>
              <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-6 text-white">
                Kidney Diseases in Children Are Often Overlooked
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-6 font-light">
                {foundationData.whyItMatters}
              </p>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 mt-6">
                <h4 className="font-bold text-teal text-sm uppercase tracking-wider mb-2">Who We Help</h4>
                <p className="text-white/90 text-sm leading-relaxed">
                  {foundationData.whoWeHelp}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Roster Preview */}
      <section className="py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal">Expertise & Governance</span>
              <h2 className="text-3xl text-navy font-bold mt-1">Foundation Leadership</h2>
            </div>
            <Link
              href="/about/leadership"
              className="text-navy font-bold hover:text-teal inline-flex items-center gap-1 transition-colors"
            >
              View Full Medical Board <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {leadershipMembers.slice(0, 8).map((leader, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-teal/30 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 bg-teal/10 rounded-full flex items-center justify-center text-teal font-bold text-sm mb-4">
                  Dr
                </div>
                <h3 className="font-bold text-navy text-base mb-1">{leader.name}</h3>
                <p className="text-xs text-gray-500 leading-normal">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Partners */}
      <PartnersSection />
    </div>
  );
}
