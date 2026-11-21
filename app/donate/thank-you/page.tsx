'use client';

import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle2, Heart, ArrowRight, Download, Mail, Home } from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';

function ThankYouContent() {
  const searchParams = useSearchParams();
  const amount = searchParams.get('amount') || '2,500';
  const name = searchParams.get('name') || 'Generous Donor';

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 sm:p-14 border border-gray-100 shadow-xl text-center my-8">
      <div className="w-20 h-20 rounded-full bg-teal/10 text-teal flex items-center justify-center mx-auto mb-6">
        <CheckCircle2 className="w-10 h-10" />
      </div>

      <span className="text-xs font-bold uppercase tracking-widest text-teal bg-teal/10 px-4 py-1.5 rounded-full inline-block mb-4">
        Donation Acknowledged
      </span>

      <h1 className="text-3xl sm:text-4xl font-extrabold text-navy mb-4">
        Thank You, {name}!
      </h1>

      <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
        Your contribution of <strong className="text-navy font-bold">₹{Number(amount).toLocaleString('en-IN')}</strong> will directly help children battling kidney diseases receive life-saving dialysis, essential medicines, and diagnostic care.
      </p>

      {/* Donation Receipt Acknowledgement card */}
      <div className="bg-off-white p-6 rounded-2xl border border-gray-200 text-left mb-8 space-y-3">
        <div className="flex items-center gap-2 text-navy font-bold text-sm">
          <Heart className="w-4 h-4 text-coral" />
          <span>Donation Receipt &amp; Contribution Record</span>
        </div>
        <p className="text-xs text-gray-600 leading-relaxed">
          An official charitable donation acknowledgment receipt has been queued for dispatch to your registered email address.
        </p>
        <p className="text-xs text-gray-500 font-mono">
          Receipt Reference: PKF-{Math.floor(100000 + Math.random() * 900000)}-2024
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link
          href="/"
          className="bg-navy text-white px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-teal transition-colors inline-flex items-center justify-center gap-2"
        >
          <Home className="w-4 h-4" /> Return to PKF Homepage
        </Link>
        <Link
          href="/programs"
          className="border-2 border-navy text-navy px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-navy hover:text-white transition-all inline-flex items-center justify-center gap-2"
        >
          Explore Our Programs <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <div className="bg-warm-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Donate', href: '/donate' }, { label: 'Confirmation' }]} />
        <Suspense fallback={<div className="text-center py-20">Loading confirmation...</div>}>
          <ThankYouContent />
        </Suspense>
      </div>
    </div>
  );
}
