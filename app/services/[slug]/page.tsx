import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import ServiceDetailView from '@/components/ServiceDetailView';
import { services, getService } from '@/lib/services';

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = getService(params.slug);
  if (!service) return { title: 'Service not found' };
  return {
    title: `${service.title} | EzzyGo Removalist`,
    description: service.tagline,
  };
}

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const service = getService(params.slug);
  if (!service) notFound();

  return (
    <main className="relative" style={{ background: '#F5F4F1' }}>
      <Navbar />

      <PageHero
        eyebrow={`Service · ${service.duration}`}
        headline={service.title}
        italic={service.tagline}
        subtitle={service.short}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Services', href: '/services' },
          { label: service.title },
        ]}
        ctas={[
          { label: 'Get my free quote', href: '/#quote', variant: 'primary' },
          { label: '+61 481 356 811', href: 'tel:+61481356811', variant: 'phone' },
        ]}
      />

      <ServiceDetailView slug={service.slug} />

      <Footer />
    </main>
  );
}