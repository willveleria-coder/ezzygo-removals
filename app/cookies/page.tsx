import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import LegalContent from '@/components/LegalContent';

export const metadata: Metadata = {
  title: 'Cookies Policy | EzzyGo Removalist',
  description:
    'How EzzyGo Removalist uses cookies and similar technologies on our website.',
};

export default function CookiesPage() {
  return (
    <main className="relative" style={{ background: '#F5F4F1' }}>
      <Navbar />

      <PageHero
        eyebrow="Legal"
        headline="Cookies"
        italic="policy."
        subtitle="A plain-English explanation of how we use cookies and similar tracking technologies on the EzzyGo Removalist website."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Cookies Policy' },
        ]}
      />

      <LegalContent
        lastUpdated="15 May 2026"
        intro="Like most websites, ezzygoremovalist.com.au uses cookies to make the site work properly, analyse how it's used, and improve your experience. This policy explains what they do and how you can control them."
        sections={[
          {
            heading: '1. What are cookies?',
            paragraphs: [
              'Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences, keep you signed in, and gather basic analytics. Cookies don\'t contain personal information like your name or address — they\'re mostly anonymous identifiers.',
            ],
          },
          {
            heading: '2. Types of cookies we use',
            paragraphs: [
              'We use a small set of cookies, grouped as follows:',
            ],
            list: [
              'Essential cookies — required for the website to function (e.g. remembering booking progress across pages). These cannot be turned off.',
              'Analytics cookies — track anonymous data like page visits and bounce rate, so we can improve the site. We use Google Analytics for this.',
              'Functional cookies — remember choices like your preferred contact method or any forms you\'ve partially filled in.',
            ],
          },
          {
            heading: '3. Third-party cookies',
            paragraphs: [
              'Some of our analytics may set cookies from third parties like Google. These services have their own privacy policies. We don\'t allow advertising cookies or third-party tracking pixels (like Meta Pixel) without explicit consent.',
            ],
          },
          {
            heading: '4. How to control cookies',
            paragraphs: [
              'You can disable or delete cookies through your browser settings. Most browsers also let you block third-party cookies entirely. Doing this won\'t break the site but some features (like remembering your booking progress) may not work as smoothly.',
            ],
            list: [
              'Chrome → Settings → Privacy and security → Cookies',
              'Safari → Preferences → Privacy',
              'Firefox → Settings → Privacy & Security',
              'Edge → Settings → Privacy, search, and services',
            ],
          },
          {
            heading: '5. Do Not Track signals',
            paragraphs: [
              'Some browsers send a "Do Not Track" signal to websites. We currently don\'t respond to these signals as there is no agreed industry standard, but we minimise tracking to essentials and analytics only.',
            ],
          },
          {
            heading: '6. Changes to this policy',
            paragraphs: [
              'We may update this policy when we add or remove cookies on the website. The "Last updated" date at the top reflects the latest change. For full details on how we handle personal data, see our Privacy Policy.',
            ],
          },
        ]}
      />

      <Footer />
    </main>
  );
}