import React from 'react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Texte principal */}
          <div className="text-center lg:text-left animate-slide-up">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              📊 Analyste staticient & Spécialiste suivie evaluation
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              SANOUSSI <span className="text-primary">Moudjibou</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Spécialiste en suivi-évaluation et analyse de données. <br /> 
              Je transforme les données complexes en insights actionnables pour le développement durable.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#projets" className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-secondary transition shadow-lg">
                Voir mes réalisations
              </a>
              <a href="#contact" className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition">
                Discutons de votre projet
              </a>
            </div>
          </div>

          {/* Carte de visualisation */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300 card-hover">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">75%</div>
                  <div className="text-sm text-gray-500">Projets MEAL</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">90%</div>
                  <div className="text-sm text-gray-500">Analyse Data</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">85%</div>
                  <div className="text-sm text-gray-500">Formation</div>
                </div>
              </div>
              
              <div className="space-y-4">
                {['Data Analysis', 'Planification Stratégique', 'Suivie Evaluation','Recherche Qualitative et Quantitative'].map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-700">{skill}</span>
                      <span className="text-gray-500">{90 - index * 10}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary rounded-full h-2 transition-all duration-1000"
                        style={{ width: `${90 - index * 10}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Éléments décoratifs */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;