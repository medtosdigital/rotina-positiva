import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star } from 'lucide-react';

const FinalCta = () => {
  const mockup = PlaceHolderImages.find(img => img.id === 'final-cta-mockup');

  return (
    <section className="pt-20 pb-20 lg:pt-24 lg:pb-24 bg-brand-orange text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {mockup && (
            <Image
              src={mockup.imageUrl}
              alt={mockup.description}
              width={300}
              height={300}
              data-ai-hint={mockup.imageHint}
              className="mx-auto mb-8 rounded-2xl shadow-2xl -mt-32 md:-mt-40 w-48 md:w-auto"
            />
          )}

          <h2 className="font-headline text-3xl md:text-6xl font-bold !leading-tight mb-8">
            Você está a 1 clique de transformar a rotina do seu filho.
          </h2>

          <Button
            size="lg"
            className="font-headline bg-white hover:bg-gray-100 text-brand-orange font-bold py-6 px-6 sm:py-8 sm:px-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 animate-pulse-slow w-full max-w-md h-auto"
          >
            <div className="flex flex-col items-center">
              <span className="text-base sm:text-xl md:text-2xl">SIM! EU QUERO TRANSFORMAR MINHA CASA!</span>
              <span className="text-xs sm:text-sm font-normal opacity-80">Comprar agora com desconto</span>
            </div>
          </Button>

          <div className="mt-12 flex justify-center items-center">
             <div className="bg-white/20 rounded-xl p-4 flex items-center gap-4 max-w-sm md:max-w-md shadow-lg">
                <div className="text-center font-body">
                    <p className="text-sm sm:text-base italic">"Melhor investimento que fiz pela paz da minha família. Funcionou no primeiro dia!" - <strong>Juliana S.</strong></p>
                    <div className="flex text-yellow-300 mt-1 justify-center">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                </div>
             </div>
          </div>
          <div className="mt-8 font-body text-sm">
            <p>Suporte: <a href="mailto:contato@ditadinhokids.com" className="underline hover:text-white/80">contato@ditadinhokids.com</a></p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
