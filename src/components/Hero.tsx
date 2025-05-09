
import React from 'react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <div id='hero' className="hero-gradient min-h-screen flex items-center justify-center text-center text-white relative">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-secondary"></div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 py-24">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="text-furia-yellow font-title">FURIA</span> CS
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-300">
          FURIA não é só um nome, é um estado de espírito. Nascidos para competir, criados para vencer.
          Bem-vindo ao território dos imbatíveis.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href='#matches'><Button className="bg-furia hover:bg-furia/50 text-white px-8 py-6 text-lg">
            Próximas Partidas
          </Button></a>
          <a href='#members'><Button variant="outline" className="border-furia text-furia-dark hover:bg-furia-dark/10 hover:text-furia-light px-8 py-6 text-lg">
            Conheça a Equipe
          </Button></a>
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="bg-black/50 backdrop-blur-sm p-4 rounded-lg">
            <p className="text-3xl font-bold text-furia">800+</p>
            <p className="text-gray-400">Partidas Vencidas</p>
          </div>
          <div className="bg-black/50 backdrop-blur-sm p-4 rounded-lg">
            <p className="text-3xl font-bold text-furia">18+</p>
            <p className="text-gray-400">Títulos Conquitados</p>
          </div>
          <div className="bg-black/50 backdrop-blur-sm p-4 rounded-lg">
            <p className="text-3xl font-bold text-furia">2M+</p>
            <p className="text-gray-400">Fãs no Mundo</p>
          </div>
          <div className="bg-black/50 backdrop-blur-sm p-4 rounded-lg">
            <p className="text-3xl font-bold text-furia">2017</p>
            <p className="text-gray-400">Ano de Fundação</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-8 rounded-full bg-furia-yellow mx-auto"></div>
        <p className="text-sm text-gray-400 mt-2">Rolar para Baixo</p>
      </div>
    </div>
  );
};

export default Hero;
