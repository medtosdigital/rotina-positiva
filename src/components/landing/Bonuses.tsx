import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Gift } from 'lucide-react';

const bonuses = [
  { id: 'bonus-anti-gritos', title: 'Guia Anti-Gritos' },
  { id: 'bonus-sono', title: 'Planner do Sono' },
  { id: 'bonus-emocoes', title: 'Painel das Emoções' },
  { id: 'bonus-tdah', title: 'Kit TDAH' },
];

const Bonuses = () => {
  const imageMap = new Map(PlaceHolderImages.map(img => [img.id, img]));

  return (
    <section className="py-20 lg:py-32 bg-brand-gold">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-dark-blue mb-4">
            Presentes especiais que deixam tudo <span className="text-brand-orange underline decoration-wavy">AINDA mais fácil</span>.
          </h2>
          <p className="text-lg md:text-xl text-brand-dark-blue/80">Ao garantir seu acesso hoje, você também leva de presente:</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bonuses.map((bonus) => {
            const image = imageMap.get(bonus.id);
            return (
              <Card key={bonus.id} className="bg-white rounded-2xl shadow-xl overflow-hidden group transform hover:scale-105 transition-transform duration-300">
                <CardHeader className="p-0 relative">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={bonus.title}
                      width={400}
                      height={400}
                      data-ai-hint={image.imageHint}
                      className="w-full h-56 object-cover"
                    />
                  )}
                   <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full -rotate-12">BÔNUS</div>
                </CardHeader>
                <CardContent className="p-6 text-center">
                  <CardTitle className="text-xl font-bold text-brand-dark-blue">{bonus.title}</CardTitle>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Bonuses;
