import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "💻",
      skills: [
        { name: "React.js", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "Tailwind CSS", level: 75 },
        { name: "Bootstrap", level: 70 }
      ]
    },
    {
      title: "Backend", 
      icon: "⚙️",
      skills: [
        { name: "Django", level: 75 },
        { name: "Django-Rest", level: 70 },
        { name: "Java", level: 80 },
        { name: "Python", level: 65 },
        { name: "REST APIs", level: 85 }
      ]
    },
    {
      title: "Bases de Données",
      icon: "🗄️",
      skills: [
        { name: "Oracle Database", level: 70 },
        { name: "MySQL", level: 75 },
        { name: "MongoDB", level: 60 },
        { name: "PostgreSQL", level: 65 },
        { name: "SQL", level: 85 }
      ]
    },
    {
      title: "Outils & DevOps",
      icon: "🔧",
      skills: [
        { name: "Git/GitHub/GitLab", level: 80 },
        { name: "Docker", level: 60 },
        { name: "Linux", level: 75 },
        { name: "VS Code", level: 90 },
        { name: "Postman", level: 70 }
      ]
    },
    {
      title: "Soft Skills",
      icon: "🌟",
      skills: [
        { name: "Résolution de problèmes", level: 85 },
        { name: "Travail d'équipe", level: 80 },
        { name: "Communication", level: 75 },
        { name: "Gestion de projet", level: 70 },
        { name: "Adaptabilité", level: 90 }
      ]
    },
    {
      title: "En Apprentissage",
      icon: "🚀", 
      skills: [
        { name: "Architecture distribuée", level: 50 },
        { name: "Microservices", level: 45 },
        { name: "Cloud Computing", level: 40 },
        { name: "Machine Learning", level: 30 },
        { name: "React Native", level: 35 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4">Compétences</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Un panorama de mes compétences techniques et professionnelles acquises durant mon parcours en génie logiciel.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={categoryIndex}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center mb-6">
                <span className="text-2xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-xs text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-primary rounded-full h-2 transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technologies sous forme de badges */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8">Technologies Maîtrisées</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React", "JavaScript", "Java", "Python", 
              "Oracle DB", "MySQL", "MongoDB", "Git",
              "Docker", "Linux", "HTML5", "CSS3", "Tailwind",
              "REST APIs", "Postman", "VS Code"
            ].map((tech, index) => (
              <span 
                key={index}
                className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-secondary transition cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      
      </div>
    </section>
  );
};

export default Skills;