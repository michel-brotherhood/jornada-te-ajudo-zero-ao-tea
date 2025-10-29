import { Card } from "@/components/ui/card";
import { Sparkles, Target, Eye, TrendingUp, Shield } from "lucide-react";

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
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            No <span className="bg-gradient-to-r from-secondary to-coral bg-clip-text text-transparent">"Do Zero ao TEA"</span>, você vai
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-secondary/50 bg-gradient-to-br from-card to-muted/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col items-start">
                <div className="mb-4 p-3 rounded-xl bg-gradient-to-br from-primary to-secondary">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
