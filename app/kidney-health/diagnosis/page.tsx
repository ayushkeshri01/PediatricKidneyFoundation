import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Droplets, Activity, Scan, Microscope, HeartPulse, ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import { diagnosticTests } from '@/content/diagnosis';

export const metadata = {
  title: 'Diagnosis & Investigations | Pediatric Kidney Foundation',
  description: 'Urine Tests, Blood Tests, Ultrasound, Kidney Biopsy, and Blood Pressure Monitoring for children.'
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
          <span className="text-xs font-bold uppercase tracking-widest text-teal block mb-2">
            Kidney Health Hub
          </span>
          <h1 className="text-4xl text-navy font-bold mb-4">
            Diagnosis &amp; Investigations
          </h1>
          <p className="text-gray-600 leading-relaxed text-base">
            Essential tests and procedures recommended by doctors to assess your child&apos;s kidney function and health.
          </p>
        </div>

        {/* Tests List */}
        <div className="space-y-8 my-10">
          {diagnosticTests.map((test) => {
            const Icon = iconMap[test.iconName] || Activity;
            const imgUrl = testImages[test.slug] || 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600';

            return (
              <div
                key={test.id}
                id={test.slug}
                className="bg-white rounded-3xl border border-gray-100 shadow-xs overflow-hidden hover:shadow-lg transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  <div className="lg:col-span-4 relative min-h-[200px] lg:min-h-full">
                    <Image
                      src={imgUrl}
                      alt={test.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent flex items-end p-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md shadow-md flex items-center justify-center text-teal">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-white text-xs font-bold uppercase tracking-wider">
                          Diagnosis &amp; Investigations
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-8 p-8 sm:p-10">
                    <h2 className="text-2xl font-bold text-navy mb-3">{test.name}</h2>
                    <p className="text-gray-700 text-base leading-relaxed">
                      {test.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-4">
          <Link
            href="/treatment"
            className="inline-flex items-center gap-2 bg-teal text-white font-bold px-6 py-3 rounded-xl text-sm hover:brightness-110 transition-all"
          >
            Treatment Journey <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/kidney-health/diseases"
            className="inline-flex items-center gap-2 border border-navy text-navy font-bold px-6 py-3 rounded-xl text-sm hover:bg-navy hover:text-white transition-all"
          >
            Kidney Diseases in Children
          </Link>
        </div>
      </div>
    </div>
  );
}
