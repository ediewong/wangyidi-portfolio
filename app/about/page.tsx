import Link from "next/link";
import { siteConfig } from "@/lib/site-data";

export const metadata = {
  title: "About",
  description: "关于我的页面与合作方式说明。",
};

export default function AboutPage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-8 px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
      <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="paper-panel rounded-[36px] px-6 py-8 sm:px-10 sm:py-12 lg:px-14">
          <p className="kicker">About</p>
          <h1 className="font-display mt-5 text-5xl leading-tight text-[var(--ink)] sm:text-6xl">
            用这页补充履历、方法和合作气质。
          </h1>
          <div className="mt-8 space-y-5 text-sm leading-7 text-[var(--muted)] sm:text-base">
            {siteConfig.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>

        <article className="paper-panel rounded-[36px] px-6 py-8 sm:px-8">
          <p className="kicker">What To Add</p>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
            <li>你的职业经历、教育背景，或最重要的职业转折。</li>
            <li>你偏好的项目类型、工作方法，以及合作流程。</li>
            <li>你使用的工具、擅长的能力和想继续发展的方向。</li>
            <li>如果你在求职，也可以在这里放一句清晰的岗位方向说明。</li>
          </ul>
        </article>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        {siteConfig.principles.map((principle) => (
          <article
            key={principle.title}
            className="paper-panel rounded-[32px] px-6 py-8 sm:px-8"
          >
            <p className="kicker">{principle.eyebrow}</p>
            <h2 className="font-display mt-4 text-3xl text-[var(--ink)] sm:text-4xl">
              {principle.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
              {principle.description}
            </p>
          </article>
        ))}
      </section>

      <section className="paper-panel rounded-[32px] px-6 py-8 sm:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="kicker">Next Step</p>
            <h2 className="font-display mt-4 text-4xl text-[var(--ink)]">
              About 写完后，就把联系入口补齐。
            </h2>
          </div>
          <Link className="solid-link" href="/contact">
            前往 Contact
          </Link>
        </div>
      </section>
    </main>
  );
}
