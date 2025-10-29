import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Shield } from "lucide-react";

const CTA = () => {
  const includes = [
    "Aulas gravadas completas sobre autismo",
    "Materiais complementares em PDF",
    "Exemplos práticos e atividades aplicáveis",
    "Acesso por 1 ano com atualizações",
    "Certificado digital de conclusão",
    "Suporte via comunidade"
  ];

  return (
    <section id="enroll" className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 border-4 border-primary/20 shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Transforme <span className="bg-gradient-to-r from-primary via-secondary to-coral bg-clip-text text-transparent">conhecimento em amor</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Comece sua jornada de compreensão e acolhimento hoje
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-center">O que está incluído:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {includes.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 p-1 rounded-full bg-primary/20">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-muted/50 rounded-lg p-6 mb-8">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="font-semibold text-lg">Garantia de 7 dias</span>
              </div>
              <p className="text-center text-sm text-muted-foreground">
                Se não for o que você esperava, devolvemos 100% do seu investimento
              </p>
            </div>
            
            <div className="text-center">
              <Button 
                size="lg" 
                className="text-xl px-12 py-8 bg-gradient-to-r from-primary via-secondary to-coral hover:opacity-90 transition-opacity shadow-xl hover:shadow-2xl w-full md:w-auto"
              >
                Quero começar agora
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Acesso imediato após a confirmação do pagamento
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CTA;
