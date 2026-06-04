import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import LegalContent from '@/components/LegalContent';

export const metadata: Metadata = {
  title: 'Privacy Policy | EzzyGo Removalist',
  description:
    'How EzzyGo Removalist collects, uses, and protects your personal information.',
};

export default function PrivacyPage() {
  return (
    <main className="relative" style={{ background: '#F5F4F1' }}>
      <Navbar />

      <PageHero
        eyebrow="Legal"
        headline="Privacy"
        italic="policy."
        subtitle="How we collect, use, and protect the information you share with us when you book or contact EzzyGo Removalist."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Privacy Policy' },
        ]}
      />

      <LegalContent
        lastUpdated="15 May 2026"
        intro="EzzyGo Removalist (we, us, our) is committed to protecting your privacy. This policy explains how we handle personal information collected through our website, phone, email, and booking system, in line with the Australian Privacy Principles under the Privacy Act 1988 (Cth)."
        sections={[
          {
            heading: '1. Information we collect',
            paragraphs: [
              'We collect information you give us directly — including when you request a quote, make a booking, or contact us. This typically includes:',
            ],
            list: [
              'Your name, phone number and email address',
              'Pickup and delivery addresses',
              'Details about your move (items, dates, special requirements)',
              'Payment information when you book a service',
              'Any other information you choose to provide',
            ],
          },
          {
            heading: '2. How we use your information',
            paragraphs: [
              'We use your personal information to:',
            ],
            list: [
              'Provide accurate quotes and confirm bookings',
              'Send you booking confirmations and updates',
              'Coordinate the move with our crew',
              'Process payments and issue receipts',
              'Reply to enquiries and provide customer support',
              'Improve our services based on feedback',
            ],
          },
          {
            heading: '3. Who we share information with',
            paragraphs: [
              'We do not sell your personal information. We share it only when necessary to deliver our service:',
            ],
            list: [
              'Our movers and dispatch team, to coordinate your move',
              'Payment processors, to handle transactions securely',
              'Third-party service providers (e.g. email, booking systems) under confidentiality agreements',
              'Government or law enforcement bodies, when legally required',
            ],
          },
          {
            heading: '4. Cookies and website tracking',
            paragraphs: [
              'Our website uses cookies and similar technologies to analyse traffic and improve user experience. See our Cookies Policy for full details. You can disable cookies in your browser settings at any time.',
            ],
          },
          {
            heading: '5. Data security',
            paragraphs: [
              'We take reasonable steps to protect your information from misuse, loss, unauthorised access, modification or disclosure. This includes encrypted connections (HTTPS), restricted access to customer data, and secure third-party providers.',
              'No system is 100% secure. If a data breach occurs that is likely to result in serious harm, we will notify affected individuals and the Office of the Australian Information Commissioner (OAIC) as required.',
            ],
          },
          {
            heading: '6. Accessing or correcting your information',
            paragraphs: [
              'You have the right to access the personal information we hold about you, and to request corrections if it is inaccurate. Contact us at way2026@ezzygoremovalist.com.au and we will respond within a reasonable timeframe.',
            ],
          },
          {
            heading: '7. Data retention',
            paragraphs: [
              'We keep your information only as long as needed to provide our services, comply with legal obligations (such as tax records), or resolve disputes. Booking records are typically kept for 7 years.',
            ],
          },
          {
            heading: '8. Changes to this policy',
            paragraphs: [
              'We may update this policy from time to time. The "Last updated" date at the top reflects the latest revision. Major changes will be communicated through the website.',
            ],
          },
          {
            heading: '9. Complaints',
            paragraphs: [
              'If you believe we have breached your privacy, please contact us first at way2026@ezzygoremovalist.com.au. If you are not satisfied with our response, you can lodge a complaint with the Office of the Australian Information Commissioner at oaic.gov.au.',
            ],
          },
        ]}
      />

      <Footer />
    </main>
  );
}