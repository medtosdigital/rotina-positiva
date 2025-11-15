import { Card, CardContent } from '@/components/ui/card';

const painPoints = [
  {
    icon: '🗣️',
    text: 'Eu repito mil vezes e ninguém me escuta',
  },
  {
    icon: '🤯',
    text: 'Sua rotina é um caos',
  },
  {
    icon: '😠',
    text: 'Tudo vira uma briga',
  },
  {
    icon: '😔',
    text: 'Você se sente culpada por gritar',
  },
  {
    icon: '🙅‍♀️',
    text: 'Seu filho não coopera com nada',
  },
  {
    icon: '😡',
    text: 'Ele só obedece quando você perde a cabeça',
  },
];

const PainPoints = () => {
  return (
    <section className="py-20 lg:py-32 bg-brand-gold">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-brand-dark-blue mb-4">
            A vida de mãe parece uma <span className="text-white underline decoration-wavy">batalha diária?</span>
          </h2>
          <p className="font-body text-lg md:text-xl text-brand-dark-blue/80">
            Se você se identifica com alguma dessas situações, saiba que não está sozinha.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {painPoints.map((point, index) => (
            <Card
              key={index}
              className="bg-white/80 backdrop-blur-sm border-2 border-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <CardContent className="flex flex-col items-center justify-center text-center p-4 md:p-6 h-full">
                <div className="text-4xl md:text-5xl mb-4 animate-wiggle" style={{ animationDelay: `${index * 100}ms` }}>{point.icon}</div>
                <p className="font-subtitle font-bold text-brand-dark-blue text-base md:text-lg">{point.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
