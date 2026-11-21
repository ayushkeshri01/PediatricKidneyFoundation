import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Award, Stethoscope, UserCheck } from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import { leadershipMembers } from '@/content/foundation';

export const metadata = {
  title: 'Leadership & Medical Advisory Board | Pediatric Kidney Foundation',
  description: 'Meet the dedicated pediatric nephrologists, clinicians, trustees, and researchers leading PKF India.'
};

export default function LeadershipPage() {
  return (
    <div className="bg-warm-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'About Us', href: '/about' }, { label: 'Leadership' }]} />

        {/* Header */}
        <div className="my-8 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-teal">
            Governance & Clinical Direction
          </span>
          <h1 className="text-4xl text-navy font-bold mt-2 mb-4">
            Leadership & Medical Advisory Board
          </h1>
          <p className="text-gray-600 leading-relaxed text-base">
            The Pediatric Kidney Foundation is governed and guided by senior pediatric nephrologists, clinical professors, healthcare administrators, and public health experts dedicated to saving young kidneys.
          </p>
        </div>

        {/* Grid of All 16 Leaders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10">
          {leadershipMembers.map((leader, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-teal/30 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal/10 text-teal flex items-center justify-center font-bold text-base mb-4">
                  {leader.name.startsWith('Dr.') ? (
                    <Stethoscope className="w-6 h-6" />
                  ) : (
                    <UserCheck className="w-6 h-6" />
                  )}
                </div>
                <h3 className="font-bold text-navy text-lg mb-2">{leader.name}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{leader.role}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-100 flex items-center gap-1.5 text-[11px] font-semibold text-teal">
                <Award className="w-3.5 h-3.5" />
                <span>PKF Board Member</span>
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
