import React from 'react';
import Link from 'next/link';
import { HelpCircle, PhoneCall, ArrowRight, ShieldCheck, Search } from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import Accordion from '@/components/ui/Accordion';
import { pkfFAQs } from '@/content/faq';

export const metadata = {
  title: 'Frequently Asked Questions (FAQs) | Pediatric Kidney Foundation',
  description: 'Find clear, doctor-verified answers to common questions about pediatric kidney health, symptoms, diet, nephrotic syndrome, dialysis, and treatment.'
};

export default function FAQPage() {
  const faqItems = pkfFAQs.map((faq) => ({
    id: faq.id,
    title: `${faq.id}. ${faq.question}`,
    content: (
      <div>
        <p className="mb-2 text-gray-700 leading-relaxed">{faq.answer}</p>
        {faq.category && (
          <span className="inline-block mt-2 text-[11px] font-bold uppercase tracking-wider text-teal bg-teal/10 px-2.5 py-1 rounded-full">
            {faq.category}
          </span>
        )}
      </div>
    )
  }));

  const categories = Array.from(new Set(pkfFAQs.map((f) => f.category)));

  return (
    <div className="bg-warm-white min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Kidney Health Hub', href: '/kidney-health' },
            { label: 'Frequently Asked Questions (FAQs)' }
          ]}
        />

        {/* Hero Header */}
        <div className="my-8 bg-white p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-sm">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal/10 rounded-full mb-4">
            <HelpCircle className="w-4 h-4 text-teal" />
            <span className="text-xs font-bold uppercase tracking-widest text-teal">
              Patient &amp; Family Guidance
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 text-base sm:text-lg font-light leading-relaxed max-w-3xl">
            Clear, compassionate, and clinically verified answers prepared by pediatric nephrologists to help parents understand childhood kidney conditions, treatments, and daily care.
          </p>

          {/* Quick Category Badges */}
          <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-gray-100">
            <span className="text-xs font-bold text-gray-400 self-center mr-2">Topics:</span>
            {categories.map((cat, idx) => (
              <span
                key={idx}
                className="text-xs font-semibold px-3 py-1 bg-off-white rounded-lg text-navy border border-gray-200"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>

        {/* FAQ Accordion List */}
        <div className="my-10 bg-white p-6 sm:p-10 rounded-3xl border border-gray-100 shadow-sm">
          <Accordion items={faqItems} />
        </div>

        {/* Need More Help Card */}
        <div className="bg-navy rounded-3xl p-8 sm:p-12 text-white shadow-xl my-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-coral">
              Have a Specific Question?
            </span>
            <h3 className="text-2xl font-bold mt-1 mb-2 text-white">
              Connect with Our Clinical Support Desk
            </h3>
            <p className="text-sm text-white/80 max-w-xl font-light leading-relaxed">
              Every child&apos;s condition is unique. If you have concerns about your child&apos;s symptoms or test reports, our clinical team is here to guide you.
            </p>
          </div>
          <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <Link
              href="/contact?inquiry=help"
              className="bg-coral hover:brightness-110 active:scale-95 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-all text-center flex items-center justify-center gap-2 shadow-lg"
            >
              <PhoneCall className="w-4 h-4" /> Ask a Question
            </Link>
            <Link
              href="/kidney-health"
              className="border border-white/30 hover:bg-white/10 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-all text-center"
            >
              Health Hub Overview
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
