"use client";

import { Button } from '@/components/ui/button';
import { ShieldCheck, Flame, AlertTriangle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { BuyButton } from './BuyButton';

const Offer = () => {
  return (
    <section id="offer" className="py-20 lg:py-24 bg-brand-gold">
      <div className="container mx-auto px-4 sm:px-6">
        <Card className="max-w-xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-brand-gold">
          <div className="bg-brand-turquoise text-white text-center py-3">
            <p className="font-headline font-bold text-base sm:text-lg tracking-wide flex items-center justify-center gap-2 animate-pulse-slow">
              <Flame className="w-5 h-5" />
              <span>OFERTA DE URGÊNCIA</span>
              <Flame className="w-5 h-5" />
            </p>
          </div>
          <CardContent className="p-6 sm:p-10 text-center">

            <div className="flex justify-center items-center gap-2 text-brand-orange mb-4">
              <AlertTriangle className="w-5 h-5 animate-wiggle" />
              <p className="font-headline font-bold text-sm sm:text-base">A JANELA DE OPORTUNIDADE ESTÁ FECHANDO</p>
            </div>

            <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-brand-dark-blue !leading-tight mb-3">
              Quanto vale o futuro do seu filho?
            </h2>
            <p className="font-body text-base md:text-lg text-brand-dark-blue/70 max-w-md mx-auto mb-8">
              Acesso vitalício e imediato ao Protocolo Rotina Positiva completo + todos os bônus para blindar o futuro dele.
            </p>
            
            <div className="bg-gray-50 rounded-2xl p-4 sm:p-6 mb-8 border">
                <p className="font-body text-gray-500 text-xs sm:text-sm">Investimento normal</p>
                <p className="font-headline text-xl sm:text-2xl font-bold text-gray-400 line-through decoration-2 mb-2">R$ 147,00</p>
                
                <p className="font-headline font-bold text-brand-turquoise text-base sm:text-lg uppercase">Sua decisão hoje</p>
                
                <div className="flex justify-center items-baseline font-headline font-bold text-brand-turquoise !leading-none gap-1 sm:gap-2">
                    <span className="text-xl sm:text-2xl md:text-3xl">12x de</span>
                    <div className="flex items-baseline">
                        <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold">R$</span>
                        <span className="text-4xl sm:text-6xl md:text-7xl font-extrabold">3,60</span>
                    </div>
                </div>

                <p className="font-body text-gray-500 text-xs sm:text-sm mt-1">ou R$37,00 à vista (menos que um lanche)</p>
            </div>
            
            <BuyButton
                className="font-headline bg-[#2ECC71] hover:bg-[#2ECC71]/90 text-white font-bold py-4 px-4 sm:py-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 w-full h-auto animate-glow"
              >
                <div className="flex flex-col items-center text-center leading-tight">
                  <span className="text-xs sm:text-sm font-normal uppercase">Sim, eu me importo com o futuro dele(a)</span>
                  <span className="text-base sm:text-lg md:text-xl uppercase">QUERO GARANTIR O FUTURO DO MEU FILHO</span>
                  <span className="text-xs sm:text-sm font-normal opacity-90 mt-1">Acesso imediato. Risco zero.</span>
                </div>
            </BuyButton>
            
            <div className="flex items-center justify-center gap-3 mt-8 text-gray-600">
                <ShieldCheck className="w-8 h-8 text-green-500 flex-shrink-0" />
                <div className="text-left">
                    <p className="font-subtitle font-bold text-sm">Garantia Incondicional de 7 Dias</p>
                    <p className="text-xs font-body">Se não for a melhor decisão para sua família, você recebe todo o dinheiro de volta.</p>
                </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Offer;
