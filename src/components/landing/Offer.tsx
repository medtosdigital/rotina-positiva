"use client";

import { Button } from '@/components/ui/button';
import { ShieldCheck, Flame } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { BuyButton } from './BuyButton';

const Offer = () => {
  return (
    <section id="offer" className="py-20 lg:py-24 bg-brand-gold">
      <div className="container mx-auto px-4 sm:px-6">
        <Card className="max-w-xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-brand-gold">
          <div className="bg-brand-turquoise text-white text-center py-3">
            <p className="font-headline font-bold text-lg tracking-wide flex items-center justify-center gap-2">
              <Flame className="w-5 h-5" />
              <span>OFERTA POR TEMPO LIMITADO</span>
              <Flame className="w-5 h-5" />
            </p>
          </div>
          <CardContent className="p-6 sm:p-10 text-center">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-brand-dark-blue !leading-tight mb-3">
              Sua chance de ter paz em casa está aqui
            </h2>
            <p className="font-body text-base md:text-lg text-brand-dark-blue/70 max-w-md mx-auto mb-8">
              Acesso imediato ao Kit Rotina Positiva completo + todos os bônus.
            </p>
            
            <div className="bg-gray-50 rounded-2xl p-6 mb-8 border">
                <p className="font-body text-gray-500 text-sm">Preço normal</p>
                <p className="font-headline text-2xl font-bold text-gray-400 line-through decoration-2 mb-2">R$ 147,00</p>
                
                <p className="font-headline font-bold text-brand-turquoise text-lg uppercase">OFERTA ESPECIAL HOJE</p>
                
                <div className="flex justify-center items-end font-headline font-bold text-brand-turquoise !leading-none">
                    <span className="text-2xl self-start mr-1 mt-2">12x</span>
                    <span className="text-5xl font-extrabold">R$ 3,60</span>
                </div>

                <p className="font-body text-gray-500 text-sm">ou R$37,00 à vista</p>
            </div>
            
            <BuyButton
                className="font-headline bg-[#2ECC71] hover:bg-[#2ECC71]/90 text-white font-bold py-6 px-6 sm:py-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 w-full h-auto animate-pulse-slow"
              >
                <div className="flex flex-col items-center text-center">
                  <span className="text-xs sm:text-sm font-normal uppercase">Comprar agora com desconto</span>
                  <span className="text-base sm:text-xl md:text-2xl uppercase">QUERO MEU FILHO OBEDECENDO!</span>
                  <span className="text-xs sm:text-sm font-normal">Acesso vitalício e risco zero</span>
                </div>
            </BuyButton>
            
            <div className="flex items-center justify-center gap-3 mt-8 text-gray-600">
                <ShieldCheck className="w-8 h-8 text-green-500 flex-shrink-0" />
                <div className="text-left">
                    <p className="font-subtitle font-bold">Garantia Incondicional de 7 Dias</p>
                    <p className="text-sm font-body">Seu risco é zero. Se não amar, peça seu dinheiro de volta.</p>
                </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Offer;
