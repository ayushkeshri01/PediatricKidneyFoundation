import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import { diseasesData } from '@/content/diseases';

export const metadata = {
  title: 'Pediatric Kidney Disease Library | PKF India',
  description: 'Evidence-based medical guides on Nephrotic Syndrome, UTI, Chronic Kidney Disease, CAKUT, AKI, Glomerulonephritis, and Kidney Stones.'
};

export default function DiseasesIndexPage() {
  return (
    <div className="bg-warm-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Kidney Health Hub', href: '/kidney-health' },
            { label: 'Disease Library' }
          ]}
        />

        {/* Header */}
        <div className="my-8 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-teal">
            Clinical Reference Library
          </span>
          <h1 className="text-4xl text-navy font-bold mt-2 mb-4">
            Pediatric Kidney Diseases
          </h1>
          <p className="text-gray-600 leading-relaxed text-base">
            Detailed, parent-friendly medical guides authored and reviewed by pediatric nephrologists. Select a condition below to explore symptoms, root causes, diagnostic tests, treatment pathways, and warning signs.
          </p>
        </div>

        {/* Grid of all 7 diseases */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
          {diseasesData.map((disease) => (
            <div
              key={disease.id}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-teal/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-teal/10 text-teal">
                    {disease.category}
                  </span>
                  <span className="text-xs text-gray-400 font-mono">
                    {disease.symptoms.length} Symptoms
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-navy group-hover:text-teal transition-colors mb-3">
                  {disease.name}
                </h2>

                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {disease.shortDescription}
                </p>

                <div className="space-y-2 border-t border-gray-100 pt-4 mb-6">
                  <p className="text-xs font-bold text-navy">Key Highlights:</p>
                  <ul className="text-xs text-gray-500 space-y-1">
                    <li className="line-clamp-1">• {disease.symptoms[0]}</li>
                    <li className="line-clamp-1">• {disease.treatment[0]}</li>
                  </ul>
                </div>
              </div>

              <div>
                <Link
                  href={`/kidney-health/diseases/${disease.slug}`}
                  className="w-full bg-off-white group-hover:bg-teal group-hover:text-white text-navy font-bold text-sm py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all"
                >
                  Explore Full Condition Guide
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Help Banner */}
        <div className="mt-16 bg-navy text-white rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Unsure about your child&apos;s symptoms?</h3>
            <p className="text-white/80 text-sm max-w-xl">
              Always consult a qualified pediatric nephrologist early. Subtle symptoms like morning eye puffiness or tea-colored urine require immediate medical attention.
            </p>
          </div>
          <Link
            href="/contact?inquiry=evaluation"
            className="bg-coral text-white px-8 py-3.5 rounded-xl font-bold text-sm whitespace-nowrap hover:brightness-110 shadow-lg"
          >
            Get Help for Your Child
          </Link>
        </div>
      </div>
    </div>
  );
}
