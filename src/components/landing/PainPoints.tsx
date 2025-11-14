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
        <h2 className="text-3xl md:text-5xl font-extrabold text-center text-brand-dark-blue mb-12">
          Se você se identifica com <span className="text-brand-orange underline decoration-wavy">pelo menos um</span> desses pontos...
        </h2>
        <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
          {painPoints.map((point, index) => (
            <Card
              key={index}
              className="bg-white/80 backdrop-blur-sm border-2 border-white rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <CardContent className="flex flex-col items-center justify-center text-center p-6 h-full">
                <div className="text-5xl mb-4">{point.icon}</div>
                <p className="font-semibold text-brand-dark-blue text-lg">{point.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
