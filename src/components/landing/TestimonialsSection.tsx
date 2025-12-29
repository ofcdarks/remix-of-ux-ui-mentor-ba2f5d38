import { Card, CardContent } from "@/components/ui/card";
import luxurySilkBg from "@/assets/luxury-silk-bg.jpg";
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

const testimonials = [
  {
    name: "Ana do Canadá",
    highlight: "A aula da carta do Pai foi um divisor para mim",
    quote:
      "Tali eu preciso compartilhar com vc e te agradecer. Entrei na Mentoria achando que era sobre casa, e descobri que era sobre cura, e eu precisava tanto dessa cura. Sou pastora ativa na igreja, lidero mulheres, sirvo famílias mas meu coração encontrou na sua mentoria a cura que tanto precisava.",
    initials: "AC",
    location: "Canadá",
    rating: 5,
    featured: true,
  },
  {
    name: "Aluna Transformada",
    highlight: "Curada de abuso sexual através da mentoria",
    quote:
      "Vc tem sido uma benção na minha vida. Através da mentoria estação lar, eu fui curada de abuso sexual que sofri na minha adolescência, e eu nem sabia, mas Jesus me revelou e hoje eu posso entender o porquê de tudo que vivi.",
    initials: "AT",
    location: "Brasil",
    rating: 5,
  },
  {
    name: "Michelle Barbosa",
    highlight: "Tem recebido um bálsamo",
    quote:
      "Tem sido a resposta de oração mais sincera que já tive. Eu fugia da frustração do lar indo para a igreja. Na mentoria, Deus me mostrou que os detalhes importam.",
    initials: "MB",
    location: "Brasil",
    rating: 5,
  },
  {
    name: "Nayara Azevedo",
    highlight: "Encontrou cura e libertação",
    quote:
      "No módulo sobre rejeição, encontrei a raiz da maior dor da minha vida. Carreguei palavras que me feriram profundamente desde a infância. Hoje entendi por que sempre busquei aprovação. Foi libertador!",
    initials: "NA",
    location: "Brasil",
    rating: 5,
  },
  {
    name: "Juliana Lacerda",
    highlight: "Restaurou a filiação na paternidade de Deus",
    quote:
      "Eu sou ativa no ministério mas nas aulas encontrei filiação na paternidade de Deus. Recebi cura do ativismo, descanso para o coração e direção para viver meu propósito no lar.",
    initials: "JL",
    location: "Brasil",
    rating: 5,
  },
  {
    name: "Mayra Duarts",
    highlight: "Curada no propósito de Ester",
    quote:
      "São tantos testemunhos, tantas bênçãos que é até difícil de listar. Deus tem feito grandes obras na minha vida e na minha casa. Fui desafiada no propósito Mulher Virtuosa.",
    initials: "MD",
    location: "Brasil",
    rating: 5,
  },
  {
    name: "Faty Desanio",
    highlight: "Realizou o sonho de lar saudável",
    quote:
      "Sempre tive complexo de inferioridade por não trabalhar fora. Depois do CIE dei valor ao tempo que Deus separou para cuidar do meu lar e da minha família. Foram tantas mudanças!",
    initials: "FD",
    location: "Brasil",
    rating: 5,
  },
  {
    name: "Aluna Curada",
    highlight: "Curada da rejeição desde a infância",
    quote:
      "Tali, que aula foi essa! Eu carregava rejeição desde criança e hoje me sinto finalmente amada. Apenas não pare Tali, vc tem sido cura para nossas vidas.",
    initials: "AC",
    location: "Brasil",
    rating: 5,
  },
  {
    name: "Aluna Transformada",
    highlight: "Deus me apresentou você",
    quote:
      "Deus me Apresentou vc! Não foi algoritmos, foi o céu! A alma da gente chora pelo céu, tem fome e sede que não para. O que outro dia foi dor em vc hoje é cura pra outras mulheres.",
    initials: "TP",
    location: "Brasil",
    rating: 5,
  },
  {
    name: "Elisabeth",
    highlight: "Encontrou simplicidade e excelência",
    quote:
      "Seu nome é profético. Chamada para levantar e posicionar mulheres. Encontrei em você simplicidade, transparência, profundidade, excelência.",
    initials: "EL",
    location: "Brasil",
    rating: 5,
  },
];

const stats = [
  { number: "2000+", label: "Famílias em 9 Países", icon: "users" },
  { number: "12", label: "Meses de Jornada", icon: "calendar" },
  { number: "98%", label: "Taxa de Satisfação", icon: "star" },
  { number: "4.9", label: "Avaliação Média", icon: "heart" },
];

