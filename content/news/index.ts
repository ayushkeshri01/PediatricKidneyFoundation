export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  date: string;
  category: 'Awareness' | 'Camps' | 'Medical Insights' | 'Events';
  summary: string;
  content: string;
  image: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: 'world-kidney-day-2024',
    slug: 'world-kidney-day-pediatric-screening',
    title: 'World Kidney Day: PKF Organizes Multi-City Pediatric Health & Screening Drive',
    date: 'March 14, 2024',
    category: 'Awareness',
    summary: 'Over 850 children underwent comprehensive urine and blood pressure screenings across community health centers in the NCR region.',
    content: 'On the occasion of World Kidney Day, the Pediatric Kidney Foundation mobilized teams of pediatric nephrologists, nurses, and volunteers across multiple centers. The initiative focused on early screening for proteinuria and asymptomatic pediatric hypertension, connecting 34 newly identified children with structured clinical follow-up.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'rural-camp-haryana',
    slug: 'rural-screening-camp-report',
    title: 'Rural Outreach Camp: Bringing Specialized Nephrology to Peripheral Clinics',
    date: 'January 28, 2024',
    category: 'Camps',
    summary: 'PKF clinical team conducted specialized evaluations for recurrent UTIs, growth stunting, and congenital urological anomalies.',
    content: 'Families in rural sectors often travel extensive distances to reach tertiary pediatric nephrologists. PKF mobile camps bring point-of-care dipstick analysis, portable ultrasound assessment, and free prescription starter packs directly to local dispensaries.',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'nephrotic-workshop',
    slug: 'parent-workshop-steroid-management',
    title: 'Caregiver Masterclass: Managing Steroid Regimens and Infection Risks in Nephrotic Syndrome',
    date: 'November 18, 2023',
    category: 'Medical Insights',
    summary: 'Senior pediatric nephrologists guided 120 parents on home urine dipstick testing, avoiding sudden steroid tapering, and vaccination schedules.',
    content: 'Navigating steroid treatment requires close parental vigilance. During the interactive workshop held at the Delhi Center, experts demonstrated correct urine protein testing, home tracking logs, diet adaptations, and when to seek urgent evaluation during common childhood infections.',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'
  }
];
