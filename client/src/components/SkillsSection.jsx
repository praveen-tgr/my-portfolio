import { Code, Palette, Settings, Server } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      icon: <Code className="h-10 w-10" />,
      title: "Frontend",
      skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"]
    },
    {
      icon: <Palette className="h-10 w-10" />,
      title: "Styling & Design",
      skills: ["SASS", "SCSS", "Responsive Design", "UI/UX Design", "Flexbox", "CSS Grid"]
    },
    {
      icon: <Settings className="h-10 w-10" />,
      title: "Tools & Platforms",
      skills: ["Git & GitHub", "VS Code", "Chrome DevTools", "Netlify", "Vercel", "NPM"]
    },
    {
      icon: <Server className="h-10 w-10" />,
      title: "Backend & APIs",
      skills: ["Node.js ", "RESTful APIs", "API Integration", "JSON", "Fetch API", "Axios"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-light-red">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold dark-gray mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-primary-red mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Proficient in modern web technologies and frameworks for creating exceptional user experiences
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="primary-red mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold dark-gray mb-3">{category.title}</h3>
              <ul className="text-gray-600 space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
