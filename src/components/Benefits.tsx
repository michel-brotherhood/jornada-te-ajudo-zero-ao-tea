import { Card } from "@/components/ui/card";
import { Sparkles, Target, Eye, TrendingUp, Shield, LineChart } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: Sparkles,
      title: "Compreensão Clara",
      description: "Entenda o autismo de forma descomplicada, sem jargões técnicos"
    },
    {
      icon: Target,
      title: "Estratégias Práticas",
      description: "Aprenda a lidar com os desafios do dia a dia de forma efetiva"
    },
    {
      icon: Eye,
      title: "Visão Empática",
      description: "Desenvolva empatia sobre comportamento, rotina e comunicação"
    },
    {
      icon: TrendingUp,
      title: "Ação e Evolução",
      description: "Transforme informação em ação e ação em evolução real"
    },
    {
      icon: Shield,
      title: "Segurança e Apoio",
      description: "Sinta-se seguro(a) para acolher e apoiar o desenvolvimento"
    },
    {
      icon: LineChart,
      title: "Metodologia avançada",
      description: "Nosso método foi testado e podemos apresentar a evolução dos resultados com base no uso"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3 px-2">
            <span className="inline-block animate-float-gentle">Do Zero ao TEA</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-4 px-2">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold">
              Você vai:
            </span>
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-5 sm:p-6 md:p-8 hover:shadow-xl transition-all duration-500 border-2 hover:border-secondary/50 bg-gradient-to-br from-card to-muted/20"
            >
              <div className="flex flex-col items-start">
                <div className="mb-3 md:mb-4 p-2 md:p-3 rounded-xl bg-gradient-to-br from-primary to-secondary">
                  <benefit.icon className="w-5 h-5 md:w-6 md:h-6 text-white animate-icon-bounce" style={{ animationDelay: `${index * 0.2}s` }} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 md:mb-3">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
