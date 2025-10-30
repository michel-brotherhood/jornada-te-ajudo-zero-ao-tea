import { Instagram } from "lucide-react";

const InstagramFeed = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 animate-fade-in">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            <span className="bg-gradient-to-r from-coral via-primary to-secondary bg-clip-text text-transparent">
              Acompanhe Nossa Jornada
            </span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Siga @jornadateajudo no Instagram para mais dicas, histórias e inspiração
          </p>
          <a
            href="https://www.instagram.com/jornadateajudo/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-coral to-primary text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            <Instagram className="w-5 h-5" />
            Seguir no Instagram
          </a>
        </div>

        <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl p-6 md:p-8">
          <div className="text-center text-muted-foreground space-y-4">
            <Instagram className="w-16 h-16 mx-auto text-coral/60" />
            <h3 className="text-lg md:text-xl font-semibold text-foreground">
              Feed do Instagram
            </h3>
            <p className="text-sm md:text-base">
              Para ver nossos posts mais recentes, visite nosso perfil no Instagram.
            </p>
            
            <div className="bg-muted/50 rounded-lg p-4 mt-6 text-left">
              <p className="text-xs md:text-sm font-semibold text-foreground mb-3">
                💡 Como integrar posts do Instagram:
              </p>
              <ul className="text-xs md:text-sm space-y-3">
                <li className="flex flex-col gap-1">
                  <strong className="text-foreground">1. Instagram Graph API</strong>
                  <span className="text-muted-foreground">Requer aprovação do Facebook e configuração técnica. Permite exibir posts automaticamente usando a API oficial.</span>
                </li>
                <li className="flex flex-col gap-1">
                  <strong className="text-foreground">2. Serviços Terceiros</strong>
                  <span className="text-muted-foreground">Ferramentas como <strong>EmbedSocial</strong>, <strong>Behold</strong> ou <strong>Juicer</strong> (pagas) que geram um código de widget para incorporar.</span>
                </li>
                <li className="flex flex-col gap-1">
                  <strong className="text-foreground">3. Atualização Manual no Código</strong>
                  <span className="text-muted-foreground">Adicione os posts manualmente no arquivo InstagramFeed.tsx, criando um array com as imagens e legendas dos seus posts. Você atualiza quando quiser adicionar novos conteúdos.</span>
                </li>
              </ul>
            </div>
            
            <div className="pt-4">
              <a
                href="https://www.instagram.com/jornadateajudo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-coral hover:text-coral/80 font-semibold underline transition-colors"
              >
                Ver todos os posts →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
