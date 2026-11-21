import { TreatmentItem } from '@/types/content';

export const treatmentData: TreatmentItem[] = [
  {
    id: 'dialysis',
    slug: 'dialysis',
    name: 'Pediatric Dialysis',
    tagline: 'Life-Sustaining Filtration When Kidneys Rest or Recover',
    description: 'Dialysis is a medical treatment that performs the vital filtering functions of the kidneys when they are temporarily or permanently unable to function adequately. It cleans the bloodstream of toxic metabolic wastes, balances electrolytes, and removes excess fluids.',
    whenNeeded: 'A child may need dialysis when the kidneys are not able to work well enough to keep the body healthy. This may happen because of severe acute kidney injury (often reversible) or advanced stage 5 chronic kidney disease while awaiting a transplant.',
    typesOrOptions: [
      {
        title: 'Peritoneal Dialysis (PD)',
        description: 'In peritoneal dialysis, a sterile dialysis solution is instilled into the abdomen through a soft, flexible catheter. The natural lining of the abdominal cavity (peritoneum) acts as a gentle, continuous filter. Can often be conducted safely at home during nighttime sleep (Automated PD), allowing children to attend school uninterrupted.'
      },
      {
        title: 'Hemodialysis (HD)',
        description: 'In hemodialysis, the child’s blood is gently routed through an external artificial dialyzer machine that cleans waste and excess water before returning purified blood. Typically performed 3 times per week in a dedicated pediatric dialysis unit with specialized pediatric nursing and nephrology oversight.'
      }
    ],
    lifeWithTreatment: 'With coordinated medical care, nutritional guidance, and family support, many children on dialysis continue to attend school, play with friends, and participate in family activities with optimism and vitality.',
    iconName: 'refresh-cw'
  },
  {
    id: 'transplant',
    slug: 'transplant',
    name: 'Pediatric Kidney Transplantation',
    tagline: 'The Gold Standard for Long-Term Pediatric Health & Growth',
    description: 'A kidney transplant is a surgical procedure where a healthy donor kidney is placed into the body of a child whose native kidneys have failed. For children with advanced kidney disease, transplantation offers the highest quality of life and supports normal childhood growth.',
    whenNeeded: 'Recommended for children with irreversible end-stage kidney disease (Stage 5 CKD). Before surgery, the child and donor undergo thorough immunological matching, cardiovascular screening, and multidisciplinary preparation.',
    typesOrOptions: [
      {
        title: 'Living Related Donor',
        description: 'A healthy parent, grandparent, or close relative with compatible blood group and tissue typing donates one kidney. Living donations often provide optimal long-term graft survival.'
      },
      {
        title: 'Deceased (Cadaveric) Donor',
        description: 'A kidney donated by a family after brain death through regulated organ sharing registries (e.g., NOTTO in India).'
      }
    ],
    lifeWithTreatment: 'After recovery, the new kidney filters blood naturally. Children take daily immunosuppressant medicines to prevent organ rejection. With regular follow-up and good hydration, transplanted children can play sports, excel in education, and experience vibrant childhood development.',
    iconName: 'heart'
  }
];
