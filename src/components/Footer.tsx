import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 bg-muted/30 border-t">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Feito com <Heart className="w-4 h-4 text-coral fill-coral" /> por JornadaTEAJudo
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            © 2025 Do Zero ao TEA. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
