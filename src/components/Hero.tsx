import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import logo from "@/assets/logo.png";
import heroVideo from "@/assets/hero-video.mp4";

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

      <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in space-y-4 md:space-y-6">
          <div className="mb-4 md:mb-6 flex justify-center">
            <img src={logo} alt="Jornada TEA Judo - Do Zero ao TEA" className="h-20 sm:h-24 md:h-28 lg:h-32 w-auto animate-pulse" style={{ animationDuration: '3s' }} />
          </div>

          <div className="mb-6 md:mb-8 flex justify-center px-4">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="rounded-2xl shadow-2xl w-full max-w-2xl border-2 border-primary/20"
            >
              <source src={heroVideo} type="video/mp4" />
              Seu navegador não suporta vídeos.
            </video>
          </div>
          
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight px-4">
            <span className="bg-gradient-to-r from-primary via-secondary to-coral bg-clip-text text-transparent">
              Você já se sentiu perdido(a)
            </span>
            <br />
            <span className="text-foreground">diante do autismo?</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Com medo de errar, sem saber como agir — e desejando apenas entender e acolher?
          </p>
          
          <div className="flex flex-col items-center justify-center gap-2">
            <Heart className="w-5 h-5 md:w-6 md:h-6 text-coral fill-coral animate-pulse" style={{ animationDuration: '2s' }} />
            <p className="text-base sm:text-lg font-semibold text-foreground text-center">
              O Curso Do Zero ao TEA nasceu exatamente pra isso.
            </p>
          </div>
          
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Não é um curso técnico, cheio de termos difíceis. É um curso feito por quem vive o autismo todos os dias — com o coração de mãe, o olhar de profissional e a sensibilidade de quem acredita que <strong className="text-primary">conhecimento é amor</strong>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4 pt-2 md:pt-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all duration-700 hover:scale-105 shadow-lg hover:shadow-xl animate-pulse"
              style={{ animationDuration: '4s' }}
              onClick={scrollToEnroll}
            >
              Quero me inscrever agora
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto text-sm sm:text-base md:text-lg px-5 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 border-2 hover:bg-primary/5 transition-all duration-700 hover:scale-105"
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
