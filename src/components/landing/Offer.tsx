import { Button } from '@/components/ui/button';
import { ShieldCheck, Zap, Package } from 'lucide-react';

const seals = [
  { icon: <ShieldCheck className="w-6 h-6 mr-2" />, text: 'Garantia 7 dias' },
  { icon: <Zap className="w-6 h-6 mr-2" />, text: 'Acesso imediato' },
  { icon: <Package className="w-6 h-6 mr-2" />, text: 'Produto digital' },
];

const Offer = () => {
  return (
    <section className="py-20 lg:py-24 bg-brand-dark-blue text-white">
      <div className="container mx-auto px-6 text-center">
        <p className="text-xl md:text-2xl mb-2 text-gray-300">OFERTA ESPECIAL DE LANÇAMENTO</p>
        <h2 className="text-4xl md:text-6xl lg:text-8xl font-bold !leading-tight mb-6">
          <span className="text-red-400 line-through decoration-2">De R$ 147</span> por apenas <span className="text-brand-gold">R$ 27 HOJE</span>.
        </h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">Acesso vitalício a todo o sistema e futuras atualizações. Sem mensalidades.</p>
        
        <Button
          size="lg"
          className="bg-brand-orange hover:bg-brand-orange/90 text-primary-foreground text-xl md:text-2xl font-bold py-8 px-16 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 animate-pulse"
        >
          QUERO ACESSAR AGORA
        </Button>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
          {seals.map((seal, index) => (
            <div key={index} className="flex items-center text-gray-300">
              {seal.icon}
              <span className="font-medium">{seal.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offer;
