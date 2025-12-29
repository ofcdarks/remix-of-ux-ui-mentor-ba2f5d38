import moduleIdentity from "@/assets/module-identity.png";
import moduleHealing from "@/assets/module-healing.png";
import moduleWife from "@/assets/module-wife.png";
import moduleMotherhood from "@/assets/module-motherhood.png";
import moduleServant from "@/assets/module-servant.png";
import moduleHome from "@/assets/module-home.png";
import moduleBeauty from "@/assets/module-beauty.png";
import moduleBible from "@/assets/module-bible.png";
import moduleBonds from "@/assets/module-bonds.png";
import moduleBalance from "@/assets/module-balance.png";
import moduleFinances from "@/assets/module-finances.png";
import moduleFasting from "@/assets/module-fasting.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Autoplay from "embla-carousel-autoplay";
import { useRef, useState } from "react";

const modules = [
  {
    number: "01",
    title: "Identidade Real",
    description: "Descubra quem você verdadeiramente é em Cristo e resgate sua identidade como filha de Deus",
    verse: "Salmos 139:14",
    image: moduleIdentity,
  },
  {
    number: "02",
    title: "Cura da Menina e Força da Mulher",
    description: "Cure as feridas da infância e desperte a mulher forte e corajosa que existe em você",
    verse: "Isaías 61:1-3",
    image: moduleHealing,
  },
  {
    number: "03",
    title: "Esposa Excelente",
    description: "Aprenda a edificar seu casamento com sabedoria, amor e propósito divino",
    verse: "Provérbios 31:10-12",
    image: moduleWife,
  },
  {
    number: "04",
    title: "Maternidade Acolhedora",
    description: "Desenvolva uma maternidade presente, amorosa e guiada pelos princípios de Deus",
    verse: "Provérbios 22:6",
    image: moduleMotherhood,
  },
  {
    number: "05",
    title: "Coração de Serva",
    description: "Una o servir com propósito à visão estratégica para impactar vidas e gerar frutos",
    verse: "Marcos 10:45",
    image: moduleServant,
  },
  {
    number: "06",
    title: "Lar de Paz",
    description: "Transforme sua casa em um santuário de paz, ordem e presença de Deus",
    verse: "Josué 24:15",
    image: moduleHome,
  },
  {
    number: "07",
    title: "Beleza com Propósito",
    description: "Cuide de si mesma como ato de adoração e valorize a beleza que Deus colocou em você",
    verse: "1 Pedro 3:3-4",
    image: moduleBeauty,
  },
  {
    number: "08",
    title: "Boa Parte",
    description: "Aprenda a priorizar o que realmente importa, sentando aos pés de Jesus como Maria",
    verse: "Lucas 10:42",
    image: moduleBible,
  },
  {
    number: "09",
    title: "Laços que Curam",
    description: "Restaure relacionamentos familiares e construa laços saudáveis e duradouros",
    verse: "Colossenses 3:13-14",
    image: moduleBonds,
  },
  {
    number: "10",
    title: "Viver com Equilíbrio",
    description: "Encontre o equilíbrio entre as diversas áreas da vida sem perder a essência",
    verse: "Eclesiastes 3:1",
    image: moduleBalance,
  },
  {
    number: "11",
    title: "Finanças com Propósito",
    description: "Administre seus recursos com sabedoria e propósito, honrando a Deus",
    verse: "Provérbios 21:20",
    image: moduleFinances,
  },
  {
    number: "12",
    title: "O Poder do Jejum",
    description: "Descubra o poder transformador do jejum e da oração na sua vida espiritual",
    verse: "Mateus 6:16-18",
    image: moduleFasting,
  },
];

