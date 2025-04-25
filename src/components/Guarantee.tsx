import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Guarantee: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-white" id="guarantee">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-8 border border-green-100">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="bg-green-100 p-4 rounded-full">
                <ShieldCheck className="h-16 w-16 text-green-600" />
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Garantia Total de Satisfação
              </h2>
              
              <p className="text-gray-700 mb-4">
                💚 <span className="font-semibold">Você não perde nada… só peso!</span> Se em 7 dias você seguir o plano 
                e não sentir nenhuma diferença no seu corpo, energia ou medidas, devolvemos 100% do seu 
                dinheiro sem questionamentos.
              </p>
              
              <p className="text-gray-700">
                E o melhor? 👉 Você ainda fica com o Desafio Detox completo como presente. Simples assim. 
                <span className="font-semibold"> Ou você transforma o seu corpo… ou não paga absolutamente nada.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;