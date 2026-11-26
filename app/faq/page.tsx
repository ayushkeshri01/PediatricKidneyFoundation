import React from 'react';
import Link from 'next/link';
import { HelpCircle, PhoneCall } from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import Accordion from '@/components/ui/Accordion';
import { pkfFAQs } from '@/content/faq';

export const metadata = {
  title: 'Frequently Asked Questions | Pediatric Kidney Foundation',
  description: 'Frequently Asked Questions about pediatric kidney disease, symptoms, diet, dialysis, and care.'
};

export default function FAQPage() {
  const faqItems = pkfFAQs.map((faq) => ({
    id: faq.id,
    title: `${faq.id}. ${faq.question}`,
    content: (
      <p className="text-gray-700 leading-relaxed text-sm">{faq.answer}</p>
    )
  }));

  return (
    <div className="bg-warm-white min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Kidney Health Hub', href: '/kidney-health' },
            { label: 'Frequently Asked Questions' }
          ]}
        />

        {/* Hero Header */}
        <div className="my-8 bg-white p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-xs">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal/10 rounded-full mb-4">
            <HelpCircle className="w-4 h-4 text-teal" />
            <span className="text-xs font-bold uppercase tracking-widest text-teal">
              Kidney Health Hub
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-600 text-base leading-relaxed">
            Essential questions and answers regarding childhood kidney health, warning signs, treatments, and daily care.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="my-10 bg-white p-6 sm:p-10 rounded-3xl border border-gray-100 shadow-xs">
          <Accordion items={faqItems} />
        </div>

        {/* Contact Help Card */}
        <div className="bg-navy rounded-3xl p-8 sm:p-10 text-white shadow-xl my-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Where can I get help?
            </h3>
            <p className="text-sm text-white/80 max-w-xl leading-relaxed">
              If your child has been diagnosed with a kidney disease or you have concerns about their kidney health, consult your pediatrician or a pediatric nephrologist.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              href="/contact?inquiry=help"
              className="bg-coral hover:brightness-110 active:scale-95 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-all text-center flex items-center justify-center gap-2 shadow-lg"
            >
              <PhoneCall className="w-4 h-4" /> Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
