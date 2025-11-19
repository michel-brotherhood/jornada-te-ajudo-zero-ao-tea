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
            Material Bônus Exclusivo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Baixe agora o material complementar do curso Do Zero ao TEA. 
            Um guia prático com estratégias e dicas essenciais para o dia a dia.
          </p>
          
          <div className="pt-8 flex justify-center">
            <button
              onClick={handleDownload}
              className="download-button group relative"
              aria-label="Baixar material bônus"
            >
              <span className="button-text">Baixar PDF</span>
              <Download className="button-icon" size={24} strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .download-button {
          width: 150px;
          height: 50px;
          border-radius: 20px;
          border: none;
          box-shadow: 1px 1px hsl(var(--secondary) / 0.37);
          padding: 5px 10px;
          background-color: hsl(var(--secondary));
          color: hsl(var(--secondary-foreground));
          font-family: inherit;
          font-weight: 600;
          font-size: 16px;
          line-height: 1;
          cursor: pointer;
          filter: drop-shadow(0 0 15px hsl(var(--secondary) / 0.6));
          transition: all 0.5s ease;
          position: relative;
          overflow: visible;
        }

        .button-icon {
          display: none;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .button-text {
          display: inline-block;
          transition: opacity 0.3s ease;
        }

        .download-button:hover {
          width: 60px;
          height: 60px;
          border-radius: 50%;
        }

        .download-button:hover .button-text {
          opacity: 0;
          display: none;
        }

        .download-button:hover .button-icon {
          display: block;
        }

        .download-button:hover::after {
          content: "";
          position: absolute;
          width: 16px;
          height: 3px;
          background-color: hsl(var(--secondary));
          left: 50%;
          top: 50%;
          margin-left: -8px;
          margin-top: 10px;
          animation: download-animate 0.9s linear infinite;
        }

        .download-button:hover::before {
          content: "";
          position: absolute;
          top: -3px;
          left: -3px;
          width: calc(100% + 6px);
          height: calc(100% + 6px);
          border: 3.5px solid transparent;
          border-top: 3.5px solid hsl(var(--secondary-foreground));
          border-right: 3.5px solid hsl(var(--secondary-foreground));
          border-radius: 50%;
          animation: rotate-border 2s linear infinite;
        }

        @keyframes rotate-border {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes download-animate {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(20px);
            opacity: 0;
          }
        }

        .download-button:active {
          transform: scale(0.95);
        }
      `}</style>
    </section>
  );
};

export default DownloadBonus;
