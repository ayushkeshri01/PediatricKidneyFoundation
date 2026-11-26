export interface GetInvolvedCategory {
  title: string;
  items: string[];
}

export const getInvolvedIntro = "Improving children's kidney health requires the collective efforts of individuals and organizations. Whether you are a healthcare professional, researcher, student, volunteer, educator, corporate partner, or community member, there are many meaningful ways to contribute. By volunteering your time, sharing your expertise, supporting awareness initiatives, collaborating on research, or partnering with us, you become part of a growing movement committed to transforming the lives of children with kidney diseases.";

export const getInvolvedCategories: GetInvolvedCategory[] = [
  {
    title: 'Individuals',
    items: ['Volunteer', 'Donate', 'Sponsor Treatment', 'Fundraise']
  },
  {
    title: 'Healthcare Professionals',
    items: ['Doctors', 'Researchers', 'Students', 'Dietitians', 'Psychologists', 'Social Workers']
  },
  {
    title: 'Organisations',
    items: ['Hospitals', 'CSR', 'NGOs', 'Schools']
  }
];
