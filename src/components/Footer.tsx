import { Phone, Mail, MapPin, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTheme } from "@/contexts/ThemeContext";
import footerLogo from "@/assets/logo-conciera.png";
import footerLogoWhite from "@/assets/conciera-footer-logo-white.png";

const Footer = () => {
  const { theme } = useTheme();
  const quickLinks = [
    { name: "Solução", href: "/solucao" },
    { name: "Como Funciona", href: "/como-funciona" },
    { name: "Planos", href: "/planos" },
    { name: "Casos & Resultados", href: "/casos" },
  ];

  const legalLinks = [
    { name: "Privacidade", href: "/privacidade" },
    { name: "Termos", href: "/termos" },
    { name: "LGPD", href: "/lgpd" },
  ];

  return (
    <footer className={theme === 'light' ? "bg-background text-foreground" : "bg-background text-foreground"}>
      
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img 
                src={theme === 'light' ? footerLogo : footerLogoWhite} 
                alt="Conciera Logo" 
                className="h-12 w-auto mb-4"
              />
              <p className="text-foreground/80 leading-relaxed max-w-md">
                Sistema operacional de receita para clínicas de elite. 
                Transformamos atendimento em conversão com inteligência artificial 
                e método proprietário validado.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-luxury-gold" />
                <span className="text-foreground/90">+55 (11) 9 9999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-luxury-gold" />
                <span className="text-foreground/90">contato@conciera.com.br</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-luxury-gold" />
                <span className="text-foreground/90">São Paulo, Brasil</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <Button variant="ghost" size="icon" className="text-foreground hover:text-luxury-gold">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-foreground hover:text-luxury-gold">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-luxury-gold">Navegação</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-foreground/80 hover:text-luxury-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/quem-somos" 
                  className="text-foreground/80 hover:text-luxury-gold transition-colors"
                >
                  Quem Somos
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & CTA */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-luxury-gold">Legal</h4>
            <ul className="space-y-3 mb-8">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-foreground/80 hover:text-luxury-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-foreground/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/60 text-sm">
              © {new Date().getFullYear()} Conciera™. Todos os direitos reservados.
            </p>
            <p className="text-foreground/60 text-sm mt-2 md:mt-0">
              Certificado pelo <span className="text-luxury-gold font-semibold">Disney Institute</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;