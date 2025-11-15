import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
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

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
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
    </section>
  );
};

export default ProductShowcase;
