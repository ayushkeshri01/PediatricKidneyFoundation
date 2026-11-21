import React from 'react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';

export const metadata = {
  title: 'Terms of Service | Pediatric Kidney Foundation',
  description: 'Terms of service governing the use of the Pediatric Kidney Foundation digital platform.'
};

export default function TermsPage() {
  return (
    <div className="bg-warm-white min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Terms of Service' }]} />
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 my-8">
          <h1 className="text-3xl font-bold text-navy mb-6">Terms of Service</h1>
          <div className="space-y-4 text-gray-700 text-sm leading-relaxed">
            <p>
              Welcome to the official website of the Pediatric Kidney Foundation (PKF). By accessing and using this website, you agree to comply with the terms and conditions set forth herein.
            </p>
            <h2 className="text-xl font-bold text-navy mt-6 mb-2">1. Use of Website Content</h2>
            <p>
              All educational articles, illustrations, diagrams, and materials published on this portal are property of PKF and may be used for personal, educational, and non-commercial purposes with appropriate attribution.
            </p>
            <h2 className="text-xl font-bold text-navy mt-6 mb-2">2. Charitable Contributions</h2>
            <p>
              Donations made to the Pediatric Kidney Foundation are non-refundable and are utilized directly to fund pediatric dialysis, surgeries, diagnostics, and patient education in accordance with Indian trust laws and 80G tax exemption guidelines.
            </p>
            <h2 className="text-xl font-bold text-navy mt-6 mb-2">3. Governing Law</h2>
            <p>
              These terms are governed by the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the courts of New Delhi, India.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
