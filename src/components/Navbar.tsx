import React from 'react';
import { Leaf } from 'lucide-react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm shadow-sm z-50 py-3">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Leaf className="h-6 w-6 text-green-600 mr-2" />
          <span className="font-semibold text-lg text-green-700">Desafio Detox</span>
        </div>
        <a 
          href="#cta" 
          className="bg-green-600 hover:bg-green-700 transition-colors duration-300 text-white px-4 py-2 rounded-full text-sm font-medium"
        >
          Garantir Vaga
        </a>
      </div>
    </nav>
  );
};

export default Navbar;