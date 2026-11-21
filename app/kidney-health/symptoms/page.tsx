import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
      subtitle: 'Periorbital Puffiness & Fluid Retention',
      icon: Eye,
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600',
      detail:
        'Puffiness around the eyes (periorbital edema), particularly noticeable upon waking in the morning. Later progressing to swollen feet, ankles, legs, or distended abdomen (ascites). This often signifies protein loss through damaged kidney filters (Nephrotic Syndrome) or fluid overload.',
      action: 'Check urine for protein using a dipstick or see a pediatrician immediately.'
    },
    {
      id: 'blood-in-urine',
      name: 'Blood in Urine (Hematuria)',
      subtitle: 'Discolored or Smoky Urine',
      icon: Droplet,
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600',
      detail:
        'Urine appearing smoky, reddish, pink, or cola/tea-colored. It may occur after a throat infection (Glomerulonephritis), with a UTI, or due to kidney stones. Microscopic blood may not be visible to the naked eye but appears on urine routine tests.',
      action: 'Requires urgent urinalysis and blood pressure check.'
    },
    {
      id: 'frothy-urine',
      name: 'Frothy or Foamy Urine (Proteinuria)',
      subtitle: 'Persistent Bubble Formation',
      icon: Activity,
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600',
      detail:
        'Urine that looks unusually bubbly or frothy and requires multiple flushes. This indicates that the kidneys are leaking large amounts of albumin protein into the urine.',
      action: 'Measure spot urine protein-to-creatinine ratio (UPCR).'
    },
    {
      id: 'poor-growth',
      name: 'Poor Growth & Failure to Thrive',
      subtitle: 'Developmental Milestones Lagging',
      icon: TrendingDown,
      image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=600',
      detail:
        'Children with chronic kidney conditions often suffer from poor appetite, fatigue, pallor (anemia), and lag significantly behind standard growth charts in height and weight.',
      action: 'Review pediatric growth curves and check kidney function (KFT).'
    },
    {
      id: 'high-blood-pressure',
      name: 'High Blood Pressure in Children',
      subtitle: 'Secondary Pediatric Hypertension',
      icon: Activity,
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600',
      detail:
        'Unlike adults, hypertension in children is almost always secondary to an underlying kidney disease. It may be asymptomatic or cause headaches, irritability, or dizziness.',
      action: 'Ensure blood pressure is routinely checked with an age-appropriate cuff.'
    },
    {
      id: 'fever-uti',
      name: 'Unexplained Fever with Urinary Distress',
      subtitle: 'Pyelonephritis & Infection Signs',
      icon: Thermometer,
      image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=600',
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
          <span className="text-xs font-bold uppercase tracking-widest text-coral bg-coral/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Warning Signs Checklist
          </span>
          <h1 className="text-4xl text-navy font-bold mb-4">
            Common Symptoms of Unhealthy Kidneys
          </h1>
          <p className="text-gray-600 leading-relaxed text-base">
            Kidney symptoms in children are frequently subtle and easily mistaken for allergies, indigestion, or routine viral illnesses. Recognizing these indicators early protects children from irreversible complications.
          </p>
        </div>

        {/* Symptoms Detailed Cards with Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
          {symptoms.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                id={s.id}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-teal/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-52 w-full overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.name}
                      fill
                      className="object-cover group-hover:scale-106 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                    <span className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider text-white bg-coral/90 px-3 py-1 rounded-full shadow-sm backdrop-blur-sm">
                      {s.subtitle}
                    </span>
                    <div className="absolute bottom-4 right-4 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md shadow-md flex items-center justify-center text-navy">
                      <Icon className="w-5 h-5 text-coral" />
                    </div>
                  </div>

                  <div className="p-7">
                    <h3 className="text-2xl font-bold text-navy mb-3 group-hover:text-teal transition-colors">
                      {s.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                      {s.detail}
                    </p>
                  </div>
                </div>

                <div className="px-7 pb-7 pt-0">
                  <div className="bg-off-white p-4 rounded-xl border border-gray-200 text-xs font-semibold text-navy flex items-start gap-2">
                    <span className="text-teal uppercase tracking-wider font-bold shrink-0">Action:</span>
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
            <p className="text-white/80 text-sm max-w-xl font-light">
              Do not wait for symptoms to resolve on their own. Early consultation with a pediatric nephrologist can prevent permanent kidney injury.
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
