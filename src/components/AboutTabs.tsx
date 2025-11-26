import { useState } from "react";
import {
  FaCode,
  FaBriefcase,
  FaGraduationCap,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
} from "react-icons/fa";
import { SiTypescript, SiTailwindcss } from "react-icons/si";

export default function AboutTabs() {
  const [activeTab, setActiveTab] = useState<string>("Skills");
  const [animationKey, setAnimationKey] = useState<number>(0);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setAnimationKey((prev) => prev + 1); // Increment to trigger re-render and restart animation
  };

  const tabs = {
    Skills: (
      <div className="space-y-6">
        <p className="leading-relaxed text-gray-700">
          I specialize in building modern, responsive web applications with
          cutting-edge technologies.
        </p>
        <div className="flex flex-wrap justify-center gap-3 sm:justify-start">
          {[
            {
              icon: <FaReact />,
              name: "React",
              color: "bg-blue-100 text-blue-700",
            },
            {
              icon: <SiTypescript />,
              name: "TypeScript",
              color: "bg-blue-100 text-blue-600",
            },
            {
              icon: <FaNodeJs />,
              name: "Node.js",
              color: "bg-green-100 text-green-700",
            },
            {
              icon: <SiTailwindcss />,
              name: "Tailwind",
              color: "bg-cyan-100 text-cyan-700",
            },
            {
              icon: <FaPython />,
              name: "Python",
              color: "bg-yellow-100 text-yellow-700",
            },
            {
              icon: <FaDatabase />,
              name: "Databases",
              color: "bg-purple-100 text-purple-700",
            },
          ].map((skill, index) => (
            <span
              key={index}
              className={`flex items-center gap-2 rounded-full px-4 py-2 font-semibold transition-transform hover:scale-110 ${skill.color}`}
            >
              <span className="text-lg">{skill.icon}</span>
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    ),
    Experience: (
      <div className="space-y-4">
        <div className="rounded-xl border-l-4 border-gray-600 bg-gray-50 p-4 text-left transition-all hover:shadow-lg">
          <h3 className="font-bold text-gray-800">Senior Developer</h3>
          <p className="text-sm text-gray-600">Tech Company • 2021 - Present</p>
          <p className="mt-2 text-sm text-gray-700">
            Leading development of scalable web applications, mentoring junior
            developers, and implementing best practices.
          </p>
        </div>
        <div className="rounded-xl border-l-4 border-gray-500 bg-gray-50 p-4 text-left transition-all hover:shadow-lg">
          <h3 className="font-bold text-gray-800">Full Stack Developer</h3>
          <p className="text-sm text-gray-600">Startup Inc • 2019 - 2021</p>
          <p className="mt-2 text-sm text-gray-700">
            Developed and maintained multiple client projects using modern
            JavaScript frameworks and cloud technologies.
          </p>
        </div>
      </div>
    ),
    Education: (
      <div className="space-y-4">
        <div className="rounded-xl border-l-4 border-gray-600 bg-gray-50 p-4 text-left transition-all hover:shadow-lg">
          <h3 className="font-bold text-gray-800">Computer Science Degree</h3>
          <p className="text-sm text-gray-600">University Name • 2015 - 2019</p>
          <p className="mt-2 text-sm text-gray-700">
            Graduated with honors, specializing in software engineering and web
            technologies.
          </p>
        </div>
        <div className="rounded-xl border-l-4 border-gray-500 bg-gray-50 p-4 text-left transition-all hover:shadow-lg">
          <h3 className="font-bold text-gray-800">Online Certifications</h3>
          <p className="mt-2 text-sm text-gray-700">
            AWS Certified Developer • Advanced React Patterns • Full Stack Web
            Development
          </p>
        </div>
      </div>
    ),
  };

  const tabIcons: { [key: string]: React.ReactElement } = {
    Skills: <FaCode />,
    Experience: <FaBriefcase />,
    Education: <FaGraduationCap />,
  };

  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 sm:px-6">
      <div className="flex items-center gap-0 p-4 md:hidden">
        {Object.keys(tabs).map((tab, index) => (
          <div key={tab} className="flex items-center">
            <button
              className={`relative flex items-center gap-1.5 px-4 py-2 text-sm transition-colors ${
                tab === activeTab
                  ? "font-semibold text-gray-700"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => handleTabClick(tab)}
            >
              <span className="text-base">{tabIcons[tab]}</span>
              {tab}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-gray-700 transition-all duration-300 ${
                  tab === activeTab ? "w-full" : "w-0"
                }`}
              ></span>
            </button>
            {index < Object.keys(tabs).length - 1 && (
              <div className="h-6 w-px bg-gray-300"></div>
            )}
          </div>
        ))}
      </div>

      <div className="hidden min-w-[530px] justify-between gap-2 p-4 sm:p-6 md:flex md:flex-nowrap">
        {Object.keys(tabs).map((tab) => (
          <button
            key={tab}
            className={`flex min-w-[110px] items-center gap-2 rounded-xl border px-4 py-2 text-sm transition-colors sm:w-auto sm:text-base ${
              tab === activeTab
                ? "border-gray-700 bg-gray-500 text-white"
                : "border-gray-300 bg-gray-50 text-gray-700 hover:bg-gray-200"
            }`}
            onClick={() => handleTabClick(tab)}
          >
            <span>{tabIcons[tab]}</span>
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-4 w-full sm:mt-6">
        <div
          key={animationKey}
          className="animate-[fadeIn_1s_ease-out_forwards] px-4 text-left text-sm sm:pl-5 sm:text-base"
        >
          {tabs[activeTab as keyof typeof tabs]}
        </div>
      </div>
    </div>
  );
}
