import type { Metadata } from 'next';
import './globals.css';
import ChatWidget from '@/components/ChatWidget';

export const metadata: Metadata = {
  title: 'EzzyGo Removals — Affordable & Reliable Queensland Removalists',
  description:
    'Professional house removals, furniture transport, office relocations, interstate moves, and same-day moving services across Brisbane, Gold Coast, and Queensland.',
  keywords: [
    'removalists',
    'gold coast removalist',
    'brisbane removalist',
    'queensland movers',
    'house removals',
    'furniture transport',
    'interstate moves',
  ],
  openGraph: {
    title: 'EzzyGo Removals — Queensland\'s Easiest Move',
    description: 'Reliable, affordable removalists across QLD. Get a free quote in under 60 seconds.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..900;1,9..144,300..900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-cream-100 text-ink-900 antialiased">
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}