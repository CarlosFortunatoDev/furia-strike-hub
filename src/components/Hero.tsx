
import React from 'react';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <div className="hero-gradient min-h-screen flex items-center justify-center text-center text-white relative">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-secondary"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-10 py-24">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">
          <span className="text-furia">FURIA</span> CS
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-300">
          The Brazilian powerhouse taking the Counter-Strike world by storm. 
          From underdogs to champions, experience our journey to the top.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-furia hover:bg-furia/80 text-white px-8 py-6 text-lg">
            Latest Matches
          </Button>
          <Button variant="outline" className="border-furia text-furia hover:bg-furia/10 px-8 py-6 text-lg">
            Meet The Team
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="bg-black/50 backdrop-blur-sm p-4 rounded-lg">
            <p className="text-3xl font-bold text-furia">250+</p>
            <p className="text-gray-400">Tournament Wins</p>
          </div>
          <div className="bg-black/50 backdrop-blur-sm p-4 rounded-lg">
            <p className="text-3xl font-bold text-furia">15+</p>
            <p className="text-gray-400">Major Appearances</p>
          </div>
          <div className="bg-black/50 backdrop-blur-sm p-4 rounded-lg">
            <p className="text-3xl font-bold text-furia">1.2M+</p>
            <p className="text-gray-400">Fans Worldwide</p>
          </div>
          <div className="bg-black/50 backdrop-blur-sm p-4 rounded-lg">
            <p className="text-3xl font-bold text-furia">2016</p>
            <p className="text-gray-400">Year Founded</p>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-1 h-8 rounded-full bg-furia mx-auto"></div>
        <p className="text-sm text-gray-400 mt-2">Scroll Down</p>
      </div>
    </div>
  );
};

export default Hero;
