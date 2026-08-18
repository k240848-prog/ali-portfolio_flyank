import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-slate-950"
        >
          Ali Safdar
        </Link>
        <nav aria-label="Main navigation">
          <ul className="flex flex-wrap gap-3 text-sm font-medium text-slate-700 sm:gap-5">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-slate-950" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
