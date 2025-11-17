import React from 'react';

const Expertise = () => {
  const expertAreas = [
    {
      icon: "📈",
      title: "Suivi-Évaluation",
      description: "Systèmes MEAL, evaluation de projet programme, planification operationnel",
      tools: ["Kobo Toolbox", "ODK", "Excel", "Power BI"]
    },
    {
      icon: "🔍",
      title: "Planification Statistique",
      description: "Conception et structuration d’analyses statistiques pour optimiser la prise de décision.",
      tools: ["STATA", "R", "SPSS", "Python"]
    },
    {
      icon: "💻",
      title: "Recherche Qualitative et Quantitative",
      description: "Collecte de données, entretiens, enquêtes, analyses statistiques et thématiques",
      tools: ["Python", "R", "Excel", "SPSS"]
    },
    {
      icon: "📋",
      title: "Gestion de Projets",
      description: "Planification stratégique, théorie du changement, cadres logiques",
      tools: ["MS Project", "Excel", "Kobotoolbox", "ODK"]
    }
  ];

  return (
    <section id="expertise" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Domaines d'Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Spécialiste en analyse de données et évaluation de programmes de développement
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertAreas.map((area, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 card-hover border border-blue-100 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4">{area.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h3>
              <p className="text-gray-600 mb-4">{area.description}</p>
              <div className="flex flex-wrap gap-2">
                {area.tools.map((tool, toolIndex) => (
                  <span 
                    key={toolIndex}
                    className="bg-white text-primary text-xs px-3 py-1 rounded-full border border-blue-200"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;