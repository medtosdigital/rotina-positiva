import { Card, CardContent } from '@/components/ui/card';
import { Volume2, Angry, Frown, UserX, Lightbulb } from 'lucide-react';

const painPoints = [
  {
    icon: '🗣️',
    text: 'Eu repito mil vezes e ninguém me escuta',
  },
  {
    icon: '🤯',
    text: 'Rotina é caos',
  },
  {
    icon: '😠',
    text: 'Tudo vira briga',
  },
  {
    icon: '😔',
    text: 'Sinto culpa por gritar',
  },
  {
    icon: '🙅‍♀️',
    text: 'Meu filho não coopera',
  },
  {
    icon: '😡',
    text: 'Só obedece quando eu perco a cabeça',
  },
];

const PainPoints = () => {
  return (
    <section className="py-20 lg:py-32 bg-brand-gold">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-brand-dark-blue mb-12">
          Se sua casa virou um campo de batalha…{' '}
          <span className="text-brand-orange">você precisa ver ISSO.</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {painPoints.map((point, index) => (
            <Card
              key={index}
              className="bg-white/80 backdrop-blur-sm border-2 border-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <CardContent className="flex flex-col items-center justify-center text-center p-6">
                <div className="text-5xl mb-4">{point.icon}</div>
                <p className="font-semibold text-brand-dark-blue">{point.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
