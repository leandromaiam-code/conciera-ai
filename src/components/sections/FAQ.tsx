import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQ = () => {
  const faqs = [
    {
      question: "Quanto custa?",
      answer: "Os valores são definidos conforme porte e volume da clínica, apresentados durante a demonstração personalizada."
    },
    {
      question: "Preciso de cartão para agendar a demo?",
      answer: "Não, é gratuita. Nossa demonstração é 100% gratuita e sem compromisso."
    },
    {
      question: "E se não fizer sentido para minha clínica?",
      answer: "Zero compromisso. A demonstração é para você conhecer nossa solução sem qualquer obrigação."
    },
    {
      question: "É em português?",
      answer: "Sim, com suporte especializado no Brasil. Nossa equipe está totalmente preparada para atender clínicas brasileiras."
    },
    {
      question: "Como funciona a integração com minha agenda?",
      answer: "A CONCIERA se integra facilmente com os principais sistemas de agendamento do mercado, mantendo sua operação atual e adicionando inteligência."
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-marble">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Esclarecemos as principais dúvidas sobre a CONCIERA
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto mb-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-background rounded-2xl px-6 py-2 shadow-sm hover:shadow-marble transition-shadow animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-primary hover:text-luxury-gold transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="text-center animate-fade-up [animation-delay:600ms]">
          <Button variant="gold" size="xl" className="mx-6 sm:mx-0">
            Agendar gratuitamente
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;