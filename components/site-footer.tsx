import { siteConfig } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="px-4 pb-6 pt-2 sm:px-6 lg:px-8 lg:pb-8">
      <div className="mx-auto max-w-7xl">
        <div className="paper-panel rounded-[32px] px-6 py-8 sm:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <p className="kicker">Ready To Publish</p>
              <p className="font-display mt-4 text-3xl text-[var(--ink)] sm:text-4xl">
                第一版先上线，后面再持续打磨。
              </p>
              <p className="mt-4 text-sm leading-7 text-[var(--muted)] sm:text-base">
                你只需要继续替换内容、补充真实案例、绑定域名，这个站点就能从模板变成你自己的长期资产。
              </p>
            </div>

            <div className="flex flex-col gap-3 text-sm text-[var(--muted)] sm:items-end">
              <a href={siteConfig.email} className="hover:text-[var(--ink)]">
                {siteConfig.email.replace("mailto:", "")}
              </a>
              <p>{siteConfig.basedIn}</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
