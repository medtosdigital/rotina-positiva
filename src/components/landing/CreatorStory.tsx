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
                className="rounded-2xl shadow-xl w-full max-w-xs sm:max-w-sm object-cover"
              />
            )}
          </div>
          <div className="text-center lg:text-left">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-brand-dark-blue mb-4">
              Uma mãe como você, que encontrou a solução.
            </h2>
            <p className="font-body text-base md:text-lg text-gray-600 mb-4">
              "Oi, eu sou a Carla Alves. Como muitas de vocês, eu também vivi o caos. Minha filha, Sofia, é um anjo, mas as manhãs eram um pesadelo de birras e 'nãos'. Eu me sentia esgotada e culpada por gritar. Tentei de tudo, até que percebi que ela precisava 'ver' a rotina."
            </p>
            <p className="font-body text-base md:text-lg text-gray-600 mb-6">
              "Foi assim que nasceu o Rotina Positiva. Criei um sistema visual, lúdico e divertido, que transformou nossas vidas. A Sofia se tornou participativa, organizada e confiante. E eu... bom, eu voltei a ter paz. Criei isso para a minha filha, e agora compartilho com você."
            </p>
            <p className="font-subtitle font-bold text-brand-turquoise">- Carla Alves, mãe da Sofia e criadora do Rotina Positiva</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorStory;
