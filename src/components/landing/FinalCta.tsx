import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Star } from 'lucide-react';

const FinalCta = () => {
  const mockup = PlaceHolderImages.find(img => img.id === 'final-cta-mockup');
  const testimonial = PlaceHolderImages.find(img => img.id === 'final-cta-testimonial');

  return (
    <section className="py-20 lg:py-24 bg-brand-orange text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {mockup && (
            <Image
              src={mockup.imageUrl}
              alt={mockup.description}
              width={300}
              height={300}
              data-ai-hint={mockup.imageHint}
              className="mx-auto mb-8 rounded-2xl shadow-2xl -mt-40 object-cover"
            />
          )}

          <h2 className="text-4xl md:text-6xl font-extrabold !leading-tight mb-8">
            Transforme a rotina do seu filho ainda HOJE.
          </h2>

          <Button
            size="lg"
            className="bg-white hover:bg-gray-100 text-brand-orange text-xl md:text-2xl font-bold py-8 px-16 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            EU QUERO O ROTINA MÁGICA
          </Button>

          <div className="mt-12 flex justify-center items-center">
             <Card className="bg-white/20 rounded-xl p-4 flex items-center gap-4 max-w-md shadow-lg">
                {testimonial && (
                    <Image
                        src={testimonial.imageUrl}
                        alt={testimonial.description}
                        width={80}
                        height={80}
                        data-ai-hint={testimonial.imageHint}
                        className="rounded-full object-cover"
                    />
                )}
                <div className="text-left">
                    <p className="text-sm">"Melhor investimento que fiz pela minha família."</p>
                    <div className="flex text-yellow-300 mt-1">
                        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                </div>
             </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

// Dummy Card component to avoid import error if not available
const Card = ({ className, children }: { className?: string; children: React.ReactNode }) => (
    <div className={className}>{children}</div>
);

export default FinalCta;
