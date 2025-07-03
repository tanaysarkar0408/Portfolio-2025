import { Github, Linkedin, Mail, Phone, MapPin, Code } from "lucide-react";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Tanay Sarkar</h3>
            <p className="text-gray-400 mb-4">
              Flutter & Full Stack Developer passionate about creating innovative solutions and
              automating business processes.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/tanaysarkar0408"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Github className="text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/tanaysarkar0408"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Linkedin className="text-xl" />
              </a>
              <a
                href="https://leetcode.com/tanaysarkar0408"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Code className="text-xl" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection("about")}
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-gray-400 hover:text-white transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2">
              <p className="text-gray-400 flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                tanay35sarkar44@gmail.com
              </p>
              <p className="text-gray-400 flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                +91-9807384413
              </p>
              <p className="text-gray-400 flex items-center">
                <MapPin className="mr-2 h-4 w-4" />
                Noida, India
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Tanay Sarkar. All rights reserved. Made with ❤️ and lots of ☕
          </p>
        </div>
      </div>
    </footer>
  );
}
