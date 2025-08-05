import { Briefcase, GraduationCap, Award } from "lucide-react";
import { CheckCircle } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-light-red">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold dark-gray mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-primary-red mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-semibold dark-gray mb-8 flex items-center">
              <Briefcase className="primary-red mr-3 h-6 w-6" />
              Work Experience
            </h3>
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold dark-gray">Web Development Intern</h4>
                    <p className="primary-red font-medium">Acmegrade Pvt. Ltd., Bengaluru</p>
                  </div>
                  <span className="bg-light-red primary-red px-3 py-1 rounded-full text-sm">Mar 2024 – Jun 2024</span>
                </div>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="primary-red mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                    Developed 10+ reusable React.js components and integrated 3 REST APIs, improving efficiency by 25%
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="primary-red mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                    Increased page speed by 30% using lazy loading and dynamic imports
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="primary-red mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                    Led Agile sprints, code reviews, and issue tracking in a 5-member development team
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="primary-red mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                    Mentored 2 interns in component reuse and state management, reducing onboarding time by 40%
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold dark-gray mb-8 flex items-center">
              <GraduationCap className="primary-red mr-3 h-6 w-6" />
              Education
            </h3>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold dark-gray">B.E. Computer Science & Engineering</h4>
                    <p className="primary-red font-medium">Meenakshi Ramaswamy Engineering College</p>
                    <p className="text-gray-600">CGPA: 8.07/10</p>
                  </div>
                  <span className="bg-light-red primary-red px-3 py-1 rounded-full text-sm">2021 – 2025</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-semibold dark-gray">Higher Secondary Certificate (HSC)</h4>
                    <p className="primary-red font-medium">Sakthi Matric Hr. Sec. School</p>
                    <p className="text-gray-600">Percentage: 85.6%</p>
                  </div>
                  <span className="bg-light-red primary-red px-3 py-1 rounded-full text-sm">2021</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold dark-gray mb-8 text-center flex items-center justify-center">
            <Award className="primary-red mr-3 h-6 w-6" />
            Certifications & Achievements
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Award className="primary-red h-8 w-8 mx-auto mb-4" />
              <h4 className="text-lg font-semibold dark-gray mb-2">Advanced React</h4>
              <p className="text-gray-600 text-sm">Meta via Coursera (2024)</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Award className="primary-red h-8 w-8 mx-auto mb-4" />
              <h4 className="text-lg font-semibold dark-gray mb-2">Responsive Web Design</h4>
              <p className="text-gray-600 text-sm">freeCodeCamp (2024)</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Award className="primary-red h-8 w-8 mx-auto mb-4" />
              <h4 className="text-lg font-semibold dark-gray mb-2">JavaScript Algorithms</h4>
              <p className="text-gray-600 text-sm">freeCodeCamp (2024)</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <Award className="primary-red h-8 w-8 mx-auto mb-4" />
              <h4 className="text-lg font-semibold dark-gray mb-2">Version Control with Git</h4>
              <p className="text-gray-600 text-sm">Coursera (2023)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
