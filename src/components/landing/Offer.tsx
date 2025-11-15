"use client";

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ShieldCheck, Zap, Package, Clock } from 'lucide-react';

const seals = [
  { icon: <ShieldCheck className="w-6 h-6 mr-2" />, text: 'Garantia 7 dias' },
  { icon: <Zap className="w-6 h-6 mr-2" />, text: 'Acesso imediato' },
  { icon: <Package className="w-6 h-6 mr-2" />, text: 'Produto digital' },
];

const CountdownTimer = () => {
    const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 29, seconds: 59 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime.seconds > 0) {
                    return { ...prevTime, seconds: prevTime.seconds - 1 };
                }
                if (prevTime.minutes > 0) {
                    return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
                }
                if (prevTime.hours > 0) {
                    return { hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
                }
                return prevTime;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatTime = (time: number) => time.toString().padStart(2, '0');

    return (
        <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 md:px-6 md:py-3 flex items-center justify-center gap-2 md:gap-4 my-8">
            <Clock className="w-6 h-6 md:w-8 md:h-8 text-brand-gold" />
            <div>
                <p className="text-xs md:text-sm font-light uppercase tracking-wider">Esta oferta termina em:</p>
                <p className="text-xl md:text-2xl font-bold tracking-widest">
                    {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
                </p>
            </div>
        </div>
    );
}

const Offer = () => {
  return (
    <section className="py-20 lg:py-24 bg-brand-dark-blue text-white">
      <div className="container mx-auto px-6 text-center">
        <p className="text-lg md:text-2xl mb-2 text-gray-300">OFERTA ESPECIAL DE LANÇAMENTO</p>
        <h2 className="text-4xl md:text-6xl font-black !leading-tight mb-4">
          <span className="text-red-400 line-through decoration-2">De R$ 147</span> por apenas <span className="text-brand-gold">R$ 27 HOJE</span>.
        </h2>
        <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto">Acesso vitalício a todo o sistema e futuras atualizações. Sem mensalidades.</p>
        
        <CountdownTimer />
        
        <Button
          size="lg"
          className="bg-brand-orange hover:bg-brand-orange/90 text-primary-foreground text-lg md:text-2xl font-bold py-6 px-8 md:py-8 md:px-16 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 animate-pulse w-full max-w-md"
        >
          QUERO ACESSAR AGORA POR R$27
        </Button>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 mt-8">
          {seals.map((seal, index) => (
            <div key={index} className="flex items-center text-gray-300 text-sm md:text-base">
              {seal.icon}
              <span className="font-medium">{seal.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;
