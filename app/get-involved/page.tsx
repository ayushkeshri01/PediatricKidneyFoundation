import React from 'react';
import Link from 'next/link';
import { User, Stethoscope, Building, ArrowRight, Heart } from 'lucide-react';
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
    'Organisations': Building
  };

  return (
    <div className="bg-warm-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Get Involved' }]} />

        {/* Header */}
        <div className="my-8 max-w-4xl">
          <span className="text-xs font-bold uppercase tracking-widest text-teal block mb-2">
            Collaboration
          </span>
          <h1 className="text-4xl text-navy font-bold mb-6">
            Get Involved
          </h1>
          <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
            {getInvolvedIntro}
          </p>
        </div>

        {/* 3 Categories: Individuals, Healthcare Professionals, Organisations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
          {getInvolvedCategories.map((cat, idx) => {
            const Icon = iconMap[cat.title] || User;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xs flex flex-col justify-between hover:shadow-lg transition-all"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-teal/10 text-teal flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-navy mb-6">
                    {cat.title}
                  </h2>
                  <ul className="space-y-3 mb-8">
                    {cat.items.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="p-3 bg-off-white rounded-xl text-sm font-semibold text-navy flex items-center gap-2.5"
                      >
                        <span className="w-2 h-2 rounded-full bg-teal" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Link
                    href={`/contact?inquiry=${cat.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="w-full bg-navy hover:bg-teal text-white font-bold py-3 px-4 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
                  >
                    Partner With Us <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Action */}
        <div className="bg-navy text-white rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 my-10">
          <div>
            <h3 className="text-2xl font-bold mb-2">Support Our Mission</h3>
            <p className="text-white/80 text-sm max-w-xl">
              Every contribution helps provide treatment aid, diagnostic checkups, and awareness for children facing kidney disease.
            </p>
          </div>
          <Link
            href="/donate"
            className="shrink-0 bg-coral text-white font-bold px-8 py-3.5 rounded-xl text-sm hover:brightness-110 shadow-lg inline-flex items-center gap-2"
          >
            <Heart className="w-4 h-4" /> Donate
          </Link>
        </div>
      </div>
    </div>
  );
}
