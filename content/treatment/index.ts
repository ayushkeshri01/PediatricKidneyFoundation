import { TreatmentItem } from '@/types/content';

export const treatmentData: TreatmentItem[] = [
  {
    id: 'dialysis',
    slug: 'dialysis',
    name: 'Dialysis',
    tagline: 'Treatment Journey',
    description: 'Dialysis is a treatment that helps do the work of the kidneys when they are no longer able to function properly. Healthy kidneys remove waste, extra water, and harmful substances from the blood. When the kidneys stop working, these waste products build up in the body. Dialysis helps remove them and keeps the body healthy.',
    whenNeeded: "A child may need dialysis when the kidneys are not able to work well enough to keep the body healthy. This may happen because of severe kidney injury or advanced chronic kidney disease. Your child's doctor will decide if and when dialysis is needed.",
    typesOrOptions: [
      {
        title: 'Peritoneal Dialysis (PD)',
        description: 'In this type of dialysis, a special fluid is put into the abdomen through a soft tube. The lining of the abdomen acts as a natural filter to remove waste and extra fluid. This treatment can often be done at home after proper training.'
      },
      {
        title: 'Hemodialysis (HD)',
        description: 'In hemodialysis, blood is passed through a dialysis machine that removes waste and extra fluid before returning the cleaned blood to the body. This treatment is usually done in a hospital or dialysis centre several times a week.'
      }
    ],
    lifeWithTreatment: 'With the right treatment, a healthy diet, regular medicines, and follow-up care, many children on dialysis can continue to attend school, play, and enjoy daily activities. Support from family and healthcare providers is an important part of their care.',
    iconName: 'refresh-cw'
  },
  {
    id: 'transplant',
    slug: 'transplant',
    name: 'Kidney Transplant',
    tagline: 'Treatment Journey',
    description: 'A kidney transplant is a surgery in which a healthy kidney from a donor is placed into the body of a child whose kidneys are no longer working properly. For many children with advanced kidney disease, a kidney transplant offers the best chance of leading a healthy and active life.',
    whenNeeded: 'A kidney transplant may be recommended for children whose kidneys have permanently stopped working due to advanced chronic kidney disease. Before a transplant, the child undergoes a detailed medical evaluation to make sure they are ready for the procedure.',
    typesOrOptions: [
      {
        title: 'Living Donor',
        description: 'A living donor, such as a parent or a close relative who is healthy and a suitable match.'
      },
      {
        title: 'Deceased Donor',
        description: 'A deceased donor, whose family has agreed to donate organs after death. The doctor will determine the most suitable donor after careful testing.'
      }
    ],
    lifeWithTreatment: 'Yes. Many children who receive a kidney transplant can return to school, play with friends, and enjoy a good quality of life. With regular medicines, healthy eating, and routine medical check-ups, most children can grow and develop well.',
    iconName: 'heart'
  }
];
