import SiteFooter from "@/app/components/SiteFooter";
import TopNavigation from "@/app/components/TopNavigation";
import { allProjects, siteProfile } from "@/app/data/siteData";

export default function ProjectsPage() {
  return (
    <div className="page-shell min-h-screen">
      <div className="ambient-orb ambient-orb-left" aria-hidden="true" />
      <div className="ambient-orb ambient-orb-right" aria-hidden="true" />
      <div className="ambient-grid" aria-hidden="true" />

      <TopNavigation currentPage="projects" />

      <main className="relative z-10 px-4 pb-20 pt-28">
        <section className="mx-auto w-full max-w-6xl">
          <div className="glass-panel p-8 text-[var(--color-ink)] sm:p-10">
            <span className="section-pill">Projects Archive</span>
            <h1 className="mt-6 font-[family-name:var(--font-display)] text-6xl leading-[0.94] text-[var(--color-ink)] sm:text-7xl">
              More detail from William&apos;s project shoreline.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--color-ink)]/70 sm:text-lg">
              This page expands on the portfolio highlights with direct links to GitHub repositories, the cloud lab, and William&apos;s broader web presence.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={siteProfile.githubHref}
                target="_blank"
                rel="noreferrer"
                className="primary-button"
              >
                Visit GitHub Profile
              </a>
              <a
                href={siteProfile.resumeHref}
                target="_blank"
                rel="noreferrer"
                className="secondary-button"
              >
                Open Resume
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto mt-10 grid w-full max-w-6xl gap-6 lg:grid-cols-2">
          {allProjects.map((project) => (
            <article
              key={project.slug}
              id={project.slug}
              className="glass-panel p-7 text-white sm:p-8"
            >
              <p className="text-xs uppercase tracking-[0.24em] text-white/55">
                {project.period}
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl leading-none">
                {project.title}
              </h2>
              <p className="mt-3 text-sm uppercase tracking-[0.24em] text-white/60">
                {project.role}
              </p>
              <p className="mt-5 text-base leading-8 text-white/78">{project.blurb}</p>

              <div className="mt-6 space-y-3">
                {project.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-start gap-3 rounded-2xl border border-white/12 bg-white/8 px-4 py-3"
                  >
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--color-seafoam)]" />
                    <p className="text-sm leading-7 text-white/78">{highlight}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="tag-chip tag-chip-bright">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-7">
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-[var(--color-water-4)]"
                >
                  {project.ctaLabel}
                </a>
              </div>
            </article>
          ))}
        </section>
      </main>

      <SiteFooter currentPage="projects" />
    </div>
  );
}
