import { Card } from "@/components/ui/card";
import { Users, GraduationCap, Heart, Stethoscope } from "lucide-react";

const ForWho = () => {
  const audience = [
    {
      icon: Heart,
      title: "Pais e Mães",
      description: "De crianças autistas (diagnosticadas ou em investigação)",
      color: "text-coral"
    },
    {
      icon: GraduationCap,
      title: "Professores",
      description: "Da educação infantil e anos iniciais",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Profissionais da Inclusão",
      description: "Assistentes, acompanhantes terapêuticas e cuidadores",
      color: "text-secondary"
    },
    {
      icon: Stethoscope,
      title: "Terapeutas e Estudantes",
      description: "Iniciantes ou estudantes da área da infância",
      color: "text-accent"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Pra quem é <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">este curso</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Para qualquer pessoa que queira entender o autismo com sensibilidade, acolhimento e responsabilidade.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {audience.map((item, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30"
            >
              <div className="flex flex-col items-center text-center">
                <div className={`mb-4 p-4 rounded-full bg-gradient-to-br from-background to-muted ${item.color}`}>
                  <item.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForWho;
