import { useState } from "react";
import { Menu, X, Phone, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import logoImage from "@/assets/logo-conciera.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: "Início", href: "/" },
    { name: "Como Funciona", href: "/#como-funciona" },
    { name: "Planos", href: "/planos" },
    { name: "Sobre", href: "/#sobre" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/10">
      <div className="container mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-12 lg:h-16">
          
          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img 
              src={logoImage} 
              alt="Conciera Logo" 
              className="h-6 sm:h-7 lg:h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium text-sm"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              title="Alternar tema"
            >
              {theme === 'light' ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </button>
            <Button variant="outline_gold" size="sm">
              <Phone className="w-3 h-3 mr-1" />
              WhatsApp
            </Button>
            <Button variant="gold" size="default">
              Agendar Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 text-primary" />
            ) : (
              <Menu className="h-5 w-5 text-primary" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-3 pt-3 pb-4 space-y-2 bg-background border-b border-border/10">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-3 text-muted-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3">
                {/* Mobile Dark Mode Toggle */}
                <button
                  onClick={toggleTheme}
                  className="flex items-center justify-center w-full px-3 py-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  {theme === 'light' ? (
                    <>
                      <Moon className="w-4 h-4 mr-2" />
                      Modo Escuro
                    </>
                  ) : (
                    <>
                      <Sun className="w-4 h-4 mr-2" />
                      Modo Claro
                    </>
                  )}
                </button>
                <Button variant="outline_gold" size="default" className="w-full h-11">
                  <Phone className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
                <Button variant="gold" size="default" className="w-full h-11">
                  Agendar Demo
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;