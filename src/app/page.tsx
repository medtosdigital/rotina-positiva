import Hero from '@/components/landing/Hero';
import PainPoints from '@/components/landing/PainPoints';
import UniqueMechanism from '@/components/landing/UniqueMechanism';
import ProductShowcase from '@/components/landing/ProductShowcase';
import BeforeAfter from '@/components/landing/BeforeAfter';
import CreatorStory from '@/components/landing/CreatorStory';
import Benefits from '@/components/landing/Benefits';
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
        <BeforeAfter />
        <CreatorStory />
        <Benefits />
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

    