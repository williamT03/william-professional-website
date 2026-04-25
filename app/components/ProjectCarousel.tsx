"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Project } from "@/app/data/siteData";

type ProjectCarouselProps = {
  projects: Project[];
};

export default function ProjectCarousel({ projects }: ProjectCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  function rotateProject(direction: number) {
    setActiveIndex((current) => {
      const nextIndex = (current + direction + projects.length) % projects.length;
      return nextIndex;
    });
  }

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % projects.length);
    }, 7000);
    return () => window.clearInterval(intervalId);
  }, [projects.length]);

  const activeProject = projects[activeIndex];

  return (
    <div className="grid gap-6 lg:grid-cols-[15rem_1fr]">
      <div className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">
        {projects.map((project, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={project.slug}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`min-w-[13rem] rounded-[1.4rem] border px-4 py-4 text-left transition-all duration-300 lg:min-w-0 ${
                isActive
                  ? "border-white/60 bg-white/24 text-white shadow-[0_12px_30px_rgba(4,16,41,0.18)]"
                  : "border-white/20 bg-white/10 text-white/75 hover:bg-white/16"
              }`}
            >
              <p className="text-xs uppercase tracking-[0.24em] text-white/60">
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </p>
              <h3 className="mt-3 text-lg font-semibold">{project.title}</h3>
              <p className="mt-1 text-sm text-white/70">{project.role}</p>
            </button>
          );
        })}
      </div>

      <article className="glass-panel overflow-hidden p-8 text-white">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="section-pill section-pill-water">Featured Build</p>
            <h3 className="mt-4 font-[family-name:var(--font-display)] text-4xl leading-none sm:text-5xl">
              {activeProject.title}
            </h3>
            <p className="mt-3 text-sm uppercase tracking-[0.24em] text-white/65">
              {activeProject.role} • {activeProject.period}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => rotateProject(-1)}
              aria-label="Previous project"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/12 text-xl text-white transition-colors duration-300 hover:bg-white/22"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => rotateProject(1)}
              aria-label="Next project"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/12 text-xl text-white transition-colors duration-300 hover:bg-white/22"
            >
              ›
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p className="max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
              {activeProject.blurb}
            </p>

            <div className="mt-6 space-y-3">
              {activeProject.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start gap-3 rounded-2xl border border-white/12 bg-white/8 px-4 py-3"
                >
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--color-seafoam)]" />
                  <p className="text-sm leading-7 text-white/80">{highlight}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-white/60">
                Tools + Focus
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {activeProject.stack.map((item) => (
                  <span key={item} className="tag-chip tag-chip-bright">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={activeProject.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[var(--color-water-4)] transition-transform duration-300 hover:-translate-y-0.5"
              >
                {activeProject.ctaLabel}
              </a>
              <Link
                href={`/projects#${activeProject.slug}`}
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/18"
              >
                View More
              </Link>
            </div>

            <div className="flex gap-2">
              {projects.map((project, index) => (
                <button
                  key={project.slug}
                  type="button"
                  aria-label={`Go to ${project.title}`}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex ? "w-10 bg-white" : "w-2.5 bg-white/35"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
