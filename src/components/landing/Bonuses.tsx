import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const bonuses = [
  { id: 'bonus-cooperacao', title: 'Jogo da Cooperação', price: 'R$79,90', description: '30 desafios para fortalecer o vínculo entre pais e filhos.' },
  { id: 'bonus-tdah', title: 'Kit para Crianças com TDAH', price: 'R$109,87', description: 'Rotina visual adaptada para necessidades especiais. Essencial!' },
  { id: 'bonus-emocoes', title: 'Painel de Emoções', price: 'R$47', description: 'Ajude seu filho a identificar e nomear as emoções.' },
  { id: 'bonus-regras', title: 'Cartazes \'Regras da Casa\'', price: 'R$57', description: 'Versões coloridas e clean para combinar com sua decoração.' },
];

const Bonuses = () => {
  const imageMap = new Map(PlaceHolderImages.map(img => [img.id, img]));
  const totalValue = bonuses.reduce((acc, bonus) => {
    const price = parseFloat(bonus.price.replace('R$', '').replace(',', '.'));
    return acc + price;
  }, 0);

  return (
    <section className="pt-10 pb-20 lg:pt-16 lg:pb-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-brand-dark-blue mb-4">
            E de presente 🎁, você ainda leva <span className="text-brand-orange underline decoration-wavy">4 BÔNUS ESPECIAIS E GRÁTIS:</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
          {bonuses.map((bonus) => {
            const image = imageMap.get(bonus.id);
            return (
              <Card key={bonus.id} className="bg-white rounded-2xl shadow-xl overflow-hidden group transform hover:scale-105 transition-transform duration-300 flex flex-col">
                <CardHeader className="p-0 relative">
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={bonus.title}
                      width={400}
                      height={400}
                      data-ai-hint={image.imageHint}
                      className="w-full h-32 md:h-48 object-cover"
                    />
                  )}
                   <div className="absolute top-2 right-2 bg-brand-gold text-brand-dark-blue text-xs font-bold px-3 py-1 rounded-full -rotate-12">RECEBA GRÁTIS</div>
                </CardHeader>
                <CardContent className="p-4 md:p-6 text-center flex-grow flex flex-col justify-between">
                  <div>
                    <CardTitle className="font-subtitle text-lg md:text-xl font-bold text-brand-dark-blue">{bonus.title}</CardTitle>
                    <p className="font-body text-gray-500 line-through">{bonus.price}</p>
                  </div>
                  <p className="font-body text-gray-700 mt-2 text-sm">{bonus.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center max-w-2xl mx-auto">
            <Card className="bg-gradient-to-br from-brand-turquoise to-brand-green-water text-white p-8 rounded-2xl shadow-2xl">
                <p className="font-body text-lg md:text-xl mb-2">
                    Somando todos os bônus, você levaria <span className="font-bold line-through">R$ {totalValue.toFixed(2).replace('.',',')}</span>.
                </p>
                <p className="font-headline text-2xl md:text-3xl font-bold">
                    Mas, ao garantir seu kit <span className="underline decoration-wavy">HOJE</span>, você recebe tudo isso <span className="bg-brand-gold text-brand-dark-blue px-2 py-1 rounded-md">DE GRAÇA!</span>
                </p>
            </Card>
        </div>

      </div>
    </section>
  );
};

export default Bonuses;
