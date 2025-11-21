'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ScrollArea } from '@/components/ui/scroll-area';

const OfferPageContent = () => {
  const afterImages = PlaceHolderImages.filter(img => 
    ['after-routine-1', 'after-routine-2', 'after-routine-3'].includes(img.id)
  );

  return (
    <div className="bg-white p-0 rounded-2xl shadow-2xl max-w-lg w-[95vw] sm:w-full mx-auto border-4 border-brand-orange grid grid-rows-[auto_1fr_auto] max-h-[90vh]">
        <div className="text-center p-4 sm:p-6 pb-2">
          <h1 className="font-headline text-xl sm:text-3xl md:text-4xl font-bold text-brand-dark-blue mb-1">
            Espere! Antes de ir...
          </h1>
          <p className="font-body text-sm sm:text-base md:text-lg text-brand-dark-blue/80">
            Percebi que você está de saída. Que tal uma <span className="font-bold text-brand-orange">OFERTA EXCLUSIVA</span> para transformar a rotina do seu filho?
          </p>
        </div>
        
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
                  <p className="font-headline text-3xl sm:text-5xl font-extrabold text-brand-turquoise">R$27,90</p>
              </div>
              <p className="font-body text-gray-500 text-xs sm:text-sm">Pagamento único, acesso vitalício.</p>
            </div>
          </div>
        </ScrollArea>

        <div className="flex-col sm:flex-col sm:space-x-0 gap-2 p-4 sm:p-6 pt-2 border-t bg-white">
            <a href="https://pay.kiwify.com.br/KbApxZm" className="w-full">
                <Button className="font-headline bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 w-full h-auto animate-glow">
                    <div className="flex flex-col items-center leading-tight">
                        <span className="text-sm sm:text-base uppercase font-bold">SIM, EU QUERO O DESCONTO!</span>
                        <span className="text-xs sm:text-sm font-normal">Garantir acesso por apenas R$27,90</span>
                    </div>
                </Button>
            </a>
            <a href="https://pay.kiwify.com.br/KSInQjA" className="text-gray-500 text-xs sm:text-sm h-auto p-1 text-center hover:underline">
                 Não, obrigado. Quero perder a oferta e pagar mais caro.
            </a>
        </div>
    </div>
  );
};

export default OfferPageContent;
