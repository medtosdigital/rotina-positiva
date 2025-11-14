import Hero from '@/components/landing/Hero';
import PainPoints from '@/components/landing/PainPoints';
import UniqueMechanism from '@/components/landing/UniqueMechanism';
import ProductShowcase from '@/components/landing/ProductShowcase';
import WhatsInside from '@/components/landing/WhatsInside';
import BeforeAfter from '@/components/landing/BeforeAfter';
import Testimonials from '@/components/landing/Testimonials';
import Bonuses from '@/components/landing/Bonuses';
import Offer from '@/components/landing/Offer';
import Guarantee from '@/components/landing/Guarantee';
import Faq from '@/components/landing/Faq';
import FinalCta from '@/components/landing/FinalCta';

export default function Home() {
  return (
    <div className="bg-white overflow-x-hidden">
      <main>
        <Hero />
        <PainPoints />
        <UniqueMechanism />
        <ProductShowcase />
        <WhatsInside />
        <BeforeAfter />
        <Testimonials />
        <Bonuses />
        <Offer />
        <Guarantee />
        <Faq />
        <FinalCta />
      </main>
    </div>
  );
}
