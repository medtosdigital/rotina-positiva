"use client"

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star, PlayCircle } from 'lucide-react';
import Autoplay from "embla-carousel-autoplay";
import React from 'react';

const testimonials = [
  {
    id: 'testimonial-1',
    name: 'Juliana S.',
    text: '"A paz voltou a reinar em casa! Meu filho agora faz tudo sozinho e ainda pede pra usar o quadro. Mágico mesmo!"',
    isAudio: true,
  },
  {
    id: 'testimonial-2',
    name: 'Fernanda L.',
    text: '"Estava exausta de tanto gritar. Em dois dias, a mudança foi da água para o vinho. Ele se sente o máximo marcando as estrelinhas."',
    isAudio: false,
  },
  {
    id: 'testimonial-3',
    name: 'Carla M.',
    text: '"Comprei sem acreditar muito, mas... uau! O jantar e a hora de dormir viraram nossos melhores momentos. Recomendo pra TODAS as mães."',
    isAudio: true,
  },
  {
    id: 'testimonial-4',
    name: 'Mariana P.',
    text: '"Minha filha amou os cartões mágicos. Agora ela ajuda nas tarefas de casa pra ganhar mais moedas. Inacreditável!"',
    isAudio: false,
  },
  {
    id: 'testimonial-5',
    name: 'Roberta A.',
    text: '"O melhor investimento que fiz pela minha família. A rotina agora é leve e divertida. Obrigada!"',
    isAudio: true,
  },
  {
    id: 'testimonial-6',
    name: 'Patricia F.',
    text: '"Se eu soubesse que existia, tinha comprado antes. Acabaram as birras na hora de desligar a TV. Simplesmente funciona."',
    isAudio: false,
  }
];

const StarRating = () => (
    <div className="flex text-yellow-400">
        {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
    </div>
);

const Testimonials = () => {
  const imageMap = new Map(PlaceHolderImages.map(img => [img.id, img]));
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true })
  );

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-brand-dark-blue mb-4">
            Mães reais... <span className="text-brand-turquoise">resultados reais.</span>
          </h2>
          <p className="font-body text-lg md:text-xl text-brand-dark-blue/80">Veja o que elas estão dizendo:</p>
        </div>
        <Carousel 
          opts={{ loop: true, align: "start" }} 
          plugins={[plugin.current]}
          className="w-full max-w-sm md:max-w-6xl mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => {
              const image = imageMap.get(testimonial.id);
              return (
                <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 h-full">
                    <Card className="rounded-2xl shadow-lg h-full flex flex-col transform hover:scale-105 transition-transform duration-300 border-2 border-gray-100">
                      <CardContent className="p-6 flex-grow flex flex-col">
                        <div className="flex items-center mb-4">
                          {image && (
                            <Image
                              src={image.imageUrl}
                              alt={testimonial.name}
                              width={100}
                              height={100}
                              data-ai-hint={image.imageHint}
                              className="w-16 h-16 rounded-full mr-4 object-cover border-2 border-brand-gold"
                            />
                          )}
                          <div>
                            <p className="font-subtitle font-bold text-lg text-gray-800">{testimonial.name}</p>
                            <StarRating />
                          </div>
                        </div>
                        {testimonial.isAudio ? (
                           <div className="bg-green-100 rounded-lg p-3 flex items-center w-full cursor-pointer hover:bg-green-200 transition-colors">
                                <PlayCircle className="w-8 h-8 text-green-600 mr-3"/>
                                <div className="w-full bg-gray-300 rounded-full h-1.5">
                                    <div className="bg-green-500 h-1.5 rounded-full" style={{width: '75%'}}></div>
                                </div>
                                <span className="text-xs text-gray-500 ml-2">1:12</span>
                           </div>
                        ) : (
                           <p className="font-body text-gray-600 flex-grow">"{testimonial.text}"</p>
                        )}
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
