import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { portfolioData } from '@/data/portfolioData';

/* Geist Sans: headings, body, navigation, buttons */
const geistSans = Geist({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-sans',
});

/* Geist Mono: technical labels, numbers, metadata */
const geistMono = Geist_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist-mono',
});

export const metadata: Metadata = {
  title: `${portfolioData.name} | ${portfolioData.role}`,
  description: `${portfolioData.name} - ${portfolioData.role}. ${portfolioData.introduction.slice(0, 160)}...`,
  keywords: [
    'UX/UI Designer',
    'Digital Marketing',
    'Technical Program Coordinator',
    'Figma',
    'Adobe XD',
    'Responsive Design',
    'IoT',
    'Robotics',
    'Embedded Systems',
    'Srichandar Portfolio'
  ],
  authors: [{ name: portfolioData.name }],
  openGraph: {
    title: `${portfolioData.name} | ${portfolioData.role}`,
    description: portfolioData.introduction.slice(0, 160),
    type: 'website',
    locale: 'en_US',
    siteName: `${portfolioData.name} Portfolio`,
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>{children}</body>
    </html>
  );
}
