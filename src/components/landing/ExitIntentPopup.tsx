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
  const [isFirstMount, setIsFirstMount] = useState(true);

  const showPopup = useCallback(() => {
    if (!isOpen) {
      setIsOpen(true);
      history.pushState({ popup: 'open' }, ''); // Push a state when popup opens
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    // If the user closes the popup, we can go back to the state before it was opened
    if (history.state && history.state.popup === 'open') {
      history.back();
    }
  };

  useEffect(() => {
    // --- Desktop: Mouse leave ---
    const handleMouseLeave = (event: MouseEvent) => {
      // Trigger if mouse leaves the top part of the viewport
      if (event.clientY <= 0) {
        showPopup();
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    
    // --- Mobile & Desktop: Back button / History navigation ---
    const handlePopState = (event: PopStateEvent) => {
      // When the user navigates back and the popup is not open, show it.
      if (!isOpen) {
        showPopup();
      } else if (isOpen) {
        // If the popup is open and they navigate back, it means they are trying to bypass it. Close it.
        setIsOpen(false);
      }
    };

    // On first mount, push a "base" state.
    if(isFirstMount) {
        history.pushState(null, '');
        setIsFirstMount(false);
    }
    
    window.addEventListener('popstate', handlePopState);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isOpen, showPopup, isFirstMount]);

  const afterImages = [
    PlaceHolderImages.find(img => img.id === 'after-routine-1'),
    PlaceHolderImages.find(img => img.id === 'after-routine-2'),
    PlaceHolderImages.find(img => img.id === 'after-routine-3'),
  ].filter(Boolean);


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
          <div className="mb-4 sm:mb-6 grid grid-cols-3 gap-2">
             {afterImages.map((image, index) => (
                  image && (
                    <Image 
                      key={index}
                      src={image.imageUrl} 
                      alt={image.description} 
                      width={200} 
                      height={200} 
                      data-ai-hint={image.imageHint} 
                      className="rounded-md shadow-md w-full h-auto object-cover" 
                    />
                  )
                ))}
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
