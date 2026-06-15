export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {year} The Silver Guardian. All rights reserved.</p>
        <div className="flex gap-5">
          <a className="transition hover:text-slate-950" href="#">
            Privacy
          </a>
          <a className="transition hover:text-slate-950" href="#">
            Terms
          </a>
          <a className="transition hover:text-slate-950" href="#">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
