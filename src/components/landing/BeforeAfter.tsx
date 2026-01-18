import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { XCircle, CheckCircle2 } from 'lucide-react';
const beforeItems = ["Criança sem limites", "Rotina de estresse e gritos", "Adulto despreparado e frustrado"];
const afterItems = ["Criança confiante e disciplinada", "Rotina de paz e cooperação", "Adulto focado e bem-sucedido"];
const BeforeAfter = () => {
  return (
    <section className="py-12 lg:py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-brand-dark-blue mb-4">
            Você vai sentir a diferença nas <span className="bg-brand-gold px-2 rounded-lg text-2xl">PRIMEIRAS 24 HORAS</span>.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* ANTES */}
          <Card className="bg-red-100/50 border-red-200 rounded-2xl shadow-lg p-4 md:p-6">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="font-headline text-3xl md:text-4xl font-bold text-red-600 text-center">​SEM ROTINA </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="space-y-3">
                {beforeItems.map(item => <li key={item} className="flex items-start">
                    <XCircle className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="font-body text-gray-700 text-lg md:text-xl">{item}</span>
                  </li>)}
              </ul>
            </CardContent>
          </Card>

          {/* DEPOIS */}
          <Card className="bg-green-100/50 border-green-200 rounded-2xl shadow-lg p-4 md:p-6">
            <CardHeader className="p-0 mb-4">
              <CardTitle className="font-headline text-3xl md:text-4xl font-bold text-green-600 text-center">ROTINA POSITIVA </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="space-y-3">
                {afterItems.map(item => <li key={item} className="flex items-start">
                    <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="font-body text-gray-700 text-lg md:text-xl">{item}</span>
                  </li>)}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default BeforeAfter;