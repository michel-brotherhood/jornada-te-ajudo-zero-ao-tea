import { useState } from "react";
import { MessageCircle, UserCircle, FileCheck } from "lucide-react";
import heartPuzzle from "@/assets/heart-puzzle.ico";

const WhatsAppButton = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const options = [
    {
      icon: MessageCircle,
      text: "Tirar Dúvidas",
      href: "https://api.whatsapp.com/send?phone=5535997379861&text=Ol%C3%A1%21%20Tenho%20algumas%20d%C3%BAvidas%20sobre%20o%20Curso%20do%20Zero%20ao%20TEA.",
      isExternal: true
    },
    {
      icon: FileCheck,
      text: "Quero me Inscrever",
      href: "#enroll",
      isExternal: false
    },
    {
      icon: UserCircle,
      text: "Quem é a Carol",
      href: "#about",
      isExternal: false
    }
  ];

  const handleClick = (href: string, isExternal: boolean) => {
    setIsMenuOpen(false);
    if (!isExternal) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      {/* Menu de opções */}
      {isMenuOpen && (
        <div className="absolute bottom-full right-0 mb-4 flex flex-col gap-2 md:gap-3 animate-fade-in">
          {options.map((option, index) => {
            const Icon = option.icon;
            return (
              <a
                key={index}
                href={option.href}
                {...(option.isExternal && { target: "_blank", rel: "noopener noreferrer" })}
                className="flex items-center gap-2 md:gap-3 bg-background border-2 border-primary/20 hover:border-primary/40 px-3 md:px-4 py-2.5 md:py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 group whitespace-nowrap"
                onClick={(e) => {
                  if (!option.isExternal) {
                    e.preventDefault();
                    handleClick(option.href, option.isExternal);
                  } else {
                    setIsMenuOpen(false);
                  }
                }}
              >
                <Icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                <span className="text-xs md:text-sm font-medium text-foreground">{option.text}</span>
              </a>
            );
          })}
        </div>
      )}

      {/* Botão principal */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="group relative"
        aria-label="Menu"
      >
        <img 
          src={heartPuzzle} 
          alt="Menu" 
          className="w-12 h-12 md:w-14 md:h-14 animate-pulse hover:scale-110 transition-transform duration-700 drop-shadow-2xl"
          style={{ animationDuration: '2s' }}
        />
      </button>
    </div>
  );
};

export default WhatsAppButton;
