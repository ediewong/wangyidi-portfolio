import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/lib/site-data";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `/work/${project.slug}`,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-8 px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
      <section className="paper-panel section-grid rounded-[36px] px-6 py-8 sm:px-10 sm:py-12 lg:px-14">
        <Link className="outline-link" href="/work">
          返回 Work
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              {project.category} / {project.year}
            </p>
            <h1 className="font-display mt-5 text-5xl leading-tight text-[var(--ink)] sm:text-6xl">
              {project.title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              {project.detailIntro}
            </p>
          </div>

          <div className="rounded-[32px] border border-black/10 bg-white/60 p-6">
            <p className="kicker">Project Facts</p>
            <dl className="mt-6 space-y-5 text-sm leading-7 text-[var(--muted)]">
              <div>
                <dt className="text-xs uppercase tracking-[0.26em]">Role</dt>
                <dd className="mt-2 text-sm leading-7 text-[var(--ink)]">
                  {project.role}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.26em]">Duration</dt>
                <dd className="mt-2 text-sm leading-7 text-[var(--ink)]">
                  {project.duration}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.26em]">Scope</dt>
                <dd className="mt-3 flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full border border-black/10 px-3 py-1 text-xs text-[var(--muted)]"
                    >
                      {service}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <article className="paper-panel rounded-[32px] px-6 py-8 sm:px-8">
          <p className="kicker">Challenge</p>
          <p className="mt-6 text-sm leading-7 text-[var(--muted)] sm:text-base">
            {project.challenge}
          </p>
        </article>

        <article className="paper-panel rounded-[32px] px-6 py-8 sm:px-8">
          <p className="kicker">Highlights</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {project.highlights.map((highlight) => (
              <div
                key={highlight}
                className="rounded-[24px] border border-black/10 bg-white/60 p-4 text-sm leading-7 text-[var(--muted)]"
              >
                {highlight}
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="paper-panel rounded-[36px] px-6 py-8 sm:px-10 sm:py-12 lg:px-14">
        <div className="flex flex-col gap-4 border-b border-black/10 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="kicker">Process</p>
            <h2 className="font-display mt-4 text-4xl text-[var(--ink)] sm:text-5xl">
              用 3 个步骤讲清楚项目推进逻辑。
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            好的案例页不是把所有过程细节都贴上来，而是让读者理解你是如何判断问题、怎么推进、最后产生了什么结果。
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {project.process.map((step, index) => (
            <article
              key={step.title}
              className="rounded-[28px] border border-black/10 bg-white/60 p-6"
            >
              <p className="text-sm text-[var(--muted)]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="font-display mt-4 text-3xl text-[var(--ink)]">
                {step.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <article className="paper-panel rounded-[32px] px-6 py-8 sm:px-8">
          <p className="kicker">Outcome</p>
          <p className="mt-6 text-sm leading-7 text-[var(--muted)] sm:text-base">
            {project.outcome}
          </p>
          <ul className="mt-6 space-y-3 text-sm leading-7 text-[var(--muted)]">
            {project.metrics.map((metric) => (
              <li key={metric} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2 h-2 w-2 flex-none rounded-full"
                  style={{ backgroundColor: project.accent }}
                />
                <span>{metric}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="paper-panel rounded-[32px] px-6 py-8 sm:px-8">
          <p className="kicker">Closing Note</p>
          <blockquote className="font-display mt-6 text-3xl leading-tight text-[var(--ink)] sm:text-4xl">
            “{project.quote}”
          </blockquote>
        </article>
      </section>

      <section className="paper-panel rounded-[32px] px-6 py-8 sm:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="kicker">Next Case</p>
            <h2 className="font-display mt-4 text-4xl text-[var(--ink)]">
              继续往下看下一组案例。
            </h2>
          </div>
          <Link className="solid-link" href={`/work/${nextProject.slug}`}>
            {nextProject.title}
          </Link>
        </div>
      </section>
    </main>
  );
}
