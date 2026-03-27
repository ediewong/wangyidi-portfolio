import Link from "next/link";
import { siteConfig } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="px-4 pb-6 pt-2 sm:px-6 lg:px-8 lg:pb-8">
      <div className="mx-auto max-w-7xl">
        <div className="section-shell rounded-[30px] px-6 py-7 sm:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">Built To Evolve</p>
              <p className="font-display mt-4 text-3xl text-[var(--ink)] sm:text-4xl">
                This homepage is ready for your real projects next.
              </p>
            </div>

            <div className="flex flex-col gap-2 text-sm text-[var(--muted)] md:items-end">
              <a href={siteConfig.email} className="hover:text-[var(--ink)]">
                {siteConfig.email.replace("mailto:", "")}
              </a>
              <div className="flex gap-4">
                <Link href="/work" className="hover:text-[var(--ink)]">
                  Work
                </Link>
                <Link href="/about" className="hover:text-[var(--ink)]">
                  About
                </Link>
                <Link href="/contact" className="hover:text-[var(--ink)]">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
