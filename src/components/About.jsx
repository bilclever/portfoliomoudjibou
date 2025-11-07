import React, { useState } from 'react';

const About = () => {
  const [expandedItems, setExpandedItems] = useState({});
  const [showAllCertifications, setShowAllCertifications] = useState(false);

  const toggleExpand = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const experiences = [
    {
      id: 1,
      title: "Stagiaire Développeur Full Stack",
      company: "Kalamar",
      period: "Juin 2025 - Aujourd'hui · 6 mois",
      location: "Lomé, Région Maritime, Togo",
      shortDescription: "Stage chez Kalamar, cabinet d'expertise en informatique et cartographie numérique intervenant dans plusieurs pays de la sous-région.",
      fullDescription: "Stage chez Kalamar, cabinet d'expertise en informatique et cartographie numérique intervenant dans plusieurs pays de la sous-région. Développement d'une application complète de suivi des performances sportives avec des fonctionnalités avancées de social networking et d'analytics.",
      achievements: [
        "Développement d'une application de suivi des performances sportives",
        "Backend : Django REST Framework",
        "Frontend : Flutter", 
        "Fonctionnalités : objectifs sportifs, enregistrement séances, métriques (distance, durée, vitesse), challenges communautaires",
        "Système de messagerie et interactions sociales entre utilisateurs"
      ],
      technologies: ["Django", "Python", "Flutter", "REST APIs", "Base de données"],
      type: "stage"
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "Switching, Routing, and Wireless Essentials",
      issuer: "Cisco Networking Academy",
      date: "Juin 2025",
      description: "Certification avancée en réseaux couvrant la commutation, le routage et les technologies sans fil."
    },
    {
      id: 2,
      name: "PHP for Beginners", 
      issuer: "Great Learning",
      date: "Novembre 2024",
      description: "Fondamentaux du développement web avec PHP et bases de la programmation backend."
    },
    {
      id: 3,
      name: "Front End Development - HTML",
      issuer: "Great Learning",
      date: "Juillet 2024",
      description: "Maîtrise des technologies frontend modernes incluant HTML5, CSS3 et JavaScript."
    },
    {
      id: 4,
      name: "Introduction to Networks",
      issuer: "Cisco Networking Academy", 
      date: "Juillet 2024",
      description: "Introduction aux concepts fondamentaux des réseaux informatiques et protocoles."
    },
    {
      id: 5,
      name: "Java Programming",
      issuer: "Great Learning",
      date: "Juillet 2024",
      description: "Programmation orientée objet avec Java, design patterns et bonnes pratiques."
    }
  ];

  // Afficher seulement 1 certification par défaut
  const visibleCertifications = showAllCertifications ? certifications : certifications.slice(0, 1);

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        
        {/* Titre principal */}
        <h2 className="text-4xl font-bold text-center mb-4">Parcours Professionnel</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Découvrez mon expérience en développement et mes certifications acquises au fil de mon parcours en génie logiciel.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Colonne Expérience */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">💼</span>
              Expérience Professionnelle
            </h3>

            {experiences.map((exp) => (
              <div key={exp.id} className="mb-6 p-6 bg-gray-50 rounded-xl hover:shadow-md transition min-h-[300px] flex flex-col">
                {/* En-tête de l'expérience */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">{exp.title}</h4>
                    <p className="text-lg text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="mt-2 sm:mt-0 sm:text-right">
                    <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full mb-2">
                      {exp.type === 'stage' ? 'Stage' : 'Emploi'}
                    </span>
                    <p className="text-sm text-gray-600">{exp.period}</p>
                    <p className="text-sm text-gray-500">{exp.location}</p>
                  </div>
                </div>

                {/* Description avec Lire plus */}
                <div className="flex-grow">
                  <p className="text-gray-700 mb-4">
                    {expandedItems[exp.id] ? exp.fullDescription : exp.shortDescription}
                  </p>

                  {/* Réalisations (visible seulement quand développé) */}
                  {expandedItems[exp.id] && (
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-800 mb-2">Réalisations :</h5>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {exp.achievements.map((achievement, index) => (
                          <li key={index}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Technologies (toujours visible) */}
                  <div className="mb-4">
                    <h5 className="font-semibold text-gray-800 mb-2">Technologies utilisées :</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bouton Lire plus/moins */}
                <button
                  onClick={() => toggleExpand(exp.id)}
                  className="text-primary hover:text-secondary font-medium text-sm mt-2 self-start"
                >
                  {expandedItems[exp.id] ? 'Voir moins' : 'Lire plus'}
                </button>
              </div>
            ))}

            {/* Citation inspirante */}
            <div className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl min-h-[120px] flex items-center">
              <p className="text-gray-700 italic text-center w-full">
                "Cette expérience chez Kalamar a confirmé mon désir de m'orienter vers les projets numériques 
                qui contribuent au bien-être et à l'amélioration de la vie quotidienne."
              </p>
            </div>
          </div>

          {/* Colonne Formations & Certifications */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-8 flex items-center">
                <span className="bg-green-100 text-green-600 p-2 rounded-lg mr-3">🎓</span>
                Formations & Certifications
              </h3>

              {/* Formation principale */}
              <div className="p-6 bg-gray-50 rounded-xl hover:shadow-md transition min-h-[150px]">
                <h4 className="text-lg font-semibold mb-2">Licence Professionnelle en Informatique</h4>
                <p className="text-primary font-medium mb-2">IAI-TOGO</p>
                <p className="text-gray-600 text-sm">Spécialisation Génie Logiciel - Développement Full Stack</p>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h4 className="text-xl font-semibold mb-6">Certifications</h4>
              <div className="space-y-4">
                {visibleCertifications.map((cert) => (
                  <div 
                    key={cert.id} 
                    className="p-4 bg-white border border-gray-200 rounded-lg hover:shadow-sm transition min-h-[120px]"
                  >
                    <h5 className="font-semibold text-gray-800 mb-1">{cert.name}</h5>
                    <p className="text-sm text-gray-600 mb-2">{cert.issuer}</p>
                    <p className="text-xs text-gray-500 mb-2">Délivrée : {cert.date}</p>
                    
                    {/* Description avec Lire plus */}
                    <div>
                      <p className="text-sm text-gray-700">
                        {expandedItems[`cert-${cert.id}`] 
                          ? cert.description 
                          : `${cert.description.substring(0, 60)}...`
                        }
                      </p>
                      <button
                        onClick={() => toggleExpand(`cert-${cert.id}`)}
                        className="text-primary hover:text-secondary font-medium text-xs mt-1"
                      >
                        {expandedItems[`cert-${cert.id}`] ? 'Voir moins' : 'Lire plus'}
                      </button>
                    </div>
                  </div>
                ))}

                {/* Bouton Voir plus/moins pour les certifications */}
                {certifications.length > 1 && (
                  <div className="text-center pt-4">
                    <button
                      onClick={() => setShowAllCertifications(!showAllCertifications)}
                      className="text-primary hover:text-secondary font-medium border border-primary px-4 py-2 rounded-lg hover:bg-blue-50 transition"
                    >
                      {showAllCertifications ? 'Voir moins' : `Voir ${certifications.length - 1} certification(s) de plus`}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;