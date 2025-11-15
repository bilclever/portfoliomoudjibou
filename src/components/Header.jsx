import React, { useState } from 'react';
import photo from '../assets/photo.jpeg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50 border-b-4 border-primary">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex justify-between items-center">
          {/* Logo avec photo */}
          <div className="flex items-center space-x-3">
            <img 
              src={photo} 
              alt="SANOUSSI Moudjibou"
              className="w-10 h-10 rounded-full object-cover border-2 border-primary"
            />
            <div className="text-xl font-bold text-dark">
              <span className="text-primary">SANOUSSI</span> M.
            </div>
          </div>
          
          {/* Menu desktop */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#expertise" className="text-gray-700 hover:text-primary transition font-medium text-sm">Expertise</a>
            <a href="#parcours" className="text-gray-700 hover:text-primary transition font-medium text-sm">Parcours</a>
            <a href="#projets" className="text-gray-700 hover:text-primary transition font-medium text-sm">Réalisations</a>
            <a href="#competences" className="text-gray-700 hover:text-primary transition font-medium text-sm">Compétences</a>
            <a href="#contact" className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition font-medium text-sm">
              Contact
            </a>
          </div>

          {/*  LE TOGGLE MENU  */}
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
            <div className={`absolute top-full right-0 mt-2 w-48 bg-white/95 backdrop-blur-md rounded-lg shadow-lg border border-gray-200 transition-all duration-300 ease-in-out z-50 ${isMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
              <div className="flex flex-col py-2">
                <a 
                  href="#expertise" 
                  className="text-gray-700 hover:text-primary hover:bg-gray-50 transition px-4 py-2 text-sm"
                  onClick={closeMenu}
                >
                  Expertise
                </a>
                <a 
                  href="#parcours" 
                  className="text-gray-700 hover:text-primary hover:bg-gray-50 transition px-4 py-2 text-sm"
                  onClick={closeMenu}
                >
                  Parcours
                </a>
                <a 
                  href="#projets" 
                  className="text-gray-700 hover:text-primary hover:bg-gray-50 transition px-4 py-2 text-sm"
                  onClick={closeMenu}
                >
                  Réalisations
                </a>
                <a 
                  href="#competences" 
                  className="text-gray-700 hover:text-primary hover:bg-gray-50 transition px-4 py-2 text-sm"
                  onClick={closeMenu}
                >
                  Compétences
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