import mentorPremium from "@/assets/tali-almeida.jpg";

const AboutSection = () => {
  return (
    <section className="section-fullpage py-6 sm:py-8 md:py-12" style={{ scrollSnapAlign: 'start' }}>
      {/* Premium background */}
      <div className="absolute inset-0 bg-gradient-warm" />
      <div className="absolute inset-0 bg-gradient-radial-soft" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-48 h-48 rounded-full border border-gold/10 floating-element" />
      <div className="absolute bottom-20 right-10 w-64 h-64 rounded-full border border-gold/5 floating-element-delayed" />
      
      <div className="w-full max-w-6xl mx-auto relative z-10 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-16 items-center">
          {/* Image side with premium effects */}
          <div className="relative animate-slide-in-left order-2 lg:order-1">
            {/* Decorative frames - hidden on mobile */}
            <div className="absolute -inset-4 md:-inset-6 rounded-2xl md:rounded-[2rem] border-2 border-gold/20 hidden sm:block" />
            <div className="absolute -inset-8 md:-inset-12 rounded-2xl md:rounded-[2.5rem] border border-gold/10 hidden md:block" />
            
            {/* Main image container */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <img
                src={mentorPremium}
                alt="Tali Almeida - Sua Mentora"
                className="w-full h-auto transition-transform duration-1000 group-hover:scale-105"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 via-transparent to-transparent" />
              
              {/* Signature-like element */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-card/90 backdrop-blur-md rounded-xl p-4 border border-gold/20">
                  <p className="font-display text-2xl text-gradient-gold italic">Tali Almeida</p>
                  <p className="text-sm text-muted-foreground mb-3">Sua mentora nessa jornada</p>
                  <a
                    href="https://www.instagram.com/talioficiall/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#FCAF45] text-white text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    @talioficiall
                  </a>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full bg-gold/15 blur-3xl" />
            <div className="absolute -top-8 -right-8 w-48 h-48 rounded-full bg-rose/30 blur-3xl" />

            {/* Stats floating card - repositioned to not overlap */}
            <div className="absolute -bottom-12 -right-2 sm:-bottom-14 sm:-right-6 lg:right-[-2rem] bg-card rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 border border-gold/20 floating-element z-20">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-off-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-display font-bold text-gradient-gold">+2000</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">Famílias em 9 países</p>
                </div>
              </div>
            </div>

            {/* Credential badge - repositioned for mobile */}
            <div className="absolute top-4 -left-2 sm:top-6 sm:-left-4 lg:left-[-2rem] floating-element-delayed">
              <div className="premium-badge shine-effect text-xs sm:text-sm">
                Terapeuta & Sexóloga Cristã
              </div>
            </div>
          </div>

          {/* Content side */}
          <div className="animate-slide-in-right order-1 lg:order-2">
            <div className="flex items-center gap-2 sm:gap-3 md:gap-5 mb-4 sm:mb-6 md:mb-8">
              <div className="decorative-line" />
              <span className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] text-gold font-bold">Conheça sua mentora</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-foreground leading-[1.1] mb-4 sm:mb-6 md:mb-10">
              Prazer,
              <span className="block text-gradient-gold italic mt-2">Tali Almeida</span>
            </h2>

            <div className="space-y-3 sm:space-y-4 md:space-y-6 text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed font-light">
              <p>
                <strong className="text-foreground font-semibold">Cristã, esposa, mãe e dona de casa</strong> por vocação. <strong className="text-foreground font-semibold">Terapeuta, Sexóloga Cristã, Mentora, Palestrante e Escritora</strong> por formação.
              </p>

              <p>
                <strong className="text-foreground font-semibold">Eu sei exatamente como você se sente</strong>, porque eu já estive nesse mesmo lugar.
              </p>

              <div className="relative pl-4 sm:pl-6 md:pl-8 border-l-4 border-gold/50 py-2">
                <p className="italic text-foreground/90 text-xs sm:text-sm md:text-base">
                  Houve um tempo em que me olhei no espelho e não reconheci a mulher diante de mim. Eu corria tentando ser perfeita… mas, por dentro, estava <span className="text-gold font-medium">vazia e desconectada de Deus</span>.
                </p>
              </div>

              <p>
                O lar tinha se tornado um peso. A rotina me sufocava. E eu acreditava que Deus tinha me esquecido.
              </p>

              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-foreground font-display font-medium py-2 sm:py-4">
                Até que Ele me mostrou o caminho da <span className="text-gradient-gold italic">restauração</span>.
              </p>

              <p>
                Quando entendi que ser mulher no lar não era um fardo, mas um <strong className="text-foreground">chamado divino</strong>, minha vida mudou completamente. E agora quero te mostrar esse mesmo caminho.
              </p>

              <p>
                Acredito que <strong className="text-foreground">cura também é legado</strong>. É sobre <span className="text-gold font-medium">interromper ciclos que adoecem</span> e <span className="text-gold font-medium">curar as feridas emocionais</span> para viver em plenitude.
              </p>
            </div>

            {/* Featured quotes */}
            <div className="mt-6 sm:mt-8 md:mt-10 space-y-3 sm:space-y-4">
              <div className="relative p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-gradient-card border border-gold/20 shadow-lg">
                <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
                  <span className="text-off-white text-sm sm:text-lg">"</span>
                </div>
                <p className="text-foreground font-display text-base sm:text-lg md:text-xl lg:text-2xl italic leading-relaxed">
                  Onde tem um lar bem cuidado, tem uma mulher cumprindo seu chamado.
                </p>
                <p className="text-gold font-semibold mt-2 sm:mt-3 text-xs sm:text-sm">— Tali Almeida</p>
              </div>

              <div className="relative p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-gradient-card border border-gold/20 shadow-lg">
                <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold">
                  <span className="text-off-white text-sm sm:text-lg">"</span>
                </div>
                <p className="text-foreground font-display text-base sm:text-lg md:text-xl lg:text-2xl italic leading-relaxed">
                  Nem toda mulher foi chamada exclusivamente para o lar, mas toda mulher foi chamada para honrar o lar que Deus confiou a ela.
                </p>
                <p className="text-gold font-semibold mt-2 sm:mt-3 text-xs sm:text-sm">— Tali Almeida</p>
              </div>
            </div>

            {/* Vocation and credentials as text */}
            <div className="mt-6 sm:mt-8 md:mt-10 space-y-2 sm:space-y-3 md:space-y-4">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground leading-relaxed">
                <span className="text-gold font-semibold">Por vocação:</span> Cristã, Esposa, Mãe e Dona de Casa.
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground leading-relaxed">
                <span className="text-gold font-semibold">Por formação:</span> Terapeuta, Sexóloga Cristã, Mentora, Palestrante e Escritora.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
