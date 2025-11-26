import { useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  interface Project {
    title: string;
    description: string;
    tags: string[];
    demoLink?: string;
    githubLink?: string;
    featured?: boolean;
  }

  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with payment integration, inventory management, and real-time analytics. Built for scalability and performance.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      demoLink: "#",
      githubLink: "#",
      featured: true,
    },
    {
      title: "AI Task Manager",
      description:
        "Smart productivity app using machine learning to prioritize tasks and suggest optimal scheduling. Features natural language processing.",
      tags: ["TypeScript", "Python", "TensorFlow", "Next.js"],
      demoLink: "#",
      githubLink: "#",
      featured: true,
    },
    {
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for tracking social media metrics across multiple platforms with beautiful data visualizations and insights.",
      tags: ["Vue.js", "D3.js", "Firebase", "Tailwind"],
      demoLink: "#",
      githubLink: "#",
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
      className={`relative z-20 m-0 flex min-h-screen flex-col items-center justify-center gap-8 bg-linear-to-br from-gray-100 to-gray-50 p-4 text-center sm:gap-10 sm:p-6 ${
        isVisible ? "animate-[slideUpFromBottom_0.8s_ease-out_forwards]" : ""
      }`}
    >
      <div className="mb-4">
        <h2
          className={`mb-2 bg-linear-to-r from-gray-800 to-gray-600 bg-clip-text text-3xl font-bold text-transparent sm:mb-4 sm:text-4xl lg:text-5xl ${
            isVisible
              ? "animate-[appearFromBottom_1.5s_ease-out_forwards]"
              : "opacity-0"
          }`}
        >
          My Projects
        </h2>
        <div
          className={`mx-auto h-1 w-24 rounded-full bg-linear-to-r from-gray-600 to-gray-400 ${
            isVisible ? "animate-[fadeIn_1.5s_ease-out_forwards]" : "opacity-0"
          }`}
        ></div>
      </div>
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
      <div
        className={`flex w-full max-w-[860px] items-center justify-around gap-2 sm:mt-4 ${
          isVisible
            ? "animate-[appearFromBottom_1.5s_ease-out_forwards]"
            : "opacity-0"
        }`}
      >
        <button
          onClick={goToPrevious}
          className="z-10 hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-gray-700 bg-transparent text-2xl leading-none text-black transition-all hover:bg-gray-800 hover:text-white md:flex"
          aria-label="Previous project"
        >
          <span className="inline-block -translate-y-px">←</span>
        </button>
        <div className="flex gap-2 sm:gap-3">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-all sm:h-9 sm:w-9 ${
                index === activeIndex
                  ? "scale-110 bg-gray-700 text-white"
                  : "bg-gray-300 text-gray-700 hover:bg-gray-400"
              }`}
              aria-label={`Go to project ${index + 1}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          onClick={goToNext}
          className="z-10 hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-gray-700 bg-transparent text-2xl leading-none text-black transition-all hover:bg-gray-800 hover:text-white md:flex"
          aria-label="Next project"
        >
          <span className="inline-block -translate-y-px">→</span>
        </button>
      </div>
    </section>
  );
}
