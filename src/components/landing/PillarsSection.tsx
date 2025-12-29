const pillars = [
  {
    title: "Fé",
    subtitle: "Fundamento Espiritual",
    description: "Reconecte-se com Deus e restaure sua identidade espiritual através de uma base sólida na Palavra",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: "Bíblia",
    subtitle: "Estudo Profundo",
    description: "Mergulhe nas Escrituras e descubra o propósito de Deus para sua vida como mulher, esposa e mãe",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: "Terapia",
    subtitle: "Cura Emocional",
    description: "Processos terapêuticos profundos para libertar seu coração das feridas do passado e traumas",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: "Método",
    subtitle: "Estação Lar",
    description: "Transforme seu lar em um santuário de paz, amor e propósito com nosso método exclusivo",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
];

const PillarsSection = () => {
  return (
    <section className="section-fullpage bg-gradient-premium-dark text-primary-foreground py-6 sm:py-8 md:py-12" style={{ scrollSnapAlign: 'start' }}>
      {/* Premium decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gold blur-[200px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-gold blur-[250px]" />
      </div>

      {/* Golden lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-gold" />

      {/* Decorative circles */}
      <div className="absolute top-20 right-20 w-40 h-40 rounded-full border border-gold/10 floating-element" />
      <div className="absolute bottom-20 left-20 w-32 h-32 rounded-full border border-gold/5 floating-element-delayed" />

      <div className="w-full max-w-6xl mx-auto relative z-10 px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-16 md:mb-24">
          <div className="flex justify-center mb-6 sm:mb-8 animate-fade-up">
            <div className="decorative-line" />
          </div>
          <span className="inline-block px-4 sm:px-5 py-2 rounded-full bg-gold/20 text-off-white text-xs sm:text-sm font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-6 sm:mb-8 animate-fade-up delay-100 border border-gold/30">
            Os 4 Pilares da Transformação
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium mb-4 sm:mb-6 md:mb-8 animate-fade-up delay-200">
            A jornada que vai
            <span className="block text-gold-light italic mt-2">transformar sua vida</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-primary-foreground/60 max-w-3xl mx-auto animate-fade-up delay-300 font-light">
            Uma mentoria completa que integra fé, conhecimento bíblico, cura emocional e propósito prático no seu lar
          </p>
        </div>

        {/* Pillars grid - Premium cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 pt-4 sm:pt-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="animate-fade-up group"
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              <div className="relative h-full bg-primary-foreground/5 backdrop-blur-sm rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-5 md:p-8 lg:p-10 pt-6 sm:pt-8 md:pt-10 lg:pt-12 border border-primary-foreground/10 hover:border-gold/50 transition-all duration-700 hover:-translate-y-3 hover:shadow-gold overflow-visible">
                {/* Number badge */}
                <div className="absolute top-1 right-1 sm:top-2 sm:right-2 md:top-3 md:right-3 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold z-10">
                  <span className="text-off-white font-bold text-[10px] sm:text-xs md:text-sm">0{index + 1}</span>
                </div>

                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-5 transition-opacity duration-700 rounded-2xl sm:rounded-3xl" />

                {/* Icon */}
                <div className="icon-box text-off-white mb-3 sm:mb-4 md:mb-8 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14">
                  {pillar.icon}
                </div>

                {/* Content */}
                <p className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em] text-off-white mb-1 sm:mb-2 md:mb-3 font-semibold break-words">{pillar.subtitle}</p>
                <h3 className="font-display text-lg sm:text-xl md:text-3xl lg:text-4xl font-medium text-primary-foreground mb-2 sm:mb-3 md:mb-5 break-words">
                  {pillar.title}
                </h3>
                <p className="text-primary-foreground/60 leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg hidden sm:block break-words">
                  {pillar.description}
                </p>

                {/* Decorative line */}
                <div className="mt-4 sm:mt-6 md:mt-8 h-0.5 sm:h-1 bg-gradient-gold rounded-full w-12 sm:w-16 group-hover:w-full transition-all duration-700" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA teaser */}
        <div className="mt-12 sm:mt-16 md:mt-24 text-center animate-fade-up delay-700">
          <p className="text-lg text-primary-foreground/60 mb-4">
            E muito mais recursos exclusivos esperando por você
          </p>
          <div className="flex justify-center">
            <svg className="w-8 h-8 text-gold animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PillarsSection;
