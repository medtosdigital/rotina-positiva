"use client";

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { CheckCircle2, Sun, Moon, Sunset } from 'lucide-react';
import { Button } from '@/components/ui/button';

const mainShowcaseItems = [
  { 
    id: 'whats-inside-morning', 
    title: 'Quadro da Manhã', 
    benefit: 'Organiza as tarefas matinais como acordar, escovar os dentes e se vestir, acabando com a correria e o estresse. A criança aprende a ter autonomia desde cedo, de forma leve e divertida.',
    icon: <Sun className="w-5 h-5 mr-2" />,
    bgColor: 'bg-blue-100/50',
    borderColor: 'border-blue-200',
    tagBgColor: 'bg-blue-200 text-blue-800',
    tag: 'MANHÃ'
  },
  { 
    id: 'whats-inside-afternoon', 
    title: 'Quadro da Tarde', 
    benefit: 'Estrutura as atividades da tarde, incluindo a hora da lição de casa, lanches e momentos de diversão, sem precisar ficar repetindo as mesmas ordens.',
    icon: <Sunset className="w-5 h-5 mr-2" />,
    bgColor: 'bg-orange-100/50',
    borderColor: 'border-orange-200',
    tagBgColor: 'bg-orange-200 text-orange-800',
    tag: 'TARDE'
  },
  { 
    id: 'whats-inside-night', 
    title: 'Quadro da Noite', 
    benefit: 'Cria um ritual relaxante e previsível para a hora de dormir. Inclui banho, pijama e história, garantindo noites tranquilas e sem choro.',
    icon: <Moon className="w-5 h-5 mr-2" />,
    bgColor: 'bg-indigo-100/50',
    borderColor: 'border-indigo-200',
    tagBgColor: 'bg-indigo-200 text-indigo-800',
    tag: 'NOITE'
  },
];

const otherShowcaseItems = [
  { id: 'whats-inside-rewards', title: 'Quadro de Recompensas', benefit: 'Permite que a criança visualize os prêmios que pode conquistar ao completar suas tarefas. A motivação que faltava para a cooperação.' },
  { id: 'whats-inside-study', title: 'Quadro de Estudos', benefit: 'Ajuda a criança a focar nas lições de casa e atividades escolares, tornando o aprendizado mais organizado e menos cansativo para todos.' },
  { id: 'whats-inside-reading', title: 'Quadro de Leitura', benefit: 'Incentiva o hábito da leitura diária de forma prazerosa. Transforme a leitura em um momento mágico e esperado pela criança.' },
  { id: 'whats-inside-responsibilities', title: 'Quadro de Responsabilidades', benefit: 'Ensina o valor de pequenas tarefas domésticas, como arrumar a cama ou guardar os brinquedos, desenvolvendo o senso de responsabilidade.' },
  { id: 'whats-inside-cards', title: 'Cartões de Rotina', benefit: 'São mais de 200 cards para personalizar os quadros com todas as tarefas possíveis. Adapta-se 100% à rotina da sua família.' },
  { id: 'whats-inside-coins', title: 'Moedas e Estrelas', benefit: "Sistemas de pontos que transformam a rotina em um jogo. A criança junta estrelas e moedas para trocar por recompensas que vocês definem." },
];

declare global {
  interface Window {
    scrollToTarget: (targetId: string) => void;
  }
}

