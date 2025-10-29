import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const Hero = () => {
  const scrollToEnroll = () => {
    document.getElementById('enroll')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-36 h-36 bg-coral/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-8 flex justify-center">
            <img src={logo} alt="Jornada TEA Judo - Do Zero ao TEA" className="h-40 md:h-48 w-auto animate-float" />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-secondary to-coral bg-clip-text text-transparent">
              Você já se sentiu perdido(a)
            </span>
            <br />
            <span className="text-foreground">diante do autismo?</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
            Com medo de errar, sem saber como agir — e desejando apenas entender e acolher?
          </p>
          
          <div className="flex items-center justify-center gap-2 mb-8">
            <Heart className="w-6 h-6 text-coral fill-coral" />
            <p className="text-lg font-semibold text-foreground">
              O Curso Do Zero ao TEA nasceu exatamente pra isso.
            </p>
          </div>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
            Não é um curso técnico, cheio de termos difíceis. É um curso feito por quem vive o autismo todos os dias — com o coração de mãe, o olhar de profissional e a sensibilidade de quem acredita que <strong className="text-primary">conhecimento é amor</strong>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl animate-bounce-slow"
              onClick={scrollToEnroll}
            >
              Quero me inscrever agora
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 border-2 hover:bg-primary/5 transition-all duration-300 hover:scale-105"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Saiba mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
