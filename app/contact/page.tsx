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
          Send me a message using the form below, or connect through one of my
          contact links.
        </p>

        <form
          action="https://formspree.io/f/xbgjgyll"
          className="mt-8 space-y-5"
          method="POST"
        >
          <div>
            <label
              className="text-sm font-medium text-slate-700"
              htmlFor="name"
            >
              Name
            </label>
            <input
              autoComplete="name"
              className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none focus:border-slate-950"
              id="name"
              name="name"
              required
              type="text"
            />
          </div>

          <div>
            <label
              className="text-sm font-medium text-slate-700"
              htmlFor="email"
            >
              Email
            </label>
            <input
              autoComplete="email"
              className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none focus:border-slate-950"
              id="email"
              name="email"
              required
              type="email"
            />
          </div>

          <div>
            <label
              className="text-sm font-medium text-slate-700"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-950 outline-none focus:border-slate-950"
              id="message"
              name="message"
              required
              rows={6}
            />
          </div>

          <button
            className="rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            type="submit"
          >
            Send Message
          </button>
        </form>

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
