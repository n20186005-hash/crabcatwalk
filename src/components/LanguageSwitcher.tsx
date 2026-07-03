"use client";

import { useLang } from "./LangProvider";
import type { Locale } from "@/i18n/translations";

const LANG_LABELS: Record<Locale, string> = {
  zh: "中文",
  en: "EN",
  pt: "PT",
};

export function LanguageSwitcher() {
  const { locale } = useLang();
  return (
    <div className="lang-switcher">
      {(["zh", "en", "pt"] as Locale[]).map((l) => (
        <button
          key={l}
          className={`lang-btn ${locale === l ? "active" : ""}`}
          onClick={() => {
            if (l !== locale) {
              window.location.href = `/${l}${window.location.hash}`;
            }
          }}
          aria-label={`Switch to ${l}`}
        >
          {LANG_LABELS[l]}
        </button>
      ))}
    </div>
  );
}
