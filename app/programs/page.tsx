import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

  const programImages: Record<string, string> = {
    'rural-awareness-camps': 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600',
    'school-awareness-program': 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=600',
    'pediatric-screening-drives': 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600',
    'nutrition-education': 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=600',
    'parent-workshops': 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600',
    'advocacy-public-awareness': 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=600'
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

        {/* Grid of the 6 Programs with Authentic Indian Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
          {programsData.map((prog) => {
            const Icon = iconMap[prog.slug] || Stethoscope;
            const imgUrl = programImages[prog.slug] || 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600';

            return (
              <div
                key={prog.id}
                id={prog.slug}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={imgUrl}
                      alt={prog.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2.5 text-white">
                      <div className="w-8 h-8 rounded-lg bg-teal flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-lg font-bold text-white">
                        {prog.title}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-5 flex items-center justify-between border-t border-gray-100">
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
