import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Mãe de criança autista",
      content: "Esse curso transformou minha forma de ver o autismo. Finalmente consegui entender meu filho e criar uma conexão real com ele. Gratidão eterna!",
      rating: 5,
      image: "👩‍🦱"
    },
    {
      name: "João Santos",
      role: "Professor de educação especial",
      content: "Material completo e acessível. A forma como é explicado torna tudo muito mais fácil de aplicar no dia a dia. Recomendo muito!",
      rating: 5,
      image: "👨‍🏫"
    },
    {
      name: "Ana Paula",
      role: "Terapeuta ocupacional",
      content: "Um curso que vai além da teoria. As estratégias práticas me ajudaram tanto na vida profissional quanto pessoal. Vale cada minuto!",
      rating: 5,
      image: "👩‍⚕️"
    },
    {
      name: "Carlos Eduardo",
      role: "Pai e educador",
      content: "Conteúdo sensível e profundo. Senti que finalmente alguém entendia as minhas dúvidas e medos. Curso essencial para todos!",
      rating: 5,
      image: "👨‍👦"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:shadow-2xl transition-all duration-700 hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl md:text-5xl">{testimonial.image}</div>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;