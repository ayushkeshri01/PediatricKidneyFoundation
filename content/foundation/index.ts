export interface Leader {
  name: string;
}

export interface Partner {
  name: string;
  category: 'Hospital logos' | 'Medical Colleges' | 'CSR Partners' | 'NGOs';
}

export const foundationData = {
  name: 'Pediatric Kidney Foundation',
  shortName: 'PKF',
  establishedDate: '5 April 2004',
  tagline: 'Saving Young Kidneys, Securing Young Lives',
  subtitle: 'Supporting Children with Kidney Diseases Through Awareness, Early Care, and Community Support.',
  aboutPKF: 'The Pediatric Kidney Foundation (PKF) is a nonprofit organization dedicated exclusively to improving kidney health among children. Founded by pediatric nephrologists and healthcare professionals, PKF works to bridge gaps in awareness, access to specialized care, education, and research. We believe that no child should suffer from preventable complications of kidney disease due to delayed diagnosis or limited access to appropriate treatment.',
  whyPediatricKidneyHealthMatters: 'Kidney diseases in children are often overlooked because their symptoms can be subtle or mistaken for other illnesses. When left undiagnosed or untreated, these conditions can affect growth, nutrition, learning, emotional well-being, and overall quality of life. Early recognition and appropriate treatment can significantly improve outcomes, allowing children to lead healthier and more fulfilling lives. Raising awareness is the first step toward preventing avoidable complications.',
  whoWeHelp: 'Our work supports children with kidney diseases and their families, while empowering healthcare professionals, researchers, and communities through education, research, and collaboration to improve pediatric kidney care.',
  ourStory: `The Pediatric Kidney Foundation (PKF) was established on 5 April 2004 with the goal of improving the lives of children with kidney diseases. Founded by a group of dedicated pediatric nephrologists and healthcare professionals, the Foundation was created to support better care, promote education and research, and raise awareness about childhood kidney diseases.

Over the years, PKF has brought together experts who share a common commitment to advancing pediatric kidney health. Through education, collaboration, research, and advocacy, the Foundation works to improve knowledge, strengthen clinical practice, and support better outcomes for children with kidney diseases.

Today, PKF continues to work towards ensuring that every child with kidney disease has access to quality treatment.  As we look to the future, we remain committed to building a stronger network of care, creating greater awareness, and making a lasting difference in the lives of children and their families.`,
  mission: 'Our mission is to improve the lives of children with kidney diseases by promoting early diagnosis, supporting quality clinical care, advancing research, empowering families, and strengthening healthcare capacity. We work to create sustainable programs that improve access to information, encourage evidence-based practice, and advocate for equitable pediatric kidney care.',
  vision: 'We envision a future where every child, regardless of socioeconomic background or geographic location, has access to timely diagnosis, specialized treatment, and compassionate care for kidney diseases. We aspire to create a society where pediatric kidney health is recognized as a public health priority and every child has the opportunity to live a healthy and productive life.',
  contact: {
    name: 'Pediatric Kidney Foundation',
    address: 'E-11, South Extension-1, New Delhi-110049',
    phone: '+91 (011) 4567-8901',
    email: 'contact@pkf-india.org',
    officeHours: 'Monday – Friday: 9:00 AM – 5:30 PM (IST)'
  }
};

export const leadershipMembers: Leader[] = [
  { name: 'Dr. RN Srivastava' },
  { name: 'Dr. AS Vasudev' },
  { name: 'Dr. Arvind Bagga' },
  { name: 'Dr. Vinay Agarwal' },
  { name: 'Dr. Ashok Dutta' },
  { name: 'Dr. Jagdish Chandra' },
  { name: 'Dr. Ved Prakash Choudhry' },
  { name: 'Dr. Vinita Sharma' },
  { name: 'Dr. Pankaj Hari' },
  { name: 'Dr. Aditi Sinha' },
  { name: 'Dr. Rajesh Mehta' },
  { name: 'Mr. Vinay Agarwal' },
  { name: 'Mr. Dhaneshwar Yadav' },
  { name: 'Dr. Amita Sharma Panthary' },
  { name: 'Dr. Menka Yadav' },
  { name: 'Dr. Jitendra Kumar Mena' }
];

export const latestInitiatives = [
  { title: 'Upcoming Camps', desc: 'Screening camps in community and rural centers for early pediatric kidney disease detection.' },
  { title: 'Awareness Drives', desc: 'Educational drives informing parents, schools, and teachers on childhood kidney health.' },
  { title: 'Partnerships', desc: 'Collaborating with premier medical institutions and hospitals for specialized clinical care.' },
  { title: 'Events', desc: 'Conferences, workshops, and World Kidney Day observances across India.' }
];

export const partnerCategories = [
  { title: 'Hospital logos', icon: 'hospital' },
  { title: 'Medical Colleges', icon: 'school' },
  { title: 'CSR Partners', icon: 'heart-handshake' },
  { title: 'NGOs', icon: 'shield' }
];

export const impactMetrics = [
  { value: 15000, suffix: '+', label: 'Children Supported' },
  { value: 250, suffix: '+', label: 'Treatment Aid Provided' },
  { value: 50, suffix: '+', label: 'Awareness & Education' },
  { value: 12000, suffix: '+', label: 'Patient Support' }
];
