'use client';

import { ScrollArea } from '@/components/ui/scroll-area';
import { BuyButton } from './BuyButton';
import { useEffect, useState } from 'react';

type OfferPageContentProps = {
  /** Called when user clicks the decline link. */
  onDecline?: () => void;
};

const OfferPageContent = ({ onDecline }: OfferPageContentProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="bg-white p-0 rounded-2xl shadow-2xl max-w-lg w-[95vw] sm:w-full mx-auto border-4 border-brand-orange grid grid-rows-[auto_1fr_auto] max-h-[90vh]">
      <div className="text-center p-4 sm:p-6 pb-2">
        <h1 className="font-headline text-xl sm:text-3xl md:text-4xl font-bold text-brand-dark-blue mb-2">
          Espera. Você está <span className="text-red-500 underline">desistindo</span> do futuro do seu filho?
        </h1>
        <p className="font-body text-sm sm:text-base md:text-lg text-brand-dark-blue/80 break-words overflow-hidden">
          R$50 reais <b className="text-red-600">adulto perdido, sem foco e sem sucesso</b>. Vai deixar isso acontecer por menos de{' '}
          <b className="text-brand-turquoise">R$50</b>?
        </p>
      </div>

      <ScrollArea className="overflow-y-auto px-4 sm:px-6">
        <div className="my-4">
          {/* cards de imagens removidos */}

          <div className="bg-gray-50 rounded-2xl p-4 text-center border">
            <p className="font-headline font-bold text-red-500 text-sm sm:text-base uppercase animate-pulse">OFERTA DE ÚLTIMA CHANCE</p>
            <p className="font-headline font-bold text-brand-dark-blue text-base sm:text-lg uppercase">A Ferramenta para Blindar o Futuro Dele(a)</p>
            <div className="flex justify-center items-center gap-2 sm:gap-4 my-1 sm:my-2">
              <p className="font-headline text-lg sm:text-2xl font-bold text-gray-400 line-through">R$147,00</p>
              <p className="font-headline text-3xl sm:text-5xl font-extrabold text-brand-turquoise">R$47,00</p>
            </div>
            <p className="font-body text-gray-500 text-xs sm:text-sm">
              Invista no caráter, foco e disciplina dele(a). <b className="uppercase">A decisão é AGORA.</b>
            </p>
          </div>
        </div>
      </ScrollArea>

      <div className="flex flex-col gap-2 p-4 sm:p-6 pt-2 border-t bg-white">
        <BuyButton
          href="https://acesso.ditadinhokids.com/pagamento/quadros-rotina/?coupon=Desconto10"
          className="font-headline bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 w-full h-auto animate-glow"
        >
          <div className="flex flex-col items-center leading-tight">
            <span className="text-sm sm:text-base uppercase font-bold">SIM, EU QUERO A OFERTA AGORA!</span>
            <span className="text-xs sm:text-sm font-normal">Garantir o futuro por apenas R$47</span>
          </div>
        </BuyButton>

        {isClient ? (
          <a
            href="https://acesso.ditadinhokids.com/pagamento/quadros-rotina/"
            className="text-gray-500 text-xs sm:text-sm h-auto p-1 text-center hover:underline"
            onClick={(e) => {
              if (!onDecline) return;
              e.preventDefault();
              onDecline();
            }}
          >
            Não, eu desisto. Assumo o risco do futuro dele(a).
          </a>
        ) : (
          <div className="h-6" />
        )}
      </div>
    </div>
  );
};

export default OfferPageContent;
