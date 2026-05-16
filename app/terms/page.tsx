import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import LegalContent from '@/components/LegalContent';

export const metadata: Metadata = {
  title: 'Terms of Service | EzzyGo Removalist',
  description:
    'The terms and conditions for using EzzyGo Removalist services and website.',
};

export default function TermsPage() {
  return (
    <main className="relative" style={{ background: '#F5F4F1' }}>
      <Navbar />

      <PageHero
        eyebrow="Legal"
        headline="Terms of"
        italic="service."
        subtitle="The terms and conditions that apply when you book a removalist service with us or use the EzzyGo Removalist website."
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Terms of Service' },
        ]}
      />

      <LegalContent
        lastUpdated="15 May 2026"
        intro="These Terms of Service govern the relationship between you (the customer) and EzzyGo Removalist (we, us, our) when you engage us for moving, packing, transport or storage services. By booking a service or using this website, you agree to these terms."
        sections={[
          {
            heading: '1. Quotes and bookings',
            paragraphs: [
              'Quotes are estimates based on the information you provide. Hourly-rate jobs are charged for the actual time taken, including travel where applicable. Fixed-price quotes are honoured when the job matches the original description.',
              'Bookings are confirmed once you receive a confirmation message from us. You may need to provide a deposit for larger bookings.',
            ],
          },
          {
            heading: '2. Cancellations and rescheduling',
            paragraphs: [
              'You may reschedule or cancel a booking up to 24 hours before the start time at no charge. Cancellations within 24 hours of the booking may incur a cancellation fee equal to one hour at the agreed hourly rate.',
              'If we need to reschedule due to circumstances on our end (e.g. truck breakdown, illness), no fees apply and we will work with you to find a new time.',
            ],
          },
          {
            heading: '3. Payment',
            paragraphs: [
              'Payment is due on the day of the move, unless other arrangements have been made in writing. We accept bank transfer, card payment, and cash. GST is included in all quoted prices.',
              'Late payment may incur a 2% monthly interest charge and reasonable recovery costs.',
            ],
          },
          {
            heading: '4. Your obligations',
            paragraphs: [
              'To help your move go smoothly, you agree to:',
            ],
            list: [
              'Provide accurate information about items, access, and addresses',
              'Have items packed and ready unless you have booked a packing service',
              'Be present (or have an authorised representative present) for pickup and delivery',
              'Ensure clear and safe access to both properties, including parking',
              'Notify us in advance of stairs, heavy items, or restricted access',
            ],
          },
          {
            heading: '5. Items we won\'t move',
            paragraphs: [
              'For safety and legal reasons, we cannot move:',
            ],
            list: [
              'Flammable, explosive, or hazardous materials',
              'Firearms, ammunition, or illegal substances',
              'Live animals or perishable food',
              'Cash, jewellery, important documents, or irreplaceable items (you should carry these yourself)',
            ],
          },
          {
            heading: '6. Insurance and liability',
            paragraphs: [
              'We hold public liability and goods-in-transit insurance. Our liability for damage to your goods is limited to the cover provided under our policy and the laws of Queensland.',
              'We are not liable for: items packed by the customer, pre-existing damage, items not declared, damage caused by your instructions (e.g. requesting we carry an item we advised against), or events outside our reasonable control (extreme weather, road closures, etc.).',
              'Any claim for damage must be reported in writing within 7 days of the move.',
            ],
          },
          {
            heading: '7. Delays',
            paragraphs: [
              'We make every effort to arrive on time. If we are running late we will notify you as soon as possible. We are not liable for any consequential loss (e.g. settlement delays, lift booking penalties) caused by traffic, weather, or other factors outside our control.',
            ],
          },
          {
            heading: '8. Website use',
            paragraphs: [
              'Information on this website is provided in good faith but may contain errors. Pricing is indicative only and final quotes will be confirmed in writing. We may update or change content at any time.',
            ],
          },
          {
            heading: '9. Governing law',
            paragraphs: [
              'These terms are governed by the laws of Queensland, Australia. Any dispute will be resolved in the courts of Queensland.',
            ],
          },
          {
            heading: '10. Changes to these terms',
            paragraphs: [
              'We may update these terms from time to time. The "Last updated" date at the top reflects the latest revision. Continued use of our services means you accept the updated terms.',
            ],
          },
        ]}
      />

      <Footer />
    </main>
  );
}