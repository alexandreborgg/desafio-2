import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 bg-green-600 text-white" id="cta">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Não Perca Tempo! Transforme seu Corpo em Apenas 7 Dias
          </h2>
          
          <p className="text-lg text-green-100 mb-8">
            O Desafio Detox em 7 Dias já transformou milhares de vidas. 
            Agora é a SUA vez de conquistar o corpo que sempre sonhou.
          </p>
          
          <div className="bg-white rounded-xl p-8 text-left mb-10">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              O Que Você Vai Receber:
            </h3>
            
            <div className="space-y-3 mb-6">
              {[
                "Lista de compras completa para os 7 dias",
                "Vídeo explicativo detalhado sobre o método",
                "Cardápio e orientações diárias personalizadas",
                "Suporte direto com a nutricionista Jhulie",
                "Dicas extras para potencializar resultados",
                "Acesso a grupo exclusivo de alunas"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="mb-6">
              <div className="text-gray-800 font-bold text-xl mb-1">
                Investimento:
              </div>
              <div className="flex items-center justify-start">
                <span className="text-gray-500 line-through text-lg">R$97,00</span>
                <ArrowRight className="mx-3 h-5 w-5 text-gray-400" />
                <span className="text-green-600 font-bold text-3xl">R$27,00</span>
              </div>
              <p className="text-gray-600 text-sm mt-1">
                Pagamento único, sem mensalidades
              </p>
            </div>
            
            <a
              href="#"
              className="block w-full bg-green-600 hover:bg-green-700 transition-colors duration-300 text-center text-white font-bold py-4 px-6 rounded-xl shadow-md hover:shadow-xl"
            >
              QUERO COMEÇAR AGORA!
            </a>
            
            <p className="text-center text-sm text-gray-500 mt-4">
              Pagamento 100% seguro via cartão, Pix ou boleto
            </p>
          </div>
          
          <div className="text-green-100 text-sm">
            <p>
              Garantia total: ou você emagrece em 7 dias, ou recebe seu dinheiro de volta 
              e ainda fica com o desafio gratuito.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;