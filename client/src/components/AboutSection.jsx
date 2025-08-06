import { MapPin, GraduationCap, Languages } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold dark-gray mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary-red mx-auto"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold dark-gray">
              Passionate Front-End Developer
            </h3>
            <p className="text-gray-600 leading-relaxed">
              I'm a results-oriented Web Developer with experience building and maintaining responsive web applications using React.js, JavaScript, and modern frontend technologies. I specialize in creating scalable UIs, optimizing web performance, and delivering pixel-perfect layouts.
            </p>
            <p className="text-gray-600 leading-relaxed">
              With a strong understanding of component architecture, REST APIs, and Agile collaboration, I bring clean, efficient code and UI/UX best practices to innovative development teams.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2">
                <MapPin className="primary-red h-5 w-5" />
                <span className="text-gray-600">Chennai, Tamil Nadu</span>
              </div>
              <div className="flex items-center space-x-2">
                <GraduationCap className="primary-red h-5 w-5" />
                <span className="text-gray-600">B.E. Computer Science</span>
              </div>
              <div className="flex items-center space-x-2">
                <Languages className="primary-red h-5 w-5" />
                <span className="text-gray-600">English, Tamil</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-light-red p-6 rounded-lg text-center">
              <div className="text-3xl font-bold primary-red mb-2">10+</div>
              <div className="text-gray-600">React Components</div>
            </div>
            <div className="bg-light-red p-6 rounded-lg text-center">
              <div className="text-3xl font-bold primary-red mb-2">5+</div>
              <div className="text-gray-600">Projects</div>
            </div>
            <div className="bg-light-red p-6 rounded-lg text-center">
              <div className="text-3xl font-bold primary-red mb-2">4+</div>
              <div className="text-gray-600">Certifications</div>
            </div>
            <div className="bg-light-red p-6 rounded-lg text-center">
              <div className="text-3xl font-bold primary-red mb-2">25%</div>
              <div className="text-gray-600">Performance Boost</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
