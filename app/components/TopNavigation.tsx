import Link from "next/link";
import { navigationLinks, siteProfile } from "@/app/data/siteData";

type TopNavigationProps = {
  currentPage?: "home" | "projects";
};

function normalizeHref(href: string, currentPage: "home" | "projects") {
  if (currentPage === "projects" && href.startsWith("#")) {
    return `/${href}`;
  }

  return href;
}

export default function TopNavigation({
  currentPage = "home",
}: TopNavigationProps) {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 px-4">
      <nav
        aria-label="Primary"
        className="pointer-events-auto mx-auto flex w-full max-w-5xl items-center justify-between gap-4 rounded-full border border-white/40 bg-white/55 px-3 py-2 shadow-[0_18px_60px_rgba(8,33,70,0.16)] backdrop-blur-xl"
      >
        <Link
          href={currentPage === "home" ? "#hero" : "/"}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--color-coral)] text-sm font-semibold uppercase tracking-[0.22em] text-white transition-transform duration-300 hover:-translate-y-0.5"
        >
          WT
        </Link>

        <div className="flex flex-1 flex-wrap items-center justify-center gap-2 sm:gap-3">
          {navigationLinks.map((link) => (
            <Link
              key={link.label}
              href={normalizeHref(link.href, currentPage)}
              className="rounded-full px-3 py-2 text-sm font-medium text-[var(--color-ink)] transition-colors duration-300 hover:bg-white/65 hover:text-[var(--color-water-4)]"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={currentPage === "projects" ? "/projects" : "#projects"}
            className="rounded-full px-3 py-2 text-sm font-medium text-[var(--color-ink)] transition-colors duration-300 hover:bg-white/65 hover:text-[var(--color-water-4)]"
          >
            Project Page
          </Link>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={siteProfile.githubHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[var(--color-water-2)]/20 bg-white/70 px-4 py-2 text-sm font-semibold text-[var(--color-water-4)] transition-colors duration-300 hover:bg-[var(--color-water-4)] hover:text-white"
          >
            GitHub
          </a>
          <a
            href={siteProfile.resumeHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[var(--color-water-4)] px-4 py-2 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
