import { siteConfig } from "@/lib/site-data";

export const metadata = {
  title: "Contact",
  description: "联系方式、社交链接与上线前检查项。",
};

const checklist = [
  "把邮箱换成你最常用的那个，并测试能否正常打开邮件客户端。",
  "把 GitHub / LinkedIn / Behance 等占位链接改成真实地址。",
  "如果你有简历 PDF，放到 public 目录后把下载链接接上。",
  "部署到 Vercel 后，记得配置 NEXT_PUBLIC_SITE_URL。",
];

export default function ContactPage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-8 px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
      <section className="paper-panel rounded-[36px] px-6 py-8 sm:px-10 sm:py-12 lg:px-14">
        <p className="kicker">Contact</p>
        <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <h1 className="font-display text-5xl leading-tight text-[var(--ink)] sm:text-6xl">
              把联系你这件事，做得非常简单。
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              你的作品页做得再好，如果联系入口藏得很深，别人还是可能在最后一步流失。联系页的目标只有一个：让对方立刻知道怎么找到你。
            </p>
          </div>

          <div className="rounded-[32px] border border-black/10 bg-white/60 p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              Primary Email
            </p>
            <a
              href={siteConfig.email}
              className="font-display mt-4 inline-flex text-3xl text-[var(--ink)] sm:text-4xl"
            >
              {siteConfig.email.replace("mailto:", "")}
            </a>
            <p className="mt-4 text-sm leading-7 text-[var(--muted)]">
              建议邮箱、微信名片或 LinkedIn 至少保留一个稳定常用入口。
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="paper-panel rounded-[32px] px-6 py-8 sm:px-8">
          <p className="kicker">Social Links</p>
          <div className="mt-6 space-y-4">
            {siteConfig.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-[24px] border border-black/10 bg-white/60 px-5 py-5"
              >
                <div className="flex items-center justify-between gap-4">
                  <p className="font-medium text-[var(--ink)]">{social.label}</p>
                  <span className="text-sm text-[var(--muted)]">Open</span>
                </div>
                <p className="mt-2 text-sm leading-7 text-[var(--muted)]">
                  {social.note}
                </p>
              </a>
            ))}
          </div>
        </article>

        <article className="paper-panel rounded-[32px] px-6 py-8 sm:px-8">
          <p className="kicker">Before Launch</p>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
            {checklist.map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  aria-hidden="true"
                  className="mt-2 h-2 w-2 flex-none rounded-full bg-[var(--accent)]"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </section>
    </main>
  );
}
