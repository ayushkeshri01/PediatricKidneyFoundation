import React from 'react';
import Link from 'next/link';
import { FileText, Mail } from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';

export const metadata = {
  title: 'Annual Reports | Pediatric Kidney Foundation',
  description: 'Annual reports and transparency information for the Pediatric Kidney Foundation.'
};

export default function AnnualReportsPage() {
  return (
    <div className="bg-warm-white min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Annual Reports' }]} />
        <div className="my-8 bg-white rounded-3xl border border-gray-100 shadow-sm p-8 sm:p-12">
          <h1 className="text-4xl font-bold text-navy mb-4">Annual Reports</h1>
          <p className="text-gray-700 text-sm leading-relaxed mb-8">
            Pediatric Kidney Foundation is committed to transparency and accountability. Published annual reports and audited financial statements will be made available here.
          </p>

          <div className="bg-off-white border border-gray-200 rounded-2xl p-6 mb-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-teal/10 text-teal flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <h2 className="text-xl font-bold text-navy">Reports Archive</h2>
            </div>
            <p className="text-sm text-gray-600">Reports are currently being prepared for publication. Please contact us to request the latest available report.</p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link href="/contact?inquiry=general" className="inline-flex items-center gap-2 bg-teal text-white font-bold px-6 py-3 rounded-xl text-sm hover:brightness-110 transition-all">
              <Mail className="w-4 h-4" /> Request a Report
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 border border-navy text-navy font-bold px-6 py-3 rounded-xl text-sm hover:bg-navy hover:text-white transition-all">
              Contact PKF
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
