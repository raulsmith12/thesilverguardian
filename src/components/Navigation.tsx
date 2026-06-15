const links = ["Services", "Approach", "Insights", "Contact"];

export function Navigation() {
  return (
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6">
        <a className="text-lg font-semibold tracking-normal text-slate-950" href="#">
          The Silver Guardian
        </a>
        <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {links.map((link) => (
            <a key={link} className="transition hover:text-slate-950" href="#">
              {link}
            </a>
          ))}
        </div>
        <a
          className="inline-flex h-10 items-center justify-center rounded-md bg-slate-950 px-4 text-sm font-semibold text-white transition hover:bg-slate-800"
          href="#"
        >
          Get Started
        </a>
      </nav>
    </header>
  );
}
