import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ServicesGrid from '@/components/ServicesGrid';

export const metadata: Metadata = {
  title: 'Removalist Services Across Queensland | EzzyGo Removalist',
  description:
    'Full range of moving services — house removals, packing, furniture transport, office relocations, interstate moves, storage and same-day jobs across QLD.',
};

export default function ServicesPage() {
  return (
    <main className="relative" style={{ background: '#F5F4F1' }}>
      <Navbar />

      <PageHero
        eyebrow="01 / Our services"
        headline="Everything we do"
        italic="to move you."
        subtitle="From a single armchair across town to a full interstate relocation — every service backed by the same trusted crew, same fixed pricing, same no-nonsense promise."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services' },
        ]}
        ctas={[
          { label: 'Get my free quote', href: '/#quote', variant: 'primary' },
          {
            label: '+61 481 356 811',
            href: 'tel:+61481356811',
            variant: 'phone',
          },
        ]}
      />

      <ServicesGrid />

      <Footer />
    </main>
  );
}