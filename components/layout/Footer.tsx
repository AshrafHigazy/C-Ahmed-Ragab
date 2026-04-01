// Layout: Page footer with brand name, copyright text, and language toggle button
"use client";

import { useLang } from "../../context/LanguageContext";

export default function Footer() {
  const { t, toggleLang, lang } = useLang();

  return (
    <footer className="border-t border-border bg-black py-10 px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        
        <div className="flex flex-col items-center md:items-start">
          <span className="font-bebas text-3xl tracking-widest text-gold drop-shadow-sm mb-2">
            COACH RAGAB
          </span>
          <p className="text-sm text-muted">
            {t.footerText}
          </p>
        </div>

        <button
          onClick={toggleLang}
          className="rounded-full border border-border px-6 py-2 text-sm font-bold text-muted transition-colors hover:border-gold hover:text-gold"
          aria-label="Toggle Language"
        >
          {lang === "en" ? "تبديل إلى العربية" : "Switch to English"}
        </button>
        
      </div>
    </footer>
  );
}
