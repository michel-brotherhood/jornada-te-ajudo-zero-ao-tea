import { Card } from "@/components/ui/card";
import { Facebook, Instagram, Youtube } from "lucide-react";
import carolSolo from "@/assets/carol-solo.webp";
import carolWithDaughter from "@/assets/carol-with-daughter.webp";

const About = () => {
  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Card className="p-6 sm:p-8 md:p-10 lg:p-12 border-2 border-primary/20">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 px-2">
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Sobre a Carol Magalhães
                </span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground font-semibold px-2">
                Mãe atípica, mentora e criadora do JornadaTEAJudo
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-start mb-6 md:mb-8">
              <div className="order-2 md:order-1 space-y-3 md:space-y-4 lg:space-y-6">
                <img 
                  src={carolSolo} 
                  alt="Carol Magalhães - Mentora e criadora do JornadaTEAJudo" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover animate-fade-in"
                />
                <img 
                  src={carolWithDaughter} 
                  alt="Carol Magalhães com sua filha" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover animate-fade-in"
                  style={{ animationDelay: '0.2s' }}
                />
              </div>
              
              <div className="order-1 md:order-2 prose prose-sm sm:prose-base lg:prose-lg max-w-none text-muted-foreground">
                <p className="mb-3 md:mb-4 leading-relaxed text-sm sm:text-base">
                  A jornada do diagnóstico pode ser confusa, dolorosa e solitária — mas também pode se transformar em um caminho de descobertas, conexão e crescimento.
                </p>
                
                <p className="mb-3 md:mb-4 leading-relaxed text-sm sm:text-base">
                  ✨ Sou <strong className="text-foreground">mãe atípica e mentora</strong> de pais e mães que estão atravessando os primeiros passos após o diagnóstico do autismo.
                </p>
                
                <p className="mb-3 md:mb-4 leading-relaxed text-sm sm:text-base">
                  Acolho, oriento e compartilho o que aprendi na prática e no estudo, para que outras famílias saibam: <strong className="text-primary">não estão sozinhas</strong>.
                </p>
                
                <p className="leading-relaxed text-sm sm:text-base">
                  Aqui, cada desafio vira aprendizado. Cada dúvida, uma ponte. E cada conquista, por menor que pareça, é motivo para celebrar.
                </p>
                
                <p className="mt-4 md:mt-6 text-base sm:text-lg font-semibold text-foreground">
                  Porque com apoio, conhecimento e afeto, é possível transformar o que assusta… em potência.
                </p>
              </div>
            </div>
            
            <div className="flex justify-center gap-3 md:gap-4">
              <a 
                href="https://www.facebook.com/profile.php?id=61577138218314" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 md:p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-500"
              >
                <Facebook className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </a>
              <a 
                href="https://www.instagram.com/jornadateajudo/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 md:p-3 rounded-full bg-coral/10 hover:bg-coral/20 transition-colors duration-500"
              >
                <Instagram className="w-5 h-5 md:w-6 md:h-6 text-coral" />
              </a>
              <a 
                href="https://www.youtube.com/channel/UCVbjFEy_We_mUFZSoDBq1zw" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 md:p-3 rounded-full bg-secondary/10 hover:bg-secondary/20 transition-colors duration-500"
              >
                <Youtube className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
