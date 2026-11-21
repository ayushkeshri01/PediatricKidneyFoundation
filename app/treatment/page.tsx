import React from 'react';
import Link from 'next/link';
import { RefreshCw, Heart, CheckCircle2, ArrowRight, ShieldCheck, HeartHandshake, PhoneCall } from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import { treatmentData } from '@/content/treatment';

export const metadata = {
  title: 'Treatment Journey: Dialysis & Transplant | PKF India',
  description: 'Parent guides to pediatric dialysis (peritoneal & hemodialysis) and kidney transplantation for children.'
};

export default function TreatmentPage() {
  return (
    <div className="bg-warm-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Treatment Journey' }]} />

        {/* Header */}
        <div className="my-8 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-teal">
            Pediatric Renal Care Pathways
          </span>
          <h1 className="text-4xl text-navy font-bold mt-2 mb-4">
            Treatment Journey: Dialysis & Transplantation
          </h1>
          <p className="text-gray-600 leading-relaxed text-base">
            When pediatric kidneys face severe injury or advanced chronic disease, modern medical therapies provide life-saving renal replacement. Here is what families need to know about peritoneal dialysis, hemodialysis, and kidney transplantation.
          </p>
        </div>

        {/* Treatment Modules */}
        <div className="space-y-12 my-12">
          {treatmentData.map((item) => (
            <div
              key={item.id}
              id={item.slug}
              className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm"
            >
              <div className="flex flex-col lg:flex-row items-start gap-8">
                <div className="w-16 h-16 rounded-2xl bg-teal/10 text-teal flex items-center justify-center shrink-0">
                  {item.id === 'dialysis' ? (
                    <RefreshCw className="w-8 h-8" />
                  ) : (
                    <Heart className="w-8 h-8 text-coral" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap mb-2">
                    <h2 className="text-3xl font-bold text-navy">{item.name}</h2>
                    <span className="text-xs font-bold text-teal bg-teal/10 px-3 py-1 rounded-full uppercase tracking-wider">
                      {item.tagline}
                    </span>
                  </div>

                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* When is it needed */}
                  <div className="p-4 rounded-xl bg-off-white border border-gray-100 mb-8">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-teal mb-1">
                      When Is This Recommended?
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{item.whenNeeded}</p>
                  </div>

                  {/* Types or Options */}
                  {item.typesOrOptions && (
                    <div className="mb-8">
                      <h3 className="text-lg font-bold text-navy mb-4">Treatment Options</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {item.typesOrOptions.map((opt, idx) => (
                          <div
                            key={idx}
                            className="p-6 rounded-2xl bg-warm-white border border-gray-200"
                          >
                            <h4 className="font-bold text-navy text-base mb-2">{opt.title}</h4>
                            <p className="text-xs text-gray-600 leading-relaxed">
                              {opt.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Living with treatment */}
                  <div className="p-6 rounded-2xl bg-teal/5 border border-teal/20">
                    <div className="flex items-start gap-3">
                      <ShieldCheck className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-bold text-navy text-sm uppercase tracking-wider mb-1">
                          Life & Hope with Treatment
                        </h4>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {item.lifeWithTreatment}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Financial & Support CTA */}
        <div className="bg-navy text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-coral">
              Treatment Subsidies & Aid
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold mt-1 mb-2 text-white">
              Need Financial Assistance for Dialysis or Surgery?
            </h3>
            <p className="text-white/80 text-sm max-w-xl font-light">
              PKF sponsors dialysis consumables, immunosuppressants, and corrective surgical procedures for families in need. Reach out to our Patient Assistance Desk.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0 w-full sm:w-auto">
            <Link
              href="/support"
              className="bg-coral text-white px-8 py-3.5 rounded-xl font-bold text-sm text-center hover:brightness-110 shadow-lg"
            >
              Patient Support Services
            </Link>
            <Link
              href="/contact?inquiry=financial-aid"
              className="bg-white/10 border border-white/20 text-white px-8 py-3.5 rounded-xl font-bold text-sm text-center hover:bg-white/20"
            >
              Apply for Aid
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
