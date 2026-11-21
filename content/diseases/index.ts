import { Disease } from '@/types/content';

export const diseasesData: Disease[] = [
  {
    id: 'uti',
    slug: 'urinary-tract-infection',
    name: 'Urinary Tract Infection (UTI)',
    shortDescription: 'An infection affecting the urinary system that requires prompt medical attention in children to prevent permanent kidney scarring.',
    category: 'infection',
    symptoms: [
      'Fever (often the only sign in infants and young children)',
      'Pain or burning sensation while passing urine',
      'Frequent or urgent urge to urinate',
      'Passing only small amounts of urine frequently',
      'Cloudy, foul-smelling, or blood-tinged urine',
      'Pain in the lower abdomen or lower back',
      'Vomiting or poor feeding in babies',
      'Irritability or unexplained persistent crying in infants'
    ],
    causes: [
      'Bacteria entering through the urethra and multiplying in the bladder',
      'Poor toilet hygiene or wiping back-to-front',
      'Holding urine for prolonged periods of time',
      'Chronic constipation putting pressure on the bladder',
      'Inadequate daily water intake',
      'Congenital structural abnormalities of the urinary tract (such as reflux or blockage)'
    ],
    diagnosis: [
      'Urine routine and microscopy examination',
      'Urine culture and antimicrobial sensitivity test',
      'Ultrasound of the kidneys, ureters, and bladder',
      'Specialized imaging (VCUG or DMSA renal scan) if infections recur or reflux is suspected'
    ],
    treatment: [
      'Doctor-prescribed antibiotic course targeted to the culture report',
      'Plenty of oral fluids to maintain continuous urinary flow',
      'Fever and pain relief medications under clinical supervision',
      'Completion of the full antibiotic course even after the child feels completely well'
    ],
    whenToSeeDoctor: [
      'Fever without an obvious cause, particularly in infants',
      'Pain, crying, or grimacing while passing urine',
      'Visible pink, brown, or bloody urine',
      'Repeated episodes of urinary infection',
      'Vomiting, refusal to feed, or appearing lethargic and unwell'
    ],
    prevention: [
      'Encourage regular, generous water drinking throughout the day',
      'Teach proper hygiene: always wipe from front to back for girls',
      'Discourage holding urine; establish routine bathroom breaks',
      'Treat constipation early with fiber and fluids',
      'Change diapers promptly and frequently in infants'
    ],
    isCurable: 'Highly curable with prompt antibiotics, but recurrent UTIs require investigation to protect kidneys.'
  },
  {
    id: 'nephrotic-syndrome',
    slug: 'nephrotic-syndrome',
    name: 'Nephrotic Syndrome',
    shortDescription: 'A condition where the kidney filters leak large amounts of protein into the urine, leading to fluid accumulation and swelling.',
    category: 'common',
    symptoms: [
      'Puffy swelling around the eyes, especially prominent upon waking in the morning',
      'Swelling of the feet, ankles, lower legs, or hands',
      'Abdominal distension (ascites) and feeling bloated',
      'Rapid, unexplained weight gain due to fluid retention',
      'Frothy, foamy, or bubbly appearance of urine',
      'Passing noticeably less urine throughout the day',
      'Unusual tiredness, fatigue, or low activity levels'
    ],
    causes: [
      'Damage or increased permeability of the podocytes in the glomeruli (kidney filtering units)',
      'Minimal Change Disease (the most common pediatric etiology)',
      'Focal Segmental Glomerulosclerosis (FSGS) or membranous nephropathy in selected cases',
      'Immune system dysregulation causing selective protein leakage'
    ],
    diagnosis: [
      'Urine dipstick testing showing heavy proteinuria (3+ or 4+ protein)',
      'Spot urine protein-to-creatinine ratio (UPCR) or 24-hour urine protein estimation',
      'Blood serum albumin level (typically low, < 2.5 g/dL)',
      'Serum lipid profile (elevated cholesterol and triglycerides)',
      'Renal function tests (blood urea and serum creatinine)'
    ],
    treatment: [
      'Corticosteroid therapy (such as Prednisolone) as the primary treatment to induce remission',
      'Temporary low-salt diet to prevent worsening fluid retention and swelling',
      'Careful fluid regulation as advised by the pediatric nephrologist',
      'Diuretic medications under hospital guidance in cases of severe edema',
      'Alternative immunosuppressive medications if the child experiences frequent relapses'
    ],
    whenToSeeDoctor: [
      'Noticeable morning swelling around the eyes or puffy facial appearance',
      'Persistent swelling of feet, ankles, or abdomen',
      'Urine appearing unusually frothy or foamy',
      'Fever or abdominal pain during a steroid treatment course'
    ],
    isCurable: 'Most children respond well and enter complete remission with steroids; relapses are managed safely through childhood.'
  },
  {
    id: 'ckd',
    slug: 'chronic-kidney-disease',
    name: 'Chronic Kidney Disease (CKD)',
    shortDescription: 'A gradual and progressive decline in the kidney filtering and regulatory function over a prolonged period in children.',
    category: 'chronic',
    symptoms: [
      'Loss of appetite and poor weight gain or failure to thrive',
      'Stunted growth or shorter stature compared to peers',
      'Persistent tiredness, pale appearance (anemia), and muscle weakness',
      'Swelling of face, ankles, or around the eyes',
      'Significant change in urine volume (passing excessive urine at night or very little)',
      'Persistent high blood pressure (pediatric hypertension)',
      'Nausea, vomiting, or recurrent metallic taste in mouth',
      'Difficulty concentrating in school or reduced play stamina'
    ],
    causes: [
      'Congenital anomalies of the kidney and urinary tract (CAKUT)',
      'Inherited genetic kidney diseases (e.g., polycystic kidney disease, cystinosis)',
      'Recurrent untreated urinary tract infections and reflux nephropathy',
      'Chronic glomerular inflammation (glomerulonephritis)',
      'Perinatal complications or severe acute kidney injury with residual damage'
    ],
    diagnosis: [
      'Blood tests for Serum Creatinine, Blood Urea Nitrogen (BUN), and eGFR calculation',
      'Serum electrolytes (potassium, sodium, bicarbonate, calcium, phosphorus)',
      'Hemoglobin check to identify renal anemia',
      'Ultrasound imaging to evaluate kidney size, corticomedullary differentiation, and structural anomalies',
      'Urinalysis for persistent protein or blood loss'
    ],
    treatment: [
      'Specialized pediatric medical management to control blood pressure and proteinuria',
      'Erythropoietin injections and iron therapy to treat kidney-related anemia',
      'Phosphate binders and active Vitamin D to protect pediatric bone growth',
      'Customized renal pediatric nutritional counseling with salt and electrolyte adjustments',
      'Renal replacement therapy (Dialysis or Kidney Transplantation) for stage 5 kidney failure'
    ],
    whenToSeeDoctor: [
      'Persistent swelling or unexplained chronic fatigue',
      'Child failing to grow along standard developmental milestones',
      'Elevated blood pressure reading on pediatric exam',
      'Persistent dark or protein-rich urine'
    ],
    isCurable: 'CKD cannot always be reversed, but modern pediatric therapies can slow progression and maintain vibrant childhood life.'
  },
  {
    id: 'congenital',
    slug: 'congenital-kidney-disorders',
    name: 'Congenital Kidney Disorders (CAKUT)',
    shortDescription: 'Structural anomalies of the kidneys or urinary tract present from birth, ranging from solitary kidney to urinary tract blockages.',
    category: 'congenital',
    symptoms: [
      'Frequent or unexplained urinary tract infections in early infancy',
      'Fever without obvious cough or cold in young babies',
      'Poor weight gain and slow developmental physical growth',
      'Palpable abdominal lump or distended lower tummy',
      'Dribbling of urine, weak urinary stream, or straining during urination',
      'Blood in urine (hematuria)',
      'Many infants have no obvious outward symptoms and are identified on antenatal scans'
    ],
    causes: [
      'Variations in kidney and urinary tract tissue formation during fetal development in the womb',
      'Not caused by any food, medication, or action of parents during pregnancy',
      'Some conditions may have genetic factors or inherited tendencies'
    ],
    diagnosis: [
      'Antenatal ultrasound during pregnancy detecting hydronephrosis (fluid buildup)',
      'Postnatal high-resolution ultrasound of kidneys, ureters, and bladder',
      'Micturating Cystourethrogram (MCU / VCUG) to detect vesicoureteral reflux',
      'Nuclear medicine scans (such as MAG3 or DTPA) to measure renal drainage and function'
    ],
    treatment: [
      'Close observational monitoring and regular ultrasound scans for mild variations',
      'Low-dose preventive antibiotic prophylaxis to protect against kidney infections',
      'Minimally invasive pediatric urological surgery to clear urinary flow blockages when indicated',
      'Long-term follow-up to monitor kidney growth and preserve renal function'
    ],
    whenToSeeDoctor: [
      'Antenatal report mentions dilated kidney pelvis or hydronephrosis',
      'Baby strains or cries excessively while passing urine',
      'Repeated episodes of unexplained fever in an infant'
    ],
    isCurable: 'Many structural blockages can be corrected with surgical intervention, preserving normal kidney health for life.'
  },
  {
    id: 'aki',
    slug: 'acute-kidney-injury',
    name: 'Acute Kidney Injury (AKI)',
    shortDescription: 'A sudden, rapid decline in kidney filtering capacity developing over hours or days, frequently reversible with urgent care.',
    category: 'acute',
    symptoms: [
      'Marked decrease in urine volume or no urine output for many hours',
      'Rapidly developing swelling in face, eyelids, hands, and feet',
      'Severe dehydration symptoms: sunken eyes, dry mouth, extreme thirst followed by lethargy',
      'Persistent vomiting, refusal to drink fluids, or severe diarrhea',
      'Breathing difficulty or rapid breathing due to fluid buildup or acidosis',
      'High blood pressure and unusual drowsiness or difficulty waking up'
    ],
    causes: [
      'Severe dehydration from gastrointestinal infection (vomiting and diarrhea)',
      'Overwhelming bodily infection (sepsis) or severe malaria / dengue complications',
      'Ingestion of nephrotoxic medications, over-the-counter painkillers (NSAIDs), or toxins',
      'Acute obstruction of urine flow due to stones or structural blockage',
      'Severe blood loss or dangerously low blood pressure'
    ],
    diagnosis: [
      'Urgent blood tests: Serum Creatinine, Blood Urea, and serum electrolytes',
      'Urinalysis and fractional excretion of sodium',
      'Emergency renal ultrasound to rule out obstructive uropathy',
      'Blood gas analysis to assess metabolic acidosis'
    ],
    treatment: [
      'Intravenous fluid resuscitation if caused by dehydration (under careful medical balance)',
      'Immediate discontinuation of any kidney-damaging drugs or medications',
      'Targeted antimicrobial treatment for underlying infections',
      'Electrolyte correction and blood pressure stabilization',
      'Short-term supportive pediatric dialysis (hemodialysis or peritoneal dialysis) until the kidneys recover'
    ],
    whenToSeeDoctor: [
      'Child produces very little or no urine over an 8 to 12 hour period',
      'Severe vomiting and diarrhea accompanied by extreme exhaustion',
      'Rapid swelling of eyes and limbs'
    ],
    prevention: [
      'Provide oral rehydration solution (ORS) immediately during childhood diarrhea or vomiting',
      'Never give over-the-counter painkiller syrups (e.g., ibuprofen) without pediatric consultation',
      'Seek prompt medical care during high fevers with poor oral intake'
    ],
    isCurable: 'Highly reversible in children when identified and treated rapidly in a dedicated healthcare setting.'
  },
  {
    id: 'glomerulonephritis',
    slug: 'glomerulonephritis',
    name: 'Glomerulonephritis (Kidney Inflammation)',
    shortDescription: 'Inflammation of the tiny capillary filtering loops (glomeruli) inside the kidney, often following a throat or skin bacterial infection.',
    category: 'acute',
    symptoms: [
      'Dark, tea-colored, cola-colored, or frankly bloody urine (hematuria)',
      'Puffiness around the eyes and face, particularly in the morning',
      'Noticeable decrease in urine frequency and output',
      'Pediatric high blood pressure, sometimes accompanied by headaches',
      'Mild fever, general body aches, and loss of appetite'
    ],
    causes: [
      'Post-Streptococcal Glomerulonephritis (PSGN) following a streptococcal throat or skin infection (impetigo)',
      'Autoimmune conditions such as Systemic Lupus Erythematosus (Lupus Nephritis)',
      'Henoch-Schönlein Purpura (IgA Vasculitis)',
      'IgA Nephropathy (Berger’s disease)'
    ],
    diagnosis: [
      'Urine routine showing red blood cells, RBC casts, and moderate protein',
      'Blood tests for Kidney Function (urea, creatinine)',
      'Serum complement levels (C3, C4) which characteristically drop during acute inflammation',
      'ASO (Anti-Streptolysin O) titer or anti-DNase B proving recent strep infection',
      'Kidney biopsy in atypical, prolonged, or rapidly progressive presentations'
    ],
    treatment: [
      'Blood pressure medications to strictly control pediatric hypertension',
      'Diuretic medications to relieve swelling and fluid overload',
      'Salt-restricted diet during the acute inflammatory phase',
      'Antibiotic therapy if active streptococcal infection remains',
      'Immunosuppressive medications (steroids or others) for autoimmune forms of GN'
    ],
    whenToSeeDoctor: [
      'Urine appears reddish, brownish, or tea-colored',
      'Swelling around the eyes accompanied by decreased urination',
      'Severe headache or irritability after a recent sore throat or skin rash'
    ],
    isCurable: 'Post-infectious GN has an excellent prognosis in children, with over 95% making a full recovery with supportive medical care.'
  },
  {
    id: 'kidney-stones',
    slug: 'kidney-stones',
    name: 'Pediatric Kidney Stones (Nephrolithiasis)',
    shortDescription: 'Hard mineral and salt crystal deposits that form inside the pediatric urinary tract, causing colicky pain and urinary distress.',
    category: 'common',
    symptoms: [
      'Severe colicky pain in the back, flank, lower abdomen, or groin area',
      'Sharp pain, burning, or crying while passing urine',
      'Pink, red, or brownish discoloration in urine (hematuria)',
      'Nausea, retching, or vomiting during pain episodes',
      'Frequent, urgent need to pass urine',
      'Fever and chills if a bacterial urinary infection is trapped behind the stone'
    ],
    causes: [
      'Chronic insufficient fluid intake, especially in hot tropical climates',
      'High urinary levels of calcium, oxalate, or uric acid due to metabolic variations',
      'Genetic conditions such as cystinuria or hyperoxaluria',
      'Dietary factors (excess dietary sodium or processed foods)',
      'Structural urinary tract variations leading to urinary stasis'
    ],
    diagnosis: [
      'Urinary ultrasound of kidneys, ureters, and bladder (safe, radiation-free)',
      'Urinalysis checking for microscopic hematuria and crystal types',
      'Low-dose non-contrast CT urography in complex or non-visualized cases',
      'Metabolic workup: 24-hour urine collection and serum electrolytes',
      'Crystallographic chemical analysis of any retrieved stone'
    ],
    treatment: [
      'Liberal hydration to encourage natural spontaneous passage of small stones (< 4–5 mm)',
      'Pediatric pain management medications during acute episodes',
      'Alpha-blocker medical expulsive therapy when prescribed by a pediatric urologist',
      'Minimally invasive procedures (extracorporeal shock wave lithotripsy, ureteroscopy, or PCNL) for larger or obstructing stones'
    ],
    whenToSeeDoctor: [
      'Severe, unremitting flank or abdominal pain in your child',
      'Visible blood in the urine',
      'Fever accompanied by back pain or burning urination',
      'Inability to pass urine'
    ],
    prevention: [
      'Maintain generous daily hydration: urine should consistently look pale yellow or clear',
      'Reduce processed foods and excess salt in everyday family cooking',
      'Do not arbitrarily restrict dietary calcium (normal milk and dairy intake is beneficial)',
      'Follow tailored metabolic dietary recommendations from your pediatric specialist'
    ],
    isCurable: 'Stones can be cleared completely; metabolic evaluation helps ensure they never return.'
  }
];
