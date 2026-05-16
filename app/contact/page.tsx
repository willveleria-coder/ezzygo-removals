import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ContactContent from '@/components/ContactContent';

export const metadata: Metadata = {
  title: 'Contact EzzyGo Removalist | Queensland Removalists',
  description:
    'Get in touch with EzzyGo Removalist. Call +61 481 356 811 or send a message — we reply within the hour, every day of the week.',
};

export default function ContactPage() {
  return (
    <main className="relative" style={{ background: '#F5F4F1' }}>
      <Navbar />

      <PageHero
        eyebrow="Get in touch"
        headline="Let's plan"
        italic="your move."
        subtitle="Call, text, or send us a message — we reply within the hour, every day of the week. Quotes are free and no-pressure."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Contact' },
        ]}
        ctas={[
          { label: 'Book online', href: '/book', variant: 'primary' },
          { label: '+61 481 356 811', href: 'tel:+61481356811', variant: 'phone' },
        ]}
      />

      <ContactContent />

      <Footer />
    </main>
  );
}