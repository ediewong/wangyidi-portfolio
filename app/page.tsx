import Link from "next/link";
import type { CSSProperties } from "react";
import { projects, siteConfig } from "@/lib/site-data";

const stats = [
  { value: `${projects.length}`, label: "精选案例" },
  { value: "4", label: "核心页面" },
  { value: "100%", label: "响应式适配" },
];

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-8 px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
      <section className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
        <div className="paper-panel section-grid relative overflow-hidden rounded-[36px] px-6 py-8 sm:px-10 sm:py-12 lg:px-14 lg:py-16">
          <div className="absolute right-6 top-6 h-24 w-24 rounded-full border border-black/10 bg-[radial-gradient(circle_at_30%_30%,rgba(173,77,46,0.35),transparent_70%)] blur-sm" />
          <p className="kicker">Portfolio / Public-facing first impression</p>
          <div className="mt-10 max-w-3xl">
            <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
              {siteConfig.role}
            </p>
            <h1 className="font-display mt-6 text-5xl leading-[0.95] text-[var(--ink)] sm:text-6xl lg:text-[5.4rem]">
              {siteConfig.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              {siteConfig.heroText}
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link className="solid-link" href="/work">
              查看精选案例
            </Link>
            <Link className="outline-link" href="/contact">
              联系方式
            </Link>
          </div>

          <div className="mt-12 grid gap-4 border-t border-black/10 pt-6 sm:grid-cols-3">
            {stats.map((item) => (
              <div key={item.label}>
                <p className="font-display text-4xl text-[var(--ink)]">
                  {item.value}
                </p>
                <p className="mt-2 text-sm text-[var(--muted)]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="flex flex-col gap-6">
          <div className="paper-panel rounded-[32px] px-6 py-7 sm:px-7 sm:py-8">
            <p className="kicker">Profile</p>
            <div className="mt-6 space-y-4">
              <div>
                <p className="text-sm uppercase tracking-[0.25em] text-[var(--muted)]">
                  Name
                </p>
                <p className="mt-2 font-display text-3xl text-[var(--ink)]">
                  {siteConfig.name}
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  {siteConfig.basedIn}
                </p>
              </div>

              <div className="rounded-[28px] border border-black/10 bg-white/70 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                  Positioning
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  {siteConfig.intro}
                </p>
              </div>

              <div className="space-y-3">
                {siteConfig.services.map((service) => (
                  <div
                    key={service.title}
                    className="rounded-[24px] border border-black/10 bg-[rgba(250,245,236,0.84)] px-4 py-4"
                  >
                    <p className="text-sm font-medium text-[var(--ink)]">
                      {service.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="paper-panel rounded-[32px] px-6 py-7 sm:px-7 sm:py-8">
            <p className="kicker">Launch Notes</p>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--muted)]">
              <li>把示例项目替换成你的真实案例，先保证 3 个高质量项目即可。</li>
              <li>上线前记得把邮件、GitHub、LinkedIn 和简历链接改成你自己的。</li>
              <li>部署到 Vercel 后设置 `NEXT_PUBLIC_SITE_URL`，让 SEO 与分享链接更完整。</li>
            </ul>
          </div>
        </aside>
      </section>

      <section
        id="selected-work"
        className="paper-panel rounded-[36px] px-6 py-8 sm:px-10 sm:py-12 lg:px-14"
      >
        <div className="flex flex-col gap-4 border-b border-black/10 pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="kicker">Selected Work</p>
            <h2 className="font-display mt-4 text-4xl text-[var(--ink)] sm:text-5xl">
              先展示最能代表你的案例。
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            第一版作品集最重要的不是塞满内容，而是让别人 10 秒内看懂你是谁、做什么、
            最值得看的项目是什么。
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.slug}
              className="project-card rounded-[30px] border border-black/10 bg-white/70 p-6"
              style={{ "--project-accent": project.accent } as CSSProperties}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                  {project.category}
                </span>
                <span className="text-sm text-[var(--muted)]">{project.year}</span>
              </div>

              <div className="mt-8">
                <p className="text-sm text-[var(--muted)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display mt-3 text-3xl leading-tight text-[var(--ink)]">
                  {project.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
                  {project.summary}
                </p>
              </div>

              <ul className="mt-6 space-y-3 text-sm leading-6 text-[var(--muted)]">
                {project.highlights.slice(0, 2).map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-2 w-2 flex-none rounded-full bg-[var(--project-accent)]"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <Link className="mt-8 inline-flex text-sm font-medium text-[var(--ink)]" href={`/work/${project.slug}`}>
                查看案例详情
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="paper-panel rounded-[36px] px-6 py-8 sm:px-10 sm:py-12">
          <p className="kicker">Approach</p>
          <h2 className="font-display mt-4 text-4xl text-[var(--ink)] sm:text-5xl">
            一个好作品集，首先是一种叙事。
          </h2>
          <div className="mt-6 space-y-5 text-sm leading-7 text-[var(--muted)] sm:text-base">
            {siteConfig.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {siteConfig.principles.map((principle) => (
            <div
              key={principle.title}
              className="paper-panel rounded-[32px] px-6 py-8 sm:px-7"
            >
              <p className="kicker">{principle.eyebrow}</p>
              <h3 className="font-display mt-4 text-3xl text-[var(--ink)]">
                {principle.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="paper-panel overflow-hidden rounded-[36px] px-6 py-8 sm:px-10 sm:py-12 lg:px-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
            <p className="kicker">Contact</p>
            <h2 className="font-display mt-4 text-4xl leading-tight text-[var(--ink)] sm:text-5xl lg:text-6xl">
              上线后，把这个链接放进简历、邮件签名和社交主页。
            </h2>
          </div>
          <div className="space-y-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
            <p>
              技术上可访问只是第一步，真正让别人看到你，还需要持续把入口放到招聘、合作、
              社交分发和项目沟通里。
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link className="solid-link" href="/contact">
                打开联系页
              </Link>
              <Link className="outline-link" href="/about">
                查看 About 页面
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
