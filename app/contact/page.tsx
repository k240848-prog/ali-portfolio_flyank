const contactDetails = {
  email: "ali.safdarhussain2005@gmail.com",
  githubUrl: "https://github.com/k240848-prog",
  linkedInUrl: "https://www.linkedin.com/in/ali-safdar-a4b289355/",
};

export const metadata = {
  title: "Contact | Ali Safdar",
  description: "Contact details for Ali Safdar.",
};

export default function ContactPage() {
  const hasEmail = contactDetails.email.trim().length > 0;

  return (
    <div className="mx-auto max-w-4xl px-5 py-12 sm:py-16">
      <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Contact
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          Get in touch.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-700">
          This page intentionally uses simple contact links instead of a contact
          form. There is no backend contact system in this portfolio.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {hasEmail ? (
            <a
              className="rounded-2xl border border-slate-200 p-5 hover:border-slate-950"
              href={`mailto:${contactDetails.email}`}
            >
              <p className="text-sm font-medium text-slate-500">Email</p>
              <p className="mt-2 break-all font-semibold text-slate-950">
                {contactDetails.email}
              </p>
            </a>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 p-5">
              <p className="text-sm font-medium text-slate-500">Email</p>
              <p className="mt-2 text-slate-700">
                Email is not published yet. Add it in{" "}
                <code className="rounded bg-slate-100 px-1 py-0.5">
                  app/contact/page.tsx
                </code>
                .
              </p>
            </div>
          )}

          <a
            className="rounded-2xl border border-slate-200 p-5 hover:border-slate-950"
            href={contactDetails.githubUrl}
            rel="noreferrer"
            target="_blank"
          >
            <p className="text-sm font-medium text-slate-500">GitHub</p>
            <p className="mt-2 font-semibold text-slate-950">
              github.com/k240848-prog
            </p>
          </a>

          <a
            className="rounded-2xl border border-slate-200 p-5 hover:border-slate-950"
            href={contactDetails.linkedInUrl}
            rel="noreferrer"
            target="_blank"
          >
            <p className="text-sm font-medium text-slate-500">LinkedIn</p>
            <p className="mt-2 font-semibold text-slate-950">Ali Safdar</p>
          </a>
        </div>
      </section>
    </div>
  );
}