const ProductShowcase = () => {
  const imageMap = new Map(PlaceHolderImages.map(img => [img.id, img]));
  const headerImages = [
    PlaceHolderImages.find(img => img.id === 'product-in-use-1'),
    PlaceHolderImages.find(img => img.id === 'product-in-use-2'),
    PlaceHolderImages.find(img => img.id === 'product-in-use-3'),
  ].filter(img => !!img);


  const features = [
    "Instale o 'chip' da disciplina de forma natural.",
    "Transforme birra em cooperação e proatividade.",
    "Programe a mente do seu filho para o sucesso.",
    "Conquiste a paz hoje, garanta o futuro dele amanhã.",
    "Ensine responsabilidade e organização desde cedo."
  ];

  return (
    <section id="product-showcase" className="pt-20 lg:pt-32 pb-12 lg:pb-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-8">
            {headerImages.map((image, index) => (
              image && (
                <div key={index} className="rounded-lg overflow-hidden shadow-lg w-full transform transition-transform duration-300 hover:scale-110">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={400}
                    height={400}
                    data-ai-hint={image.imageHint}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )
            ))}
          </div>
          <h2 className="font-headline text-3xl md:text-5xl font-bold text-brand-dark-blue mb-4">
            O Protocolo Rotina Positiva:{' '}
            <span className="text-brand-turquoise">O "Sistema Operacional" do Sucesso</span>
          </h2>
          <p className="font-body text-lg md:text-xl text-gray-600">
            Esta é a ferramenta que reprograma o cérebro do seu filho, instalando os 3 pilares essenciais para criar um adulto focado, disciplinado e bem-sucedido.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
            <h3 className="font-headline text-2xl md:text-3xl font-bold text-brand-dark-blue mb-8 text-center">O que vem no kit?</h3>

            {/* Main Showcase Items */}
            <div className="space-y-8 mb-16">
              {mainShowcaseItems.map((item) => {
                const image = imageMap.get(item.id);
                return (
                  <Card key={item.id} className={`rounded-2xl shadow-lg border-2 ${item.borderColor} ${item.bgColor} overflow-hidden transform transition-transform duration-300 hover:scale-105`}>
                    <CardContent className="p-6 md:p-8 grid md:grid-cols-2 gap-8 items-center">
                      <div className="text-center md:text-left">
                        <div className={`inline-flex items-center justify-center px-4 py-1 rounded-full font-bold text-sm mb-4 ${item.tagBgColor}`}>
                          {item.icon}
                          {item.tag}
                        </div>
                        <h4 className="font-headline text-2xl md:text-3xl font-bold mb-3 text-brand-dark-blue">{item.title}</h4>
                        <p className="font-body text-gray-600 text-base">{item.benefit}</p>
                      </div>
                      <div className="flex justify-center">
                        {image && (
                           <Image
                             src={image.imageUrl}
                             alt={item.title}
                             width={500}
                             height={400}
                             data-ai-hint={image.imageHint}
                             className="rounded-lg shadow-md object-contain"
                           />
                         )}
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Other Showcase Items */}
            <div className="mt-8">
              <h3 className="font-headline text-2xl font-bold text-brand-dark-blue mb-6 text-center">E ainda...</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {otherShowcaseItems.map((item) => {
                  const image = imageMap.get(item.id);
                  return (
                    <Card key={item.id} className="bg-gray-50 rounded-xl overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300 shadow-lg flex flex-col">
                      <div className="bg-gray-100 p-2 h-48 flex items-center justify-center">
                        {image && (
                          <Image
                            src={image.imageUrl}
                            alt={item.title}
                            width={400}
                            height={300}
                            data-ai-hint={image.imageHint}
                            className="w-full h-full object-contain"
                          />
                        )}
                      </div>
                      <CardContent className="p-4 flex-grow">
                        <h4 className="font-subtitle text-lg font-bold mb-1 text-brand-dark-blue">{item.title}</h4>
                        <p className="font-body text-gray-600 text-sm">{item.benefit}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
        </div>

        <div className="max-w-md mx-auto mt-16 text-center">
            <Card className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 shadow-lg">
              <ul className="space-y-4">
                  {features.map((feature, index) => (
                      <li key={index} className="flex items-center text-left">
                          <CheckCircle2 className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                          <span className="font-body text-base md:text-lg text-brand-dark-blue">{feature}</span>
                      </li>
                  ))}
              </ul>
            </Card>
        </div>

        <div className="mt-16 text-center">
             <Button
                onClick={() => window.scrollToTarget('offer')}
                className="font-headline bg-brand-turquoise hover:bg-brand-turquoise/90 text-white font-bold py-4 px-6 sm:py-6 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 h-auto animate-pulse-slow w-full max-w-md"
            >
                <div className="flex flex-col items-center">
                    <span className="text-base sm:text-lg md:text-xl uppercase">QUERO INSTALAR O SISTEMA DO SUCESSO</span>
                    <span className="text-xs sm:text-sm font-normal">Garantir o protocolo com desconto</span>
                </div>
            </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
