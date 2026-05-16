import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import AboutContent from '@/components/AboutContent';

export const metadata: Metadata = {
  title: 'About EzzyGo Removalist | Queensland\'s Most Trusted Movers',
  description:
    'EzzyGo Removalist — local Queensland removalists since 2019. 2,400+ moves, 4.9★ rating, fully insured. Meet the team that actually shows up.',
};

export default function AboutPage() {
  return (
    <main className="relative" style={{ background: '#F5F4F1' }}>
      <Navbar />

      <PageHero
        eyebrow="About us"
        headline="The team that"
        italic="actually shows up."
        subtitle="EzzyGo Removalist provides reliable moving services for homes, apartments, offices and furniture deliveries across Queensland — from the first box to the last."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'About' },
        ]}
        ctas={[
          { label: 'Get my free quote', href: '/book', variant: 'primary' },
          { label: '+61 481 356 811', href: 'tel:+61481356811', variant: 'phone' },
        ]}
      />

      <AboutContent />

      <Footer />
    </main>
  );
}