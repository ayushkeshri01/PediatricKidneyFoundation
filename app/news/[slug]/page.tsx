import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowLeft, Share2, Tag } from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import { newsArticles } from '@/content/news';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return newsArticles.map((a) => ({
    slug: a.slug
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);
  if (!article) return { title: 'Article Not Found | PKF' };

  return {
    title: `${article.title} | PKF News`,
    description: article.summary
  };
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="bg-warm-white min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'News & Media', href: '/news' },
            { label: article.title }
          ]}
        />

        <article className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 my-8">
          <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
            <span className="font-bold text-teal uppercase tracking-widest bg-teal/10 px-3 py-1 rounded-full">
              {article.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {article.date}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy mb-6 leading-tight">
            {article.title}
          </h1>

          <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden mb-8">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 800px"
            />
          </div>

          <div className="prose max-w-none text-gray-700 leading-relaxed text-base space-y-4">
            <p className="text-lg font-medium text-navy leading-relaxed">
              {article.summary}
            </p>
            <p>{article.content}</p>
            <p>
              The Pediatric Kidney Foundation remains committed to expanding these initiatives across northern and central India, prioritizing communities with limited access to dedicated pediatric nephrologists.
            </p>
          </div>

          <div className="mt-12 pt-6 border-t border-gray-200 flex justify-between items-center">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-teal transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to News Index
            </Link>
            <Link
              href="/donate"
              className="bg-coral text-white px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider hover:brightness-110"
            >
              Support Our Drives
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
