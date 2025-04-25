import React from 'react';
import { CheckCircle, ShoppingBag, Video, MessageCircle, CalendarCheck } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="flex p-6 rounded-lg transition-all duration-300 hover:bg-white hover:shadow-md">
      <div className="mr-4 text-green-600 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-xl mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const features = [
    {
      icon: <ShoppingBag className="h-8 w-8" />,
      title: "Lista de Compras Completa",
      description: "Receba uma lista detalhada com todos os ingredientes necessários para os 7 dias do desafio."
    },
    {
      icon: <Video className="h-8 w-8" />,
      title: "Vídeo Explicativo",
      description: "Assista a um vídeo detalhado explicando como o desafio funciona e como maximizar seus resultados."
    },
    {
      icon: <CalendarCheck className="h-8 w-8" />,
      title: "Conteúdos Diários",
      description: "Receba orientações diárias com dicas, cardápios e instruções passo a passo para cada dia."
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Suporte Direto",
      description: "Tenha acesso a suporte direto com a nutricionista Jhulie durante todo o processo do desafio."
    }
  ];

  return (
    <section className="py-16 bg-green-100/50" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            O Que É e Como Funciona o Desafio Detox
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6">
            Esse não é mais um desafio qualquer. O Desafio Detox em 7 Dias foi criado para transformar 
            a sua rotina, o seu corpo e, principalmente, a sua autoestima.
          </p>
          <p className="text-lg font-medium text-gray-700 max-w-3xl mx-auto">
            Se você seguir as orientações, é totalmente possível eliminar até 3kg de gordura em apenas uma semana!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} />
          ))}
        </div>
        
        <div className="mt-12 bg-white rounded-xl p-6 shadow-md max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
            <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
            Método Reconhecido
          </h3>
          <p className="text-gray-700">
            O método que você vai aplicar foi reconhecido como um dos 3 Melhores Programas de Emagrecimento do Brasil, 
            e já foi utilizado por mais de 20.000 alunas reais em todo o país.
          </p>
          <p className="text-gray-700 mt-4">
            <span className="font-semibold">📆 Tudo acontece em 7 dias.</span> E sua transformação começa na próxima segunda-feira.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;