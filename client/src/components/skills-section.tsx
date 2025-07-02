import { ReactNode } from "react";

interface SkillCardProps {
  icon: ReactNode;
  name: string;
  percentage: number;
  color: string;
}

function SkillCard({ icon, name, percentage, color }: SkillCardProps) {
  return (
    <div className="skill-card bg-gray-50 dark:bg-gray-800 p-6 rounded-xl text-center hover:shadow-lg hover:scale-105 transition-all duration-300">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-semibold mb-2">{name}</h3>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <div
          className={`h-2 rounded-full ${color}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export function SkillsSection() {
  const skills = [
    {
      icon: <i className="fab fa-js-square text-yellow-500"></i>,
      name: "JavaScript",
      percentage: 90,
      color: "bg-yellow-500",
    },
    {
      icon: <i className="fab fa-flutter text-blue-400" style={{ color: "#02569B" }}></i>,
      name: "Flutter",
      percentage: 90,
      color: "bg-blue-400",
    },
    {
      icon: <i className="fab fa-python text-blue-600"></i>,
      name: "Python",
      percentage: 85,
      color: "bg-blue-600",
    },
    {
      icon: <i className="fab fa-java text-red-500"></i>,
      name: "Java",
      percentage: 85,
      color: "bg-red-500",
    },
    {
      icon: <i className="fab fa-react text-cyan-500"></i>,
      name: "React",
      percentage: 85,
      color: "bg-cyan-500",
    },
    {
      icon: <i className="fab fa-node-js text-green-500"></i>,
      name: "Node.js",
      percentage: 80,
      color: "bg-green-500",
    },
    {
      icon: <i className="fas fa-leaf text-green-600"></i>,
      name: "MongoDB",
      percentage: 80,
      color: "bg-green-600",
    },
    {
      icon: <i className="fas fa-database text-orange-500"></i>,
      name: "MySQL",
      percentage: 75,
      color: "bg-orange-500",
    },
    {
      icon: <i className="fas fa-fire text-yellow-600"></i>,
      name: "Firebase",
      percentage: 80,
      color: "bg-yellow-600",
    },
    {
      icon: <i className="fas fa-robot text-purple-500"></i>,
      name: "Power Automate",
      percentage: 85,
      color: "bg-purple-500",
    },
    {
      icon: <i className="fas fa-cogs text-blue-700"></i>,
      name: "SAP Build",
      percentage: 80,
      color: "bg-blue-700",
    },
    {
      icon: <i className="fas fa-cube text-indigo-500"></i>,
      name: "Blender 3D",
      percentage: 70,
      color: "bg-indigo-500",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
