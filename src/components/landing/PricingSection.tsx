import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useOfferCountdown } from "@/hooks/useOfferCountdown";

import iconAccess from "@/assets/icon-access.png";
import iconVideo from "@/assets/icon-video.png";
import iconTarget from "@/assets/icon-target.png";
import iconBooks from "@/assets/icon-books.png";
import iconSupport from "@/assets/icon-support.png";
import bonusTherapy from "@/assets/bonus-therapy.png";
import iconTrophy from "@/assets/icon-trophy.png";
import bonusCommunity from "@/assets/bonus-community.png";

const included = [
  { text: "12 meses de acesso completo à plataforma", image: iconAccess },
  { text: "Aulas em vídeo gravadas", image: iconVideo },
  { text: "Aulas ao vivo quinzenais", image: iconTarget },
  { text: "Comunidade exclusiva de mulheres", image: bonusCommunity },
  { text: "Material de apoio em PDF", image: iconBooks },
  { text: "Suporte direto com a mentora", image: iconSupport },
  { text: "50% de desconto em sessões de terapia individual, casal ou familiar", image: bonusTherapy },
  { text: "Certificado de conclusão", image: iconTrophy },
];

const PricingSection = () => {
  const timeLeft = useOfferCountdown();

  return (
    <section className="section-fullpage py-8 md:py-12" id="pricing" style={{ scrollSnapAlign: 'start' }}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-warm" />
      <div className="absolute inset-0 bg-gradient-radial-gold opacity-30" />

      {/* Decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-40 bg-gradient-to-b from-gold/50 to-transparent" />

      <div className="w-full max-w-4xl mx-auto relative z-10 px-5 sm:px-8 md:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-8 animate-fade-up">
            <div className="decorative-line" />
          </div>
          <span className="inline-block px-5 py-2 rounded-full bg-gold/10 text-gold text-sm font-bold uppercase tracking-[0.2em] mb-8 animate-fade-up delay-100 border border-gold/20">
            💎 Oferta Exclusiva
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-foreground mb-6 animate-fade-up delay-200">
            Garanta sua vaga na
            <span className="block text-gradient-gold italic mt-2">Mentoria Estação Lar</span>
          </h2>
        </div>

        {/* Urgency Timer - Premium style */}
        <div className="mb-12 animate-fade-up delay-300">
          <div className="bg-gradient-premium rounded-3xl p-8 text-center shadow-2xl border border-gold/20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
              <p className="text-off-white/90 text-lg font-medium uppercase tracking-wider">
                Oferta por tempo limitado
              </p>
            </div>
            <div className="flex justify-center gap-4 md:gap-6">
              {[
                { value: timeLeft.hours, label: "Horas" },
                { value: timeLeft.minutes, label: "Minutos" },
                { value: timeLeft.seconds, label: "Segundos" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="bg-off-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 min-w-[90px] md:min-w-[110px] border border-gold/20">
                    <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-off-white font-display drop-shadow-lg">
                      {String(item.value).padStart(2, "0")}
                    </p>
                  </div>
                  <p className="text-xs md:text-sm text-off-white/60 uppercase tracking-widest mt-3">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Pricing Card - Ultra premium */}
        <Card className="animate-fade-up delay-400 bg-card border-none shadow-2xl overflow-hidden max-w-3xl mx-auto relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-radial-gold opacity-20 blur-3xl" />
          
          {/* Premium ribbon */}
          <div className="relative bg-gradient-gold py-4 text-center">
            <p className="text-off-white font-bold uppercase tracking-[0.2em] text-sm md:text-base">
              🎁 Condição Especial • Somente Nesta Página
            </p>
          </div>

          <CardContent className="relative p-8 md:p-12 lg:p-16">
            {/* Price display - Maximum impact */}
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-2 rounded-full bg-destructive/10 mb-4">
                <p className="text-destructive font-semibold">
                  <span className="line-through text-lg">De R$ 497,00</span>
                  <span className="ml-2 text-sm">(-60% OFF)</span>
                </p>
              </div>
              
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-2xl font-medium text-muted-foreground">12x de</span>
              </div>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-3xl font-display font-bold text-foreground">R$</span>
                <span className="text-8xl md:text-9xl font-display font-bold text-gradient-shine">20</span>
                <span className="text-4xl font-display font-bold text-gradient-gold">,37</span>
              </div>
              
              <p className="text-xl text-muted-foreground mt-4">
                ou <strong className="text-foreground text-2xl">R$ 197,00</strong> à vista
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Pagamento único sem cobrança mensal
              </p>

              {/* Savings highlight */}
              <div className="inline-flex items-center gap-3 mt-6 px-6 py-3 rounded-full bg-sage border border-gold/20">
                <span className="text-2xl">🔥</span>
                <span className="text-foreground font-bold">Economia de R$ 300,00</span>
              </div>
            </div>

            {/* What's included - Premium grid */}
            <div className="mb-12">
              <p className="font-display text-2xl font-medium text-foreground mb-8 text-center">
                Tudo que você recebe:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {included.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-gradient-card border border-gold/10 hover:border-gold/30 hover:shadow-md transition-all duration-300"
                  >
                    <img src={item.image} alt="" className="w-10 h-10 rounded-lg object-cover shadow-sm" />
                    <span className="text-foreground font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button - Maximum impact */}
            <div className="mb-10">
              <Button
                variant="premium"
                size="3xl"
                className="w-full group pulse-glow text-base sm:text-lg px-4 sm:px-8 py-5 sm:py-6 whitespace-normal h-auto"
                onClick={() => window.open("https://pay.kiwify.com.br/CdpFbFD", "_blank")}
              >
                <span className="text-center leading-tight">Sim, Quero Começar Minha Transformação</span>
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 transition-transform duration-700 group-hover:translate-x-3 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <p className="text-center text-sm text-muted-foreground mt-4">
                ⚡ Acesso imediato após a confirmação do pagamento
              </p>
            </div>

            {/* Guarantee - Ultra premium */}
            <div className="relative p-8 rounded-3xl bg-gradient-card border-2 border-gold/30 overflow-hidden">
              {/* Decorative corners */}
              <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-gold rounded-tl-lg" />
              <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-gold rounded-tr-lg" />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-gold rounded-bl-lg" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-gold rounded-br-lg" />
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
                <div className="w-20 h-20 rounded-full bg-gradient-gold flex items-center justify-center flex-shrink-0 shadow-gold-lg animate-glow">
                  <svg className="w-10 h-10 text-off-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-2">
                    Garantia Incondicional de 7 Dias
                  </p>
                  <p className="text-lg text-muted-foreground">
                    Se por qualquer motivo você não ficar satisfeita, devolvemos <strong className="text-foreground">100% do seu investimento</strong>. Sem burocracia, sem perguntas.
                  </p>
                </div>
              </div>
            </div>

            {/* Payment security */}
            <div className="mt-10 text-center">
              <p className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">Pagamento 100% seguro via Pix e Cartão de Crédito</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PricingSection;
