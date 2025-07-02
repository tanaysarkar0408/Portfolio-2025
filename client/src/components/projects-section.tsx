import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  technology: string;
  techColor: string;
  image: string;
  githubUrl: string;
  demoUrl?: string;
}

function ProjectCard({
  title,
  description,
  technology,
  techColor,
  image,
  githubUrl,
  demoUrl,
}: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
      <img src={image} alt={`${title} Project`} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold">{title}</h3>
          <span className={`${techColor} center text-center text-xs font-normal px-2.5 py-0.5 rounded-full`}>
            {technology}
          </span>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex space-x-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <Github className="mr-2 h-4 w-4" />
            View Code
          </a>
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-green-600 hover:text-green-800 font-medium"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  const projects = [
    {
      title: "Learning Management System",
      description:
        "Built a MERN stack e-learning platform with Stripe payments, user authentication, and course management. Features secure role-based access with Clerk, course creation and progress tracking, deployed on Vercel with MongoDB Atlas.",
      technology: "MERN Stack",
      techColor: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      githubUrl: "https://github.com/tanaysarkar0408/",
    //   demoUrl: "https://lms-demo-link.com",
    },
    {
      title: "Employee Management System",
      description:
        "Developed a RESTful API using Spring Boot and Spring Data JPA for employee management. Built responsive UI with React.js, Vite, and Bootstrap, integrating API calls with Axios. Designed MySQL database for efficient data storage.",
      technology: "Java and React",
      techColor: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      githubUrl: "https://github.com/tanaysarkar0408/FullStack-EMS-JAVA-React",
    //   demoUrl: "https://ems-demo-link.com",
    },
    {
      title: "UberClone",
      description:
        "A comprehensive ride-sharing application clone built with modern web technologies, featuring real-time location tracking and booking functionality.",
      technology: "JavaScript",
      techColor: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      githubUrl: "https://github.com/tanaysarkar0408/UberClone",
    },
    {
      title: "Gemini Bot",
      description:
        "An AI-powered chatbot application built with Flutter, integrating Google's Gemini API for intelligent conversations and assistance.",
      technology: "Dart",
      techColor: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      githubUrl: "https://github.com/tanaysarkar0408/gemini_bot",
    },
    {
      title: "Messenger",
      description:
        "A real-time messaging application built with Flutter, featuring instant messaging, user authentication, and modern chat interface design.",
      technology: "Dart",
      techColor: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      githubUrl: "https://github.com/tanaysarkar0408/messenger",
    },
    {
      title: "Flappy Bird",
      description:
        "A recreation of the classic Flappy Bird game built with Unity and C#, featuring smooth gameplay mechanics and score tracking.",
      technology: "C#",
      techColor: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
      image:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      githubUrl: "https://github.com/tanaysarkar0408/Flappy-Bird",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild>
            <a
              href="https://github.com/tanaysarkar0408"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              <Github className="mr-2 h-4 w-4" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
