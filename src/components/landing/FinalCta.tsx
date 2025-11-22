import { Star } from 'lucide-react';
import { BuyButton } from './BuyButton';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const FinalCta = () => {
  return (
    <section className="py-20 lg:py-24 bg-brand-dark-blue text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline text-3xl md:text-5xl font-bold !leading-tight mb-8">
            Você está a 1 clique de transformar a rotina do seu filho(a).
          </h2>

          <div className="mb-10">
            <BuyButton className="font-headline bg-white hover:bg-gray-100 text-brand-orange font-bold py-5 px-6 sm:py-7 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 w-full max-w-lg h-auto animate-pulse-slow">
              <div className="flex flex-col items-center leading-tight">
                <span className="text-base sm:text-lg md:text-xl">
                  SIM! EU QUERO TRANSFORMAR MINHA CASA!
                </span>
                <span className="text-xs sm:text-sm font-normal opacity-80 mt-1">
                  Comprar agora com desconto
                </span>
              </div>
            </BuyButton>
          </div>

          <div className="flex justify-center items-center mb-16">
            <div className="bg-white/20 rounded-xl p-4 flex items-center gap-4 max-w-sm md:max-w-md shadow-lg">
              <Avatar>
                <AvatarFallback className="bg-white text-brand-orange font-bold">
                  N
                </AvatarFallback>
              </Avatar>
              <div className="text-left font-body">
                <p className="text-sm sm:text-base italic">
                  "Melhor investimento que fiz pela paz da minha família. Funcionou no primeiro
                  dia!" - <strong>Juliana S.</strong>
                </p>
                <div className="flex text-yellow-300 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto text-xs text-white/70 space-y-3 font-body">
            <p>
              Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook. Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados reais.
            </p>
            <p>
              Não reivindicamos ou declaramos que, ao usar o método, você ganhará dinheiro ou recuperará seu dinheiro. Os depoimentos mostrados são de pessoas reais e os resultados que elas alcançaram não são típicos. Seus resultados podem variar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCta;
