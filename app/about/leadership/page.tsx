import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import { leadershipMembers } from '@/content/foundation';

export const metadata = {
  title: 'Leadership | Pediatric Kidney Foundation',
  description: 'Leadership of the Pediatric Kidney Foundation.'
};

export default function LeadershipPage() {
  return (
    <div className="bg-warm-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'About PKF', href: '/about' }, { label: 'Leadership' }]} />

        {/* Leadership Header */}
        <div className="my-8">
          <h1 className="text-4xl text-navy font-bold mb-4">
            Leadership
          </h1>
        </div>

        {/* List of Leaders strictly from document */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-8">
          {leadershipMembers.map((leader, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-2xl shadow-xs border border-gray-100 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-teal/10 text-teal flex items-center justify-center font-bold text-xs shrink-0">
                {idx + 1}
              </div>
              <h3 className="font-bold text-navy text-sm">{leader.name}</h3>
            </div>
          ))}
        </div>

        {/* Back navigation */}
        <div className="pt-8 border-t border-gray-200">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-teal transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> About PKF
          </Link>
        </div>
      </div>
    </div>
  );
}
