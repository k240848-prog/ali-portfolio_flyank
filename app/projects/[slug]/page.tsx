import type { Metadata } from "next";
import Link from "next/link";
import { getProjectBySlug, projects } from "@/data/projects";
import { notFound } from "next/navigation";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found | Ali Safdar",
    };
  }

  return {
    title: `${project.title} | Ali Safdar`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-4xl px-5 py-12 sm:py-16">
      <Link
        className="text-sm font-semibold text-slate-700 underline hover:text-slate-950"
        href="/projects"
      >
        Back to projects
      </Link>

      <article className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          {project.type}
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-700">
          {project.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
              key={technology}
            >
              {technology}
            </span>
          ))}
        </div>

        <CaseSection title="Problem / purpose">
          <p>{project.problem}</p>
        </CaseSection>

        <CaseSection title="What I built">
          <BulletList items={project.whatIBuilt} />
        </CaseSection>

        <CaseSection title="How it works">
          <BulletList items={project.howItWorks} />
        </CaseSection>

        <CaseSection title="Key implementation details">
          <BulletList items={project.implementationDetails} />
        </CaseSection>

        <CaseSection title="Challenges / lessons">
          <BulletList items={project.challenges} />
        </CaseSection>

        <CaseSection title="Current status">
          <p>{project.status}</p>
        </CaseSection>

        <CaseSection title="Screenshots / visuals">
          {project.screenshots.length > 0 ? (
            <ul className="space-y-2">
              {project.screenshots.map((screenshot) => (
                <li key={screenshot}>{screenshot}</li>
              ))}
            </ul>
          ) : (
            <p>
              No real screenshots are stored in this repository yet, so this
              case study uses text instead of fake images.
            </p>
          )}
        </CaseSection>

        {project.links.length > 0 ? (
          <div className="mt-8 flex flex-wrap gap-3">
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
        ) : null}
      </article>
    </div>
  );
}

function CaseSection({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <section className="mt-8 border-t border-slate-200 pt-8">
      <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
        {title}
      </h2>
      <div className="mt-4 leading-7 text-slate-700">{children}</div>
    </section>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
