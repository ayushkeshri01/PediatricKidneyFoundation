import { diseasesData } from '@/content/diseases';
import { diagnosticTests } from '@/content/diagnosis';
import { treatmentData } from '@/content/treatment';
import { programsData } from '@/content/programs';
import { newsArticles } from '@/content/news';
import { pkfFAQs } from '@/content/faq';
import { SearchResultItem } from '@/types/content';

export function getSiteSearchIndex(): SearchResultItem[] {
  const items: SearchResultItem[] = [];

  // Diseases
  diseasesData.forEach(d => {
    items.push({
      title: d.name,
      description: d.shortDescription,
      href: `/kidney-health/diseases/${d.slug}`,
      category: 'Condition & Disease'
    });
  });

  // Diagnostics
  diagnosticTests.forEach(t => {
    items.push({
      title: t.name,
      description: t.description,
      href: `/kidney-health/diagnosis#${t.slug}`,
      category: 'Diagnostic Test'
    });
  });

  // Treatments
  treatmentData.forEach(tr => {
    items.push({
      title: tr.name,
      description: tr.description,
      href: `/treatment#${tr.slug}`,
      category: 'Treatment'
    });
  });

  // Programs
  programsData.forEach(p => {
    items.push({
      title: p.title,
      description: p.description,
      href: `/programs#${p.slug}`,
      category: 'Program'
    });
  });

  // News
  newsArticles.forEach(n => {
    items.push({
      title: n.title,
      description: n.summary,
      href: `/news/${n.slug}`,
      category: 'News & Updates'
    });
  });

  // FAQs
  pkfFAQs.forEach(f => {
    items.push({
      title: f.question,
      description: f.answer,
      href: `/kidney-health#faqs`,
      category: 'Frequently Asked Question'
    });
  });

  // Main Pages
  items.push(
    {
      title: 'Healthy Kidneys in Children',
      description: 'Understanding renal filtration, fluid balance, growth hormone regulation, and pediatric kidney functions.',
      href: '/kidney-health/healthy-kidneys',
      category: 'Education'
    },
    {
      title: 'Common Symptoms of Unhealthy Kidneys',
      description: 'Recognizing facial puffiness, hematuria (blood), frothy urine, growth failure, and high blood pressure.',
      href: '/kidney-health/symptoms',
      category: 'Education'
    },
    {
      title: 'Nutrition & Lifestyle for Young Kidneys',
      description: 'Healthy eating guidelines, salt restriction, hydration habits, active play, and diet advice.',
      href: '/kidney-health/nutrition',
      category: 'Lifestyle & Diet'
    },
    {
      title: 'Our Story & Foundation History',
      description: 'Founded on 5 April 2004 by veteran pediatric nephrologists to advance pediatric kidney care.',
      href: '/about',
      category: 'About PKF'
    },
    {
      title: 'Leadership & Medical Advisory Board',
      description: 'Distinguished pediatric nephrologists, clinical directors, trustees, and public health experts.',
      href: '/about/leadership',
      category: 'About PKF'
    },
    {
      title: 'Patient & Family Support Group',
      description: 'Empowering families with guidance, peer connections, emotional resilience, and financial aid pathways.',
      href: '/support',
      category: 'Support'
    },
    {
      title: 'Donate & Support Our Mission',
      description: 'Provide life-saving dialysis, corrective surgeries, and pediatric renal care for children in need.',
      href: '/donate',
      category: 'Donation'
    },
    {
      title: 'Contact Pediatric Kidney Foundation',
      description: 'Reach our team in New Delhi (E-11, South Extension-1) via phone, email, or contact form.',
      href: '/contact',
      category: 'Contact'
    }
  );

  return items;
}
