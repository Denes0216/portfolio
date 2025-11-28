import { GoChevronLeft, GoChevronRight } from "react-icons/go";

interface ProjectNavigationProps {
  projects: any[];
  activeIndex: number;
  scrollToIndex: (index: number) => void;
  goToPrevious: () => void;
  goToNext: () => void;
  isVisible: boolean;
}

export default function ProjectNavigation({
  projects,
  activeIndex,
  scrollToIndex,
  goToPrevious,
  goToNext,
  isVisible,
}: ProjectNavigationProps) {
  return (
    <div
      className={`flex w-full max-w-[860px] items-center justify-around gap-2 sm:mt-4 ${
        isVisible
          ? "animate-[appearFromBottom_1.5s_ease-out_forwards]"
          : "opacity-0"
      }`}
    >
      <button
        onClick={goToPrevious}
        className="z-10 hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-gray-700 bg-transparent text-2xl leading-none text-black transition-all hover:bg-gray-800 hover:text-white md:flex dark:border-gray-400 dark:text-white dark:hover:bg-gray-600"
        aria-label="Previous project"
      >
        <GoChevronLeft />
      </button>
      <div className="flex gap-2 sm:gap-3">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-all sm:h-9 sm:w-9 ${
              index === activeIndex
                ? "scale-110 bg-gray-700 text-white dark:bg-gray-300 dark:text-gray-900"
                : "bg-gray-300 text-gray-700 hover:bg-gray-400 dark:bg-gray-600 dark:text-gray-200 dark:hover:bg-gray-500"
            }`}
            aria-label={`Go to project ${index + 1}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button
        onClick={goToNext}
        className="z-10 hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-gray-700 bg-transparent text-2xl leading-none text-black transition-all hover:bg-gray-800 hover:text-white md:flex dark:border-gray-400 dark:text-white dark:hover:bg-gray-600"
        aria-label="Next project"
      >
        <GoChevronRight />
      </button>
    </div>
  );
}
