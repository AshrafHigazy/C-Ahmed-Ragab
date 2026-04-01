// Section: Displays the four deliverables included in every coaching package
"use client";

import { motion } from "framer-motion";
import { useLang } from "../../context/LanguageContext";

export default function WhatYouGet() {
  const { t } = useLang();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="what-you-get" className="relative overflow-hidden bg-black px-6 py-24 md:px-12 lg:py-32">
      {/* Subtle gold geometric pattern overlay (CSS implemented via background grid) */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#F5A623 1px, transparent 1px), linear-gradient(90deg, #F5A623 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black pointer-events-none" />

      <div className="relative mx-auto max-w-6xl z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <h2 className="font-bebas text-5xl text-gold md:text-6xl lg:text-7xl drop-shadow-[0_0_15px_rgba(245,166,35,0.3)]">
            {t.whatYouGetTitle}
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-8 md:grid-cols-2"
        >
          {t.whatYouGetCards.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-3xl bg-surface/80 p-8 backdrop-blur-sm border border-border/50 hover:border-gold/30 transition-colors duration-500"
            >
               {/* Hover glow effect */}
               <div className="absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-r from-gold/10 to-transparent pointer-events-none" />
               
               <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-black shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] border border-white/5 text-4xl group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_15px_rgba(245,166,35,0.2)]">
                 {feature.icon}
               </div>
               
               <h3 className="mb-4 text-2xl font-bold text-text group-hover:text-gold transition-colors duration-300">
                 {feature.title}
               </h3>
               
               <p className="text-lg leading-relaxed text-muted">
                 {feature.text}
               </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
