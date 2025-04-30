
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-secondary shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/furia-logo.png"
              alt="FURIA Logo"
              className="h-10 w-auto"
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/120x40/000000/FF5900?text=FURIA";
              }}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="#members" className="nav-link">Members</Link>
          <Link to="#highlights" className="nav-link">Highlights</Link>
          <Link to="#tips" className="nav-link">Tips</Link>
          <Button 
            className="ml-4 bg-furia hover:bg-furia/80 text-white"
          >
            Support Us
          </Button>
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMenu}
            className="text-furia-light hover:text-furia p-2"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-secondary border-t border-furia/10 animate-fade-in">
          <div className="container mx-auto px-4 py-4 space-y-3">
            <Link to="/" className="block nav-link py-3" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="#members" className="block nav-link py-3" onClick={() => setIsMenuOpen(false)}>Members</Link>
            <Link to="#highlights" className="block nav-link py-3" onClick={() => setIsMenuOpen(false)}>Highlights</Link>
            <Link to="#tips" className="block nav-link py-3" onClick={() => setIsMenuOpen(false)}>Tips</Link>
            <Button 
              className="w-full bg-furia hover:bg-furia/80 text-white mt-4"
            >
              Support Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
