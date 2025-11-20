"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { HeartHandshake, Puzzle, ShieldCheck, Trophy, Star, Award, BrainCircuit, Users, Facebook, Instagram } from 'lucide-react';
import { BuyButton } from './BuyButton';

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

const authorityItems = [
    { icon: <Award className="w-6 h-6 text-brand-dark-blue/80" />, text: "Recomendado por Psicólogos" },
    { icon: <BrainCircuit className="w-6 h-6 text-brand-dark-blue/80" />, text: "Aprovado por Pedagogos" },
    { icon: <Users className="w-6 h-6 text-brand-dark-blue/80" />, text: "+42 mil famílias já usam" },
]

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2859 3333" {...props} shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd">
        <path d="M2081 0c55 473 319 755 778 785v532c-266 26-499-61-770-225v995c0 1264-1378 1659-1932 753-356-583-138-1606 1004-1647v561c-87 14-180 36-265 65-254 86-398 247-358 531 77 544 1075 705 992-358V1h551z"/>
    </svg>
);

const Hero = () => {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-main');
  const testimonial = PlaceHolderImages.find(img => img.id === 'final-cta-testimonial');

  return (
    <section className="relative w-full bg-brand-green-water overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-full bg-brand-gold"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
        }}
      ></div>

      <div className="relative container mx-auto px-6 pt-12 pb-12">
        <div className="grid lg:grid-cols-2 items-center gap-8 md:gap-12 w-full">
            <div className="text-brand-dark-blue z-10 text-center lg:text-left order-2 lg:order-1">
              <div className="mb-6 flex justify-center lg:justify-start">
                <div className="bg-white/30 backdrop-blur-sm border border-white/50 rounded-xl p-4 flex items-center gap-4 max-w-sm md:max-w-md shadow-lg text-white">
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
                       <p className="text-xs sm:text-sm italic text-brand-dark-blue">"Melhor investimento que fiz pela paz da minha família. Funcionou no primeiro dia!"</p>
                       <div className="flex text-yellow-400 mt-1">
                           {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                       </div>
                   </div>
                </div>
             </div>

              <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tighter">
                Faça seu filho{' '}
                <span className="inline-block bg-primary text-white px-4 rounded-lg -rotate-1">
                    OBEDECER
                </span>{' '}
                sem brigar, sem gritar e sem ameaças —{' '}
                <span className="inline-block bg-primary text-white px-4 rounded-lg rotate-1">
                    com Rotina e Disciplina.
                </span>
              </h1>
              <p className="font-body text-lg md:text-xl mt-6 mb-8 text-brand-dark-blue/90 max-w-xl mx-auto lg:mx-0">
                Com o sistema visual que transforma disciplina em um jogo divertido.
              </p>

              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0 mb-8">
                  {benefitCards.map((card) => (
                      <div key={card.title} className="bg-white/30 backdrop-blur-sm border-2 border-white/50 rounded-2xl shadow-lg text-center p-4 flex flex-col items-center justify-center transform hover:scale-110 transition-transform duration-300">
                          <div className="mb-3">
                              {card.icon}
                          </div>
                          <h3 className="font-subtitle text-sm font-bold text-brand-dark-blue leading-tight">{card.title}</h3>
                      </div>
                  ))}
              </div>

              <div className="my-8">
                <div className="bg-white/80 backdrop-blur border border-white/60 rounded-xl p-4 shadow-lg max-w-md mx-auto lg:mx-0">
                  <div className="flex flex-col gap-4">
                    {authorityItems.map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        {item.icon}
                        <span className="font-subtitle text-sm sm:text-base font-semibold text-brand-dark-blue/90">{item.text}</span>
                      </div>
                    ))}
                    <div className="flex flex-col gap-3">
                        <p className='font-subtitle text-sm sm:text-base font-semibold text-brand-dark-blue/90'>Destaque na Mídia:</p>
                        <div className="flex flex-wrap items-center gap-4 text-brand-dark-blue/70">
                            <Facebook className="w-8 h-8"/>
                            <Instagram className="w-8 h-8"/>
                            <TikTokIcon className="w-7 h-7 fill-current"/>
                        </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="relative mt-8 lg:mt-0 h-auto flex flex-col items-center order-1 lg:order-2 lg:col-span-1 w-full max-w-3xl mx-auto">
              {heroImage && (
                <div className="animate-bounce-subtle">
                  <Image
                    src={heroImage.imageUrl}
                    alt={heroImage.description}
                    width={1200}
                    height={900}
                    data-ai-hint={heroImage.imageHint}
                    className="object-contain w-full h-full"
                    priority
                  />
                </div>
              )}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
