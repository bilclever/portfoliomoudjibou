import React from 'react';

const Timeline = () => {
  const experiences = [
    {
      year: "2025",
      title: "Assistant en Statistique et Suivi-Évaluation",
      organization: "Ministère de la Sécurité et Protection Civile",
      duration: "Février 2025 - Juin 2025",
      achievements: [
        "Production de statistiques sur accidents routiers et cybercriminalité",
        "Élaboration d'outils de suivi des directives ministérielles",
        "Contribution au rapport pays CDEAO sur la sécurité"
      ],
      type: "professional"
    },
    {
      year: "2024",
      title: "Champion d'Afrique - World Evaluation Case Challenge",
      organization: "Représentation du Togo",
      duration: "Novembre 2024",
      achievements: [
        "2ème place mondiale en évaluation de cas",
        "Élaboration de plans de renforcement capacitaire",
        "Expertise évaluée par des experts mondiaux"
      ],
      type: "achievement"
    },
    {
      year: "2022-2025",
      title: "Consultant Junior",
      organization: "PNUD Togo",
      duration: "2022 - 2025",
      achievements: [
        "Suivi de projets et budgets",
        "Digitalisation des secteurs de développement",
        "Analyses de projets et rapports"
      ],
      type: "professional"
    },
    {
      year: "2021-2025",
      title: "Consultant Freelance & Formateur",
      organization: "Indépendant & 2SP Consulting",
      duration: "2021 - Présent",
      achievements: [
        "Formation de 32+ étudiants en STATA, R et analyse de données",
        "Conception et digitalisation de questionnaires",
        "Accompagnement technique pour 35+ mémoires universitaires"
      ],
      type: "consulting"
    }
  ];

  return (
    <section id="parcours" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Parcours Professionnel</h2>
          <p className="text-xl text-gray-600">Expériences significatives en suivi-évaluation et data science</p>
        </div>

        <div className="relative">
          {/* Ligne de timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full hidden md:block"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`relative flex flex-col md:flex-row items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Point sur la timeline */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white z-10 hidden md:block"></div>
              
              {/* Date */}
              <div className="md:w-2/12 mb-4 md:mb-0 text-center">
                <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold inline-block">
                  {exp.year}
                </div>
              </div>
              
              {/* Carte d'expérience */}
              <div className="md:w-8/12">
                <div className="bg-white rounded-2xl shadow-lg p-6 card-hover animate-slide-up">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      exp.type === 'professional' ? 'bg-blue-100 text-blue-800' :
                      exp.type === 'achievement' ? 'bg-green-100 text-green-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {exp.type === 'professional' ? 'Professionnel' : 
                       exp.type === 'achievement' ? 'Réussite' : 'Consulting'}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;