import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-marble">
      <div className="text-center max-w-md mx-auto px-6">
        
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-4xl font-serif font-bold text-primary mb-2">
            CONCIERA<span className="text-luxury-gold">™</span>
          </h1>
        </div>

        {/* 404 */}
        <div className="mb-8">
          <h2 className="text-8xl font-serif font-bold text-luxury-gold mb-4 animate-fade-up">404</h2>
          <h3 className="text-2xl font-serif font-semibold text-primary mb-4 animate-fade-up [animation-delay:200ms]">
            Página não encontrada
          </h3>
          <p className="text-muted-foreground mb-8 animate-fade-up [animation-delay:400ms]">
            A página que você está procurando não existe ou foi movida para outro endereço.
          </p>
        </div>

        {/* Actions */}
        <div className="space-y-4 animate-fade-up [animation-delay:600ms]">
          <Button asChild variant="gold" size="lg" className="w-full hover-glow">
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              Voltar ao Início
            </Link>
          </Button>
          
          <Button asChild variant="outline_gold" size="lg" className="w-full">
            <Link to="/contato">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Falar Conosco
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;