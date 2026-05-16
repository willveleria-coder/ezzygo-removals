import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import LocationDetailView from '@/components/LocationDetailView';
import { locations, getLocation } from '@/lib/locations';

export async function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const loc = getLocation(params.slug);
  if (!loc) return { title: 'Location not found' };
  return {
    title: `${loc.name} Removalists | EzzyGo Removalist`,
    description: `${loc.tagline} Local ${loc.name} crew, fixed quotes, same-day jobs welcome.`,
  };
}

export default function LocationPage({
  params,
}: {
  params: { slug: string };
}) {
  const loc = getLocation(params.slug);
  if (!loc) notFound();

  return (
    <main className="relative" style={{ background: '#F5F4F1' }}>
      <Navbar />
      <LocationDetailView slug={loc.slug} />
      <Footer />
    </main>
  );
}