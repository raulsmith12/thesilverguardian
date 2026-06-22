import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <section className="site-disclaimer" aria-label="Fundraising disclaimer">
        <div className="mx-auto w-full max-w-6xl px-6 py-5">
          <p>
            Disclaimer: All proceeds go to fundraising events held by The Silver
            Guardian.
          </p>
        </div>
      </section>
      <footer id="contact" className="site-footer">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} The Silver Guardian. All rights reserved.</p>
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
    </>
  );
}
