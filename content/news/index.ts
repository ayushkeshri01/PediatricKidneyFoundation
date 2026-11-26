export interface NewsCategory {
  title: string;
}

export const newsCategories: NewsCategory[] = [
  { title: 'Event Reports' },
  { title: 'Awareness Campaigns' },
  { title: 'Media Coverage' },
  { title: 'World Kidney Day Activities' }
];

export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: 'Event Reports' | 'Awareness Campaigns' | 'Media Coverage' | 'World Kidney Day Activities';
  summary: string;
  content: string;
  image: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: 'wkd-activities',
    slug: 'world-kidney-day-activities',
    title: 'World Kidney Day Activities',
    date: 'March 14, 2024',
    category: 'World Kidney Day Activities',
    summary: 'Pediatric screening and awareness drives organized on World Kidney Day.',
    content: 'On the occasion of World Kidney Day, the Pediatric Kidney Foundation organized comprehensive screening and educational activities to promote early recognition of childhood kidney conditions.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'rural-camp-report',
    slug: 'rural-awareness-camp-report',
    title: 'Event Reports: Rural Awareness Camps',
    date: 'January 28, 2024',
    category: 'Event Reports',
    summary: 'Clinical evaluations and screening camps conducted for children in rural communities.',
    content: 'PKF clinical teams conducted specialized pediatric screening evaluations and health education sessions in peripheral areas.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'school-campaign',
    slug: 'school-awareness-campaign',
    title: 'Awareness Campaigns: School Hydration & Health',
    date: 'November 18, 2023',
    category: 'Awareness Campaigns',
    summary: 'Interactive awareness campaigns in schools educating children on healthy habits.',
    content: 'Educational sessions guiding students and teachers on drinking enough water, balanced nutrition, and recognizing early warning signs.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'media-coverage-feature',
    slug: 'pediatric-kidney-media-coverage',
    title: 'Media Coverage: Spotlight on Pediatric Kidney Health',
    date: 'October 10, 2023',
    category: 'Media Coverage',
    summary: 'National health publications highlight PKF initiatives and the importance of early detection.',
    content: 'Media features emphasizing that early diagnosis and specialized pediatric care significantly improve long-term outcomes for children.',
    image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=800'
  }
];
