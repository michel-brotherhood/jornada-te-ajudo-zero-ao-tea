import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gift, Image, Calendar, BookOpen, Heart, MessageSquare, Star } from "lucide-react";
import { useCountdown } from "@/hooks/useCountdown";
import { useEffect, useRef, useState } from "react";

const Bonus = () => {
  const promoEndDate = new Date('2025-11-06T21:00:00');
  const timeLeft = useCountdown(promoEndDate);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  
  const scrollToEnroll = () => {
    document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setVisibleCards((prev) => new Set(prev).add(index));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const bonusMaterials = [
    {
      icon: Image,
      title: "Recursos Visuais",
      description: "Materiais visuais para comunicação e organização da rotina"
    },
    {
      icon: Calendar,
      title: "Rotinas Estruturadas",
      description: "Quadros de rotina para criar previsibilidade no dia a dia"
    },
    {
      icon: BookOpen,
      title: "Atividades Práticas",
      description: "Exercícios prontos para estimular o desenvolvimento"
    },
    {
      icon: Heart,
      title: "Regulação Emocional",
      description: "Ferramentas para ajudar na gestão das emoções"
    },
    {
      icon: MessageSquare,
      title: "Estímulo à Linguagem",
      description: "Estratégias visuais para desenvolver a comunicação"
    },
    {
      icon: Star,
      title: "Autonomia",
      description: "Recursos para promover independência nas atividades"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <Gift className="w-8 h-8 text-primary animate-pulse" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Presente Especial
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Quem entra no curso não recebe só teoria. Eu preparei{" "}
            <span className="font-semibold text-primary">6 materiais visuais e práticos</span>{" "}
            pra te ajudar no dia a dia com a criança — seja em casa, na escola ou na clínica.
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-4 leading-relaxed">
            São recursos pensados pra estimular{" "}
            <span className="font-semibold text-foreground">autonomia, linguagem, previsibilidade e regulação emocional</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {bonusMaterials.map((material, index) => {
            const Icon = material.icon;
            const isVisible = visibleCards.has(index);
            return (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-primary/20 h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {material.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {material.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <Gift className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Materiais Prontos para Usar
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Todos os recursos podem ser impressos, personalizados e aplicados imediatamente 
                no seu contexto — seja você mãe, pai, professor ou terapeuta.
              </p>
              <Button
                size="lg"
                className="botaocta w-full sm:w-auto text-sm sm:text-base md:text-lg px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-700 hover:scale-105 shadow-lg hover:shadow-xl animate-pulse"
                style={{ animationDuration: '4s' }}
                onClick={scrollToEnroll}
              >
                {timeLeft.isExpired ? 'Quero me inscrever agora' : 'Quero me inscrever com 10% OFF'}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Bonus;
