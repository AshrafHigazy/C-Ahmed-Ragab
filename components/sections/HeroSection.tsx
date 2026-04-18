// Section: Raw athletic hero — full-bleed image, grunge texture, giant type, social links + mouse scroll indicator
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
  fontFamily: "var(--font-barlow-condensed), 'Oswald', sans-serif",
  fontWeight: 800,
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

  useEffect(() => {
    setWordIndex(0);
  }, [lang]);

  const isRtl = dir === "rtl";

  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black text-center pt-24 px-8 md:px-16"
    >
      {/* ── Full-bleed Background Image ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Coach Ahmed Ragab"
          fill
          className="object-cover object-top"
          priority
          quality={95}
        />

        {/* Minimal vignette-only overlay — edges only, center stays clear */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)",
          }}
        />
        {/* Bottom fade to black for text legibility */}
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        {/* Top fade for navbar breathing room */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/40 to-transparent" />

        {/* ── Grunge / scratch texture overlay ── */}
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.13] mix-blend-overlay pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <filter id="grunge">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65"
              numOctaves="3"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
            <feBlend in="SourceGraphic" mode="multiply" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grunge)" />

          {/* Hand-drawn scratch lines */}
          <g stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity="0.7">
            <line x1="12%" y1="5%" x2="18%" y2="45%" />
            <line x1="14%" y1="8%" x2="19%" y2="38%" />
            <line x1="82%" y1="3%" x2="88%" y2="52%" />
            <line x1="85%" y1="10%" x2="90%" y2="44%" />
            <line x1="6%" y1="55%" x2="10%" y2="90%" />
            <line x1="91%" y1="50%" x2="94%" y2="85%" />
            <line x1="45%" y1="2%" x2="43%" y2="20%" />
            <line x1="60%" y1="80%" x2="62%" y2="98%" />
          </g>
        </svg>
      </div>

      {/* ── Main Content — tightly grouped vertical block ── */}
      <div className="relative z-10 flex w-full max-w-5xl flex-col items-center justify-center">
        {/* 1. Small tag */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="mb-2 text-[13px] uppercase tracking-[0.3em] font-bold text-orange"
        >
          {t.heroTag}
        </motion.p>

        {/* 2. Giant heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-[clamp(20px,12vw,100px)] uppercase leading-[0.85] text-white flex flex-col items-center"
          style={HEADING_STYLE}
        >
          <span className="block drop-shadow-[0_2px_20px_rgba(0,0,0,0.9)]">
            {t.heroName}
          </span>

          <span className="relative block min-h-[1.1em] stroke-text drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)] mt-1">
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
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
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="mt-2 max-w-[500px] text-sm italic leading-relaxed text-white/70 md:text-base font-medium"
        >
          &ldquo;{t.heroQuote}&rdquo;
        </motion.p>

        {/* 4. Social Links — tight directly beneath the quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className={`mt-6 flex items-center gap-6 ${isRtl ? "flex-row-reverse" : "flex-row"}`}
        >
          {SOCIAL_ITEMS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-[6px] text-[0.7rem] font-bold uppercase tracking-[0.15em] text-white/60 transition-all duration-300 hover:text-orange"
            >
              {label}
              <ArrowUpRight
                size={12}
                className={`transition-transform duration-300 ${
                  isRtl
                    ? "group-hover:-translate-y-1 group-hover:-translate-x-1"
                    : "group-hover:-translate-y-1 group-hover:translate-x-1"
                }`}
              />
            </a>
          ))}
        </motion.div>
      </div>

      {/* ── Mouse Scroll Indicator — bottom-right (or bottom-left in RTL) ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.8 }}
        className={`absolute bottom-8 z-10 ${isRtl ? "left-8" : "right-8"}`}
        aria-label="Scroll down"
      >
        {/* Mouse SVG outline */}
        <svg
          width="24"
          height="38"
          viewBox="0 0 24 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="opacity-50"
        >
          <rect
            x="1"
            y="1"
            width="22"
            height="36"
            rx="11"
            stroke="white"
            strokeWidth="1.5"
          />
          <line x1="12" y1="1" x2="12" y2="14" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />
          {/* Animated scroll dot */}
          <motion.circle
            cx="12"
            cy="9"
            r="3"
            fill="white"
            animate={{ cy: [9, 22, 9] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      </motion.div>
    </section>
  );
}
