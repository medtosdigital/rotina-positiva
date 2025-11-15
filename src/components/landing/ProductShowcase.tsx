import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle2 } from 'lucide-react';

const showcaseItems = [
  { id: 'whats-inside-morning', title: 'Quadro da Manhã', benefit: 'Comece o dia sem caos.' },
  { id: 'whats-inside-afternoon', title: 'Quadro da Tarde', benefit: 'Rotina de estudos e brincadeiras.' },
  { id: 'whats-inside-night', title: 'Quadro da Noite', benefit: 'Prepare para um sono tranquilo.' },
  { id: 'whats-inside-rewards', title: 'Painel de Recompensas', benefit: 'Motive com prêmios desejados.' },
  { id: 'whats-inside-study', title: 'Painel de Estudos', benefit: 'Foco total na hora da lição.' },
  { id: 'whats-inside-reading', title: 'Painel de Leitura', benefit: 'Incentive o amor pelos livros.' },
  { id: 'whats-inside-cards', title: 'Cartões Mágicos', benefit: 'Para tarefas extras e surpresas.' },
  { id: 'whats-inside-coins', title: 'Moedas e Estrelas', benefit: 'O dinheiro do mundo da magia.' },
];

const ProductShowcase = () => {
  const mockupFull = PlaceHolderImages.find((img) => img.id === 'product-mockup-full');
  const carouselImages = [
    PlaceHolderImages.find((img) => img.id === 'carousel-planner'),
    PlaceHolderImages.find((img) => img.id === 'carousel-board'),
    PlaceHolderImages.find((img) => img.id === 'carousel-cards')
  ].filter(img => img !== undefined) as any[];
  const imageMap = new Map(PlaceHolderImages.map(img => [img.id, img]));

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

            <div className="mt-8">
              <h3 className="font-headline text-2xl font-bold text-brand-dark-blue mb-4 text-center">O que vem no kit?</h3>
              <div className="grid grid-cols-2 gap-4">
                {showcaseItems.map((item) => {
                  const image = imageMap.get(item.id);
                  return (
                    <Card key={item.id} className="bg-gray-50 rounded-lg overflow-hidden group transform hover:-translate-y-1 transition-transform duration-300">
                      <CardContent className="p-0">
                        {image && (
                          <Image
                            src={image.imageUrl}
                            alt={image.description}
                            width={200}
                            height={200}
                            data-ai-hint={image.imageHint}
                            className="w-full h-24 object-cover"
                          />
                        )}
                        <div className="p-3">
                          <h4 className="font-subtitle text-sm font-bold mb-1">{item.title}</h4>
                          <p className="font-body text-gray-600 text-xs">{item.benefit}</p>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

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
