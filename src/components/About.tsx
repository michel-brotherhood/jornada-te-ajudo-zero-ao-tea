import { Card } from "@/components/ui/card";
import { Facebook, Instagram, Youtube } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 border-2 border-primary/20">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  JornadaTEAJudo
                </span>
              </h2>
              <p className="text-xl text-muted-foreground font-semibold">
                Transformando desafios em possibilidades para famílias TEA
              </p>
            </div>
            
            <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
              <p className="mb-4 leading-relaxed">
                A jornada do diagnóstico pode ser confusa, dolorosa e solitária — mas também pode se transformar em um caminho de descobertas, conexão e crescimento.
              </p>
              
              <p className="mb-4 leading-relaxed">
                ✨ Sou <strong className="text-foreground">mãe atípica e mentora</strong> de pais e mães que estão atravessando os primeiros passos após o diagnóstico do autismo.
              </p>
              
              <p className="mb-4 leading-relaxed">
                Acolho, oriento e compartilho o que aprendi na prática e no estudo, para que outras famílias saibam: <strong className="text-primary">não estão sozinhas</strong>.
              </p>
              
              <p className="leading-relaxed">
                Aqui, cada desafio vira aprendizado. Cada dúvida, uma ponte. E cada conquista, por menor que pareça, é motivo para celebrar.
              </p>
              
              <p className="mt-6 text-lg font-semibold text-foreground">
                Porque com apoio, conhecimento e afeto, é possível transformar o que assusta… em potência.
              </p>
            </div>
            
            <div className="flex justify-center gap-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61577138218314" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
              >
                <Facebook className="w-6 h-6 text-primary" />
              </a>
              <a 
                href="https://www.instagram.com/jornadateajudo/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-coral/10 hover:bg-coral/20 transition-colors"
              >
                <Instagram className="w-6 h-6 text-coral" />
              </a>
              <a 
                href="https://www.youtube.com/channel/UCVbjFEy_We_mUFZSoDBq1zw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary/10 hover:bg-secondary/20 transition-colors"
              >
                <Youtube className="w-6 h-6 text-secondary" />
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
