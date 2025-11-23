import { useRef, useState } from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  interface Project {
    title: string;
    description: string;
    tags: string[];
  }

  const projects: Project[] = [
    {
      title: "Project One",
      description: "A brief description of Project One.",
      tags: ["react", "typescript", "tailwindcss"],
    },
    {
      title: "Project Two",
      description: "A brief description of Project Two.",
      tags: ["vue", "javascript", "css"],
    },
    {
      title: "Project Three",
      description: "A brief description of Project Three.",
      tags: ["angular", "typescript", "scss"],
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

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

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 m-0 text-center p-4 gap-10"
    >
      <h2 className="text-3xl font-bold mb-4">My Projects</h2>
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide w-full max-w-4xl gap-10 px-4"
        style={{ scrollbarWidth: "none" }}
      >
        {projects.map((project, index) => (
          <div key={index} className="snap-center shrink-0 w-full">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-4">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === activeIndex
                ? "bg-gray-700 w-8"
                : "bg-gray-400 hover:bg-gray-500"
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
