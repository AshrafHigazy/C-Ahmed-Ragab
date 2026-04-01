// Section: Coach bio with profile image and animated statistics counters
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLang } from "../../context/LanguageContext";
import StatCounter from "../ui/StatCounter";

export default function CoachIntro() {
  const { t } = useLang();

  return (
    <section id="about" className="overflow-hidden bg-black px-6 py-24 md:px-12 lg:py-32">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 lg:flex-row lg:items-start lg:gap-20">
        
        {/* Left Column: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative w-full max-w-md shrink-0 lg:w-1/2"
        >
          <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl border-[3px] border-gold shadow-[0_0_30px_rgba(185,78,58,0.2)] transition-shadow hover:shadow-[0_0_40px_rgba(185,78,58,0.4)]">
            <Image
              src="/images/coach-profile.jpg"
              alt="Coach Ahmed Ragab"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle inner gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* Right Column: Text & Stats */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex w-full flex-col justify-center lg:w-1/2 lg:pt-8"
        >
          <div className="mb-2 text-sm font-bold tracking-widest text-brick uppercase">
            {t.introTitle}
          </div>
          <h2 className="font-bebas mb-6 text-5xl tracking-wide text-gold md:text-6xl">
            {t.introName}
          </h2>
          <p className="mb-12 text-lg leading-relaxed text-text opacity-90">
            {t.introDesc}
          </p>

          <div className="grid grid-cols-2 gap-x-4 gap-y-8 rounded-2xl bg-surface/50 p-6 border border-border">
            <StatCounter endValue={t.stats.clients.count} label={t.stats.clients.label} />
            <StatCounter endValue={t.stats.experience.count} label={t.stats.experience.label} />
            <StatCounter endValue={t.stats.support.count} label={t.stats.support.label} />
            <StatCounter endValue={t.stats.packages.count} label={t.stats.packages.label} />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
