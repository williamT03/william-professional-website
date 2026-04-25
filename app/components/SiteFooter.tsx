import Link from "next/link";
import { navigationLinks, siteProfile, socialLinks } from "@/app/data/siteData";

type SiteFooterProps = {
  currentPage?: "home" | "projects";
};

function normalizeHref(href: string, currentPage: "home" | "projects") {
  if (currentPage === "projects" && href.startsWith("#")) {
    return `/${href}`;
  }

  return href;
}

export default function SiteFooter({ currentPage = "home" }: SiteFooterProps) {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[var(--color-water-4)] px-4 py-10 text-white">
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-white/50">William Trinidad</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl leading-none">
            Building calm, practical software with depth.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72">
            AI engineering, full-stack development, and cloud-minded problem solving with an ocean-inspired personal brand.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-white">Explore</p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-white/70">
              {navigationLinks.map((link) => (
                <Link key={link.label} href={normalizeHref(link.href, currentPage)} className="footer-link">
                  {link.label}
                </Link>
              ))}
              <Link href="/projects" className="footer-link">
                All Projects
              </Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Connect</p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-white/70">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="footer-link">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Contact</p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-white/70">
              <a href={`mailto:${siteProfile.email}`} className="footer-link">
                {siteProfile.email}
              </a>
              <a href="tel:+19546476633" className="footer-link">
                {siteProfile.phone}
              </a>
              <span className="text-white/55">{siteProfile.location}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
