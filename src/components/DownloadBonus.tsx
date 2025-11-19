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
            <label className="download-label">
              <input 
                type="checkbox" 
                className="download-input"
                onClick={handleDownload}
              />
              <div className="circle">
                <Download className="icon" size={24} strokeWidth={2.5} />
                <div className="square"></div>
              </div>
              <span className="title">quero meu brinde agora</span>
              <span className="title">Baixado!</span>
            </label>
          </div>
        </div>
      </div>

      <style>{`
        .download-label {
          background-color: transparent;
          border: 2px solid hsl(var(--secondary));
          display: flex;
          align-items: center;
          border-radius: 50px;
          width: 240px;
          cursor: pointer;
          transition: all 0.4s ease;
          padding: 5px;
          position: relative;
        }

        .download-label::before {
          content: "";
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: hsl(var(--secondary-foreground));
          width: 8px;
          height: 8px;
          transition: all 0.4s ease;
          border-radius: 100%;
          margin: auto;
          opacity: 0;
          visibility: hidden;
        }

        .download-input {
          display: none;
        }

        .title {
          font-size: 17px;
          color: hsl(var(--foreground));
          transition: all 0.4s ease;
          position: absolute;
          right: 18px;
          bottom: 14px;
          text-align: center;
          font-weight: 600;
        }

        .title:last-child {
          opacity: 0;
          visibility: hidden;
        }

        .circle {
          height: 45px;
          width: 45px;
          border-radius: 50%;
          background-color: hsl(var(--secondary));
          display: flex;
          justify-content: center;
          align-items: center;
          transition: all 0.4s ease;
          position: relative;
          box-shadow: 0 0 0 0 hsl(var(--secondary-foreground));
          overflow: hidden;
        }

        .circle .icon {
          color: hsl(var(--secondary-foreground));
          width: 24px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: all 0.4s ease;
        }

        .circle .square {
          aspect-ratio: 1;
          width: 15px;
          border-radius: 2px;
          background-color: hsl(var(--secondary-foreground));
          opacity: 0;
          visibility: hidden;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: all 0.4s ease;
        }

        .circle::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          background-color: hsl(var(--primary));
          width: 100%;
          height: 0;
          transition: all 0.4s ease;
        }

        .download-label:has(.download-input:checked) {
          width: 57px;
          animation: installed 0.4s ease 3.5s forwards;
        }

        .download-label:has(.download-input:checked)::before {
          animation: rotate 3s ease-in-out 0.4s forwards;
        }

        .download-input:checked + .circle {
          animation: pulse 1s forwards, circleDelete 0.2s ease 3.5s forwards;
          rotate: 180deg;
        }

        .download-input:checked + .circle::before {
          animation: installing 3s ease-in-out forwards;
        }

        .download-input:checked + .circle .icon {
          opacity: 0;
          visibility: hidden;
        }

        .download-input:checked ~ .circle .square {
          opacity: 1;
          visibility: visible;
        }

        .download-input:checked ~ .title {
          opacity: 0;
          visibility: hidden;
        }

        .download-input:checked ~ .title:last-child {
          animation: showInstalledMessage 0.4s ease 3.5s forwards;
        }

        @keyframes pulse {
          0% {
            scale: 0.95;
            box-shadow: 0 0 0 0 hsl(var(--secondary-foreground) / 0.7);
          }
          70% {
            scale: 1;
            box-shadow: 0 0 0 16px hsl(var(--secondary-foreground) / 0);
          }
          100% {
            scale: 0.95;
            box-shadow: 0 0 0 0 hsl(var(--secondary-foreground) / 0);
          }
        }

        @keyframes installing {
          from {
            height: 0;
          }
          to {
            height: 100%;
          }
        }

        @keyframes rotate {
          0% {
            transform: rotate(-90deg) translate(27px) rotate(0);
            opacity: 1;
            visibility: visible;
          }
          99% {
            transform: rotate(270deg) translate(27px) rotate(270deg);
            opacity: 1;
            visibility: visible;
          }
          100% {
            opacity: 0;
            visibility: hidden;
          }
        }

        @keyframes installed {
          100% {
            width: 190px;
            border-color: hsl(var(--primary));
          }
        }

        @keyframes circleDelete {
          100% {
            opacity: 0;
            visibility: hidden;
          }
        }

        @keyframes showInstalledMessage {
          100% {
            opacity: 1;
            visibility: visible;
            right: 56px;
          }
        }
      `}</style>
    </section>
  );
};

export default DownloadBonus;
