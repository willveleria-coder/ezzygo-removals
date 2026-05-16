import Navbar from '@/components/Navbar';
import HomepageFAQ from '@/components/HomepageFAQ';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import QuoteCalculator from '@/components/QuoteCalculator';
import Pricing from '@/components/Pricing';
import HomepageMap from '@/components/HomepageMap';
import About from '@/components/About';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <QuoteCalculator />
      <Pricing />
      <About />
      <HomepageMap />
      <HomepageFAQ />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}
