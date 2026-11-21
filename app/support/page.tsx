import React from 'react';
import Link from 'next/link';
import { Users, HeartHandshake, PhoneCall, FileText, CheckCircle2, ArrowRight } from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';

export const metadata = {
  title: 'Patient & Family Support | Pediatric Kidney Foundation',
  description: 'Support groups, caregiver counseling, treatment guidance, and financial assistance pathways for families navigating childhood kidney conditions.'
};

export default function SupportPage() {
  const supportServices = [
    {
      title: 'Parent Support Groups',
      description: 'Connect with other parents who have walked the same path. Monthly virtual and in-person peer circles share practical coping mechanisms for Nephrotic Syndrome relapses, dialysis routines, and post-transplant care.',
      icon: Users,
      badge: 'Community Circles'
    },
    {
      title: 'Financial Treatment Assistance',
      description: 'Subsidized clinical aid for low-income families requiring ongoing dialysis consumables, immunosuppressants, corrective urological surgery, or transplant evaluation costs.',
      icon: HeartHandshake,
      badge: 'Direct Aid'
    },
    {
      title: 'Caregiver Education & Training',
      description: 'Step-by-step guidance on home urine dipstick testing, maintaining blood pressure logs, administering pediatric steroid regimens safely, and infection prevention.',
      icon: FileText,
      badge: 'Clinical Empowerment'
    },
    {
      title: '24/7 Helpline & Care Navigators',
      description: 'Our dedicated patient care coordinators assist families in booking appointments with pediatric nephrologists, securing second opinions, and accessing diagnostic services.',
      icon: PhoneCall,
      badge: 'Care Navigation'
    }
  ];

  return (
    <div className="bg-warm-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Patient & Family Support' }]} />

        {/* Hero */}
        <div className="my-8 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-teal">
            Compassionate Family Empowerment
          </span>
          <h1 className="text-4xl text-navy font-bold mt-2 mb-4">
            You Are Not Alone on This Journey
          </h1>
          <p className="text-gray-600 leading-relaxed text-base">
            Receiving a pediatric kidney disease diagnosis is overwhelming for any parent. The Pediatric Kidney Foundation provides comprehensive emotional, financial, and clinical guidance to support your family every step of the way.
          </p>
        </div>

        {/* Support Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          {supportServices.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-teal/10 text-teal flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded bg-teal/10 text-teal">
                      {svc.badge}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-3">{svc.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {svc.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <Link
                    href="/contact?inquiry=support"
                    className="text-teal font-bold text-xs uppercase tracking-widest hover:underline inline-flex items-center gap-1.5"
                  >
                    Join Support Pathway <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Urgent Help Box */}
        <div className="bg-navy text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 my-12">
          <div className="max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-coral">
              PKF Support Helpline
            </span>
            <h2 className="text-3xl font-bold mt-2 mb-3 text-white">Need Immediate Family Guidance?</h2>
            <p className="text-white/80 text-sm font-light leading-relaxed">
              Call our Delhi coordinating office at <strong>+91 (011) 4567-8901</strong> or email <strong>contact@pkf-india.org</strong> to speak with our family liaison coordinator.
            </p>
          </div>
          <Link
            href="/contact?inquiry=support"
            className="bg-coral text-white px-8 py-3.5 rounded-xl font-bold text-sm whitespace-nowrap hover:brightness-110 shadow-lg text-center"
          >
            Connect with Parent Counselor
          </Link>
        </div>
      </div>
    </div>
  );
}
