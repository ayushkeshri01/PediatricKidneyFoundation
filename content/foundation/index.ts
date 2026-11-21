import { Leader, Partner } from '@/types/content';

export const foundationData = {
  name: 'Pediatric Kidney Foundation',
  shortName: 'PKF',
  establishedDate: '5 April 2004',
  yearsActive: '19+',
  taxExemptionStatus: '80G TAX EXEMPT STATUS',
  tagline: 'Saving Young Kidneys, Securing Young Lives',
  subtitle: 'Supporting children with kidney diseases through awareness, early care, education, research, and compassionate support.',
  contact: {
    address: 'E-11, South Extension-1, New Delhi – 110049, India',
    phone: '+91 (011) 4567-8901',
    email: 'contact@pkf-india.org',
    officeHours: 'Monday – Friday: 9:00 AM – 5:30 PM (IST)'
  },
  ourStory: `The Pediatric Kidney Foundation (PKF) was established on 5 April 2004 with the goal of improving the lives of children with kidney diseases. Founded by a group of dedicated pediatric nephrologists and healthcare professionals, the Foundation was created to support better care, promote education and research, and raise awareness about childhood kidney diseases.

Over the years, PKF has brought together experts who share a common commitment to advancing pediatric kidney health. Through education, collaboration, research, and advocacy, the Foundation works to improve knowledge, strengthen clinical practice, and support better outcomes for children with kidney diseases.

Today, PKF continues to work towards ensuring that every child with kidney disease has access to quality treatment. As we look to the future, we remain committed to building a stronger network of care, creating greater awareness, and making a lasting difference in the lives of children and their families.`,
  mission: 'Our mission is to improve the lives of children with kidney diseases by promoting early diagnosis, supporting quality clinical care, advancing research, empowering families, and strengthening healthcare capacity. We work to create sustainable programs that improve access to information, encourage evidence-based practice, and advocate for equitable pediatric kidney care.',
  vision: 'We envision a future where every child, regardless of socioeconomic background or geographic location, has access to timely diagnosis, specialized treatment, and compassionate care for kidney diseases. We aspire to create a society where pediatric kidney health is recognized as a public health priority and every child has the opportunity to live a healthy and productive life.',
  whyItMatters: 'Kidney diseases in children are often overlooked because their symptoms can be subtle or mistaken for other illnesses. When left undiagnosed or untreated, these conditions can affect growth, nutrition, learning, emotional well-being, and overall quality of life. Early recognition and appropriate treatment can significantly improve outcomes, allowing children to lead healthier and more fulfilling lives. Raising awareness is the first step toward preventing avoidable complications.',
  whoWeHelp: 'Our work supports children with kidney diseases and their families, while empowering healthcare professionals, researchers, and communities through education, research, and collaboration to improve pediatric kidney care.'
};

export const leadershipMembers: Leader[] = [
  { name: 'Dr. RN Srivastava', role: 'Distinguished Patron & Veteran Pediatric Nephrologist' },
  { name: 'Dr. AS Vasudev', role: 'Senior Consultant & Clinical Director' },
  { name: 'Dr. Arvind Bagga', role: 'Head of Pediatric Nephrology & Research Chair' },
  { name: 'Dr. Vinay Agarwal', role: 'Trustee & Senior Consultant' },
  { name: 'Dr. Ashok Dutta', role: 'Executive Advisory Member' },
  { name: 'Dr. Jagdish Chandra', role: 'Senior Pediatrician & Advisor' },
  { name: 'Dr. Ved Prakash Choudhry', role: 'Clinical Consultant' },
  { name: 'Dr. Vinita Sharma', role: 'Pediatric Specialist & Family Outreach' },
  { name: 'Dr. Pankaj Hari', role: 'Professor of Pediatric Nephrology' },
  { name: 'Dr. Aditi Sinha', role: 'Additional Professor & Clinical Researcher' },
  { name: 'Dr. Rajesh Mehta', role: 'Community Outreach Advisor' },
  { name: 'Mr. Vinay Agarwal', role: 'Operations & Strategy Advisor' },
  { name: 'Mr. Dhaneshwar Yadav', role: 'Finance & Governance Trustee' },
  { name: 'Dr. Amita Sharma Panthary', role: 'Pediatric Care Specialist' },
  { name: 'Dr. Menka Yadav', role: 'Clinical Fellow & Research Coordinator' },
  { name: 'Dr. Jitendra Kumar Meena', role: 'Public Health & Epidemiology Specialist' }
];

export const partnerOrganizations: Partner[] = [
  { name: 'All India Institute of Medical Sciences (AIIMS)', type: 'Medical College', icon: 'hospital' },
  { name: 'Lady Hardinge Medical College', type: 'Medical College', icon: 'school' },
  { name: 'Sir Ganga Ram Hospital', type: 'Hospital', icon: 'building' },
  { name: 'Max Healthcare Foundation', type: 'CSR Partner', icon: 'heart-handshake' },
  { name: 'National Health Mission', type: 'NGO', icon: 'shield' },
  { name: 'Indian Academy of Pediatrics (IAP)', type: 'Medical College', icon: 'stethoscope' }
];

export const impactMetrics = [
  { value: 19, suffix: 'y', label: 'Trusted Expertise', description: 'Dedicated exclusively to pediatric nephrology since 2004' },
  { value: 50, suffix: '+', label: 'Awareness Camps', description: 'Free diagnostic & education camps across urban & rural areas' },
  { value: 250, suffix: '+', label: 'Surgeries Funded', description: 'Transplants and corrective urological surgeries aided' },
  { value: 12, suffix: 'k', label: 'Free Screenings', description: 'Early pediatric kidney health checkups performed' }
];
