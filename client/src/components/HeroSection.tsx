import { Github, Linkedin, Mail, Code } from "lucide-react";
import profileImage from "@assets/portfolio img_1754377676450.jpg";

export default function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-light-red to-white min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold dark-gray mb-6 leading-tight">
              Hi, I'm <span className="primary-red">Praveen</span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-gray-600 mb-6 font-medium">
              Front-End Developer & UI/UX Enthusiast
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Passionate about creating beautiful, responsive web applications using React.js and modern JavaScript. 
              I build user-friendly interfaces that combine clean code with exceptional user experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('#projects')}
                className="bg-primary-red text-white px-8 py-3 rounded-lg font-semibold hover:bg-accent-red transition-colors duration-300 text-center"
                data-testid="button-view-work"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('#contact')}
                className="border-2 border-primary-red primary-red px-8 py-3 rounded-lg font-semibold hover:bg-primary-red hover:text-white transition-all duration-300 text-center"
                data-testid="button-contact"
              >
                Get In Touch
              </button>
            </div>
            <div className="flex justify-center lg:justify-start space-x-6 mt-8">
              <a
                href="https://linkedin.com/in/tgr33"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:primary-red transition-colors duration-300"
                data-testid="link-linkedin"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/praveen-tgr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:primary-red transition-colors duration-300"
                data-testid="link-github"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="mailto:praveenvenkatesan11@gmail.com"
                className="text-gray-600 hover:primary-red transition-colors duration-300"
                data-testid="link-email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                <img
                  src={profileImage}
                  alt="Praveen V - Professional Headshot"
                  className="w-full h-full object-cover"
                  data-testid="img-profile"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary-red rounded-full flex items-center justify-center shadow-lg">
                <Code className="text-white h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
