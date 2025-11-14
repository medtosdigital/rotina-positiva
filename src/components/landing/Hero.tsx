import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const Hero = () => {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-main');

  return (
    <section className="relative w-full bg-brand-turquoise overflow-hidden">
      <div
        className="absolute inset-0 bg-brand-gold"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)',
        }}
      ></div>
      <div className="relative container mx-auto grid lg:grid-cols-2 items-center min-h-[80vh] lg:min-h-[95vh] py-20 lg:py-0 px-6">
        <div className="text-white z-10 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold !leading-tight tracking-tight mb-4 text-brand-dark-blue">
            Faça seu filho OBEDECER sem brigar, sem gritar e sem ameaças — em
            apenas 24 horas.
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-brand-dark-blue/80">
            O sistema visual que transforma disciplina em um jogo que a criança
            AMA.
          </p>
          <Button
            size="lg"
            className="bg-brand-orange hover:bg-brand-orange/90 text-primary-foreground text-lg md:text-xl font-bold py-8 px-10 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            QUERO O ROTINA MÁGICA AGORA
          </Button>
        </div>
        <div className="relative mt-12 lg:mt-0 h-64 lg:h-auto">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              width={800}
              height={600}
              data-ai-hint={heroImage.imageHint}
              className="object-contain w-full h-full rounded-2xl shadow-2xl"
              priority
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
