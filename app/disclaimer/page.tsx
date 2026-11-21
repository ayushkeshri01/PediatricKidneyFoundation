import React from 'react';
import Link from 'next/link';
import { AlertTriangle, ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';

export const metadata = {
  title: 'Medical Disclaimer | Pediatric Kidney Foundation',
  description: 'Important medical disclaimer regarding the educational nature of the PKF website content.'
};

export default function DisclaimerPage() {
  return (
    <div className="bg-warm-white min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Medical Disclaimer' }]} />
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 my-8">
          <div className="w-12 h-12 rounded-2xl bg-coral/10 text-coral flex items-center justify-center mb-6">
            <AlertTriangle className="w-6 h-6" />
          </div>

          <h1 className="text-3xl font-bold text-navy mb-4">Medical Disclaimer</h1>

          <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
            <div className="p-4 bg-coral/5 border border-coral/20 rounded-xl text-navy font-medium">
              The information provided on the Pediatric Kidney Foundation (PKF) website is strictly for general educational and informational purposes. It is not intended to be a substitute for professional medical advice, clinical diagnosis, or treatment.
            </div>

            <h2 className="text-xl font-bold text-navy mt-6 mb-2">
              Always Consult a Pediatric Specialist
            </h2>
            <p>
              Always seek the advice of your pediatrician, pediatric nephrologist, or other qualified healthcare provider with any questions you may have regarding a medical condition affecting your child. Never disregard professional clinical advice or delay in seeking it because of something you have read on this website.
            </p>

            <h2 className="text-xl font-bold text-navy mt-6 mb-2">Emergency Situations</h2>
            <p>
              If your child has an acute medical emergency—such as sudden inability to pass urine, severe breathing distress, convulsions, or profound lethargy—immediately transport your child to the nearest hospital casualty or emergency department.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <Link
              href="/contact?inquiry=medical"
              className="bg-navy hover:bg-teal text-white text-xs font-bold py-3 px-6 rounded-xl inline-flex items-center gap-2 transition-colors"
            >
              Contact PKF Medical Guidance Desk <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
