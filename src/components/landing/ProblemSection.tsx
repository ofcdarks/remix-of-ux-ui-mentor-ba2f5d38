const ProblemSection = () => {
  const painPoints = [
    { text: "Você se sente cansada, sobrecarregada e desvalorizada", emoji: "😔", delay: 100 },
    { text: "Não sabe quem você é em Deus e qual é o seu papel no lar", emoji: "🤔", delay: 200 },
    { text: "Sente que servir sua família se tornou um peso", emoji: "😞", delay: 300 },
    { text: "Está confusa sobre como ser uma mulher segundo o coração de Deus", emoji: "💭", delay: 400 },
    { text: "Se olha no espelho e não reconhece quem deveria ser", emoji: "😢", delay: 500 },
  ];

  return (
    <section className="section-fullpage py-6 sm:py-8 md:py-12" style={{ scrollSnapAlign: 'start' }}>
      {/* Premium background */}
      <div className="absolute inset-0 bg-gradient-warm" />
      <div className="absolute inset-0 bg-gradient-radial-soft" />
      
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-gold-horizontal opacity-30" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-gold-horizontal opacity-30" />

      {/* Floating decorations */}
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full border border-gold/20 floating-element" />
      <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full border border-gold/10 floating-element-delayed" />

      <div className="w-full max-w-6xl mx-auto relative z-10 px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-16 items-center">
          {/* Left side - Emotional connection */}
          <div className="animate-slide-in-left">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-rose/60 backdrop-blur-sm border border-terracotta/20 text-terracotta mb-8">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold uppercase tracking-wider">Eu te entendo</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-foreground leading-[1.1] mb-4 sm:mb-6 md:mb-8">
              Eu sei exatamente
              <span className="block text-gradient-gold italic mt-2">como você se sente</span>
            </h2>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 sm:mb-8 md:mb-10 leading-relaxed font-light">
              Porque eu já estive nesse mesmo lugar. E posso te dizer:{" "}
              <strong className="text-foreground font-semibold">existe um caminho de volta para quem você foi chamada a ser</strong>.
            </p>

            {/* Decorative quote */}
            <div className="relative pl-6 sm:pl-8 border-l-4 border-gold/50 mb-6 sm:mb-8 md:mb-10">
              <p className="font-display text-lg sm:text-xl md:text-2xl italic text-foreground/80">
                "A restauração começa quando você decide dar o primeiro passo."
              </p>
            </div>

            <div className="flex items-center gap-3 sm:gap-5">
              <div className="decorative-line" />
              <span className="text-sm uppercase tracking-[0.2em] text-gold font-semibold">O caminho começa aqui</span>
            </div>
          </div>

          {/* Right side - Pain points with premium cards */}
          <div className="space-y-3 sm:space-y-4 md:space-y-5 animate-slide-in-right">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className="animate-fade-up group"
                style={{ animationDelay: `${point.delay}ms` }}
              >
                <div className="card-premium p-3 sm:p-4 md:p-6 rounded-xl sm:rounded-2xl flex items-center gap-2 sm:gap-3 md:gap-5 transition-all duration-500 hover:shadow-xl hover:-translate-x-2 border-l-4 border-l-terracotta/70 hover:border-l-gold">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-rose/50 flex items-center justify-center text-lg sm:text-xl md:text-3xl flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                    {point.emoji}
                  </div>
                  <p className="text-foreground font-medium text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed">{point.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Solution teaser - Premium card */}
        <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-24 pt-6 sm:pt-8 animate-fade-up delay-600">
          <div className="relative max-w-4xl mx-auto">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-radial-gold blur-3xl opacity-30" />
            
            <div className="relative card-premium p-6 sm:p-8 md:p-10 lg:p-14 pt-10 sm:pt-12 md:pt-14 lg:pt-16 rounded-2xl sm:rounded-3xl text-center border-2 border-gold/30 overflow-visible">
              {/* Top decoration */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10">
                <div className="w-16 h-16 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold-lg">
                  <svg className="w-8 h-8 text-off-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>

              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-display font-medium text-foreground mb-3 sm:mb-4">
                Mas existe um caminho para alcançar
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display text-gradient-gold italic font-semibold">
                cura, leveza e identidade restaurada
              </p>
              
              {/* Decorative bottom line */}
              <div className="flex justify-center mt-10">
                <div className="decorative-line" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
