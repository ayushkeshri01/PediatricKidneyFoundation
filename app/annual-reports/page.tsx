import React from 'react';
import Link from 'next/link';
import { FileText, Download, CheckCircle2, ShieldCheck, TrendingUp, Calendar, Heart } from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';

export const metadata = {
  title: 'Annual Reports & Institutional Governance | Pediatric Kidney Foundation',
  description: 'Access audited financial statements, annual impact reports, and clinical program summaries of the Pediatric Kidney Foundation.'
};

export default function AnnualReportsPage() {
  const reports = [
    {
      year: '2023 – 2024',
      title: 'Annual Impact & Clinical Outreach Report',
      focus: 'Expanded rural school screening camps, supported 2,400+ children, subsidized 450 dialysis sessions.',
      date: 'September 2024',
      fileSize: '3.2 MB PDF'
    },
    {
      year: '2022 – 2023',
      title: 'Audited Financial & Governance Statement',
      focus: 'Institutional partnerships with AIIMS & LHMC, post-pandemic care recovery, medication subsidies.',
      date: 'August 2023',
      fileSize: '2.8 MB PDF'
    },
    {
      year: '2021 – 2022',
      title: 'Specialized Pediatric Nephrology Care Report',
      focus: 'Tele-consultation assistance, emergency COVID-19 renal supply distribution for vulnerable children.',
      date: 'July 2022',
      fileSize: '2.4 MB PDF'
    },
    {
      year: '2020 – 2021',
      title: 'Institutional Audit & Program Review',
      focus: 'Clinical guidelines harmonization, pediatric caregiver workshops, initial endowment expansion.',
      date: 'June 2021',
      fileSize: '2.1 MB PDF'
    }
  ];

  return (
    <div className="bg-warm-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'About Us', href: '/about' }, { label: 'Annual Reports' }]} />

        {/* Header */}
        <div className="my-8 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-teal/10 rounded-full mb-4">
            <ShieldCheck className="w-4 h-4 text-teal" />
            <span className="text-xs font-bold uppercase tracking-widest text-teal">
              Institutional Governance &amp; Transparency
            </span>
          </div>
          <h1 className="text-4xl text-navy font-bold mb-4">
            Annual Reports &amp; Financial Statements
          </h1>
          <p className="text-gray-600 leading-relaxed text-base sm:text-lg font-light">
            As a registered charitable non-profit trust established in 2004, the Pediatric Kidney Foundation maintains the highest standards of financial integrity, medical ethics, and donor transparency.
          </p>
        </div>

        {/* Key Governance Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal/10 text-teal flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-navy">100%</p>
              <p className="text-xs font-bold uppercase tracking-wider text-teal">Statutory Compliance</p>
              <p className="text-xs text-gray-500 mt-1">Regularly audited by independent chartered accountants</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-coral/10 text-coral flex items-center justify-center shrink-0">
              <Heart className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-navy">88%+</p>
              <p className="text-xs font-bold uppercase tracking-wider text-coral">Program Direct Utilization</p>
              <p className="text-xs text-gray-500 mt-1">Directly spent on patient subsidies, medicines &amp; screening</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-navy/10 text-navy flex items-center justify-center shrink-0">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-extrabold text-navy">20+ Years</p>
              <p className="text-xs font-bold uppercase tracking-wider text-navy">Clean Audit Record</p>
              <p className="text-xs text-gray-500 mt-1">Registered charitable trust continuously active since 2004</p>
            </div>
          </div>
        </div>

        {/* Reports List */}
        <div className="space-y-6 my-12" id="audited">
          <h2 className="text-2xl font-bold text-navy mb-6">Published Annual Reports</h2>

          {reports.map((r, idx) => (
            <div
              key={idx}
              className="bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-teal/30 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-off-white flex items-center justify-center text-teal shrink-0 mt-1">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-coral bg-coral/10 px-2.5 py-0.5 rounded-full">
                      FY {r.year}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> Published {r.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-navy mt-1.5">{r.title}</h3>
                  <p className="text-sm text-gray-600 mt-1 max-w-2xl leading-relaxed">{r.focus}</p>
                </div>
              </div>

              <div className="shrink-0 w-full sm:w-auto">
                <a
                  href={`/contact?inquiry=annual-report-${r.year}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-teal hover:brightness-110 active:scale-95 text-white text-xs font-bold px-5 py-3 rounded-xl shadow-sm transition-all"
                >
                  <Download className="w-4 h-4" /> Request Audited Copy ({r.fileSize})
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Governance Note */}
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm my-12">
          <h3 className="text-xl font-bold text-navy mb-3">Institutional Transparency Commitment</h3>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            The Pediatric Kidney Foundation adheres strictly to Indian Trust regulations and standard accounting practices. Our accounts are audited annually by certified statutory auditors. Complete audited financial statements and board governance documents are available upon request to donors, institutional partners, and statutory bodies.
          </p>
          <div className="text-xs text-gray-500">
            For specific governance or compliance queries, please reach our Central Secretariat at{' '}
            <strong className="text-navy">contact@pkf-india.org</strong>.
          </div>
        </div>
      </div>
    </div>
  );
}
