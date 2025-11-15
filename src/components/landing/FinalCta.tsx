import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star } from 'lucide-react';

const FinalCta = () => {
  const mockup = PlaceHolderImages.find(img => img.id === 'final-cta-mockup');
  const testimonial = PlaceHolderImages.find(img => img.id === 'final-cta-testimonial');

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

          <h2 className="text-3xl md:text-6xl font-extrabold !leading-tight mb-8">
            Você está a 1 clique de transformar a rotina do seu filho.
          </h2>

          <Button
            size="lg"
            className="bg-white hover:bg-gray-100 text-brand-orange text-lg md:text-2xl font-bold py-6 px-8 md:py-8 md:px-16 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 animate-pulse w-full max-w-md"
          >
            SIM! EU QUERO TRANSFORMAR MINHA CASA!
          </Button>

          <div className="mt-12 flex justify-center items-center">
             <div className="bg-white/20 rounded-xl p-4 flex items-center gap-4 max-w-sm md:max-w-md shadow-lg">
                {testimonial && (
                    <Image
                        src={testimonial.imageUrl}
                        alt={testimonial.description}
                        width={80}
                        height={80}
                        data-ai-hint={testimonial.imageHint}
                        className="rounded-full object-cover border-2 border-white w-16 h-16 md:w-20 md:h-20"
                    />
                )}
                <div className="text-left">
                    <p className="text-xs sm:text-sm italic">"Melhor investimento que fiz pela paz da minha família. Funcionou no primeiro dia!"</p>
                    <div className="flex text-yellow-300 mt-1">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
