import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import PricingContent from '@/components/PricingContent';

export const metadata: Metadata = {
  title: 'Pricing — EzzyGo Removalist',
  description:
    'Honest, transparent removalist pricing across South East Queensland. Hourly rates from $169/hr. GST, insurance, fuel & equipment included.',
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="─── Pricing"
        headline="Real prices."
        italic="No surprises."
        subtitle="Hourly rates from $169. GST, insurance, fuel and equipment all included. The price you see is exactly what you pay."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Pricing', href: '/pricing' },
        ]}
        ctas={[
          { label: 'Book online', href: '/book', variant: 'primary' },
          { label: 'Call +61 481 356 811', href: 'tel:+61481356811', variant: 'phone' },
        ]}
      />
      <PricingContent />
    </>
  );
}