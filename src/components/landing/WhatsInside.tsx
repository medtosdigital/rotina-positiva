import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const items = [
  { id: 'whats-inside-morning', title: 'Quadro da Manhã', benefit: 'Comece o dia sem caos.' },
  { id: 'whats-inside-afternoon', title: 'Quadro da Tarde', benefit: 'Rotina de estudos e brincadeiras.' },
  { id: 'whats-inside-night', title: 'Quadro da Noite', benefit: 'Prepare para um sono tranquilo.' },
  { id: 'whats-inside-rewards', title: 'Painel de Recompensas', benefit: 'Motive com prêmios desejados.' },
  { id: 'whats-inside-study', title: 'Painel de Estudos', benefit: 'Foco total na hora da lição.' },
  { id: 'whats-inside-reading', title: 'Painel de Leitura', benefit: 'Incentive o amor pelos livros.' },
  { id: 'whats-inside-cards', title: 'Cartões Mágicos', benefit: 'Para tarefas extras e surpresas.' },
  { id: 'whats-inside-coins', title: 'Moedas e Estrelas', benefit: 'O dinheiro do mundo da magia.' },
];

const WhatsInside = () => {
  const imageMap = new Map(PlaceHolderImages.map(img => [img.id, img]));

  return (
    <section className="py-20 lg:py-32 bg-brand-orange text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-black mb-4">
            Toda a rotina da sua casa organizada como um <span className="underline decoration-wavy decoration-white">JOGO</span>.
          </h2>
          <p className="text-lg md:text-xl text-white/80">Um kit completo e personalizável para imprimir e montar.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => {
            const image = imageMap.get(item.id);
            return (
              <Card key={item.id} className="bg-white/20 border-2 border-white/50 rounded-2xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
                <CardContent className="p-0">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      width={500}
                      height={500}
                      data-ai-hint={image.imageHint}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  )}
                  <div className="p-6">
                    <h3 className="font-headline text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-white/80">{item.benefit}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatsInside;
