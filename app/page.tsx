import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  const selectedProjects = projects.slice(0, 3);
  const skills = [
    "Python",
    "FastAPI",
    "REST APIs",
    "Web scraping",
    "Pydantic",
    "Git/GitHub",
    "Next.js",
    "AI-assisted workflows",
  ];

  return (
    <div className="mx-auto max-w-5xl px-5 py-12 sm:py-16">
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Backend AI Engineering Intern / Developer
        </p>
        <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
          Ali Safdar builds backend applications, APIs, scraping pipelines, and
          AI-assisted workflows.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
          This portfolio collects the real projects I am building through my
          Backend AI Engineering and AI Fluency work. It is intentionally simple:
          clear pages, reachable projects, and honest case studies.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            href="/projects"
          >
            View Projects
          </Link>
          <Link
            className="rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 hover:border-slate-950"
            href="/contact"
          >
            Contact Me
          </Link>
        </div>
      </section>

      <section className="mt-12">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Selected work
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
              Projects from the internship track
            </h2>
          </div>
          <Link
            className="text-sm font-semibold text-slate-800 underline hover:text-slate-950"
            href="/projects"
          >
            See all projects
          </Link>
        </div>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {selectedProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            What I am focused on
          </h2>
          <p className="mt-4 leading-7 text-slate-700">
            I am learning by building small but complete projects: backend APIs,
            automation scripts, scraping/data pipelines, and structured
            AI-assisted workflows. The goal is to show working pieces I can
            explain, improve, and deploy.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            Skills and tools
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
                key={skill}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
          Want to review the work?
        </h2>
        <p className="mt-3 max-w-2xl leading-7 text-slate-700">
          Start with the projects page. Each case study explains the purpose,
          what was built, how it works, and what still needs improvement.
        </p>
        <Link
          className="mt-5 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
          href="/projects"
        >
          Open Projects
        </Link>
      </section>
    </div>
  );
}
