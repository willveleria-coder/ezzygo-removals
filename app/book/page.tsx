import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import BookingFlow from '@/components/BookingFlow';

export const metadata: Metadata = {
  title: 'Book Your Move | EzzyGo Removalist',
  description:
    'Lock in your move in 60 seconds. Pick your service, date, and time — we confirm by text within minutes.',
};

export default function BookPage() {
  return (
    <main className="relative" style={{ background: '#F5F4F1' }}>
      <Navbar />

      <PageHero
        eyebrow="Book your move"
        headline="Lock it in"
        italic="in 60 seconds."
        subtitle="Pick a service, choose your date and time, and tell us where you're moving. We'll confirm by text within minutes."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Book' },
        ]}
      />

      <BookingFlow />

      <Footer />
    </main>
  );
}