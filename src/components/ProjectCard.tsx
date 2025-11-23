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
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        {/* placeholder image */}
        <div className="w-full h-40 bg-gray-200 mb-4"></div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            #{tag}
          </span>
        ))}
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #tailwindcss
        </span>
      </div>
    </div>
  );
}
