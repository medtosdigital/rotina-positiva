"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { HeartHandshake, Puzzle, ShieldCheck, Trophy } from 'lucide-react';

const benefitCards = [
    {
        icon: <ShieldCheck className="w-8 h-8 text-brand-orange" />,
        title: "Rotina Clara, Criança Segura",
    },
    {
        icon: <HeartHandshake className="w-8 h-8 text-brand-orange" />,
        title: "Cooperação sem Conflito",
    },
    {
        icon: <Trophy className="w-8 h-8 text-brand-orange" />,
        title: "Autonomia e Responsabilidade",
    },
    {
        icon: <Puzzle className="w-8 h-8 text-brand-orange" />,
        title: "Menos Estresse para os Pais",
    }
]

const Hero = () => {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-main');

  return (
    <section className="relative w-full bg-brand-green-water overflow-hidden pt-20 pb-12">
      <div
        className="absolute inset-x-0 top-0 h-full bg-brand-gold"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
        }}
      ></div>

      <div className="relative container mx-auto px-6">
        <div className="grid lg:grid-cols-2 items-center gap-12 w-full">
            <div className="text-brand-dark-blue z-10 text-center lg:text-left">
              <h1 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter max-w-4xl">
                Faça seu filho{' '}
                <span className="inline-block bg-brand-dark-blue text-white px-2 py-1 rounded-full my-1 transform -rotate-3">
                    OBEDECER
                </span>{' '}
                sem brigar, sem gritar e sem ameaças —{' '}
                <span className="inline-block bg-brand-dark-blue text-white px-2 py-1 rounded-full mt-1 transform rotate-2">
                    em apenas 24 horas.
                </span>
              </h1>
              <p className="font-body text-lg md:text-xl mt-6 mb-8 text-brand-dark-blue/90">
                Com o sistema visual que transforma disciplina em um jogo divertido.
              </p>
                <div className="grid grid-cols-2 gap-4">
                    {benefitCards.map((card) => (
                        <div key={card.title} className="bg-white/30 backdrop-blur-sm border-2 border-white/50 rounded-2xl shadow-lg text-center p-4 flex flex-col items-center justify-center transform hover:scale-110 transition-transform duration-300">
                            <div className="mb-3">
                                {card.icon}
                            </div>
                            <h3 className="font-subtitle text-sm font-bold text-brand-dark-blue leading-tight">{card.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
            <div className="relative mt-8 lg:mt-0 h-auto flex flex-col items-center">
              {heroImage && (
                <div className="animate-bounce-subtle">
                  <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    width={800}
                    height={600}
                    data-ai-hint={heroImage.imageHint}
                    className="object-contain w-full h-full rounded-2xl shadow-2xl"
                    priority
                  />
                </div>
              )}
               <div className="mt-10 z-10 w-full flex justify-center">
                    <Button
                      size="lg"
                      className="font-headline bg-brand-orange hover:bg-brand-orange/90 text-white text-lg md:text-xl font-bold py-5 px-8 md:py-6 md:px-10 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 w-full max-w-md lg:max-w-xl animate-pulse"
                    >
                      QUERO O ROTINA MÁGICA AGORA
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
