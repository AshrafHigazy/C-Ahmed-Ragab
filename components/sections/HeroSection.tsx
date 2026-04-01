// Section: Full-screen cinematic hero with tag, headline, quote, social links, and animated scroll pill
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SOCIAL_LINKS } from "../../lib/constants";

const SOCIAL_ITEMS = [
  { label: "INSTAGRAM", href: SOCIAL_LINKS.instagram },
  { label: "FACEBOOK", href: SOCIAL_LINKS.facebook },
  { label: "TIKTOK", href: SOCIAL_LINKS.tiktok },
];

export default function HeroSection() {
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
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" />
        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
      </div>

      {/* ── Centered Content ── */}
      <div className="relative z-10 flex flex-col items-center gap-5 px-4 text-center">
        {/* 1. Small tag */}
        <motion.p
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xs tracking-[0.35em] text-white/50 uppercase"
        >
          [ BE YOURSELF ]
        </motion.p>

        {/* 2. Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="font-bebas text-[clamp(4rem,14vw,10rem)] uppercase leading-none text-white"
          style={{ textShadow: "0 4px 32px rgba(0,0,0,0.6)" }}
        >
          AHMED RAGAB
          <br />
          THE BEST VERSION
        </motion.h1>

        {/* 3. Quote */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="max-w-xl text-sm italic text-white/75 md:text-base"
        >
          &ldquo;Just like I helped them change their lifestyle, live a healthy
          life, and become the best version of yourself.&rdquo;
        </motion.p>
      </div>

      {/* ── Social Links Bar (fixed at bottom) ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="absolute bottom-16 z-10 flex w-full items-center justify-center gap-10 px-4"
      >
        {SOCIAL_ITEMS.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 text-xs uppercase tracking-widest text-white/70 transition-colors duration-200 hover:text-white"
          >
            {label}
            <ArrowUpRight
              size={13}
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        ))}
      </motion.div>

      {/* ── Scroll Indicator (pill with animated dot) ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-5 z-10 flex flex-col items-center"
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
