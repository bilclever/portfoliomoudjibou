import React from 'react';

const Competences = () => {
  const competencesTechniques = [
    { name: "STATA", level: 90, category: "analyse" },
    { name: "R", level: 85, category: "analyse" },
    { name: "Python", level: 80, category: "programmation" },
    { name: "Power BI", level: 88, category: "visualisation" },
    { name: "Kobotoolbox", level: 92, category: "collecte" },
    { name: "SPSS", level: 87, category: "analyse" },
    { name: "SQL", level: 75, category: "bdd" },
    { name: "Excel Avancé", level: 95, category: "analyse" }
  ];

  const methodologies = [
    "Suivi-Évaluation (MEAL)",
    "Évaluation d'impact",
    "Théorie du changement", 
    "Cadres logiques",
    "Échantillonnage statistique",
    "Analyse qualitative",
    "Gestion de projets",
    "Formation et renforcement capacitaire"
  ];

  return (
    <section id="competences" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Compétences Techniques</h2>
          <p className="text-xl text-gray-600">Expertise en analyse de données et méthodes de recherche</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Compétences techniques */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">Outils & Technologies</h3>
            <div className="space-y-6">
              {competencesTechniques.map((competence, index) => (
                <div key={index} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-gray-800">{competence.name}</span>
                    <span className="text-sm text-gray-600">{competence.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-primary rounded-full h-3 transition-all duration-1000"
                      style={{ width: `${competence.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Méthodologies */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center lg:text-left">Méthodologies</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {methodologies.map((method, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-4 shadow-md card-hover animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                    <span className="text-gray-800 font-medium">{method}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Langues */}
            <div className="mt-12">
              <h4 className="text-xl font-bold mb-6 text-center lg:text-left">Langues</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {['Français', 'English (IELTS 5.5)', 'Yoruba', 'Kabyè', 'Kotokoli', 'Arabe'].map((langue, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-lg p-3 text-center shadow-sm card-hover"
                  >
                    <span className="text-gray-800 font-medium">{langue}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Competences;