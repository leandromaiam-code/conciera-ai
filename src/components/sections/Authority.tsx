import { Award, Star, Users } from "lucide-react";

import jpNotiniPhoto from "@/assets/jp-notini-photo.png";

const Authority = () => {
  return (
    <section id="authority" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <div className="bg-gradient-marble rounded-3xl p-8 md:p-12 shadow-luxury">
            
            {/* JP Notini Photo and Quote */}
            <div className="mb-8">
              <div className="flex flex-col items-center mb-8">
                <div className="w-32 h-32 mb-6 relative">
                  <img 
                    src={jpNotiniPhoto} 
                    alt="JP Notini - Especialista em Inteligência de Conversão" 
                    className="w-full h-full object-cover rounded-full border-4 border-luxury-gold/20 shadow-elegant"
                  />
                  <div className="absolute inset-0 rounded-full ring-2 ring-luxury-gold/30 ring-offset-4 ring-offset-background"></div>
                </div>
                <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-luxury-gold" />
                </div>
              </div>
              
              <blockquote className="text-2xl md:text-3xl font-serif text-primary leading-relaxed mb-8">
                "Desenvolvido por JP Notini, especialista em inteligência de conversão e criador do MÉTODO ARCHETIPSE®️, validado em clínicas de alto padrão e inspirado na excelência do Disney Institute."
              </blockquote>
            </div>

            {/* Credentials */}
            <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-border/20">
              <div className="text-center">
                <div className="w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-luxury-gold" />
                </div>
                <h4 className="font-semibold text-primary mb-1">MÉTODO ARCHETIPSE®️</h4>
                <p className="text-sm text-muted-foreground">Metodologia proprietária validada</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-luxury-gold" />
                </div>
                <h4 className="font-semibold text-primary mb-1">Disney Institute</h4>
                <p className="text-sm text-muted-foreground">Inspirado na excelência mundial</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-luxury-gold" />
                </div>
                <h4 className="font-semibold text-primary mb-1">Clínicas Premium</h4>
                <p className="text-sm text-muted-foreground">Validado em alto padrão</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;