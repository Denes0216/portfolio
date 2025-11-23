import { useState } from "react";

export default function AboutTabs() {
  const [activeTab, setActiveTab] = useState<string>("Skills");

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
    <div className="text-center max-w-xl mx-auto">
      {Object.keys(tabs).map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 mx-2 rounded-3xl border ${
            tab === activeTab
              ? "bg-gray-500 border-gray-700 text-white"
              : "bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-200"
          }`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
      <div className="mt-6 min-h-32">{tabs[activeTab as keyof typeof tabs]}</div>
    </div>
  );
}
