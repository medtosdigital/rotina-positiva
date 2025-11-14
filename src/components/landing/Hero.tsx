import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { HeartHandshake, Puzzle, ShieldCheck, Trophy } from 'lucide-react';

const benefitCards = [
    {
        icon: <ShieldCheck className="w-8 h-8 text-brand-orange" />,
        title: "Rotina Clara, Criança Segura",
        description: "Ajuda as crianças a entenderem e seguirem as tarefas sozinhas."
    },
    {
        icon: <HeartHandshake className="w-8 h-8 text-brand-orange" />,
        title: "Cooperação em vez de Conflito",
        description: "Cria uma rotina positiva, incentivando a obediência com leveza."
    },
    {
        icon: <Trophy className="w-8 h-8 text-brand-orange" />,
        title: "Autonomia e Responsabilidade",
        description: "Ensina a criança a ser independente e dona das suas conquistas."
    },
    {
        icon: <Puzzle className="w-8 h-8 text-brand-orange" />,
        title: "Menos Estresse para os Pais",
        description: "O quadro 'lembra' a criança da tarefa, não você. Menos gritos, mais paz."
    }
]

const Hero = () => {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-main');

  return (
    <section className="relative w-full bg-brand-turquoise overflow-hidden pt-12 pb-12">
      <div
        className="absolute inset-x-0 top-0 h-full bg-brand-gold"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)',
        }}
      ></div>

      <div className="relative container mx-auto px-6">
        <div className="grid lg:grid-cols-2 items-center gap-8 w-full">
            <div className="text-white z-10 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl font-extrabold !leading-tight tracking-tight mb-4 text-brand-dark-blue">
                Faça seu filho{' '}
                <span className="bg-brand-dark-blue text-brand-gold px-2 py-1 rounded-lg inline-block whitespace-nowrap">
                  OBEDECER
                </span>{' '}
                sem brigar, sem gritar e sem ameaças —{' '}
                <span className="bg-brand-dark-blue text-brand-gold px-2 py-1 rounded-lg inline-block">
                  em apenas 24 horas.
                </span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl mb-8 text-brand-dark-blue/80">
                Criança obedece quando sente que está jogando — não quando está sendo mandada.
              </p>
            </div>
            <div className="relative mt-0 lg:mt-0 h-auto">
                 {/* Benefit Cards Section */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
                    {benefitCards.map((card) => (
                        <Card key={card.title} className="bg-white/70 backdrop-blur-sm border-0 rounded-2xl shadow-lg text-center">
                            <CardContent className="p-4 md:p-6 flex flex-col items-center justify-center">
                            <div className="mb-3">
                                {card.icon}
                            </div>
                            <h3 className="text-sm md:text-base font-bold text-brand-dark-blue leading-tight">{card.title}</h3>
                            </CardContent>
                        </Card>
                    ))}
                </div>
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
               <div className="mt-8 z-10 w-full flex justify-center">
                    <Button
                    size="lg"
                    className="bg-brand-orange hover:bg-brand-orange/90 text-primary-foreground text-lg md:text-xl font-bold py-8 px-10 rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-300 w-full max-w-md lg:w-auto animate-pulse"
                    >
                    QUERO O ROTINA MÁGICA AGORA
                    </Button>
                </div>
            </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
