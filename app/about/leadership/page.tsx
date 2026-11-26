import React from 'react';
import Link from 'next/link';
import { ArrowLeft, UserCheck, Stethoscope } from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import { leadershipMembers } from '@/content/foundation';

export const metadata = {
  title: 'Leadership | Pediatric Kidney Foundation',
  description: 'Leadership members of the Pediatric Kidney Foundation.'
};

export default function LeadershipPage() {
  return (
    <div className="bg-warm-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'About PKF', href: '/about' }, { label: 'Leadership' }]} />

        {/* Header */}
        <div className="my-8 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-teal block mb-2">
            Governance
          </span>
          <h1 className="text-4xl text-navy font-bold mb-4">
            Leadership
          </h1>
          <p className="text-gray-600 leading-relaxed text-base">
            Pediatric nephrologists, clinicians, and healthcare professionals guiding the Pediatric Kidney Foundation.
          </p>
        </div>

        {/* Grid of All 16 Leaders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 my-10">
          {leadershipMembers.map((leader, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-xs border border-gray-100 hover:shadow-md hover:border-teal/30 transition-all flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-teal/10 text-teal flex items-center justify-center font-bold shrink-0">
                {leader.name.startsWith('Dr.') ? (
                  <Stethoscope className="w-5 h-5" />
                ) : (
                  <UserCheck className="w-5 h-5" />
                )}
              </div>
              <div>
                <span className="text-[10px] font-bold text-gray-400 block">Member {idx + 1}</span>
                <h3 className="font-bold text-navy text-base">{leader.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Back navigation */}
        <div className="pt-8 border-t border-gray-200">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-teal transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to About PKF
          </Link>
        </div>
      </div>
    </div>
  );
}
