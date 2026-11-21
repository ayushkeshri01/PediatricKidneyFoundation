import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Apple, Droplet, ShieldAlert, Sparkles, Activity, Moon, ShieldCheck, AlertCircle, ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import { nutritionData } from '@/content/nutrition';

export const metadata = {
  title: 'Nutrition & Lifestyle for Young Kidneys | PKF India',
  description: 'Evidence-based healthy eating habits, hydration guidance, salt reduction, and lifestyle care for pediatric kidney protection.'
};

export default function NutritionPage() {
  const tipImages = [
    'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=500', // Fresh diet
    'https://images.unsplash.com/photo-1548839140-29a749e1bc4e?auto=format&fit=crop&q=80&w=500', // Hydration water
    'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=500', // Salt reduction
    'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=500', // Fresh drinks
    'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=500'  // Safe meds
  ];

  return (
    <div className="bg-warm-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Kidney Health Hub', href: '/kidney-health' },
            { label: 'Nutrition & Lifestyle' }
          ]}
        />

        {/* Hero Header with Visual */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm my-8 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-teal bg-teal/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
              Everyday Preventive Care
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-navy mb-4">
              {nutritionData.title}
            </h1>
            <p className="text-gray-600 leading-relaxed text-base font-light">
              {nutritionData.subtitle}
            </p>
          </div>
          <div className="w-full lg:w-96 shrink-0">
            <div className="relative h-56 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800"
                alt="Wholesome nutrition for children"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent flex items-end p-4">
                <span className="text-white text-xs font-bold">Wholesome Kidney-Friendly Nutrition</span>
              </div>
            </div>
          </div>
        </div>

        {/* Healthy Eating Tips with Visual Cards */}
        <div className="my-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-8 flex items-center gap-2">
            <Apple className="text-teal w-7 h-7" /> Healthy Eating Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nutritionData.healthyEatingTips.map((tip, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-40 w-full overflow-hidden">
                    <Image
                      src={tipImages[idx] || tipImages[0]}
                      alt={tip.title}
                      fill
                      className="object-cover group-hover:scale-106 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                    <span className="absolute top-3 left-3 text-[10px] font-bold text-white uppercase tracking-wider px-2.5 py-1 rounded-full bg-teal shadow-sm">
                      Principle 0{idx + 1}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="font-bold text-navy text-lg mb-2 group-hover:text-teal transition-colors">
                      {tip.title}
                    </h3>
                    <p className="text-gray-600 text-xs leading-relaxed">{tip.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Healthy Lifestyle Habits with Visual Context */}
        <div className="my-14">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-8 flex items-center gap-2">
            <Activity className="text-coral w-7 h-7" /> Healthy Lifestyle Habits
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {nutritionData.lifestyleHabits.map((habit, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-coral/10 text-coral flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-navy text-base mb-1.5">{habit.title}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{habit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Special Diet Alert for Kidney Disease */}
        <div className="my-12 bg-coral/5 border-2 border-coral/30 rounded-3xl p-8 sm:p-10">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-coral/20 text-coral flex items-center justify-center shrink-0">
              <AlertCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-navy mb-2">
                Special Dietary Notice for Children with Kidney Disease
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {nutritionData.specialDietNote}
              </p>
              <p className="text-xs text-coral font-bold uppercase tracking-wider">
                Never restrict fluids or electrolytes without explicit instructions from your doctor.
              </p>
            </div>
          </div>
        </div>

        {/* Action Link */}
        <div className="pt-6 border-t border-gray-200 flex justify-between items-center">
          <Link
            href="/kidney-health"
            className="text-sm font-bold text-navy hover:text-teal transition-colors"
          >
            ← Back to Kidney Health Hub
          </Link>
          <Link
            href="/treatment"
            className="text-sm font-bold text-teal hover:underline inline-flex items-center gap-1"
          >
            Explore Treatment Journey <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
