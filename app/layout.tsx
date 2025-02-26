import type { Metadata } from 'next';

import { Inter } from 'next/font/google';
import './globals.css';

// Sans-Serif
const sansSerif = Inter({
  variable: '--font-sans-serif',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'TalentPioneer - Your Strategic Partner in Southeast Asia',
  description:
    'TalentPioneer is not just a recruitment agency; we connect exceptional talent with leading companies in the dynamic Southeast Asian job market through professional recruitment, career coaching, and targeted training.',
  keywords:
    'recruitment, job market, Southeast Asia, career coaching, talent acquisition, professional training',
};

// @ts-expect-error no reason why
export default function RootLayout({ children }: Readonly) {
  return (
    <html lang="en">
    <body className={`min-h-screen ${sansSerif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
