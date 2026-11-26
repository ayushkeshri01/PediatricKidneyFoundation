import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Droplets, Filter, HeartPulse, ShieldCheck, Activity, Gauge } from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';

export const metadata = {
  title: 'Understanding Healthy Kidneys | Pediatric Kidney Foundation',
  description: 'Understanding how the kidneys function helps families recognize the importance of protecting kidney health from an early age.'
};

export default function HealthyKidneysPage() {
  const functions = [
    { title: 'Remove waste products from the blood', icon: Filter },
    { title: 'Regulate body fluids and electrolytes', icon: Droplets },
    { title: 'Maintain healthy blood pressure', icon: Gauge },
    { title: 'Produce hormones that stimulate red blood cell production', icon: HeartPulse },
    { title: 'Support healthy bone growth', icon: ShieldCheck },
    { title: 'Contribute to normal growth and development in children', icon: Activity }
  ];

  return (
    <div className="bg-warm-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Kidney Health Hub', href: '/kidney-health' },
            { label: 'Understanding Healthy Kidneys' }
          ]}
        />

        {/* Hero Section */}
        <div className="my-8 bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-widest text-teal block mb-3">
                Kidney Health Hub
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl text-navy font-bold mb-6 leading-tight">
                Understanding Healthy Kidneys
              </h1>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-6">
                The kidneys are remarkable organs that perform essential functions necessary for life. They remove waste products from the blood, regulate body fluids and electrolytes, maintain healthy blood pressure, produce hormones that stimulate red blood cell production, and support healthy bone growth. In children, healthy kidneys are particularly important because they contribute to normal growth and development. Understanding how the kidneys function helps families recognize the importance of protecting kidney health from an early age.
              </p>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden shadow-xl border-2 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
                  alt="Understanding Healthy Kidneys"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Key Functions */}
        <div className="my-12">
          <h2 className="text-2xl font-bold text-navy mb-6">
            Essential Functions of the Kidneys
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {functions.map((fn, idx) => {
              const Icon = fn.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal/10 text-teal flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-navy text-sm">{fn.title}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-4">
          <Link
            href="/kidney-health/symptoms"
            className="inline-flex items-center gap-2 bg-teal text-white font-bold px-6 py-3 rounded-xl text-sm hover:brightness-110 transition-all"
          >
            Common Symptoms of Unhealthy Kidneys <ArrowRight className="w-4 h-4" />
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
