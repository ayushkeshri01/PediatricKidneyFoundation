import React from 'react';
import Link from 'next/link';
import { HeartPulse, CheckCircle2, ArrowRight, ShieldCheck, Activity } from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';

export const metadata = {
  title: 'Understanding Healthy Kidneys | Pediatric Kidney Foundation',
  description: 'How healthy kidneys function in childhood, regulate growth and fluids, and why protecting them early matters.'
};

export default function HealthyKidneysPage() {
  const kidneyFunctions = [
    {
      title: 'Waste & Toxin Removal',
      description: 'Healthy kidneys continuously filter the entire blood volume, removing metabolic wastes like urea and creatinine through urine.'
    },
    {
      title: 'Fluid & Electrolyte Regulation',
      description: 'They maintain exact sodium, potassium, and water balance, preventing dehydration or dangerous bodily swelling.'
    },
    {
      title: 'Blood Pressure Control',
      description: 'Through the renin-angiotensin system, healthy kidneys regulate arterial blood pressure across childhood growth stages.'
    },
    {
      title: 'Red Blood Cell Production',
      description: 'The kidneys secrete the essential hormone erythropoietin (EPO), which commands bone marrow to make oxygen-carrying red blood cells.'
    },
    {
      title: 'Healthy Bone Development',
      description: 'They convert dietary Vitamin D into its active form (calcitriol), enabling the body to absorb calcium for growing childhood bones.'
    },
    {
      title: 'Normal Pediatric Growth',
      description: 'Proper metabolic balance and acid-base regulation by the kidneys are indispensable for reaching standard height and weight milestones.'
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

        {/* Hero */}
        <div className="my-8 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-teal">
            Parent Educational Guide
          </span>
          <h1 className="text-4xl text-navy font-bold mt-2 mb-4">
            Understanding Healthy Kidneys
          </h1>
          <p className="text-gray-600 leading-relaxed text-lg font-light">
            The kidneys are remarkable organs that perform essential functions necessary for life. In children, healthy kidneys are particularly vital because they directly regulate growth, energy, and physical development.
          </p>
        </div>

        {/* 6 Core Functions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
          {kidneyFunctions.map((fn, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-teal/10 text-teal flex items-center justify-center font-bold text-sm mb-4">
                0{idx + 1}
              </div>
              <h3 className="font-bold text-navy text-xl mb-3">{fn.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{fn.description}</p>
            </div>
          ))}
        </div>

        {/* Anatomy & Physiology Deep Dive */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm my-12">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-navy mb-6">
              How Do the Kidneys Work Inside the Body?
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed text-base">
              <p>
                Each person normally has two fist-sized, bean-shaped kidneys located just below the rib cage on either side of the spine. Inside each kidney are approximately one million microscopic filtering units called <strong>nephrons</strong>.
              </p>
              <p>
                Each nephron consists of a filter called the <strong>glomerulus</strong> and a tiny tubule. The glomerulus lets fluid and waste products pass through into the tubule while holding back crucial proteins and blood cells. As the fluid flows along the tubule, essential minerals and water are reabsorbed back into the bloodstream, while waste and excess water become urine.
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
                Learn Common Warning Signs <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/kidney-health/nutrition"
                className="border-2 border-navy text-navy px-6 py-3 rounded-xl font-bold text-sm hover:bg-navy hover:text-white transition-all"
              >
                Kidney Nutrition Tips
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
