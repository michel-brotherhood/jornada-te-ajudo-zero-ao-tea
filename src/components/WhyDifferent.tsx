import { Card } from "@/components/ui/card";
import { Heart, Video, Clock, Award } from "lucide-react";

const WhyDifferent = () => {
  const features = [
    {
      icon: Video,
      title: "Aulas gravadas",
      description: "Materiais complementares para assistir no seu ritmo"
    },
    {
      icon: Heart,
      title: "Linguagem acessível",
      description: "Exemplos reais e atividades práticas do que realmente funciona"
    },
    {
      icon: Clock,
      title: "Acesso por 1 ano",
      description: "Com atualizações constantes de conteúdo"
    },
    {
      icon: Award,
      title: "Certificado",
      description: "Certificado de conclusão ao final do curso"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Heart className="w-12 h-12 text-coral mx-auto mb-4 fill-coral" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Por que este curso é <span className="bg-gradient-to-r from-coral to-accent bg-clip-text text-transparent">diferente?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Porque foi criado a partir da <strong className="text-foreground">vida real</strong> — dos estudos, das tentativas, vitórias e aprendizados com minha filha Luiza, autista não verbal nível 3. Cada módulo une <strong className="text-primary">ciência e sensibilidade</strong>, transformando teoria em prática, e conhecimento em acolhimento e amor.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-coral/30 bg-card"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-coral/20 to-accent/20">
                    <feature.icon className="w-6 h-6 text-coral" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary via-secondary to-coral text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Chegou a hora de entender, agir e transformar
            </h3>
            <p className="text-lg md:text-xl opacity-95 max-w-2xl mx-auto">
              Do Zero ao TEA é mais do que aprender sobre autismo. É aprender a olhar com empatia, agir com amor e acolher com consciência.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
