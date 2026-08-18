import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-4">
        <p className="text-sm font-medium text-slate-500">{project.type}</p>
        <h3 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">
          {project.title}
        </h3>
      </div>
      <p className="flex-1 leading-7 text-slate-700">{project.summary}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <li
            className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
            key={technology}
          >
            {technology}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800"
          href={`/projects/${project.slug}`}
        >
          View Case Study
        </Link>
        {project.links.map((link) => (
          <a
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 hover:border-slate-950"
            href={link.href}
            key={link.href}
            rel="noreferrer"
            target="_blank"
          >
            {link.label}
          </a>
        ))}
      </div>
    </article>
  );
}
