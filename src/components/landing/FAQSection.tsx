import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Por quanto tempo terei acesso à mentoria?",
    answer:
      "Você terá acesso completo por 12 meses a partir da sua inscrição. Durante esse período, poderá assistir às aulas quantas vezes quiser, participar das aulas ao vivo quinzenais e acessar todo o material de apoio. É tempo suficiente para uma transformação real e duradoura.",
  },
  {
    question: "Como funciona a garantia de 7 dias?",
    answer:
      "É muito simples: se por qualquer motivo você sentir que a mentoria não é para você, basta solicitar o reembolso em até 7 dias após a compra e devolveremos 100% do seu dinheiro. Sem perguntas, sem burocracia, sem ressentimentos. Você não tem nada a perder.",
  },
  {
    question: "Terei suporte direto com a Tali?",
    answer:
      "Sim! Você terá acesso à comunidade exclusiva onde a Tali interage diretamente com as alunas, respondendo dúvidas, oferecendo orientação e acompanhando sua jornada durante todo o período da mentoria.",
  },
  {
    question: "As aulas são ao vivo ou gravadas?",
    answer:
      "As aulas são gravadas, permitindo que você assista no seu próprio ritmo, quantas vezes precisar. Além disso, temos aulas ao vivo quinzenais para tirar dúvidas e aprofundar o aprendizado.",
  },
  {
    question: "Preciso ter conhecimento prévio sobre a Bíblia?",
    answer:
      "Não! A mentoria foi criada para mulheres em qualquer estágio da fé - desde iniciantes até as mais experientes. Você será guiada passo a passo, de forma clara e acolhedora, independentemente do seu conhecimento bíblico atual.",
  },
  {
    question: "Quanto tempo por dia preciso dedicar?",
    answer:
      "As aulas são direto ao ponto, com até 15 minutos cada, para se encaixar perfeitamente na sua rotina. Você pode assistir pelo notebook, computador, celular, televisão, pelo navegador ou aplicativo. Adapte ao seu ritmo. O importante é a consistência, não a velocidade.",
  },
  {
    question: "Posso parcelar o pagamento?",
    answer:
      "Sim! Você pode parcelar em até 11x de R$5,22 no cartão de crédito. Também aceitamos Pix para pagamento à vista de R$47,00.",
  },
  {
    question: "Como acesso a plataforma após a compra?",
    answer:
      "Imediatamente após a confirmação do pagamento, você receberá um e-mail com seus dados de acesso à plataforma. Em poucos minutos você já estará assistindo às primeiras aulas e iniciando sua transformação.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-fullpage py-8 md:py-12" style={{ scrollSnapAlign: 'start' }}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-premium-dark" />

      {/* Gold lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-40 h-40 rounded-full border border-gold/10 floating-element" />
      <div className="absolute bottom-20 left-20 w-32 h-32 rounded-full border border-gold/5 floating-element-delayed" />

      <div className="w-full max-w-4xl mx-auto relative z-10 px-5 sm:px-8 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8 animate-fade-up">
            <div className="decorative-line" />
          </div>
          <span className="inline-block px-5 py-2 rounded-full bg-gold/20 text-off-white text-sm font-bold uppercase tracking-[0.2em] mb-8 animate-fade-up delay-100 border border-gold/30">
            ❓ Dúvidas Frequentes
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-primary-foreground mb-6 animate-fade-up delay-200">
            Perguntas e
            <span className="block text-gold-light italic mt-2">Respostas</span>
          </h2>
        </div>

        {/* FAQ Accordion - Premium style */}
        <Accordion type="single" collapsible className="space-y-5">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="animate-fade-up bg-primary-foreground/5 backdrop-blur-sm rounded-2xl border border-primary-foreground/10 hover:border-gold/30 px-6 md:px-8 overflow-hidden transition-all duration-300"
              style={{ animationDelay: `${(index + 1) * 80}ms` }}
            >
              <AccordionTrigger className="text-left font-semibold text-primary-foreground hover:text-gold transition-colors py-6 md:py-8 text-lg md:text-xl gap-4">
                <span className="flex items-center gap-5">
                  <span className="number-badge flex-shrink-0 w-10 h-10 text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{faq.question}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-primary-foreground/70 leading-relaxed pb-8 pl-[60px] text-base md:text-lg">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Still have questions */}
        <div className="mt-16 text-center animate-fade-up delay-800">
          <p className="text-primary-foreground/60 mb-6 text-lg">Ainda tem alguma dúvida?</p>
          <a
            href="mailto:contato@estacaolar.com.br"
            className="inline-flex items-center gap-3 text-gold font-semibold text-lg hover:text-gold-light transition-colors group"
          >
            <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Fale diretamente conosco
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
