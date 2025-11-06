import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Shield, Clock } from "lucide-react";
import { useCountdown } from "@/hooks/useCountdown";

const CTA = () => {
  // Desconto válido até 06/11/2025 às 21:00
  const promoEndDate = new Date('2025-11-06T21:00:00');
  const timeLeft = useCountdown(promoEndDate);
  
  const originalPrice = 497.00;
  const discountedPrice = 447.30;
  const installmentPrice = 46.26; // 447.30 / 12
  
  const includes = [
    "Aulas gravadas completas sobre autismo",
    "Materiais complementares em PDF",
    "Exemplos práticos e atividades aplicáveis",
    "Acesso por 1 ano com atualizações",
    "Certificado digital de conclusão",
    "Suporte via comunidade"
  ];

  return (
    <section id="enroll" className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-6 sm:p-8 md:p-10 lg:p-12 border-2 md:border-4 border-primary/20 shadow-2xl">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 px-2">
                Transforme <span className="bg-gradient-to-r from-primary via-secondary to-coral bg-clip-text text-transparent">conhecimento em amor</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">
                Comece sua jornada de compreensão e acolhimento hoje
              </p>
            </div>
            
            <div className="mb-6 md:mb-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-center">O que está incluído:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {includes.map((item, index) => (
                  <div key={index} className="flex items-start gap-2 md:gap-3">
                    <div className="mt-0.5 md:mt-1 p-1 rounded-full bg-primary/20 flex-shrink-0">
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                    </div>
                    <span className="text-sm sm:text-base text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-muted/50 rounded-lg p-4 md:p-6 mb-6 md:mb-8">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Shield className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                <span className="font-semibold text-base md:text-lg">Garantia de 7 dias</span>
              </div>
              <p className="text-center text-xs sm:text-sm text-muted-foreground">
                Se não for o que você esperava, devolvemos 100% do seu investimento
              </p>
            </div>
            
            <div className="text-center space-y-4 md:space-y-6">
              {!timeLeft.isExpired && (
                <div className="bg-coral/20 border-2 border-coral rounded-lg p-4 animate-pulse" style={{ animationDuration: '2s' }}>
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-coral" />
                    <span className="font-bold text-coral">DESCONTO DE 10% TERMINA EM:</span>
                  </div>
                  <div className="flex justify-center gap-2 md:gap-4">
                    {timeLeft.days > 0 && (
                      <div className="text-center">
                        <div className="bg-coral text-white font-bold text-xl md:text-2xl rounded px-3 py-2">
                          {String(timeLeft.days).padStart(2, '0')}
                        </div>
                        <span className="text-xs text-muted-foreground mt-1 block">dias</span>
                      </div>
                    )}
                    <div className="text-center">
                      <div className="bg-coral text-white font-bold text-xl md:text-2xl rounded px-3 py-2">
                        {String(timeLeft.hours).padStart(2, '0')}
                      </div>
                      <span className="text-xs text-muted-foreground mt-1 block">horas</span>
                    </div>
                    <div className="text-center">
                      <div className="bg-coral text-white font-bold text-xl md:text-2xl rounded px-3 py-2">
                        {String(timeLeft.minutes).padStart(2, '0')}
                      </div>
                      <span className="text-xs text-muted-foreground mt-1 block">min</span>
                    </div>
                    <div className="text-center">
                      <div className="bg-coral text-white font-bold text-xl md:text-2xl rounded px-3 py-2">
                        {String(timeLeft.seconds).padStart(2, '0')}
                      </div>
                      <span className="text-xs text-muted-foreground mt-1 block">seg</span>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-coral/20 rounded-lg p-4 md:p-6 animate-fade-in">
                {!timeLeft.isExpired ? (
                  <>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                      <span className="line-through">De R$ {originalPrice.toFixed(2)}</span> por apenas:
                    </p>
                    <div className="flex flex-col items-center justify-center gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-coral bg-clip-text text-transparent">
                          R$ {discountedPrice.toFixed(2)}
                        </span>
                        <span className="bg-coral text-white px-2 py-1 rounded text-sm font-bold">-10%</span>
                      </div>
                      <p className="text-sm sm:text-base text-muted-foreground">ou 12x de R$ {installmentPrice.toFixed(2)}*</p>
                    </div>
                  </>
                ) : (
                  <>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2">Investimento único:</p>
                    <div className="flex flex-col items-center justify-center gap-2">
                      <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-coral bg-clip-text text-transparent">
                        R$ {originalPrice.toFixed(2)}
                      </span>
                      <p className="text-sm sm:text-base text-muted-foreground">ou 12x de R$ 51,40*</p>
                    </div>
                  </>
                )}
              </div>
              
              <a 
                href={timeLeft.isExpired 
                  ? "https://pay.hotmart.com/Y102367809O?sck=HOTMART_PRODUCT_PAGE&off=usezyyql&hotfeature=32&bid=1761836693512"
                  : "https://pay.hotmart.com/Y102367809O?sck=HOTMART_PRODUCT_PAGE&off=usezyyql&hotfeature=32&bid=1761836693512&offDiscount=METODOLIVRE"
                }
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto text-base sm:text-lg md:text-xl px-8 sm:px-10 md:px-12 py-6 sm:py-7 md:py-8 bg-gradient-to-r from-primary via-secondary to-coral hover:opacity-90 transition-all duration-700 hover:scale-105 shadow-xl hover:shadow-2xl animate-pulse"
                  style={{ animationDuration: '4s' }}
                >
                  {timeLeft.isExpired ? 'Quero começar agora' : 'Quero começar agora com 10% OFF'}
                </Button>
              </a>
              <p className="text-xs sm:text-sm text-muted-foreground px-4">
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
