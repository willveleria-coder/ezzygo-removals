import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import PricingContent from '@/components/PricingContent';

export const metadata: Metadata = {
  title: 'How Our Pricing Works — EzzyGo Removalist',
  description:
    'Every move is different, so every quote is too. Tell us what you need and get a free, no-obligation fixed quote — GST, insurance, fuel and equipment always included.',
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="─── Pricing"
        headline="A fixed price."
        italic="Before we lift a thing."
        subtitle="No hourly guesswork, no surprise add-ons. Tell us what you're moving and we'll come back with one number — GST, insurance, fuel and equipment included."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Pricing', href: '/pricing' },
        ]}
        ctas={[
          { label: 'Get your free quote', href: '/book', variant: 'primary' },
          { label: 'Call +61 481 356 811', href: 'tel:+61481356811', variant: 'phone' },
        ]}
      />
      <PricingContent />
    </>
  );
}
