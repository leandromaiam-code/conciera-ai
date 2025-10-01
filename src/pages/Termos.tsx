import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Termos = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 bg-gradient-to-br from-luxury-marble/10 to-background border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to="/">
              <Button variant="ghost" className="mb-6 -ml-3">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar
              </Button>
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-luxury-gold/20 flex items-center justify-center">
                <FileText className="h-6 w-6 sm:h-8 sm:w-8 text-luxury-gold" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-foreground">
                  Termos e Condições
                </h1>
                <p className="text-sm text-muted-foreground mt-2">
                  Última atualização: 1 de Outubro de 2025
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-slate max-w-none">
              {/* Introdução */}
              <div className="mb-8 sm:mb-12 p-6 sm:p-8 bg-card border border-border rounded-xl">
                <p className="text-sm sm:text-base text-card-foreground leading-relaxed">
                  Estes Termos e Condições Gerais de Uso ("Termos") constituem um contrato vinculativo entre a <strong>CONTRATANTE</strong> (a "Clínica" ou "Cliente"), qualificada no momento da contratação, e a <strong>CONCIERA LTDA</strong>, nome fantasia Conciera ("CONCIERA", "nós"). Ao aceder e utilizar a plataforma Conciera Suite™ ("Plataforma" ou "Serviço"), o Cliente declara ter lido, compreendido e aceite integralmente estes Termos.
                </p>
              </div>

              {/* Cláusula 1 */}
              <div className="mb-8 sm:mb-10">
                <h2 className="text-xl sm:text-2xl font-serif text-foreground mb-4 flex items-center">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-luxury-gold/20 text-luxury-gold mr-3 text-sm font-bold">
                    1
                  </span>
                  DO OBJETO
                </h2>
                <div className="ml-11 space-y-4 text-sm sm:text-base text-muted-foreground">
                  <p>
                    <strong>1.1.</strong> O objeto deste contrato é a licença de uso, não exclusiva e intransferível, da Plataforma Conciera Suite™, um software como serviço (SaaS) que fornece um concierge de inteligência artificial ("Agente de IA") para otimizar e automatizar a comunicação, qualificação, agendamento e gestão da jornada de pacientes e potenciais pacientes ("Clientes Finais") da Clínica.
                  </p>
                  <p>
                    <strong>1.2.</strong> Consoante o plano contratado (Core, Pro, Ultra), o Serviço poderá incluir:
                  </p>
                  <ul className="list-none space-y-2 ml-4">
                    <li><strong>a)</strong> Automação de atendimento 24/7 em múltiplos canais (WhatsApp, Instagram, etc.).</li>
                    <li><strong>b)</strong> Qualificação de leads, tratamento de objeções e agendamento de consultas.</li>
                    <li><strong>c)</strong> Integração com sistemas de pagamento para cobrança de sinal ou consultas.</li>
                    <li><strong>d)</strong> Geração de insights e briefings para a equipa comercial da Clínica, incluindo análises baseadas em metodologias proprietárias como o MÉTODO ARCHETIPSE®.</li>
                    <li><strong>e)</strong> Módulos de gestão da jornada do paciente (pré e pós-procedimento).</li>
                  </ul>
                </div>
              </div>

              {/* Cláusula 2 */}
              <div className="mb-8 sm:mb-10">
                <h2 className="text-xl sm:text-2xl font-serif text-foreground mb-4 flex items-center">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-luxury-gold/20 text-luxury-gold mr-3 text-sm font-bold">
                    2
                  </span>
                  DAS OBRIGAÇÕES DA CONCIERA
                </h2>
                <div className="ml-11 space-y-4 text-sm sm:text-base text-muted-foreground">
                  <p>
                    <strong>2.1.</strong> Manter a Plataforma funcional e acessível, envidando os melhores esforços para garantir um nível de serviço condizente com as práticas de mercado, ressalvadas as paragens programadas para manutenção ou motivos de força maior.
                  </p>
                  <p>
                    <strong>2.2.</strong> Prestar o suporte técnico necessário para a correta utilização da Plataforma, dentro do horário comercial e dos canais definidos.
                  </p>
                  <p>
                    <strong>2.3.</strong> Assegurar a confidencialidade e a segurança dos dados processados na Plataforma, em conformidade com a legislação aplicável e a nossa Política de Privacidade.
                  </p>
                </div>
              </div>

              {/* Cláusula 3 */}
              <div className="mb-8 sm:mb-10">
                <h2 className="text-xl sm:text-2xl font-serif text-foreground mb-4 flex items-center">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-luxury-gold/20 text-luxury-gold mr-3 text-sm font-bold">
                    3
                  </span>
                  DAS OBRIGAÇÕES DA CONTRATANTE
                </h2>
                <div className="ml-11 space-y-4 text-sm sm:text-base text-muted-foreground">
                  <p>
                    <strong>3.1.</strong> Utilizar a Plataforma de forma lícita, em estrita conformidade com estes Termos e com a legislação brasileira, em especial a Lei Geral de Proteção de Dados (LGPD) e as normativas dos conselhos profissionais de saúde.
                  </p>
                  <p>
                    <strong>3.2.</strong> A Contratante é a única e exclusiva <strong>Controladora dos Dados Pessoais</strong> dos seus Clientes Finais. É sua responsabilidade garantir que possui a base legal adequada para a coleta e o tratamento desses dados através da Plataforma.
                  </p>
                  <p>
                    <strong>3.3.</strong> A Contratante é responsável por toda a informação fornecida para a parametrização do Agente de IA (scripts, informações sobre procedimentos, preços, etc.), garantindo a sua veracidade e conformidade legal e ética.
                  </p>
                  <p>
                    <strong>3.4.</strong> É expressamente vedado o uso da Plataforma para a prestação de consultas, diagnósticos ou qualquer ato privativo de profissionais de saúde. A finalidade do Serviço é estritamente administrativa e de comunicação.
                  </p>
                  <p>
                    <strong>3.5.</strong> Efetuar o pagamento pontual da assinatura, conforme o plano e as condições acordadas.
                  </p>
                </div>
              </div>

              {/* Cláusula 4 */}
              <div className="mb-8 sm:mb-10">
                <h2 className="text-xl sm:text-2xl font-serif text-foreground mb-4 flex items-center">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-luxury-gold/20 text-luxury-gold mr-3 text-sm font-bold">
                    4
                  </span>
                  DA PROPRIEDADE INTELECTUAL
                </h2>
                <div className="ml-11 space-y-4 text-sm sm:text-base text-muted-foreground">
                  <p>
                    <strong>4.1.</strong> Todos os direitos de propriedade intelectual sobre a Plataforma, incluindo o software, o código-fonte, os algoritmos, a interface, as marcas e as metodologias (incluindo, mas não se limitando ao MÉTODO ARCHETIPSE®) são e permanecerão propriedade exclusiva da CONCIERA LTDA.
                  </p>
                  <p>
                    <strong>4.2.</strong> A Contratante retém a propriedade integral de todos os dados que inserir na Plataforma ("Dados do Cliente").
                  </p>
                </div>
              </div>

              {/* Cláusula 5 */}
              <div className="mb-8 sm:mb-10">
                <h2 className="text-xl sm:text-2xl font-serif text-foreground mb-4 flex items-center">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-luxury-gold/20 text-luxury-gold mr-3 text-sm font-bold">
                    5
                  </span>
                  DA LIMITAÇÃO DE RESPONSABILIDADE
                </h2>
                <div className="ml-11 space-y-4 text-sm sm:text-base text-muted-foreground">
                  <p>
                    <strong>5.1.</strong> A CONCIERA LTDA não será responsável por quaisquer danos indiretos, lucros cessantes ou perda de dados resultantes do uso ou da incapacidade de uso da Plataforma.
                  </p>
                  <p>
                    <strong>5.2.</strong> Em nenhuma hipótese a responsabilidade total da CONCIERA LTDA por quaisquer reclamações relacionadas a estes Termos excederá o valor total pago pela Contratante nos três (3) meses anteriores ao evento que deu origem à reclamação.
                  </p>
                </div>
              </div>

              {/* Cláusula 6 */}
              <div className="mb-8 sm:mb-10">
                <h2 className="text-xl sm:text-2xl font-serif text-foreground mb-4 flex items-center">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-luxury-gold/20 text-luxury-gold mr-3 text-sm font-bold">
                    6
                  </span>
                  DA VIGÊNCIA E RESCISÃO
                </h2>
                <div className="ml-11 space-y-4 text-sm sm:text-base text-muted-foreground">
                  <p>
                    <strong>6.1.</strong> O presente contrato tem vigência de acordo com o plano contratado (mensal ou anual), com renovação automática por iguais períodos.
                  </p>
                  <p>
                    <strong>6.2.</strong> O contrato pode ser rescindido por qualquer das partes mediante aviso prévio de 30 dias. A rescisão não isenta a Contratante do pagamento de quaisquer valores devidos.
                  </p>
                </div>
              </div>

              {/* Cláusula 7 */}
              <div className="mb-8 sm:mb-10">
                <h2 className="text-xl sm:text-2xl font-serif text-foreground mb-4 flex items-center">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-luxury-gold/20 text-luxury-gold mr-3 text-sm font-bold">
                    7
                  </span>
                  DAS DISPOSIÇÕES GERAIS
                </h2>
                <div className="ml-11 space-y-4 text-sm sm:text-base text-muted-foreground">
                  <p>
                    <strong>7.1.</strong> Estes Termos podem ser atualizados periodicamente. A Contratante será notificada de quaisquer alterações materiais.
                  </p>
                  <p>
                    <strong>7.2.</strong> Fica eleito o foro da Comarca de [Cidade], [Estado], para dirimir quaisquer controvérsias oriundas do presente contrato, com renúncia expressa a qualquer outro, por mais privilegiado que seja.
                  </p>
                </div>
              </div>

              {/* CTA Final */}
              <div className="mt-12 p-6 sm:p-8 bg-gradient-to-br from-luxury-gold/10 to-primary/5 rounded-xl border border-luxury-gold/20">
                <h3 className="text-lg sm:text-xl font-serif text-foreground mb-3">
                  Dúvidas sobre os Termos?
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  Entre em contato com nossa equipe para esclarecer qualquer questão.
                </p>
                <Button variant="gold" asChild>
                  <a href="mailto:contato@conciera.com.br">
                    Entrar em Contato
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Termos;
