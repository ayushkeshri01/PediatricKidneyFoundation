import React from 'react';
import Link from 'next/link';
import { Apple, Droplet, ShieldAlert, Sparkles, Activity, Moon, ShieldCheck, AlertCircle, ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import { nutritionData } from '@/content/nutrition';

export const metadata = {
  title: 'Nutrition & Lifestyle for Young Kidneys | PKF India',
  description: 'Evidence-based healthy eating habits, hydration guidance, salt reduction, and lifestyle care for pediatric kidney protection.'
};

export default function NutritionPage() {
  return (
    <div className="bg-warm-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Kidney Health Hub', href: '/kidney-health' },
            { label: 'Nutrition & Lifestyle' }
          ]}
        />

        {/* Header */}
        <div className="my-8 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-teal">
            Everyday Preventive Care
          </span>
          <h1 className="text-4xl text-navy font-bold mt-2 mb-4">
            {nutritionData.title}
          </h1>
          <p className="text-gray-600 leading-relaxed text-base">
            {nutritionData.subtitle}
          </p>
        </div>

        {/* Healthy Eating Tips */}
        <div className="my-12">
          <h2 className="text-2xl font-bold text-navy mb-8 flex items-center gap-2">
            <Apple className="text-teal w-6 h-6" /> Healthy Eating Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nutritionData.healthyEatingTips.map((tip, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-teal/30 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-teal/10 text-teal flex items-center justify-center font-bold text-sm mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="font-bold text-navy text-lg mb-2">{tip.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{tip.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Healthy Lifestyle Habits */}
        <div className="my-12">
          <h2 className="text-2xl font-bold text-navy mb-8 flex items-center gap-2">
            <Activity className="text-coral w-6 h-6" /> Healthy Lifestyle Habits
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {nutritionData.lifestyleHabits.map((habit, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-coral/10 text-coral flex items-center justify-center shrink-0 mt-0.5">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-navy text-base mb-1">{habit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{habit.description}</p>
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
