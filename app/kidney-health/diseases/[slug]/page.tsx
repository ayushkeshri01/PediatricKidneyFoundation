import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  Activity,
  AlertTriangle,
  Stethoscope,
  Pill,
  ShieldCheck,
  ArrowLeft,
  Calendar,
  HelpCircle,
  CheckCircle2,
  PhoneCall
} from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';
import { diseasesData } from '@/content/diseases';

interface PageProps {
  params: Promise<{ slug: string }>;
}

const diseaseImages: Record<string, string> = {
  'urinary-tract-infection': 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=1000',
  'nephrotic-syndrome': 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000',
  'chronic-kidney-disease': 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000',
  'congenital-kidney-disorders': 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000',
  'acute-kidney-injury': 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=1000',
  'glomerulonephritis': 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=1000',
  'kidney-stones': 'https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&q=80&w=1000'
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return diseasesData.map((d) => ({
    slug: d.slug
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const disease = diseasesData.find((d) => d.slug === slug);
  if (!disease) return { title: 'Condition Not Found | PKF' };

  return {
    title: `${disease.name} in Children | Pediatric Kidney Foundation`,
    description: disease.shortDescription
  };
}

export default async function DiseaseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const disease = diseasesData.find((d) => d.slug === slug);

  if (!disease) {
    notFound();
  }

  const imageUrl = diseaseImages[disease.slug] || 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000';

  // Related other diseases
  const otherDiseases = diseasesData
    .filter((d) => d.id !== disease.id)
    .slice(0, 3);

  return (
    <div className="bg-warm-white min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs
          items={[
            { label: 'Kidney Health Hub', href: '/kidney-health' },
            { label: 'Disease Library', href: '/kidney-health/diseases' },
            { label: disease.name }
          ]}
        />

        {/* Hero Header with Medical Image Banner */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-gray-100 my-8 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-bold uppercase tracking-widest text-teal bg-teal/10 px-3 py-1 rounded-full">
                Pediatric Condition Guide
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-navy mt-4 mb-4">
                {disease.name}
              </h1>
              <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
                {disease.shortDescription}
              </p>

              {disease.isCurable && (
                <div className="flex items-start gap-3 p-4 bg-teal/5 border border-teal/20 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-teal">
                      Prognosis &amp; Management
                    </p>
                    <p className="text-sm text-navy mt-0.5 font-medium">{disease.isCurable}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-4 relative">
              <div className="relative h-60 sm:h-72 w-full rounded-2xl overflow-hidden shadow-lg border-2 border-white">
                <Image
                  src={imageUrl}
                  alt={disease.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 35vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs">
                  <p className="font-bold flex items-center gap-1.5">
                    <Stethoscope className="w-3.5 h-3.5 text-teal" /> PKF Clinical Protocols
                  </p>
                  <p className="text-white/80 text-[11px]">Validated pediatric nephrology guidelines</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-12">
            {/* Symptoms */}
            <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-coral/10 text-coral flex items-center justify-center">
                  <Activity className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-navy">Common Signs and Symptoms</h2>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {disease.symptoms.map((symptom, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-warm-white border border-gray-100"
                  >
                    <span className="w-2 h-2 rounded-full bg-coral shrink-0 mt-2" />
                    <span className="text-sm text-gray-700 leading-relaxed">{symptom}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Causes */}
            <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-teal/10 text-teal flex items-center justify-center">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-navy">Why Does It Happen? (Causes)</h2>
              </div>
              <ul className="space-y-3">
                {disease.causes.map((cause, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 leading-relaxed">{cause}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Diagnosis */}
            <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-navy/10 text-navy flex items-center justify-center">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-navy">How Is It Diagnosed?</h2>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Your pediatric nephrologist may recommend one or more targeted investigations to assess kidney function and structure:
              </p>
              <ul className="space-y-3">
                {disease.diagnosis.map((test, idx) => (
                  <li
                    key={idx}
                    className="p-3.5 rounded-xl bg-off-white/80 border border-gray-100 text-sm font-medium text-navy flex items-center gap-3"
                  >
                    <span className="w-6 h-6 rounded-full bg-navy text-white text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span>{test}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Treatment */}
            <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-teal/10 text-teal flex items-center justify-center">
                  <Pill className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-navy">Treatment &amp; Care Paths</h2>
              </div>
              <ul className="space-y-3">
                {disease.treatment.map((t, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700 leading-relaxed">{t}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* When to See a Doctor */}
            <section className="bg-coral/5 border border-coral/20 p-8 rounded-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-coral/10 text-coral flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-navy">When Should You See a Doctor?</h2>
              </div>
              <p className="text-sm text-gray-700 mb-4 font-medium">
                Seek medical attention or visit an emergency room immediately if you notice any of these critical signs:
              </p>
              <ul className="space-y-2">
                {disease.whenToSeeDoctor.map((warning, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-charcoal font-medium">
                    <span className="w-2 h-2 rounded-full bg-coral shrink-0 mt-2" />
                    <span>{warning}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Prevention if available */}
            {disease.prevention && (
              <section className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-sage/20 text-teal flex items-center justify-center">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-navy">Can It Be Prevented?</h2>
                </div>
                <ul className="space-y-3">
                  {disease.prevention.map((prev, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 leading-relaxed">{prev}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            {/* Clinical Help Card */}
            <div className="bg-navy text-white p-8 rounded-3xl shadow-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-coral">
                Immediate Guidance
              </span>
              <h3 className="text-2xl font-bold mt-2 mb-4 text-white">Need Clinical Guidance?</h3>
              <p className="text-sm text-white/80 leading-relaxed mb-6 font-light">
                Our foundation coordinates with premier pediatric nephrologists across India to guide families through diagnostic confirmation and specialized care.
              </p>
              <Link
                href="/contact?inquiry=help"
                className="w-full bg-coral text-white py-3.5 px-4 rounded-xl font-bold text-sm flex items-center justify-center gap-2 hover:brightness-110 shadow-md transition-all"
              >
                <PhoneCall className="w-4 h-4" /> Connect with PKF Care Desk
              </Link>
            </div>

            {/* Other Conditions */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200">
              <h4 className="font-bold text-navy text-sm uppercase tracking-wider mb-4">
                Other Conditions
              </h4>
              <div className="space-y-3">
                {otherDiseases.map((od) => (
                  <Link
                    key={od.id}
                    href={`/kidney-health/diseases/${od.slug}`}
                    className="block p-3 rounded-xl hover:bg-teal/5 transition-all group"
                  >
                    <p className="font-bold text-navy group-hover:text-teal text-sm transition-colors">
                      {od.name}
                    </p>
                    <p className="text-xs text-gray-500 line-clamp-1 mt-0.5">
                      {od.shortDescription}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Back link */}
            <div>
              <Link
                href="/kidney-health/diseases"
                className="inline-flex items-center gap-2 text-sm font-bold text-navy hover:text-teal transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> All Conditions Library
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
