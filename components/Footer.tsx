import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-5 py-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Ali Safdar. Backend AI Engineering portfolio.</p>
        <div className="flex gap-4">
          <Link className="hover:text-slate-950" href="/projects">
            Projects
          </Link>
          <Link className="hover:text-slate-950" href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
