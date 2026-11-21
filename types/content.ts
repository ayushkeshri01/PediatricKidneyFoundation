export interface Disease {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  category: 'common' | 'congenital' | 'acute' | 'chronic' | 'infection';
  symptoms: string[];
  causes: string[];
  diagnosis: string[];
  treatment: string[];
  whenToSeeDoctor: string[];
  prevention?: string[];
  isCurable?: string;
}

export interface DiagnosticTest {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  purpose: string;
  whatToExpect: string;
  iconName: string;
}

export interface TreatmentItem {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  whenNeeded: string;
  typesOrOptions?: { title: string; description: string }[];
  lifeWithTreatment: string;
  iconName: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category?: string;
}

export interface Leader {
  name: string;
  role?: string;
  title?: string;
  bio?: string;
}

export interface Program {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  focus: string;
  impactMetric?: string;
}

export interface PatientStory {
  id: string;
  patientName: string;
  family: string;
  location: string;
  quote: string;
  image: string;
  storyDetails?: string;
}

export interface Partner {
  name: string;
  type: 'Hospital' | 'Medical College' | 'CSR Partner' | 'NGO';
  icon: string;
}

export interface SearchResultItem {
  title: string;
  description: string;
  href: string;
  category: string;
}
