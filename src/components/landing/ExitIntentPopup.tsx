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
import { ScrollArea } from '@/components/ui/scroll-area';

const ExitIntentPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showPopup = useCallback(() => {
    // Apenas mostra o pop-up se ele ainda não foi exibido nesta sessão.
    if (sessionStorage.getItem('exitPopupShown') !== 'true') {
      setIsOpen(true);
      sessionStorage.setItem('exitPopupShown', 'true');
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };
  
  useEffect(() => {
    // --- Gatilho de Saída para Desktop (Mouse) ---
    const handleMouseLeave = (e: MouseEvent) => {
      // Se o mouse sair pela parte de cima da janela, aciona o popup.
      if (e.clientY <= 0) {
        showPopup();
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);

    // --- Gatilho de Saída para Mobile (Mudança de Visibilidade) ---
    const handleVisibilityChange = () => {
      // Se a página ficar oculta (usuário trocou de aba ou clicou em voltar), aciona o popup.
      if (document.visibilityState === 'hidden') {
        showPopup();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // --- Limpeza dos eventos ---
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [showPopup]);


  const afterImages = [
    PlaceHolderImages.find(img => img.id === 'after-routine-1'),
    PlaceHolderImages.find(img => img.id === 'after-routine-2'),
    PlaceHolderImages.find(img => img.id === 'after-routine-3'),
  ].filter(Boolean);


  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogContent className="bg-white p-0 rounded-2xl shadow-2xl max-w-lg w-[90vw] border-4 border-brand-orange grid grid-rows-[auto_1fr_auto] max-h-[90vh]">
        <AlertDialogHeader className="text-center p-4 sm:p-6 pb-2">
          <AlertDialogTitle className="font-headline text-xl sm:text-3xl md:text-4xl font-bold text-brand-dark-blue mb-1">
            Espere! Antes de ir...
          </AlertDialogTitle>
          <AlertDialogDescription className="font-body text-sm sm:text-base md:text-lg text-brand-dark-blue/80">
            Percebi que você está de saída. Que tal uma <span className="font-bold text-brand-orange">OFERTA EXCLUSIVA</span> para transformar a rotina do seu filho?
          </AlertDialogDescription>
        </AlertDialogHeader>
        
        <ScrollArea className="overflow-y-auto px-4 sm:px-6">
          <div className="my-4">
            <div className="mb-4 grid grid-cols-3 gap-2">
               {afterImages.map((image, index) => (
                    image && (
                      <Image 
                        key={index}
                        src={image.imageUrl} 
                        alt={image.description} 
                        width={200} 
                        height={120} 
                        data-ai-hint={image.imageHint} 
                        className="rounded-md shadow-md w-full h-16 sm:h-20 object-cover" 
                      />
                    )
                  ))}
            </div>

            <div className="bg-gray-50 rounded-2xl p-4 text-center border">
              <p className="font-headline font-bold text-brand-dark-blue text-base sm:text-lg uppercase">Kit Completo + Bônus por um preço que não vai se repetir!</p>
              <div className="flex justify-center items-center gap-2 sm:gap-4 my-1 sm:my-2">
                  <p className="font-headline text-lg sm:text-2xl font-bold text-gray-400 line-through">R$37,00</p>
                  <p className="font-headline text-3xl sm:text-5xl font-extrabold text-brand-turquoise">R$27</p>
              </div>
              <p className="font-body text-gray-500 text-xs sm:text-sm">Pagamento único, acesso vitalício.</p>
            </div>
          </div>
        </ScrollArea>

        <AlertDialogFooter className="flex-col sm:flex-col sm:space-x-0 gap-2 p-4 sm:p-6 pt-2 border-t bg-white">
            <a href="https://pay.kiwify.com.br/KbApxZm" className="w-full">
                <Button className="font-headline bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 w-full h-auto animate-glow">
                    <div className="flex flex-col items-center leading-tight">
                        <span className="text-sm sm:text-base uppercase font-bold">SIM, EU QUERO O DESCONTO!</span>
                        <span className="text-xs sm:text-sm font-normal">Garantir acesso por apenas R$27</span>
                    </div>
                </Button>
            </a>
            <Button variant="link" onClick={handleClose} className="text-gray-500 text-xs sm:text-sm h-auto p-1">
                 Não, obrigado. Quero perder a oferta.
            </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ExitIntentPopup;
