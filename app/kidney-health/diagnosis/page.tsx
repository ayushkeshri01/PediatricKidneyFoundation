import React from 'react';
import Link from 'next/link';
import { Stethoscope, Droplets, Activity, Scan, Microscope, HeartPulse, ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import { diagnosticTests } from '@/content/diagnosis';

export const metadata = {
  title: 'Diagnosis & Investigations | Pediatric Kidney Foundation',
  description: 'Parent guides to urine tests, blood tests (KFT), renal ultrasound, kidney biopsy, and pediatric blood pressure monitoring.'
};

export default function DiagnosisPage() {
  const iconMap: Record<string, React.ElementType> = {
    droplets: Droplets,
    activity: Activity,
    scan: Scan,
    microscope: Microscope,
    'heart-pulse': HeartPulse
  };

  return (
    <div className="bg-warm-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Kidney Health Hub', href: '/kidney-health' },
            { label: 'Diagnosis & Investigations' }
          ]}
        />

        {/* Header */}
        <div className="my-8 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-teal">
            Parent Guide to Investigations
          </span>
          <h1 className="text-4xl text-navy font-bold mt-2 mb-4">
            Diagnosis & Medical Tests
          </h1>
          <p className="text-gray-600 leading-relaxed text-base">
            Medical tests can feel daunting for children and families. Here is a clear, compassionate overview of standard pediatric kidney investigations, why they are ordered, and what you can expect during each procedure.
          </p>
        </div>

        {/* Diagnostic Tests Detailed Cards */}
        <div className="space-y-8 my-10">
          {diagnosticTests.map((test) => {
            const Icon = iconMap[test.iconName] || Stethoscope;
            return (
              <div
                key={test.id}
                id={test.slug}
                className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-sm hover:border-teal/30 transition-all"
              >
                <div className="flex flex-col sm:flex-row items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-teal/10 text-teal flex items-center justify-center shrink-0">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h2 className="text-2xl font-bold text-navy">{test.name}</h2>
                      <span className="text-xs font-bold text-teal bg-teal/10 px-3 py-1 rounded-full uppercase tracking-wider">
                        {test.tagline}
                      </span>
                    </div>

                    <p className="text-gray-700 text-base leading-relaxed mt-3 mb-6">
                      {test.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-gray-100 pt-6">
                      <div className="p-4 rounded-xl bg-off-white">
                        <p className="text-xs font-bold uppercase tracking-wider text-teal mb-1">
                          Clinical Purpose
                        </p>
                        <p className="text-xs text-gray-600 leading-relaxed">{test.purpose}</p>
                      </div>
                      <div className="p-4 rounded-xl bg-off-white">
                        <p className="text-xs font-bold uppercase tracking-wider text-navy mb-1">
                          What Parents & Children Can Expect
                        </p>
                        <p className="text-xs text-gray-600 leading-relaxed">{test.whatToExpect}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Back Link */}
        <div className="pt-6">
          <Link
            href="/kidney-health"
            className="inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-teal transition-colors"
          >
            ← Back to Kidney Health Hub
          </Link>
        </div>
      </div>
    </div>
  );
}
