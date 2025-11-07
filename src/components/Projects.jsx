import React, { useState } from 'react';

const Projects = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const projects = [
    {
      title: "Mon Portfolio",
      description: "Portfolio personnel développé avec React.js et Tailwind CSS pour présenter mes compétences et projets.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      githubUrl: "https://github.com/bilclever/portfolio",
      demoUrl: "#",
      featured: true
    },
    {
      title: "Application de Gestion Sportive",
      description: "Application full-stack de suivi des performances sportives avec Django REST et Flutter.",
      technologies: ["Django", "Python", "Flutter", "REST APIs"],
      githubUrl: "https://github.com/bilclever/sport-app",
      demoUrl: "#",
      featured: true
    },
    {
      title: "API REST",
      description: "API RESTful développée avec Node.js et Express pour un système de gestion de données.",
      technologies: ["Node.js", "Express", "MongoDB", "JWT"],
      githubUrl: "https://github.com/bilclever/api-rest",
      demoUrl: "#",
      featured: false
    },
    {
      title: "Site E-commerce",
      description: "Plateforme e-commerce avec système de paiement et gestion de produits.",
      technologies: ["React", "Node.js", "Stripe", "MongoDB"],
      githubUrl: "https://github.com/bilclever/ecommerce",
      demoUrl: "#",
      featured: false
    },
    {
      title: "Application Mobile",
      description: "Application mobile de gestion de tâches développée avec React Native.",
      technologies: ["React Native", "Firebase", "JavaScript"],
      githubUrl: "https://github.com/bilclever/mobile-app",
      demoUrl: "#",
      featured: false
    },
    {
      title: "Système de Réservation",
      description: "Système de réservation en ligne avec calendrier et gestion des disponibilités.",
      technologies: ["Vue.js", "Laravel", "MySQL"],
      githubUrl: "https://github.com/bilclever/booking-system",
      demoUrl: "#",
      featured: false
    }
  ];

  // Afficher seulement 3 projets par défaut
  const visibleProjects = showAllProjects ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Mes Projets</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Découvrez une sélection de mes projets de développement, allant du frontend au backend.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300 flex flex-col ${
                project.featured ? 'border-2 border-primary' : ''
              }`}
            >
              {/* Image du projet */}
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <span className="font-semibold">{project.title}</span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                {project.featured && (
                  <span className="inline-block bg-primary text-white text-xs px-2 py-1 rounded-full mb-3">
                    Projet Principal
                  </span>
                )}
                
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
                
                {/* Technologies utilisées */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Boutons d'action - TOUJOURS ALIGNÉS EN BAS */}
                <div className="flex space-x-3 mt-auto">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 text-white text-center py-2 px-4 rounded-lg hover:bg-gray-900 transition flex items-center justify-center"
                  >
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                  
                  {project.demoUrl !== "#" && (
                    <a 
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-primary text-white text-center py-2 px-4 rounded-lg hover:bg-secondary transition"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton Voir plus/moins pour les projets */}
        {projects.length > 3 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition"
            >
              {showAllProjects ? 'Voir moins de projets' : `Voir ${projects.length - 3} projet(s) de plus`}
            </button>
          </div>
        )}

        {/* Call-to-action pour GitHub */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Vous voulez voir plus de projets ?</p>
          <a 
            href="https://github.com/bilclever"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-black transition"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Voir mon GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;