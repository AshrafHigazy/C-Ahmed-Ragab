// Section: Explains the online coaching process via animated icon cards
"use client";

import { motion } from "framer-motion";
import { useLang } from "../../context/LanguageContext";

export default function WhatIsCoaching() {
  const { t } = useLang();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="bg-surface px-6 py-24 md:px-12 lg:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="font-bebas text-4xl text-text md:text-5xl lg:text-6xl">
            {t.whatIsTitle}
          </h2>
          <div className="mx-auto mt-6 h-1 w-24 bg-gold rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col gap-6"
        >
          {t.whatIsCards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group flex items-center gap-6 rounded-2xl border border-border bg-black p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-[0_10px_30px_rgba(245,166,35,0.1)] md:px-10 md:py-8"
            >
              <div className="flex shrink-0 items-center justify-center rounded-xl bg-surface p-4 text-3xl md:text-4xl shadow-inner border border-white/5 transition-transform duration-300 group-hover:scale-110 group-hover:bg-gold/10">
                {card.icon}
              </div>
              <p className="text-lg leading-relaxed text-text md:text-xl">
                {card.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
