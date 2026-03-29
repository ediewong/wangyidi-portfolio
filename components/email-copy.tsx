"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/components/language-context";
import { translations } from "@/lib/i18n";

export function EmailCopy({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const { lang } = useLanguage();
  const t = translations[lang];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") return;
      if (e.key === "c" && !e.metaKey && !e.ctrlKey && !e.altKey) {
        navigator.clipboard.writeText(email).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        });
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [email]);

  return (
    <p className="flex items-center gap-2 text-[var(--muted)] text-[13px]">
      {t.pressC} <kbd className="kbd">C</kbd>{" "}
      {copied ? (
        <span className="text-[var(--ink)]">{t.copied}</span>
      ) : (
        t.toCopyEmail
      )}
    </p>
  );
}
