import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
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
      <body
        className={`min-h-screen ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
