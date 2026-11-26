import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import ScrollObserver from '@/components/ui/ScrollObserver';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  weight: ['500', '600', '700', '800'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Pediatric Kidney Foundation | Saving Young Kidneys, Securing Young Lives',
  description:
    'Dedicated exclusively to pediatric kidney health since 2004. Supporting children with kidney diseases through awareness, early care, clinical research, family empowerment, and subsidized surgeries.',
  keywords: [
    'pediatric nephrology',
    'kidney disease in children',
    'nephrotic syndrome',
    'pediatric dialysis',
    'kidney transplant',
    'congenital kidney disorders',
    'pediatric kidney foundation',
    'PKF India'
  ],
  authors: [{ name: 'Pediatric Kidney Foundation' }],
  openGraph: {
    title: 'Pediatric Kidney Foundation | Saving Young Kidneys',
    description: 'Supporting children with kidney diseases through awareness, early care, and community support.',
    url: 'https://pkf-india.org',
    siteName: 'Pediatric Kidney Foundation',
    locale: 'en_IN',
    type: 'website'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} h-full`}>
      <body className="min-h-screen flex flex-col antialiased">
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-teal focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold">
          Skip to main content
        </a>
        <ScrollObserver />
        <Header />
        <main id="main-content" className="flex-grow" tabIndex={-1}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
