import React, { useMemo } from 'react';

const Timeline = () => {
  const experiences = useMemo(() => [
    {
      year: "2025",
      title: "Assistant en Statistique, Planification et Suivi-Évaluation",
      organization: "Ministère de la Sécurité",
      duration: "Février 2025 - Juin 2025",
      achievements: [
        "Production de statistiques sur accidents routiers, cybercriminalité et justice populaire",
        "Élaboration de documents projets, plans d'actions annuels et PTBA",
        "Rédaction du rapport pays CDEAO sur la situation de sécurité",
        "Conception d'outils de suivi des directives ministérielles",
        "Data tidying et analyse de rapports hebdomadaires de sécurité"
      ],
      type: "professional"
    },
    {
      year: "2024",
      title: "Champion d'Afrique - World Evaluation Case Challenge",
      organization: "Représentation du Togo - Chef d'équipe",
      duration: "Novembre 2024",
      achievements: [
        "2ème place mondiale en évaluation de cas",
        "Élaboration de plans de renforcement de capacités pour une ONG",
        "Expertise évaluée par des experts mondiaux en évaluation"
      ],
      type: "achievement"
    },
    {
      year: "2023-2024",
      title: "Consultant Individuel & Formateur",
      organization: "2SP Consulting & Freelance",
      duration: "2023 - Présent",
      achievements: [
        "Rédaction d'offres techniques et financières",
        "Conception de méthodologies d'échantillonnage et questionnaires",
        "Formation STATA, SPSS, MS Project, Kobotoolbox",
        "Accompagnement stagiaires Université d'Abomey Calavi (projet CEA-SMIA)"
      ],
      type: "consulting"
    },
    {
      year: "2023",
      title: "Assistant de Recherche & Analyste",
      organization: "DRERF Kara & Partenariats Universitaires",
      duration: "Octobre 2023 - Mars 2023",
      achievements: [
        "Analyse données floristiques (Excel, STATA, SPSS, R)",
        "Évaluation diagnostique MERF - Annuaire statistique produits forestiers",
        "Impact des pratiques agricoles climato-intelligentes sur la sécurité alimentaire"
      ],
      type: "research"
    },
    {
      year: "2022-2025",
      title: "Consultant Junior",
      organization: "PNUD Togo",
      duration: "2022 - 2025",
      achievements: [
        "Suivi de projets et budgets",
        "Digital fitness - Formation digitalisation secteurs développement",
        "Spot check projets terrain et rédaction rapports",
        "Analyse de projets et réunions partenaires"
      ],
      type: "professional"
    },
    {
      year: "2021-2025",
      title: "Consultant Freelance & Formateur",
      organization: "Indépendant",
      duration: "2021 - Présent",
      achievements: [
        "Formation de 32+ étudiants/professionnels en STATA, R, SPSS",
        "Digitalisation questionnaires (Kobotoolbox, XLSform, Capri, Sphinx)",
        "Accompagnement technique 35+ mémoires universitaires",
        "Analyse données EHCVM, EDST, QUIBB, MICS, ERI-ESI"
      ],
      type: "consulting"
    },
    {
      year: "2020",
      title: "Statisticien Junior",
      organization: "INSEED-Togo (Direction Régionale Centrale)",
      duration: "Novembre 2020 - Décembre 2020",
      achievements: [
        "Rédaction annuaire statistique 2013-2018 et 2019 région centrale",
        "Organisation ateliers de validation",
        "Intégration des amendements et rédaction de rapports"
      ],
      type: "professional"
    }
  ], []);

  return (
    <section id="parcours" className="py-20 bg-gray-50" aria-labelledby="parcours-title">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 id="parcours-title" className="text-4xl font-bold text-gray-900 mb-4">Parcours Professionnel</h2>
          <p className="text-xl text-gray-600">Expériences significatives en statistique, suivi-évaluation et analyse de données</p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full hidden md:block" role="presentation" aria-hidden="true"></div>
          
          <ol className="relative" aria-label="Chronologie des expériences professionnelles">
            {experiences.map((exp, index) => (
              <li 
                key={index}
                className={`relative flex flex-col md:flex-row items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white z-10 hidden md:block"></div>
                
                <div className="md:w-2/12 mb-4 md:mb-0 text-center">
                  <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold inline-block">
                    {exp.year}
                  </div>
                </div>
                
                <div className="md:w-8/12">
                  <div className="bg-white rounded-2xl shadow-lg p-6 card-hover animate-slide-up">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        exp.type === 'professional' ? 'bg-blue-100 text-blue-800' :
                        exp.type === 'achievement' ? 'bg-green-100 text-green-800' :
                        exp.type === 'research' ? 'bg-orange-100 text-orange-800' :
                        'bg-purple-100 text-purple-800'
                      }`}>
                        {exp.type === 'professional' ? 'Professionnel' : 
                         exp.type === 'achievement' ? 'Réussite' :
                         exp.type === 'research' ? 'Recherche' : 'Consulting'}
                      </span>
                    </div>
                    <p className="text-primary font-medium mb-2">{exp.organization}</p>
                    <p className="text-gray-500 text-sm mb-4">{exp.duration}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-600 text-sm flex items-start">
                          <span className="text-green-500 mr-2 mt-1">✓</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Timeline;