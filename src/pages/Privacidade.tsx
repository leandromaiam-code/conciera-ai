import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Shield, Lock } from "lucide-react";

const Privacidade = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-up">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
                Política de Privacidade
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Transparência total sobre como tratamos, protegemos e utilizamos seus dados conforme a LGPD.
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 mb-12 animate-fade-up [animation-delay:100ms]">
              <div className="bg-card p-6 rounded-xl border border-border/50 shadow-sm flex items-start space-x-4">
                <Shield className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Segurança Garantida</h3>
                  <p className="text-sm text-muted-foreground">Medidas rigorosas para proteção contra acesso não autorizado.</p>
                </div>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border/50 shadow-sm flex items-start space-x-4">
                <Lock className="w-8 h-8 text-primary shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Dados Criptografados</h3>
                  <p className="text-sm text-muted-foreground">Suas informações e de seus pacientes são tratadas com sigilo absoluto.</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 md:p-10 shadow-lg border border-border/50 animate-fade-up [animation-delay:200ms]">
              <ScrollArea className="h-[calc(100vh-400px)] pr-6">
                <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none space-y-8 text-muted-foreground">
                  
                  <div>
                    <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                       Confidencialidade das Informações
                    </h3>
                    <p className="mt-2">
                      <strong>10.1.</strong> As informações fornecidas pelo Usuário, Atendentes e pelos Pacientes do Usuário serão de uso confidencial e exclusivo do próprio Usuário e da CONCIERA.
                    </p>
                    <p>
                      <strong>10.1.1.</strong> A CONCIERA pode, mediante autorização explícita do Usuário, fornecer dados agregados relacionados à performance das campanhas de marketing do Usuário à agência de marketing ou a outros parceiros de marketing do Usuário. Neste caso, o Usuário deverá indicar à CONCIERA quem são as pessoas jurídicas ou parceiros.
                    </p>
                    <p>
                      <strong>10.1.2.</strong> Nos termos da Lei Federal no. 13.709/2019, em caso de autorização para compartilhamento dos dados, o Usuário garante que está resguardado por uma base legal para o referido tratamento.
                    </p>
                    <p>
                      <strong>10.2.</strong> As informações somente serão fornecidas nos casos previstos pela Lei ou quando constatada(s) fraude(s), como por exemplo falsidade ideológica, falsificação ou incorreta utilização dos serviços.
                    </p>
                    <p>
                      <strong>10.3.</strong> Para os Usuários que permanecem com um Cadastro ativo e com os planos pagos em dia, a CONCIERA manterá os dados e informações dos Clientes ou Pacientes do Usuário, por prazo indeterminado, na forma prevista na legislação.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                       Coleta de Informações Pessoais
                    </h3>
                    <p className="mt-2">
                      <strong>19.1.</strong> O Usuário autoriza a CONCIERA a utilizar dados anônimos e agregados como insumos para o mapeamento de informações de mercado e formação de estatísticas em artigos, relatórios internos ou externos, ebooks ou outros tipos de publicação.
                    </p>
                    <p>
                      <strong>19.2.</strong> Através do cadastramento, uso e fornecimento de informações à CONCIERA, o Usuário de forma expressa aceita o presente Termo e as condições previstas na Política de Privacidade sobre o uso de suas informações.
                    </p>
                    <p className="bg-primary/10 p-4 rounded-lg border-l-4 border-primary text-foreground">
                      <strong>19.2.1.</strong> A CONCIERA ressalta que não terá acesso a quaisquer informações de Pacientes, cujo sigilo seja protegido pela legislação brasileira e pelas resoluções de categoria profissional.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                       Proteção de Dados (LGPD)
                    </h3>
                    <p className="mt-2">
                      <strong>27.1.</strong> Nos termos da Lei Federal n. 13.709/2018 (Lei Geral de Proteção de Dados), os titulares dos dados pessoais alimentados na Plataforma poderão obter da CONCIERA, mediante requisição:
                    </p>
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Confirmação da existência de tratamento;</li>
                      <li>Acesso aos dados;</li>
                      <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
                      <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
                      <li>Portabilidade dos dados a outro fornecedor de serviço;</li>
                      <li>Eliminação dos dados pessoais tratados com o consentimento do titular;</li>
                      <li>Informação sobre o compartilhamento de dados;</li>
                      <li>Revogação do consentimento.</li>
                    </ul>
                    
                    <div className="mt-6 p-6 bg-muted rounded-xl">
                      <h4 className="font-bold text-foreground mb-2">Canal do Encarregado (DPO)</h4>
                      <p className="mb-4">
                        <strong>27.2.</strong> A requisição acerca das informações tratadas deverá ser enviada para:
                      </p>
                      <a href="mailto:suporte@conciera.com.br" className="text-xl font-bold text-primary hover:underline">
                        suporte@conciera.com.br
                      </a>
                      <p className="text-xs mt-4">
                        Deve constar no corpo do e-mail os dados de identificação do proprietário das informações (nome completo, CPF, RG) e cópia de documento pessoal com foto.
                      </p>
                    </div>
                  </div>

                  <p className="text-center pt-8 border-t border-border/50 text-sm">
                    Para ler o contrato completo e todas as cláusulas de serviço, acesse nossos <a href="/termos" className="text-primary hover:underline font-medium">Termos de Uso</a>.
                  </p>
                  
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacidade;
