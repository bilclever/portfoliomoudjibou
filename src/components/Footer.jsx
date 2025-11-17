import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Colonne 1 - Nom et description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-primary">SANOUSSI Moudjibou</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Data Scientist & Évaluateur de programmes spécialisé en suivi-évaluation 
              et analyse de données pour le développement durable.
            </p>
          </div>

          {/* Colonne 2 - Liens rapides */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Navigation</h4>
            <div className="flex flex-col space-y-2">
              <a href="#expertise" className="text-gray-300 hover:text-primary transition text-sm">Expertise</a>
              <a href="#parcours" className="text-gray-300 hover:text-primary transition text-sm">Parcours</a>
              <a href="#projets" className="text-gray-300 hover:text-primary transition text-sm">Réalisations</a>
              <a href="#competences" className="text-gray-300 hover:text-primary transition text-sm">Compétences</a>
              <a href="#contact" className="text-gray-300 hover:text-primary transition text-sm">Contact</a>
            </div>
          </div>

          {/* Colonne 3 - Contact rapide */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Rapide</h4>
            <div className="space-y-2">
              <p className="text-gray-300 text-sm"> mjquiet@outlook.fr</p>
              <p className="text-gray-300 text-sm">📞 +228 92 28 10 25</p>
              <p className="text-gray-300 text-sm">📍 Kara, Togo</p>
            </div>
          </div>
        </div>

        {/* Ligne de séparation */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <p className="text-gray-400 text-sm ">
              © {currentYear} SANOUSSI Bilale. Tous droits réservés.
            </p>
    
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;