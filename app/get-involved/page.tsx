import React from 'react';
import Link from 'next/link';
import { User, Stethoscope, Building2, ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import { getInvolvedIntro, getInvolvedCategories } from '@/content/getInvolved';

export const metadata = {
  title: 'Get Involved | Pediatric Kidney Foundation',
  description: "Improving children's kidney health requires the collective efforts of individuals and organizations."
};

export default function GetInvolvedPage() {
  const iconMap: Record<string, React.ElementType> = {
    'Individuals': User,
    'Healthcare Professionals': Stethoscope,
    'Organisations': Building2
  };

  return (
    <div className="bg-warm-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Get Involved' }]} />

        {/* 7. GET INVOLVED */}
        <div className="my-8 max-w-4xl">
          <h1 className="text-4xl text-navy font-bold mb-6">
            Get Involved
          </h1>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg bg-white p-8 rounded-3xl border border-gray-100 shadow-xs">
            {getInvolvedIntro}
          </p>
        </div>

        {/* Categories: Individuals, Healthcare Professionals, Organisations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10">
          {getInvolvedCategories.map((cat, idx) => {
            const Icon = iconMap[cat.title] || User;

            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-teal/10 text-teal flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h2 className="text-2xl font-bold text-navy mb-6">
                    {cat.title}
                  </h2>
                  <ul className="space-y-3">
                    {cat.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="flex items-center gap-3 text-gray-700 font-medium text-base"
                      >
                        <span className="w-2 h-2 rounded-full bg-teal" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 mt-6 border-t border-gray-100">
                  <Link
                    href="/contact"
                    className="w-full bg-teal text-white font-bold py-3 px-6 rounded-xl text-sm flex items-center justify-center gap-2 hover:brightness-110 transition-all cursor-pointer"
                  >
                    Contact Us <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
