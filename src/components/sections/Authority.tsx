import { Award, Star, Users } from "lucide-react";

const Authority = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <div className="bg-gradient-marble rounded-3xl p-8 md:p-12 shadow-luxury">
            
            {/* Quote */}
            <div className="mb-8">
              <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-luxury-gold" />
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