const ModulesSection = () => {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  const [selectedModule, setSelectedModule] = useState<typeof modules[0] | null>(null);
  return (
    <section className="section-fullpage py-6 sm:py-8 md:py-12" style={{ scrollSnapAlign: 'start' }}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-warm" />
      <div className="absolute inset-0 bg-gradient-radial-gold opacity-20" />

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full border border-gold/10 floating-element hidden md:block" />
      <div className="absolute bottom-20 right-10 w-56 h-56 rounded-full border border-gold/5 floating-element-delayed hidden md:block" />

      <div className="w-full max-w-7xl mx-auto relative z-10 px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="flex justify-center mb-6 sm:mb-8 animate-fade-up">
            <div className="decorative-line" />
          </div>
          <span className="inline-block px-4 sm:px-5 py-2 rounded-full bg-gold/10 backdrop-blur-sm text-gold text-xs sm:text-sm font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-6 sm:mb-8 animate-fade-up delay-100 border border-gold/20">
            12 Módulos Transformadores
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-4 sm:mb-6 animate-fade-up delay-200">
            Uma jornada completa de
            <span className="block text-gradient-gold italic mt-2">12 meses de transformação</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground animate-fade-up delay-300 font-light max-w-3xl mx-auto">
            Cada módulo foi cuidadosamente desenvolvido para guiar você em uma jornada profunda de cura, restauração e propósito
          </p>
        </div>

        {/* Modules Carousel */}
        <div className="animate-fade-up delay-400 relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[autoplayPlugin.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {modules.map((module, index) => (
                <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <div className="group h-full">
                    <div 
                      onClick={() => setSelectedModule(module)}
                      className="relative h-full bg-brown rounded-2xl p-5 sm:p-6 pt-8 border border-gold/20 hover:border-gold/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-gold overflow-visible cursor-pointer"
                    >
                      {/* Number badge */}
                      <div className="absolute top-2 right-2 w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold z-10">
                        <span className="text-off-white font-bold text-sm">{module.number}</span>
                      </div>

                      {/* Hover gradient */}
                      <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl" />

                      {/* 3D Image */}
                      <div className="w-14 h-14 sm:w-16 sm:h-16 mb-3 group-hover:scale-110 transition-transform duration-500 rounded-xl overflow-hidden shadow-md">
                        <img 
                          src={module.image} 
                          alt={module.title}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Content */}
                      <h3 className="font-display text-base sm:text-lg font-medium text-off-white mb-2 line-clamp-2">
                        {module.title}
                      </h3>
                      <p className="text-off-white/80 text-sm leading-relaxed line-clamp-3">
                        {module.description}
                      </p>

                      {/* Bible verse reference */}
                      <p className="text-off-white text-xs mt-3 italic font-medium">"{module.verse}"</p>

                      {/* Tap to read more hint */}
                      <p className="text-off-white/50 text-xs mt-2">Toque para ver mais</p>

                      {/* Decorative line */}
                      <div className="mt-4 h-0.5 bg-gradient-gold rounded-full w-8 group-hover:w-full transition-all duration-500" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 lg:-left-6 bg-card/90 border-gold/30 text-gold hover:bg-gold hover:text-off-white" />
            <CarouselNext className="hidden md:flex -right-4 lg:-right-6 bg-card/90 border-gold/30 text-gold hover:bg-gold hover:text-off-white" />
          </Carousel>
          
          {/* Bullet indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-gold/40" />
            ))}
          </div>
        </div>

        {/* Expanded module modal */}
        <Dialog open={!!selectedModule} onOpenChange={() => setSelectedModule(null)}>
          <DialogContent className="bg-brown border-gold/30 max-w-md">
            {selectedModule && (
              <>
                <DialogHeader>
                  <div className="h-1 bg-gradient-gold -mx-6 -mt-6 mb-4 rounded-t-lg" />
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden shadow-gold">
                      <img src={selectedModule.image} alt={selectedModule.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="w-8 h-8 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold mb-2">
                        <span className="text-off-white font-bold text-xs">{selectedModule.number}</span>
                      </div>
                      <DialogTitle className="text-off-white font-display font-medium">{selectedModule.title}</DialogTitle>
                    </div>
                  </div>
                </DialogHeader>
                
                {/* Full description */}
                <p className="text-off-white/80 leading-relaxed">
                  {selectedModule.description}
                </p>
                
                {/* Bible verse */}
                <p className="text-gold text-sm mt-4 italic font-medium text-center">"{selectedModule.verse}"</p>
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* Bottom highlight */}
        <div className="mt-10 sm:mt-12 text-center animate-fade-up delay-1000">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 px-5 py-3 rounded-2xl bg-card/80 backdrop-blur-sm border border-gold/20 shadow-lg">
            <img src={moduleIdentity} alt="" className="w-8 h-8 rounded-lg" />
            <p className="text-foreground font-medium text-sm text-center sm:text-left">
              <span className="text-gold font-bold">Liberação por módulo</span> — metodologia e tempo ideal para absorver cada ensinamento
            </p>
          </div>
          
          {/* Devices info */}
          <div className="mt-4 inline-flex flex-wrap justify-center items-center gap-3 px-5 py-3 rounded-2xl bg-card/60 backdrop-blur-sm border border-gold/10">
            <span className="text-muted-foreground text-sm font-medium">Assista onde quiser:</span>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { label: "Notebook" },
                { label: "Computador" },
                { label: "Celular" },
                { label: "TV" },
              ].map((device, i) => (
                <span key={i} className="inline-flex items-center gap-1 text-xs text-foreground/80 bg-gold/5 px-2 py-1 rounded-full">
                  <span>{device.label}</span>
                </span>
              ))}
            </div>
            <span className="text-gold text-sm font-medium">Navegador ou App</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;