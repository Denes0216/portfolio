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
      className="m-0 flex min-h-screen snap-start flex-col items-center justify-center gap-10 bg-gray-100 p-4 text-center"
    >
      <h2 className="mb-4 text-3xl font-bold">My Projects</h2>
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="scrollbar-hide flex w-full max-w-4xl snap-x snap-mandatory gap-10 overflow-x-auto px-4"
        style={{ scrollbarWidth: "none" }}
      >
        {projects.map((project, index) => (
          <div key={index} className="w-full shrink-0 snap-center">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`h-3 w-3 rounded-full transition-all ${
              index === activeIndex
                ? "w-8 bg-gray-700"
                : "bg-gray-400 hover:bg-gray-500"
            }`}
            aria-label={`Go to project ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
