import React from 'react';
import Link from 'next/link';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import { foundationData, leadershipMembers } from '@/content/foundation';

export const metadata = {
  title: 'About PKF | Pediatric Kidney Foundation',
  description: 'The Pediatric Kidney Foundation (PKF) was established on 5 April 2004.'
};

export default function AboutPage() {
  return (
    <div className="bg-warm-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'About PKF' }]} />

        {/* 2. ABOUT PKF */}
        <div className="my-8">
          <h1 className="text-4xl text-navy font-bold mb-6">
            About PKF
          </h1>
        </div>

        {/* Our Story */}
        <section className="bg-white p-8 sm:p-12 rounded-3xl shadow-xs border border-gray-100 mb-10">
          <h2 className="text-2xl sm:text-3xl text-navy font-bold mb-6">
            Our Story
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed text-base">
            {foundationData.ourStory.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <section className="bg-white p-8 sm:p-10 rounded-3xl shadow-xs border border-gray-100">
            <h2 className="text-2xl font-bold text-navy mb-4">
              Mission
            </h2>
            <p className="text-gray-700 leading-relaxed text-base">
              {foundationData.mission}
            </p>
          </section>

          <section className="bg-white p-8 sm:p-10 rounded-3xl shadow-xs border border-gray-100">
            <h2 className="text-2xl font-bold text-navy mb-4">
              Vision
            </h2>
            <p className="text-gray-700 leading-relaxed text-base">
              {foundationData.vision}
            </p>
          </section>
        </div>

        {/* Leadership */}
        <section className="bg-white p-8 sm:p-12 rounded-3xl shadow-xs border border-gray-100">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <h2 className="text-2xl sm:text-3xl text-navy font-bold">
              Leadership
            </h2>
            <Link
              href="/about/leadership"
              className="text-teal font-bold hover:underline text-sm"
            >
              Leadership Details
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {leadershipMembers.map((leader, idx) => (
              <div
                key={idx}
                className="bg-off-white p-4 rounded-xl border border-gray-100 text-sm font-semibold text-navy"
              >
                {leader.name}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
