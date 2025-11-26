import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="absolute top-6 right-6 z-50 flex h-8 w-16 shrink-0 cursor-pointer items-center justify-between rounded-full bg-gray-300 px-1.5 py-1 transition-colors duration-300 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none dark:bg-gray-600"
      aria-label="Toggle theme"
      role="switch"
      aria-checked={theme === "dark"}
    >
      <FaSun
        className={`z-10 text-xs ml-1 transition-colors duration-300 ${
          theme === "light" ? "text-yellow-500" : "text-gray-400"
        }`}
      />
      <span
        className={`absolute left-1 h-6 w-6 transform rounded-full bg-white shadow-lg transition-transform duration-300 ${
          theme === "dark" ? "translate-x-8" : "translate-x-0"
        }`}
      ></span>
      <FaMoon
        className={`z-10 text-xs mr-1 transition-colors duration-300 ${
          theme === "dark" ? "text-blue-400" : "text-gray-400"
        }`}
      />
    </button>
  );
}
