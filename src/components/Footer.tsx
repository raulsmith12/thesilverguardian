import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contact" className="site-footer">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p>&copy; {year}. All rights reserved. Site created by <a href="https://galacticdigitalstudios.com" target="_blank">Galactic Digital Studios</a>.</p>
        <div className="flex gap-5">
          <Link className="transition" href="/">
            Home
          </Link>
          <Link className="transition" href="/privacy">
            Privacy
          </Link>
          <Link className="transition" href="/contact">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
