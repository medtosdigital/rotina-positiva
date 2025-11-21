import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle2, XCircle, ArrowDown } from 'lucide-react';

const boringRules = [
  "Causa estresse e briga",
  "Gera procrastinação",
  "Cria um adulto dependente",
];

const funRoutine = [
  "Instala o 'chip' da autodisciplina",
  "Cria prazer em fazer o certo",
  "Forma um adulto proativo e de sucesso",
];


const UniqueMechanism = () => {
  return (
    <section id="unique-mechanism" className="py-20 lg:py-32 bg-brand-turquoise text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6">
            O cérebro do seu filho é um computador. E ele só entende uma linguagem:{' '}
            <span className="bg-brand-gold text-brand-dark-blue px-2 rounded-lg">
              VISUAL
            </span>.
          </h2>
          <div className="font-body text-lg md:text-xl text-white/90 space-y-4">
            <p>Ordens, gritos e castigos são como um idioma que ele não entende. Eles geram um 'erro no sistema'.</p>
            <p>Os <b className="font-bold">Quadros de Rotina Positiva</b> traduzem suas ordens para a única linguagem que a criança entende, transformando o 'dever' em um 'jogo' que ela AMA jogar.</p>
          </div>
        </div>

        <div className="flex justify-center">
            <Card className="bg-white/90 backdrop-blur-sm border border-white/50 rounded-2xl shadow-xl max-w-4xl w-full">
                <CardContent className="p-8 md:p-12 grid md:grid-cols-[1fr_auto_1fr] items-center gap-6 md:gap-8">
                    {/* Coluna Regras Chatas */}
                    <div className="text-center md:text-left">
                        <h3 className="font-headline text-xl md:text-2xl font-bold text-red-500 mb-4">O Método Antigo</h3>
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
                        <ArrowRight className="hidden md:block w-8 h-8 md:w-12 md:h-12 text-brand-turquoise animate-bounce-subtle" />
                        <ArrowDown className="block md:hidden w-8 h-8 md:w-12 md:h-12 text-brand-turquoise animate-bounce-subtle" />
                    </div>
                    

                    {/* Coluna Rotina Divertida */}
                    <div className="text-center md:text-left">
                        <h3 className="font-headline text-xl md:text-2xl font-bold text-green-600 mb-4">O Novo Protocolo</h3>
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
