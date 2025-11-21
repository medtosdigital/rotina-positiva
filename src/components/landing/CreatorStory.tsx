import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const CreatorStory = () => {
  const creatorImage = PlaceHolderImages.find(img => img.id === 'creator-story-carla');

  return (
    <section className="py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="flex justify-center">
            {creatorImage && (
              <Image
                src={creatorImage.imageUrl}
                alt={creatorImage.description}
                width={400}
                height={500}
                data-ai-hint={creatorImage.imageHint}
                className="rounded-2xl shadow-xl w-full max-w-xs sm:max-w-sm object-cover transform transition-transform duration-300 hover:scale-105"
              />
            )}
          </div>
          <div className="text-center lg:text-left">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-brand-dark-blue mb-4">
              Eu vi o perigo de perto e criei a solução.
            </h2>
            <p className="font-body text-base md:text-lg text-gray-600 mb-4">
              "Oi, eu sou a Carla Alves. E eu estava criando uma filha 'fracassada'. Eu a amava, mas a cada birra, a cada 'não' e a cada grito meu, eu sentia que estava destruindo o futuro dela. Eu estava criando uma adulta sem disciplina, sem foco e sem resiliência."
            </p>
            <p className="font-body text-base md:text-lg text-gray-600 mb-6">
              "Desesperada, eu mergulhei em psicologia e pedagogia, e descobri o segredo: a mente infantil é visual. Foi aí que nasceu o Quadro de Rotina Positiva, como um bote salva-vidas. Em poucos dias, a Sofia se tornou uma criança focada, responsável e... feliz. Eu não salvei apenas a minha paz, eu salvei o futuro dela. Agora, eu quero ajudar você a fazer o mesmo."
            </p>
            <p className="font-subtitle font-bold text-brand-turquoise">- Carla Alves, mãe da Sofia e criadora do Protocolo Rotina Positiva</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorStory;
