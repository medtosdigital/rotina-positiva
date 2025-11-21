'use client';

import { useState, useEffect } from 'react';
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

  useEffect(() => {
    const handleMouseLeave = (event: MouseEvent) => {
      // Check if mouse is leaving the top of the viewport
      if (event.clientY <= 0 && !sessionStorage.getItem('exitIntentShown')) {
        setIsOpen(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const exitImages = [
    PlaceHolderImages.find(img => img.id === 'exit-popup-1'),
    PlaceHolderImages.find(img => img.id === 'exit-popup-2'),
  ].filter(Boolean);

  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className="bg-white p-6 sm:p-8 rounded-2xl shadow-2xl max-w-lg border-4 border-brand-orange">
        <AlertDialogHeader className="text-center">
          <AlertDialogTitle className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark-blue mb-2">
            Espere! Antes de ir...
          </AlertDialogTitle>
          <AlertDialogDescription className="font-body text-base md:text-lg text-brand-dark-blue/80">
            Percebi que você está de saída. Que tal uma <span className="font-bold text-brand-orange">OFERTA EXCLUSIVA</span> para transformar a rotina do seu filho?
          </AlertDialogDescription>
        </AlertDialogHeader>

        <div className="my-4 sm:my-6">
          <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-6">
            {exitImages.map((image, index) => (
                image && (
                    <Image
                        key={index}
                        src={image.imageUrl}
                        alt={image.description}
                        width={300}
                        height={300}
                        data-ai-hint={image.imageHint}
                        className="rounded-xl shadow-md w-full h-auto object-cover"
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
                <Button className="font-headline bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-4 sm:py-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 w-full h-auto animate-glow">
                    <div className="flex flex-col items-center">
                    <span className="text-base sm:text-lg md:text-xl uppercase">SIM, EU QUERO O DESCONTO!</span>
                    <span className="text-xs sm:text-sm font-normal">Garantir acesso por apenas R$27</span>
                    </div>
                </Button>
            </a>
            <Button variant="link" onClick={() => setIsOpen(false)} className="text-gray-500 text-sm">
                 Não, obrigado. Quero perder a oferta.
            </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ExitIntentPopup;
