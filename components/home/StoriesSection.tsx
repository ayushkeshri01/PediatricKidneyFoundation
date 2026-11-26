import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MessageSquareHeart, ArrowRight } from 'lucide-react';

export default function StoriesSection() {
  return (
    <section className="py-20 bg-warm-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 reveal">
          <h2 className="text-3xl sm:text-4xl font-bold text-navy">
            Stories &amp; Testimonials
          </h2>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md grid grid-cols-1 md:grid-cols-12 items-center reveal">
          <div className="md:col-span-5 relative h-72 sm:h-80 md:h-full min-h-[260px] w-full">
            <Image
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800"
              alt="Stories & Testimonials"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
          <div className="md:col-span-7 p-8 sm:p-10 flex flex-col justify-center">
            <div className="w-12 h-12 rounded-2xl bg-coral/10 text-coral flex items-center justify-center mb-4">
              <MessageSquareHeart className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-navy mb-3">
              Stories &amp; Testimonials
            </h3>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Parent Support Groups
            </p>
            <div>
              <Link
                href="/support"
                className="inline-flex items-center gap-2 bg-teal text-white px-6 py-3 rounded-xl font-bold text-sm hover:brightness-110 transition-all cursor-pointer"
              >
                Parent Support Groups
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
