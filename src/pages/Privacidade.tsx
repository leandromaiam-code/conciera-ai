import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScrollArea } from "@/components/ui/scroll-area";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import markdownContent from "./_privacidade.md?raw";

const Privacidade = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-xl p-6 md:p-10 shadow-lg border border-border/50 animate-fade-up">
              <ScrollArea className="h-[calc(100vh-220px)] pr-6">
                <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none prose-headings:scroll-mt-24 prose-p:leading-relaxed prose-li:leading-relaxed">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      table: ({ ...props }) => (
                        <div className="my-6 w-full overflow-x-auto">
                          <table className="w-full border-collapse text-sm" {...props} />
                        </div>
                      ),
                      th: ({ ...props }) => (
                        <th className="border border-border bg-muted px-3 py-2 text-left font-semibold" {...props} />
                      ),
                      td: ({ ...props }) => (
                        <td className="border border-border px-3 py-2 align-top" {...props} />
                      ),
                      ul: ({ ...props }) => (
                        <ul className="list-disc pl-6 marker:text-foreground" {...props} />
                      ),
                      ol: ({ ...props }) => (
                        <ol className="list-decimal pl-6 marker:text-foreground" {...props} />
                      ),
                    }}
                  >
                    {markdownContent}
                  </ReactMarkdown>
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
