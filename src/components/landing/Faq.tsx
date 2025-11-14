import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqItems = [
  {
    question: "O que eu recebo exatamente?",
    answer: "Você recebe acesso imediato e vitalício a uma plataforma com todos os arquivos do Rotina Mágica em PDF de alta resolução, prontos para imprimir. Isso inclui todos os quadros, cartões, moedas, estrelas e todos os bônus anunciados."
  },
  {
    question: "Funciona para qualquer idade?",
    answer: "O método é ideal para crianças de 3 a 10 anos, fase em que o pensamento visual e lúdico é mais forte. No entanto, recebemos relatos de sucesso com crianças um pouco mais novas e mais velhas, com pequenas adaptações."
  },
  {
    question: "Preciso comprar algo a mais?",
    answer: "Você só precisa de uma impressora (ou pode imprimir em uma gráfica) e, opcionalmente, pode plastificar os materiais para maior durabilidade. Muitos pais também usam quadros magnéticos ou de cortiça para montar o sistema."
  },
  {
    question: "O acesso é por quanto tempo?",
    answer: "O acesso é VITALÍCIO! Você paga uma única vez e pode acessar e baixar os materiais para sempre, incluindo todas as futuras atualizações que fizermos no sistema, sem custo adicional."
  },
  {
    question: "É seguro comprar?",
    answer: "Sim, 100% seguro. O pagamento é processado pela maior plataforma de produtos digitais do Brasil, utilizando criptografia de ponta. Seus dados estão completamente seguros."
  },
  {
    question: "E se não funcionar para mim?",
    answer: "Seu risco é zero. Você tem 7 dias de garantia incondicional. Se não ficar 100% satisfeita, por qualquer motivo, é só pedir o reembolso e nós devolvemos todo o seu dinheiro, sem perguntas."
  },
  {
    question: "Como vou acessar o material?",
    answer: "Imediatamente após a confirmação do pagamento, você receberá um e-mail com seu login e senha para acessar a área de membros exclusiva, onde poderá baixar todo o conteúdo."
  }
];

const Faq = () => {
  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-brand-dark-blue mb-4">
            Perguntas Frequentes
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white border-b-0 mb-4 rounded-xl shadow-md">
              <AccordionTrigger className="text-lg font-semibold text-left px-6 py-4 hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-600 text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faq;
