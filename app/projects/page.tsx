import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects | Ali Safdar",
  description:
    "Real backend, scraping, and AI workflow projects by Ali Safdar.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-5 py-12 sm:py-16">
      <section>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Projects
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          Real work, kept simple.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
          These are the current portfolio projects for the FlyRank AI Fluency
          internship assignment. Each card opens a working case study page.
        </p>
      </section>

      <section className="mt-8 grid gap-5 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </div>
  );
}
