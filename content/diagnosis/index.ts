import { DiagnosticTest } from '@/types/content';

export const diagnosticTests: DiagnosticTest[] = [
  {
    id: 'urine-tests',
    slug: 'urine-tests',
    name: 'Urine Tests (Routine & Culture)',
    tagline: 'Simple, Painless, and Foundational',
    description: "A urine test is a simple and painless way to check how well your child's kidneys are working. It can detect signs of infection, blood, or protein in the urine, which may be an early sign of a kidney problem.",
    purpose: 'Screens for microscopic hematuria (blood), proteinuria (protein leak), white blood cells (infection), specific gravity, and identifies bacterial organisms causing urinary tract infections.',
    whatToExpect: 'Non-invasive sample collection. For older children, a midstream clean catch is collected. For infants, a pediatric collection bag or clean catch technique is guided by nursing staff.',
    iconName: 'droplets'
  },
  {
    id: 'blood-tests',
    slug: 'blood-tests',
    name: 'Blood Tests (KFT & Electrolytes)',
    tagline: 'Precision Assessment of Renal Filtration',
    description: "Blood tests help doctors understand how well the kidneys are filtering waste from the body. They also check the levels of important minerals and can help monitor your child's overall kidney health.",
    purpose: 'Measures Serum Creatinine and Blood Urea Nitrogen (BUN) to compute eGFR. Evaluates critical electrolytes (Sodium, Potassium, Bicarbonate, Calcium, Phosphorus) and monitors hemoglobin for renal anemia.',
    whatToExpect: 'A gentle pediatric blood draw performed by experienced phlebotomists. In many cases, fasting is not required unless specified for lipid profiling.',
    iconName: 'activity'
  },
  {
    id: 'ultrasound',
    slug: 'ultrasound',
    name: 'Renal Ultrasound (USG KUB)',
    tagline: 'Safe, Radiation-Free 2D & Doppler Imaging',
    description: 'An ultrasound is a safe and painless scan that uses sound waves to take pictures of the kidneys and bladder. It helps doctors look for problems such as kidney stones, swelling, or abnormalities present since birth. There is no radiation involved.',
    purpose: 'Inspects kidney size, anatomical structure, thickness of renal cortex, presence of cysts, stones, dilation of the urinary tract (hydronephrosis), and urinary bladder emptying.',
    whatToExpect: 'The child lies comfortably on an examination bed. Warm gel is applied to the abdomen and flank, and a handheld probe gently slides across the skin. Completely painless and takes 15–20 minutes.',
    iconName: 'scan'
  },
  {
    id: 'kidney-biopsy',
    slug: 'kidney-biopsy',
    name: 'Kidney Biopsy',
    tagline: 'Gold Standard Microscopic Tissue Diagnosis',
    description: 'A kidney biopsy is a small procedure in which a tiny sample of kidney tissue is taken using a special needle. Examining this sample helps doctors find the exact cause of kidney disease and decide on the best treatment for your child.',
    purpose: 'Determines the precise cellular diagnosis in atypical nephrotic syndrome, acute glomerulonephritis, unexplained renal failure, or to monitor transplanted kidney health under light, immunofluorescence, and electron microscopy.',
    whatToExpect: 'Performed in a hospital setting under sedation or local anesthesia with real-time ultrasound guidance. The child rests comfortably afterward under close observation.',
    iconName: 'microscope'
  },
  {
    id: 'blood-pressure-monitoring',
    slug: 'blood-pressure-monitoring',
    name: 'Blood Pressure Monitoring',
    tagline: 'Vital Guard for Pediatric Kidney Protection',
    description: "Checking your child's blood pressure is quick, painless, and very important. High blood pressure can be a sign of kidney disease or can make kidney problems worse. Regular monitoring helps doctors protect your child's kidneys and overall health.",
    purpose: 'Detects pediatric hypertension, which is often asymptomatic but is both a cause and consequence of childhood kidney disease. Assesses cardiovascular safety and treatment response.',
    whatToExpect: 'A comfortable, properly sized pediatric blood pressure cuff wrapped around the upper arm. The child should sit quietly for 5 minutes prior to the reading.',
    iconName: 'heart-pulse'
  }
];
