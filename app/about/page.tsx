export const metadata = {
  title: "About | Ali Safdar",
  description:
    "About Ali Safdar and his Backend AI Engineering and AI Fluency work.",
};

export default function AboutPage() {
  const technologies = [
    "Python",
    "FastAPI",
    "REST APIs",
    "Git/GitHub",
    "Next.js",
    "AI-assisted development",
    "Web scraping",
    "Pydantic",
  ];

  return (
    <div className="mx-auto max-w-4xl px-5 py-12 sm:py-16">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          About
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          I am Ali Safdar.
        </h1>
        <div className="mt-6 space-y-4 text-lg leading-8 text-slate-700">
          <p>
            I am working through Backend AI Engineering and AI Fluency projects
            for my FlyRank internship assignment.
          </p>
          <p>
            My current work includes backend APIs, automation, scraping/data
            pipelines, and AI workflows. I am learning by building real projects
            that are small enough to understand and complete enough to explain.
          </p>
        </div>

        <section className="mt-8 border-t border-slate-200 pt-8">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-950">
            Technologies I am using
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {technologies.map((technology) => (
              <li
                className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
                key={technology}
              >
                {technology}
              </li>
            ))}
          </ul>
        </section>
      </section>
    </div>
  );
}
