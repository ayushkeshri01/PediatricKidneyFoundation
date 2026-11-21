import React from 'react';
import Link from 'next/link';
import { User, Stethoscope, Building, Heart, Hand, ArrowRight, CheckCircle2 } from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import { getInvolvedSections } from '@/content/getInvolved';

export const metadata = {
  title: 'Get Involved | Pediatric Kidney Foundation',
  description: 'Join the movement to protect young kidneys: volunteer, donate, partner as a medical professional, or sponsor CSR healthcare programs.'
};

export default function GetInvolvedPage() {
  return (
    <div className="bg-warm-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Get Involved' }]} />

        {/* Header */}
        <div className="my-8 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-teal">
            Collaborative Movement
          </span>
          <h1 className="text-4xl text-navy font-bold mt-2 mb-4">
            Get Involved: Saving Young Kidneys Together
          </h1>
          <p className="text-gray-600 leading-relaxed text-base">
            Improving children’s kidney health requires the collective efforts of individuals, healthcare professionals, educators, and organizations. Discover your pathway to make an enduring impact.
          </p>
        </div>

        {/* 3 Categories */}
        <div className="space-y-16 my-12">
          {getInvolvedSections.map((sec, idx) => (
            <div key={idx} className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm">
              <div className="max-w-2xl mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-teal">
                  Pathway 0{idx + 1}
                </span>
                <h2 className="text-3xl font-bold text-navy mt-1 mb-2">{sec.title}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{sec.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sec.options.map((opt, optIdx) => (
                  <div
                    key={optIdx}
                    className="p-6 rounded-2xl bg-off-white/80 border border-gray-100 hover:border-teal/30 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="font-bold text-navy text-lg mb-2">{opt.title}</h3>
                      <p className="text-gray-600 text-xs leading-relaxed mb-6">
                        {opt.description}
                      </p>
                    </div>
                    <div>
                      <Link
                        href={opt.actionHref}
                        className="bg-navy hover:bg-teal text-white font-bold text-xs py-2.5 px-4 rounded-lg inline-flex items-center gap-1.5 transition-colors"
                      >
                        {opt.actionText} <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Callout */}
        <div className="bg-coral text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Have a Custom Partnership Proposal?</h3>
            <p className="text-white/90 text-sm max-w-xl">
              We welcome innovative partnerships with universities, technology partners, pharmaceutical CSR wings, and international child health networks.
            </p>
          </div>
          <Link
            href="/contact?inquiry=partnership"
            className="bg-white text-navy px-8 py-3.5 rounded-xl font-bold text-sm whitespace-nowrap hover:bg-navy hover:text-white transition-all shadow-lg"
          >
            Contact Secretariat
          </Link>
        </div>
      </div>
    </div>
  );
}
