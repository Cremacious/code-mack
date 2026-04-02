import type { Metadata } from 'next';
import { Nunito, Outfit } from 'next/font/google';
import './globals.css';
import { ScrollToTop } from '@/components/ScrollToTop';

const nunito = Nunito({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://code-mack.dev'),
  title: 'Code Mack | Web Developer in Sarasota, FL',
  description: 'Custom websites and web apps built by Chris Mackall, a full-stack developer based in Sarasota, Florida. Fast, modern, mobile-first.',
  keywords: ['web developer', 'sarasota', 'florida', 'freelance', 'next.js', 'react'],
  verification: {
    google: 'f5fy0Q1G2Zj71ada6JQGk2RodnjI3cWbNZNyEVdgcKY',
  },
  openGraph: {
    title: 'Code Mack | Web Developer in Sarasota, FL',
    description: 'Custom websites and web apps built by Chris Mackall.',
    url: 'https://code-mack.dev',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${nunito.variable} ${outfit.variable} antialiased`}>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
