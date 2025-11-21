"use client";

import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const painPoints = [
  {
    icon: '🗣️',
    text: 'Cansada de repetir tudo mil vezes?',
  },
  {
    icon: '🤯',
    text: 'Sua rotina é um caos',
  },
  {
    icon: '😠',
    text: 'Tudo vira uma briga',
  },
  {
    icon: '😔',
    text: 'Você se sente culpada por gritar',
  },
  {
    icon: '🙅‍♀️',
    text: 'Seu filho não coopera com nada',
  },
  {
    icon: '😡',
    text: 'Ele só obedece quando você perde a cabeça',
  },
];

declare global {
  interface Window {
    scrollToTarget: (targetId: string) => void;
  }
}

const PainPoints = () => {

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-brand-dark-blue mb-4">
            A vida de mãe parece uma <span className="bg-brand-gold px-2 rounded-lg">batalha diária?</span>
          </h2>
          <p className="font-body text-lg md:text-xl text-brand-dark-blue/80">
            Se você se identifica com alguma dessas situações, saiba que não está sozinha.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {painPoints.map((point, index) => (
            <Card
              key={index}
              className="bg-gray-50/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <CardContent className="flex flex-col items-center justify-center text-center p-4 md:p-6 h-full">
                <div className="text-4xl md:text-5xl mb-4 animate-wiggle" style={{ animationDelay: `${index * 100}ms` }}>{point.icon}</div>
                <p className="font-subtitle font-bold text-brand-dark-blue text-base md:text-lg">{point.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 md:mt-16 flex flex-col items-center justify-center">
            <Card className="bg-gradient-to-br from-white/90 to-white/60 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-xl max-w-lg p-6 md:p-8">
                <CardContent className="p-0 text-center">
                    <h3 className="font-headline text-3xl md:text-4xl font-bold text-brand-turquoise mb-2">Não é sua culpa.</h3>
                    <p className="font-body text-base md:text-lg text-brand-dark-blue/80 mb-6">Você só não tinha a ferramenta certa.</p>
                    <div className="space-y-4 text-left">
                        <div className="flex items-center bg-red-100/50 p-3 rounded-lg">
                            <XCircle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0" />
                            <span className="font-subtitle text-base md:text-lg font-semibold text-gray-700 line-through">Métodos tradicionais</span>
                        </div>
                        <div className="flex items-center bg-green-100/50 p-3 rounded-lg">
                            <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                            <span className="font-subtitle text-base md:text-lg font-bold text-brand-dark-blue">Quadros de Rotina Positiva</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <div className="mt-12 text-center">
                <Button
                    onClick={() => window.scrollToTarget('product-showcase')}
                    size="lg"
                    className="font-headline bg-brand-turquoise hover:bg-brand-turquoise/90 text-white font-bold py-6 px-6 sm:py-8 sm:px-10 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 h-auto animate-pulse-slow w-full max-w-md"
                >
                    <div className="flex flex-col items-center">
                        <span className="text-lg sm:text-xl md:text-2xl">EU QUERO A FERRAMENTA CERTA!</span>
                        <span className="text-xs sm:text-sm font-normal">Clique e veja como funciona</span>
                    </div>
                </Button>
            </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
