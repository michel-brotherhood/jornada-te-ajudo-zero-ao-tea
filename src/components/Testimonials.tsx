import { Star } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
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
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-coral bg-clip-text text-transparent">
            O que dizem sobre o curso
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja como o curso transformou a vida de outras pessoas
          </p>
        </div>

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
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:shadow-2xl transition-all duration-700 hover:scale-105 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <img 
                      src={heartPuzzle} 
                      alt="Avaliação" 
                      className="w-12 h-12 md:w-14 md:h-14"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-foreground text-base md:text-lg truncate">
                        {testimonial.name}
                      </h3>
                      <p className="text-xs md:text-sm text-muted-foreground truncate">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 md:w-5 md:h-5 fill-yellow-500 text-yellow-500"
                      />
                    ))}
                  </div>

                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;