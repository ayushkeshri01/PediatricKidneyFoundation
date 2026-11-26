import React from 'react';
import Link from 'next/link';
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

        {/* 4 Items strictly from document */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
          {newsCategories.map((item) => {
            const Icon = iconMap[item.slug] || Newspaper;

            return (
              <div
                key={item.id}
                id={item.slug}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-teal/10 text-teal flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h2 className="text-xl font-bold text-navy mb-4">
                    {item.title}
                  </h2>
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
