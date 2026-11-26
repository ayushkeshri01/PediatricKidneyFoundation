import { Disease } from '@/types/content';

export const diseasesData: Disease[] = [
  {
    id: 'uti',
    slug: 'urinary-tract-infection',
    name: 'Urinary Tract Infection (UTI)',
    shortDescription: 'A Urinary Tract Infection (UTI) is an infection that affects any part of the urinary system, including the kidneys, ureters (tubes carrying urine from the kidneys to the bladder), bladder, or urethra (the tube through which urine leaves the body). UTIs are common in children and need prompt treatment to prevent kidney damage.',
    category: 'infection',
    symptoms: [
      'Fever (sometimes the only sign in young children)',
      'Pain or burning while passing urine',
      'Frequent urge to urinate',
      'Passing only small amounts of urine',
      'Cloudy, foul-smelling, or bloody urine',
      'Pain in the lower abdomen or back',
      'Vomiting or poor feeding in infants',
      'Irritability or unexplained crying in babies'
    ],
    causes: [
      'UTIs are usually caused by bacteria that enter the urinary tract through the urethra and multiply in the bladder. Some children may be more prone to UTIs due to:',
      'Poor toilet hygiene',
      'Holding urine for long periods',
      'Constipation',
      'Inadequate water intake',
      'Congenital abnormalities of the urinary tract'
    ],
    diagnosis: [
      'Your doctor may recommend:',
      'Urine routine examination',
      'Urine culture to identify the bacteria',
      'Ultrasound of the kidneys and bladder (in some children)',
      'Other tests such as a VCUG or DMSA scan if UTIs are recurrent or if an abnormality is suspected'
    ],
    treatment: [
      'Antibiotics to treat the infection',
      'Plenty of fluids to keep the child hydrated',
      'Medicines to reduce fever or pain if needed',
      'Complete the full course of antibiotics, even if the child starts feeling better.'
    ],
    whenToSeeDoctor: [
      'Seek medical attention immediately if your child has:',
      'Fever without an obvious cause, especially in infants',
      'Pain while passing urine',
      'Blood in the urine',
      'Repeated UTIs',
      'Vomiting, poor feeding, or appears very unwell'
    ],
    prevention: [
      'Encourage your child to drink plenty of water.',
      'Teach proper toilet hygiene (wipe from front to back for girls).',
      'Avoid holding urine for long periods.',
      'Treat constipation promptly.',
      'Ensure children empty their bladder completely.',
      'Change diapers frequently in infants.'
    ]
  },
  {
    id: 'nephrotic-syndrome',
    slug: 'nephrotic-syndrome',
    name: 'Nephrotic Syndrome',
    shortDescription: 'Nephrotic syndrome is a kidney condition in which the kidneys are unable to hold on to important proteins. As a result, a large amount of protein leaks into the urine. This causes the body to lose protein that is needed to keep fluid inside the blood vessels, leading to swelling in different parts of the body.',
    category: 'common',
    symptoms: [
      'Swelling around the eyes, especially in the morning',
      'Swelling of the feet, ankles, legs, or face',
      'Swollen abdomen',
      'Sudden weight gain due to fluid build-up',
      'Urine that looks frothy or foamy',
      'Passing less urine than usual',
      'Feeling tired or less active than normal'
    ],
    causes: [
      'Why Does It Happen?',
      'The kidneys act like a natural filter, removing waste from the blood while keeping important proteins in the body. In nephrotic syndrome, this filter becomes damaged and allows protein to leak into the urine. When the body loses too much protein, fluid collects in the tissues, causing swelling.'
    ],
    diagnosis: [
      'Urine test to check for protein leakage',
      'Blood tests to measure protein and kidney function'
    ],
    treatment: [
      'Is It Treatable?',
      'Yes. Most children with nephrotic syndrome respond well to treatment. Doctors usually prescribe medicines to stop the protein leak and reduce swelling. Some children may have repeated episodes, so regular follow-up and taking medicines exactly as advised are very important.'
    ],
    whenToSeeDoctor: [
      'Take your child to a doctor if you notice swelling around the eyes, feet, or abdomen, or if the urine becomes very frothy. Early diagnosis and treatment can help prevent complications'
    ]
  },
  {
    id: 'ckd',
    slug: 'chronic-kidney-disease',
    name: 'Chronic Kidney Disease',
    shortDescription: 'Chronic Kidney Disease (CKD) is a condition in which the kidneys gradually lose their ability to work properly over a long period of time. Healthy kidneys remove waste and extra water from the blood, help control blood pressure, keep bones healthy, and support the production of red blood cells. When the kidneys are damaged, these important functions are affected.',
    category: 'chronic',
    symptoms: [
      'Poor appetite or not eating well',
      'Tiredness or weakness',
      'Swelling of the face, feet, ankles, or around the eyes',
      'Passing more or less urine than usual',
      'Blood in the urine or urine that looks unusual',
      'High blood pressure',
      'Poor growth or failure to gain weight in children',
      'Nausea or vomiting',
      'Difficulty concentrating or reduced activity'
    ],
    causes: [
      'In children, CKD can be caused by birth defects of the kidneys or urinary tract, inherited kidney diseases, repeated urinary infections, kidney inflammation, or other medical conditions that damage the kidneys over time. Sometimes, the exact cause may not be known.'
    ],
    diagnosis: [
      'Blood tests to measure kidney function and waste filtration',
      'Urine tests to detect protein or blood',
      'Kidney ultrasound'
    ],
    treatment: [
      'Can CKD Be Treated?',
      'CKD cannot always be cured, but it can often be managed. Early diagnosis and regular treatment can help slow the progression of the disease and reduce complications. Treatment may include medicines, a healthy diet, regular check-ups, and controlling blood pressure. In advanced stages, some children may need dialysis or a kidney transplant.'
    ],
    whenToSeeDoctor: [
      'Consult a doctor if your child has persistent swelling, blood in the urine, high blood pressure, poor growth, or unexplained tiredness. Regular follow-up with a pediatric kidney specialist is important for children with CKD. Early diagnosis and proper care can help children stay healthier and lead more active lives.'
    ]
  },
  {
    id: 'congenital',
    slug: 'congenital-kidney-disorders',
    name: 'Congenital Kidney Disorders',
    shortDescription: 'Congenital kidney disorders are kidney problems that are present from birth. Some babies are born with kidneys or urinary passages that have not developed normally. These conditions can affect how the kidneys work or how urine flows from the kidneys to the bladder. Some children may have only one kidney, blocked urine flow, or kidneys that are smaller or formed differently than usual.',
    category: 'congenital',
    symptoms: [
      'Repeated urinary tract infections (UTIs)',
      'Fever without a clear cause, especially in young children',
      'Poor growth or poor weight gain',
      'Swelling of the face, feet, or abdomen',
      'Pain in the abdomen or back',
      'Blood in the urine',
      'Difficulty passing urine or poor urine flow',
      'High blood pressure',
      'Some children may not have any symptoms, and the condition may be detected during pregnancy or during a routine ultrasound after birth.'
    ],
    causes: [
      'These conditions develop while the baby is growing in the mother\'s womb. They are not caused by anything the parents did or did not do during pregnancy. In some families, kidney problems may be inherited.'
    ],
    diagnosis: [
      'Ultrasound scan during pregnancy or after birth',
      'Urine and blood tests to evaluate kidney performance'
    ],
    treatment: [
      'Can They Be Treated?',
      'Yes. Many congenital kidney disorders can be managed successfully if they are diagnosed early. Treatment depends on the type of problem and may include regular check-ups, medicines, antibiotics to prevent infections, or surgery to correct a blockage. Children with reduced kidney function may need long-term follow-up with a pediatric kidney specialist.'
    ],
    whenToSeeDoctor: [
      'Consult a doctor if your child has repeated urinary infections, poor growth, swelling, difficulty passing urine, or blood in the urine. Early diagnosis and treatment can help protect the kidneys and prevent long-term damage.'
    ]
  },
  {
    id: 'aki',
    slug: 'acute-kidney-injury',
    name: 'Acute Kidney Injury',
    shortDescription: 'Acute Kidney Injury (AKI) is a sudden decrease in the kidneys\' ability to filter waste and remove extra water from the body. It can develop over a few hours or days. AKI is often reversible if treated early, but delayed treatment can lead to serious complications.',
    category: 'acute',
    symptoms: [
      'Passing less urine than usual or no urine',
      'Swelling of the face, hands, feet, or legs',
      'Fever (if caused by an infection)',
      'Vomiting or poor appetite',
      'Tiredness or unusual sleepiness',
      'Difficulty breathing due to fluid buildup',
      'Blood in the urine (sometimes)',
      'High blood pressure'
    ],
    causes: [
      'AKI can occur due to:',
      'Severe dehydration from diarrhea or vomiting',
      'Serious infections (sepsis)',
      'Certain medicines that affect the kidneys',
      'Blockage of urine flow (such as kidney stones or urinary tract problems)',
      'Kidney inflammation or injury',
      'Severe blood loss or low blood pressure'
    ],
    diagnosis: [
      'Your doctor may recommend:',
      'Blood tests to check kidney function',
      'Urine tests',
      'Ultrasound of the kidneys and bladder',
      'Additional tests if the cause is unclear'
    ],
    treatment: [
      'Treatment depends on the cause and may include:',
      'Giving fluids if the child is dehydrated',
      'Treating infections with appropriate medicines',
      'Stopping medicines that may harm the kidneys',
      'Treating any blockage in the urinary tract',
      'Dialysis in severe cases until the kidneys recover'
    ],
    whenToSeeDoctor: [
      'Seek urgent medical care if your child:',
      'Passes very little or no urine',
      'Has swelling of the face or body',
      'Has persistent vomiting or severe diarrhea',
      'Has difficulty breathing',
      'Becomes unusually sleepy or difficult to wake',
      'Has a high fever with reduced urine output'
    ],
    prevention: [
      'Keep your child well hydrated, especially during illness.',
      'Treat diarrhea and vomiting promptly.',
      'Never give medicines without medical advice, especially painkillers.',
      'Seek medical care early if your child is passing less urine or appears very sick.',
      'Ensure regular follow-up if your child has an existing kidney problem.'
    ]
  },
  {
    id: 'glomerulonephritis',
    slug: 'glomerulonephritis',
    name: 'Glomerulonephritis (Kidney inflammation)',
    shortDescription: 'Glomerulonephritis (GN) is a condition in which the tiny filters inside the kidneys (called glomeruli) become inflamed. When these filters are damaged, they cannot remove waste and extra fluid properly. Some children recover completely with treatment, while others need long-term care.',
    category: 'acute',
    symptoms: [
      'Cola-colored, tea-colored, or blood-stained urine',
      'Swelling around the eyes, face, hands, or feet',
      'High blood pressure',
      'Passing less urine than usual',
      'Tiredness or weakness',
      'Headache',
      'Loss of appetite'
    ],
    causes: [
      'Glomerulonephritis may develop:',
      'After a throat or skin infection caused by certain bacteria',
      'Due to problems with the body\'s immune system',
      'As part of certain autoimmune diseases',
      'Sometimes the exact cause is not known'
    ],
    diagnosis: [
      'Your doctor may recommend:',
      'Urine tests to check for blood and protein',
      'Blood tests to assess kidney function and look for signs of infection or inflammation',
      'Blood pressure measurement',
      'Ultrasound of the kidneys',
      'A kidney biopsy in some cases to determine the exact type of disease'
    ],
    treatment: [
      'Treatment depends on the cause and severity and may include:',
      'Medicines to control blood pressure',
      'Diuretics (water tablets) to reduce swelling',
      'Antibiotics if an infection is the cause',
      'Steroids or other medicines to reduce inflammation, when needed',
      'A low-salt diet and careful fluid management',
      'Dialysis in severe cases if the kidneys stop working properly'
    ],
    whenToSeeDoctor: [
      'Seek medical attention if your child has:',
      'Blood or dark-colored urine',
      'Swelling around the eyes or body',
      'Reduced urine output',
      'Severe headache or very high blood pressure',
      'Difficulty breathing due to swelling',
      'Persistent fever or signs of infection'
    ],
    prevention: [
      'Not all cases can be prevented, but you can reduce the risk by:',
      'Treating throat and skin infections promptly',
      'Completing the full course of prescribed antibiotics',
      'Attending regular follow-up visits if your child has a kidney condition',
      'Seeking medical advice if you notice blood in your child\'s urine or unexplained swelling'
    ]
  },
  {
    id: 'kidney-stones',
    slug: 'kidney-stones',
    name: 'Kidney Stones',
    shortDescription: 'Kidney stones are hard, stone-like deposits made from minerals and salts that form inside the kidneys. Although more common in adults, children can also develop kidney stones. Small stones may pass on their own, while larger stones may need medical treatment.',
    category: 'common',
    symptoms: [
      'Severe pain in the back, side, or lower abdomen',
      'Pain or burning while passing urine',
      'Blood in the urine (pink, red, or brown urine)',
      'Frequent urge to pass urine',
      'Nausea or vomiting',
      'Fever and chills if there is an associated infection'
    ],
    causes: [
      'Kidney stones may develop due to:',
      'Not drinking enough water',
      'High levels of certain minerals in the urine',
      'A family history of kidney stones',
      'Certain inherited or metabolic conditions',
      'Recurrent urinary tract infections',
      'Some medicines or dietary factors'
    ],
    diagnosis: [
      'Your doctor may recommend:',
      'Urine tests',
      'Blood tests',
      'Ultrasound of the kidneys and urinary tract',
      'CT scan (in selected cases)',
      'Stone analysis if a stone is passed or removed'
    ],
    treatment: [
      'Treatment depends on the size and location of the stone and may include:',
      'Drinking plenty of fluids',
      'Medicines to relieve pain and help pass the stone',
      'Antibiotics if an infection is present',
      'Procedures to break or remove larger stones if they cannot pass naturally'
    ],
    whenToSeeDoctor: [
      'Seek medical care if your child has:',
      'Severe or persistent pain',
      'Blood in the urine',
      'Fever with pain while passing urine',
      'Repeated vomiting',
      'Difficulty passing urine'
    ],
    prevention: [
      'Encourage your child to drink plenty of water every day.',
      'Limit excess salt and processed foods.',
      'Provide a balanced diet with plenty of fruits and vegetables.',
      'Follow your doctor\'s advice if your child has had kidney stones before or has a family history of stones.',
      'Attend regular follow-up visits if recommended.'
    ]
  }
];
