import { useState } from "react";
import { MessageCircle, UserCircle, FileCheck } from "lucide-react";
import heartPuzzle from "@/assets/heart-puzzle.ico";

const WhatsAppButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const options = [
    {
      icon: MessageCircle,
      text: "Tirar Dúvidas",
      href: "https://api.whatsapp.com/send?phone=5535997379861&text=Ol%C3%A1%21%20Tenho%20algumas%20d%C3%BAvidas%20sobre%20o%20Curso%20do%20Zero%20ao%20TEA."
    },
    {
      icon: FileCheck,
      text: "Quero me Inscrever",
      href: "https://api.whatsapp.com/send?phone=5535997379861&text=Ol%C3%A1%21%20Quero%20me%20inscrever%20no%20Curso%20do%20Zero%20ao%20TEA."
    },
    {
      icon: UserCircle,
      text: "Quem é a Carol",
      href: "https://api.whatsapp.com/send?phone=5535997379861&text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20a%20Carol%20Magalh%C3%A3es."
    }
  ];

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      {/* Menu de opções */}
      {isMenuOpen && (
        <div className="absolute bottom-full right-0 mb-4 flex flex-col gap-3 animate-fade-in">
          {options.map((option, index) => {
            const Icon = option.icon;
            return (
              <a
                key={index}
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-background border-2 border-primary/20 hover:border-primary/40 px-4 py-3 rounded-full shadow-lg transition-all duration-500 hover:scale-105 group whitespace-nowrap"
                onClick={() => setIsMenuOpen(false)}
              >
                <Icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-foreground">{option.text}</span>
              </a>
            );
          })}
        </div>
      )}

      {/* Botão principal */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="group relative"
        aria-label="Menu WhatsApp"
      >
        <div className="relative">
          {/* Pulse animation ring */}
          <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75" />
          
          {/* Main button */}
          <div className="relative bg-primary hover:bg-primary/90 p-3 md:p-4 rounded-full shadow-2xl transition-all duration-700 hover:scale-105 hover:shadow-primary/50">
            <img 
              src={heartPuzzle} 
              alt="WhatsApp" 
              className="w-8 h-8 md:w-10 md:h-10"
            />
          </div>
        </div>
      </button>
    </div>
  );
};

export default WhatsAppButton;
