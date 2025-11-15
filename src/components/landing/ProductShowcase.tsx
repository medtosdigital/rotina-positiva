
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle2, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  const imageMap = new Map(PlaceHolderImages.map(img => [img.id, img]));
  const headerImage = PlaceHolderImages.find(img => img.id === 'product-showcase-header');

  const features = [
    "Transforme tarefas chatas em missões divertidas.",
    "Crie uma cultura de cooperação sem estresse.",
    "Ensine responsabilidade e organização desde cedo.",
    "Ganhe mais tempo livre e paz de espírito para você."
  ];

  return (
    <section id="product-showcase" className="pt-20 lg:pt-32 pb-12 lg:pb-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          {headerImage && (
            <Image
              src={headerImage.imageUrl}
              alt={headerImage.description}
              width={150}
              height={150}
              data-ai-hint={headerImage.imageHint}
              className="mx-auto mb-6"
            />
          )}
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-brand-dark-blue mb-4">
            Apresentando o <span className="text-brand-turquoise">ROTINA MÁGICA</span>
          </h2>
          <p className="font-body text-lg md:text-xl text-gray-600">
            A arma secreta para pais que querem filhos obedientes, responsáveis e felizes.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="mt-8">
              <h3 className="font-headline text-2xl font-bold text-brand-dark-blue mb-4 text-center">O que vem no kit?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {showcaseItems.map((item) => {
                  const image = imageMap.get(item.id);
                  return (
                    <Card key={item.id} className="bg-gray-50 rounded-xl overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 shadow-lg">
                      {image && (
                        <Image
                          src={image.imageUrl}
                          alt={item.title}
                          width={400}
                          height={300}
                          data-ai-hint={image.imageHint}
                          className="w-full h-48 object-cover"
                        />
                      )}
                      <CardContent className="p-4">
                        <h4 className="font-subtitle text-lg font-bold mb-1 text-brand-dark-blue">{item.title}</h4>
                        <p className="font-body text-gray-600 text-sm">{item.benefit}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            <div className="self-center">
                <ul className="mt-8 space-y-4 text-lg md:text-xl">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                    <CheckCircle2 className="h-7 w-7 text-brand-green-water mr-4 mt-1 flex-shrink-0" />
                    <span className="font-body text-gray-700">{feature}</span>
                    </li>
                ))}
                </ul>
            </div>
        </div>
        <div className="mt-16 text-center">
            <a href="#offer">
                <Button
                    size="lg"
                    className="font-headline bg-brand-turquoise hover:bg-brand-turquoise/90 text-white text-xl md:text-2xl font-bold py-8 px-10 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 h-auto animate-pulse-slow"
                >
                    <div className="flex flex-col items-center">
                        <span>QUERO APROVEITAR A OFERTA</span>
                        <span className="text-sm font-normal">Garantir meu kit com desconto</span>
                    </div>
                </Button>
            </a>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;

    