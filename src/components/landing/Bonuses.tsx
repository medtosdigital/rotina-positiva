import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const bonuses = [
  { id: 'bonus-anti-gritos', title: 'Guia Anti-Gritos' },
  { id: 'bonus-sono', title: 'Planner do Sono' },
  { id: 'bonus-emocoes', title: 'Painel das Emoções' },
  { id: 'bonus-tdah', title: 'Kit TDAH' },
];

const Bonuses = () => {
  const imageMap = new Map(PlaceHolderImages.map(img => [img.id, img]));

  return (
    <section className="pt-10 pb-20 lg:pt-16 lg:pb-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-headline text-4xl md:text-5xl font-extrabold text-brand-dark-blue mb-4">
            E de presente, você ainda leva <span className="text-brand-orange underline decoration-wavy">4 BÔNUS ESPECIAIS:</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                   <div className="absolute top-2 right-2 bg-brand-gold text-brand-dark-blue text-xs font-bold px-3 py-1 rounded-full -rotate-12">BÔNUS</div>
                </CardHeader>
                <CardContent className="p-6 text-center">
                  <CardTitle className="font-headline text-2xl font-bold text-brand-dark-blue">{bonus.title}</CardTitle>
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
