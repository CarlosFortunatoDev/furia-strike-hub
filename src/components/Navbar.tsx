import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinkClass = (id: string) =>
    `nav-link px-4 py-2 transition-colors ${
      activeSection === id ? 'text-furia font-bold border-b-2 border-furia' : 'text-furia-light'
    }`;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-furia-dark/85 shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="#hero">
            <img
              src="https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png"
              alt="Logo FURIA"
              className="h-10 w-auto"
              onError={(e) => {
                e.currentTarget.src =
                  'https://upload.wikimedia.org/wikipedia/pt/f/f9/Furia_Esports_logo.png';
              }}
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <a href="#hero" className={navLinkClass('hero')}>Início</a>
          <a href="#matches" className={navLinkClass('matches')} onClick={() => setIsMenuOpen(false)}>Partidas</a>
          <a href="#members" className={navLinkClass('members')}>Jogadores</a>
          <a href="#highlights" className={navLinkClass('highlights')}>Destaques</a>
          <a href="#tips" className={navLinkClass('tips')}>Dicas</a>
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-furia-light hover:text-furia p-2"
            aria-label="Alternar Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-secondary border-t border-furia/10 animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <a href="#hero" className={navLinkClass('hero')} onClick={() => setIsMenuOpen(false)}>Início</a>
            <a href="#matches" className={navLinkClass('matches')} onClick={() => setIsMenuOpen(false)}>Partidas</a>
            <a href="#members" className={navLinkClass('members')} onClick={() => setIsMenuOpen(false)}>Jogadores</a>
            <a href="#highlights" className={navLinkClass('highlights')} onClick={() => setIsMenuOpen(false)}>Destaques</a>
            <a href="#tips" className={navLinkClass('tips')} onClick={() => setIsMenuOpen(false)}>Dicas</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
