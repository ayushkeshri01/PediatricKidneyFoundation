import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Activity,
  ArrowRight,
  RefreshCw,
  Heart,
  Droplets,
  Eye,
  TrendingDown,
  Thermometer,
  ShieldAlert
} from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import Accordion from '@/components/ui/Accordion';
import { pkfFAQs } from '@/content/faq';
import { diseasesData } from '@/content/diseases';
import { diagnosticTests } from '@/content/diagnosis';

export const metadata = {
  title: 'Kidney Health Hub | Pediatric Kidney Foundation',
  description: 'Understanding Healthy Kidneys, Common Symptoms of Unhealthy kidneys, Diseases in Children, Diagnosis, Treatment, Nutrition & FAQs.'
};

export default function KidneyHealthPage() {
  const symptoms = [
    { title: 'Swelling', href: '/kidney-health/symptoms#swelling', icon: Eye },
    { title: 'Blood in Urine', href: '/kidney-health/symptoms#blood-in-urine', icon: Droplets },
    { title: 'Frothy Urine', href: '/kidney-health/symptoms#frothy-urine', icon: Activity },
    { title: 'Poor Growth', href: '/kidney-health/symptoms#poor-growth', icon: TrendingDown },
    { title: 'High Blood Pressure', href: '/kidney-health/symptoms#high-blood-pressure', icon: ShieldAlert },
    { title: 'Fever with UTI', href: '/kidney-health/symptoms#fever-with-uti', icon: Thermometer }
  ];

  const faqItems = pkfFAQs.map((faq) => ({
    id: faq.id,
    title: `${faq.id}. ${faq.question}`,
    content: (
      <p className="text-gray-700 leading-relaxed text-sm">{faq.answer}</p>
    )
  }));

  return (
    <div className="bg-warm-white min-h-screen">
      {/* Hero Header */}
      <section className="bg-navy text-white py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs variant="dark" items={[{ label: 'Kidney Health Hub' }]} />
          <div className="max-w-3xl mt-4">
            <span className="text-xs font-bold uppercase tracking-widest text-coral block mb-2">
              Education &amp; Care
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-white">
              Kidney Health Hub
            </h1>
            <p className="text-lg text-white/90 font-light leading-relaxed">
              Supporting Children with Kidney Diseases Through Awareness, Early Care, and Community Support.
            </p>
          </div>
        </div>
      </section>

      {/* Understanding Healthy Kidneys */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-off-white border border-gray-200 rounded-3xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="lg:w-7/12">
              <span className="text-xs font-bold uppercase tracking-widest text-teal block mb-2">
                Healthy Kidneys
              </span>
              <h2 className="text-3xl text-navy font-bold mb-4">
                Understanding Healthy Kidneys
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6 text-base">
                The kidneys are remarkable organs that perform essential functions necessary for life. They remove waste products from the blood, regulate body fluids and electrolytes, maintain healthy blood pressure, produce hormones that stimulate red blood cell production, and support healthy bone growth. In children, healthy kidneys are particularly important because they contribute to normal growth and development. Understanding how the kidneys function helps families recognize the importance of protecting kidney health from an early age.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/kidney-health/healthy-kidneys"
                  className="bg-teal text-white px-6 py-3 rounded-xl font-bold text-sm hover:brightness-110 transition-all inline-flex items-center gap-2 shadow-md"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/kidney-health/diseases"
                  className="border-2 border-navy text-navy px-6 py-3 rounded-xl font-bold text-sm hover:bg-navy hover:text-white transition-all"
                >
                  Kidney Diseases in Children
                </Link>
              </div>
            </div>

            <div className="lg:w-5/12 w-full">
              <div className="relative h-64 sm:h-72 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800"
                  alt="Understanding Healthy Kidneys"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Symptoms of Unhealthy kidneys */}
      <section className="py-20 bg-warm-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-coral block mb-1">
                Warning Signs
              </span>
              <h2 className="text-3xl text-navy font-bold">
                Common Symptoms of Unhealthy kidneys
              </h2>
            </div>
            <Link
              href="/kidney-health/symptoms"
              className="text-navy font-bold hover:text-teal inline-flex items-center gap-1.5 transition-colors text-sm"
            >
              View Symptoms Guide <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {symptoms.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  href={item.href}
                  className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all flex flex-col items-center text-center group"
                >
                  <div className="w-12 h-12 rounded-xl bg-coral/10 text-coral flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-navy text-sm group-hover:text-teal transition-colors">
                    {item.title}
                  </h3>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Kidney Diseases in Children */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal block mb-1">
                Clinical Library
              </span>
              <h2 className="text-3xl text-navy font-bold">
                Kidney Diseases in Children
              </h2>
            </div>
            <Link
              href="/kidney-health/diseases"
              className="text-navy font-bold hover:text-teal inline-flex items-center gap-1 text-sm"
            >
              View All 7 Conditions <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diseasesData.map((disease) => (
              <div
                key={disease.id}
                className="bg-warm-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <h3 className="font-bold text-navy text-xl group-hover:text-teal transition-colors mb-2">
                    {disease.name}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed mb-4 line-clamp-3">
                    {disease.shortDescription}
                  </p>
                </div>
                <div>
                  <Link
                    href={`/kidney-health/diseases/${disease.slug}`}
                    className="text-xs font-bold text-teal hover:underline inline-flex items-center gap-1"
                  >
                    Read Guide <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnosis & Investigations */}
      <section className="py-20 bg-off-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal block mb-1">
                Medical Evaluation
              </span>
              <h2 className="text-3xl text-navy font-bold">
                Diagnosis &amp; Investigations
              </h2>
            </div>
            <Link
              href="/kidney-health/diagnosis"
              className="text-navy font-bold hover:text-teal inline-flex items-center gap-1 text-sm"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diagnosticTests.map((test) => (
              <div
                key={test.id}
                className="bg-white p-6 rounded-2xl border border-gray-100 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-bold text-navy text-lg mb-2">{test.name}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {test.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Journey */}
      <section className="py-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal block mb-1">
                Care Modalities
              </span>
              <h2 className="text-3xl text-navy font-bold">
                Treatment Journey
              </h2>
            </div>
            <Link
              href="/treatment"
              className="text-navy font-bold hover:text-teal inline-flex items-center gap-1 text-sm"
            >
              Explore Treatment <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-warm-white p-8 rounded-3xl border border-gray-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal/10 text-teal flex items-center justify-center mb-4">
                  <RefreshCw className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-3">Dialysis</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  Dialysis is a treatment that helps do the work of the kidneys when they are no longer able to function properly. Healthy kidneys remove waste, extra water, and harmful substances from the blood. When the kidneys stop working, these waste products build up in the body. Dialysis helps remove them and keeps the body healthy.
                </p>
              </div>
              <Link
                href="/treatment#dialysis"
                className="text-xs font-bold text-teal hover:underline inline-flex items-center gap-1"
              >
                Learn More About Dialysis <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="bg-warm-white p-8 rounded-3xl border border-gray-200 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-coral/10 text-coral flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-navy mb-3">Kidney Transplant</h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">
                  A kidney transplant is a surgery in which a healthy kidney from a donor is placed into the body of a child whose kidneys are no longer working properly. For many children with advanced kidney disease, a kidney transplant offers the best chance of leading a healthy and active life.
                </p>
              </div>
              <Link
                href="/treatment#transplant"
                className="text-xs font-bold text-coral hover:underline inline-flex items-center gap-1"
              >
                Learn More About Kidney Transplant <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Nutrition & Lifestyle */}
      <section className="py-20 bg-off-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal block mb-1">
                Everyday Habits
              </span>
              <h2 className="text-3xl text-navy font-bold">
                Nutrition &amp; Lifestyle
              </h2>
            </div>
            <Link
              href="/kidney-health/nutrition"
              className="text-navy font-bold hover:text-teal inline-flex items-center gap-1 text-sm"
            >
              View Full Guide <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-gray-100 shadow-xs flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                Good nutrition and healthy daily habits play an important role in keeping your child&apos;s kidneys healthy.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Simple healthy habits, regular medical check-ups, and timely treatment can go a long way in protecting your child&apos;s kidneys. With the right care and support, many children with kidney disease can grow, learn, and lead active, fulfilling lives.
              </p>
            </div>
            <Link
              href="/kidney-health/nutrition"
              className="shrink-0 bg-teal text-white px-6 py-3.5 rounded-xl font-bold text-sm hover:brightness-110 transition-all shadow-md inline-flex items-center gap-2"
            >
              Healthy Eating &amp; Habits <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-teal block mb-1">
              Q&amp;A
            </span>
            <h2 className="text-3xl font-bold text-navy">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="bg-off-white p-6 sm:p-10 rounded-3xl border border-gray-100">
            <Accordion items={faqItems} />
          </div>
        </div>
      </section>
    </div>
  );
}
