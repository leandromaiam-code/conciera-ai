import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, X } from "lucide-react";

const FixedCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 200px
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main CTA Button - Top */}
      <div className="fixed top-4 right-4 z-50 animate-fade-in">
        <Button variant="gold" size="sm" className="shadow-lg hover-glow">
          <Calendar className="mr-2 h-4 w-4" />
          Agendar Demo
        </Button>
      </div>

      {/* WhatsApp Float Button - Centered on Mobile, Right on Desktop */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 md:right-6 md:left-auto md:translate-x-0 z-50">
        <div className="relative">
          {/* WhatsApp Expandable Content */}
          {showWhatsApp && (
            <div className="absolute bottom-16 left-1/2 -translate-x-1/2 md:right-0 md:left-auto md:translate-x-0 bg-background border border-border rounded-2xl p-4 shadow-luxury animate-scale-in w-56 md:w-64">
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-semibold text-primary text-sm">Prefere falar agora?</h4>
                <button 
                  onClick={() => setShowWhatsApp(false)}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-muted-foreground text-xs mb-3">
                Clique no botão abaixo para falar diretamente conosco via WhatsApp.
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full text-green-600 border-green-600 hover:bg-green-50"
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Abrir WhatsApp
              </Button>
            </div>
          )}
          
          {/* WhatsApp Button */}
          <button
            onClick={() => setShowWhatsApp(!showWhatsApp)}
            className="w-8 h-8 md:w-14 md:h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 animate-pulse"
          >
            <MessageCircle className="w-4 h-4 md:w-6 md:h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
        <div className="bg-background border-t border-border p-6">
          <Button variant="gold" size="lg" className="w-full max-w-sm mx-auto block">
            <Calendar className="mr-2 h-5 w-5" />
            Agendar Demo Gratuita
          </Button>
        </div>
      </div>
    </>
  );
};

export default FixedCTA;