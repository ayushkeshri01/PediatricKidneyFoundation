import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight, Newspaper } from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import { newsArticles, newsCategories } from '@/content/news';

export const metadata = {
  title: 'News & Media | Pediatric Kidney Foundation',
  description: 'Event Reports, Awareness Campaigns, Media Coverage, and World Kidney Day Activities.'
};

export default function NewsPage() {
  return (
    <div className="bg-warm-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'News & Media' }]} />

        {/* Header */}
        <div className="my-8 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-teal block mb-2">
            Updates &amp; Outreach
          </span>
          <h1 className="text-4xl text-navy font-bold mb-4">
            News &amp; Media
          </h1>
          <p className="text-gray-600 leading-relaxed text-base">
            Latest initiatives, screening camps, and media features from the Pediatric Kidney Foundation.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-8">
          {newsCategories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-xl border border-gray-100 shadow-xs flex items-center gap-3 text-sm font-bold text-navy"
            >
              <div className="w-8 h-8 rounded-lg bg-teal/10 text-teal flex items-center justify-center shrink-0">
                <Newspaper className="w-4 h-4" />
              </div>
              <span>{cat.title}</span>
            </div>
          ))}
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
          {newsArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-44 w-full overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className="absolute top-3 left-3 bg-navy/80 backdrop-blur-md text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-full">
                    {article.category}
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-2">
                    <Calendar className="w-3.5 h-3.5 text-teal" />
                    <span>{article.date}</span>
                  </div>

                  <h2 className="text-base font-bold text-navy group-hover:text-teal transition-colors mb-2 line-clamp-2">
                    {article.title}
                  </h2>

                  <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <Link
                  href={`/news/${article.slug}`}
                  className="text-teal font-bold text-xs uppercase tracking-wider hover:underline inline-flex items-center gap-1"
                >
                  Read More <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
