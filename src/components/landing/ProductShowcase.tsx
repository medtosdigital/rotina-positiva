import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle2 } from 'lucide-react';

const ProductShowcase = () => {
  const mockupFull = PlaceHolderImages.find((img) => img.id === 'product-mockup-full');
  const carouselImages = PlaceHolderImages.filter((img) => img.id.startsWith('carousel-'));
  const features = [
    "Transforme tarefas em missões divertidas.",
    "Crie cooperação sem estresse.",
    "Ensine responsabilidade e organização.",
    "Ganhe mais tempo livre e paz de espírito."
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark-blue mb-4">
            Conheça o <span className="text-brand-turquoise">ROTINA MÁGICA</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            O método baseado em jogo visual que faz seu filho cooperar por vontade própria.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            {mockupFull && (
              <Image
                src={mockupFull.imageUrl}
                alt={mockupFull.description}
                width={1200}
                height={800}
                data-ai-hint={mockupFull.imageHint}
                className="rounded-2xl shadow-2xl w-full"
              />
            )}
          </div>
          <div className="lg:col-span-2">
            <Carousel className="w-full max-w-md mx-auto">
              <CarouselContent>
                {carouselImages.map((image) => (
                  <CarouselItem key={image.id}>
                    <Card className="overflow-hidden rounded-2xl shadow-lg">
                      <CardContent className="p-0">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          width={600}
                          height={400}
                          data-ai-hint={image.imageHint}
                          className="w-full h-auto object-cover"
                        />
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="ml-12" />
              <CarouselNext className="mr-12" />
            </Carousel>
            <ul className="mt-8 space-y-3 text-lg">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle2 className="h-6 w-6 text-brand-green-water mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
