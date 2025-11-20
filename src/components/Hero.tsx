import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import logo from "@/assets/logo.png";
import heroVideo from "@/assets/hero-video.mp4";
import { useCountdown } from "@/hooks/useCountdown";

const Hero = () => {
  const promoEndDate = new Date('2025-11-06T21:00:00');
  const timeLeft = useCountdown(promoEndDate);
  
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

      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16 relative z-10">
        {/* Logo centralizado no topo */}
        <div className="mb-8 md:mb-10 lg:mb-12 flex justify-center animate-fade-in">
          <img 
            src={logo} 
            alt="Jornada TEA Judo - Do Zero ao TEA" 
            className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto transition-transform hover:scale-105 duration-300" 
          />
        </div>

        {/* Título principal acima de tudo */}
        <div className="text-center animate-fade-in mb-10 md:mb-14 lg:mb-16 max-w-5xl mx-auto">
          <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 animate-fade-in">
            <span className="text-sm md:text-base font-medium text-primary">Curso Do Zero ao TEA</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-primary via-coral to-secondary bg-clip-text text-transparent animate-gradient">
              TEA judo, juntos
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transformando desafios em oportunidades de aprendizado e crescimento
          </p>
        </div>

        {/* Layout lado a lado no desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Coluna do Vídeo */}
          <div className="flex justify-center lg:justify-end animate-scale-in order-1 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-coral to-secondary rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="relative rounded-2xl shadow-2xl w-full max-w-lg border-2 border-primary/20 transition-transform group-hover:scale-[1.02] duration-300"
              >
                <source src={heroVideo} type="video/mp4" />
                Seu navegador não suporta vídeos.
              </video>
            </div>
          </div>

          {/* Coluna do Texto */}
          <div className="text-center lg:text-left animate-fade-in space-y-6 md:space-y-8 order-2 lg:order-2">
            <div className="space-y-4">
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
                Já se sentiu perdido ao lidar com uma criança autista? Sem saber como agir no dia a dia do TEA e desejando apenas entender, acolher e fazer a diferença?
              </p>
              
              <div className="flex items-center justify-center lg:justify-start gap-3 bg-gradient-to-r from-primary/10 to-coral/10 rounded-xl p-4 border border-primary/20">
                <Heart className="w-6 h-6 md:w-7 md:h-7 text-coral fill-coral flex-shrink-0 animate-pulse" style={{ animationDuration: '2s' }} />
                <p className="text-base sm:text-lg font-semibold text-foreground">
                  O Curso Do Zero ao TEA nasceu exatamente pra isso
                </p>
              </div>
            </div>
            
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              Não é um curso técnico, cheio de termos difíceis. É um curso feito por quem vive o TEA todos os dias — com o coração de mãe, o olhar de profissional e a sensibilidade de quem acredita que <strong className="text-primary font-semibold">conhecimento sobre autismo é amor</strong>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button 
                size="lg" 
                className="botaocta group relative w-full sm:w-auto text-base md:text-lg px-8 py-6 md:py-7 bg-gradient-to-r from-primary via-coral to-secondary hover:shadow-2xl transition-all duration-300 hover:scale-105 shadow-lg overflow-hidden"
                onClick={scrollToEnroll}
              >
                <span className="relative z-10 font-semibold">
                  {timeLeft.isExpired ? 'Quero me inscrever agora' : 'Quero me inscrever com 10% OFF'}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary via-coral to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="w-full sm:w-auto text-base md:text-lg px-8 py-6 md:py-7 border-2 border-primary/30 hover:border-primary hover:bg-primary/5 transition-all duration-300 hover:scale-105 font-medium"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Saiba mais
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
