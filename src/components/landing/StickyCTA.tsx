'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show CTA after user has scrolled past the hero section
      if (window.scrollY > window.innerHeight * 0.8) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 right-0 z-50 p-4 bg-black/70 backdrop-blur-sm transition-transform duration-500',
        isVisible ? 'translate-y-0' : 'translate-y-full'
      )}
      aria-hidden={!isVisible}
    >
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white font-bold text-lg text-center sm:text-left">
          OFERTA DE LANÇAMENTO: <span className="text-brand-gold">Acesso Vitalício por R$27!</span>
        </p>
        <Button
          size="lg"
          className="bg-brand-orange hover:bg-brand-orange/90 text-primary-foreground font-bold text-lg w-full sm:w-auto shadow-lg animate-pulse"
        >
          Quero o Rotina Mágica
        </Button>
      </div>
    </div>
  );
};

export default StickyCTA;
