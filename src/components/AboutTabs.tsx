import { useState } from "react";
import { FaCode, FaBriefcase, FaGraduationCap } from "react-icons/fa";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";

export default function AboutTabs() {
  const [activeTab, setActiveTab] = useState<string>("Skills");
  const [animationKey, setAnimationKey] = useState<number>(0);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setAnimationKey((prev) => prev + 1); // Increment to trigger re-render and restart animation
  };

  const tabs = {
    Skills: <Skills />,
    Experience: <Experience />,
    Education: <Education />,
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
                  ? "font-semibold text-gray-700 dark:text-gray-200"
                  : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              }`}
              onClick={() => handleTabClick(tab)}
            >
              <span className="text-base">{tabIcons[tab]}</span>
              {tab}
              <span
                className={`absolute bottom-0 left-0 h-0.5 bg-gray-700 transition-all duration-300 dark:bg-gray-300 ${
                  tab === activeTab ? "w-full" : "w-0"
                }`}
              ></span>
            </button>
            {index < Object.keys(tabs).length - 1 && (
              <div className="h-6 w-px bg-gray-300 dark:bg-gray-600"></div>
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
                ? "border-gray-700 bg-gray-500 text-white dark:border-gray-400 dark:bg-gray-600"
                : "border-gray-300 bg-gray-50 text-gray-700 hover:bg-gray-200 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
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
