import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import heartPuzzle from "@/assets/heart-puzzle.ico";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Mãe de criança autista",
      content: "Esse curso transformou minha forma de ver o autismo. Finalmente consegui entender meu filho e criar uma conexão real com ele. Gratidão eterna!",
      rating: 5
    },
    {
      name: "João Santos",
      role: "Professor de educação especial",
      content: "Material completo e acessível. A forma como é explicado torna tudo muito mais fácil de aplicar no dia a dia. Recomendo muito!",
      rating: 5
    },
    {
      name: "Ana Paula",
      role: "Terapeuta ocupacional",
      content: "Um curso que vai além da teoria. As estratégias práticas me ajudaram tanto na vida profissional quanto pessoal. Vale cada minuto!",
      rating: 5
    },
    {
      name: "Carlos Eduardo",
      role: "Pai e educador",
      content: "Conteúdo sensível e profundo. Senti que finalmente alguém entendia as minhas dúvidas e medos. Curso essencial para todos!",
      rating: 5
    },
    {
      name: "Patrícia Oliveira",
      role: "Psicóloga infantil",
      content: "Como profissional da área, fiquei impressionada com a qualidade do conteúdo. Um material que recomendo para todos os meus pacientes!",
      rating: 5
    },
    {
      name: "Roberto Lima",
      role: "Avô de adolescente autista",
      content: "Nunca é tarde para aprender. Este curso me deu ferramentas para me conectar melhor com meu neto. Muito obrigado!",
      rating: 5
    },
    {
      name: "Juliana Costa",
      role: "Educadora especial",
      content: "Informações práticas que fazem toda a diferença no dia a dia escolar. Curso indispensável para educadores!",
      rating: 5
    },
    {
      name: "Fernando Alves",
      role: "Pai de gêmeos autistas",
      content: "Encontrei neste curso o apoio e conhecimento que tanto precisava. Hoje me sinto mais preparado para ajudar meus filhos!",
      rating: 5
    }
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 md:w-8 md:h-8 fill-coral text-coral" />
            ))}
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            O Que Nossos <span className="text-coral">Clientes Dizem</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Avaliações reais de famílias que transformaram suas jornadas
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="bg-card border border-border rounded-xl p-5 md:p-6 hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                    <div className="flex items-start gap-3 mb-4">
                      <img 
                        src={heartPuzzle} 
                        alt="" 
                        className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground text-sm md:text-base mb-1">
                          {testimonial.name}
                        </h3>
                        <div className="flex gap-0.5 mb-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3 h-3 md:w-4 md:h-4 fill-coral text-coral"
                            />
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed flex-1">
                      "{testimonial.content}"
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12" />
            <CarouselNext className="hidden md:flex -right-12" />
          </Carousel>
        </div>

        <div className="mt-8 md:mt-12 flex justify-center">
          <div className="bg-coral/10 border-2 border-coral/20 rounded-2xl p-6 md:p-8 inline-flex flex-col sm:flex-row gap-6 md:gap-12 items-center">
            <div className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-coral mb-1">
                4.9/5.0
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">
                Média de avaliações
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-coral mb-1">
                500+
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">
                Famílias transformadas
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;