import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { HeartPulse, CheckCircle2, ArrowRight, ShieldCheck, Activity, Sparkles, Filter, Droplets, Gauge } from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';

export const metadata = {
  title: 'Understanding Healthy Kidneys | Pediatric Kidney Foundation',
  description: 'How healthy kidneys function in childhood, regulate growth and fluids, and why protecting them early matters.'
};

export default function HealthyKidneysPage() {
  const kidneyFunctions = [
    {
      title: 'Waste & Toxin Removal',
      description: 'Healthy kidneys continuously filter the entire blood volume, removing metabolic wastes like urea and creatinine through urine.',
      icon: Filter
    },
    {
      title: 'Fluid & Electrolyte Regulation',
      description: 'They maintain exact sodium, potassium, and water balance, preventing dehydration or dangerous bodily swelling.',
      icon: Droplets
    },
    {
      title: 'Blood Pressure Control',
      description: 'Through the renin-angiotensin system, healthy kidneys regulate arterial blood pressure across childhood growth stages.',
      icon: Gauge
    },
    {
      title: 'Red Blood Cell Production',
      description: 'The kidneys secrete the essential hormone erythropoietin (EPO), which commands bone marrow to make oxygen-carrying red blood cells.',
      icon: HeartPulse
    },
    {
      title: 'Healthy Bone Development',
      description: 'They convert dietary Vitamin D into its active form (calcitriol), enabling the body to absorb calcium for growing childhood bones.',
      icon: ShieldCheck
    },
    {
      title: 'Normal Pediatric Growth',
      description: 'Proper metabolic balance and acid-base regulation by the kidneys are indispensable for reaching standard height and weight milestones.',
      icon: Activity
    }
  ];

  return (
    <div className="bg-warm-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Kidney Health Hub', href: '/kidney-health' },
            { label: 'Healthy Kidneys' }
          ]}
        />

        {/* Hero Section with Clinical Visual */}
        <div className="my-8 bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-widest text-teal bg-teal/10 px-3.5 py-1.5 rounded-full inline-block mb-4">
                Parent &amp; Caregiver Educational Guide
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl text-navy font-extrabold mb-4 leading-tight">
                Understanding Healthy Kidneys in Children
              </h1>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg font-light mb-6">
                The kidneys are two bean-shaped organs that act as the master filtering engines of the human body. In children, healthy kidneys are particularly vital because they directly regulate physical growth, bone mineralization, red blood cell production, and active childhood vitality.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-bold text-navy">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-off-white rounded-lg border border-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-teal" /> Filters 180 Liters of Fluid Daily
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-off-white rounded-lg border border-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-teal" /> Millions of Microscopic Nephrons
                </span>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative h-72 sm:h-80 w-full rounded-2xl overflow-hidden shadow-xl border-2 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
                  alt="Microscopic laboratory investigation of kidney cellular structure"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                  <p className="font-bold">Microscopic Renal Architecture</p>
                  <p className="text-white/80 text-[11px]">Glomerular capillary loops filtering metabolic wastes</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Core Functions */}
        <div className="my-12">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-teal">Vital Biology</span>
            <h2 className="text-3xl text-navy font-bold mt-1">6 Essential Roles of Young Kidneys</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {kidneyFunctions.map((fn, idx) => {
              const Icon = fn.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-7 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-teal/30 transition-all group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-teal/10 text-teal flex items-center justify-center group-hover:bg-coral group-hover:text-white transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-gray-400">0{idx + 1}</span>
                  </div>
                  <h3 className="font-bold text-navy text-lg mb-2 group-hover:text-teal transition-colors">
                    {fn.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{fn.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Anatomy & Physiology Deep Dive */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm my-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-6">
                How Do the Kidneys Work Inside the Child&apos;s Body?
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-base">
                <p>
                  Each child typically has two fist-sized, bean-shaped kidneys located just below the rib cage on either side of the spine. Inside each kidney are approximately one million microscopic filtering units called <strong>nephrons</strong>.
                </p>
                <p>
                  Each nephron consists of a filter called the <strong>glomerulus</strong> and a microscopic tubule. The glomerulus lets fluid and waste products pass through into the tubule while holding back crucial proteins and blood cells. As the fluid flows along the tubule, essential minerals, electrolytes, and water are reabsorbed back into the bloodstream, while waste and excess fluid become urine.
                </p>
                <p>
                  Urine flows from the kidneys through two narrow muscular tubes called <strong>ureters</strong> into the bladder, where it is stored until the child urinates.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/kidney-health/symptoms"
                  className="bg-teal text-white px-6 py-3 rounded-xl font-bold text-sm hover:brightness-110 transition-all inline-flex items-center gap-2"
                >
                  Learn Warning Signs <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/kidney-health/nutrition"
                  className="border-2 border-navy text-navy px-6 py-3 rounded-xl font-bold text-sm hover:bg-navy hover:text-white transition-all"
                >
                  Kidney Nutrition Tips
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative h-80 w-full rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                <Image
                  src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=800"
                  alt="Pediatric medical care and clinical examination"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                  <p className="font-bold">Clinical Care Guidelines</p>
                  <p className="text-white/80 text-[11px]">Preserving renal health through early pediatric screening</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
