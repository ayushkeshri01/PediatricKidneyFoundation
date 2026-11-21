import React from 'react';
import Link from 'next/link';
import { AlertTriangle, ArrowRight, Eye, Droplet, TrendingDown, Activity, Thermometer } from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';

export const metadata = {
  title: 'Common Symptoms of Unhealthy Kidneys | PKF India',
  description: 'Recognizing subtle signs of pediatric kidney disease: swelling, hematuria, frothy urine, growth stunting, and pediatric hypertension.'
};

export default function SymptomsPage() {
  const symptoms = [
    {
      id: 'swelling',
      name: 'Swelling (Edema)',
      icon: Eye,
      detail:
        'Puffiness around the eyes (periorbital edema), particularly noticeable upon waking in the morning. Later progressing to swollen feet, ankles, legs, or distended abdomen (ascites). This often signifies protein loss through damaged kidney filters (Nephrotic Syndrome) or fluid overload.',
      action: 'Check urine for protein using a dipstick or see a pediatrician immediately.'
    },
    {
      id: 'blood-in-urine',
      name: 'Blood in Urine (Hematuria)',
      icon: Droplet,
      detail:
        'Urine appearing smoky, reddish, pink, or cola/tea-colored. It may occur after a throat infection (Glomerulonephritis), with a UTI, or due to kidney stones. Microscopic blood may not be visible to the naked eye but appears on urine routine tests.',
      action: 'Requires urgent urinalysis and blood pressure check.'
    },
    {
      id: 'frothy-urine',
      name: 'Frothy or Foamy Urine (Proteinuria)',
      icon: Activity,
      detail:
        'Urine that looks unusually bubbly or frothy and requires multiple flushes. This indicates that the kidneys are leaking large amounts of albumin protein into the urine.',
      action: 'Measure spot urine protein-to-creatinine ratio (UPCR).'
    },
    {
      id: 'poor-growth',
      name: 'Poor Growth & Failure to Thrive',
      icon: TrendingDown,
      detail:
        'Children with chronic kidney conditions often suffer from poor appetite, fatigue, pallor (anemia), and lag significantly behind standard growth charts in height and weight.',
      action: 'Review pediatric growth curves and check kidney function (KFT).'
    },
    {
      id: 'high-blood-pressure',
      name: 'High Blood Pressure in Children',
      icon: Activity,
      detail:
        'Unlike adults, hypertension in children is almost always secondary to an underlying kidney disease. It may be asymptomatic or cause headaches, irritability, or dizziness.',
      action: 'Ensure blood pressure is routinely checked with an age-appropriate cuff.'
    },
    {
      id: 'fever-uti',
      name: 'Unexplained Fever with Urinary Distress',
      icon: Thermometer,
      detail:
        'In babies, high fever without cough or cold may be the only warning sign of a severe kidney infection (pyelonephritis). Older children report painful, frequent urination.',
      action: 'Get a clean-catch urine culture before starting antibiotics.'
    }
  ];

  return (
    <div className="bg-warm-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Kidney Health Hub', href: '/kidney-health' },
            { label: 'Symptoms' }
          ]}
        />

        {/* Header */}
        <div className="my-8 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-coral">
            Warning Signs Checklist
          </span>
          <h1 className="text-4xl text-navy font-bold mt-2 mb-4">
            Common Symptoms of Unhealthy Kidneys
          </h1>
          <p className="text-gray-600 leading-relaxed text-base">
            Kidney symptoms in children are frequently subtle and easily mistaken for allergies, indigestion, or routine viral illnesses. Recognizing these indicators early protects children from irreversible complications.
          </p>
        </div>

        {/* Symptoms Detailed Cards */}
        <div className="space-y-6 my-10">
          {symptoms.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                id={s.id}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:border-teal/30 transition-all flex flex-col md:flex-row gap-6 items-start"
              >
                <div className="w-12 h-12 rounded-xl bg-coral/10 text-coral flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-navy mb-2">{s.name}</h3>
                  <p className="text-gray-600 leading-relaxed mb-4 text-base">{s.detail}</p>
                  <div className="bg-off-white p-3.5 rounded-xl border border-gray-200 text-xs font-semibold text-navy flex items-center gap-2">
                    <span className="text-teal uppercase tracking-wider font-bold">Recommended Step:</span>
                    <span>{s.action}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="bg-navy text-white rounded-3xl p-8 sm:p-12 flex flex-col sm:flex-row justify-between items-center gap-6 mt-12">
          <div>
            <h3 className="text-2xl font-bold mb-2">Notice any of these symptoms in your child?</h3>
            <p className="text-white/80 text-sm max-w-xl">
              Do not wait for symptoms to resolve on their own. Early consultation can prevent permanent kidney injury.
            </p>
          </div>
          <Link
            href="/contact?inquiry=evaluation"
            className="bg-coral text-white px-8 py-3.5 rounded-xl font-bold text-sm whitespace-nowrap hover:brightness-110 shadow-lg"
          >
            Connect with a Pediatric Specialist
          </Link>
        </div>
      </div>
    </div>
  );
}
