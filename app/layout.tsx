import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { siteConfig } from "@/lib/site-data";
import "./globals.css";

const baseUrl = siteConfig.siteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${siteConfig.name} | ${siteConfig.role}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.heroText,
  keywords: [
    "portfolio",
    "作品集网站",
    "Next.js portfolio",
    "设计师作品集",
    "creative developer",
  ],
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.heroText,
    url: baseUrl,
    siteName: siteConfig.name,
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.role}`,
    description: siteConfig.heroText,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>
        <div className="relative flex min-h-screen flex-col">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[26rem] bg-[radial-gradient(circle_at_top,rgba(173,77,46,0.18),transparent_65%)]" />
          <SiteHeader />
          <div className="relative flex flex-1 flex-col">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
