import { DiagnosticTest } from '@/types/content';

export const diagnosticTests: DiagnosticTest[] = [
  {
    id: 'urine-tests',
    slug: 'urine-tests',
    name: 'Urine Tests',
    tagline: 'Diagnosis & Investigations',
    description: "A urine test is a simple and painless way to check how well your child's kidneys are working. It can detect signs of infection, blood, or protein in the urine, which may be an early sign of a kidney problem.",
    purpose: "Detects signs of infection, blood, or protein in the urine.",
    whatToExpect: "Simple and painless collection of a urine sample.",
    iconName: 'droplets'
  },
  {
    id: 'blood-tests',
    slug: 'blood-tests',
    name: 'Blood Tests',
    tagline: 'Diagnosis & Investigations',
    description: "Blood tests help doctors understand how well the kidneys are filtering waste from the body. They also check the levels of important minerals and can help monitor your child's overall kidney health.",
    purpose: "Understand how well the kidneys filter waste and check mineral levels.",
    whatToExpect: "A routine blood draw to assess overall kidney health.",
    iconName: 'activity'
  },
  {
    id: 'ultrasound',
    slug: 'ultrasound',
    name: 'Ultrasound',
    tagline: 'Diagnosis & Investigations',
    description: "An ultrasound is a safe and painless scan that uses sound waves to take pictures of the kidneys and bladder. It helps doctors look for problems such as kidney stones, swelling, or abnormalities present since birth. There is no radiation involved.",
    purpose: "Examines kidneys and bladder for stones, swelling, or abnormalities.",
    whatToExpect: "Safe and painless scan using sound waves with zero radiation.",
    iconName: 'scan'
  },
  {
    id: 'kidney-biopsy',
    slug: 'kidney-biopsy',
    name: 'Kidney Biopsy',
    tagline: 'Diagnosis & Investigations',
    description: "A kidney biopsy is a small procedure in which a tiny sample of kidney tissue is taken using a special needle. Examining this sample helps doctors find the exact cause of kidney disease and decide on the best treatment for your child.",
    purpose: "Finds the exact cause of kidney disease through tissue examination.",
    whatToExpect: "A procedure using a special needle to take a tiny sample of kidney tissue.",
    iconName: 'microscope'
  },
  {
    id: 'blood-pressure-monitoring',
    slug: 'blood-pressure-monitoring',
    name: 'Blood Pressure Monitoring',
    tagline: 'Diagnosis & Investigations',
    description: "Checking your child's blood pressure is quick, painless, and very important. High blood pressure can be a sign of kidney disease or can make kidney problems worse. Regular monitoring helps doctors protect your child's kidneys and overall health.",
    purpose: "Protects kidneys and overall health by detecting high blood pressure.",
    whatToExpect: "Quick and painless blood pressure check.",
    iconName: 'heart-pulse'
  }
];
