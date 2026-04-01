// UI: Fixed floating button to toggle between Arabic and English language modes
"use client";

import { useLang } from "../../context/LanguageContext";

export default function LanguageToggle() {
  const { lang, toggleLang } = useLang();

  return (
    <button
      onClick={toggleLang}
      className="fixed top-6 right-6 z-50 flex items-center gap-2 rounded-full bg-gold px-4 py-2 text-sm font-bold text-black shadow-lg transition-transform hover:scale-105 active:scale-95"
      aria-label="Toggle Language"
    >
      <span className={lang === "en" ? "font-black" : "opacity-80"}>EN</span>
      <span className="opacity-50">|</span>
      <span className={lang === "ar" ? "font-black" : "opacity-80"}>عربي</span>
    </button>
  );
}
