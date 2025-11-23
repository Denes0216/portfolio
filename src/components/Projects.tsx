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
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center min-h-screen bg-white m-0 text-center p-4 gap-10"
    >
      <h2 className="text-3xl font-bold mb-4">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
