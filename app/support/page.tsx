import React from 'react';
import Link from 'next/link';
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

        {/* 2 Main Items: Need Help? & Parent Support Group */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
          {/* Need Help? */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-coral/10 text-coral flex items-center justify-center mb-6">
                <Heart className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-navy mb-4">
                Need Help?
              </h2>
              <p className="text-gray-700 leading-relaxed text-base mb-6">
                If your child has been diagnosed with a kidney disease or you have concerns about their kidney health, consult your pediatrician or a pediatric nephrologist. Early medical care and regular follow-up can make a significant difference in your child&apos;s health and well-being.
              </p>
            </div>
            <div>
              <Link
                href="/contact"
                className="w-full bg-coral text-white font-bold py-3.5 px-6 rounded-xl text-sm flex items-center justify-center gap-2 hover:brightness-110 shadow-md transition-all cursor-pointer"
              >
                Contact Us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Parent Support Group */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal/10 text-teal flex items-center justify-center mb-6">
                <Users className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold text-navy mb-4">
                Parent Support Group
              </h2>
              <p className="text-gray-700 leading-relaxed text-base mb-6">
                Supporting Children with Kidney Diseases Through Awareness, Early Care, and Community Support.
              </p>
            </div>
            <div>
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
