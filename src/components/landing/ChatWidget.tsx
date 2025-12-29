import { useState } from "react";
import { Button } from "@/components/ui/button";

const quickQuestions = [
  {
    question: "Quanto tempo tenho de acesso?",
    answer: "Você terá 12 meses de acesso completo a todo o conteúdo da mentoria, incluindo todas as atualizações futuras.",
  },
  {
    question: "Como funciona a garantia?",
    answer: "Oferecemos garantia incondicional de 7 dias. Se você não ficar satisfeita, devolvemos 100% do seu investimento, sem perguntas.",
  },
  {
    question: "Posso parcelar?",
    answer: "Sim! Você pode parcelar em até 11x de R$5,22 no cartão de crédito, ou pagar R$47,00 à vista via Pix.",
  },
  {
    question: "A mentoria é só para casadas?",
    answer: "Não! A mentoria é para toda mulher que deseja alinhar sua vida, seu lar e seu coração à vontade de Deus, independente do estado civil.",
  },
  {
    question: "Quando começa?",
    answer: "Acesso imediato! Assim que o pagamento for confirmado, você recebe os dados de acesso no seu e-mail e já pode começar.",
  },
  {
    question: "Tem suporte?",
    answer: "Sim! Você terá acesso a uma comunidade exclusiva de alunas e suporte direto com a mentora Tali Almeida.",
  },
];

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null);

  return (
    <>
      {/* Chat button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-4 right-4 z-40 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-gold shadow-gold-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
        aria-label="Abrir chat"
      >
        <svg className="w-7 h-7 sm:w-8 sm:h-8 text-off-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-gold animate-ping opacity-30" />
      </button>

      {/* Chat window */}
      <div
        className={`fixed bottom-4 right-4 z-50 w-[calc(100vw-2rem)] max-w-sm transition-all duration-300 ${
          isOpen
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-8 opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gold/20">
          {/* Header */}
          <div className="bg-gradient-gold p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-espresso/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-espresso" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="font-semibold text-espresso">Dúvidas Frequentes</p>
                <p className="text-xs text-espresso/70">Respostas instantâneas</p>
              </div>
            </div>
            <button
              onClick={() => {
                setIsOpen(false);
                setSelectedQuestion(null);
              }}
              className="w-8 h-8 rounded-full bg-espresso/10 flex items-center justify-center hover:bg-espresso/20 transition-colors"
              aria-label="Fechar chat"
            >
              <svg className="w-4 h-4 text-espresso" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-4 max-h-[50vh] overflow-y-auto">
            {selectedQuestion === null ? (
              <>
                <p className="text-sm text-muted-foreground mb-4">
                  Olá! 👋 Selecione uma pergunta abaixo:
                </p>
                <div className="space-y-2">
                  {quickQuestions.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedQuestion(index)}
                      className="w-full text-left p-3 rounded-xl bg-sage/50 hover:bg-sage border border-gold/10 hover:border-gold/30 transition-all duration-300 text-sm text-foreground"
                    >
                      {item.question}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="space-y-4">
                {/* Question */}
                <div className="flex justify-end">
                  <div className="bg-gradient-gold text-off-white px-4 py-2 rounded-2xl rounded-br-md max-w-[85%] text-sm font-medium">
                    {quickQuestions[selectedQuestion].question}
                  </div>
                </div>

                {/* Answer */}
                <div className="flex justify-start">
                  <div className="bg-muted text-foreground px-4 py-3 rounded-2xl rounded-bl-md max-w-[85%] text-sm leading-relaxed">
                    {quickQuestions[selectedQuestion].answer}
                  </div>
                </div>

                {/* Back button */}
                <button
                  onClick={() => setSelectedQuestion(null)}
                  className="flex items-center gap-2 text-sm text-gold hover:text-gold/80 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Ver outras perguntas
                </button>
              </div>
            )}
          </div>

          {/* Footer CTA */}
          <div className="p-4 border-t border-border bg-sage/30">
            <p className="text-xs text-muted-foreground text-center mb-3">
              Ainda tem dúvidas? Garanta sua vaga e converse direto conosco!
            </p>
            <Button
              variant="premium"
              size="default"
              className="w-full text-sm"
              onClick={() => window.open("https://pay.kiwify.com.br/CdpFbFD", "_blank")}
            >
              Quero Garantir Minha Vaga
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatWidget;
