import React from 'react';
import Link from 'next/link';
import { Hospital, BookOpen, Users, Heart, Hand } from 'lucide-react';

export default function QuickAccess() {
  const quickCards = [
    {
      id: 'quick-care-card',
      title: 'Find Care',
      href: '/contact?inquiry=care',
      icon: Hospital,
      borderColor: 'border-teal',
      iconColor: 'text-teal'
    },
    {
      id: 'quick-info-card',
      title: 'Information',
      href: '/kidney-health',
      icon: BookOpen,
      borderColor: 'border-turquoise',
      iconColor: 'text-turquoise'
    },
    {
      id: 'quick-support-card',
      title: 'Family Support',
      href: '/support',
      icon: Users,
      borderColor: 'border-sage',
      iconColor: 'text-sage'
    },
    {
      id: 'quick-donate-card',
      title: 'Donate',
      href: '/donate',
      icon: Heart,
      borderColor: 'border-coral',
      iconColor: 'text-coral'
    },
    {
      id: 'quick-involved-card',
      title: 'Get Involved',
      href: '/get-involved',
      icon: Hand,
      borderColor: 'border-navy',
      iconColor: 'text-navy'
    }
  ];

  return (
    <section className="relative -mt-16 z-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {quickCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.id}
                href={card.href}
                id={card.id}
                className={`bg-white p-6 shadow-xl rounded-lg flex flex-col items-center text-center hover:-translate-y-1.5 hover:shadow-2xl transition-all border-t-4 ${card.borderColor} stagger-item active`}
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <Icon className={`w-8 h-8 ${card.iconColor} mb-3`} />
                <span className="text-sm font-bold text-navy uppercase tracking-wider">
                  {card.title}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
