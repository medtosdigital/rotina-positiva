"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ShieldCheck, Flame, AlertTriangle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { BuyButton } from './BuyButton';

const Offer = () => {
  const offerImage = PlaceHolderImages.find(img => img.id === 'hero-main');

  return (
    <section id="offer" className="py-16 sm:py-20 lg:py-24 bg-brand-gold">
      <div className="container mx-auto px-4">
        <Card className="max-w-xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border-4 sm:border-8 border-white">
          <div className="bg-brand-turquoise text-white text-center py-3 rounded-t-xl">
            <p className="font-headline font-bold text-sm sm:text-lg tracking-wide flex items-center justify-center gap-2 animate-pulse-slow">
              <Flame className="w-5 h-5" />
              <span>SOMENTE HOJE</span>
              <Flame className="w-5 h-5" />
            </p>
          </div>
          <CardContent className="p-4 sm:p-6 md:p-8 text-center">

            <div className="flex justify-center items-center gap-2 text-brand-orange mb-4">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 animate-wiggle" />
              <p className="font-headline font-bold text-xs sm:text-sm">A JANELA DE OPORTUNIDADE ESTÁ FECHANDO</p>
            </div>

            <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold text-brand-dark-blue !leading-tight mb-3">
              Quanto vale o futuro do seu filho(a)?
            </h2>
            <p className="font-body text-sm sm:text-base text-brand-dark-blue/70 max-w-md mx-auto mb-6">
              Acesso vitalício e imediato ao Protocolo Rotina Positiva completo + todos os bônus para blindar o futuro dele(a).
            </p>

            {offerImage && (
                <div className="relative mb-6">
                    <Image
                        src={offerImage.imageUrl}
                        alt={offerImage.description}
                        width={600}
                        height={400}
                        data-ai-hint={offerImage.imageHint}
                        className="rounded-lg shadow-lg w-full max-w-md mx-auto"
                    />
                </div>
            )}
            
            <div className="bg-gray-50 rounded-2xl p-4 sm:p-5 mb-6 border">
                <p className="font-body text-gray-500 text-[11px] sm:text-xs">Investimento normal</p>
                <p className="font-headline text-base sm:text-lg font-bold text-gray-400 line-through decoration-2 mb-2">R$ 147,00</p>
                
                <p className="font-headline font-bold text-brand-turquoise text-xs sm:text-sm uppercase">Sua decisão hoje</p>
                
                <div className="flex flex-wrap justify-center items-baseline font-headline font-bold text-brand-turquoise !leading-none gap-x-1 sm:gap-x-2">
                    <span className="text-base sm:text-xl">12x de</span>
                    <div className="flex items-baseline">
                        <span className="text-xl sm:text-2xl font-extrabold">R$</span>
                        <span className="text-4xl sm:text-5xl font-extrabold">3,60</span>
                    </div>
                </div>

                <p className="font-body text-gray-500 text-[11px] sm:text-xs mt-1">ou R$37,00 à vista (menos que um lanche)</p>
            </div>
            
            <BuyButton
              href="https://pay.kiwify.com.br/KSInQjA"
              className="font-headline bg-[#2ECC71] hover:bg-[#2ECC71]/90 text-white font-bold py-4 px-6 sm:px-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 w-full max-w-lg h-auto animate-glow"
            >
              <div className="flex flex-col items-center text-center leading-tight">
                <span className="text-[11px] sm:text-xs font-semibold uppercase">Sim, eu me importo com o futuro dele(a)</span>
                <span className="uppercase font-extrabold text-lg sm:text-2xl md:text-3xl">COMPRAR AGORA</span>
                <span className="text-[11px] sm:text-xs opacity-90 mt-1">Acesso imediato. Risco zero.</span>
              </div>
            </BuyButton>
            
            <div className="flex items-center justify-center gap-2 sm:gap-3 mt-4 sm:mt-6 text-gray-600">
                <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-green-500 flex-shrink-0" />
                <div className="text-left">
                    <p className="font-subtitle font-bold text-xs sm:text-sm">Garantia Incondicional de 7 Dias</p>
                    <p className="text-[11px] sm:text-xs font-body">Se não for a melhor decisão para sua família, você recebe todo o dinheiro de volta.</p>
                </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Offer;
