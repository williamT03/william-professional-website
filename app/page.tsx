import Link from "next/link";
import ContactForm from "@/app/components/ContactForm";
import LighthouseScene from "@/app/components/LighthouseScene";
import ProjectCarousel from "@/app/components/ProjectCarousel";
import SiteFooter from "@/app/components/SiteFooter";
import TopNavigation from "@/app/components/TopNavigation";
import {
  coursework,
  featuredProjects,
  heroHighlights,
  siteProfile,
  socialLinks,
} from "@/app/data/siteData";

export default function Home() {
  return (
    <div className="page-shell">
      <div className="ambient-orb ambient-orb-left" aria-hidden="true" />
      <div className="ambient-orb ambient-orb-right" aria-hidden="true" />
      <div className="ambient-grid" aria-hidden="true" />

      <TopNavigation currentPage="home" />

      <main className="relative z-10">
        <section id="hero" className="hero-section px-4 pb-14 pt-28">
          <div className="mx-auto grid w-full max-w-6xl gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div className="hero-copy">
              <span className="section-pill">Ocean-Built Portfolio</span>
              <h1 className="mt-6 font-[family-name:var(--font-display)] text-6xl leading-[0.92] text-[var(--color-ink)] sm:text-7xl lg:text-[5.5rem]">
                {siteProfile.name}
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--color-ink)]/78 sm:text-xl">
                {siteProfile.role} focused on practical AI systems, secure software, and polished experiences that feel as steady as a lighthouse on the coast.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--color-ink)]/68">
                {siteProfile.shortBio}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="#projects" className="primary-button">
                  Explore Projects
                </Link>
                <a
                  href={siteProfile.resumeHref}
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-button"
                >
                  Download Resume
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="link-chip"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <article className="hero-stat">
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-water-3)]/70">
                    Base
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-[var(--color-water-4)]">
                    {siteProfile.location}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-ink)]/65">
                    Building from Central Florida with strong roots in full-stack development and AI tooling.
                  </p>
                </article>

                <article className="hero-stat">
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-water-3)]/70">
                    Education
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-[var(--color-water-4)]">
                    Florida Poly
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-ink)]/65">
                    B.S. in Computer Science with coursework spanning AI/ML, secure software, deep learning, and networking.
                  </p>
                </article>

                <article className="hero-stat">
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-water-3)]/70">
                    Focus
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-[var(--color-water-4)]">
                    AI + Product
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-ink)]/65">
                    A blend of machine learning, retrieval systems, cloud labs, and interfaces people can actually enjoy using.
                  </p>
                </article>
              </div>

              <div className="mt-10 space-y-3">
                {heroHighlights.map((highlight) => (
                  <div key={highlight} className="hero-highlight">
                    <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-[var(--color-coral)]" />
                    <p className="text-sm leading-7 text-[var(--color-ink)]/72">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>

            <LighthouseScene />
          </div>
        </section>

        <section id="projects" className="section-shell section-surface">
          <div className="section-inner">
            <div className="max-w-3xl">
              <span className="section-pill section-pill-water">Projects</span>
              <h2 className="section-title mt-6 text-white">
                Just below the surface, the featured work starts to move.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/75 sm:text-lg">
                This section keeps the water bright and active. The carousel highlights real projects pulled from William&apos;s resume and GitHub presence, with deeper detail living on the dedicated projects page.
              </p>
            </div>

            <div className="mt-10">
              <ProjectCarousel projects={featuredProjects} />
            </div>

            <div className="mt-8 flex justify-center sm:justify-end">
              <Link href="/projects" className="secondary-button secondary-button-dark">
                See All Projects
              </Link>
            </div>
          </div>
        </section>

        <section id="about" className="section-shell section-midwater">
          <div className="section-inner grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-start">
            <div>
              <span className="section-pill section-pill-water">About</span>
              <h2 className="section-title mt-6 text-white">
                Deeper water, stronger foundations.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/78 sm:text-lg">
                William recently completed his computer science degree at Florida Polytechnic University, where he focused on secure software engineering, AI/ML, data mining, deep learning, and the systems thinking needed to ship dependable products.
              </p>
              <p className="mt-4 text-base leading-8 text-white/70">
                That school foundation shows up in the work: practical interfaces on the surface, stronger engineering underneath, and a steady interest in solving real problems with AI instead of treating it like a gimmick.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {coursework.map((item) => (
                  <span key={item} className="tag-chip">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <article className="glass-panel p-6 text-white">
                <p className="text-xs uppercase tracking-[0.24em] text-white/55">Resume</p>
                <h3 className="mt-4 text-2xl font-semibold">Professional Snapshot</h3>
                <p className="mt-3 text-sm leading-7 text-white/72">
                  Download the current resume for a full view of experience, projects, and technical strengths.
                </p>
                <a
                  href={siteProfile.resumeHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--color-water-4)]"
                >
                  Open Resume
                </a>
              </article>

              <article className="glass-panel p-6 text-white">
                <p className="text-xs uppercase tracking-[0.24em] text-white/55">GitHub</p>
                <h3 className="mt-4 text-2xl font-semibold">Code In Public</h3>
                <p className="mt-3 text-sm leading-7 text-white/72">
                  Explore repositories covering AI experimentation, web development, and infrastructure projects.
                </p>
                <a
                  href={siteProfile.githubHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--color-water-4)]"
                >
                  Visit GitHub
                </a>
              </article>

              <article className="glass-panel p-6 text-white">
                <p className="text-xs uppercase tracking-[0.24em] text-white/55">LinkedIn</p>
                <h3 className="mt-4 text-2xl font-semibold">Professional Presence</h3>
                <p className="mt-3 text-sm leading-7 text-white/72">
                  Connect for opportunities, collaboration, and a quick overview of experience beyond the portfolio.
                </p>
                <a
                  href={siteProfile.linkedinHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--color-water-4)]"
                >
                  Visit LinkedIn
                </a>
              </article>

              <article className="glass-panel p-6 text-white">
                <p className="text-xs uppercase tracking-[0.24em] text-white/55">Cloud Lab</p>
                <h3 className="mt-4 text-2xl font-semibold">Live Infrastructure</h3>
                <p className="mt-3 text-sm leading-7 text-white/72">
                  A private cloud and server environment that supports experimentation with systems, hosting, and automation.
                </p>
                <a
                  href={siteProfile.cloudLabHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex rounded-full bg-white px-4 py-2 text-sm font-semibold text-[var(--color-water-4)]"
                >
                  Explore Lab
                </a>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="section-shell section-deepwater">
          <div className="section-inner grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="text-white">
              <span className="section-pill section-pill-water">Contact</span>
              <h2 className="section-title mt-6 text-white">
                The deepest section keeps things simple.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/76 sm:text-lg">
                Whether the conversation is about AI engineering, full-stack work, or building a cleaner portfolio experience, this is the place to reach out.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <article className="deep-card">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/55">Email</p>
                  <a href={`mailto:${siteProfile.email}`} className="mt-3 block text-lg font-semibold text-white">
                    {siteProfile.email}
                  </a>
                </article>
                <article className="deep-card">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/55">Phone</p>
                  <a href="tel:+19546476633" className="mt-3 block text-lg font-semibold text-white">
                    {siteProfile.phone}
                  </a>
                </article>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      <SiteFooter currentPage="home" />
    </div>
  );
}
