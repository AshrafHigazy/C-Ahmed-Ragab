// Section: Full-screen cinematic hero with tag, animated headline, quote, social links, and scroll pill
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useLang } from "../../context/LanguageContext";
import { SOCIAL_LINKS } from "../../lib/constants";

const SOCIAL_ITEMS = [
  { label: "INSTAGRAM", href: SOCIAL_LINKS.instagram },
  { label: "FACEBOOK", href: SOCIAL_LINKS.facebook },
  { label: "TIKTOK", href: SOCIAL_LINKS.tiktok },
];

const CYCLING_WORDS = {
  en: ["THE BEST VERSION", "OF YOURSELF"],
  ar: ["احسن نسخة", "من نفسك"],
};

const HEADING_STYLE: React.CSSProperties = {
  fontFamily: "'Bebas Neue', 'Impact', sans-serif",
  letterSpacing: "0.02em",
  textShadow: "0 4px 32px rgba(0,0,0,0.7)",
};

export default function HeroSection() {
  const { t, lang, dir } = useLang();
  const words = CYCLING_WORDS[lang];
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [words.length]);

  // Reset index on language switch to avoid out-of-bounds reads
  useEffect(() => {
    setWordIndex(0);
  }, [lang]);

  return (
    <section
      id="hero"
      className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-black"
    >
      {/* ── Background Image ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Coach Ahmed Ragab"
          fill
          className="object-cover object-top"
          priority
        />
        {/* Primary dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90" />
      </div>

      {/* ── Centered Content ── */}
      <div className="relative z-10 flex flex-col items-center gap-5 px-4 text-center">
        {/* 1. Small tag — red/brick */}
        <motion.p
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xs uppercase tracking-[0.35em] text-brick"
        >
          {t.heroTag}
        </motion.p>

        {/* 2. Main heading — name static + white, cycling word muted */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-[clamp(5rem,16vw,12rem)] uppercase leading-none"
          style={HEADING_STYLE}
        >
          {/* Static name — full white */}
          <span className="block text-white">{t.heroName}</span>

          {/* Animated cycling word — muted white */}
          <span className="relative block min-h-[1em] text-white/60">
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="inline-block"
              >
                {words[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>

        {/* 3. Quote */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="max-w-xl text-sm italic text-white/70 md:text-base"
        >
          &ldquo;{t.heroQuote}&rdquo;
        </motion.p>
      </div>

      {/* ── Social Links — bottom-left (or bottom-right in RTL) ── */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className={`absolute bottom-8 z-10 flex items-center gap-6 ${
          dir === "rtl" ? "right-8" : "left-8"
        }`}
      >
        {SOCIAL_ITEMS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1 text-xs uppercase tracking-widest text-white/60 transition-colors duration-200 hover:text-white"
          >
            {label}
            <ArrowUpRight
              size={12}
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        ))}
      </motion.div>

      {/* ── Scroll Indicator (pill with animated dot) — bottom-center ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/30 p-1.5">
          <motion.div
            className="h-2 w-2 rounded-full bg-white"
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
