import { Card, CardContent } from '@/components/ui/card';
import { ArrowDown } from 'lucide-react';

const UniqueMechanism = () => {
  return (
    <section className="py-20 lg:py-32 bg-brand-turquoise text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-6">
            Crianças obedecem quando{' '}
            <span className="bg-brand-gold text-brand-dark-blue px-2 rounded-lg">
              enxergam
            </span>{' '}
            o que precisam fazer.
          </h2>
          <p className="font-body text-lg md:text-xl text-white/90">
            É por isso que o <b className="font-bold">ROTINA MÁGICA</b> funciona. Ele transforma regras e tarefas abstratas em um jogo visual, claro e divertido que seu filho entende e adora seguir.
          </p>
        </div>

        <div className="flex justify-center">
            <Card className="bg-white/90 backdrop-blur-sm border border-white/50 rounded-2xl shadow-xl max-w-lg w-full">
                <CardContent className="p-8 md:p-12 flex flex-col items-center justify-center space-y-6">
                    <div className="bg-red-100 border-2 border-dashed border-red-400 rounded-xl px-6 py-3">
                        <p className="font-subtitle text-xl font-bold text-red-500">Regras Chatas</p>
                    </div>
                    
                    <ArrowDown className="w-10 h-10 text-brand-turquoise animate-bounce" />

                    <div className="bg-green-100/80 rounded-xl px-8 py-4 shadow-lg">
                         <p className="font-subtitle text-xl font-bold text-green-700">Jogo Visual Divertido</p>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
};

export default UniqueMechanism;
