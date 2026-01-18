"use client";

import { Award, BrainCircuit, Users, Star } from 'lucide-react';
import Script from 'next/script';
import { Button } from '@/components/ui/button';
const Hero = () => {
  const handleScroll = () => {
    window.scrollToTarget?.('offer');
  };
  return (
    <>
      <Script src="https://fast.wistia.com/player.js" strategy="afterInteractive" />
      <Script src="https://fast.wistia.com/assets/external/E-v1.js" strategy="afterInteractive" />
      <section className="relative w-full bg-white">
        <div className="relative container mx-auto px-4 pt-10 pb-8 sm:pt-12 sm:pb-10">
          <div className="flex flex-col items-center gap-6 w-full">
            
            <div className="text-brand-dark-blue text-center max-w-4xl">
               <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tighter !leading-tight">
                Faça seu filho <span className="inline-block bg-primary text-white px-2 sm:px-3 py-1 rounded-lg">OBEDECER</span> sem brigar, <br className="hidden sm:block" />sem gritar e sem ameaças — <br />
                <span className="inline-block bg-primary text-white px-2 sm:px-3 py-1 rounded-lg mt-2 text-2xl sm:text-3xl md:text-4xl">com Rotina e Disciplina.</span>
              </h1>
              <p className="font-body text-sm sm:text-base md:text-lg mt-4 mb-6 text-brand-dark-blue/90 max-w-3xl mx-auto">
                Com o sistema visual que transforma disciplina em um jogo divertido. Adequado para crianças de 2 a 12 anos.
              </p>
            </div>
            
            <p className="font-body text-xs sm:text-sm text-center text-brand-dark-blue/90 -mt-2">
              Assista ao vídeo abaixo e veja como funciona:
            </p>

            <div className="relative mt-0 flex justify-center items-center w-full max-w-sm">
              <div className="w-full mx-auto p-2 rounded-2xl bg-brand-gold shadow-2xl animate-glow">
                <div className="rounded-xl overflow-hidden w-full aspect-[9/16] relative">
                  <div className="wistia_embed wistia_async_c3m3h47fz2 videoFoam=true" style={{
                  height: '100%',
                  position: 'relative',
                  width: '100%'
                }}>&nbsp;</div>
                </div>
              </div>
            </div>

             <div className="flex flex-col items-center gap-4 mt-4 w-full">
                <div className="mb-2 flex justify-center w-full">
                  <div className="bg-gray-100/80 backdrop-blur-sm border border-gray-200/50 rounded-xl p-3 flex items-center gap-3 w-full max-w-sm shadow-lg">
                    <div className="text-left font-body flex-1">
                        <p className="text-[11px] sm:text-xs italic text-brand-dark-blue">"O futuro da minha filha começa agora. Melhor investimento que fiz. Funcionou no primeiro dia!" Por: Juliana Castelo.</p>
                        <div className="flex text-yellow-400 mt-1">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-current" />)}
                        </div>
                    </div>
                  </div>
                </div>

                <Button onClick={handleScroll} className="font-headline bg-brand-turquoise hover:bg-brand-turquoise/90 text-white font-bold py-4 px-4 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 w-full max-w-md h-auto animate-pulse-slow">
                    <div className="flex flex-col items-center leading-tight">
                        <span className="text-base sm:text-lg">QUERO MEU FILHO OBEDIENTE AGORA</span>
                        <span className="text-[10px] sm:text-xs font-normal opacity-90">Garantir meu kit e a paz na minha casa</span>
                    </div>
                </Button>

                <div className="bg-gray-50/80 backdrop-blur border border-gray-200/60 rounded-xl p-3 sm:p-4 shadow-lg max-w-md w-full">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-brand-dark-blue/80 flex-shrink-0" />
                      <span className="font-subtitle text-xs sm:text-sm font-semibold text-brand-dark-blue/90">Recomendado por Psicólogos e Terapeutas</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <BrainCircuit className="w-5 h-5 text-brand-dark-blue/80 flex-shrink-0" />
                      <span className="font-subtitle text-xs sm:text-sm font-semibold text-brand-dark-blue/90">Validado pelo Método Montessori</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-brand-dark-blue/80 flex-shrink-0 mt-0.5" />
                      <span className="font-subtitle text-xs sm:text-sm font-semibold text-brand-dark-blue/90">+ de 42 mil mães já aprovaram</span>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;