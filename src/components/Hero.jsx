import React from 'react';
import photo from '../assets/photo.jpg';
const Hero = () => {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          
          {/* Photo à gauche */}
          <div className="md:w-2/5 mb-8 md:mb-0">
            <div className="relative">
              <img 
                src={photo} 
                alt="SANOUSSI Bilale"
                className="w-64 h-64 rounded-full object-cover mx-auto shadow-lg"
              />
              {/* Effet de décoration */}
              <div className="absolute -bottom-2 -right-2 w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary opacity-10 -z-10"></div>
            </div>
          </div>

          {/* Texte à droite */}
          <div className="md:w-3/5 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Développeur <span className="text-primary">Full Stack</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              Étudiant en Génie Logiciel passionné par le développement web, 
              les bases de données et les architectures distribuées.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#projects" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition text-center">
                Voir mes projets
              </a>
              <a href="#contact" className="border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition text-center">
                Me contacter
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;