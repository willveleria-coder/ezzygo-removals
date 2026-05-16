import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import BlogGrid from '@/components/BlogGrid';

export const metadata: Metadata = {
  title: 'Moving Tips & Guides | EzzyGo Removalist',
  description:
    'Honest moving advice from the EzzyGo crew. Packing guides, cost breakdowns, and local Queensland moving tips.',
};

export default function BlogPage() {
  return (
    <main className="relative" style={{ background: '#F5F4F1' }}>
      <Navbar />

      <PageHero
        eyebrow="The blog"
        headline="Moving tips,"
        italic="from the crew."
        subtitle="Real advice from movers who do this every day. No fluff, no SEO filler — just the stuff that actually helps you move better."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Blog' },
        ]}
      />

      <BlogGrid />

      <Footer />
    </main>
  );
}