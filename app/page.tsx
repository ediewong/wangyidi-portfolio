"use client";

import type { JSX } from "react";
import { ClockWidget } from "@/components/clock-widget";
import { EmailCopy } from "@/components/email-copy";
import { useLanguage } from "@/components/language-context";
import { translations } from "@/lib/i18n";
import {
  siteConfig,
  workflowTools,
  ventures,
  writings,
  personalSection,
  socialLinks,
} from "@/lib/site-data";

export default function Home() {
  const { lang, toggleLang } = useLanguage();
  const t = translations[lang];
  const exps = t.experiences;

  return (
    <main className="mx-auto w-full max-w-[640px] px-8 pb-16">
      {/* Top status bar */}
      <div className="flex items-center justify-between py-5 text-[11px] text-[var(--muted)]">
        <span>EST. {siteConfig.estYear}</span>
        <ClockWidget />
      </div>

      {/* Profile */}
      <section className="mt-2 mb-8">
        {/* Avatar */}
        <div className="relative inline-block mb-3">
          <img
            src="/avatar.jpg"
            alt={siteConfig.name}
            className="w-14 h-14 object-cover"
            style={{ borderRadius: "10px" }}
          />
          {/* Online indicator */}
          <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-white block" />
        </div>

        {/* Name + verified badge */}
        <div className="flex items-center gap-1.5 mb-0.5">
          <span className="font-semibold text-[15px] text-[var(--ink)]">
            {siteConfig.name}
          </span>
          {/* Blue verified checkmark */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="#1d9bf0">
            <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91C2.88 9.33 2 10.57 2 12s.88 2.67 2.19 3.34c-.46 1.39-.2 2.9.81 3.91s2.52 1.27 3.91.81c.66 1.31 1.91 2.19 3.34 2.19s2.67-.88 3.33-2.19c1.4.46 2.91.2 3.92-.81s1.26-2.52.8-3.91C21.36 14.67 22.25 13.43 22.25 12zm-6.43-4.04l-3.56 5.44-2.07-2.47a.75.75 0 10-1.14.96l2.72 3.25a.75.75 0 001.09.07l4.12-6.3a.75.75 0 00-1.16-.95z" />
          </svg>
        </div>
        <p className="text-[var(--muted)] text-[13px]">{siteConfig.role}</p>
      </section>

      {/* Bio */}
      <section className="mb-3">
        <p className="text-[13px] text-[var(--ink)] leading-6 max-w-[608px]">
          {t.bio}
        </p>
      </section>

      {/* Email copy shortcut */}
      <section className="mb-12">
        <EmailCopy email={siteConfig.email} />
      </section>

      {/* EXPERIENCE */}
      <section className="mb-12">
        <p className="section-label">Experience</p>
        <p className="text-[13px] text-[var(--ink)] mb-6 leading-6">
          {t.experienceIntro}
        </p>
        <div className="space-y-6">
          {exps.map((exp, i) => (
            <div key={i} className="grid grid-cols-[100px_1fr] gap-3">
              <span
                className="text-[11px] text-[var(--muted)] pt-0.5 whitespace-nowrap"
                style={{ fontFamily: "var(--font-geist-mono), monospace" }}
              >
                {exp.period}
              </span>
              <div>
                <div className="flex items-center gap-1.5 mb-1">
                  <span
                    className="inline-flex items-center justify-center w-4 h-4 rounded-sm text-white text-[9px] font-bold flex-shrink-0"
                    style={{
                      background: ["#FF6B35", "#4CAF50", "#2196F3"][i] ?? "#888",
                    }}
                  >
                    {["A", "W", "Au"][i]}
                  </span>
                  <span className="text-[13px] font-medium text-[var(--ink)]">
                    {exp.company}
                  </span>
                </div>
                <p className="text-[12px] text-[var(--muted)] leading-5">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WORKFLOW */}
      <section className="mb-12">
        <p className="section-label">Workflow</p>
        <div className="flex flex-wrap gap-2">
          {workflowTools.map((tool) => (
            <div
              key={tool.name}
              title={tool.name}
              className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-sm select-none"
              style={{ background: tool.bg }}
            >
              {tool.emoji}
            </div>
          ))}
        </div>
      </section>

      {/* VENTURES */}
      <section className="mb-12">
        <p className="section-label">Ventures</p>
        <div className="space-y-0">
          {ventures.map((v, i) => (
            <a
              key={i}
              href={v.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 py-2.5 border-b border-[var(--border-light)] group hover:opacity-100"
            >
              <span
                className="w-8 h-8 rounded-lg flex items-center justify-center text-base flex-shrink-0"
                style={{ background: v.iconBg }}
              >
                {v.iconText}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-[13px] font-medium text-[var(--ink)]">
                  {v.name}
                </p>
                <p className="text-[11px] text-[var(--muted)]">
                  {v.description}
                </p>
              </div>
              <span className="text-[var(--muted)] group-hover:text-[var(--ink)] transition-colors">
                ↗
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* WRITING */}
      <section className="mb-12">
        <p className="section-label">Writing</p>
        <div className="space-y-0">
          {writings.map((w, i) => (
            <a
              key={i}
              href="#"
              className="flex items-center gap-3 py-2 border-b border-[var(--border-light)] group"
            >
              <span className="text-[11px] text-[var(--muted)] w-[72px] flex-shrink-0">
                {w.date}
              </span>
              <span className="flex-1 text-[13px] text-[var(--ink)]">
                {w.title}
              </span>
              <span className="flex items-center gap-1 text-[11px] text-[var(--muted)] flex-shrink-0">
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                {w.readTime}
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* PERSONAL */}
      <section className="mb-12">
        <p className="section-label">Personal</p>
        <p className="text-[13px] text-[var(--ink)] mb-4 leading-6">
          {t.personalText}
        </p>

        {/* Spotify widget */}
        <div className="spotify-widget mb-1">
          <div
            className="w-10 h-10 rounded-md flex items-center justify-center text-xl flex-shrink-0"
            style={{ background: personalSection.spotify.albumArtColor }}
          >
            {personalSection.spotify.albumArtEmoji}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-medium text-white truncate">
              {personalSection.spotify.trackName}
            </p>
            <p className="text-[11px] text-gray-400 truncate">
              {personalSection.spotify.artist}
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mb-6">
          <span className="text-[11px] text-[var(--muted)]">
            {t.mostReplayed}
          </span>
          <a
            href={personalSection.spotify.url}
            className="flex items-center gap-1 text-[11px] text-[var(--muted)]"
          >
            {t.listenOnSpotify}
            <svg width="12" height="12" viewBox="0 0 24 24" fill="#1DB954">
              <circle cx="12" cy="12" r="12" />
              <path
                d="M8 12.5a7.5 7.5 0 017.5 0M9.5 10a5.5 5.5 0 015.5 0M11 13.5a2.5 2.5 0 012.5 0"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
              />
            </svg>
          </a>
        </div>

        {/* Photo grid */}
        <div className="photo-grid mb-2">
          <div className="photo-item bg-stone-200" />
          <div className="photo-item bg-blue-100" />
          <div className="photo-item bg-amber-100" />
          <div className="photo-item bg-emerald-100" />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-[11px] text-[var(--muted)]">
            {t.shotWith}{" "}
            <a href="#" className="italic underline underline-offset-2">
              Leica
            </a>
          </span>
          <a
            href={personalSection.instagramUrl}
            className="flex items-center gap-1 text-[11px] text-[var(--muted)]"
          >
            {t.seeMoreOnIG} ↗
          </a>
        </div>
      </section>

      {/* Social links */}
      <section className="mb-16">
        <div className="space-y-0">
          {socialLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center py-2.5 border-b border-[var(--border-light)] group"
            >
              <span className="flex items-center gap-2 w-24 text-[13px] text-[var(--muted)]">
                <SocialIcon label={link.label} />
                {link.label}
              </span>
              <span className="flex-1" />
              <span className="flex items-center gap-1 text-[13px] text-[var(--muted)] group-hover:text-[var(--ink)]">
                {link.handle} ↗
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center pb-8">
        <div
          className="text-3xl font-light text-[var(--muted)] italic mb-4"
          style={{ fontFamily: "Georgia, 'Times New Roman', cursive" }}
        >
          {siteConfig.name}
        </div>
        <p className="text-[11px] text-[var(--muted)] mb-1">{t.builtUsing}</p>
        <p className="text-[11px] text-[var(--muted)] mb-8">
          &copy; {siteConfig.name.toLowerCase().replace(" ", "")} &middot;{" "}
          {t.allExperienced}
        </p>
        <div className="flex items-center justify-between text-[11px] text-[var(--muted)]">
          <span className="flex items-center gap-1">
            📍 {siteConfig.location.toUpperCase()}
          </span>
          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-[var(--border)] hover:border-[var(--ink)] hover:text-[var(--ink)] transition-colors text-[11px]"
            style={{ fontFamily: "var(--font-geist-mono), monospace" }}
          >
            {lang === "en" ? "CN" : "EN"}
            <span className="opacity-50">/</span>
            {lang === "en" ? "EN ✓" : "CN ✓"}
          </button>
        </div>
      </footer>
    </main>
  );
}

// ── Social icon helpers ────────────────────────────────────────────────────

function SocialIcon({ label }: { label: string }): JSX.Element | null {
  const icons: Record<string, JSX.Element> = {
    Email: (
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <polyline points="2,4 12,13 22,4" />
      </svg>
    ),
    "X.com": (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.736-8.85L1.254 2.25H8.08l4.259 5.63L18.244 2.25z" />
      </svg>
    ),
    GitHub: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
    LinkedIn: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  };
  return icons[label] ?? null;
}
