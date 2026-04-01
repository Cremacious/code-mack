import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://code-mack.dev'),
  title: 'Code Mack | Web Developer in Sarasota, FL',
  description: 'Custom websites and web apps built by Chris Mackall, a full-stack developer based in Sarasota, Florida. Fast, modern, mobile-first.',
  keywords: ['web developer', 'sarasota', 'florida', 'freelance', 'next.js', 'react'],
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
