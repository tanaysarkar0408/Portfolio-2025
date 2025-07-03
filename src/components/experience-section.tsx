import { Code } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and key achievements
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-blue-600"></div>

          {/* Experience Item 1 */}
          <div className="relative flex items-center mb-12">
            <div className="flex-1 mr-8 text-right">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-blue-600 mb-2">Associate Consultant</h3>
                <h4 className="text-lg font-semibold mb-2">Samishti Infotech</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">July 2024 - Present</p>
                <ul className="text-gray-600 dark:text-gray-300 mb-4 text-left space-y-2">
                  <li>• Created Voice Assistant app in Flutter using Google Gemini API with Speech-to-text and Text-to-speech</li>
                  <li>• Developed Vendor Portal using MENDIX platform with SAP OData backend integration</li>
                  <li>• Automated Purchase Order processes using Microsoft Power Automate and SAP Build Process Automate</li>
                  <li>• Built website for Power Grid company using Microsoft Power Apps</li>
                  <li>• Implemented Google ML-Kit for text scanning and processing functionality</li>
                </ul>
                <div className="flex flex-wrap gap-2 justify-end">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-300">
                    Flutter
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded dark:bg-green-900 dark:text-green-300">
                    MENDIX
                  </span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded dark:bg-purple-900 dark:text-purple-300">
                    Power Automate
                  </span>
                  <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded dark:bg-orange-900 dark:text-orange-300">
                    SAP Build
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>

            <div className="flex-1 ml-8">
              <img
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
                alt="SAP automation workspace"
                className="rounded-lg shadow-lg w-full h-32 object-cover"
              />
            </div>
          </div>

          {/* Experience Item 2 */}
          <div className="relative flex items-center mb-12">
            <div className="flex-1 mr-8">
              <img
                src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
                alt="Development workspace"
                className="rounded-lg shadow-lg w-full h-32 object-cover"
              />
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>

            <div className="flex-1 ml-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-blue-600 mb-2">Full Stack Developer</h3>
                <h4 className="text-lg font-semibold mb-2">Freelance & Personal Projects</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">2022 - Present</p>
                <ul className="text-gray-600 dark:text-gray-300 mb-4 space-y-2">
                  <li>• Developed 6+ mobile applications using Flutter and React Native</li>
                  <li>• Built full-stack web applications with React.js and Node.js</li>
                  <li>• Created UberClone with real-time location tracking and booking system</li>
                  <li>• Implemented Employee Management System with Java Spring Boot</li>
                  <li>• Developed AI-powered chatbot using Google Gemini API</li>
                  <li>• Active contributor on GitHub with 100+ commits across various projects</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-300">
                    Flutter
                  </span>
                  <span className="bg-cyan-100 text-cyan-800 text-xs font-medium px-2 py-1 rounded dark:bg-cyan-900 dark:text-cyan-300">
                    React
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded dark:bg-green-900 dark:text-green-300">
                    Node.js
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded dark:bg-yellow-900 dark:text-yellow-300">
                    JavaScript
                  </span>
                  <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded dark:bg-red-900 dark:text-red-300">
                    MongoDB
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Item 3 - Flutter Intern */}
          <div className="relative flex items-center mb-12">
            <div className="flex-1 mr-8 text-right">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-blue-600 mb-2">Flutter Developer Intern</h3>
                <h4 className="text-lg font-semibold mb-2">Shoshin Tech Pvt Ltd.</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">March 2024 - May 2024</p>
                <ul className="text-gray-600 dark:text-gray-300 mb-4 text-left space-y-2">
                  <li>• Worked on UI development and design implementation for mobile applications</li>
                  <li>• Integrated APIs through backend services for seamless data flow</li>
                  <li>• Implemented code following SOLID principles and clean architecture patterns</li>
                  <li>• Collaborated with development team on app architecture and best practices</li>
                  <li>• Gained hands-on experience with Flutter state management and widgets</li>
                </ul>
                <div className="flex flex-wrap gap-2 justify-end">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-300">
                    Flutter
                  </span>
                  <span className="bg-cyan-100 text-cyan-800 text-xs font-medium px-2 py-1 rounded dark:bg-cyan-900 dark:text-cyan-300">
                    Dart
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded dark:bg-green-900 dark:text-green-300">
                    Clean Architecture
                  </span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded dark:bg-purple-900 dark:text-purple-300">
                    API Integration
                  </span>
                </div>
              </div>
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>

            <div className="flex-1 ml-8">
              <img
                src="https://images.unsplash.com/photo-1559028006-448665bd7c7f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
                alt="Mobile app development"
                className="rounded-lg shadow-lg w-full h-32 object-cover"
              />
            </div>
          </div>

          {/* Experience Item 4 - 3D Modeling Intern */}
          <div className="relative flex items-center">
            <div className="flex-1 mr-8">
              <img
                src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=200"
                alt="3D modeling workspace"
                className="rounded-lg shadow-lg w-full h-32 object-cover"
              />
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900"></div>

            <div className="flex-1 ml-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-blue-600 mb-2">3D Modeling Intern</h3>
                <h4 className="text-lg font-semibold mb-2">MBS Studios</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">February 2023 - June 2023</p>
                <ul className="text-gray-600 dark:text-gray-300 mb-4 space-y-2">
                  <li>• Created detailed 3D models for skateboard game using Blender 3D</li>
                  <li>• Optimized models for game engine performance and visual quality</li>
                  <li>• Exported models to Unreal Engine for game integration</li>
                  <li>• Collaborated with game development team on asset specifications</li>
                  <li>• Learned industry-standard 3D modeling workflows and techniques</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded dark:bg-orange-900 dark:text-orange-300">
                    Blender 3D
                  </span>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded dark:bg-blue-900 dark:text-blue-300">
                    Unreal Engine
                  </span>
                  <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2 py-1 rounded dark:bg-purple-900 dark:text-purple-300">
                    3D Modeling
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded dark:bg-green-900 dark:text-green-300">
                    Game Development
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
