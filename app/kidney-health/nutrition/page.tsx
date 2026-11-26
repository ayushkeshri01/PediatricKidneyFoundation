import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Apple, Activity, ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import { nutritionData } from '@/content/nutrition';

export const metadata = {
  title: 'Nutrition & Lifestyle | Pediatric Kidney Foundation',
  description: "Good nutrition and healthy daily habits play an important role in keeping your child's kidneys healthy."
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

        {/* Hero Header */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm my-8 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-teal block mb-3">
              Kidney Health Hub
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-navy mb-4">
              Nutrition &amp; Lifestyle
            </h1>
            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
              {nutritionData.intro}
            </p>
          </div>
          <div className="w-full lg:w-96 shrink-0">
            <div className="relative h-56 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800"
                alt="Nutrition & Lifestyle"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
            </div>
          </div>
        </div>

        {/* Healthy Eating Tips */}
        <div className="my-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-6 flex items-center gap-2">
            <Apple className="text-teal w-6 h-6" /> Healthy Eating Tips
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {nutritionData.healthyEatingTips.map((tip, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs flex items-start gap-3.5"
              >
                <div className="w-7 h-7 rounded-full bg-teal/10 text-teal flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Healthy Lifestyle Habits */}
        <div className="my-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-navy mb-6 flex items-center gap-2">
            <Activity className="text-coral w-6 h-6" /> Healthy Lifestyle Habits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {nutritionData.healthyLifestyleHabits.map((habit, idx) => (
              <div
                key={idx}
                className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs flex items-start gap-3.5"
              >
                <div className="w-7 h-7 rounded-full bg-coral/10 text-coral flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{habit}</p>
              </div>
            ))}
          </div>
        </div>

        {/* For Children with Kidney Disease */}
        <div className="my-10 bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
          <h3 className="text-xl font-bold text-navy mb-3">
            For Children with Kidney Disease
          </h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            {nutritionData.forChildrenWithKidneyDisease}
          </p>
        </div>

        {/* A Healthy Future Starts Early */}
        <div className="my-10 bg-navy text-white p-8 sm:p-10 rounded-3xl shadow-xl">
          <h3 className="text-2xl font-bold mb-3 text-white">
            A Healthy Future Starts Early
          </h3>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed">
            {nutritionData.aHealthyFutureStartsEarly}
          </p>
        </div>

        {/* Navigation */}
        <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-4">
          <Link
            href="/kidney-health"
            className="inline-flex items-center gap-2 bg-teal text-white font-bold px-6 py-3 rounded-xl text-sm hover:brightness-110 transition-all"
          >
            Kidney Health Hub Overview <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 border border-navy text-navy font-bold px-6 py-3 rounded-xl text-sm hover:bg-navy hover:text-white transition-all"
          >
            Frequently Asked Questions
          </Link>
        </div>
      </div>
    </div>
  );
}
