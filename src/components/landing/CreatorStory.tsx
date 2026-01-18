import Image from "next/image";

import helenaImage from "@/assets/creator/helena.png";

const CreatorStory = () => {
  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="flex justify-center">
            <Image
              src={helenaImage}
              alt="Foto de Helena com sua filha"
              width={320}
              height={320}
              className="rounded-full shadow-none w-full max-w-[240px] sm:max-w-[280px] object-cover"
            />
          </div>

          <div className="text-center lg:text-left">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-brand-dark-blue mb-4">
              Eu vi o perigo de perto e criei a solução.
            </h2>
            <p className="font-body text-base md:text-lg text-gray-600 mb-4">
              "Oi, eu sou a Helena Alves. Eu amo ser mãe — mas teve uma fase em que
              eu ia dormir com o coração apertado, com medo de estar errando a mão.
              A cada birra, a cada 'não' e a cada grito meu, eu sentia que a nossa
              casa estava perdendo a leveza e que eu estava me afastando da criança
              incrível que minha filha podia ser."
            </p>
            <p className="font-body text-base md:text-lg text-gray-600 mb-6">
              "Foi quando eu decidi buscar ajuda de verdade. Mergulhei em psicologia
              e pedagogia e entendi algo simples (e poderoso): a mente infantil é
              visual. Assim nasceram os <strong>Quadros de Rotina Positiva</strong> —
              como um mapa do dia a dia, para trazer clareza, autonomia e paz.
              Em poucos dias, a Sofia ficou mais tranquila, confiante e...
              feliz. E eu senti que estava, finalmente, conduzindo nossa família
              com amor e firmeza. Agora, eu quero ajudar você a viver isso também."
            </p>
            <p className="font-subtitle font-bold text-brand-turquoise">
              - Helena Alves, mãe da Sofia e criadora dos Quadros de Rotina
              Positiva
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreatorStory;
