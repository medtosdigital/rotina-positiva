"use client";

import { Button } from '@/components/ui/button';
import { ShieldCheck, ArrowRight, Flame } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Offer = () => {
  return (
    <section className="py-20 lg:py-24 bg-brand-gold">
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
              Acesso imediato ao Kit Rotina Mágica completo + todos os 10 bônus.
            </p>
            
            <div className="bg-gray-50 rounded-2xl p-6 mb-8 border">
                <p className="font-body text-gray-500 text-sm">Preço normal</p>
                <p className="font-headline text-2xl font-bold text-gray-400 line-through decoration-2 mb-2">R$ 147,00</p>
                
                <p className="font-headline font-bold text-brand-turquoise text-lg uppercase">OFERTA ESPECIAL HOJE</p>
                <p className="font-headline font-bold text-brand-turquoise !leading-none">
                    <span className="text-2xl align-middle">12x </span>
                    <span className="text-7xl font-extrabold">R$ 2,25</span>
                </p>
                <p className="font-body text-gray-500 text-sm">ou R$27,00 à vista</p>
            </div>

            <Button
              size="lg"
              className="font-headline bg-brand-turquoise hover:bg-brand-turquoise/90 text-white text-lg md:text-2xl font-bold py-6 px-8 md:py-8 md:px-16 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 w-full"
            >
              QUERO MEU FILHO OBEDECENDO!
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
            
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
