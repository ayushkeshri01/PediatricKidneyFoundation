import React from 'react';
import Link from 'next/link';
import { MessageSquareHeart, ArrowRight } from 'lucide-react';

export default function StoriesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Stories &amp; Testimonials
          </h2>
        </div>
        <div className="max-w-2xl mx-auto bg-warm-white p-8 sm:p-10 rounded-3xl border border-gray-100 text-center flex flex-col items-center">
          <div className="w-16 h-16 rounded-2xl bg-coral/10 text-coral flex items-center justify-center mb-4">
            <MessageSquareHeart className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-navy mb-3">
            Stories &amp; Testimonials
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-6">
            Parent Support Groups
          </p>
          <Link
            href="/support"
            className="inline-flex items-center gap-2 bg-teal text-white px-6 py-3 rounded-xl font-bold text-sm hover:brightness-110 transition-all cursor-pointer"
          >
            Parent Support Groups
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
