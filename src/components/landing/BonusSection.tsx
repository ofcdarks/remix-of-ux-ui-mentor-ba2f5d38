import bonusCommunity from "@/assets/bonus-community.png";
import bonusLiveClasses from "@/assets/bonus-live-classes.png";
import bonusEbooks from "@/assets/bonus-ebooks.png";
import bonusTherapy from "@/assets/bonus-therapy.png";

const bonuses = [
  {
    title: "Comunidade Exclusiva",
    description: "Acesso à comunidade privada de mulheres que estão na mesma jornada de transformação",
    value: "R$ 197",
    image: bonusCommunity,
  },
  {
    title: "Aulas ao Vivo Quinzenais",
    description: "Encontros ao vivo a cada 15 dias para tirar dúvidas e aprofundar o aprendizado",
    value: "R$ 147",
    image: bonusLiveClasses,
  },
  {
    title: "E-books Exclusivos",
    description: "Material de apoio em PDF para aprofundar seu estudo e reflexão pessoal",
    value: "R$ 97",
    image: bonusEbooks,
  },
  {
    title: "50% de Desconto em Terapias",
    description: "Desconto exclusivo em sessões de terapia individual, casal ou familiar para alunas da mentoria",
    value: "R$ 300",
    image: bonusTherapy,
  },
];

const BonusSection = () => {
  return (
    <section className="section-fullpage py-6 sm:py-8 md:py-12" style={{ scrollSnapAlign: 'start' }}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-rose" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-gold-horizontal opacity-30" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-gold-horizontal opacity-30" />
      <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-gold/10 blur-3xl floating-element" />
      <div className="absolute bottom-20 left-20 w-56 h-56 rounded-full bg-gold/5 blur-3xl floating-element-delayed" />

      <div className="w-full max-w-6xl mx-auto relative z-10 px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-20">
          <div className="flex justify-center mb-8 animate-fade-up">
            <div className="decorative-line" />
          </div>
          <span className="inline-block px-5 py-2 rounded-full bg-gold/10 text-gold text-sm font-bold uppercase tracking-[0.2em] mb-8 animate-fade-up delay-100 border border-gold/20">
            🎁 Bônus Exclusivos
          </span>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-foreground mb-4 sm:mb-6 animate-fade-up delay-200">
            E você ainda recebe
            <span className="block text-gradient-gold italic mt-2">+4 presentes especiais</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground animate-fade-up delay-300 font-light max-w-2xl mx-auto">
            Além de todo o conteúdo da mentoria, você leva gratuitamente:
          </p>
        </div>

        {/* Bonuses grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="animate-fade-up group"
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="relative h-full card-premium p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl md:rounded-3xl transition-all duration-500 hover:-translate-y-3 hover:shadow-gold-lg overflow-hidden">
                {/* Gift ribbon */}
                <div className="absolute -top-1 -right-1">
                  <div className="w-20 h-20 overflow-hidden">
                    <div className="absolute top-4 -right-6 w-24 bg-gradient-gold text-off-white text-xs font-bold py-1 text-center transform rotate-45 shadow-md">
                      GRÁTIS
                    </div>
                  </div>
                </div>

                {/* 3D Image */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-3 sm:mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-500 mx-auto">
                  <img 
                    src={bonus.image} 
                    alt={bonus.title}
                    className="w-full h-full object-cover rounded-xl sm:rounded-2xl shadow-lg"
                  />
                </div>

                {/* Value crossed */}
                <div className="inline-block px-2 sm:px-3 py-1 rounded-full bg-muted mb-2 sm:mb-4">
                  <span className="text-xs sm:text-sm text-muted-foreground line-through">Valor: {bonus.value}</span>
                </div>

                {/* Content */}
                <h3 className="font-display text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-foreground mb-2 sm:mb-3">
                  {bonus.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm md:text-base hidden sm:block">
                  {bonus.description}
                </p>

                {/* Bottom decoration */}
                <div className="mt-4 sm:mt-6 h-0.5 sm:h-1 bg-gradient-gold rounded-full w-8 sm:w-12 group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Total value */}
        <div className="mt-10 sm:mt-12 md:mt-16 text-center animate-fade-up delay-500">
          <div className="inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-xl sm:rounded-full bg-card border border-gold/30 shadow-lg">
            <span className="text-muted-foreground text-sm sm:text-base">Valor total dos bônus:</span>
            <span className="text-xl sm:text-2xl font-display font-bold text-gradient-gold">R$ 738</span>
            <span className="px-2 sm:px-3 py-1 rounded-full bg-gradient-gold text-off-white text-xs sm:text-sm font-bold">GRÁTIS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;