import { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectNavigation from "./ProjectNavigation";
import NextChapter1 from "../../assets/NextChapter-1.png";
import NextChapter2 from "../../assets/NextChapter-2.png";
import NextChapter3 from "../../assets/NextChapter-3.png";
import Weatherdle1 from "../../assets/Weatherdle-1.png";
import Weatherdle2 from "../../assets/Weatherdle-2.png";
import Weatherdle3 from "../../assets/Weatherdle-3.png";

export default function Projects() {
  interface Project {
    title: string;
    description: string;
    tags: string[];
    demoLink?: string;
    githubLink?: string;
    workInProgress?: boolean;
    images?: string[];
  }

  const projects: Project[] = [
    {
      title: "NextChapter",
      description:
        "Are you a book lover looking for your next great read? NextChapter is a great book recommendation app that helps you narrow down your options based on your preferences. \n\nThe app uses openlibrary.org's API.",
      tags: ["TypeScript", "React", "Axios", "React Router", "CSS Modules"],
      demoLink: "#",
      githubLink: "#",
      workInProgress: false,
      images: [NextChapter1, NextChapter2, NextChapter3],
    },
    {
      title: "Weatherdle",
      description:
        "Guess the city based on the weather data provided! Weatherdle is a fun and challenging game that tests your knowledge of world cities and their climates. \n\nThe app uses WeatherAPI.com's API.",
      tags: ["TypeScript", "React", "Redux", "Fuse.js", "CSS Modules"],
      demoLink: "#",
      githubLink: "#",
      workInProgress: false,
      images: [Weatherdle1, Weatherdle2, Weatherdle3],
    },
    {
      title: "MindFrame AI",
      description:
        "Generate learning cards from any text input using AI. MindFrame AI leverages OpenAI's GPT-4 to create concise and informative flashcards, making studying more efficient and effective.",
      tags: ["TypeScript", "Full Stack", "OpenAI GPT-4", "Tailwind", "Bun"],
      demoLink: "#",
      githubLink: "#",
      workInProgress: true,
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const cardWidth = scrollRef.current.offsetWidth;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }
  };

  const goToPrevious = () => {
    const newIndex = activeIndex > 0 ? activeIndex - 1 : projects.length - 1;
    scrollToIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = activeIndex < projects.length - 1 ? activeIndex + 1 : 0;
    scrollToIndex(newIndex);
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`relative z-20 m-0 flex min-h-screen flex-col items-center justify-center gap-8 bg-linear-to-br from-gray-100 to-gray-50 p-4 text-center transition-colors duration-300 sm:flex-row sm:gap-10 sm:p-6 dark:from-gray-900 dark:to-gray-800 ${""}`}
    >
      <div className="shrink-0">
        <div
          className={`relative flex w-full max-w-4xl items-center gap-2 overflow-visible sm:gap-4 ${
            isVisible ? "animate-[fadeIn_1.5s_ease-out_forwards]" : "opacity-0"
          }`}
        >
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="scrollbar-hide flex w-full snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-visible px-2 sm:gap-10 sm:px-4 sm:py-10"
            style={{ scrollbarWidth: "none" }}
          >
            {projects.map((project, index) => (
              <div key={index} className="w-full shrink-0 snap-center">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
        <ProjectNavigation
          projects={projects}
          activeIndex={activeIndex}
          scrollToIndex={scrollToIndex}
          goToPrevious={goToPrevious}
          goToNext={goToNext}
          isVisible={isVisible}
        />
      </div>
      <div className="mb-4">
        <h2
          className={`mb-2 bg-linear-to-r from-gray-800 to-gray-600 bg-clip-text text-3xl font-bold text-transparent sm:mb-4 sm:text-4xl lg:text-5xl dark:from-gray-200 dark:to-gray-400 ${
            isVisible
              ? "animate-[appearFromBottom_1.5s_ease-out_forwards]"
              : "opacity-0"
          }`}
        >
          My Mapi
        </h2>
        <div
          className={`mx-auto h-1 w-24 rounded-full bg-linear-to-r from-gray-600 to-gray-400 ${
            isVisible ? "animate-[fadeIn_1.5s_ease-out_forwards]" : "opacity-0"
          }`}
        ></div>
      </div>
    </section>
  );
}
