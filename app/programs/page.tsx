import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

  const programImages: Record<string, string> = {
    'rural-camps': 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600',
    'school-programs': 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=600',
    'screening-drives': 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600',
    'nutrition-education': 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=600',
    'parent-workshops': 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600',
    advocacy: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=600'
  };

  return (
    <div className="bg-warm-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Programs & Initiatives' }]} />

        {/* Header */}
        <div className="my-8 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-teal bg-teal/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Ground-Level Impact
          </span>
          <h1 className="text-4xl text-navy font-bold mb-4">
            Programs &amp; Initiatives
          </h1>
          <p className="text-gray-600 leading-relaxed text-base">
            From rural diagnostic outreach camps to nationwide school hydration drives, PKF runs targeted initiatives to diagnose kidney diseases before irreversible complications occur.
          </p>
        </div>

        {/* Grid of Programs with Visual Headers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-12">
          {programsData.map((prog) => {
            const Icon = iconMap[prog.icon] || Stethoscope;
            const imgUrl = programImages[prog.id] || 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600';

            return (
              <div
                key={prog.id}
                id={prog.slug}
                className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={imgUrl}
                      alt={prog.title}
                      fill
                      className="object-cover group-hover:scale-106 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
                    {prog.impactMetric && (
                      <span className="absolute top-4 left-4 text-[10px] font-bold text-white uppercase tracking-wider px-3 py-1 rounded-full bg-coral/90 shadow-sm backdrop-blur-sm">
                        {prog.impactMetric}
                      </span>
                    )}
                    <div className="absolute bottom-4 right-4 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md shadow-md flex items-center justify-center text-teal">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-7">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-teal block mb-1">
                      {prog.focus}
                    </span>
                    <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-teal transition-colors">
                      {prog.title}
                    </h3>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                      {prog.description}
                    </p>
                  </div>
                </div>

                <div className="px-7 pb-7 pt-0 border-t border-gray-50 pt-4">
                  <Link
                    href={`/contact?inquiry=program&program=${prog.slug}`}
                    className="text-teal font-bold text-xs uppercase tracking-widest hover:text-coral inline-flex items-center gap-1.5 transition-colors"
                  >
                    Partner or Host Initiative <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
