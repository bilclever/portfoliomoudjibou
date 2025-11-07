import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <nav className="w-full px-4 sm:px-6 py-3"> {/* Supprime container et mx-auto */}
        <div className="flex justify-between items-center max-w-7xl mx-auto"> {/* Ajoute max-w-7xl ici */}
          {/* Nom avec taille adaptative */}
          <div className="text-xl md:text-2xl font-bold text-primary whitespace-nowrap">
            SANOUSSI Bilale
          </div>
          
          {/* Menu desktop - caché sur mobile */}
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-gray-600 hover:text-primary transition text-sm">À propos</a>
            <a href="#skills" className="text-gray-600 hover:text-primary transition text-sm">Compétences</a>
            <a href="#projects" className="text-gray-600 hover:text-primary transition text-sm">Projets</a>
            <a href="#contact" className="text-gray-600 hover:text-primary transition text-sm">Contact</a>
          </div>

          {/* Bouton menu mobile */}
          <div className="md:hidden relative">
            <button 
              className="flex flex-col justify-center items-center w-6 h-6 space-y-1"
              onClick={toggleMenu}
              aria-label="Menu"
            >
              <span className={`block w-6 h-0.5 bg-gray-600 transition-transform ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-600 transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-0.5 bg-gray-600 transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </button>

            {/* Menu mobile */}
            <div className={`absolute top-full right-0 mt-2 w-40 bg-white/95 backdrop-blur-md rounded-lg shadow-lg border border-gray-200 transition-all duration-300 ease-in-out z-50 ${isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
              <div className="flex flex-col py-2">
                <a 
                  href="#about" 
                  className="text-gray-700 hover:text-primary hover:bg-gray-50 transition px-4 py-2 text-sm"
                  onClick={closeMenu}
                >
                  À propos
                </a>
                <a 
                  href="#skills" 
                  className="text-gray-700 hover:text-primary hover:bg-gray-50 transition px-4 py-2 text-sm"
                  onClick={closeMenu}
                >
                  Compétences
                </a>
                <a 
                  href="#projects" 
                  className="text-gray-700 hover:text-primary hover:bg-gray-50 transition px-4 py-2 text-sm"
                  onClick={closeMenu}
                >
                  Projets
                </a>
                <a 
                  href="#contact" 
                  className="text-gray-700 hover:text-primary hover:bg-gray-50 transition px-4 py-2 text-sm"
                  onClick={closeMenu}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;