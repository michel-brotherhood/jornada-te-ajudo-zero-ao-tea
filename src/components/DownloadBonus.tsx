import { Download, Check } from "lucide-react";

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
            Material Bônus Exclusivo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Baixe agora o material complementar do curso Do Zero ao TEA. 
            Um guia prático com estratégias e dicas essenciais para o dia a dia.
          </p>
          
          <div className="pt-8 flex justify-center">
            <button
              onClick={handleDownload}
              className="Download-button"
              aria-label="Baixar material bônus"
            >
              <Download size={25} strokeWidth={2.5} />
              quero meu brinde agora
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .Download-button {
          display: flex;
          align-items: center;
          font-family: inherit;
          font-weight: 500;
          font-size: 17px;
          padding: 12px 20px;
          color: white;
          background: linear-gradient(to right, hsl(var(--primary)), hsl(var(--secondary)), hsl(var(--coral)));
          border: none;
          box-shadow: 0 0.7em 1.5em -0.5em hsl(var(--primary) / 0.527);
          letter-spacing: 0.05em;
          border-radius: 8px;
          cursor: pointer;
          position: relative;
          transition: all 0.2s;
        }

        .Download-button svg {
          margin-right: 8px;
          width: 25px;
        }

        .Download-button:hover {
          box-shadow: 0 0.5em 1.5em -0.5em hsl(var(--secondary));
          border-top-left-radius: 40px;
          border-bottom-right-radius: 40px;
        }

        .Download-button:active {
          box-shadow: 0 0.3em 1em -0.5em hsl(var(--secondary));
        }

        .Download-button::before {
          content: "";
          width: 4px;
          height: 40%;
          background-color: white;
          position: absolute;
          border-top-right-radius: 5px;
          border-bottom-right-radius: 5px;
          left: 0;
          transition: all 0.2s;
        }

        .Download-button::after {
          content: "";
          width: 4px;
          height: 40%;
          background-color: white;
          position: absolute;
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
          right: 0;
          transition: all 0.2s;
        }

        .Download-button:hover::before,
        .Download-button:hover::after {
          height: 60%;
        }

        .Download-button:hover::before {
          border-top-left-radius: 5px;
          border-bottom-left-radius: 5px;
          border-top-right-radius: 0px;
          border-bottom-right-radius: 0px;
          transform: translate(5px, -15px) rotate(45deg);
        }

        .Download-button:hover::after {
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
