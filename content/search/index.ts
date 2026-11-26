import { diseasesData } from '@/content/diseases';
import { diagnosticTests } from '@/content/diagnosis';
import { treatmentData } from '@/content/treatment';
import { programsData } from '@/content/programs';
import { newsCategories } from '@/content/news';
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
      category: 'Kidney Diseases in Children'
    });
  });

  // Diagnostics
  diagnosticTests.forEach(t => {
    items.push({
      title: t.name,
      description: t.description,
      href: `/kidney-health/diagnosis#${t.slug}`,
      category: 'Diagnosis & Investigations'
    });
  });

  // Treatments
  treatmentData.forEach(tr => {
    items.push({
      title: tr.name,
      description: tr.description,
      href: `/treatment#${tr.slug}`,
      category: 'Treatment Journey'
    });
  });

  // Programs
  programsData.forEach(p => {
    items.push({
      title: p.title,
      description: p.title,
      href: `/programs#${p.slug}`,
      category: 'Programs & Initiatives'
    });
  });

  // News
  newsCategories.forEach(n => {
    items.push({
      title: n.title,
      description: n.title,
      href: `/news#${n.slug}`,
      category: 'News & Media'
    });
  });

  // FAQs
  pkfFAQs.forEach(f => {
    items.push({
      title: f.question,
      description: f.answer,
      href: `/faq`,
      category: 'Frequently Asked Questions'
    });
  });

  // Main Pages strictly from document
  items.push(
    {
      title: 'About PKF',
      description: 'The Pediatric Kidney Foundation (PKF) is a nonprofit organization dedicated exclusively to improving kidney health among children.',
      href: '/about',
      category: 'About PKF'
    },
    {
      title: 'Leadership',
      description: 'Dr. RN Srivastava, Dr. AS Vasudev, Dr. Arvind Bagga, and board members.',
      href: '/about/leadership',
      category: 'About PKF'
    },
    {
      title: 'Kidney Health Hub',
      description: 'Understanding Healthy Kidneys, Common Symptoms of Unhealthy kidneys, Kidney Diseases, Diagnosis, Treatment, and Nutrition.',
      href: '/kidney-health',
      category: 'Kidney Health Hub'
    },
    {
      title: 'Patient & Family Support',
      description: 'Need Help? Parent Support Group.',
      href: '/support',
      category: 'Patient & Family Support'
    },
    {
      title: 'Get Involved',
      description: "Improving children's kidney health requires the collective efforts of individuals and organizations.",
      href: '/get-involved',
      category: 'Get Involved'
    },
    {
      title: 'Contact Us',
      description: 'Pediatric Kidney Foundation, E-11, South Extension-1, New Delhi-110049.',
      href: '/contact',
      category: 'Contact Us'
    }
  );

  return items;
}
