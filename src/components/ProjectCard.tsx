interface Project {
  title: string;
  description: string;
  tags: string[];
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({
  project: { title, description, tags },
}: ProjectCardProps) {
  return (
    <div className="max-w-full overflow-hidden rounded bg-white shadow-lg">
      <div className="px-6 py-4">
        <div className="mb-10 text-xl font-bold">{title}</div>
        {/* placeholder image */}
        <div className="mb-4 flex flex-col items-center justify-center gap-10 md:flex-row lg:flex-row">
          <div className="mb-4 h-80 w-1/2 min-w-[300px] bg-gray-200"></div>
          <p className="text-base text-gray-700">{description}</p>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
          >
            #{tag}
          </span>
        ))}
        <span className="mr-2 mb-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
          #tailwindcss
        </span>
      </div>
    </div>
  );
}
