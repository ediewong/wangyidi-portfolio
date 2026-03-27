import Link from "next/link";
import type { CSSProperties } from "react";
import {
  creativeStack,
  faqs,
  milestones,
  projects,
  siteConfig,
  studioNotes,
} from "@/lib/site-data";

const stats = [
  { value: "03", label: "selected projects" },
  { value: "CN / EN", label: "narrative ready" },
  { value: "2026", label: "available now" },
];

export default function Home() {
  const repeatedStack = [...creativeStack, ...creativeStack];

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-6 px-4 pb-14 sm:px-6 lg:px-8 lg:pb-18">
      <section className="section-shell hero-shell overflow-hidden px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
          <div className="flex flex-col justify-between">
            <div>
              <p className="eyebrow">Independent Portfolio / 2026 Edition</p>
              <div className="availability-chip mt-6">{siteConfig.availability}</div>
              <h1 className="font-display hero-title mt-8 max-w-4xl text-5xl leading-[0.92] text-[var(--ink)] sm:text-6xl lg:text-[5.9rem]">
                {siteConfig.heroTitle}
              </h1>
              <p className="hero-copy mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                {siteConfig.heroText}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="solid-link" href="/#works">
                Browse selected work
              </Link>
              <Link className="outline-link" href="/work">
                Open case studies
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="stat-card rounded-[24px] border border-black/8 px-4 py-4"
                >
                  <p className="font-display text-3xl text-[var(--ink)]">
                    {item.value}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual relative min-h-[26rem] rounded-[34px] border border-black/8">
            <div className="visual-core" />
            <div className="visual-orbit visual-orbit-left" />
            <div className="visual-orbit visual-orbit-right" />

            <div className="note-badge absolute left-4 top-4 rounded-full px-4 py-2 text-xs uppercase tracking-[0.25em] text-[var(--ink)] sm:left-6 sm:top-6">
              editorial layout
            </div>

            <div className="portrait-caption absolute bottom-4 left-4 right-4 rounded-[24px] border border-white/45 bg-[rgba(255,255,255,0.55)] p-5 backdrop-blur md:bottom-6 md:left-6 md:right-6 md:p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
                {siteConfig.role}
              </p>
              <p className="font-display mt-3 text-3xl text-[var(--ink)] sm:text-4xl">
                {siteConfig.name}
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {siteConfig.intro}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell stack-band overflow-hidden py-4">
        <div className="stack-track">
          {repeatedStack.map((item, index) => (
            <span key={`${item.label}-${index}`} className="stack-pill">
              {item.label}
            </span>
          ))}
        </div>
      </section>

      <section
        id="works"
        className="section-shell px-6 py-8 sm:px-8 sm:py-10 lg:px-12"
      >
        <div className="flex flex-col gap-4 border-b border-black/8 pb-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="eyebrow">Selected Work</p>
            <h2 className="font-display mt-4 text-4xl leading-tight text-[var(--ink)] sm:text-5xl lg:text-6xl">
              A homepage that feels more like a curated studio than a template.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            参考站点的重点不是“有很多模块”，而是它有明确的节奏感。先抓住气质，再放出代表项目，最后让人愿意继续下滑了解你。
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className="work-card group rounded-[30px] border border-black/8 p-5"
              style={{ "--card-accent": project.accent } as CSSProperties}
            >
              <div className="work-preview rounded-[24px] p-5">
                <p className="text-xs uppercase tracking-[0.28em] text-white/70">
                  {project.category}
                </p>
                <div className="mt-10 flex items-end justify-between gap-4">
                  <p className="font-display max-w-[12rem] text-3xl leading-tight text-white">
                    {project.title}
                  </p>
                  <span className="text-sm text-white/70">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              <div className="mt-5">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
                    {project.year}
                  </p>
                  <span className="text-xs uppercase tracking-[0.24em] text-[var(--muted)]">
                    case study
                  </span>
                </div>

                <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
                  {project.summary}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.services.map((service) => (
                    <span key={service} className="work-tag">
                      {service}
                    </span>
                  ))}
                </div>

                <Link className="work-link mt-6 inline-flex items-center gap-2" href={`/work/${project.slug}`}>
                  Read the project
                  <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="services"
        className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]"
      >
        <div className="section-shell px-6 py-8 sm:px-8 sm:py-10">
          <p className="eyebrow">What I Do</p>
          <h2 className="font-display mt-4 text-4xl leading-tight text-[var(--ink)] sm:text-5xl">
            More than making screens look pretty.
          </h2>
          <p className="mt-6 text-sm leading-7 text-[var(--muted)] sm:text-base">
            真正像参考站那样有完成度的作品集，背后通常不是单一的 UI 能力，而是内容判断、视觉控制和真实落地能力同时存在。
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {siteConfig.services.map((service, index) => (
            <article
              key={service.title}
              className="section-shell service-card px-5 py-6 sm:px-6 sm:py-7"
            >
              <p className="service-index">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="font-display mt-5 text-3xl text-[var(--ink)]">
                {service.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                {service.description}
              </p>
              <ul className="bullet-list mt-5 space-y-3 text-sm leading-6 text-[var(--muted)]">
                {(service.bullets ?? []).map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section
        id="milestones"
        className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]"
      >
        <div className="section-shell px-6 py-8 sm:px-8 sm:py-10">
          <p className="eyebrow">Milestones</p>
          <h2 className="font-display mt-4 text-4xl text-[var(--ink)] sm:text-5xl">
            Structured like recognition, honest like a real portfolio.
          </h2>
          <div className="mt-8 space-y-5">
            {milestones.map((item) => (
              <article
                key={`${item.year}-${item.title}`}
                className="milestone-row rounded-[24px] border border-black/8 px-5 py-5"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
                      {item.label}
                    </p>
                    <h3 className="font-display mt-3 text-3xl text-[var(--ink)]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[var(--muted)]">{item.year}</p>
                </div>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-5">
          {studioNotes.map((note) => (
            <article
              key={note.title}
              className="section-shell note-card px-6 py-7 sm:px-7"
            >
              <p className="eyebrow">Studio Note</p>
              <h3 className="font-display mt-4 text-3xl text-[var(--ink)]">
                {note.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
                {note.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]"
      >
        <div className="section-shell portrait-shell overflow-hidden px-6 py-8 sm:px-8 sm:py-10">
          <div className="portrait-silhouette" />
          <div className="portrait-meta rounded-[22px] border border-white/40 bg-[rgba(255,255,255,0.48)] p-4 backdrop-blur">
            <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
              Based in
            </p>
            <p className="mt-3 font-display text-2xl text-[var(--ink)]">
              {siteConfig.basedIn}
            </p>
          </div>
        </div>

        <div className="section-shell px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
          <p className="eyebrow">About / Working Style</p>
          <h2 className="font-display mt-4 max-w-3xl text-4xl leading-tight text-[var(--ink)] sm:text-5xl">
            The reference site works because every section feels authored.
          </h2>

          <div className="mt-6 max-w-3xl space-y-5 text-sm leading-7 text-[var(--muted)] sm:text-base">
            {siteConfig.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {siteConfig.principles.map((principle) => (
              <article
                key={principle.title}
                className="principle-card rounded-[24px] border border-black/8 px-5 py-5"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
                  {principle.eyebrow}
                </p>
                <h3 className="font-display mt-3 text-2xl text-[var(--ink)]">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell px-6 py-8 sm:px-8 sm:py-10 lg:px-10">
        <div className="flex flex-col gap-4 border-b border-black/8 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">FAQ</p>
            <h2 className="font-display mt-4 text-4xl text-[var(--ink)] sm:text-5xl">
              Before we move on to the final styling pass.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            你刚刚问的 404，也属于这里面的“发布层问题”。页面内容可以继续做，但域名和部署是另一条线，我会在最后把两条线分开说明。
          </p>
        </div>

        <div className="mt-7 grid gap-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="faq-item rounded-[24px] border border-black/8 px-5 py-5" open>
              <summary className="font-display text-2xl text-[var(--ink)]">
                {faq.question}
              </summary>
              <p className="mt-4 max-w-4xl text-sm leading-7 text-[var(--muted)] sm:text-base">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="section-shell contact-band overflow-hidden px-6 py-8 sm:px-8 sm:py-10 lg:px-10"
      >
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="font-display mt-4 text-4xl leading-tight text-[var(--ink)] sm:text-5xl lg:text-6xl">
              If this direction feels right, we can turn it into your real portfolio next.
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--muted)] sm:text-base">
              这版已经把首页的视觉调性和内容框架搭出来了。下一步最值得做的是，把示例案例替换成你的真实项目，并继续决定是否把 /work、/about、/contact 也统一升级成同一套风格。
            </p>
          </div>

          <div className="contact-panel rounded-[28px] border border-black/8 p-5 sm:p-6">
            <a
              href={siteConfig.email}
              className="font-display text-3xl text-[var(--ink)] sm:text-4xl"
            >
              {siteConfig.email.replace("mailto:", "")}
            </a>

            <div className="mt-6 grid gap-3">
              {siteConfig.socials.map((social) => (
                <a key={social.label} href={social.href} className="social-link">
                  <span>{social.label}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
