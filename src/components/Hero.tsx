import React from 'react';
import { ArrowDown } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

const Hero: React.FC = () => {
  return (
    <section className="pt-20 pb-12 bg-gradient-to-br from-green-50 to-green-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-200 rounded-full opacity-30 -mr-32 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-green-200 rounded-full opacity-30 -ml-20 -mb-10"></div>
      
      <div className="container mx-auto px-4 pt-10 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block bg-red-500 text-white rounded-full px-4 py-1 text-sm font-medium mb-6 animate-pulse">
            ⚠️ OFERTA POR TEMPO LIMITADO ⚠️
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            Desafio Detox em <span className="text-green-600">7 Dias</span>
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            O plano certo para enxugar até <span className="font-semibold">3kg de gordura em 7 dias</span> — 
            sem enrolação, sem modinha. Só um método direto, validado por milhares de mulheres reais.
          </h2>

          <div className="aspect-video w-full max-w-2xl mx-auto mb-8 rounded-xl overflow-hidden shadow-lg">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/Kp4EDxCScgo?si=uuRe0Z97Z5s79BpW" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
          
          <div className="mb-8">
            <p className="text-gray-600 mb-2">PRÓXIMA TURMA COMEÇA:</p>
            <CountdownTimer />
          </div>
          
          <a 
            href="#cta" 
            className="inline-block bg-green-600 hover:bg-green-700 text-white text-lg font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mb-6"
          >
            QUERO GARANTIR MINHA VAGA COM DESCONTO!
          </a>
          
          <p className="text-gray-600 text-sm">
            APENAS <span className="line-through">R$97,00</span> <span className="font-bold text-green-600">R$27,00</span> PARA PARTICIPAR
          </p>
          
          <div className="mt-12 flex justify-center">
            <ArrowDown className="h-8 w-8 text-green-600 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;