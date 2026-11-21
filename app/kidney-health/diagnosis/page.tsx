import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

  const testImages: Record<string, string> = {
    'urine-tests': 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600',
    'blood-tests': 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600',
    ultrasound: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600',
    'kidney-biopsy': 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600',
    'blood-pressure-monitoring': 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600'
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
          <span className="text-xs font-bold uppercase tracking-widest text-teal bg-teal/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Parent Guide to Investigations
          </span>
          <h1 className="text-4xl text-navy font-bold mb-4">
            Diagnosis &amp; Medical Tests
          </h1>
          <p className="text-gray-600 leading-relaxed text-base">
            Medical tests can feel daunting for children and families. Here is a clear, compassionate overview of standard pediatric kidney investigations, why they are ordered, and what you can expect during each procedure.
          </p>
        </div>

        {/* Diagnostic Tests Detailed Cards with Visuals */}
        <div className="space-y-10 my-10">
          {diagnosticTests.map((test) => {
            const Icon = iconMap[test.iconName] || Stethoscope;
            const imgUrl = testImages[test.slug] || 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600';

            return (
              <div
                key={test.id}
                id={test.slug}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Visual Left Column */}
                  <div className="lg:col-span-4 relative min-h-[220px] lg:min-h-full">
                    <Image
                      src={imgUrl}
                      alt={test.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent flex items-end p-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-xl bg-white/90 backdrop-blur-md shadow-md flex items-center justify-center text-teal">
                          <Icon className="w-6 h-6" />
                        </div>
                        <span className="text-white text-xs font-bold uppercase tracking-wider drop-shadow-md">
                          {test.tagline}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Right Column */}
                  <div className="lg:col-span-8 p-8 sm:p-10 flex flex-col justify-between">
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-3">{test.name}</h2>
                      <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
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
                            What Parents &amp; Children Can Expect
                          </p>
                          <p className="text-xs text-gray-600 leading-relaxed">{test.whatToExpect}</p>
                        </div>
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
