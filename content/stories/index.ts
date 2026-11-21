import { PatientStory } from '@/types/content';

export const patientStories: PatientStory[] = [
  {
    id: 'mehta-family',
    patientName: 'Arjun Mehta',
    family: 'The Mehta Family',
    location: 'Mumbai, India',
    quote: "The foundation didn't just give us financial aid; they gave us a roadmap and the emotional strength to keep fighting for Arjun's future.",
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=400',
    storyDetails: 'Arjun was diagnosed with steroid-dependent nephrotic syndrome at age 4. Through PKF guidance, second opinion counseling, and medication assistance, Arjun has achieved sustained remission and is now excelling in grade 5.'
  },
  {
    id: 'priya-sneha',
    patientName: 'Sneha',
    family: 'Priya S.',
    location: 'Delhi, India',
    quote: "Knowing there is an entire medical board committed to these children changed everything for us after Sneha's diagnosis.",
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=400',
    storyDetails: 'Sneha required corrective surgery for bilateral vesicoureteral reflux (CAKUT). PKF connected the family with leading pediatric nephrologists and aided hospital admission logistics.'
  }
];
