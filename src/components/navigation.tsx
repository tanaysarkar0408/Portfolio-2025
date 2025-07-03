import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./theme-provider";
import { Moon, Sun, Menu, X } from "lucide-react";

export function Navigation() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              TS
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="hover:text-blue-600 transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-blue-600 transition-colors duration-200"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="hover:text-blue-600 transition-colors duration-200"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="hover:text-blue-600 transition-colors duration-200"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="hover:text-blue-600 transition-colors duration-200"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-blue-600 transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
            >
              {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="block w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="block w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
