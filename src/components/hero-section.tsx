import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail, Code } from "lucide-react";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen gradient-bg flex items-center justify-center text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">


          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up">
            Tanay Sarkar
          </h1>
          <p className="text-xl md:text-2xl mb-4 text-blue-100 animate-slide-up">
            Flutter & Full Stack Developer
          </p>
          <p className="text-lg mb-8 text-blue-200 max-w-2xl mx-auto animate-slide-up">
            Associate Consultant at Samishti Infotech specializing in mobile app development,
            web solutions, and robotic process automation
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Button>
            <Button
            //   variant="outline"
              onClick={() => scrollToSection("projects")}
            //   className="text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </Button>
          </div>

          <div className="flex justify-center space-x-6 mt-8 animate-slide-up">
            <a
              href="https://github.com/tanaysarkar0408"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-200 transition-colors duration-200"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/tanaysarkar0408"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-200 transition-colors duration-200"
            >
              <Linkedin />
            </a>
            <a
              href="https://leetcode.com/tanaysarkar0408"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-200 transition-colors duration-200"
            >
              <Code />
            </a>
            <a
              href="mailto:tanay35sarkar44@gmail.com"
              className="text-2xl hover:text-blue-200 transition-colors duration-200"
            >
              <Mail />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
  <ChevronDown className="text-white text-2xl" />
</div>
    </section>
  );
}
