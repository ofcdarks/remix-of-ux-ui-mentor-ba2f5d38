import { Button } from "@/components/ui/button";

const FooterSection = () => {
  return (
    <footer className="section-fullpage py-8 md:py-12" style={{ scrollSnapAlign: 'start' }}>
      {/* Final CTA Section - Maximum impact */}
      <div className="flex-1 flex flex-col justify-center bg-gradient-warm relative">
        {/* Decorative */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-gold/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-radial-gold opacity-20" />

        <div className="w-full max-w-4xl mx-auto text-center relative z-10 px-5 sm:px-8 md:px-12">
          <div className="flex justify-center mb-8 animate-fade-up">
            <div className="decorative-line" />
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-foreground mb-8 animate-fade-up delay-100">
            Está pronta para viver sua
            <span className="block text-gradient-gold italic mt-4">Estação Lar e Legado?</span>
          </h2>

          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-up delay-200 font-light leading-relaxed">
            Dê o primeiro passo para restaurar seu coração, alinhar seu lar à vontade de Deus e
            viver seu chamado feminino com <strong className="text-foreground">leveza, sabedoria e propósito</strong>.
          </p>

          <div className="animate-fade-up delay-300 mb-8">
            <Button
              variant="premium"
              size="3xl"
              className="group pulse-glow text-base sm:text-lg px-6 sm:px-10 py-5 sm:py-6 whitespace-normal h-auto max-w-full"
              onClick={() => window.open("https://pay.kiwify.com.br/CdpFbFD", "_blank")}
            >
              <span className="text-center leading-tight">Sim, Quero Minha Transformação Agora</span>
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 transition-transform duration-700 group-hover:translate-x-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </div>

          {/* Final trust badges */}
          <div className="flex flex-wrap justify-center gap-6 animate-fade-up delay-400">
            {[
              { icon: "shield", text: "Compra Segura" },
              { icon: "check", text: "Garantia 7 Dias" },
              { icon: "star", text: "+2000 Famílias em 9 Países" },
              { icon: "heart", text: "98% Satisfação" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  {item.icon === "shield" && (
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  )}
                  {item.icon === "check" && (
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  )}
                  {item.icon === "star" && (
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  )}
                  {item.icon === "heart" && (
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  )}
                </svg>
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer info */}
      <div className="bg-gradient-premium text-off-white px-4 py-16">
        <div className="w-full max-w-6xl mx-auto px-5 sm:px-8 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            {/* Logo/Brand */}
            <div className="text-center md:text-left">
              <p className="font-display text-3xl font-medium text-gold-light mb-2">
                Estação Lar & Legado
              </p>
              <p className="text-off-white/60">
                Mentoria por Tali Almeida
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-8 text-sm text-off-white/60">
              <a href="#" className="hover:text-gold transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                Política de Privacidade
              </a>
              <a href="mailto:contato@estacaolar.com.br" className="hover:text-gold transition-colors">
                Contato
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="my-10 h-px bg-gradient-gold-horizontal opacity-20" />

          {/* Copyright & Disclaimer */}
          <div className="text-center space-y-4">
            <p className="text-sm text-off-white/60">
              © {new Date().getFullYear()} Estação Lar & Legado. Todos os direitos reservados.
            </p>
            <p className="text-xs text-off-white/40 max-w-3xl mx-auto leading-relaxed">
              Este site não faz parte do website do Facebook ou Facebook Inc. Além disso, este site NÃO é
              endossado pelo Facebook de nenhuma maneira. FACEBOOK é uma marca registrada de FACEBOOK, Inc.
              Os resultados podem variar de pessoa para pessoa.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
