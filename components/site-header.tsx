import Link from "next/link";
import { siteConfig } from "@/lib/site-data";

const navigation = [
  { href: "/#works", label: "Works" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="section-shell flex items-center justify-between gap-4 rounded-full px-4 py-3 sm:px-6">
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <span className="hidden text-xs uppercase tracking-[0.32em] text-[var(--muted)] sm:inline-flex">
              Portfolio
            </span>
            <span className="font-display truncate text-2xl text-[var(--ink)]">
              {siteConfig.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-[var(--muted)] transition hover:text-[var(--ink)]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a className="solid-link !px-4 !py-2.5 !text-sm" href={siteConfig.email}>
            Say hello
          </a>
        </div>
      </div>
    </header>
  );
}
