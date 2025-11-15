import React, { useState } from 'react';

const Realisations = () => {
  const [activeFilter, setActiveFilter] = useState('tous');
  
  const projets = [
    {
      category: "evaluation",
      title: "Évaluation Finale - Programme JVE",
      client: "Partenariat Université de Kara & ONG JVE",
      description: "Collecte et analyse de données quantitatives/qualitatives pour l'évaluation d'impact",
      technologies: ["ODK", "Kobotoolbox", "STATA", "Analyse qualitative"],
      resultat: "Rapport d'évaluation avec recommandations actionnables"
    },
    {
      category: "recherche",
      title: "Impact des Pratiques Agricoles Climatiques",
      client: "Université de Kara & ITT",
      description: "Étude sur la sécurité alimentaire des ménages agricoles au Nord Togo",
      technologies: ["ODKbuild", "Kobo", "XSLForm", "Analyse spatiale"],
      resultat: "Modélisation de l'impact des pratiques climato-intelligentes"
    },
    {
      category: "formation",
      title: "Programme de Formation Data Science",
      client: "Freelance & Université",
      description: "Formation de 32+ professionnels et étudiants en analyse de données",
      technologies: ["STATA", "R", "SPSS", "Kobotoolbox"],
      resultat: "Renforcement des capacités locales en data science"
    },
    {
      category: "consulting",
      title: "Digitalisation des Processus MEAL",
      client: "2SP Consulting & PNUD",
      description: "Conception et mise en œuvre de systèmes de suivi-évaluation digitalisés",
      technologies: ["Power BI", "Kobotoolbox", "Excel", "Tableaux de bord"],
      resultat: "Optimisation des processus de collecte et analyse"
    }
  ];

  const categories = [
    { id: 'tous', label: 'Tous les projets' },
    { id: 'evaluation', label: 'Évaluations' },
    { id: 'recherche', label: 'Recherche' },
    { id: 'formation', label: 'Formation' },
    { id: 'consulting', label: 'Consulting' }
  ];

  const filteredProjets = activeFilter === 'tous' 
    ? projets 
    : projets.filter(projet => projet.category === activeFilter);

  return (
    <section id="projets" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Réalisations Significatives</h2>
          <p className="text-xl text-gray-600">Projets marquants en analyse de données et évaluation</p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition ${
                activeFilter === category.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Grille des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjets.map((projet, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg card-hover border border-blue-100 overflow-hidden animate-fade-in"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-primary text-white text-sm px-3 py-1 rounded-full">
                    {categories.find(c => c.id === projet.category)?.label}
                  </span>
                  <div className="text-2xl">
                    {projet.category === 'evaluation' && '📊'}
                    {projet.category === 'recherche' && '🔬'}
                    {projet.category === 'formation' && '👨‍🏫'}
                    {projet.category === 'consulting' && '💼'}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{projet.title}</h3>
                <p className="text-primary font-medium mb-4">{projet.client}</p>
                <p className="text-gray-600 mb-6">{projet.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Technologies utilisées:</h4>
                  <div className="flex flex-wrap gap-2">
                    {projet.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="bg-white text-primary text-xs px-3 py-1 rounded-full border border-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-1">Résultat:</h4>
                  <p className="text-green-700 text-sm">{projet.resultat}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Realisations;