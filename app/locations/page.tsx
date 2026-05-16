import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import LocationsGrid from '@/components/LocationsGrid';

export const metadata: Metadata = {
  title: 'Removalist Service Areas Across Queensland | EzzyGo Removalist',
  description:
    'Local removalists in Brisbane, Gold Coast, Sunshine Coast, Ipswich and Logan. Daily runs, fixed quotes, local crews.',
};

export default function LocationsPage() {
  return (
    <main className="relative" style={{ background: '#F5F4F1' }}>
      <Navbar />

      <PageHero
        eyebrow="Service areas"
        headline="Local moves,"
        italic="local crews."
        subtitle="We run trucks every day across Brisbane, the Gold Coast, the Sunshine Coast, Ipswich and Logan. Same hourly rate, same promise."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Locations' },
        ]}
        ctas={[
          { label: 'Book online', href: '/book', variant: 'primary' },
          { label: '+61 481 356 811', href: 'tel:+61481356811', variant: 'phone' },
        ]}
      />

      <LocationsGrid />

      <Footer />
    </main>
  );
}