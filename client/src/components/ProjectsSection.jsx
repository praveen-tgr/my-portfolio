import { ExternalLink, Github } from "lucide-react";

export default function ProjectsSection() {
  const projects = [
    {
      name: "Learnify",
      description: "A modern course discovery platform showcasing clean UI, state management, and routing with improved course discovery by 35%.",
      technologies: ["React.js", "JavaScript", "CSS3"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      alt: "E-learning platform interface",
      github:"https://praveen-tgr.github.io/Learnify/",
      githubli:"https://github.com/praveen-tgr/Learnify.git"

    },
    {
      name: "Weather App",
      description: "Real-time weather updates based on user input with API integration, geolocation, and responsive design. Attracted 150+ unique users.",
      technologies: ["JavaScript", "OpenWeather API", "HTML5"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      alt: "Weather application interface",
      github:"https://praveen-tgr.github.io/Weather-App/",
      githubli:"https://github.com/praveen-tgr/Weather-App.git"
    },
    {
      name: "BookFinder",
      description: "A book search app using Open Library API with advanced search functionality and responsive UI for discovering books easily.",
      technologies: ["React.js", "Open Library API", "CSS3"],
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      alt: "Book search application interface",
      github:"https://praveen-tgr.github.io/Book-Finder/",
      githubli:"https://github.com/praveen-tgr/Book-Finder.git"
    },
    {
      name: "Restaurant App",
      description: "Multi-page food website with menu, gallery, and smooth user navigation using React Router. Reduced load time by 30%.",
      technologies: ["React.js", "React Router", "CSS3"],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      alt: "Restaurant website interface",
      github:"https://praveen-tgr.github.io/restaurant-app/",
      githubli:"https://github.com/praveen-tgr/restaurant-app.git"

    },
    {
      name: "Personal Portfolio",
      description: "A personal portfolio to showcase my skills and projects. Fully responsive, deployed, and received 250+ visits in first month.",
      technologies: ["React.js", "Tailwind CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      alt: "Portfolio website interface",
      github:"https://praveen-tgr.github.io/portfolio/",
      githubli:"https://github.com/praveen-tgr/portfolio.git"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold dark-gray mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary-red mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A collection of projects showcasing my skills in React.js, JavaScript, and modern web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-48 object-cover"
                data-testid={`img-project-${project.name.toLowerCase().replace(' ', '-')}`}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold dark-gray mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-light-red primary-red px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="primary-red hover:text-accent-red transition-colors flex items-center gap-1"
                    data-testid={`link-demo-${project.name.toLowerCase().replace(' ', '-')}`}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubli}
                    className="primary-red hover:text-accent-red transition-colors flex items-center gap-1"
                    data-testid={`link-github-${project.name.toLowerCase().replace(' ', '-')}`}
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
