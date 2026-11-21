'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Heart, ShieldCheck, CheckCircle2, ArrowRight, Lock, Award } from 'lucide-react';
import Breadcrumbs from '@/components/shared/Breadcrumbs';

export default function DonatePage() {
  const router = useRouter();

  const presetAmounts = [
    { value: 1000, label: '₹1,000', impact: 'Subsidizes diagnostic dipsticks & screening for 5 children' },
    { value: 2500, label: '₹2,500', impact: 'Provides 1 month of essential medications for Nephrotic Syndrome' },
    { value: 5000, label: '₹5,000', impact: 'Sponsors 2 pediatric dialysis sessions with consumables' },
    { value: 10000, label: '₹10,000', impact: 'Co-funds comprehensive pre-transplant tissue typing tests' }
  ];

  const [selectedAmount, setSelectedAmount] = useState<number>(2500);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isCustom, setIsCustom] = useState(false);

  // Form Fields
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    panNumber: '',
    address: '',
    isAnonymous: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const activeAmount = isCustom ? Number(customAmount) || 0 : selectedAmount;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeAmount < 100) {
      alert('Please enter a minimum donation amount of ₹100.');
      return;
    }

    setIsSubmitting(true);
    // Simulate payment gateway handoff & redirect to thank-you with query parameters
    setTimeout(() => {
      router.push(`/donate/thank-you?amount=${activeAmount}&name=${encodeURIComponent(formData.fullName || 'Valued Donor')}`);
    }, 800);
  };

  return (
    <div className="bg-warm-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Donate' }]} />

        {/* Header */}
        <div className="my-8 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-coral/10 border border-coral/30 rounded-full mb-4">
            <span className="text-xs font-bold uppercase tracking-widest text-coral">
              80G Tax Exempt Foundation
            </span>
          </div>
          <h1 className="text-4xl text-navy font-bold mb-4">
            Support Our Mission: Save Young Kidneys
          </h1>
          <p className="text-gray-600 leading-relaxed text-base">
            Your generous contribution directly funds life-saving pediatric dialysis, diagnostic screening camps, medicines, and corrective urological surgeries for children from underprivileged families.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 my-10">
          {/* Main Donation Form */}
          <div className="lg:col-span-8 bg-white p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Step 1: Select Amount */}
              <div>
                <label className="block text-sm font-bold uppercase tracking-wider text-navy mb-4">
                  1. Choose Your Contribution Amount (INR)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
                  {presetAmounts.map((preset) => (
                    <button
                      type="button"
                      key={preset.value}
                      onClick={() => {
                        setSelectedAmount(preset.value);
                        setIsCustom(false);
                      }}
                      className={`py-4 px-3 rounded-2xl font-bold text-lg border-2 transition-all cursor-pointer ${
                        !isCustom && selectedAmount === preset.value
                          ? 'border-coral bg-coral/10 text-coral shadow-sm'
                          : 'border-gray-200 text-navy hover:border-gray-300'
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>

                {/* Custom Amount Field */}
                <div className="relative">
                  <span className="absolute left-4 top-3.5 text-gray-500 font-bold">₹</span>
                  <input
                    type="number"
                    min="100"
                    placeholder="Or enter custom amount in INR"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setIsCustom(true);
                    }}
                    onFocus={() => setIsCustom(true)}
                    className={`w-full pl-8 pr-4 py-3 rounded-xl border text-sm font-semibold transition-all ${
                      isCustom ? 'border-coral ring-2 ring-coral/20' : 'border-gray-200'
                    }`}
                  />
                </div>

                {/* Impact Descriptor */}
                <div className="mt-4 p-4 rounded-xl bg-teal/5 border border-teal/20 text-xs text-navy flex items-center gap-2.5">
                  <Award className="w-5 h-5 text-teal shrink-0" />
                  <span>
                    <strong>Your Impact:</strong>{' '}
                    {isCustom
                      ? `A contribution of ₹${activeAmount || 0} provides vital pediatric kidney care consumables and diagnostics.`
                      : presetAmounts.find((p) => p.value === selectedAmount)?.impact}
                  </span>
                </div>
              </div>

              {/* Step 2: Donor Details */}
              <div className="border-t border-gray-100 pt-8">
                <label className="block text-sm font-bold uppercase tracking-wider text-navy mb-4">
                  2. Donor Information (For 80G Tax Exemption Receipt)
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Sharma"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-teal"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Email Address (Receipt will be sent here) *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-teal"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-teal"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      PAN Number (Required for 80G Certificate) *
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={10}
                      placeholder="ABCDE1234F"
                      value={formData.panNumber}
                      onChange={(e) =>
                        setFormData({ ...formData, panNumber: e.target.value.toUpperCase() })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm uppercase focus:outline-none focus:border-teal font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Postal Address
                  </label>
                  <input
                    type="text"
                    placeholder="House/Street, City, State, PIN Code"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-teal"
                  />
                </div>
              </div>

              {/* Step 3: Security & Submit */}
              <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Lock className="w-4 h-4 text-teal" />
                  <span>256-Bit SSL Encrypted &amp; Secure Payment Processing</span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-coral hover:brightness-110 active:scale-95 text-white font-bold px-10 py-4 rounded-xl text-base shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    'Processing Gift...'
                  ) : (
                    <>
                      Donate ₹{activeAmount.toLocaleString('en-IN')} Now
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Sidebar: 80G Exemption Info & Bank Details */}
          <div className="lg:col-span-4 space-y-8">
            {/* 80G Card */}
            <div className="bg-navy text-white p-8 rounded-3xl shadow-xl">
              <span className="text-xs font-bold uppercase tracking-widest text-teal">
                Tax Benefit
              </span>
              <h3 className="text-2xl font-bold mt-2 mb-4 text-white">80G Tax Exemption</h3>
              <p className="text-sm text-white/80 leading-relaxed font-light mb-6">
                All donations made to the Pediatric Kidney Foundation (PKF) are eligible for 50% tax deduction under Section 80G of the Indian Income Tax Act. A formal 80G tax receipt will be issued to your email.
              </p>
              <div className="space-y-3 border-t border-white/10 pt-4 text-xs text-white/90">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-coral shrink-0" />
                  <span>Registered Non-Profit Trust since 2004</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-coral shrink-0" />
                  <span>Immediate Digital Tax Certificate</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-coral shrink-0" />
                  <span>100% Directed to Pediatric Care</span>
                </div>
              </div>
            </div>

            {/* Direct Bank Transfer (NEFT / RTGS) */}
            <div className="bg-white p-6 rounded-2xl border border-gray-200">
              <h4 className="font-bold text-navy text-sm uppercase tracking-wider mb-3">
                Direct Bank Transfer (NEFT / RTGS)
              </h4>
              <p className="text-xs text-gray-500 mb-4">
                You may also donate directly through your bank netbanking portal:
              </p>
              <div className="space-y-2 text-xs font-mono bg-off-white p-4 rounded-xl border border-gray-100 text-gray-800">
                <p><strong>A/C Name:</strong> Pediatric Kidney Foundation</p>
                <p><strong>Bank:</strong> State Bank of India</p>
                <p><strong>Branch:</strong> South Extension, New Delhi</p>
                <p><strong>IFSC Code:</strong> SBIN0001234</p>
                <p><strong>A/C No:</strong> 34567890123</p>
              </div>
              <p className="text-[11px] text-gray-400 mt-3">
                Please email transfer receipt and PAN details to contact@pkf-india.org for 80G receipt generation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
