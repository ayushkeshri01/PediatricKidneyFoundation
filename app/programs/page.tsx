import React from 'react';
import Link from 'next/link';
import { Tent, School, Stethoscope, Salad, Users, Megaphone, ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import { programsData } from '@/content/programs';

export const metadata = {
  title: 'Programs & Initiatives | Pediatric Kidney Foundation',
  description: 'Rural screening camps, school hydration campaigns, high-risk screening, and public health policy advocacy by PKF India.'
};

export default function ProgramsPage() {
  const iconMap: Record<string, React.ElementType> = {
    tent: Tent,
    school: School,
    stethoscope: Stethoscope,
    salad: Salad,
    users: Users,
    megaphone: Megaphone
  };

  return (
    <div className="bg-warm-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Programs & Initiatives' }]} />

        {/* Header */}
        <div className="my-8 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-teal">
            Ground-Level Impact
          </span>
          <h1 className="text-4xl text-navy font-bold mt-2 mb-4">
            Programs & Initiatives
          </h1>
          <p className="text-gray-600 leading-relaxed text-base">
            From rural diagnostic outreach camps to nationwide school hydration drives, PKF runs targeted initiatives to diagnose kidney diseases before irreversible complications occur.
          </p>
        </div>

        {/* Grid of Programs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
          {programsData.map((prog) => {
            const Icon = iconMap[prog.icon] || Stethoscope;
            return (
              <div
                key={prog.id}
                id={prog.slug}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-teal/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-teal/10 text-teal flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    {prog.impactMetric && (
                      <span className="text-xs font-bold text-coral bg-coral/10 px-3 py-1 rounded-full uppercase tracking-wider">
                        {prog.impactMetric}
                      </span>
                    )}
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
                    {prog.focus}
                  </span>
                  <h3 className="text-2xl font-bold text-navy mb-3">{prog.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {prog.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <Link
                    href={`/contact?inquiry=program&program=${prog.slug}`}
                    className="text-teal font-bold text-xs uppercase tracking-widest hover:underline inline-flex items-center gap-1.5"
                  >
                    Partner or Host Initiative <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Partner with PKF Banner */}
        <div className="bg-navy text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Want to Host a Screening Camp at Your School or Community?</h3>
            <p className="text-white/80 text-sm max-w-xl font-light">
              We collaborate with schools, residential associations, corporate CSR teams, and non-profits to host free pediatric kidney checkup camps.
            </p>
          </div>
          <Link
            href="/contact?inquiry=host-camp"
            className="bg-coral text-white px-8 py-3.5 rounded-xl font-bold text-sm whitespace-nowrap hover:brightness-110 shadow-lg"
          >
            Request a Screening Camp
          </Link>
        </div>
      </div>
    </div>
  );
}
