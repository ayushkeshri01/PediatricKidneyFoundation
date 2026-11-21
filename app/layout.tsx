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
        <ScrollObserver />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
