# Pediatric Kidney Foundation (PKF) Web Portal

[![Next.js](https://img.shields.io/badge/Next.js-16.4.6-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3.0-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)

A modern, clinical-grade, fully responsive web application for the **Pediatric Kidney Foundation (PKF)**, a registered Indian non-profit trust established on 5 April 2004 dedicated to saving young kidneys through early detection, clinical education, specialized pediatric nephrology care, and patient assistance.

---

## 🌟 Key Highlights

- **100% Mobile-Responsive Architecture**: Seamless viewport scaling across mobile, tablet, and desktop devices with touch-friendly navigation drawer, collapsible accordions, and body-scroll locking.
- **Compassionate Pediatric Hero**: Authentic high-impact visual composition featuring caring pediatric clinical care, live animated trust metrics, and floating highlight tags.
- **Interactive Global Search Modal**: Instant client-side search across all 7 disease guides, diagnostic tests, screening camps, and FAQs.
- **Comprehensive Clinical Library**: 
  - **7 Common Childhood Conditions**: UTI, Nephrotic Syndrome, Chronic Kidney Disease (CKD), CAKUT, Acute Kidney Injury (AKI), Glomerulonephritis, and Kidney Stones.
  - **Diagnostic Investigations**: Urine dipsticks, 24-hour UPCR, ultrasound, and blood panels.
  - **Treatment Pathways**: Dialysis modalities and kidney transplant coordination.
  - **Nutritional Guidance**: Hydration rules, electrolyte balances, and pediatric renal recipes.
  - **20 Verified FAQs**: Doctor-curated questions and answers for family caregivers.
- **Institutional Governance & Transparency**:
  - Annual reports archive (2020–2024) with audited financial statement request workflows.
  - Leadership directory featuring governing trustees and medical advisory faculty from AIIMS, Lady Hardinge, and Sir Ganga Ram Hospital.
- **Donation & Support Portal**:
  - Direct contribution tiers (₹1,000, ₹2,500, ₹5,000, ₹10,000, and custom amount).
  - NEFT / RTGS bank transfer details and instantaneous digital donation confirmation.
- **Location & Secretariat Hub**:
  - Central Secretariat in South Extension-1, New Delhi.
  - Direct Google Maps navigation link, verified office hours, and quick contact inquiry form.

---

## 🗂️ Project Architecture

```
├── app/
│   ├── layout.tsx                     # Global Root Layout (Inter + Manrope fonts, Header & Footer)
│   ├── page.tsx                       # Homepage (Hero, Quick Access, Impact, Awareness, Stories)
│   ├── about/
│   │   ├── page.tsx                   # History, Mission, Vision, and Governance
│   │   └── leadership/page.tsx        # Medical Board & Trustees Directory
│   ├── annual-reports/page.tsx        # Published Annual Reports & Audited Financial Statements
│   ├── contact/page.tsx               # Secretariat Hub, Google Map, Office Hours & Inquiry Form
│   ├── donate/
│   │   ├── page.tsx                   # Donation Checkout Portal
│   │   └── thank-you/page.tsx         # Confirmation & Digital Receipt Screen
│   ├── faq/page.tsx                   # Dedicated Frequently Asked Questions Portal
│   ├── get-involved/page.tsx          # Volunteer, Clinical Collaboration & CSR Partnerships
│   ├── kidney-health/
│   │   ├── page.tsx                   # Kidney Health Hub Overview & Symptom Index
│   │   ├── healthy-kidneys/page.tsx   # Renal Anatomy & 6 Core Functions
│   │   ├── symptoms/page.tsx          # Warning Signs, Edema, and Urine Changes
│   │   ├── diseases/                  # Clinical Disease Directory
│   │   │   ├── page.tsx               # 7 Conditions Library Index
│   │   │   └── [slug]/page.tsx        # Static Condition Detail Guide (SSG)
│   │   ├── diagnosis/page.tsx         # Diagnostic Tests & Investigations Guide
│   │   └── nutrition/page.tsx         # Pediatric Renal Diet & Hydration Protocols
│   ├── treatment/page.tsx             # Dialysis (Hemodialysis/PD) & Transplantation Care
│   ├── programs/page.tsx              # School Hydration, Rural Screening & Parent Camps
│   ├── support/page.tsx               # Support Groups, Financial Aid & Caregiver Training
│   ├── news/                          # News & Media Reports
│   ├── privacy/page.tsx               # Donor Privacy Policy
│   ├── terms/page.tsx                 # Terms of Service
│   └── disclaimer/page.tsx            # Medical & Emergency Guidance Disclaimer
├── components/
│   ├── home/                          # HomeHero, QuickAccess, AboutPKFSection, etc.
│   ├── shared/                        # Header, Footer, SearchModal, Breadcrumbs
│   └── ui/                            # Accordion, AnimatedCounter
├── content/                           # Strongly-typed data for diseases, FAQs, leaders, news
└── types/                             # TypeScript definitions
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.17 or later recommended)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/ayushkeshri01/PediatricKidneyFoundation.git
cd PediatricKidneyFoundation

# Install dependencies
npm install --ignore-scripts
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm start
```

---

## 🎨 Design System

- **Palette**:
  - Primary Navy: `#1E3A5F`
  - Primary Teal: `#0D7377`
  - Accent Coral: `#E8714B`
  - Turquoise: `#5E9CA0`
  - Soft Sage: `#B8D4BD`
  - Warm White: `#FAFAF8`
- **Typography**:
  - Headings: `Manrope` (700 / 800)
  - Body: `Inter` (400 / 500 / 600)

---

## 📄 License & Disclaimer

Copyright © 2024 Pediatric Kidney Foundation. All rights reserved.  
Medical content is curated by pediatric nephrologists for educational guidance and does not replace in-person pediatric medical consultation.
