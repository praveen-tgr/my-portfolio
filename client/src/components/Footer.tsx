import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-gray text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-300">
              © 2024 <span className="primary-red font-semibold">Praveen V</span>. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://linkedin.com/in/tgr33"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:primary-red transition-colors duration-300"
              data-testid="footer-link-linkedin"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/praveen-tgr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:primary-red transition-colors duration-300"
              data-testid="footer-link-github"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:praveenvenkatesan11@gmail.com"
              className="text-gray-300 hover:primary-red transition-colors duration-300"
              data-testid="footer-link-email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
