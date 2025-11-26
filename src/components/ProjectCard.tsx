import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  tags: string[];
  demoLink?: string;
  githubLink?: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project: { title, description, tags, demoLink, githubLink },
}: ProjectCardProps) {
  return (
    <div className="group relative max-w-full animate-[appearFromBottom_1.5s_ease-out_forwards] overflow-hidden rounded-xl bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="absolute inset-0 bg-linear-to-br from-gray-900/0 to-gray-900/0 transition-all duration-300 group-hover:from-gray-900/5 group-hover:to-gray-900/10"></div>

      <div className="relative px-6 py-6 sm:px-8 sm:py-8">
        <h3 className="mb-4 bg-linear-to-r from-gray-800 to-gray-600 bg-clip-text text-xl font-bold text-transparent sm:mb-6 sm:text-2xl">
          {title}
        </h3>

        <div className="mb-6 flex flex-col items-center justify-center gap-6 md:flex-row">
          <div className="group/img relative h-48 w-full overflow-hidden rounded-xl bg-linear-to-br from-gray-200 to-gray-300 shadow-lg transition-transform duration-300 hover:scale-105 sm:h-56 md:h-64 md:w-1/2 md:min-w-[300px]">
            <div className="flex h-full w-full items-center justify-center">
              <div className="text-6xl text-gray-400/50 transition-transform duration-300 group-hover/img:scale-110">
                🖥️
              </div>
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-gray-900/20 to-transparent opacity-0 transition-opacity duration-300 group-hover/img:opacity-100"></div>
          </div>

          <div className="flex-1">
            <p className="px-2 text-left text-sm leading-relaxed text-gray-700 sm:px-0 sm:text-base">
              {description}
            </p>
          </div>
        </div>

        <div className="mb-6 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block rounded-xl bg-linear-to-r from-gray-100 to-gray-200 px-3 py-1.5 text-xs font-semibold text-gray-700 transition-all hover:from-gray-700 hover:to-gray-600 hover:text-white sm:text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {demoLink && (
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
          {githubLink && (
            <a
              href={githubLink}
              className="flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-gray-300 bg-white px-6 py-2.5 text-sm font-semibold text-gray-700 transition-all duration-300 hover:scale-105 hover:border-gray-700 hover:bg-gray-50"
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
