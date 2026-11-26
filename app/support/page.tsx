import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Users, Heart, ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';

export const metadata = {
  title: 'Patient & Family Support | Pediatric Kidney Foundation',
  description: 'Need Help? Parent Support Group.'
};

export default function SupportPage() {
  return (
    <div className="bg-warm-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Patient & Family Support' }]} />

        {/* 4. PATIENT & FAMILY SUPPORT */}
        <div className="my-8 max-w-3xl">
          <h1 className="text-4xl text-navy font-bold mb-4">
            Patient &amp; Family Support
          </h1>
        </div>

        {/* 2 Main Items: Need Help? & Parent Support Group with Authentic Indian Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
          {/* Need Help? */}
          <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm flex flex-col justify-between group">
            <div>
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800"
                  alt="Need Help?"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 flex items-center gap-3 text-white">
                  <div className="w-10 h-10 rounded-xl bg-coral flex items-center justify-center shrink-0">
                    <Heart className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    Need Help?
                  </h2>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-700 leading-relaxed text-base">
                  If your child has been diagnosed with a kidney disease or you have concerns about their kidney health, consult your pediatrician or a pediatric nephrologist. Early medical care and regular follow-up can make a significant difference in your child&apos;s health and well-being.
                </p>
              </div>
            </div>
            <div className="p-8 pt-0">
              <Link
                href="/contact"
                className="w-full bg-coral text-white font-bold py-3.5 px-6 rounded-xl text-sm flex items-center justify-center gap-2 hover:brightness-110 shadow-md transition-all cursor-pointer"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Parent Support Group */}
          <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm flex flex-col justify-between group">
            <div>
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?auto=format&fit=crop&q=80&w=800"
                  alt="Parent Support Group"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 flex items-center gap-3 text-white">
                  <div className="w-10 h-10 rounded-xl bg-teal flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">
                    Parent Support Group
                  </h2>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-700 leading-relaxed text-base">
                  Supporting Children with Kidney Diseases Through Awareness, Early Care, and Community Support.
                </p>
              </div>
            </div>
            <div className="p-8 pt-0">
              <Link
                href="/contact"
                className="w-full bg-teal text-white font-bold py-3.5 px-6 rounded-xl text-sm flex items-center justify-center gap-2 hover:brightness-110 shadow-md transition-all cursor-pointer"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
