import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-luxury-gold/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">
          Pronto(a) para transformar o seu atendimento em receita?
        </h2>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Demonstração de 15 minutos. Sem custo. Resultados garantidos.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="gold" size="xl" className="hover-glow">
            <Calendar className="mr-2 h-5 w-5" />
            Agendar Demonstração Gratuita
          </Button>
          
          <Button variant="outline" size="xl" className="hover-lift">
            Ver Planos e Preços
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
        
        {/* Simple Contact Form Preview */}
        <div className="max-w-md mx-auto">
          <p className="text-sm text-muted-foreground mb-4">
            Ou deixe seu contato que retornamos para agendar sua demonstração.
          </p>
          <div className="bg-background rounded-lg p-6 shadow-lg border border-border">
            <div className="space-y-4">
              <input 
                type="text" 
                placeholder="Nome completo"
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold/50"
              />
              <input 
                type="text" 
                placeholder="WhatsApp"
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold/50"
              />
              <input 
                type="text" 
                placeholder="Nome da clínica"
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold/50"
              />
              <Button variant="gold" className="w-full">
                Solicitar Contato
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;