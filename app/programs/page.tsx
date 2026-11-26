import React from 'react';
import Link from 'next/link';
import { Tent, School, Stethoscope, Salad, Users, Megaphone, ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import { programsData } from '@/content/programs';

export const metadata = {
  title: 'Programs & Initiatives | Pediatric Kidney Foundation',
  description: 'Programs & Initiatives of the Pediatric Kidney Foundation.'
};

export default function ProgramsPage() {
  const iconMap: Record<string, React.ElementType> = {
    'rural-awareness-camps': Tent,
    'school-awareness-program': School,
    'pediatric-screening-drives': Stethoscope,
    'nutrition-education': Salad,
    'parent-workshops': Users,
    'advocacy-public-awareness': Megaphone
  };

  return (
    <div className="bg-warm-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Programs & Initiatives' }]} />

        {/* 5. PROGRAMS & INITIATIVES */}
        <div className="my-8 max-w-3xl">
          <h1 className="text-4xl text-navy font-bold mb-4">
            Programs &amp; Initiatives
          </h1>
        </div>

        {/* Grid of the 6 Programs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
          {programsData.map((prog) => {
            const Icon = iconMap[prog.slug] || Stethoscope;

            return (
              <div
                key={prog.id}
                id={prog.slug}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-teal/10 text-teal flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-4">
                    {prog.title}
                  </h3>
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-bold text-teal hover:underline"
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
