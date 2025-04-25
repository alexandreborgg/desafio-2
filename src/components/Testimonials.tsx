import React from 'react';

interface TestimonialProps {
  imageSrc: string;
  name: string;
  location?: string;
  text: string;
  beforeAfter?: boolean;
}

const Testimonial: React.FC<TestimonialProps> = ({ imageSrc, name, location, text, beforeAfter }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      <img 
        src={imageSrc} 
        alt={`Resultado de ${name}`}
        className="w-full h-64 object-cover"
      />
      <div className="p-5">
        <h3 className="font-semibold text-lg mb-1">{name}</h3>
        {location && <p className="text-gray-500 text-sm mb-3">{location}</p>}
        <p className="text-gray-700">{text}</p>
        {beforeAfter && (
          <div className="mt-3 text-xs text-green-700 font-medium">
            *Antes e depois de 7 dias no desafio
          </div>
        )}
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      imageSrc: "/src/imgs/download (2).png",
      name: "Ana Carla",
      location: "Rio de Janeiro",
      text: "Perdi 2,7kg em 7 dias! Minha barriga diminuiu visivelmente e me sinto com muito mais energia.",
      beforeAfter: true
    },
    {
      imageSrc: "/src/imgs/download copy.jpeg",
      name: "Juliana Mendes",
      location: "São Paulo",
      text: "Finalmente um programa que não me deixou passando fome! Perdi 3kg e o inchaço sumiu completamente.",
      beforeAfter: true
    },
    {
      imageSrc: "/src/imgs/angie-joyce-before-and-after-weight-loss.webp",
      name: "Gabriela Lima",
      location: "Belo Horizonte",
      text: "Minha autoestima voltou! Perdi 2,5kg e minhas roupas já estão mais soltas depois de apenas uma semana.",
      beforeAfter: true
    }
  ];

  return (
    <section className="py-16 bg-green-50" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            O Que As Mulheres Estão Dizendo
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Veja os resultados reais de mulheres que completaram o Desafio Detox de 7 Dias e transformaram seus corpos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#cta" 
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          >
            QUERO TER RESULTADOS COMO ESTES!
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;