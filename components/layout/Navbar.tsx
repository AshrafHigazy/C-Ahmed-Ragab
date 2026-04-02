// Layout: Fixed navigation bar with logo, section links, and language toggle
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLang } from "../../context/LanguageContext";

const SECTION_IDS = ["hero", "about", "transformations", "services", "packages", "contact"];

export default function Navbar() {
  const { t, lang, toggleLang, dir } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);

  // Become more opaque on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section with IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-30% 0px -60% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { id: "hero",            label: t.nav.home },
    { id: "about",           label: t.nav.about },
    { id: "transformations", label: t.nav.transformations },
    { id: "services",        label: t.nav.services },
    { id: "packages",        label: t.nav.packages },
    { id: "contact",         label: t.nav.contact },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-gold/20 bg-black/80 shadow-[0_4px_30px_rgba(0,0,0,0.6)] backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[60px] max-w-7xl items-center justify-between px-6 md:px-10">

        {/* ── Logo ── */}
        <button
          onClick={() => scrollTo("hero")}
          className="flex flex-col items-center justify-center bg-black rounded-lg w-[120px] h-[50px] transition-transform hover:scale-105 active:scale-95"
          aria-label="Back to top"
        >
          <svg width="28" height="14" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-1">
            <rect x="2" y="4" width="20" height="4" fill="#CC2200" rx="1"/>
            <rect x="0" y="2" width="3" height="8" fill="#CC2200" rx="0.5"/>
            <rect x="21" y="2" width="3" height="8" fill="#CC2200" rx="0.5"/>
            <rect x="4" y="1" width="2" height="10" fill="#CC2200" rx="0.5"/>
            <rect x="18" y="1" width="2" height="10" fill="#CC2200" rx="0.5"/>
          </svg>
          <span className="font-body font-bold text-white text-[10px] tracking-[0.15em] uppercase leading-none">
            AHMED RAGAB
          </span>
        </button>

        {/* ── Desktop Nav Links ── */}
        <nav className="hidden items-center gap-7 md:flex" dir={dir} aria-label="Main navigation">
          {navLinks.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className={`relative pb-1 text-xs font-bold uppercase tracking-[0.15em] transition-colors duration-200 ${
                activeSection === id
                  ? "text-gold"
                  : "text-white/50 hover:text-white"
              }`}
            >
              {label}
              {/* Animated underline for active link */}
              {activeSection === id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full bg-gold"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* ── Right: Language Toggle + Hamburger ── */}
        <div className="flex items-center gap-3">
          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-2 text-xs font-bold transition-colors duration-200 hover:text-white"
            aria-label="Toggle language"
          >
            <span className={lang === "en" ? "text-white" : "text-white/40"}>EN</span>
            <span className="text-white/30">|</span>
            <span className={lang === "ar" ? "text-white" : "text-white/40"}>عربي</span>
          </button>

          {/* Hamburger — mobile only */}
          <button
            className="text-muted transition-colors hover:text-gold md:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={22} />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={22} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* ── Mobile Dropdown Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-gold/10 bg-black/98 backdrop-blur-md md:hidden"
          >
            <nav
              className="flex flex-col gap-1 px-6 py-4"
              dir={dir}
              aria-label="Mobile navigation"
            >
              {navLinks.map(({ id, label }, i) => (
                <motion.button
                  key={id}
                  initial={{ opacity: 0, x: dir === "rtl" ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.25 }}
                  onClick={() => scrollTo(id)}
                  className={`py-3 text-right text-base font-bold uppercase tracking-widest transition-colors duration-200 ${
                    dir === "ltr" ? "text-left" : "text-right"
                  } ${
                    activeSection === id
                      ? "text-gold"
                      : "text-muted hover:text-white"
                  }`}
                >
                  {label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
