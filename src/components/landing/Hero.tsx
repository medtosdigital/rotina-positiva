"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Award, BrainCircuit, Users, Star } from 'lucide-react';
import Script from 'next/script';
import { Button } from '@/components/ui/button';

declare global {
  interface Window {
    scrollToTarget: (targetId: string) => void;
  }
}

const Hero = () => {
  const testimonial = PlaceHolderImages.find(img => img.id === 'final-cta-testimonial');

  const handleScroll = () => {
    if (window.scrollToTarget) {
      window.scrollToTarget('product-showcase');
    }
  };

  return (
    <>
      <Script src="https://fast.wistia.com/player.js" async />
      <section className="relative w-full bg-white">
        <div className="relative container mx-auto px-6 pt-12 pb-10">
          <div className="flex flex-col items-center gap-10 w-full">
            
            <div className="text-brand-dark-blue text-center max-w-4xl">
               <h1 className="font-headline text-2xl md:text-3xl font-extrabold tracking-tighter !leading-tight">
                Faça seu filho <span className="inline-block bg-primary text-white px-3 py-1 rounded-lg">OBEDECER</span> sem brigar, <br className="hidden sm:block" />sem gritar e sem ameaças — <br />
                <span className="inline-block bg-primary text-white px-3 py-1 rounded-lg mt-2">com Rotina e Disciplina.</span>
              </h1>
              <p className="font-body text-base md:text-lg mt-6 mb-8 text-brand-dark-blue/90 max-w-3xl mx-auto">
                O sistema visual que transforma disciplina em um jogo que a criança AMA. Adequado para crianças de 2 a 12 anos.
              </p>
            </div>

            <div className="relative mt-0 flex justify-center items-center w-full max-w-sm">
              <div className="w-full mx-auto p-2 rounded-2xl bg-brand-gold shadow-2xl animate-glow">
                  <div 
                    className="rounded-xl overflow-hidden w-full aspect-[9/16]"
                  >
                    <div 
                      className="wistia_embed wistia_async_c3m3h47fz2 videoFoam=true" 
                      style={{ height: '100%', position: 'relative', width: '100%' }}
                    >
                      <div 
                        className="wistia_swatch" 
                        style={{ height: '100%', left: 0, opacity: 0, overflow: 'hidden', position: 'absolute', top: 0, transition: 'opacity 200ms', width: '100%' }}
                      >
                        <img 
                          src="https://fast.wistia.com/embed/medias/c3m3h47fz2/swatch" 
                          style={{ filter: 'blur(5px)', height: '100%', objectFit: 'contain', width: '100%' }} 
                          alt="" 
                          aria-hidden="true" 
                          
                          onLoad={(e) => {
                            const target = e.target as HTMLImageElement;
                            if (target.parentElement) {
                                target.parentElement.style.opacity = '1';
                            }
                          }}
                        />
                      </div>
                    </div>
                  </div>
              </div>
            </div>

             <div className="flex flex-col items-center gap-6 mt-8">
                <div className="mb-6 flex justify-center lg:justify-start">
                  <div className="bg-gray-100/80 backdrop-blur-sm border border-gray-200/50 rounded-xl p-4 flex items-center gap-4 max-w-sm md:max-w-md shadow-lg">
                    {testimonial && (
                        <Image
                            src={testimonial.imageUrl}
                            alt={testimonial.description}
                            width={80}
                            height={80}
                            data-ai-hint={testimonial.imageHint}
                            className="rounded-full object-cover border-2 border-white w-12 h-12"
                        />
                    )}
                    <div className="text-left font-body">
                        <p className="text-xs sm:text-sm italic text-brand-dark-blue">"O futuro da minha filha começa agora. Melhor investimento que fiz. Funcionou no primeiro dia!"</p>
                        <div className="flex text-yellow-400 mt-1">
                            {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                        </div>
                    </div>
                  </div>
                </div>

                <Button
                    onClick={handleScroll}
                    className="font-headline bg-brand-turquoise hover:bg-brand-turquoise/90 text-white font-bold py-6 px-6 sm:py-7 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 w-full max-w-md h-auto animate-pulse-slow"
                >
                    <div className="flex flex-col items-center">
                        <span className="text-base sm:text-lg md:text-xl">QUERO MEU FILHO OBEDIENTE AGORA</span>
                        <span className="text-xs font-normal">Garantir meu kit e a paz na minha casa</span>
                    </div>
                </Button>

                <div className="bg-gray-50/80 backdrop-blur border border-gray-200/60 rounded-xl p-4 shadow-lg max-w-md w-full">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-brand-dark-blue/80 flex-shrink-0" />
                      <span className="font-subtitle text-sm sm:text-base font-semibold text-brand-dark-blue/90">Recomendado por Psicólogos</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <BrainCircuit className="w-5 h-5 text-brand-dark-blue/80 flex-shrink-0" />
                      <span className="font-subtitle text-sm sm:text-base font-semibold text-brand-dark-blue/90">Validado por Pedagogos</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-brand-dark-blue/80 flex-shrink-0 mt-1" />
                      <span className="font-subtitle text-sm sm:text-base font-semibold text-brand-dark-blue/90">+42 mil pais já transformaram suas casas</span>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
      <Script src="https://fast.wistia.com/assets/external/E-v1.js" async />
    </>
  );
};

export default Hero;
