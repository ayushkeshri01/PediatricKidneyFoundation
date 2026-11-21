import React from 'react';
import Link from 'next/link';
import { Activity, Microscope, ClipboardCheck, ShieldPlus, Droplets } from 'lucide-react';

export default function KidneyHealthAwareness() {
  const cards = [
    {
      id: 'health-symptoms-link',
      title: 'Kidney Symptoms',
      desc: 'Recognizing early warning signs',
      href: '/kidney-health/symptoms',
      icon: Activity,
      hoverBg: 'group-hover:bg-teal',
      iconColor: 'text-teal',
      hoverTextColor: 'group-hover:text-teal'
    },
    {
      id: 'health-diseases-link',
      title: 'Kidney Diseases',
      desc: 'Common pediatric conditions',
      href: '/kidney-health/diseases',
      icon: Microscope,
      hoverBg: 'group-hover:bg-turquoise',
      iconColor: 'text-turquoise',
      hoverTextColor: 'group-hover:text-turquoise'
    },
    {
      id: 'health-diagnosis-link',
      title: 'Diagnosis',
      desc: 'Tests and investigations',
      href: '/kidney-health/diagnosis',
      icon: ClipboardCheck,
      hoverBg: 'group-hover:bg-sage',
      iconColor: 'text-sage',
      hoverTextColor: 'group-hover:text-sage'
    },
    {
      id: 'health-treatment-link',
      title: 'Treatment',
      desc: 'Care paths & journeys',
      href: '/treatment',
      icon: ShieldPlus,
      hoverBg: 'group-hover:bg-navy',
      iconColor: 'text-navy',
      hoverTextColor: 'group-hover:text-navy'
    },
    {
      id: 'health-prevention-link',
      title: 'Prevention',
      desc: 'Healthy lifestyle habits',
      href: '/kidney-health/nutrition',
      icon: Droplets,
      hoverBg: 'group-hover:bg-coral',
      iconColor: 'text-coral',
      hoverTextColor: 'group-hover:text-coral'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal active">
          <h2 className="text-4xl text-navy mb-4">Empowering Parents Through Knowledge</h2>
          <p className="text-gray-600">
            Kidney health is vital for growth and development. Understanding the signs and science is the first step toward early intervention.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.id}
                href={card.href}
                id={card.id}
                className="group block stagger-item active"
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div
                  className={`h-48 rounded-xl bg-gray-50 flex items-center justify-center mb-4 ${card.hoverBg} transition-all duration-500`}
                >
                  <Icon
                    className={`w-12 h-12 ${card.iconColor} group-hover:text-white group-hover:rotate-[15deg] transition-transform duration-300`}
                  />
                </div>
                <h3 className={`text-lg font-bold text-navy mb-1 ${card.hoverTextColor} transition-colors`}>
                  {card.title}
                </h3>
                <p className="text-sm text-gray-500">{card.desc}</p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
