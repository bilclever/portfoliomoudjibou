import React, { useState, useMemo } from 'react';

const Realisations = () => {
  const [activeFilter, setActiveFilter] = useState('tous');
  
  const categories = useMemo(() => [
    { id: 'tous', label: 'Tous les projets' },
    { id: 'evaluation', label: 'Évaluations' },
    { id: 'recherche', label: 'Recherche' },
    { id: 'formation', label: 'Formation' },
    { id: 'consulting', label: 'Consulting' },
    { id: 'enquete', label: 'Enquêtes' }
  ], []);

  const projets = useMemo(() => [
    {
      category: "evaluation",
      title: "Évaluation Finale - Programme JVE",
      client: "Partenariat Université de Kara & ONG JVE",
      duration: "Février 2025",
      description: "Collecte et analyse de données quantitatives/qualitatives pour l'évaluation d'impact dans 3 localités",
      technologies: ["ODK Collect", "Kobotoolbox", "STATA", "Analyse qualitative", "Photographie"],
      location: "Vogan, Notse, Kpélé"
    },
    {
      category: "recherche",
      title: "Impact des Pratiques Agricoles Climatiques",
      client: "Université de Kara & ITT",
      duration: "Nov 2022 - Mars 2023",
      description: "Étude sur la sécurité alimentaire des ménages agricoles au Nord Togo",
      technologies: ["ODKbuild", "Kobo", "XSLForm", "Analyse spatiale", "STATA"],
      location: "Région de Kara"
    },
    {
      category: "formation",
      title: "Programme de Formation Data Science",
      client: "Freelance & Universités",
      duration: "2021 - Présent",
      description: "Formation de 32+ professionnels et étudiants en analyse de données et outils digitaux",
      technologies: ["STATA", "R", "SPSS", "Kobotoolbox", "XLSForm", "Capri", "Sphinx"],
      beneficiaries: "32+ étudiants et professionnels"
    },
    {
      category: "consulting",
      title: "Digitalisation des Processus MEAL",
      client: "2SP Consulting & PNUD",
      duration: "2022 - 2025",
      description: "Conception et mise en œuvre de systèmes de suivi-évaluation digitalisés pour organisations",
      technologies: ["Power BI", "Kobotoolbox", "Excel", "Tableaux de bord", "MS Project"],
      impact: "Amélioration efficacité projets"
    },
    {
      category: "recherche",
      title: "Analyse Forestière et Diagnostic MERF",
      client: "DRERF Kara",
      duration: "Oct 2023 - Jan 2024",
      description: "Évaluation diagnostique du système de présentation des données forestières - Annuaire statistique",
      technologies: ["Excel", "STATA", "SPSS", "R", "Analyse floristique"],
      focus: "Produits forestiers ligneux 2021"
    },
    {
      category: "enquete",
      title: "Enquête Nationale TIC",
      client: "Institut I2SE",
      duration: "Fév 2023 - Mars 2023",
      description: "Enquête sur les technologies de l'information et communication dans 3 préfectures",
      technologies: ["Carte ZD", "Questionnaire ménage", "Rapport mission"],
      coverage: "Kozah 1, Assoli, Kéran"
    },
    {
      category: "consulting",
      title: "Accompagnement Mémoires Universitaires",
      client: "Freelance",
      duration: "2021 - Présent",
      description: "Accompagnement technique pour 35+ étudiants en traitement, analyse données et calcul d'indices",
      technologies: ["STATA", "SPSS", "R", "Analyse quantitative", "Calcul RCA"],
      expertise: "Autonomisation femmes, indices développement"
    },
    {
      category: "evaluation",
      title: "UN Datathon - Biodiversité",
      client: "UN Datathon - Togo Data Enthousiast",
      duration: "Novembre 2023",
      description: "Analyse de la disparition de la biodiversité au Salvador avec outils avancés",
      technologies: ["ArcGIS", "STATA", "Power BI", "Data Science"],
      role: "Chef d'équipe"
    }
  ], []);

  const filteredProjets = useMemo(() => 
    activeFilter === 'tous' 
      ? projets 
      : projets.filter(projet => projet.category === activeFilter),
    [activeFilter, projets]
  );

  return (
    <section id="projets" className="py-20 bg-white" aria-labelledby="projets-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 id="projets-title" className="text-4xl font-bold text-gray-900 mb-4">
            Réalisations Significatives
          </h2>
          <p className="text-xl text-gray-600">
            Projets marquants en analyse de données, évaluation et recherche
          </p>
        </div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? 'bg-primary text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Grille des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjets.map((projet, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg card-hover border border-blue-100 overflow-hidden animate-fade-in h-full flex flex-col"
            >
              <div className="p-6 flex-1">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-primary text-white text-sm px-3 py-1 rounded-full">
                    {categories.find(c => c.id === projet.category)?.label}
                  </span>
                  <div className="text-2xl">
                    {projet.category === 'evaluation' && '📊'}
                    {projet.category === 'recherche' && '🔬'}
                    {projet.category === 'formation' && '👨‍🏫'}
                    {projet.category === 'consulting' && '💼'}
                    {projet.category === 'enquete' && '📋'}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{projet.title}</h3>
                <p className="text-primary font-medium mb-2">{projet.client}</p>
                <p className="text-gray-500 text-sm mb-4">{projet.duration}</p>
                <p className="text-gray-600 mb-4 text-sm">{projet.description}</p>
                
                {/* Informations spécifiques */}
                {(projet.location || projet.beneficiaries || projet.coverage) && (
                  <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                    <p className="text-blue-800 text-sm">
                      {projet.location && `📍 ${projet.location}`}
                      {projet.beneficiaries && `👥 ${projet.beneficiaries}`}
                      {projet.coverage && `🗺️ ${projet.coverage}`}
                      {projet.impact && `📈 ${projet.impact}`}
                      {projet.focus && `🎯 ${projet.focus}`}
                      {projet.role && `👑 ${projet.role}`}
                    </p>
                  </div>
                )}
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2 text-sm">Technologies utilisées:</h4>
                  <div className="flex flex-wrap gap-2">
                    {projet.technologies.map((tech, i) => (
                      <span 
                        key={i}
                        className="bg-white text-primary text-xs px-2 py-1 rounded-full border border-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
          
              </div>
            </div>
          ))}
        </div>

        {filteredProjets.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Aucun projet trouvé pour cette catégorie.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Realisations;