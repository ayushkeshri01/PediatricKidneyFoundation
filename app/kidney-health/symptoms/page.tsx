import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Eye, Droplet, Activity, TrendingDown, Thermometer, ShieldAlert } from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';

export const metadata = {
  title: 'Common Symptoms of Unhealthy Kidneys | PKF India',
  description: 'Recognize common symptoms of unhealthy kidneys in children: swelling, blood in urine, frothy urine, poor growth, high blood pressure, and fever with UTI.'
};

export default function SymptomsPage() {
  const symptoms = [
    {
      id: 'swelling',
      title: 'Swelling',
      desc: 'Swelling around the eyes (especially in the morning), swelling of the face, feet, ankles, legs, or abdomen due to fluid buildup.',
      icon: Eye,
      image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'blood-in-urine',
      title: 'Blood in Urine',
      desc: 'Urine that looks pink, red, cola-colored, tea-colored, or cloudy indicating red blood cells in the urine.',
      icon: Droplet,
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'frothy-urine',
      title: 'Frothy Urine',
      desc: 'Urine that looks unusually frothy or foamy, often a sign that the kidneys are leaking protein into the urine.',
      icon: Activity,
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'poor-growth',
      title: 'Poor Growth',
      desc: 'Failure to thrive, poor weight gain, stunting, or poor appetite in growing children.',
      icon: TrendingDown,
      image: 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'high-blood-pressure',
      title: 'High Blood Pressure',
      desc: 'Elevated blood pressure in children, which can be both a sign of kidney disease or can worsen kidney problems.',
      icon: ShieldAlert,
      image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 'fever-with-uti',
      title: 'Fever with UTI',
      desc: 'Unexplained fever, pain or burning while passing urine, frequent urge to urinate, or poor feeding in infants.',
      icon: Thermometer,
      image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=600'
    }
  ];

  return (
    <div className="bg-warm-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Kidney Health Hub', href: '/kidney-health' },
            { label: 'Common Symptoms of Unhealthy kidneys' }
          ]}
        />

        {/* Header */}
        <div className="my-8 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-teal block mb-2">
            Kidney Health Hub
          </span>
          <h1 className="text-4xl text-navy font-bold mb-4">
            Common Symptoms of Unhealthy kidneys
          </h1>
          <p className="text-gray-600 leading-relaxed text-base">
            Recognizing early symptoms allows timely medical evaluation by a pediatric nephrologist, protecting your child&apos;s kidney health.
          </p>
        </div>

        {/* Symptoms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
          {symptoms.map((symp) => {
            const Icon = symp.icon;
            return (
              <div
                key={symp.id}
                id={symp.id}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 w-full">
                    <Image
                      src={symp.image}
                      alt={symp.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2 text-white">
                      <div className="w-8 h-8 rounded-lg bg-teal flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h2 className="font-bold text-lg">{symp.title}</h2>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-gray-700 leading-relaxed">{symp.desc}</p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    href="/contact?inquiry=doctor"
                    className="text-xs font-bold text-teal hover:underline inline-flex items-center gap-1"
                  >
                    Consult a Doctor <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="pt-8 border-t border-gray-200 flex flex-wrap gap-4">
          <Link
            href="/kidney-health/diseases"
            className="inline-flex items-center gap-2 bg-teal text-white font-bold px-6 py-3 rounded-xl text-sm hover:brightness-110 transition-all"
          >
            Kidney Diseases in Children <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/kidney-health/healthy-kidneys"
            className="inline-flex items-center gap-2 border border-navy text-navy font-bold px-6 py-3 rounded-xl text-sm hover:bg-navy hover:text-white transition-all"
          >
            Understanding Healthy Kidneys
          </Link>
        </div>
      </div>
    </div>
  );
}
