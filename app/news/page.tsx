import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight, Tag } from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import { newsArticles } from '@/content/news';

export const metadata = {
  title: 'News, Events & Media | Pediatric Kidney Foundation',
  description: 'Latest reports, screening camp updates, caregiver workshops, and World Kidney Day events by PKF India.'
};

export default function NewsPage() {
  return (
    <div className="bg-warm-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'News & Media' }]} />

        {/* Header */}
        <div className="my-8 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-teal">
            Updates & Media Coverage
          </span>
          <h1 className="text-4xl text-navy font-bold mt-2 mb-4">
            News, Events & Initiatives
          </h1>
          <p className="text-gray-600 leading-relaxed text-base">
            Stay informed with our recent community screening camp dispatches, clinical caregiver masterclasses, and pediatric nephrology advocacy updates.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
          {newsArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 bg-navy/80 backdrop-blur-md text-white text-[10px] font-bold uppercase px-3 py-1 rounded-full">
                    {article.category}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                    <Calendar className="w-3.5 h-3.5 text-teal" />
                    <span>{article.date}</span>
                  </div>

                  <h2 className="text-xl font-bold text-navy group-hover:text-teal transition-colors mb-3 line-clamp-2">
                    {article.title}
                  </h2>

                  <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={`/news/${article.slug}`}
                  className="text-teal font-bold text-xs uppercase tracking-widest hover:underline inline-flex items-center gap-1"
                >
                  Read Full Report <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
