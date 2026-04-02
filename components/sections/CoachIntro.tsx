// Section: Coach bio with animated statistics counters
"use client";

import { motion } from "framer-motion";
import { useLang } from "../../context/LanguageContext";
import StatCounter from "../ui/StatCounter";

export default function CoachIntro() {
  const { t } = useLang();
  
  const titleString = t.introTitle || "WHO IS COACH RAGAB?";
  const words = titleString.split(" ");
  const firstPart = words.slice(0, 2).join(" ");
  const secondPart = words.slice(2).join(" ");

  return (
    <section 
      id="about" 
      className="overflow-hidden bg-black px-6 py-24 md:px-12 lg:py-32 border-s-4 border-gold"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex w-full flex-col justify-center"
        >
          <h2 className="font-heading font-bold uppercase leading-none text-white mb-8" style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}>
            <span className="block">{firstPart}</span>
            <span className="block text-gold">{secondPart}</span>
          </h2>

          <p className="mb-12 font-body text-base md:text-lg leading-relaxed text-white/70 max-w-[600px]">
            {t.introDesc}
          </p>

          <div className="flex flex-wrap gap-8 md:gap-16 [&_.text-muted]:!text-white">
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
