import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState, useEffect } from "react";
import { FaComputer } from "react-icons/fa6";

interface Project {
  title: string;
  description: string;
  tags: string[];
  demoLink?: string;
  githubLink?: string;
  workInProgress?: boolean;
  images?: string[];
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project: {
    title,
    description,
    tags,
    demoLink,
    githubLink,
    workInProgress,
    images,
  },
}: ProjectCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="group relative max-w-full animate-[appearFromBottom_1.5s_ease-out_forwards] overflow-hidden rounded-xl bg-white shadow-xl transition-all duration-300 dark:bg-gray-800">
      <div className="absolute inset-0 bg-linear-to-br from-gray-900/0 to-gray-900/0 transition-all duration-300 group-hover:from-gray-900/5 group-hover:to-gray-900/10"></div>
      {workInProgress && (
        <div className="absolute top-4 right-4 z-10 rounded-full bg-yellow-500 px-3 py-1 text-xs font-semibold text-white shadow-lg">
          Work in Progress
        </div>
      )}

      <div className="relative px-6 py-6 sm:px-8 sm:py-8">
        <h3 className="mb-4 bg-linear-to-r from-gray-800 to-gray-600 bg-clip-text text-xl font-bold text-transparent sm:mb-6 sm:text-2xl dark:from-gray-200 dark:to-gray-400">
          {title}
        </h3>

        <div className="mb-6 flex flex-col items-center justify-center gap-6 md:flex-row">
          <div className="group/img relative h-48 w-full overflow-hidden rounded-xl bg-linear-to-br from-gray-200 to-gray-300 shadow-lg transition-transform duration-300 hover:scale-105 sm:h-56 md:h-64 md:w-1/2 md:min-w-[300px] dark:from-gray-700 dark:to-gray-600">
            {images && images.length > 0 ? (
              <>
                <img
                  src={images[currentImageIndex]}
                  alt={`${title} screenshot ${currentImageIndex + 1}`}
                  className="h-full w-full object-cover transition-opacity duration-500"
                />
                {images.length > 1 && (
                  <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
                    {images.map((_, idx) => (
                      <div
                        key={idx}
                        className={`h-2 w-2 rounded-full transition-all duration-300 ${
                          idx === currentImageIndex
                            ? "w-4 bg-white"
                            : "bg-white/50"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <div className="text-6xl text-gray-400/50 transition-transform duration-300 group-hover/img:scale-110">
                  <FaComputer />
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-linear-to-t from-gray-900/20 to-transparent opacity-0 transition-opacity duration-300 group-hover/img:opacity-100"></div>
          </div>

          <div className="flex-1">
            <p className="px-2 text-left text-sm leading-relaxed text-gray-700 sm:px-0 sm:text-base dark:text-gray-300">
              {description}
            </p>
          </div>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block rounded-xl bg-linear-to-r from-gray-100 to-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-700 transition-all hover:from-gray-700 hover:to-gray-600 hover:text-white sm:text-sm dark:from-gray-700 dark:to-gray-600 dark:text-gray-200 dark:hover:from-gray-600 dark:hover:to-gray-500"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {demoLink && !workInProgress && (
            <a
              href={demoLink}
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-linear-to-r from-gray-800 to-gray-600 px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt />
              Live Demo
            </a>
          )}
          {githubLink && !workInProgress && (
            <a
              href={githubLink}
              className="flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-gray-300 bg-white px-6 py-2.5 text-sm font-semibold text-gray-700 transition-all duration-300 hover:scale-105 hover:border-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:border-gray-400 dark:hover:bg-gray-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
