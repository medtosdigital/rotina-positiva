import { useEffect, useState } from 'react';
import PromoBanner from '@/components/landing/PromoBanner';
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
import OfferPageContent from '@/components/landing/ExitIntentPopup';
import { Dialog, DialogContent } from '@/components/ui/dialog';

const EXIT_DISCOUNT_SHOWN_KEY = 'exit_discount_shown_v1';

export default function LandingSections() {
  const [exitOpen, setExitOpen] = useState(false);

  useEffect(() => {
    // Prevent showing repeatedly in the same session.
    if (sessionStorage.getItem(EXIT_DISCOUNT_SHOWN_KEY) === '1') return;

    const showOnce = () => {
      if (sessionStorage.getItem(EXIT_DISCOUNT_SHOWN_KEY) === '1') return;
      sessionStorage.setItem(EXIT_DISCOUNT_SHOWN_KEY, '1');
      setExitOpen(true);
      window.removeEventListener('popstate', onPopState);
      document.removeEventListener('mouseleave', onMouseLeave);
    };

    const onMouseLeave = (e: MouseEvent) => {
      // Desktop exit-intent (cursor leaves top of viewport)
      if (e.clientY <= 0) showOnce();
    };

    const onPopState = () => {
      // Back-button intent. We re-push state to keep the user here and open the modal.
      showOnce();
      window.history.pushState({ exitDiscount: true }, '', window.location.href);
    };

    // Arm back-button trap once
    window.history.pushState({ exitDiscount: true }, '', window.location.href);

    document.addEventListener('mouseleave', onMouseLeave);
    window.addEventListener('popstate', onPopState);

    return () => {
      document.removeEventListener('mouseleave', onMouseLeave);
      window.removeEventListener('popstate', onPopState);
    };
  }, []);

  return (
    <>
      <PromoBanner />
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

      <Dialog open={exitOpen} onOpenChange={setExitOpen}>
        <DialogContent className="border-0 bg-transparent p-0 shadow-none">
          <OfferPageContent onDecline={() => setExitOpen(false)} />
        </DialogContent>
      </Dialog>
    </>
  );
}
