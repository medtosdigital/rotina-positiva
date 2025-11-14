import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { BrainCircuit, Eye, Gamepad2, Sparkles } from 'lucide-react';

const mechanismCards = [
    { icon: <Eye className="w-10 h-10 text-white" />, title: "Comunicação Visual", description: "Crianças entendem imagens 60.000x mais rápido. É a língua nativa delas!" },
    { icon: <Gamepad2 className="w-10 h-10 text-white" />, title: "Recompensa e Dopamina", description: "O jogo ativa o centro de prazer do cérebro, associando tarefas a algo bom." },
    { icon: <BrainCircuit className="w-10 h-10 text-white" />, title: "Reduz Carga Mental", description: "O quadro se torna o 'chefe', não você. Adeus, repetições e estresse." },
    { icon: <Sparkles className="w-10 h-10 text-white" />, title: "Autonomia é Poder", description: "Assumir o controle das tarefas gera confiança e senso de capacidade." }
];

const UniqueMechanism = () => {
  const brainImage = PlaceHolderImages.find((img) => img.id === 'brain-image');

  return (
    <section className="py-20 lg:py-32 bg-brand-turquoise text-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
                A birra e a desobediência do seu filho não são culpa sua —{' '}
                <span className="underline decoration-wavy decoration-brand-gold">é como o cérebro infantil foi programado.</span>
            </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {mechanismCards.map((card, index) => (
                    <Card key={index} className="bg-white/20 border-0 rounded-2xl shadow-lg text-center transform hover:scale-105 transition-transform duration-300">
                        <CardHeader className="items-center">
                            <div className="bg-brand-orange p-3 rounded-full mb-2">
                                {card.icon}
                            </div>
                            <CardTitle className="text-xl font-bold">{card.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-base">{card.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className="flex flex-col items-center">
                {brainImage && (
                    <Image 
                        src={brainImage.imageUrl} 
                        alt={brainImage.description} 
                        width={400} 
                        height={300} 
                        data-ai-hint={brainImage.imageHint}
                        className="rounded-2xl shadow-2xl mb-6"
                    />
                )}
                 <p className="text-2xl md:text-3xl font-bold text-center bg-brand-gold text-brand-dark-blue py-3 px-6 rounded-xl shadow-lg -rotate-3">
                    Crianças obedecem à <span className="underline">diversão</span>, não à <span className="line-through">obrigação</span>.
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueMechanism;