const TestimonialsSection = () => {
  const autoplayPlugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  const [selectedTestimonial, setSelectedTestimonial] = useState<typeof testimonials[0] | null>(null);
  return (
    <section className="section-fullpage py-6 sm:py-8 md:py-12" style={{ scrollSnapAlign: 'start' }}>
      {/* Luxury background */}
      <div className="absolute inset-0">
        <img
          src={luxurySilkBg}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>

      {/* Decorative elements - hidden on mobile */}
      <div className="absolute top-1/4 left-10 w-40 h-40 rounded-full border border-gold/10 floating-element hidden md:block" />
      <div className="absolute bottom-1/4 right-10 w-56 h-56 rounded-full border border-gold/5 floating-element-delayed hidden md:block" />

      <div className="w-full max-w-7xl mx-auto relative z-10 px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Section header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="flex justify-center mb-6 sm:mb-8 animate-fade-up">
            <div className="decorative-line" />
          </div>
          <span className="inline-block px-4 sm:px-5 py-2 rounded-full bg-gold/10 backdrop-blur-sm text-gold text-xs sm:text-sm font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-6 sm:mb-8 animate-fade-up delay-100 border border-gold/20">
            Transformações Reais
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-foreground mb-4 sm:mb-6 animate-fade-up delay-200">
            Quem já vive a <span className="text-gradient-gold italic">Estação Lar</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground animate-fade-up delay-300 font-light">
            teve resultados extraordinários assim:
          </p>
        </div>

        {/* Testimonials Carousel */}
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
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <Card
                    onClick={() => setSelectedTestimonial(testimonial)}
                    className={`h-full bg-card/95 backdrop-blur-md border-none overflow-hidden group transition-all duration-500 hover:-translate-y-2 cursor-pointer ${
                      testimonial.featured ? 'shadow-gold-lg' : 'shadow-xl'
                    }`}
                  >
                    {/* Premium gradient border */}
                    <div className="h-1 bg-gradient-gold" />
                    
                    <CardContent className="p-5 sm:p-6 relative">
                      {/* Featured badge */}
                      {testimonial.featured && (
                        <div className="absolute -top-1 right-4">
                          <span className="px-3 py-1 bg-gradient-gold text-off-white text-xs font-bold uppercase tracking-wider rounded-b-lg shadow-gold">
                            Destaque
                          </span>
                        </div>
                      )}

                      {/* Quote icon */}
                      <div className="mb-3">
                        <svg className="w-8 h-8 text-gold/20" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                      </div>

                      {/* Stars */}
                      <div className="flex gap-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-4 h-4 text-gold"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      {/* Quote */}
                      <blockquote className="text-foreground text-sm sm:text-base leading-relaxed mb-5 font-light line-clamp-5">
                        "{testimonial.quote}"
                      </blockquote>

                      {/* Tap to read more hint */}
                      <p className="text-gold/60 text-xs mb-3">Toque para ler mais</p>

                      {/* Author */}
                      <div className="flex items-center gap-3 pt-4 border-t border-border">
                        <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center text-off-white font-bold text-sm shadow-gold flex-shrink-0">
                          {testimonial.initials}
                        </div>
                        <div className="min-w-0">
                          <p className="font-bold text-foreground text-sm truncate">{testimonial.name}</p>
                          <p className="text-gold font-semibold text-xs truncate">{testimonial.highlight}</p>
                          <p className="text-muted-foreground text-xs">{testimonial.location}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 lg:-left-6 bg-card/90 border-gold/30 text-gold hover:bg-gold hover:text-off-white" />
            <CarouselNext className="hidden md:flex -right-4 lg:-right-6 bg-card/90 border-gold/30 text-gold hover:bg-gold hover:text-off-white" />
          </Carousel>
          
          {/* Bullet indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {[0, 1, 2].map((i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-gold/40" />
            ))}
          </div>
        </div>

        {/* Expanded testimonial modal */}
        <Dialog open={!!selectedTestimonial} onOpenChange={() => setSelectedTestimonial(null)}>
          <DialogContent className="bg-card border-gold/20 max-w-lg">
            {selectedTestimonial && (
              <>
                <DialogHeader>
                  <div className="h-1 bg-gradient-gold -mx-6 -mt-6 mb-4 rounded-t-lg" />
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-gold flex items-center justify-center text-off-white font-bold shadow-gold">
                      {selectedTestimonial.initials}
                    </div>
                    <div>
                      <DialogTitle className="text-foreground font-bold">{selectedTestimonial.name}</DialogTitle>
                      <p className="text-gold font-semibold text-sm">{selectedTestimonial.highlight}</p>
                      <p className="text-muted-foreground text-xs">{selectedTestimonial.location}</p>
                    </div>
                  </div>
                </DialogHeader>
                
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(selectedTestimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                
                {/* Full quote */}
                <blockquote className="text-foreground leading-relaxed font-light">
                  "{selectedTestimonial.quote}"
                </blockquote>
              </>
            )}
          </DialogContent>
        </Dialog>

        {/* Stats section - Premium counters */}
        <div className="mt-10 sm:mt-12 md:mt-16 animate-fade-up delay-600">
          <div className="card-premium p-5 sm:p-6 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center group">
                  <div className="flex justify-center mb-2 sm:mb-3">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-gold">
                      <svg className="w-5 h-5 sm:w-6 sm:h-6 text-off-white" fill="currentColor" viewBox="0 0 20 20">
                        {stat.icon === "users" && (
                          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        )}
                        {stat.icon === "calendar" && (
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        )}
                        {stat.icon === "star" && (
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        )}
                        {stat.icon === "heart" && (
                          <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                        )}
                      </svg>
                    </div>
                  </div>
                  <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gradient-gold mb-1">{stat.number}</p>
                  <p className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.1em] text-muted-foreground font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;