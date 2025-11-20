import { Download } from "lucide-react";

const DownloadBonus = () => {
  const handleDownload = () => {
    // Abrir o PDF em nova aba para download
    window.open("/Material_Bonus_TEA_Final_v2.pdf", "_blank");
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-6 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            TEA judo, juntos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Baixe agora seu material bônus gratuito! Um guia visual e prático com estratégias e atividades prontas para usar no dia a dia com crianças autistas. Simples, direto e eficaz.
          </p>
          
          <div className="pt-8 flex justify-center">
            <button
              onClick={handleDownload}
              className="download-button"
              aria-label="Baixar material bônus"
            >
              <Download className="button-icon" size={25} strokeWidth={2.5} />
              <span className="button-text">quero meu brinde agora</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .download-button {
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: inherit;
          font-weight: 500;
          font-size: 17px;
          padding: 12px 20px;
          color: hsl(var(--primary-foreground));
          background: linear-gradient(144deg, hsl(var(--primary)), hsl(var(--coral)) 50%, hsl(var(--secondary)));
          border: none;
          box-shadow: 0 0.7em 1.5em -0.5em hsl(var(--primary) / 0.5);
          letter-spacing: 0.05em;
          border-radius: 8px;
          cursor: pointer;
          position: relative;
          transition: all 0.2s;
        }

        .button-icon {
          margin-right: 8px;
          width: 25px;
          flex-shrink: 0;
        }

        .button-text {
          white-space: nowrap;
        }

        .download-button:hover {
          box-shadow: 0 0.5em 1.5em -0.5em hsl(var(--primary));
          border-top-left-radius: 40px;
          border-bottom-right-radius: 40px;
        }

        .download-button:active {
          box-shadow: 0 0.3em 1em -0.5em hsl(var(--primary));
        }

        .download-button::before {
          content: "";
          width: 4px;
          height: 40%;
          background-color: hsl(var(--secondary-foreground));
          position: absolute;
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
          left: 0;
          transition: all 0.2s;
        }

        .download-button::after {
          content: "";
          width: 4px;
          height: 40%;
          background-color: hsl(var(--secondary-foreground));
          position: absolute;
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
          right: 0;
          transition: all 0.2s;
        }

        .download-button:hover::before,
        .download-button:hover::after {
          height: 60%;
        }

        .download-button:hover::before {
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
          border-top-right-radius: 0px;
          border-bottom-right-radius: 0px;
          transform: translate(5px, -15px) rotate(45deg);
        }

        .download-button:hover::after {
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
          border-top-left-radius: 0px;
          border-bottom-left-radius: 0px;
          transform: translate(-5px, 15px) rotate(45deg);
        }
      `}</style>
    </section>
  );
};

export default DownloadBonus;
