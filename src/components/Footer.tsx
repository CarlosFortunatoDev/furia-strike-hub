
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary pt-12 pb-6 text-furia-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/">
              <img
                src="/furia-logo.png"
                alt="Logo FURIA"
                className="h-12 w-auto mb-4"
                onError={(e) => {
                  e.currentTarget.src = "https://placehold.co/150x50/000000/FF5900?text=FURIA";
                }}
              />
            </Link>
            <p className="text-sm text-gray-400 mt-4">
              FURIA é uma organização profissional de esports baseada no Brasil, conhecida por seu time altamente competitivo de Counter-Strike.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-furia">Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-furia transition-colors">Início</Link></li>
              <li><Link to="#members" className="text-gray-400 hover:text-furia transition-colors">Jogadores</Link></li>
              <li><Link to="#highlights" className="text-gray-400 hover:text-furia transition-colors">Destaques</Link></li>
              <li><Link to="#tips" className="text-gray-400 hover:text-furia transition-colors">Dicas</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-furia">Conecte-se</h3>
            <ul className="space-y-2">
              <li><a href="https://twitter.com/FURIA" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-furia transition-colors">Twitter</a></li>
              <li><a href="https://instagram.com/furia" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-furia transition-colors">Instagram</a></li>
              <li><a href="https://youtube.com/furia" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-furia transition-colors">YouTube</a></li>
              <li><a href="https://twitch.tv/furia" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-furia transition-colors">Twitch</a></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-furia">Newsletter</h3>
            <p className="text-sm text-gray-400 mb-4">Inscreva-se para receber as últimas notícias sobre a FURIA</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Seu email"
                className="px-4 py-2 bg-furia-gray/20 text-furia-light rounded-md focus:outline-none focus:ring-2 focus:ring-furia"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-furia text-white rounded-md hover:bg-furia/80 transition-colors"
              >
                Inscrever
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} FURIA Esports. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
