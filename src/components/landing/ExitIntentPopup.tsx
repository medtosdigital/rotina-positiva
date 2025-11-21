'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showPopup = useCallback(() => {
    // Only show if not already shown to prevent loops.
    // The isOpen state handles this.
    if (!isOpen) {
      setIsOpen(true);
    }
  }, [isOpen]);

  useEffect(() => {
    // --- Desktop: Mouse leave ---
    const handleMouseLeave = (event: MouseEvent) => {
      if (event.clientY <= 0 || event.clientX <= 0 || (event.clientX >= window.innerWidth || event.clientY >= window.innerHeight)) {
        showPopup();
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    
    // --- Mobile & Desktop: Back button / History navigation ---
    // Push a new state to the history when the component mounts.
    history.pushState(null, '');

    const handlePopState = (event: PopStateEvent) => {
      // When the user clicks "back", this event is fired.
      // We show the popup instead of letting them go back.
      showPopup();
      // We push the state again so if they try to go back *again*, it's captured.
      history.pushState(null, '');
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [showPopup]);

  const handleClose = () => {
    setIsOpen(false);
  }

  const exitImage = PlaceHolderImages.find(img => img.id === 'exit-popup-real-kids');

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className="bg-white p-4 sm:p-8 rounded-2xl shadow-2xl max-w-lg border-4 border-brand-orange">
        <AlertDialogHeader className="text-center">
          <AlertDialogTitle className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark-blue mb-2">
            Espere! Antes de ir...
          </AlertDialogTitle>
          <AlertDialogDescription className="font-body text-base md:text-lg text-brand-dark-blue/80">
            Percebi que você está de saída. Que tal uma <span className="font-bold text-brand-orange">OFERTA EXCLUSIVA</span> para transformar a rotina do seu filho?
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="my-4 sm:my-6">
          <div className="mb-4 sm:mb-6">
            {exitImage && (
                <Image
                    src={exitImage.imageUrl}
                    alt={exitImage.description}
                    width={400}
                    height={300}
                    data-ai-hint={exitImage.imageHint}
                    className="rounded-xl shadow-md w-full h-auto object-cover"
                />
            )}
          </div>

          <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 text-center border">
            <p className="font-headline font-bold text-brand-dark-blue text-base sm:text-lg uppercase">Kit Completo + Bônus por um preço que não vai se repetir!</p>
            <div className="flex justify-center items-center gap-2 sm:gap-4 my-2">
                <p className="font-headline text-xl sm:text-2xl font-bold text-gray-400 line-through">R$37,00</p>
                <p className="font-headline text-4xl sm:text-5xl font-extrabold text-brand-turquoise">R$27</p>
            </div>
            <p className="font-body text-gray-500 text-xs sm:text-sm">Pagamento único, acesso vitalício.</p>
          </div>
        </div>

        <AlertDialogFooter className="flex-col sm:flex-col sm:space-x-0 gap-2">
            <a href="https://pay.kiwify.com.br/KbApxZm" className="w-full">
                <Button className="font-headline bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 sm:py-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 w-full h-auto animate-glow">
                    <div className="flex flex-col items-center leading-tight">
                        <span className="text-sm sm:text-base md:text-lg uppercase font-bold">SIM, EU QUERO O DESCONTO!</span>
                        <span className="text-xs sm:text-sm font-normal">Garantir acesso por apenas R$27</span>
                    </div>
                </Button>
            </a>
            <Button variant="link" onClick={handleClose} className="text-gray-500 text-sm">
                 Não, obrigado. Quero perder a oferta.
            </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ExitIntentPopup;
