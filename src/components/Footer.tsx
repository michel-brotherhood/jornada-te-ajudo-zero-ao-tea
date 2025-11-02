// Desenvolvido por Michel Brotherhood
import { Heart, Instagram, Facebook, Users } from "lucide-react";
import logoFooter from "@/assets/logo-footer.png";

const Footer = () => {
  return (
    <footer className="py-8 md:py-10 bg-gradient-to-b from-muted/30 to-muted/60 border-t">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div className="text-center md:text-left">
              <img src={logoFooter} alt="JornadaTEAJudo" className="h-16 w-auto mx-auto md:mx-0 mb-3" />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Transformando o diagnóstico em jornada de amor, conhecimento e acolhimento.
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="text-center">
              <h3 className="font-semibold text-lg mb-3 text-foreground">Links Rápidos</h3>
              <nav className="flex flex-col gap-2">
                <a href="#for-who" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Para Quem é
                </a>
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Sobre a Carol
                </a>
                <a href="#enroll" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Inscreva-se
                </a>
              </nav>
            </div>
            
            {/* Social */}
            <div className="text-center md:text-right">
              <h3 className="font-semibold text-lg mb-3 text-foreground">Redes Sociais</h3>
              <div className="flex justify-center md:justify-end gap-3">
                <a 
                  href="https://www.instagram.com/jornadateajudo/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-coral/10 hover:bg-coral/20 transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-coral" />
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=61577138218314" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-primary" />
                </a>
                <a 
                  href="https://chat.whatsapp.com/JhEuGcCaWc5C3Jj3DQ0lrY?mode=ac_c" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-secondary/10 hover:bg-secondary/20 transition-colors duration-300"
                  aria-label="Comunidade WhatsApp"
                >
                  <Users className="w-5 h-5 text-secondary" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                Feito com <Heart className="w-4 h-4 text-coral fill-coral" /> por JornadaTEAJudo
              </p>
              <p className="text-center md:text-right">
                © 2025 Do Zero ao TEA. Todos os direitos reservados.
              </p>
            </div>
            <div className="mt-4 text-center">
              <p className="text-xs text-muted-foreground">
                Desenvolvido por <a href="https://idlab.art.br" target="_blank" rel="noopener noreferrer" className="font-semibold text-destructive hover:text-destructive/80 transition-colors">ID_Lab</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
