// Section: Full-screen hero with headline, CTA, and scroll indicator
"use client";

import { useLang } from "../../context/LanguageContext";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const { t, dir } = useLang();

  return (
    <section id="hero" className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black px-4 text-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Coach Ahmed Ragab"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex max-w-4xl flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-full bg-gold px-4 py-1 text-sm font-bold uppercase tracking-wider text-black"
        >
          {t.heroBadge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="font-bebas text-6xl leading-none text-text sm:text-7xl md:text-8xl lg:text-9xl"
          style={{ textShadow: "0 4px 20px rgba(0,0,0,0.5)" }}
        >
          {t.heroHeadline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl text-lg text-muted md:text-xl"
        >
          {t.heroSubtitle}
        </motion.p>

        <motion.a
          href="#pricing"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-4 rounded-md bg-gold px-8 py-4 text-xl font-bold text-black transition-all hover:scale-105 hover:bg-brick hover:text-white"
        >
          {t.heroCTA}
        </motion.a>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 z-10 animate-bounce text-gold"
      >
        <ChevronDown size={36} />
      </motion.div>
    </section>
  );
}
