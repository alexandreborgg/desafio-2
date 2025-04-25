import React from 'react';
import { Leaf } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-900 text-green-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-4">
            <Leaf className="h-5 w-5 mr-2" />
            <span className="font-semibold">Desafio Detox em 7 Dias</span>
          </div>
          
          <p className="text-sm text-center mb-6 max-w-2xl">
            Este site não é do Facebook e/ou Instagram: Este site não faz parte da Meta Inc. 
            Além disso, esse site não é endossado pelo Facebook e/ou Instagram de nenhuma maneira.
          </p>
          
          <div className="flex space-x-4 text-sm">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Política de Privacidade</a>
          </div>
          
          <p className="mt-6 text-xs opacity-75">
            © {new Date().getFullYear()} Desafio Detox em 7 Dias. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;