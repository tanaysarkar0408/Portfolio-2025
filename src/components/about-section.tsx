import { Code } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-blue-600">Hello! I'm Tanay Sarkar</h3>
            <p className="text-lg leading-relaxed">
              I'm a passionate Flutter and Full Stack Developer currently working as an Associate
              Consultant at Samishti Infotech Pvt Ltd. My expertise spans across mobile app
              development, web applications, and robotic process automation.
            </p>
            <p className="text-lg leading-relaxed">
              At Samishti Infotech, I work on RPA solutions for clients using SAP Build Process
              Automate and MS Power Automate, helping businesses streamline their operations and
              improve efficiency.
            </p>
            <p className="text-lg leading-relaxed">
              When I'm not coding, I enjoy exploring new technologies, contributing to open-source
              projects, and solving algorithmic challenges on LeetCode.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <div className="bg-white dark:bg-gray-700 px-4 py-2 rounded-full shadow-md">
                <span className="text-sm font-medium">📍 Noida, India</span>
              </div>
              <div className="bg-white dark:bg-gray-700 px-4 py-2 rounded-full shadow-md">
                <span className="text-sm font-medium">💼 Available for opportunities</span>
              </div>
              <div className="bg-white dark:bg-gray-700 px-4 py-2 rounded-full shadow-md">
                <span className="text-sm font-medium">🎯 Full Stack Enthusiast</span>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4 text-blue-600">Education</h4>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                  <h5 className="font-semibold">Bachelor of Technology (ECE)</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">PSIT Kanpur • 2019 - 2023</p>
                  <p className="text-sm font-medium text-blue-600">7.4/10 GPA</p>
                </div>
                <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md">
                  <h5 className="font-semibold">12th (PCMB)</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Dr. V.S.E.C Kanpur • 2016 - 2018</p>
                  <p className="text-sm font-medium text-blue-600">80%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
              alt="Professional development environment"
              className="rounded-xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-4 rounded-xl shadow-lg">
              <Code className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
