export interface NewsItem {
  id: string;
  slug: string;
  title: string;
}

export const newsCategories: NewsItem[] = [
  { id: 'event-reports', slug: 'event-reports', title: 'Event Reports' },
  { id: 'awareness-campaigns', slug: 'awareness-campaigns', title: 'Awareness Campaigns' },
  { id: 'media-coverage', slug: 'media-coverage', title: 'Media Coverage' },
  { id: 'world-kidney-day-activities', slug: 'world-kidney-day-activities', title: 'World Kidney Day Activities' }
];

export const newsArticles: NewsItem[] = newsCategories;
