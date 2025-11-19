"use client"

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star, MessageCircle } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const testimonials = [
  {
    id: 'testimonial-1',
    name: 'Juliana S.',
    username: '@juh.santana',
    text: 'A paz voltou a reinar em casa! Meu filho agora faz tudo sozinho e ainda pede pra usar o quadro. É simplesmente mágico!',
  },
  {
    id: 'testimonial-2',
    name: 'Fernanda L.',
    username: '@fe.lima.maedetres',
    text: 'Estava exausta de tanto gritar. Em dois dias, a mudança foi da água para o vinho. Ele se sente o máximo marcando as estrelinhas.',
  },
  {
    id: 'testimonial-3',
    name: 'Carla M.',
    username: '@carlamendes.mom',
    text: 'Comprei sem acreditar muito, mas... uau! O jantar e a hora de dormir viraram nossos melhores momentos. Recomendo para TODAS as mães.',
  },
  {
    id: 'testimonial-4',
    name: 'Mariana P.',
    username: '@maripereira.kids',
    text: 'Minha filha amou os cartões. Agora ela mesma organiza as tarefas e ajuda em casa para ganhar mais moedas. Inacreditável!',
  },
  {
    id: 'testimonial-5',
    name: 'Roberta A.',
    username: '@ro.almeida',
    text: 'O melhor investimento que fiz pela minha família. A rotina agora é leve e divertida. Obrigada por essa solução!',
  },
  {
    id: 'testimonial-6',
    name: 'Patricia F.',
    username: '@paty.familia',
    text: 'Se eu soubesse que existia, tinha comprado antes. Acabaram as birras na hora de desligar a TV. Simplesmente funciona.',
  },
  {
    id: 'testimonial-7',
    name: 'Ana B.',
    username: '@anaborges.maededois',
    text: 'Funciona até com meu filho mais velho, de 9 anos. Ele agora ajuda o irmão menor a completar as tarefas. Estou chocada!',
  },
  {
    id: 'testimonial-8',
    name: 'Sandra G.',
    username: '@sandrinha.gomes',
    text: 'Achei que era só mais um produto da internet, mas me surpreendi. A qualidade do material é ótima e a mudança de comportamento é real.',
  },
];

const StarRating = () => (
    <div className="flex text-yellow-400">
        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
    </div>
);

const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => {
  const imageMap = new Map(PlaceHolderImages.map(img => [img.id, img]));
  const image = imageMap.get(testimonial.id);
  
  return (
    <Card className="bg-white rounded-2xl shadow-lg flex flex-col h-full">
      <CardContent className="p-6 flex-grow flex flex-col">
        <div className="flex items-center mb-4">
          {image && (
            <Image
              src={image.imageUrl}
              alt={testimonial.name}
              width={100}
              height={100}
              data-ai-hint={image.imageHint}
              className="w-14 h-14 rounded-full mr-4 object-cover border-2 border-brand-gold"
            />
          )}
          <div>
            <p className="font-subtitle font-bold text-lg text-gray-800">{testimonial.name}</p>
            <p className="font-body text-sm text-gray-400">{testimonial.username}</p>
          </div>
        </div>
        <div className="relative font-body text-gray-600 flex-grow bg-gray-50 p-4 rounded-xl border">
          <MessageCircle className="absolute top-[-10px] left-4 w-6 h-6 text-gray-50 fill-current stroke-current" />
          <p>"{testimonial.text}"</p>
        </div>
         <div className="mt-4">
           <StarRating />
         </div>
      </CardContent>
    </Card>
  );
};


const Testimonials = () => {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-brand-dark-blue mb-4">
            Não acredite em nós... <span className="text-brand-turquoise">Acredite nelas!</span>
          </h2>
          <p className="font-body text-lg md:text-xl text-brand-dark-blue/80">Mães reais que transformaram suas casas com os Quadros de Rotina Positiva.</p>
        </div>
        
        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel 
            className="w-full max-w-xs mx-auto"
            plugins={[Autoplay({ delay: 3000, stopOnInteraction: true })]}
            opts={{ loop: true }}
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id}>
                  <div className="p-1">
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-[-10px]"/>
            <CarouselNext className="right-[-10px]" />
          </Carousel>
        </div>
        
        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
