import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Newspaper, Megaphone, Tv, Calendar, ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import { newsCategories } from '@/content/news';

export const metadata = {
  title: 'News & Media | Pediatric Kidney Foundation',
  description: 'News & Media of the Pediatric Kidney Foundation.'
};

export default function NewsPage() {
  const iconMap: Record<string, React.ElementType> = {
    'event-reports': Newspaper,
    'awareness-campaigns': Megaphone,
    'media-coverage': Tv,
    'world-kidney-day-activities': Calendar
  };

  const newsImages: Record<string, string> = {
    'event-reports': 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=600',
    'awareness-campaigns': 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=600',
    'media-coverage': 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600',
    'world-kidney-day-activities': 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600'
  };

  return (
    <div className="bg-warm-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'News & Media' }]} />

        {/* 8. NEWS & MEDIA */}
        <div className="my-8 max-w-3xl">
          <h1 className="text-4xl text-navy font-bold mb-4">
            News &amp; Media
          </h1>
        </div>

        {/* 4 Items with Authentic Indian Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
          {newsCategories.map((item) => {
            const Icon = iconMap[item.slug] || Newspaper;
            const imgUrl = newsImages[item.slug] || 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=600';

            return (
              <div
                key={item.id}
                id={item.slug}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-44 w-full overflow-hidden">
                    <Image
                      src={imgUrl}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2.5 text-white">
                      <div className="w-8 h-8 rounded-lg bg-teal flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h2 className="text-base font-bold text-white">
                        {item.title}
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between border-t border-gray-100">
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
