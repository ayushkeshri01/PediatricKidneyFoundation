import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RefreshCw, Heart, CheckCircle2, ArrowRight, ShieldCheck, HeartHandshake, PhoneCall } from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import { treatmentData } from '@/content/treatment';

export const metadata = {
  title: 'Treatment Journey: Dialysis & Transplant | PKF India',
  description: 'Parent guides to pediatric dialysis (peritoneal & hemodialysis) and kidney transplantation for children.'
};

export default function TreatmentPage() {
  const treatmentImages: Record<string, string> = {
    dialysis: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
    transplant: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=800'
  };

  return (
    <div className="bg-warm-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Treatment Journey' }]} />

        {/* Header */}
        <div className="my-8 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-teal bg-teal/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Pediatric Renal Care Pathways
          </span>
          <h1 className="text-4xl text-navy font-bold mb-4">
            Treatment Journey: Dialysis &amp; Transplantation
          </h1>
          <p className="text-gray-600 leading-relaxed text-base">
            When pediatric kidneys face severe injury or advanced chronic disease, modern medical therapies provide life-saving renal replacement. Here is what families need to know about peritoneal dialysis, hemodialysis, and kidney transplantation.
          </p>
        </div>

        {/* Treatment Modules with Visual Imagery */}
        <div className="space-y-16 my-12">
          {treatmentData.map((item) => (
            <div
              key={item.id}
              id={item.slug}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Visual Left Header */}
                <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-full">
                  <Image
                    src={treatmentImages[item.slug] || 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800'}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-transparent to-black/20 flex flex-col justify-between p-6">
                    <span className="self-start text-[10px] font-bold text-white uppercase tracking-wider px-3 py-1 rounded-full bg-teal shadow-sm">
                      {item.tagline}
                    </span>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-2xl bg-white/95 backdrop-blur-md shadow-md flex items-center justify-center text-teal">
                        {item.id === 'dialysis' ? (
                          <RefreshCw className="w-6 h-6 text-teal" />
                        ) : (
                          <Heart className="w-6 h-6 text-coral" />
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-white drop-shadow-md">{item.name}</h3>
                    </div>
                  </div>
                </div>

                {/* Content Right Column */}
                <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-navy mb-4">{item.name}</h2>
                    <p className="text-gray-600 text-base leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* When is it needed */}
                    <div className="p-5 rounded-2xl bg-off-white border border-gray-100 mb-6">
                      <h3 className="text-xs font-bold uppercase tracking-wider text-teal mb-1">
                        When Is This Recommended?
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">{item.whenNeeded}</p>
                    </div>

                    {/* Types or Options */}
                    {item.typesOrOptions && (
                      <div className="mb-6">
                        <h3 className="text-base font-bold text-navy mb-3">Care Modalities</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {item.typesOrOptions.map((opt, idx) => (
                            <div
                              key={idx}
                              className="p-5 rounded-2xl bg-warm-white border border-gray-200"
                            >
                              <h4 className="font-bold text-navy text-sm mb-1.5">{opt.title}</h4>
                              <p className="text-xs text-gray-600 leading-relaxed">
                                {opt.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Living with treatment */}
                    <div className="p-5 rounded-2xl bg-teal/5 border border-teal/20">
                      <div className="flex items-start gap-3">
                        <ShieldCheck className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-bold text-navy text-xs uppercase tracking-wider mb-1">
                            Life &amp; Hope with Treatment
                          </h4>
                          <p className="text-xs text-gray-700 leading-relaxed">
                            {item.lifeWithTreatment}
                          </p>
                        </div>
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
            <span className="text-xs font-bold uppercase tracking-widest text-coral bg-coral/20 px-3 py-1 rounded-full inline-block mb-3">
              Treatment Subsidies &amp; Aid
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-white">
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
