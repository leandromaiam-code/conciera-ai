import { Shield, Award, TrendingUp } from "lucide-react";

const SocialProof = () => {
  return (
    <section className="py-16 bg-luxury-marble/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-serif text-foreground mb-4">
            A confiança das clínicas que definem o padrão
          </h2>
          <div className="w-24 h-0.5 bg-luxury-gold mx-auto"></div>
        </div>
        
        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-luxury-gold" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">LGPD Certificado</h3>
            <p className="text-muted-foreground text-sm">Proteção total de dados dos seus pacientes</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-luxury-gold" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Disney Institute</h3>
            <p className="text-muted-foreground text-sm">Metodologia validada em excelência</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-luxury-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="h-8 w-8 text-luxury-gold" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Resultados Comprovados</h3>
            <p className="text-muted-foreground text-sm">+40% de conversão média</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;