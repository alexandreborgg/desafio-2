import React from 'react';

const AboutNutritionist: React.FC = () => {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-green-600 font-medium mb-2">QUEM IRÁ TE ACOMPANHAR</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Conheça a Nutricionista Jhullye Sampaio
          </h2>
          
          <div className="mb-6">
            <img 
              src="/src/imgs/nutricionista.png"
              alt="Nutricionista Jhullye Sampaio"
              className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg"
            />
          </div>
          
          <p className="text-gray-700 mb-4">
            👩‍⚕️ Nutricionista há 4 anos, especialista em transformar a autoestima de mulheres através 
            do emagrecimento. Jhullye já ajudou mais de 5.000 mulheres a eliminarem gordura localizada, 
            celulite, papada e conquistarem o corpo que sempre quiseram — se sentindo lindas, confiantes 
            e seguras até de biquíni.
          </p>
          
          <p className="text-gray-700 mb-4">
            Ela entende profundamente os desafios femininos: barriga saliente, braços flácidos, baixa 
            libido e insegurança no espelho. E é exatamente por isso que criou um método prático, eficaz 
            e com resultados visíveis em poucos dias.
          </p>
          
          <p className="text-gray-700 font-medium">
            ✨ Agora, Jhullye quer que você seja a próxima transformação. Ela promete uma coisa: devolver sua autoestima.
          </p>
          
          <div className="mt-8">
            <a 
              href="#cta" 
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              QUERO COMEÇAR MINHA TRANSFORMAÇÃO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutNutritionist;