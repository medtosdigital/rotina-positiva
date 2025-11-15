import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle2 } from 'lucide-react';

const ProductShowcase = () => {
  const mockupFull = PlaceHolderImages.find((img) => img.id === 'product-mockup-full');
  const carouselImages = [
    PlaceHolderImages.find((img) => img.id === 'carousel-planner'),
    PlaceHolderImages.find((img) => img.id === 'carousel-board'),
    PlaceHolderImages.find((img) => img.id === 'carousel-cards')
  ].filter(img => img !== undefined) as any[];

  const features = [
    "Transforme tarefas chatas em missões divertidas.",
    "Crie uma cultura de cooperação sem estresse.",
    "Ensine responsabilidade e organização desde cedo.",
    "Ganhe mais tempo livre e paz de espírito para você."
  ];

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-brand-dark-blue mb-4">
            Apresentando o <span className="text-brand-turquoise">ROTINA MÁGICA</span>
          </h2>
          <p className="font-body text-lg md:text-xl text-gray-600">
            A arma secreta para pais que querem filhos obedientes, responsáveis e felizes.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-3">
            {mockupFull && (
              <Image
                src={mockupFull.imageUrl}
                alt={mockupFull.description}
                width={1200}
                height={800}
                data-ai-hint={mockupFull.imageHint}
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            )}
          </div>
          <div className="lg:col-span-2">
            <Carousel className="w-full max-w-sm md:max-w-md mx-auto">
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
              <CarouselPrevious className="-ml-4 md:ml-12" />
              <CarouselNext className="-mr-4 md:mr-12" />
            </Carousel>
            <ul className="mt-8 space-y-3 text-base md:text-lg">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle2 className="h-6 w-6 text-brand-green-water mr-3 flex-shrink-0" />
                  <span className="font-body text-gray-700">{feature}</span>
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
