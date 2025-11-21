import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle2, XCircle, ArrowDown } from 'lucide-react';

const boringRules = [
  "Arrume seu quarto!",
  "Vá fazer o dever!",
  "É hora de tomar banho!",
];

const funRoutine = [
  "Conquistar a 'Missão Quarto Arrumado'",
  "Destravar a 'Fase do Saber'",
  "Ativar o 'Poder do Super Banho'",
];


const UniqueMechanism = () => {
  return (
    <section id="unique-mechanism" className="py-20 lg:py-32 bg-brand-turquoise text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6">
            Crianças só obedecem quando{' '}
            <span className="bg-brand-gold text-brand-dark-blue px-2 rounded-lg">
              enxergam
            </span>{' '}
            o que precisam fazer.
          </h2>
          <div className="font-body text-lg md:text-xl text-white/90 space-y-4">
            <p>É por isso que os <b className="font-bold">Quadros de Rotina Positiva</b> funcionam.</p>
            <p>Eles transformam regras e tarefas abstratas em um jogo visual, claro e divertido que seu filho entende e adora seguir.</p>
          </div>
        </div>

        <div className="flex justify-center">
            <Card className="bg-white/90 backdrop-blur-sm border border-white/50 rounded-2xl shadow-xl max-w-4xl w-full">
                <CardContent className="p-8 md:p-12 grid md:grid-cols-[1fr_auto_1fr] items-start gap-6 md:gap-8">
                    {/* Coluna Regras Chatas */}
                    <div className="text-center md:text-left">
                        <h3 className="font-headline text-xl md:text-2xl font-bold text-red-500 mb-4">Regras Chatas</h3>
                        <ul className="space-y-3">
                            {boringRules.map((rule, index) => (
                                <li key={index} className="flex items-start">
                                    <XCircle className="w-6 h-6 text-red-400 mr-3 mt-0.5 flex-shrink-0" />
                                    <span className="font-body text-gray-600">{rule}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Seta */}
                    <div className="flex justify-center items-center h-full">
                        <ArrowRight className="hidden md:block w-8 h-8 md:w-12 md:h-12 text-brand-turquoise" />
                        <ArrowDown className="block md:hidden w-8 h-8 md:w-12 md:h-12 text-brand-turquoise" />
                    </div>
                    

                    {/* Coluna Rotina Divertida */}
                    <div className="text-center md:text-left">
                        <h3 className="font-headline text-xl md:text-2xl font-bold text-green-600 mb-4">Rotina Divertida</h3>
                         <ul className="space-y-3">
                            {funRoutine.map((task, index) => (
                                <li key={index} className="flex items-start">
                                    <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                    <span className="font-body text-brand-dark-blue font-medium">{task}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
};

export default UniqueMechanism;
