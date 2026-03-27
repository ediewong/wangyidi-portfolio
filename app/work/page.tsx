import Link from "next/link";
import type { CSSProperties } from "react";
import { projects } from "@/lib/site-data";

export const metadata = {
  title: "Work",
  description: "精选案例列表与项目详情。",
};

export default function WorkPage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-8 px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
      <section className="paper-panel rounded-[36px] px-6 py-8 sm:px-10 sm:py-12 lg:px-14">
        <p className="kicker">Work Index</p>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h1 className="font-display text-5xl leading-tight text-[var(--ink)] sm:text-6xl">
              这里放最值得别人花时间看的项目。
            </h1>
          </div>
          <p className="text-sm leading-7 text-[var(--muted)] sm:text-base">
            案例顺序建议按说服力排列，而不是按时间顺序机械罗列。把最能代表你方向和能力层次的项目放前面，后面的案例负责补充广度与个性。
          </p>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="project-card paper-panel rounded-[30px] p-6"
            style={{ "--project-accent": project.accent } as CSSProperties}
          >
            <div className="flex items-center justify-between gap-4">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                {project.category}
              </p>
              <p className="text-sm text-[var(--muted)]">{project.year}</p>
            </div>

            <h2 className="font-display mt-8 text-3xl leading-tight text-[var(--ink)]">
              {project.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
              {project.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.services.map((service) => (
                <span
                  key={service}
                  className="rounded-full border border-black/10 px-3 py-1 text-xs text-[var(--muted)]"
                >
                  {service}
                </span>
              ))}
            </div>

            <Link className="mt-8 inline-flex text-sm font-medium text-[var(--ink)]" href={`/work/${project.slug}`}>
              打开案例页
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
