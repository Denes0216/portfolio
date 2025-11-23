import { useState } from "react";

export default function AboutTabs() {
  const [activeTab, setActiveTab] = useState<string>("Skills");
  const [animationKey, setAnimationKey] = useState<number>(0);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setAnimationKey((prev) => prev + 1); // Increment to trigger re-render and restart animation
  };

  const tabs = {
    Skills: (
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris.
      </div>
    ),
    Experience: (
      <div>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    ),
    Education: (
      <div>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium. Totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo.
      </div>
    ),
  };

  return (
    <div className="mx-auto max-w-xl text-center">
      {Object.keys(tabs).map((tab) => (
        <button
          key={tab}
          className={`mx-2 rounded-3xl border px-4 py-2 ${
            tab === activeTab
              ? "border-gray-700 bg-gray-500 text-white"
              : "border-gray-300 bg-gray-50 text-gray-700 hover:bg-gray-200"
          }`}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </button>
      ))}
      <div
        key={animationKey}
        className="mt-6 min-h-32 animate-[fadeIn_1s_ease-out_forwards]"
      >
        {tabs[activeTab as keyof typeof tabs]}
      </div>
    </div>
  );
}
