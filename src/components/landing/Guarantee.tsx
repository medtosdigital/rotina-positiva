import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ShieldCheck } from 'lucide-react';

const Guarantee = () => {
  const guaranteeMom = PlaceHolderImages.find(img => img.id === 'guarantee-mom');

  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="text-center lg:text-left">
            <div className="inline-block bg-brand-gold p-4 rounded-full mb-6 shadow-lg">
                <ShieldCheck className="w-8 h-8 md:w-12 md:h-12 text-brand-dark-blue" />
            </div>
            <h2 className="font-headline text-3xl md:text-5xl font-bold text-brand-dark-blue mb-4">
              Garantia INCONDICIONAL de 7 dias.
            </h2>
            <p className="font-body text-base md:text-lg text-gray-600 mb-6">
              Ou você vê uma transformação na sua casa, ou eu devolvo 100% do seu dinheiro. O risco é todo meu. Se por QUALQUER motivo você não amar o Rotina Positiva, basta enviar um único e-mail para receber seu investimento de volta. Simples assim.
            </p>
          </div>
          <div className="flex justify-center">
            {guaranteeMom && (
              <Image
                src={guaranteeMom.imageUrl}
                alt={guaranteeMom.description}
                width={400}
                height={400}
                data-ai-hint={guaranteeMom.imageHint}
                className="rounded-2xl shadow-xl w-full max-w-xs sm:max-w-sm object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
